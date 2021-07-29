import React, { useState } from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { Searchbar } from '../components';

const SearchScreen = () => {
  // const navigateToDetailsScreen = () => navigation.navigate('DetailsScreen');
  const [searchValue, setSearchValue] = useState('');

  return (
    <View style={styles.container}>
      <Searchbar value={searchValue} onChangeText={setSearchValue} />
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
