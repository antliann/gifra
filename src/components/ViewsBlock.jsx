import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { number, oneOfType, string } from 'prop-types';
import { colors, sizes } from '../theme';

import ViewsIcon from '../assets/icons/views.svg';

const ViewsBlock = ({ viewsNumber }) => (
  <View style={{ flexDirection: 'row' }}>
    <View style={styles.container}>
      <ViewsIcon />
      <View>
        <Text style={styles.text}>
          {`${viewsNumber} views`}
        </Text>
      </View>
    </View>
    <View />
  </View>
);

ViewsBlock.propTypes = {
  viewsNumber: oneOfType([number, string]),
};

ViewsBlock.defaultProps = {
  viewsNumber: 'XXX',
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexGrow: 0,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.black,
    borderRadius: sizes.roundEntityRadius,
    paddingTop: sizes.sideSpacing,
    paddingBottom: sizes.sideSpacing,
    paddingLeft: 12,
    paddingRight: 12,
  },
  text: {
    color: colors.white,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    lineHeight: 20,
    marginLeft: sizes.sideSpacing,
  },
});

export { ViewsBlock };
