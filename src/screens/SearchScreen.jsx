import React from 'react';
import {
  StyleSheet, TouchableOpacity, View, Text,
} from 'react-native';

const SearchScreen = ({ navigation }) => {
  const navigateToDetailsScreen = () => navigation.navigate('DetailsScreen');

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToDetailsScreen}>
        <Text style={styles.text}>
          Go to screen 2
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontFamily: 'SFPro',
  },
});

export { SearchScreen };
