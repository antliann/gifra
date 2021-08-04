import React from 'react';
import {
  Image, View, StyleSheet, Text,
} from 'react-native';
import { object } from 'prop-types';

import { colors, sizes } from '../theme';

const UserBlock = ({ user }) => (
  !user || (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
      <View>
        <Text style={styles.userName}>
          {user.display_name}
        </Text>
        <Text style={styles.userId}>
          @
          {user.username}
        </Text>
      </View>
    </View>
  )
);

UserBlock.propTypes = {
  user: object,
};

UserBlock.defaultProps = {
  user: null,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatar: {
    borderRadius: sizes.roundEntityRadius,
    width: sizes.roundEntitySize,
    height: sizes.roundEntitySize,
    marginRight: sizes.sideSpacing,
  },
  userName: {
    color: colors.white,
    fontFamily: 'Inter-Regular',
    fontSize: 18,
    lineHeight: 22,
    marginTop: 2,
  },
  userId: {
    color: colors.white,
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    lineHeight: 15,
    marginTop: 4,
  },
});

export { UserBlock };
