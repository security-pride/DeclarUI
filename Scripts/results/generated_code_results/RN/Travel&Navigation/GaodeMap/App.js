import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/Home';
import GasInformation from './components/GasInformation';
import GasStationDetails from './components/GasStationDetails';
import TicketService from './components/TicketService';
import TicketSearchResult from './components/TicketSearchResult';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="GasInformation" component={GasInformation} />
        <Stack.Screen name="GasStationDetails" component={GasStationDetails} />
        <Stack.Screen name="TicketService" component={TicketService} />
        <Stack.Screen name="TicketSearchResult" component={TicketSearchResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;