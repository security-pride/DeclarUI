import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import MoreScreen from './components/MoreScreen';
import SearchScreen from './components/SearchScreen';
import SelectScreen from './components/SelectScreen';
import SortScreen from './components/SortScreen';
const Stack = createStackNavigator();
const App = () => {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="home">
<Stack.Screen
name="home"
component={HomeScreen}
options={{ title: 'PDF File List' }}
/>
<Stack.Screen
name="more"
component={MoreScreen}
options={{ title: 'File Options' }}
/>
<Stack.Screen
name="search"
component={SearchScreen}
options={{ title: 'Search Files' }}
/>
<Stack.Screen
name="select"
component={SelectScreen}
options={{ title: 'File Conversion' }}
/>
<Stack.Screen
name="sort"
component={SortScreen}
options={{ title: 'Sort Options' }}
/>
</Stack.Navigator>
</NavigationContainer>
);
};
export default App;