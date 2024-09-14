import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ChatsScreen from './components/ChatsScreen';
import IntroScreen from './components/IntroScreen';
import NewMessageScreen from './components/NewMessageScreen';
import PeopleScreen from './components/PeopleScreen';
import ProfileScreen from './components/ProfileScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen name="Chats" component={ChatsScreen} />
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="NewMessage" component={NewMessageScreen} />
        <Stack.Screen name="People" component={PeopleScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;