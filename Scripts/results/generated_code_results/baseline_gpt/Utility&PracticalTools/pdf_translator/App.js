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
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={homeScreen} />
        <Stack.Screen name="more" component={moreScreen} />
        <Stack.Screen name="search" component={searchScreen} />
        <Stack.Screen name="select" component={selectScreen} />
        <Stack.Screen name="sort" component={sortScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;