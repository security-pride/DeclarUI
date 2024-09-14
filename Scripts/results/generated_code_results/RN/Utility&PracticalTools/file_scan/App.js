import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import StartScan from './components/StartScan';
import FinishScan from './components/FinishScan';
import SortBy from './components/SortBy';
import Menu from './components/Menu';
const Stack = createStackNavigator();
function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home">
<Stack.Screen
name="Home"
component={Home}
options={{ title: 'Home Page' }}
/>
<Stack.Screen
name="StartScan"
component={StartScan}
options={{ title: 'Start Scan Page' }}
/>
<Stack.Screen
name="FinishScan"
component={FinishScan}
options={{ title: 'Finish Scan Page' }}
/>
<Stack.Screen
name="SortBy"
component={SortBy}
options={{ title: 'Sort Options' }}
/>
<Stack.Screen
name="Menu"
component={Menu}
options={{ title: 'Menu Page' }}
/>
</Stack.Navigator>
</NavigationContainer>
);
}
export default App;