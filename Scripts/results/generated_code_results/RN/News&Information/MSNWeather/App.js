import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppsScreen from './components/AppsScreen';
import HomeScreen from './components/HomeScreen';
import SettingsScreen from './components/SettingsScreen';
import PersonalCentralScreen from './components/PersonalCentralScreen';
import NewsScreen from './components/NewsScreen';
const Stack = createStackNavigator();
const App = () => {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home">
<Stack.Screen
name="Apps"
component={AppsScreen}
options={{ title: 'Apps' }}
/>
<Stack.Screen
name="Home"
component={HomeScreen}
options={{ title: 'Home' }}
/>
<Stack.Screen
name="Settings"
component={SettingsScreen}
options={{ title: 'Settings' }}
/>
<Stack.Screen
name="PersonalCentral"
component={PersonalCentralScreen}
options={{ title: 'Personal Central' }}
/>
<Stack.Screen
name="News"
component={NewsScreen}
options={{ title: 'News' }}
/>
</Stack.Navigator>
</NavigationContainer>
);
};
export default App;