import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CreateAccontScreen from './components/CreateAccontScreen';
import LogInScreen from './components/LogInScreen';
import ElectionsScreen from './components/ElectionsScreen';
import HomeScreen from './components/HomeScreen';
import SettingsScreen from './components/SettingsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="CreateAccont" component={CreateAccontScreen} />
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="Elections" component={ElectionsScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;