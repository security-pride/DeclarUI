import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ClearHistoryScreen from './components/ClearHistoryScreen';
import DefaultViewScreen from './components/DefaultViewScreen';
import ExpandedViewScreen from './components/ExpandedViewScreen';
import ExpandedViewShowHistoryScreen from './components/ExpandedView-ShowHistoryScreen';
import ShowHistoryScreen from './components/ShowHistoryScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ClearHistory" component={ClearHistoryScreen} />
        <Stack.Screen name="DefaultView" component={DefaultViewScreen} />
        <Stack.Screen name="ExpandedView" component={ExpandedViewScreen} />
        <Stack.Screen name="ExpandedView-ShowHistory" component={ExpandedViewShowHistoryScreen} />
        <Stack.Screen name="ShowHistory" component={ShowHistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;