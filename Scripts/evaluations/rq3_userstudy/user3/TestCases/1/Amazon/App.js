import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AccountPage from './components/AccountScreen';
import FilterPage from './components/FilterScreen';
import HomePage from './components/HomeScreen';
import OrdersPage from './components/OrdersScreen';
import ProfilePage from './components/ProfileScreen';
const Stack = createStackNavigator();
const App = () => {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home">
<Stack.Screen
name="Account"
component={AccountPage}
options={{ title: 'Account Page' }}
/>
<Stack.Screen
name="Filter"
component={FilterPage}
options={{ title: 'Order Filter Page' }}
/>
<Stack.Screen
name="Home"
component={HomePage}
options={{ title: 'Home Page' }}
/>
<Stack.Screen
name="Orders"
component={OrdersPage}
options={{ title: 'Your Orders Page' }}
/>
<Stack.Screen
name="Profile"
component={ProfilePage}
options={{ title: 'Profile Page' }}
/>
</Stack.Navigator>
</NavigationContainer>
);
};
export default App;