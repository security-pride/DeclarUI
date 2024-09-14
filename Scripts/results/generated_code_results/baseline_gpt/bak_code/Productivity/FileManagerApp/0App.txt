import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ConnectionsScreen from './components/ConnectionsScreen';
import ConnectToComputerScreen from './components/ConnectToComputerScreen';
import HomeGridScreen from './components/HomeGridScreen';
import HomeListScreen from './components/HomeListScreen';
import RecentsScreen from './components/RecentsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Connections" component={ConnectionsScreen} />
        <Stack.Screen name="ConnectToComputer" component={ConnectToComputerScreen} />
        <Stack.Screen name="HomeGrid" component={HomeGridScreen} />
        <Stack.Screen name="HomeList" component={HomeListScreen} />
        <Stack.Screen name="Recents" component={RecentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;