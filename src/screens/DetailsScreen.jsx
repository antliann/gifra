import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Image from 'react-native-scalable-image';

import { Button } from '../components';
import { colors, spacing } from '../theme';

const DetailsScreen = ({ navigation }) => {
  const navigateBack = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <Button.GoBack onPress={navigateBack} />
      </View>
      <Image
        width={Dimensions.get('window').width - spacing.sidesPadding * 2}
        source={require('../assets/icons/Rect.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    padding: spacing.sidesPadding,
  },
  text: {
    color: '#fff',
  },
  backButtonContainer: {
    position: 'absolute',
    top: 17,
    left: 17,
    zIndex: 1,
  },
  image: {
    borderRadius: 24,
  },
});

export { DetailsScreen };
