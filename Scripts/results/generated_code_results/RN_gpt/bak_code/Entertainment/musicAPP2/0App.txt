import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ExploreScreen from './components/ExploreScreen';
import NowPlayingScreen from './components/NowPlayingScreen';
import PlaylistScreen from './components/PlaylistScreen';
import SearchScreen from './components/SearchScreen';
import TrendingScreen from './components/TrendingScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Explore" component={ExploreScreen} />
        <Stack.Screen name="NowPlaying" component={NowPlayingScreen} />
        <Stack.Screen name="Playlist" component={PlaylistScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Trending" component={TrendingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}