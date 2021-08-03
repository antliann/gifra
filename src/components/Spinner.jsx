import React, { useEffect } from 'react';
import {
  Animated, Easing, StyleSheet,
} from 'react-native';

const Spinner = () => {
  useEffect(() => {
    Animated.loop(
      Animated.timing(
        spinValue,
        {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        },
      ),
    ).start();
  }, []);

  return (
    <Animated.Image
      source={require('../assets/icons/spinner.png')}
      style={styles.spinnerContainer}
    />
  );
};

const spinValue = new Animated.Value(0);

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
