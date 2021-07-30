import React from 'react';
import { func, string } from 'prop-types';
import {
  StyleSheet, TextInput, TouchableOpacity, View,
} from 'react-native';
import { Button } from './Button';

import SearchIcon from '../assets/icons/search.svg';
import ClearIcon from '../assets/icons/clear-input.svg';

const SearchBar = ({ setTextValue, value }) => {
  const clearInput = () => setTextValue('');

  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.inputContainer}>
        <SearchIcon />
        <TextInput
          style={styles.inputText}
          onChangeText={setTextValue}
          value={value}
          placeholder="Search GIPHY"
          placeholderTextColor="rgba(255, 255, 255, 0.6)"
        />
        {!value.length || (
          <TouchableOpacity onPress={clearInput} activeOpacity={1}>
            <ClearIcon />
          </TouchableOpacity>
        )}
      </View>
      {!value.length || (
        <Button.Cancel onPress={clearInput} />
      )}
    </View>
  );
};

SearchBar.propTypes = {
  setTextValue: func.isRequired,
  value: string.isRequired,
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    margin: 8,
  },
  inputContainer: {
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.12)',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  inputText: {
    color: 'rgba(255, 255, 255, 0.87)',
    fontSize: 17,
    marginLeft: 8,
    marginRight: 8,
    flex: 1,
    fontFamily: 'SFPro',
  },
});

export { SearchBar };
