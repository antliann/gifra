import React from 'react';
import {
  Text, StyleSheet, TouchableHighlight,
} from 'react-native';
import { func } from 'prop-types';

import GoBackIcon from '../assets/icons/go-back.svg';
import { colors, sizes } from '../theme';

const Cancel = ({ onPress }) => (
  <TouchableHighlight
    onPress={onPress}
    underlayColor={colors.translucentGrey}
    style={styles.cancelButton}
    activeOpacity={1}
  >
    <Text style={styles.cancelButtonText}>Cancel</Text>
  </TouchableHighlight>
);

const GoBack = ({ onPress }) => (
  <TouchableHighlight
    onPress={onPress}
    underlayColor={colors.translucentGrey}
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
    backgroundColor: colors.white,
    paddingLeft: 14.5,
    paddingRight: 14.5,
    marginLeft: sizes.sideSpacing,
    borderRadius: 8,
  },
  cancelButtonText: {
    fontFamily: 'SFPro-Bold',
    fontSize: 16,
    color: colors.darkGrey,
  },
  goBackButton: {
    backgroundColor: colors.white,
    borderRadius: sizes.roundEntityRadius,
    width: sizes.roundEntitySize,
    height: sizes.roundEntitySize,
    paddingLeft: 10,
    justifyContent: 'center',
  },
});

export const Button = { Cancel, GoBack };
