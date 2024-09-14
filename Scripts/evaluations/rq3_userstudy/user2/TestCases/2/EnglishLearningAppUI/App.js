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

const Tab = createBottomTabNavigator();



function MainTabs() {

  return (

    <Tab.Navigator>

      <Tab.Screen name="Home" component={HomeScreen} />

      <Tab.Screen name="Search" component={SearchScreen} />

      <Tab.Screen name="Speak" component={SpeakScreen} />

      <Tab.Screen name="Conversation" component={ConversationScreen} />

    </Tab.Navigator>

  );

}



function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen 

          name="MainTabs" 

          component={MainTabs} 

          options={{ headerShown: false }}

        />

        <Stack.Screen name="LessonDetail" component={LessonDetailScreen} />

      </Stack.Navigator>

    </NavigationContainer>

  );

}



export default App;