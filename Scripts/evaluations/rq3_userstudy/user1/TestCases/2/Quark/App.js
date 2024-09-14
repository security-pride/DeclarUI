import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';



import SelectScreen from './components/SelectScreen';

import NewsScreen from './components/NewsScreen';

import ScannerScreen from './components/ScannerScreen';

import OnlineStorageScreen from './components/OnlineStorageScreen';

import HomeScreen from './components/HomeScreen';



const Stack = createStackNavigator();



const App = () => {

  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Select" component={SelectScreen} />

        <Stack.Screen name="News" component={NewsScreen} />

        <Stack.Screen name="Scanner" component={ScannerScreen} />

        <Stack.Screen name="OnlineStorage" component={OnlineStorageScreen} />

        <Stack.Screen name="Home" component={HomeScreen} />

      </Stack.Navigator>

    </NavigationContainer>

  );

};



export default App;