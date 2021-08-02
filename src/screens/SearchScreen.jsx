import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { colors, sizes } from '../theme';
import { SearchBar, Spinner, ImagesList } from '../components';

export const IMAGES = ['https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Rotating_earth_%28large%29.gif/274px-Rotating_earth_%28large%29.gif', 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'];

const SearchScreen = () => {
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
            <ImagesList images={IMAGES} />
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
    borderRadius: 8,
    marginRight: sizes.sideSpacing,
    marginBottom: sizes.sideSpacing,
  },
  imagesContainer: {
    marginTop: -16,
    flex: 1,
  },
});

export { SearchScreen };
