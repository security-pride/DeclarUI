import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Albums from './components/Albums';
import AlbumDetails from './components/AlbumDetails';
import Home from './components/Home';
import PlaySong from './components/PlaySong';
import Songs from './components/Songs';
const Stack = createStackNavigator();
function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="home">
<Stack.Screen name="albums" component={Albums} />
<Stack.Screen name="albumDetails" component={AlbumDetails} />
<Stack.Screen name="home" component={Home} />
<Stack.Screen name="playSong" component={PlaySong} />
<Stack.Screen name="songs" component={Songs} />
</Stack.Navigator>
</NavigationContainer>
);
}
export default App;