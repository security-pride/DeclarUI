import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './components/SearchScreen';
import SearchCategoryScreen from './components/SearchCategoryScreen';
import DetailsScreen from './components/DetailsScreen';
import CommentsScreen from './components/CommentsScreen';
import ReservationScreen from './components/ReservationScreen';
const Stack = createStackNavigator();
function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Search">
<Stack.Screen
name="Search"
component={SearchScreen}
options={{ title: '搜索页' }}
/>
<Stack.Screen
name="SearchCategory"
component={SearchCategoryScreen}
options={{ title: '分类搜索页' }}
/>
<Stack.Screen
name="Details"
component={DetailsScreen}
options={{ title: '房源详情页' }}
/>
<Stack.Screen
name="Comments"
component={CommentsScreen}
options={{ title: '评价页' }}
/>
<Stack.Screen
name="Reservation"
component={ReservationScreen}
options={{ title: '预订页' }}
/>
</Stack.Navigator>
</NavigationContainer>
);
}
export default App;