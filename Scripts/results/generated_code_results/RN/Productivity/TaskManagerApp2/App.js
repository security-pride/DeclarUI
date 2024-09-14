import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import AddTaskScreen from './components/AddTaskScreen';
import StatisticsScreen from './components/StatisticsScreen';
import ProfileScreen from './components/ProfileScreen';
import CalendarScreen from './components/CalendarScreen';
const Stack = createStackNavigator();
function App() {
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
name="statistics"
component={StatisticsScreen}
options={{ title: 'Statistics Screen' }}
/>
<Stack.Screen
name="profile"
component={ProfileScreen}
options={{ title: 'Profile Screen' }}
/>
<Stack.Screen
name="calendar"
component={CalendarScreen}
options={{ title: 'Calendar Screen' }}
/>
</Stack.Navigator>
</NavigationContainer>
);
}
export default App;