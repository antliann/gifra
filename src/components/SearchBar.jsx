import React from 'react';
import { func, string } from 'prop-types';
import {
  StyleSheet, TextInput, TouchableWithoutFeedback, View,
} from 'react-native';

import { Button } from './Button';
import { colors, spacing } from '../theme';

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
          placeholderTextColor={colors.translucentWhite}
          selectionColor={colors.koromiko}
        />
        {!value.length || (
          <TouchableWithoutFeedback onPress={clearInput}>
            <ClearIcon />
          </TouchableWithoutFeedback>
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
  },
  inputContainer: {
    padding: 16,
    borderWidth: 1,
    borderColor: colors.highTranslucentWhite,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.dark,
  },
  inputText: {
    color: colors.lowTranslucentWhite,
    fontSize: 17,
    marginLeft: spacing.sidesPadding,
    marginRight: spacing.sidesPadding,
    flex: 1,
    fontFamily: 'SFPro',
  },
});

export { SearchBar };
