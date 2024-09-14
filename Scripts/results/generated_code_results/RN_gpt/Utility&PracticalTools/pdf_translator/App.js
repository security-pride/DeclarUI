import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/HomeScreen';
import MoreScreen from './components/MoreScreen';
import SearchScreen from './components/SearchScreen';
import SelectScreen from './components/SelectScreen';
import SortScreen from './components/SortScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="more" component={MoreScreen} />
        <Stack.Screen name="search" component={SearchScreen} />
        <Stack.Screen name="select" component={SelectScreen} />
        <Stack.Screen name="sort" component={SortScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;