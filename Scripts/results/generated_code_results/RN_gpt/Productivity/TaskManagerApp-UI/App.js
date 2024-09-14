import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import AddTaskScreen from './components/AddTaskScreen';
import BoardScreen from './components/BoardScreen';
import DashboardScreen from './components/DashboardScreen';
import MessageScreen from './components/MessageScreen';
import TaskScreen from './components/TaskScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="AddTask" component={AddTaskScreen} />
        <Stack.Screen name="Board" component={BoardScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Message" component={MessageScreen} />
        <Stack.Screen name="Task" component={TaskScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;