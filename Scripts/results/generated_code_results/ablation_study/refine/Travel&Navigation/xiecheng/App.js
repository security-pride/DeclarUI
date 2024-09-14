import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TravelScreen from './components/TravelScreen';
import GroupDetailsScreen from './components/GroupDetailsScreen';
import GroupTravelScreen from './components/GroupTravelScreen';
import GroupTravelSearchResultScreen from './components/GroupTravelSearchResultScreen';
import HomeScreen from './components/HomeScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Travel" component={TravelScreen} />
        <Stack.Screen name="GroupDetails" component={GroupDetailsScreen} />
        <Stack.Screen name="GroupTravel" component={GroupTravelScreen} />
        <Stack.Screen name="GroupTravelSearchResult" component={GroupTravelSearchResultScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;