import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OfflineReadingScreen from './components/OfflineReadingScreen';
import NewOptionsScreen from './components/NewOptionsScreen';
import HomeScreen from './components/HomeScreen';
import MeScreen from './components/MeScreen';
import SettingsScreen from './components/SettingsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="OfflineReading" component={OfflineReadingScreen} />
        <Stack.Screen name="NewOptions" component={NewOptionsScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Me" component={MeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;