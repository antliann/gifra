import React, { useState } from 'react';
import {
  StyleSheet, View,
} from 'react-native';

import { colors } from '../theme';
import { SearchBar } from '../components';

const SearchScreen = () => {
  // const navigateToDetailsScreen = () => navigation.navigate('DetailsScreen');
  const [searchValue, setSearchValue] = useState('');

  return (
    <View style={styles.container}>
      <SearchBar value={searchValue} setTextValue={setSearchValue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  text: {
    color: colors.white,
    fontFamily: 'SFPro',
  },
});

export { SearchScreen };
