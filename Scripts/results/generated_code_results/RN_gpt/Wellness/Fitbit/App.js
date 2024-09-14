import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DiscoveryScreen from './components/DiscoveryScreen';
import EnvironmentSimulationScreen from './components/EnvironmentSimulationScreen';
import FindFriendScreen from './components/FindFriendScreen';
import FriendsScreen from './components/FriendsScreen';
import HomeScreen from './components/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Discovery" component={DiscoveryScreen} />
        <Stack.Screen name="EnvironmentSimulation" component={EnvironmentSimulationScreen} />
        <Stack.Screen name="FindFriend" component={FindFriendScreen} />
        <Stack.Screen name="Friends" component={FriendsScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}