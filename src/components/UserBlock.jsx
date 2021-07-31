import React from 'react';
import {
  Image, View, StyleSheet, Text,
} from 'react-native';
import { colors, sizes } from '../theme';

const UserBlock = () => (
  <View style={styles.container}>
    <Image source={require('../assets/icons/image.png')} style={styles.avatar} />
    <View>
      <Text style={styles.userName}>
        Username
      </Text>
      <Text style={styles.userId}>
        @userid
      </Text>
    </View>
  </View>
);

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
