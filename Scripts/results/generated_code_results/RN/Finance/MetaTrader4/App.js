import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Charts from './components/Charts';
import Objects from './components/Objects';
import QuoteAdvanced from './components/QuoteAdvanced';
import QuoteSimple from './components/QuoteSimple';
import Settings from './components/Settings';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function MainTabNavigator() {
return (
<Tab.Navigator>
<Tab.Screen name="Quotes" component={QuoteSimple} />
<Tab.Screen name="Chart" component={Charts} />
<Tab.Screen name="Trade" component={PlaceholderScreen} />
<Tab.Screen name="History" component={PlaceholderScreen} />
<Tab.Screen name="Settings" component={Settings} />
</Tab.Navigator>
);
}
function PlaceholderScreen() {
return null;
}
export default function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="QuoteSimple">
<Stack.Screen name="Charts" component={Charts} />
<Stack.Screen name="Objects" component={Objects} />
<Stack.Screen name="QuoteAdvanced" component={QuoteAdvanced} />
<Stack.Screen name="QuoteSimple" component={QuoteSimple} />
<Stack.Screen name="Settings" component={Settings} />
<Stack.Screen name="MainTab" component={MainTabNavigator} options={{ headerShown: false }} />
</Stack.Navigator>
</NavigationContainer>
);
}