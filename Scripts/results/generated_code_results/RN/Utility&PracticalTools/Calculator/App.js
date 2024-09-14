import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ClearHistory from './components/ClearHistory';
import DefaultView from './components/DefaultView';
import ExpandedView from './components/ExpandedView';
import ExpandedViewShowHistory from './components/ExpandedViewShowHistory';
import ShowHistory from './components/ShowHistory';
const Stack = createStackNavigator();
const App = () => {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="DefaultView">
<Stack.Screen
name="ClearHistory"
component={ClearHistory}
options={{ title: 'Clear History View' }}
/>
<Stack.Screen
name="DefaultView"
component={DefaultView}
options={{ title: 'Default Calculator View' }}
/>
<Stack.Screen
name="ExpandedView"
component={ExpandedView}
options={{ title: 'Expanded Calculator View' }}
/>
<Stack.Screen
name="ExpandedView-ShowHistory"
component={ExpandedViewShowHistory}
options={{ title: 'Expanded View with History' }}
/>
<Stack.Screen
name="ShowHistory"
component={ShowHistory}
options={{ title: 'History View' }}
/>
</Stack.Navigator>
</NavigationContainer>
);
};
export default App;