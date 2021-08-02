import React from 'react';
import {
  Dimensions, TouchableWithoutFeedback, View, StyleSheet,
} from 'react-native';
import Image from 'react-native-scalable-image';
import MasonryList from '@react-native-seoul/masonry-list';
import { arrayOf, bool, string } from 'prop-types';
import { useNavigation } from '@react-navigation/native';

import { sizes } from '../theme';

const IMAGES_PER_ROW = 2;
const IMAGE_WIDTH = (Dimensions.get('window').width
  - sizes.sideSpacing * (IMAGES_PER_ROW + 1))
  / IMAGES_PER_ROW;

const ImagesList = ({ images, keyPrefix, withHeaderSpacing }) => {
  const navigation = useNavigation();

  return (
    <MasonryList
      showsVerticalScrollIndicator={false}
      numColumns={IMAGES_PER_ROW}
      data={images}
      keyPrefix={keyPrefix}
      ListHeaderComponent={withHeaderSpacing && <View style={styles.spaceBlock} />}
      ListFooterComponent={<View style={styles.spaceBlock} />}
      renderItem={({ item, i }) => {
        const navigateToDetailsScreen = () => navigation.navigate('DetailsScreen');
        return (
          <TouchableWithoutFeedback onPress={navigateToDetailsScreen} key={keyPrefix + i + item}>
            <Image width={IMAGE_WIDTH} source={{ uri: item }} style={styles.image} />
          </TouchableWithoutFeedback>
        );
      }}
    />
  );
};

ImagesList.propTypes = {
  images: arrayOf(string).isRequired,
  keyPrefix: string.isRequired,
  withHeaderSpacing: bool,
};

ImagesList.defaultProps = {
  withHeaderSpacing: false,
};

const styles = StyleSheet.create({
  spaceBlock: {
    height: 32,
  },
  image: {
    borderRadius: 16,
  },
});

export { ImagesList };
