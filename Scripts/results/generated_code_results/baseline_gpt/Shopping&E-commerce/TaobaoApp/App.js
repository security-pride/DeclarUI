import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CartScreen from './components/CartScreen';
import HomeScreen from './components/HomeScreen';
import LogisticsScreen from './components/LogisticsScreen';
import MessageScreen from './components/MessageScreen';
import ProfileScreen from './components/ProfileScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Logistics" component={LogisticsScreen} />
        <Stack.Screen name="Message" component={MessageScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;