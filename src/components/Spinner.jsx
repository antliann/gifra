import React, { useEffect } from 'react';
import {
  Animated, Easing, StyleSheet, LogBox,
} from 'react-native';

const Spinner = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);

  return (
    <Animated.Image
      source={require('../assets/icons/spinner.png')}
      style={styles.spinnerContainer}
    />
  );
};

const spinValue = new Animated.Value(0);

Animated.loop(
  Animated.timing(
    spinValue,
    {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    },
  ),
).start();

const spin = spinValue.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg'],
});

const styles = StyleSheet.create({
  spinnerContainer: {
    transform: [{ rotate: spin }],
    width: 80,
    height: 80,
  },
});

export { Spinner };
