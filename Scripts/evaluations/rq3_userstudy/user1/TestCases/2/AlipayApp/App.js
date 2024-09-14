import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';



import HomeScreen from './components/HomeScreen';

import ProfileScreen from './components/ProfileScreen';

import TicketsScreen from './components/TicketsScreen';

import TradeScreen from './components/TradeScreen';

import UtilityBillsScreen from './components/UtilityBillsScreen';



const Stack = createStackNavigator();



const App = () => {

  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="Profile" component={ProfileScreen} />

        <Stack.Screen name="Tickets" component={TicketsScreen} />

        <Stack.Screen name="Trade" component={TradeScreen} />

        <Stack.Screen name="UtilityBills" component={UtilityBillsScreen} />

      </Stack.Navigator>

    </NavigationContainer>

  );

};



export default App;