import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DiseaseDetailScreen from './components/DiseaseDetailScreen';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import SearchScreen from './components/SearchScreen';
import SearchMedicineDiseaseScreen from './components/SearchMedicineDiseaseScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="DiseaseDetail" component={DiseaseDetailScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="SearchMedicineDisease" component={SearchMedicineDiseaseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;