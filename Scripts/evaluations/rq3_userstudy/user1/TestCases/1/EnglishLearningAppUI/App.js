import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './components/HomeScreen';
import LessonDetailPage from './components/LessonDetailScreen';
import SearchPage from './components/SearchScreen';
import SpeakingCoursePage from './components/SpeakScreen';
import ConversationPracticePage from './components/ConversationScreen';
const Stack = createStackNavigator();
function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
<Stack.Screen name="Home" component={HomePage} />
<Stack.Screen name="LessonDetail" component={LessonDetailPage} />
<Stack.Screen name="Search" component={SearchPage} />
<Stack.Screen name="Speak" component={SpeakingCoursePage} />
<Stack.Screen name="Conversation" component={ConversationPracticePage} />
</Stack.Navigator>
</NavigationContainer>
);
}
export default App;