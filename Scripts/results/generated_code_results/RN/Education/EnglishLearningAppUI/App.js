import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import LessonDetail from './components/LessonDetail';
import Search from './components/Search';
import Speak from './components/Speak';
import Conversation from './components/Conversation';
const Stack = createStackNavigator();
function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home">
<Stack.Screen
name="Home"
component={Home}
options={{ headerShown: false }}
/>
<Stack.Screen
name="LessonDetail"
component={LessonDetail}
options={{ headerShown: false }}
/>
<Stack.Screen
name="Search"
component={Search}
options={{ headerShown: false }}
/>
<Stack.Screen
name="Speak"
component={Speak}
options={{ headerShown: false }}
/>
<Stack.Screen
name="Conversation"
component={Conversation}
options={{ headerShown: false }}
/>
</Stack.Navigator>
</NavigationContainer>
);
}
export default App;