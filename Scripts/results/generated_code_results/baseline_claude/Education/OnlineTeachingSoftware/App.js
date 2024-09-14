import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CourseDetailScreen from './components/CourseDetailScreen';
import DiscoverScreen from './components/DiscoverScreen';
import FavoritesScreen from './components/FavoritesScreen';
import NotificationsScreen from './components/NotificationsScreen';
import StatisticsScreen from './components/StatisticsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Discover" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
        <Stack.Screen name="Discover" component={DiscoverScreen} />
        <Stack.Screen name="Favorites" component={FavoritesScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Statistics" component={StatisticsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;