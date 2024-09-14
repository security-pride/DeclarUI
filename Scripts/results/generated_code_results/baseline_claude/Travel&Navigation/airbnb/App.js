import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from './components/SearchScreen';
import SearchCategoryScreen from './components/SearchCategoryScreen';
import DetailsScreen from './components/DetailsScreen';
import CommentsScreen from './components/CommentsScreen';
import ReservationScreen from './components/ReservationScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="SearchCategory" component={SearchCategoryScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Comments" component={CommentsScreen} />
        <Stack.Screen name="Reservation" component={ReservationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;