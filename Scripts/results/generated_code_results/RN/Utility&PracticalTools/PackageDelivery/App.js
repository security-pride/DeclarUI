import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTopDrawerOpen from './components/HomeTopDrawerOpen';
import HomeTopDrawerClose from './components/HomeTopDrawerClose';
import SendParcelDeliveryMethod from './components/SendParcelDeliveryMethod';
import SendParcelParcelSize from './components/SendParcelParcelSize';
import ParcelCenter from './components/ParcelCenter';
const Stack = createStackNavigator();
const App = () => {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home_Top_drawer_close" screenOptions={{ headerShown: false }}>
<Stack.Screen name="Home_Top_drawer_open" component={HomeTopDrawerOpen} />
<Stack.Screen name="Home_Top_drawer_close" component={HomeTopDrawerClose} />
<Stack.Screen name="SendParcel_Delivery_method" component={SendParcelDeliveryMethod} />
<Stack.Screen name="SendParcel_Parcel_size" component={SendParcelParcelSize} />
<Stack.Screen name="Parcel_center" component={ParcelCenter} />
</Stack.Navigator>
</NavigationContainer>
);
};
export default App;