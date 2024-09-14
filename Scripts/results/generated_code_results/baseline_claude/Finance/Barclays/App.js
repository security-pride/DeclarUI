import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CardsScreen from './components/CardsScreen';
import HelpScreen from './components/HelpScreen';
import HomeScreen from './components/HomeScreen';
import MoreScreen from './components/MoreScreen';
import StatementsandDocumentsScreen from './components/StatementsandDocumentsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Cards" component={CardsScreen} />
        <Stack.Screen name="Help" component={HelpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="More" component={MoreScreen} />
        <Stack.Screen name="StatementsandDocuments" component={StatementsandDocumentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;