import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';



import HomepageScreen from './components/HomepageScreen';

import ProfileScreen from './components/ProfileScreen';

import MessagesScreen from './components/MessagesScreen';

import OnboardingScreen from './components/OnboardingScreen';

import SearchResultScreen from './components/SearchResultScreen';



const Stack = createStackNavigator();



function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName="Onboarding">

        <Stack.Screen name="Homepage" component={HomepageScreen} />

        <Stack.Screen name="Profile" component={ProfileScreen} />

        <Stack.Screen name="Messages" component={MessagesScreen} />

        <Stack.Screen name="Onboarding" component={OnboardingScreen} />

        <Stack.Screen name="SearchResults" component={SearchResultScreen} />

      </Stack.Navigator>

    </NavigationContainer>

  );

}



export default App;