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
<Stack.Navigator initialRouteName="login">
<Stack.Screen name="login" component={LoginScreen} />
<Stack.Screen name="home" component={HomeScreen} />
<Stack.Screen name="discover" component={DiscoverScreen} />
<Stack.Screen name="comments" component={CommentsScreen} />
<Stack.Screen name="search" component={SearchScreen} />
</Stack.Navigator>
</NavigationContainer>
);
}
export default App;