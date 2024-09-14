import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CalmMethodsScreen from './components/CalmMethodsScreen';
import ExploreScreen from './components/ExploreScreen';
import HomeScreen from './components/HomeScreen';
import MoveScreen from './components/MoveScreen';
import ProfileScreen from './components/ProfileScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="CalmMethods" component={CalmMethodsScreen} />
        <Stack.Screen name="Explore" component={ExploreScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Move" component={MoveScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;