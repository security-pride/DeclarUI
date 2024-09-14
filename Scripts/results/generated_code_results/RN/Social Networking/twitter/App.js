import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Menu from './components/Menu';
import Profile from './components/Profile';
import Search from './components/Search';
import Trends from './components/Trends';
const Stack = createStackNavigator();
const App = () => {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
<Stack.Screen name="Home" component={Home} />
<Stack.Screen name="Menu" component={Menu} />
<Stack.Screen name="Profile" component={Profile} />
<Stack.Screen name="Search" component={Search} />
<Stack.Screen name="Trends" component={Trends} />
</Stack.Navigator>
</NavigationContainer>
);
};
export default App;