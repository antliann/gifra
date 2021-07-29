import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

import { SearchScreen, DetailsScreen } from './src/screens';

const Stack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    SFPro: require('./src/assets/fonts/SFProText-Regular.ttf'),
    SFProMedium: require('./src/assets/fonts/SFProText-Medium.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider style={{ backgroundColor: '#000' }}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <Stack.Navigator>
          <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
          <Stack.Screen
            name="DetailsScreen"
            component={DetailsScreen}
            options={{
              headerShown: false,
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
