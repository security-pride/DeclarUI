import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './components/HomePage';
import DiscoverPage from './components/DiscoverPage';
import CourseDetailPage from './components/CourseDetailPage';
import MyCoursesPage from './components/MyCoursesPage';
import SearchPage from './components/SearchPage';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MainTabs = () => (
<Tab.Navigator>
<Tab.Screen name="Home" component={HomePage} />
<Tab.Screen name="Discover" component={DiscoverPage} />
<Tab.Screen name="MyCourses" component={MyCoursesPage} />
<Tab.Screen name="Profile" component={HomePage} />
</Tab.Navigator>
);
const App = () => {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
<Stack.Screen name="MainTabs" component={MainTabs} />
<Stack.Screen name="CourseDetail" component={CourseDetailPage} />
<Stack.Screen name="Search" component={SearchPage} />
</Stack.Navigator>
</NavigationContainer>
);
};
export default App;