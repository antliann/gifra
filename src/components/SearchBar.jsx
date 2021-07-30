import React from 'react';
import { func, string } from 'prop-types';
import {
  StyleSheet, Text, TextInput, TouchableOpacity, View,
} from 'react-native';

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
          <TouchableOpacity onPress={clearInput}>
            <ClearIcon />
          </TouchableOpacity>
        )}
      </View>
      {!value.length || (
        <TouchableOpacity onPress={clearInput} style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
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
  cancelButton: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingLeft: 14.5,
    paddingRight: 14.5,
    marginLeft: 8,
    borderRadius: 8,
  },
  cancelButtonText: {
    fontFamily: 'SFPro-Bold',
    fontSize: 16,
  },
});

export { SearchBar };
