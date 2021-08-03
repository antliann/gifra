import React, { useEffect, useState, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from 'use-debounce';

import { colors, sizes } from '../theme';
import { SearchBar, Spinner, ImagesList } from '../components';
import { searchGifs } from '../store';

const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearchValue] = useDebounce(searchValue, 2000);

  const dispatch = useDispatch();
  const {
    searchResults, isPending, isFulfilled, isRejected,
  } = useSelector((state) => state);

  const performSearch = () => dispatch(searchGifs({ query: debouncedSearchValue }));

  useEffect(() => {
    if (searchValue) performSearch();
  }, [debouncedSearchValue]);

  const gifsLinksArray = useMemo(() => (
    searchResults?.data || []
  ), [searchResults]);

  return (
    <View style={styles.container}>
      <SearchBar value={searchValue} setTextValue={setSearchValue} />
      {debouncedSearchValue !== searchValue || isPending ? (
        <View style={styles.spinnerContainer}>
          <Spinner />
        </View>
      )
        : (
          <View style={styles.imagesContainer}>
            <ImagesList onRefresh={performSearch} images={gifsLinksArray} keyPrefix="search" withHeaderSpacing />
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
