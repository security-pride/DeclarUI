import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from './components/CategoriesScreen';
import HomeScreen from './components/HomeScreen';
import JewelryCategoryScreen from './components/JewelryCategoryScreen';
import SellScreen from './components/SellScreen';
import UploadScreen from './components/UploadScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="JewelryCategory" component={JewelryCategoryScreen} />
        <Stack.Screen name="Sell" component={SellScreen} />
        <Stack.Screen name="Upload" component={UploadScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;