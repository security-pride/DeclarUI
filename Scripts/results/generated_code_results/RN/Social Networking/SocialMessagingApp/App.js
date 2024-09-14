import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatScreen from './components/ChatScreen';
import ContactsScreen from './components/ContactsScreen';
import MessagesScreen from './components/MessagesScreen';
import ProfileScreen from './components/ProfileScreen';
import SearchScreen from './components/SearchScreen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MainTabs = () => {
return (
<Tab.Navigator>
<Tab.Screen name="Messages" component={MessagesScreen} />
<Tab.Screen name="Contacts" component={ContactsScreen} />
<Tab.Screen name="Calls" component={() => null} />
<Tab.Screen name="Profile" component={ProfileScreen} />
</Tab.Navigator>
);
};
const App = () => {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Messages">
<Stack.Screen
name="MainTabs"
component={MainTabs}
options={{ headerShown: false }}
/>
<Stack.Screen name="chat" component={ChatScreen} />
<Stack.Screen name="contacts" component={ContactsScreen} />
<Stack.Screen name="messages" component={MessagesScreen} />
<Stack.Screen name="profile" component={ProfileScreen} />
<Stack.Screen name="search" component={SearchScreen} />
</Stack.Navigator>
</NavigationContainer>
);
};
export default App;