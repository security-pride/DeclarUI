import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import TicketsScreen from './components/TicketsScreen';
import TradeScreen from './components/TradeScreen';
import UtilityBillsScreen from './components/UtilityBillsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Tickets" component={TicketsScreen} />
        <Stack.Screen name="Trade" component={TradeScreen} />
        <Stack.Screen name="UtilityBills" component={UtilityBillsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}