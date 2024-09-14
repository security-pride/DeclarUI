import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import AddTaskScreen from './components/AddTaskScreen';
import ClassroomScreen from './components/ClassroomScreen';
import DiscussionScreen from './components/DiscussionScreen';
import CalendarScreen from './components/CalendarScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddTask" component={AddTaskScreen} />
        <Stack.Screen name="Classroom" component={ClassroomScreen} />
        <Stack.Screen name="Discussion" component={DiscussionScreen} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}