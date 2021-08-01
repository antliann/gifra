import React from 'react';
import {
  Dimensions, TouchableWithoutFeedback, View, StyleSheet,
} from 'react-native';
import Image from 'react-native-scalable-image';
import MasonryList from '@react-native-seoul/masonry-list';
import { arrayOf, string } from 'prop-types';
import { useNavigation } from '@react-navigation/native';

import { sizes } from '../theme';

const IMAGES_PER_ROW = 2;
const IMAGE_WIDTH = (Dimensions.get('window').width
  - sizes.sideSpacing * (IMAGES_PER_ROW + 1))
  / IMAGES_PER_ROW;

const ImagesList = ({ images }) => {
  const navigation = useNavigation();

  return (
    <MasonryList
      showsVerticalScrollIndicator={false}
      numColumns={IMAGES_PER_ROW}
      data={images}
      keyExtractor={(item, index) => index}
      ListHeaderComponent={<View style={styles.topSpace} />}
      // ListFooterComponent={<FooterSpace />}
      renderItem={({ item }) => {
        const navigateToDetailsScreen = () => navigation.navigate('DetailsScreen');
        return (
          <TouchableWithoutFeedback onPress={navigateToDetailsScreen}>
            <Image width={IMAGE_WIDTH} source={{ uri: item }} style={styles.image} />
          </TouchableWithoutFeedback>
        );
      }}
    />
  );
};

ImagesList.propTypes = {
  images: arrayOf(string).isRequired,
};

const styles = StyleSheet.create({
  topSpace: {
    height: 32,
  },
});

export { ImagesList };
