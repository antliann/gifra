import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Image from 'react-native-scalable-image';

import { Button } from '../components';
import { colors } from '../theme';

const DetailsScreen = ({ navigation }) => {
  const navigateBack = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <Button.GoBack onPress={navigateBack} />
      </View>
      <Image
        width={Dimensions.get('window').width}
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
