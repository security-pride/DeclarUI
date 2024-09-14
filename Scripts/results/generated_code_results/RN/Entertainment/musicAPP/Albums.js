import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Pressable, ImageBackground, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const AlbumsScreen = () => {
const navigation = useNavigation();
const [selectedTab, setSelectedTab] = useState('Albums');
const albums = [
{ id: '1', name: 'History', artist: 'Michael Jackson', songs: 10, cover: '../assets/snack-icon.png' },
{ id: '2', name: 'Thriller', artist: 'Michael Jackson', songs: 10, cover: '../assets/snack-icon.png' },
{ id: '3', name: "It Won't Be Soon..", artist: 'Maroon 5', songs: 10, cover: '../assets/snack-icon.png' },
{ id: '4', name: 'I Am... Yours', artist: 'Beyonce', songs: 10, cover: '../assets/snack-icon.png' },
{ id: '5', name: 'Queen II', artist: 'Queen', songs: 10, cover: '../assets/snack-icon.png' },
];
const renderAlbum = ({ item }) => (
<TouchableOpacity
style={styles.albumItem}
onPress={() => navigation.navigate('albumDetails', { album: item })}
>
<Image source={{ uri: item.cover }} style={styles.albumCover} />
<Text style={styles.albumName}>{item.name}</Text>
<Text style={styles.artistName}>{item.artist}</Text>
<Text style={styles.songCount}>{item.songs} Songs</Text>
</TouchableOpacity>
);
return (
<SafeAreaView style={styles.container}>
<View style={styles.header}>
<Text style={styles.time}>09:41</Text>
<View style={styles.statusIcons}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.icon} />
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.icon} />
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.icon} />
</View>
</View>
  <View style={styles.titleBar}>
    <Text style={styles.title}>Songs</Text>
    <Pressable onPress={() => console.log('Search pressed')}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.searchIcon} />
    </Pressable>
  </View>

  <View style={styles.tabBar}>
    <TouchableOpacity onPress={() => setSelectedTab('All Songs')}>
      <Text style={[styles.tabText, selectedTab === 'All Songs' && styles.selectedTab]}>All Songs</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setSelectedTab('Playlists')}>
      <Text style={[styles.tabText, selectedTab === 'Playlists' && styles.selectedTab]}>Playlists</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setSelectedTab('Albums')}>
      <Text style={[styles.tabText, selectedTab === 'Albums' && styles.selectedTab]}>Albums</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setSelectedTab('Artists')}>
      <Text style={[styles.tabText, selectedTab === 'Artists' && styles.selectedTab]}>Artists</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setSelectedTab('Genre')}>
      <Text style={[styles.tabText, selectedTab === 'Genre' && styles.selectedTab]}>Genre</Text>
    </TouchableOpacity>
  </View>

  <FlatList
    data={albums}
    renderItem={renderAlbum}
    keyExtractor={item => item.id}
    numColumns={2}
    contentContainerStyle={styles.albumGrid}
  />

  <View style={styles.playBar}>
    <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.smallAlbumCover} />
    <View style={styles.playControls}>
      <TouchableOpacity onPress={() => console.log('Previous track')}>
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.controlIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Play/Pause')}>
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.controlIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Next track')}>
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.controlIcon} />
      </TouchableOpacity>
    </View>
  </View>

  <View style={styles.bottomNav}>
    <TouchableOpacity onPress={() => navigation.navigate('home')}>
      <Text style={styles.navText}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('songs')}>
      <Text style={[styles.navText, styles.activeNavText]}>Songs</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('settings')}>
      <Text style={styles.navText}>Settings</Text>
    </TouchableOpacity>
  </View>
</SafeAreaView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#121212',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingHorizontal: 16,
paddingTop: 8,
},
time: {
color: '#fff',
fontSize: 14,
},
statusIcons: {
flexDirection: 'row',
},
icon: {
width: 16,
height: 16,
marginLeft: 4,
},
titleBar: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingHorizontal: 16,
marginTop: 16,
},
title: {
color: '#fff',
fontSize: 28,
fontWeight: 'bold',
},
searchIcon: {
width: 24,
height: 24,
},
tabBar: {
flexDirection: 'row',
justifyContent: 'space-around',
marginTop: 16,
borderBottomWidth: 1,
borderBottomColor: '#333',
},
tabText: {
color: '#999',
fontSize: 16,
paddingBottom: 8,
},
selectedTab: {
color: '#fff',
borderBottomWidth: 2,
borderBottomColor: '#1DB954',
},
albumGrid: {
paddingHorizontal: 8,
},
albumItem: {
width: '48%',
marginHorizontal: '1%',
marginBottom: 16,
},
albumCover: {
width: '100%',
aspectRatio: 1,
borderRadius: 8,
},
albumName: {
color: '#fff',
fontSize: 14,
marginTop: 4,
},
artistName: {
color: '#999',
fontSize: 12,
},
songCount: {
color: '#999',
fontSize: 12,
},
playBar: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#282828',
padding: 8,
},
smallAlbumCover: {
width: 40,
height: 40,
borderRadius: 4,
},
playControls: {
flexDirection: 'row',
justifyContent: 'space-around',
flex: 1,
},
controlIcon: {
width: 24,
height: 24,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
backgroundColor: '#282828',
paddingVertical: 8,
},
navText: {
color: '#999',
fontSize: 12,
},
activeNavText: {
color: '#1DB954',
},
});
export default AlbumsScreen;