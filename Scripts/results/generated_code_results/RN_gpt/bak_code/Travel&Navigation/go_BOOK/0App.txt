import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CreateAccountScreen from './components/CreateAccountScreen';
import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';
import NotificationScreen from './components/NotificationScreen';
import ProfileScreen from './components/ProfileScreen';
import SearchResultScreen from './components/SearchResultScreen';
import SettingScreen from './components/SettingScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="SearchResult" component={SearchResultScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;