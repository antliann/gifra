import React, { useState } from 'react';
import {
  Image, StyleSheet, TouchableWithoutFeedback, View, FlatList, Dimensions,
} from 'react-native';

import { colors, sizes } from '../theme';
import { SearchBar, Spinner } from '../components';

const IMAGES = ['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'];

const IMAGES_PER_ROW = 2;
const IMAGES_SIDE = (Dimensions.get('window').width - sizes.sideSpacing * 3) / IMAGES_PER_ROW;

const SearchScreen = ({ navigation }) => {
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.container}>
      <SearchBar value={searchValue} setTextValue={setSearchValue} />
      {isLoading ? (
        <View style={styles.spinnerContainer}>
          <Spinner />
        </View>
      )
        : (
          <View style={styles.imagesContainer}>
            <FlatList
              showsVerticalScrollIndicator={false}
              numColumns={2}
              data={IMAGES}
              keyExtractor={(item, index) => index}
              ListHeaderComponent={<View style={styles.topSpace} />}
              // ListFooterComponent={<FooterSpace />}
              renderItem={({ item }) => {
                const navigateToDetailsScreen = () => navigation.navigate('DetailsScreen');
                return (
                  <TouchableWithoutFeedback onPress={navigateToDetailsScreen}>
                    <Image source={{ uri: item }} style={styles.image} />
                  </TouchableWithoutFeedback>
                );
              }}
            />
          </View>
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    padding: sizes.sideSpacing,
  },
  spinnerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: IMAGES_SIDE,
    height: IMAGES_SIDE,
    borderRadius: 8,
    marginRight: sizes.sideSpacing,
    marginBottom: sizes.sideSpacing,
  },
  imagesContainer: {
    marginTop: -16,
    flex: 1,
  },
  topSpace: {
    height: 32,
  },
});

export { SearchScreen };
