import React, { useMemo } from 'react';
import {
  StyleSheet, View, Text, Dimensions, ScrollView,
} from 'react-native';
import Image from 'react-native-scalable-image';
import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { Button, ImagesList, UserBlock } from '../components';
import { colors, sizes } from '../theme';

const DetailsScreen = ({ navigation }) => {
  const { params } = useRoute();

  const navigateBack = () => navigation.goBack();

  const { searchResults } = useSelector((state) => state);

  const relatedGifsLinksArray = useMemo(() => (
    searchResults?.data?.map(
      (item) => item.id !== params.gifId && item?.images?.preview_gif?.url,
    ) || []
  ), [searchResults]);

  return (
    <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
      <View style={styles.backButtonContainer}>
        <Button.GoBack onPress={navigateBack} />
      </View>
      <Image
        width={Dimensions.get('window').width - sizes.sideSpacing * 2}
        source={{ uri: searchResults?.data[params.gifIndex].images?.preview_gif?.url }}
        style={styles.image}
      />
      <View style={styles.userContainer}>
        <UserBlock />
      </View>
      <View style={styles.relatedTextContainer}>
        <Text style={styles.relatedText}>
          Related GIFs
        </Text>
      </View>
      <ImagesList images={relatedGifsLinksArray} keyPrefix="details" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    padding: sizes.sideSpacing,
  },
  backButtonContainer: {
    position: 'absolute',
    paddingTop: 17,
    left: 17,
    zIndex: 1,
  },
  image: {
    borderRadius: 24,
    overlayColor: colors.black,
  },
  userContainer: {
    marginTop: 16,
    marginBottom: 17,
  },
  relatedText: {
    color: colors.white,
    fontFamily: 'SFPro-SemiBold',
    fontSize: 17,
    lineHeight: 22,
  },
  relatedTextContainer: {
    paddingTop: sizes.sideSpacing,
    paddingBottom: sizes.sideSpacing,
  },
});

export { DetailsScreen };
