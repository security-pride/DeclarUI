import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreditCardScreen from './components/CreditCardScreen';
import CustomServiceScreen from './components/CustomServiceScreen';
import HomeScreen from './components/HomeScreen';
import RepaymentScreen from './components/RepaymentScreen';
import SearchBranchScreen from './components/SearchBranchScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="CreditCard" component={CreditCardScreen} />
        <Stack.Screen name="CustomService" component={CustomServiceScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Repayment" component={RepaymentScreen} />
        <Stack.Screen name="SearchBranch" component={SearchBranchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;