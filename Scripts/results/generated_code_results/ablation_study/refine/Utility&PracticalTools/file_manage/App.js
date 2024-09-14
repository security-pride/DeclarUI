import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CleanerScreen from './components/CleanerScreen';
import CloudStorageScreen from './components/CloudStorageScreen';
import CloudStorageListViewScreen from './components/CloudStorageListViewScreen';
import FilesScreen from './components/FilesScreen';
import HomePageScreen from './components/HomePageScreen';
import StorageDetailsScreen from './components/StorageDetailsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="Cleaner" component={CleanerScreen} />
        <Stack.Screen name="CloudStorage" component={CloudStorageScreen} />
        <Stack.Screen name="CloudStorageListView" component={CloudStorageListViewScreen} />
        <Stack.Screen name="Files" component={FilesScreen} />
        <Stack.Screen name="HomePage" component={HomePageScreen} />
        <Stack.Screen name="StorageDetails" component={StorageDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;