import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PlaylistScreen from './components/PlaylistScreen';
import ExploreScreen from './components/ExploreScreen';
import NowPlayingScreen from './components/NowPlayingScreen';
import SearchScreen from './components/SearchScreen';
import TrendingScreen from './components/TrendingScreen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function MainTabs() {
return (
<Tab.Navigator>
<Tab.Screen name="Explore" component={ExploreScreen} />
<Tab.Screen name="Trending" component={TrendingScreen} />
<Tab.Screen name="Search" component={SearchScreen} />
<Tab.Screen name="Library" component={ExploreScreen} />
<Tab.Screen name="Settings" component={ExploreScreen} />
</Tab.Navigator>
);
}
function App() {
return (
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen
name="MainTabs"
component={MainTabs}
options={{ headerShown: false }}
/>
<Stack.Screen name="playlist" component={PlaylistScreen} />
<Stack.Screen name="explore" component={ExploreScreen} />
<Stack.Screen name="nowPlaying" component={NowPlayingScreen} />
<Stack.Screen name="search" component={SearchScreen} />
<Stack.Screen name="trending" component={TrendingScreen} />
</Stack.Navigator>
</NavigationContainer>
);
}
export default App;