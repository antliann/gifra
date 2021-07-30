import React from 'react';
import {
  StyleSheet, TouchableOpacity, View, Text,
} from 'react-native';
import { colors } from '../theme';

const DetailsScreen = ({ navigation }) => {
  const navigateBack = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateBack}>
        <Text style={styles.text}>Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});

export { DetailsScreen };
