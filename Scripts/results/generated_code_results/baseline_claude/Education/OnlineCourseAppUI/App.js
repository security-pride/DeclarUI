import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/HomeScreen';
import EnrolledCoursesScreen from './components/EnrolledCoursesScreen';
import CourseDetailScreen from './components/CourseDetailScreen';
import AwesomeCoursesScreen from './components/AwesomeCoursesScreen';
import SearchScreen from './components/SearchScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EnrolledCourses" component={EnrolledCoursesScreen} />
        <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
        <Stack.Screen name="AwesomeCourses" component={AwesomeCoursesScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;