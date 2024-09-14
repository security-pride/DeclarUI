import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cards from './components/Cards';
import Help from './components/Help';
import Home from './components/Home';
import More from './components/More';
import StatementsandDocuments from './components/StatementsandDocuments';
const Stack = createStackNavigator();
const App = () => {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
<Stack.Screen name="Cards" component={Cards} />
<Stack.Screen name="Help" component={Help} />
<Stack.Screen name="Home" component={Home} />
<Stack.Screen name="More" component={More} />
<Stack.Screen name="StatementsandDocuments" component={StatementsandDocuments} />
</Stack.Navigator>
</NavigationContainer>
);
};
export default App;