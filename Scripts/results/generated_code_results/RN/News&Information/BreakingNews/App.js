import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import MoreDetails from './components/MoreDetails';
import Notice from './components/Notice';
import LogIn from './components/LogIn';
import Settings from './components/Settings';
const Stack = createStackNavigator();
const App = () => {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
<Stack.Screen name="Home" component={Home} />
<Stack.Screen name="MoreDetails" component={MoreDetails} />
<Stack.Screen name="Notice" component={Notice} />
<Stack.Screen name="LogIn" component={LogIn} />
<Stack.Screen name="Settings" component={Settings} />
</Stack.Navigator>
</NavigationContainer>
);
};
export default App;