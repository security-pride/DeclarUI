import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CourseDetail from './components/CourseDetail';
import Discover from './components/Discover';
import Favorites from './components/Favorites';
import Notifications from './components/Notifications';
import Statistics from './components/Statistics';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MainTabs = () => (
<Tab.Navigator>
<Tab.Screen name="Discover" component={Discover} />
<Tab.Screen name="Statistics" component={Statistics} />
<Tab.Screen name="Favorites" component={Favorites} />
<Tab.Screen name="Profile" component={Discover} />
</Tab.Navigator>
);
const App = () => {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Discover" screenOptions={{ headerShown: false }}>
<Stack.Screen name="MainTabs" component={MainTabs} />
<Stack.Screen name="CourseDetail" component={CourseDetail} />
<Stack.Screen name="Notifications" component={Notifications} />
</Stack.Navigator>
</NavigationContainer>
);
};
export default App;