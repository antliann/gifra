import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { SearchScreen, DetailsScreen } from './src/screens';

const Stack = createStackNavigator();

export default function App() {
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
