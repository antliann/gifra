import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { colors, sizes } from '../theme';
import { SearchBar, Spinner, ImagesList } from '../components';

export const IMAGES = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Rotating_earth_%28large%29.gif/274px-Rotating_earth_%28large%29.gif',
  'https://techcrunch.com/wp-content/uploads/2014/06/surprised-andy.gif',
  'https://compote.slate.com/images/697b023b-64a5-49a0-8059-27b963453fb1.gif',
  'https://static.wixstatic.com/media/4cbe8d_f1ed2800a49649848102c68fc5a66e53~mv2.gif'];

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
            <ImagesList images={IMAGES} keyPrefix="search" withHeaderSpacing />
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
