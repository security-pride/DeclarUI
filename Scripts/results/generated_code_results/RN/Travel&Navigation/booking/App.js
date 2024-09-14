import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from './components/DetailsScreen';
import ReservationScreen from './components/ReservationScreen';
import SearchScreen from './components/SearchScreen';
import SurroundingsScreen from './components/SurroundingsScreen';
import TypeDetailsScreen from './components/TypeDetailsScreen';
const Stack = createStackNavigator();
const App = () => {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Search" screenOptions={{ headerShown: false }}>
<Stack.Screen name="Details" component={DetailsScreen} />
<Stack.Screen name="Reservation" component={ReservationScreen} />
<Stack.Screen name="Search" component={SearchScreen} />
<Stack.Screen name="Surroundings" component={SurroundingsScreen} />
<Stack.Screen name="TypeDetails" component={TypeDetailsScreen} />
</Stack.Navigator>
</NavigationContainer>
);
};
export default App;