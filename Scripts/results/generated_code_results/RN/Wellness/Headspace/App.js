import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalmMethods from './components/CalmMethods';
import Explore from './components/Explore';
import Home from './components/Home';
import Move from './components/Move';
import Profile from './components/Profile';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MainTabs = () => {
return (
<Tab.Navigator>
<Tab.Screen name="Home" component={Home} />
<Tab.Screen name="Explore" component={Explore} />
<Tab.Screen name="Profile" component={Profile} />
</Tab.Navigator>
);
};
const App = () => {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home">
<Stack.Screen
name="MainTabs"
component={MainTabs}
options={{ headerShown: false }}
/>
<Stack.Screen name="CalmMethods" component={CalmMethods} />
<Stack.Screen name="Move" component={Move} />
</Stack.Navigator>
</NavigationContainer>
);
};
export default App;