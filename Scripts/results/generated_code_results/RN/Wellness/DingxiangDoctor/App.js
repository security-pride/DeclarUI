import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DiseaseDetail from './components/DiseaseDetail';
import Home from './components/Home';
import Profile from './components/Profile';
import Search from './components/Search';
import SearchMedicineDisease from './components/SearchMedicineDisease';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MainTabs = () => {
return (
<Tab.Navigator>
<Tab.Screen name="Home" component={Home} />
<Tab.Screen name="SearchMedicineDisease" component={SearchMedicineDisease} />
<Tab.Screen name="Profile" component={Profile} />
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
<Stack.Screen name="DiseaseDetail" component={DiseaseDetail} />
<Stack.Screen name="Search" component={Search} />
</Stack.Navigator>
</NavigationContainer>
);
};
export default App;