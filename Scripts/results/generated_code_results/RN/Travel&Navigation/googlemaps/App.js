import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SavingsScreen from './components/SavingsScreen';
import ContributionsScreen from './components/ContributionsScreen';
import DepartureScreen from './components/DepartureScreen';
import DestinationScreen from './components/DestinationScreen';
import ExploreScreen from './components/ExploreScreen';
const Stack = createStackNavigator();
const App = () => {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Explore">
<Stack.Screen name="Savings" component={SavingsScreen} />
<Stack.Screen name="Contributions" component={ContributionsScreen} />
<Stack.Screen name="Departure" component={DepartureScreen} />
<Stack.Screen name="Destination" component={DestinationScreen} />
<Stack.Screen name="Explore" component={ExploreScreen} />
</Stack.Navigator>
</NavigationContainer>
);
};
export default App;