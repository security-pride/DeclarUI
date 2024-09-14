import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ChartsScreen from './components/ChartsScreen';
import ObjectsScreen from './components/ObjectsScreen';
import QuoteAdvancedScreen from './components/QuoteAdvancedScreen';
import QuoteSimpleScreen from './components/QuoteSimpleScreen';
import SettingsScreen from './components/SettingsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Charts" component={ChartsScreen} />
        <Stack.Screen name="Objects" component={ObjectsScreen} />
        <Stack.Screen name="QuoteAdvanced" component={QuoteAdvancedScreen} />
        <Stack.Screen name="QuoteSimple" component={QuoteSimpleScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}