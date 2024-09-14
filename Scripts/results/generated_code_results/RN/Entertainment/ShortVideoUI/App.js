import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import InboxScreen from './components/InboxScreen';
import CommentsScreen from './components/CommentsScreen';
import ShareScreen from './components/ShareScreen';
import ProfileScreen from './components/ProfileScreen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MainTabs = () => {
return (
<Tab.Navigator>
<Tab.Screen name="home" component={HomeScreen} />
<Tab.Screen name="Discover" component={HomeScreen} /> {/* Placeholder /}
<Tab.Screen name="Create" component={HomeScreen} /> {/ Placeholder */}
<Tab.Screen name="inbox" component={InboxScreen} />
<Tab.Screen name="profile" component={ProfileScreen} />
</Tab.Navigator>
);
};
const App = () => {
return (
<NavigationContainer>
<Stack.Navigator mode="modal">
<Stack.Screen
name="MainTabs"
component={MainTabs}
options={{ headerShown: false }}
/>
<Stack.Screen name="comments" component={CommentsScreen} />
<Stack.Screen name="share" component={ShareScreen} />
</Stack.Navigator>
</NavigationContainer>
);
};
export default App;