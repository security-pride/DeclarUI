import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import CreditCard from './components/CreditCard';
import CustomService from './components/CustomService';
import Repayment from './components/Repayment';
import SearchBranch from './components/SearchBranch';
const Stack = createStackNavigator();
const App = () => {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home">
<Stack.Screen name="Home" component={Home} options={{ title: '首页' }} />
<Stack.Screen name="CreditCard" component={CreditCard} options={{ title: '信用卡页面' }} />
<Stack.Screen name="CustomService" component={CustomService} options={{ title: '客服页面' }} />
<Stack.Screen name="Repayment" component={Repayment} options={{ title: '还款页面' }} />
<Stack.Screen name="SearchBranch" component={SearchBranch} options={{ title: '网点搜索页面' }} />
</Stack.Navigator>
</NavigationContainer>
);
};
export default App;