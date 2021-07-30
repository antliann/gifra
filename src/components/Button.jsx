import React from 'react';
import {
  Text, StyleSheet, TouchableHighlight,
} from 'react-native';
import { func } from 'prop-types';

import GoBackIcon from '../assets/icons/go-back.svg';

const Cancel = ({ onPress }) => (
  <TouchableHighlight
    onPress={onPress}
    underlayColor="rgba(23, 24, 26, 0.04)"
    style={styles.cancelButton}
    activeOpacity={1}
  >
    <Text style={styles.cancelButtonText}>Cancel</Text>
  </TouchableHighlight>
);

const GoBack = ({ onPress }) => (
  <TouchableHighlight
    onPress={onPress}
    underlayColor="rgba(23, 24, 26, 0.04)"
    style={styles.goBackButton}
    activeOpacity={1}
  >
    <GoBackIcon />
  </TouchableHighlight>
);

Cancel.propTypes = {
  onPress: func.isRequired,
};

GoBack.propTypes = {
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
  goBackButton: {
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingLeft: 10,
    width: 48,
    height: 48,
    justifyContent: 'center',
  },
});

export const Button = { Cancel, GoBack };
