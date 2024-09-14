import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home_Top_drawer_openScreen from './components/Home_Top_drawer_openScreen';
import Home_Top_drawer_closeScreen from './components/Home_Top_drawer_closeScreen';
import SendParcel_Delivery_methodScreen from './components/SendParcel_Delivery_methodScreen';
import SendParcel_Parcel_sizeScreen from './components/SendParcel_Parcel_sizeScreen';
import Parcel_centerScreen from './components/Parcel_centerScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home_Top_drawer_open">
        <Stack.Screen 
          name="Home_Top_drawer_open" 
          component={Home_Top_drawer_openScreen} 
        />
        <Stack.Screen 
          name="Home_Top_drawer_close" 
          component={Home_Top_drawer_closeScreen} 
        />
        <Stack.Screen 
          name="SendParcel_Delivery_method" 
          component={SendParcel_Delivery_methodScreen} 
        />
        <Stack.Screen 
          name="SendParcel_Parcel_size" 
          component={SendParcel_Parcel_sizeScreen} 
        />
        <Stack.Screen 
          name="Parcel_center" 
          component={Parcel_centerScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;