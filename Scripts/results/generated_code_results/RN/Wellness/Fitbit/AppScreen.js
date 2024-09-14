import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DiscoveryScreen from './components/DiscoveryScreen';
import EnvironmentSimulationScreen from './components/EnvironmentSimulationScreen';
import FindFriendScreen from './components/FindFriendScreen';
import FriendsScreen from './components/FriendsScreen';
import HomeScreen from './components/HomeScreen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MainTabs = () => {
return (
<Tab.Navigator>
<Tab.Screen name="Home" component={HomeScreen} />
<Tab.Screen name="Discovery" component={DiscoveryScreen} />
<Tab.Screen name="Friends" component={FriendsScreen} />
</Tab.Navigator>
);
};
const App = () => {
return (
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen
name="MainTabs"
component={MainTabs}
options={{ headerShown: false }}
/>
<Stack.Screen name="EnvironmentSimulation" component={EnvironmentSimulationScreen} />
<Stack.Screen name="FindFriend" component={FindFriendScreen} />
</Stack.Navigator>
</NavigationContainer>
);
};
export default App;