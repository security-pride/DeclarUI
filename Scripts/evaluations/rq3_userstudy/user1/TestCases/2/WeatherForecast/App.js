import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';



import DetailsScreen from './components/DetailsScreen';

import SettingScreen from './components/SettingScreen';

import HomeScreen from './components/HomeScreen';

import AddLocationsScreen from './components/AddLocationsScreen';

import EditLocationScreen from './components/EditLocationScreen';



const Stack = createStackNavigator();



const App = () => {

  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Details" component={DetailsScreen} />

        <Stack.Screen name="Setting" component={SettingScreen} />

        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="AddLocations" component={AddLocationsScreen} />

        <Stack.Screen name="EditLocation" component={EditLocationScreen} />

      </Stack.Navigator>

    </NavigationContainer>

  );

};



export default App;