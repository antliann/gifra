import React from 'react';
import {
  Dimensions, TouchableWithoutFeedback, View, StyleSheet,
} from 'react-native';
import Image from 'react-native-scalable-image';
import MasonryList from '@react-native-seoul/masonry-list';
import {
  arrayOf, bool, func, string,
} from 'prop-types';
import { useNavigation } from '@react-navigation/native';

import { colors, sizes } from '../theme';

const IMAGES_PER_ROW = 2;
const IMAGE_WIDTH = (Dimensions.get('window').width
  - sizes.sideSpacing * (IMAGES_PER_ROW + 1))
  / IMAGES_PER_ROW;

const ImagesList = ({
  images, keyPrefix, withHeaderSpacing, onRefresh,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.listContainer}>
      <MasonryList
        onRefresh={onRefresh}
        showsVerticalScrollIndicator={false}
        numColumns={IMAGES_PER_ROW}
        data={images}
        keyPrefix={keyPrefix}
        ListHeaderComponent={withHeaderSpacing && <View style={styles.spaceBlock} />}
        ListFooterComponent={<View style={styles.spaceBlock} />}
        renderItem={({ item, i }) => {
          const navigateToDetailsScreen = () => navigation.navigate('DetailsScreen', {
            id: 1,
            imageLink: item,
          });
          return (
            <View style={styles.imageContainer} key={keyPrefix + i + item}>
              <TouchableWithoutFeedback onPress={navigateToDetailsScreen}>
                <Image width={IMAGE_WIDTH} source={{ uri: item }} style={styles.image} />
              </TouchableWithoutFeedback>
            </View>
          );
        }}
      />
    </View>
  );
};

ImagesList.propTypes = {
  images: arrayOf(string).isRequired,
  keyPrefix: string.isRequired,
  withHeaderSpacing: bool,
  onRefresh: func,
};

ImagesList.defaultProps = {
  withHeaderSpacing: false,
  onRefresh: null,
};

const styles = StyleSheet.create({
  listContainer: {
    marginLeft: -sizes.sideSpacing,
  },
  spaceBlock: {
    height: 32,
  },
  image: {
    borderRadius: 16,
    overlayColor: colors.black,
  },
  imageContainer: {
    marginBottom: sizes.sideSpacing,
    marginLeft: sizes.sideSpacing,
  },
});

export { ImagesList };
