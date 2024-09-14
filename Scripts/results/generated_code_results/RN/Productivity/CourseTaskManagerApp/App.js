import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import AddTaskScreen from './components/AddTaskScreen';
import ClassroomScreen from './components/ClassroomScreen';
import DiscussionScreen from './components/DiscussionScreen';
import CalendarScreen from './components/CalendarScreen';
const Stack = createStackNavigator();
const App = () => {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="home">
<Stack.Screen
name="home"
component={HomeScreen}
options={{ title: 'Home Screen' }}
/>
<Stack.Screen
name="addTask"
component={AddTaskScreen}
options={{ title: 'Add Task Screen' }}
/>
<Stack.Screen
name="classroom"
component={ClassroomScreen}
options={{ title: 'Classroom Screen' }}
/>
<Stack.Screen
name="discussion"
component={DiscussionScreen}
options={{ title: 'Discussion Screen' }}
/>
<Stack.Screen
name="calendar"
component={CalendarScreen}
options={{ title: 'Calendar Screen' }}
/>
</Stack.Navigator>
</NavigationContainer>
);
};
export default App;