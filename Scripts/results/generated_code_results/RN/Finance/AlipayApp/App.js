import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Profile from './components/Profile';
import Tickets from './components/Tickets';
import Trade from './components/Trade';
import UtilityBills from './components/UtilityBills';
const Stack = createStackNavigator();
const App = () => {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home">
<Stack.Screen
name="Home"
component={Home}
options={{ title: '首页' }}
/>
<Stack.Screen
name="Profile"
component={Profile}
options={{ title: '用户中心' }}
/>
<Stack.Screen
name="Tickets"
component={Tickets}
options={{ title: '淘票票' }}
/>
<Stack.Screen
name="Trade"
component={Trade}
options={{ title: '收付款' }}
/>
<Stack.Screen
name="UtilityBills"
component={UtilityBills}
options={{ title: '生活缴费' }}
/>
</Stack.Navigator>
</NavigationContainer>
);
};
export default App;