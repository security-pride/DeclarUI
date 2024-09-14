import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import CryptoScreen from './components/CryptoScreen';
import BitcoinScreen from './components/BitcoinScreen';
import SendScreen from './components/SendScreen';
import WalletScreen from './components/WalletScreen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MainTabs = () => {
return (
<Tab.Navigator>
<Tab.Screen name="Home" component={HomeScreen} />
<Tab.Screen name="Crypto" component={CryptoScreen} />
<Tab.Screen name="Payments" component={HomeScreen} /> {/* Placeholder, as Payments screen is not defined in PTG */}
<Tab.Screen name="Wallet" component={WalletScreen} />
</Tab.Navigator>
);
};
const App = () => {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home">
<Stack.Screen
name="MainTabs"
component={MainTabs}
options={{ headerShown: false }}
/>
<Stack.Screen name="Bitcoin" component={BitcoinScreen} />
<Stack.Screen name="Send" component={SendScreen} />
</Stack.Navigator>
</NavigationContainer>
);
};
export default App;