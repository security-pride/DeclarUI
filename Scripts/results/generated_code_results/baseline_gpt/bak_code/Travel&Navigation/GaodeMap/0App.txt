import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import GasInformationScreen from './components/GasInformationScreen';
import GasStationDetailsScreen from './components/GasStationDetailsScreen';
import HomeScreen from './components/HomeScreen';
import TicketSearchResultScreen from './components/TicketSearchResultScreen';
import TicketServiceScreen from './components/TicketServiceScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="GasInformation" component={GasInformationScreen} />
        <Stack.Screen name="GasStationDetails" component={GasStationDetailsScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TicketSearchResult" component={TicketSearchResultScreen} />
        <Stack.Screen name="TicketService" component={TicketServiceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}