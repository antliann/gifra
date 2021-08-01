import React, { useState } from 'react';
import {
  Image,
  StyleSheet, TouchableWithoutFeedback, View,
} from 'react-native';

import { colors, sizes } from '../theme';
import { SearchBar, Spinner } from '../components';

const SearchScreen = ({ navigation }) => {
  const navigateToDetailsScreen = () => navigation.navigate('DetailsScreen');
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={styles.container}>
      <SearchBar value={searchValue} setTextValue={setSearchValue} />
      {isLoading ? (
        <View style={styles.spinnerContainer}>
          <Spinner />
        </View>
      )
        : (
          <TouchableWithoutFeedback onPress={navigateToDetailsScreen}>
            <Image source={require('../assets/icons/image.png')} />
          </TouchableWithoutFeedback>
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
});

export { SearchScreen };
