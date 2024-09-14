import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './components/HomepageScreen';
import Profile from './components/ProfileScreen';
import Messages from './components/MessagesScreen';
import Onboarding from './components/OnboardingScreen';
import SearchResults from './components/SearchResultScreen';
const Stack = createStackNavigator();
const App = () => {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
<Stack.Screen name="Onboarding" component={Onboarding} />
<Stack.Screen name="Homepage" component={Homepage} />
<Stack.Screen name="Profile" component={Profile} />
<Stack.Screen name="Messages" component={Messages} />
<Stack.Screen name="SearchResult" component={SearchResults} />
</Stack.Navigator>
</NavigationContainer>
);
};
export default App;