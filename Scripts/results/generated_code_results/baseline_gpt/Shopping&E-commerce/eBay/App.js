import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HistoryScreen from './components/HistoryScreen';
import HomeScreen from './components/HomeScreen';
import ItemScreen from './components/ItemScreen';
import ProfileScreen from './components/ProfileScreen';
import SearchScreen from './components/SearchScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Item" component={ItemScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;