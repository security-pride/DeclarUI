import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HistoryScreen from './components/HistoryScreen';
import HomeScreen from './components/HomeScreen';
import ItemScreen from './components/ItemScreen';
import ProfileScreen from './components/ProfileScreen';
import SearchScreen from './components/SearchScreen';
const Stack = createStackNavigator();
function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home">
<Stack.Screen
name="History"
component={HistoryScreen}
options={{ title: '购买记录页' }}
/>
<Stack.Screen
name="Home"
component={HomeScreen}
options={{ title: '主页' }}
/>
<Stack.Screen
name="Item"
component={ItemScreen}
options={{ title: '商品详情页' }}
/>
<Stack.Screen
name="Profile"
component={ProfileScreen}
options={{ title: '个人资料页' }}
/>
<Stack.Screen
name="Search"
component={SearchScreen}
options={{ title: '搜索页' }}
/>
</Stack.Navigator>
</NavigationContainer>
);
}
export default App;