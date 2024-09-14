import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CleanerScreen from './components/CleanerScreen';
import CloudStorageScreen from './components/CloudStorageScreen';
import CloudStorageListViewScreen from './components/CloudStorage-ListViewScreen';
import FilesScreen from './components/FilesScreen';
import HomepageScreen from './components/HomepageScreen';
import StorageDetailsScreen from './components/StorageDetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homepage">
        <Stack.Screen name="Cleaner" component={CleanerScreen} />
        <Stack.Screen name="CloudStorage" component={CloudStorageScreen} />
        <Stack.Screen name="CloudStorage-ListView" component={CloudStorageListViewScreen} />
        <Stack.Screen name="Files" component={FilesScreen} />
        <Stack.Screen name="Homepage" component={HomepageScreen} />
        <Stack.Screen name="StorageDetails" component={StorageDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}