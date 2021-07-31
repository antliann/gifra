import React, { useState } from 'react';
import {
  Image,
  StyleSheet, TouchableWithoutFeedback, View,
} from 'react-native';

import { colors, spacing } from '../theme';
import { SearchBar } from '../components';

const SearchScreen = ({ navigation }) => {
  const navigateToDetailsScreen = () => navigation.navigate('DetailsScreen');
  const [searchValue, setSearchValue] = useState('');

  return (
    <View style={styles.container}>
      <SearchBar value={searchValue} setTextValue={setSearchValue} />
      <TouchableWithoutFeedback onPress={navigateToDetailsScreen}>
        <Image source={require('../assets/icons/image.png')} />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    padding: spacing.sidesPadding,
  },
  text: {
    color: colors.white,
    fontFamily: 'SFPro',
  },
});

export { SearchScreen };
