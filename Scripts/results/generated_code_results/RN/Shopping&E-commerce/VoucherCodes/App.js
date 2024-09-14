import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AccountScreen from './components/AccountScreen';
import DetailsScreen from './components/DetailsScreen';
import MoreScreen from './components/MoreScreen';
import SearchScreen from './components/SearchScreen';
import TermsScreen from './components/TermsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="More" component={MoreScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Terms" component={TermsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;