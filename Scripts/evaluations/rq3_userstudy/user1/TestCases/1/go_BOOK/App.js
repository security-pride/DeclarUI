import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// 导入页面组件（假设这些组件已经创建）
import CreateAccountScreen from './screens/Create_Account';
import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';
import NotificationScreen from './screens/Notification';
import ProfileScreen from './screens/Profile';
import SearchResultScreen from './screens/SearchResult';
import SettingScreen from './screens/Setting';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CreateAccount">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SearchResult" component={SearchResultScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;