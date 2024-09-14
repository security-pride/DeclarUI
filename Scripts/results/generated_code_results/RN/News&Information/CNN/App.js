import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateAccountScreen from './components/CreateAccountScreen';
import LoginScreen from './components/LoginScreen';
import ElectionsScreen from './components/ElectionsScreen';
import HomeScreen from './components/HomeScreen';
import SettingsScreen from './components/SettingsScreen';
const Stack = createStackNavigator();
const App = () => {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="home">
<Stack.Screen
name="CreateAccont"
component={CreateAccountScreen}
options={{ title: 'Create Account' }}
/>
<Stack.Screen
name="LogIn"
component={LoginScreen}
options={{ title: 'Login' }}
/>
<Stack.Screen
name="elections"
component={ElectionsScreen}
options={{ title: 'Elections News' }}
/>
<Stack.Screen
name="home"
component={HomeScreen}
options={{ title: 'Home' }}
/>
<Stack.Screen
name="settings"
component={SettingsScreen}
options={{ title: 'Settings' }}
/>
</Stack.Navigator>
</NavigationContainer>
);
};
export default App;