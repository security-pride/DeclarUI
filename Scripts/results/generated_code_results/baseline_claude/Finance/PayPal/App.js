import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BitcoinScreen from './components/BitcoinScreen';
import CryptoScreen from './components/CryptoScreen';
import HomeScreen from './components/HomeScreen';
import SendScreen from './components/SendScreen';
import WalletScreen from './components/WalletScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Bitcoin" component={BitcoinScreen} />
        <Stack.Screen name="Crypto" component={CryptoScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Send" component={SendScreen} />
        <Stack.Screen name="Wallet" component={WalletScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;