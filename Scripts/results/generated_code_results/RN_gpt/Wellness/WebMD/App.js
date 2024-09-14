import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/HomeScreen';
import IdentifyResultScreen from './components/IdentifyResultScreen';
import PillIdentifierScreen from './components/PillIdentifierScreen';
import ReminderScreen from './components/ReminderScreen';
import ResultDetailScreen from './components/ResultDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="IdentifyResult" component={IdentifyResultScreen} />
        <Stack.Screen name="PillIdentifier" component={PillIdentifierScreen} />
        <Stack.Screen name="Reminder" component={ReminderScreen} />
        <Stack.Screen name="ResultDetail" component={ResultDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}