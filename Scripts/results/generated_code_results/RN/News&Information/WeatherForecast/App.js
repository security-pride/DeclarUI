import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Details from './components/Details';
import Setting from './components/Setting';
import AddLocations from './components/AddLocations';
import EditLocation from './components/EditLocation';
const Stack = createStackNavigator();
const App = () => {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home">
<Stack.Screen
name="Home"
component={Home}
options={{ headerShown: false }}
/>
<Stack.Screen
name="Details"
component={Details}
options={{ title: 'Weather Details' }}
/>
<Stack.Screen
name="Setting"
component={Setting}
options={{ title: 'Settings' }}
/>
<Stack.Screen
name="AddLocations"
component={AddLocations}
options={{ title: 'Add Location' }}
/>
<Stack.Screen
name="EditLocation"
component={EditLocation}
options={{ title: 'Edit Location' }}
/>
</Stack.Navigator>
</NavigationContainer>
);
};
export default App;