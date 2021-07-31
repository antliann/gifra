import React from 'react';
import {
  StyleSheet, View, Text, Dimensions,
} from 'react-native';
import Image from 'react-native-scalable-image';

import { Button, UserBlock } from '../components';
import { colors, sizes } from '../theme';

const DetailsScreen = ({ navigation }) => {
  const navigateBack = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <Button.GoBack onPress={navigateBack} />
      </View>
      <Image
        width={Dimensions.get('window').width - sizes.sideSpacing * 2}
        source={require('../assets/icons/image.png')}
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
    </View>
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
    top: 17,
    left: 17,
    zIndex: 1,
  },
  image: {
    borderRadius: 24,
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
