import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { func } from 'prop-types';

const Cancel = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.cancelButton}>
    <Text style={styles.cancelButtonText}>Cancel</Text>
  </TouchableOpacity>
);

Cancel.propTypes = {
  onPress: func.isRequired,
};

const styles = StyleSheet.create({
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

export const Button = { Cancel };
