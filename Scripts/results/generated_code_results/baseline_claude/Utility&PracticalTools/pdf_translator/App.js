import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';



import homeScreen from './components/homeScreen';

import moreScreen from './components/moreScreen';

import searchScreen from './components/searchScreen';

import selectScreen from './components/selectScreen';

import sortScreen from './components/sortScreen';



const Stack = createStackNavigator();



const App = () => {

  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home" component={homeScreen} />

        <Stack.Screen name="More" component={moreScreen} />

        <Stack.Screen name="Search" component={searchScreen} />

        <Stack.Screen name="Select" component={selectScreen} />

        <Stack.Screen name="Sort" component={sortScreen} />

      </Stack.Navigator>

    </NavigationContainer>

  );

};



export default App;