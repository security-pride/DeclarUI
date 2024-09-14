import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/Home';
import ListenScreen from './components/Listen';
import PlayerScreen from './components/player';
import ProfileScreen from './components/Profile';
import SearchScreen from './components/Search';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function MainTabs() {
return (
<Tab.Navigator>
<Tab.Screen name="Home" component={HomeScreen} />
<Tab.Screen name="listen" component={ListenScreen} />
<Tab.Screen name="search" component={SearchScreen} />
<Tab.Screen name="profile" component={ProfileScreen} />
</Tab.Navigator>
);
}
function App() {
return (
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="listen" component={ListenScreen} />
<Stack.Screen name="search" component={SearchScreen} />
<Stack.Screen name="profile" component={ProfileScreen} />
<Stack.Screen name="player" component={PlayerScreen} />
</Stack.Navigator>
</NavigationContainer>
);
}
export default App;