import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

import { SearchScreen, DetailsScreen } from './src/screens';
import { colors } from './src/theme';

const Stack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    SFPro: require('./src/assets/fonts/SFProText-Regular.ttf'),
    'SFPro-SemiBold': require('./src/assets/fonts/SFProText-Semibold.ttf'),
    'SFPro-Bold': require('./src/assets/fonts/SFProText-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider style={{ backgroundColor: colors.black }}>
      <NavigationContainer>
        <SafeAreaView>
          <StatusBar style="light" />
        </SafeAreaView>
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
