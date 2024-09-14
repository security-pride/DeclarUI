import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StoreScreen from './components/StoreScreen';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import SearchSportsScreen from './components/SearchSportsScreen';
import SportsScreen from './components/SportsScreen';
const Stack = createStackNavigator();
function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home">
<Stack.Screen
name="Store"
component={StoreScreen}
options={{ title: '商城页面' }}
/>
<Stack.Screen
name="Home"
component={HomeScreen}
options={{ title: '首页' }}
/>
<Stack.Screen
name="Profile"
component={ProfileScreen}
options={{ title: '个人资料页' }}
/>
<Stack.Screen
name="SearchSports"
component={SearchSportsScreen}
options={{ title: '运动类型选择页' }}
/>
<Stack.Screen
name="Sports"
component={SportsScreen}
options={{ title: '运动页面' }}
/>
</Stack.Navigator>
</NavigationContainer>
);
}
export default App;