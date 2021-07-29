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
    fontSize: 17,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.12)',
    borderRadius: 16,
    marginLeft: 8,
    marginRight: 8,
  },
});

export { Searchbar };
