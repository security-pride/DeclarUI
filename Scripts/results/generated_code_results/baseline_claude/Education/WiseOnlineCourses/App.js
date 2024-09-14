import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CourseDetailScreen from './components/CourseDetailScreen';
import LessonsScreen from './components/LessonsScreen';
import DownloadsScreen from './components/DownloadsScreen';
import HomeScreen from './components/HomeScreen';
import MyListScreen from './components/MyListScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
        <Stack.Screen name="Lessons" component={LessonsScreen} />
        <Stack.Screen name="Downloads" component={DownloadsScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MyList" component={MyListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;