import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import ListenScreen from './components/ListenScreen';
import PlayerScreen from './components/PlayerScreen';
import ProfileScreen from './components/ProfileScreen';
import SearchScreen from './components/SearchScreen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function MainTabs() {
return (
<Tab.Navigator>
<Tab.Screen name="home" component={HomeScreen} />
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
<Stack.Screen
name="MainTabs"
component={MainTabs}
options={{ headerShown: false }}
/>
<Stack.Screen name="player" component={PlayerScreen} />
</Stack.Navigator>
</NavigationContainer>
);
}
export default App;