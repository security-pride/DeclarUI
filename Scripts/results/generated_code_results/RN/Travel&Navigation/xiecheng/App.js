import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Travel from './components/Travel';
import GroupDetails from './components/GroupDetails';
import GroupTravel from './components/GroupTravel';
import GroupTravelSearchResult from './components/GroupTravelSearchResult';
import Home from './components/Home';
const Stack = createStackNavigator();
const App = () => {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
<Stack.Screen name="Travel" component={Travel} />
<Stack.Screen name="GroupDetails" component={GroupDetails} />
<Stack.Screen name="GroupTravel" component={GroupTravel} />
<Stack.Screen name="GroupTravelSearchResult" component={GroupTravelSearchResult} />
<Stack.Screen name="Home" component={Home} />
</Stack.Navigator>
</NavigationContainer>
);
};
export default App;