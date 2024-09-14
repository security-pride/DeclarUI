import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Store from './components/Store';
import Home from './components/Home';
import Profile from './components/Profile';
import SearchSports from './components/SearchSports';
import Sports from './components/Sports';
const Stack = createStackNavigator();
function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home">
<Stack.Screen
name="Store"
component={Store}
options={{ title: '商城页面' }}
/>
<Stack.Screen
name="Home"
component={Home}
options={{ title: '首页' }}
/>
<Stack.Screen
name="Profile"
component={Profile}
options={{ title: '个人资料页' }}
/>
<Stack.Screen
name="SearchSports"
component={SearchSports}
options={{ title: '运动类型选择页' }}
/>
<Stack.Screen
name="Sports"
component={Sports}
options={{ title: '运动页面' }}
/>
</Stack.Navigator>
</NavigationContainer>
);
}
export default App;