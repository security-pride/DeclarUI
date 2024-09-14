import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Me from './components/Me';
import OfflineReading from './components/OfflineReading';
import NewOptions from './components/NewOptions';
import Settings from './components/Settings';
const Stack = createStackNavigator();
const App = () => {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
<Stack.Screen name="Home" component={Home} />
<Stack.Screen name="Me" component={Me} />
<Stack.Screen name="OfflineReading" component={OfflineReading} />
<Stack.Screen name="NewOptions" component={NewOptions} />
<Stack.Screen name="Settings" component={Settings} />
</Stack.Navigator>
</NavigationContainer>
);
};
export default App;