import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import loginScreen from './components/loginScreen';
import homeScreen from './components/homeScreen';
import discoverScreen from './components/discoverScreen';
import commentsScreen from './components/commentsScreen';
import searchScreen from './components/searchScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={loginScreen} />
        <Stack.Screen name="home" component={homeScreen} />
        <Stack.Screen name="discover" component={discoverScreen} />
        <Stack.Screen name="comments" component={commentsScreen} />
        <Stack.Screen name="search" component={searchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;