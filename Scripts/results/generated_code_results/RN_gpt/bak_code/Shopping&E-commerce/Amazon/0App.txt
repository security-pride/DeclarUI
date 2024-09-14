import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AccountScreen from './components/AccountScreen';
import FilterScreen from './components/FilterScreen';
import HomeScreen from './components/HomeScreen';
import OrdersScreen from './components/OrdersScreen';
import ProfileScreen from './components/ProfileScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Filter" component={FilterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Orders" component={OrdersScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;