import React, { useState } from 'react';
import {
  StyleSheet, View,
} from 'react-native';
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
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
    fontFamily: 'SFPro',
  },
});

export { SearchScreen };
