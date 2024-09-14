import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './components/Homepage';
import Profile from './components/Profile';
import Messages from './components/Messages';
import Onboarding from './components/Onboarding';
import SearchResults from './components/SearchResults';
const Stack = createStackNavigator();
const App = () => {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
<Stack.Screen name="Onboarding" component={Onboarding} />
<Stack.Screen name="Homepage" component={Homepage} />
<Stack.Screen name="Profile" component={Profile} />
<Stack.Screen name="Messages" component={Messages} />
<Stack.Screen name="SearchResults" component={SearchResults} />
</Stack.Navigator>
</NavigationContainer>
);
};
export default App;