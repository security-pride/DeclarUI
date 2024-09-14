import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 首页 from './components/home';
import 精选 from './components/select';
import 夸克日报 from './components/quarknews';
import 夸克扫描王 from './components/quarkscan';
import 夸克网盘 from './components/quarkcloud';
const Stack = createStackNavigator();
function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="首页" screenOptions={{ headerShown: false }}>
<Stack.Screen name="首页" component={首页} />
<Stack.Screen name="精选" component={精选} />
<Stack.Screen name="夸克日报" component={夸克日报} />
<Stack.Screen name="夸克扫描王" component={夸克扫描王} />
<Stack.Screen name="夸克网盘" component={夸克网盘} />
</Stack.Navigator>
</NavigationContainer>
);
}
export default App;