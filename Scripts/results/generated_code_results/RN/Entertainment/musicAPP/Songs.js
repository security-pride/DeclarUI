import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SongsScreen = () => {
const navigation = useNavigation();
const [selectedTab, setSelectedTab] = useState('All Songs');
const songs = [
{ id: '1', title: 'Billie Jean', artist: 'Michael Jackson', image: '../assets/snack-icon.png' },
{ id: '2', title: 'Be the girl', artist: 'Bebe Rexha', image: '../assets/snack-icon.png' },
{ id: '3', title: 'Countryman', artist: 'Daughtry', image: '../assets/snack-icon.png' },
{ id: '4', title: 'Do you feel loneliness', artist: 'Marc Anthony', image: '../assets/snack-icon.png' },
{ id: '5', title: 'Earth song', artist: 'Michael Jackson', image: '../assets/snack-icon.png' },
{ id: '6', title: 'Smooth criminal', artist: 'Michael Jackson', image: '../assets/snack-icon.png' },
{ id: '7', title: 'The way you make me feel', artist: 'Michael Jackson', image: '../assets/snack-icon.png' },
{ id: '8', title: 'Somebody that I used to know', artist: 'Gotye', image: '../assets/snack-icon.png' },
{ id: '9', title: 'Wild Thoughts', artist: 'DJ Khaled', image: '../assets/snack-icon.png' },
];
const renderSong = ({ item }) => (
<TouchableOpacity
style={styles.songItem}
onPress={() => navigation.navigate('playSong', { song: item })}
>
<Image source={{ uri: item.image }} style={styles.songImage} />
<View style={styles.songInfo}>
<Text style={styles.songTitle}>{item.title}</Text>
<Text style={styles.songArtist}>{item.artist}</Text>
</View>
<TouchableOpacity onPress={() => console.log('Play song')}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.playIcon} />
</TouchableOpacity>
</TouchableOpacity>
);
return (
<SafeAreaView style={styles.container}>
<StatusBar barStyle="light-content" />
<View style={styles.header}>
<Text style={styles.time}>09:41</Text>
<View style={styles.statusIcons}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.icon} />
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.icon} />
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.icon} />
</View>
</View>
  <View style={styles.titleBar}>
    <TouchableOpacity onPress={() => console.log('Open menu')}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.menuIcon} />
    </TouchableOpacity>
    <Text style={styles.title}>Songs</Text>
    <TouchableOpacity onPress={() => console.log('Open search')}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.searchIcon} />
    </TouchableOpacity>
  </View>

  <View style={styles.tabBar}>
    <TouchableOpacity onPress={() => setSelectedTab('All Songs')}>
      <Text style={[styles.tabText, selectedTab === 'All Songs' && styles.selectedTab]}>All Songs</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setSelectedTab('Playlists')}>
      <Text style={[styles.tabText, selectedTab === 'Playlists' && styles.selectedTab]}>Playlists</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('albums')}>
      <Text style={styles.tabText}>Albums</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setSelectedTab('Artists')}>
      <Text style={[styles.tabText, selectedTab === 'Artists' && styles.selectedTab]}>Artists</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setSelectedTab('Genre')}>
      <Text style={[styles.tabText, selectedTab === 'Genre' && styles.selectedTab]}>Genre</Text>
    </TouchableOpacity>
  </View>

  <FlatList
    data={songs}
    renderItem={renderSong}
    keyExtractor={item => item.id}
    style={styles.songList}
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
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('home')}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={[styles.navText, styles.activeNavText]}>Songs</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('settings')}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
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
menuIcon: {
width: 24,
height: 24,
},
title: {
color: '#fff',
fontSize: 20,
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
color: '#E91E63',
borderBottomWidth: 2,
borderBottomColor: '#E91E63',
},
songList: {
flex: 1,
},
songItem: {
flexDirection: 'row',
alignItems: 'center',
paddingVertical: 12,
paddingHorizontal: 16,
borderBottomWidth: 1,
borderBottomColor: '#333',
},
songImage: {
width: 48,
height: 48,
borderRadius: 24,
},
songInfo: {
flex: 1,
marginLeft: 16,
},
songTitle: {
color: '#fff',
fontSize: 16,
},
songArtist: {
color: '#999',
fontSize: 14,
},
playIcon: {
width: 24,
height: 24,
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
navItem: {
alignItems: 'center',
},
navIcon: {
width: 24,
height: 24,
},
navText: {
color: '#999',
fontSize: 12,
marginTop: 4,
},
activeNavText: {
color: '#E91E63',
},
});
export default SongsScreen;