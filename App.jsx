import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';

import { SearchScreen, DetailsScreen } from './src/screens';
import { colors } from './src/theme';
import { store } from './src/store';

const Stack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    'SFPro-Regular': require('./src/assets/fonts/SFProText-Regular.ttf'),
    'SFPro-SemiBold': require('./src/assets/fonts/SFProText-Semibold.ttf'),
    'SFPro-Bold': require('./src/assets/fonts/SFProText-Bold.ttf'),
    'Inter-Regular': require('./src/assets/fonts/Inter-Regular.ttf'),
    'Inter-Bold': require('./src/assets/fonts/Inter-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider style={{ backgroundColor: colors.black }}>
        <SafeAreaView>
          <StatusBar barStyle="light-content" />
        </SafeAreaView>
        <NavigationContainer>
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
    </Provider>
  );
}
