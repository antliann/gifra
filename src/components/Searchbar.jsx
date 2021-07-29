import React from 'react';
import { func, string } from 'prop-types';

import { StyleSheet, TextInput } from 'react-native';

const Searchbar = ({ onChangeText, value }) => (
  <TextInput
    style={styles.input}
    onChangeText={onChangeText}
    value={value}
    placeholder="Search GIPHY"
    placeholderTextColor="rgba(255, 255, 255, 0.6)"
  />
);

Searchbar.propTypes = {
  onChangeText: func.isRequired,
  value: string.isRequired,
};

const styles = StyleSheet.create({
  input: {
    color: 'rgba(255, 255, 255, 0.87)',
  },
});

export { Searchbar };
