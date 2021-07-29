import React from 'react';
import { func, string } from 'prop-types';
import { StyleSheet, TextInput, View } from 'react-native';

import SearchIcon from '../assets/icons/search.svg';

const Searchbar = ({ onChangeText, value }) => (
  <View style={styles.inputContainer}>
    <SearchIcon />
    <TextInput
      style={styles.inputText}
      onChangeText={onChangeText}
      value={value}
      placeholder="Search GIPHY"
      placeholderTextColor="rgba(255, 255, 255, 0.6)"
    />
  </View>
);

Searchbar.propTypes = {
  onChangeText: func.isRequired,
  value: string.isRequired,
};

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.12)',
    borderRadius: 16,
    margin: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    color: 'rgba(255, 255, 255, 0.87)',
    fontSize: 17,
    marginLeft: 8,
    flex: 1,
    fontFamily: 'SFPro',
  },
});

export { Searchbar };
