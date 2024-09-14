import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';



import AlbumsScreen from './components/AlbumsScreen';

import AlbumsDetailsScreen from './components/AlbumsDetailsScreen';

import HomeScreen from './components/HomeScreen';

import PlaySongScreen from './components/PlaySongScreen';

import SongsScreen from './components/SongsScreen';



const Stack = createStackNavigator();



const App = () => {

  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Albums" component={AlbumsScreen} />

        <Stack.Screen name="AlbumDetails" component={AlbumsDetailsScreen} />

        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="PlaySong" component={PlaySongScreen} />

        <Stack.Screen name="Songs" component={SongsScreen} />

      </Stack.Navigator>

    </NavigationContainer>

  );

};



export default App;