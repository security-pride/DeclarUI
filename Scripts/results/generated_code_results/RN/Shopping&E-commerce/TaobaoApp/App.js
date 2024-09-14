import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import CartScreen from './components/CartScreen';
import ProfileScreen from './components/ProfileScreen';
import MessageScreen from './components/MessageScreen';
import LogisticsScreen from './components/LogisticsScreen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MainTabs = () => {
return (
<Tab.Navigator>
<Tab.Screen name="Home" component={HomeScreen} />
<Tab.Screen name="Message" component={MessageScreen} />
<Tab.Screen name="Cart" component={CartScreen} />
<Tab.Screen name="Profile" component={ProfileScreen} />
</Tab.Navigator>
);
};
const App = () => {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="MainTabs">
<Stack.Screen
name="MainTabs"
component={MainTabs}
options={{ headerShown: false }}
/>
<Stack.Screen name="Logistics" component={LogisticsScreen} />
</Stack.Navigator>
</NavigationContainer>
);
};
export default App;