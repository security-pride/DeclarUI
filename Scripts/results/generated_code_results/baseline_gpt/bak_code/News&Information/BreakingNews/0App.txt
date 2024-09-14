import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MoreDetailsScreen from './components/MoreDetailsScreen';
import NoticeScreen from './components/NoticeScreen';
import LogInScreen from './components/LogInScreen';
import SettingsScreen from './components/SettingsScreen';
import HomeScreen from './components/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MoreDetails" component={MoreDetailsScreen} />
        <Stack.Screen name="Notice" component={NoticeScreen} />
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}