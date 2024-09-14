import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import HomeScreen from './components/HomeScreen';

import LessonDetailScreen from './components/LessonDetailScreen';

import SearchScreen from './components/SearchScreen';

import SpeakScreen from './components/SpeakScreen';

import ConversationScreen from './components/ConversationScreen';



const Stack = createStackNavigator();





function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen name="Home" component={HomeScreen} />
        
        <Stack.Screen name="LessonDetail" component={LessonDetailScreen} />

        <Stack.Screen name="Search" component={SearchScreen} />

        <Stack.Screen name="Speak" component={SpeakScreen} />

        <Stack.Screen name="Conversation" component={ConversationScreen} />

      </Stack.Navigator>

    </NavigationContainer>

  );

}



export default App;