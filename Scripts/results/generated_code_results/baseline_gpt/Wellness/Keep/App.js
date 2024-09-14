import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StoreScreen from './components/StoreScreen';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import SearchSportsScreen from './components/SearchSportsScreen';
import SportsScreen from './components/SportsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Store" component={StoreScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="SearchSports" component={SearchSportsScreen} />
        <Stack.Screen name="Sports" component={SportsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}