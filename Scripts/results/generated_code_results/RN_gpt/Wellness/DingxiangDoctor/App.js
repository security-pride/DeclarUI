import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import DiseaseDetail from './components/DiseaseDetail';
import Home from './components/Home';
import Profile from './components/Profile';
import Search from './components/Search';
import SearchMedicineDisease from './components/SearchMedicineDisease';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="DiseaseDetail" component={DiseaseDetail} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="SearchMedicineDisease" component={SearchMedicineDisease} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}