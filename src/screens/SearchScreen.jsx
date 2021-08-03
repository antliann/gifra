import React, { useEffect, useState, useMemo } from 'react';
import {
  StyleSheet, View, Text, Keyboard,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from 'use-debounce';

import { colors, sizes } from '../theme';
import { SearchBar, Spinner, ImagesList } from '../components';
import { searchGifs } from '../store';

const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearchValue] = useDebounce(searchValue, 2000, { leading: !searchValue });

  const dispatch = useDispatch();
  const {
    searchResults, isPending, isFulfilled, isRejected,
  } = useSelector((state) => state);

  const gifsLinksArray = useMemo(() => (
    searchResults?.data || []
  ), [searchResults]);

  const performSearch = () => dispatch(searchGifs({ q: debouncedSearchValue }));

  useEffect(() => {
    if (searchValue) performSearch();
  }, [debouncedSearchValue]);

  useEffect(() => {
    if (isRejected || !gifsLinksArray.length) Keyboard.dismiss();
  }, [searchResults]);

  const shouldSpinnerBeShown = debouncedSearchValue !== searchValue || isPending;

  const renderResultsArea = () => {
    switch (true) {
      case shouldSpinnerBeShown:
        return (
          <View style={styles.centeringContainer}>
            <Spinner />
          </View>
        );
      case !searchValue:
        return (
          <View style={styles.centeringContainer}>
            <Text style={styles.infoText}>
              Please, enter your search query
            </Text>
          </View>
        );
      case isRejected:
        return (
          <View style={styles.centeringContainer}>
            <Text style={styles.infoText}>
              There was an error processing your request
            </Text>
          </View>
        );
      case isFulfilled && !searchResults.pagination.total_count:
        return (
          <View style={styles.centeringContainer}>
            <Text style={styles.infoText}>
              No results for <Text style={styles.boldText}>“{debouncedSearchValue}”</Text>
            </Text>
          </View>
        );
      case isFulfilled && !!searchResults.pagination.total_count:
        return (
          <View style={styles.imagesContainer}>
            <ImagesList
              onRefresh={performSearch}
              images={gifsLinksArray}
              keyPrefix="search"
              withHeaderSpacing
            />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar value={searchValue} setTextValue={setSearchValue} />
      {renderResultsArea()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    padding: sizes.sideSpacing,
  },
  centeringContainer: {
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
  infoText: {
    color: colors.white,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
  },
  boldText: {
    fontFamily: 'Inter-Bold',
  },
});

export { SearchScreen };
