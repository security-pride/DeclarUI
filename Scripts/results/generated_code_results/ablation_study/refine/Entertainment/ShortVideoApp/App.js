import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import DiscoverScreen from './components/DiscoverScreen';
import CommentsScreen from './components/CommentsScreen';
import SearchScreen from './components/SearchScreen';
const Stack = createStackNavigator();
function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Login">
<Stack.Screen name="Login" component={LoginScreen} />
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="Discover" component={DiscoverScreen} />
<Stack.Screen name="Comments" component={CommentsScreen} />
<Stack.Screen name="Search" component={SearchScreen} />
</Stack.Navigator>
</NavigationContainer>
);
}
export default App;