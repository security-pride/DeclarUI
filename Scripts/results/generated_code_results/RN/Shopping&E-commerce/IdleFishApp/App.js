import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Categories from './components/Categories';
import Home from './components/Home';
import JewelryCategory from './components/JewelryCategory';
import Sell from './components/Sell';
import Upload from './components/Upload';
const Stack = createStackNavigator();
const App = () => {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home">
<Stack.Screen
name="Categories"
component={Categories}
options={{ title: '分类页' }}
/>
<Stack.Screen
name="Home"
component={Home}
options={{ title: '主页' }}
/>
<Stack.Screen
name="JewelryCategory"
component={JewelryCategory}
options={{ title: '钱币珠宝类目页' }}
/>
<Stack.Screen
name="Sell"
component={Sell}
options={{ title: '卖闲置页面' }}
/>
<Stack.Screen
name="Upload"
component={Upload}
options={{ title: '发布页面' }}
/>
</Stack.Navigator>
</NavigationContainer>
);
};
export default App;