import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import MenuScreen from './components/MenuScreen';
import ProfileScreen from './components/ProfileScreen';
import SearchScreen from './components/SearchScreen';
import TrendsScreen from './components/TrendsScreen';
const Stack = createStackNavigator();
function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="menu" screenOptions={{ headerShown: false }}>
<Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Timeline' }} />
<Stack.Screen name="Menu" component={MenuScreen} options={{ title: 'Profile Menu' }} />
<Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'User Profile' }} />
<Stack.Screen name="Search" component={SearchScreen} options={{ title: 'Search' }} />
<Stack.Screen name="Trends" component={TrendsScreen} options={{ title: 'Trends' }} />
</Stack.Navigator>
</NavigationContainer>
);
}
export default App;