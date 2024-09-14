import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const AlbumDetailsScreen = ({ route }) => {
const navigation = useNavigation();
const { album } = route.params;
const [isPlaying, setIsPlaying] = useState(false);
const songs = [
{ id: '1', title: 'Billie Jean', duration: '3:56' },
{ id: '2', title: 'The way you make..', duration: '4:12' },
{ id: '3', title: 'She is out of my life', duration: '3:56' },
{ id: '4', title: 'Thriller', duration: '4:12' },
{ id: '5', title: 'Beat It', duration: '3:56' },
{ id: '6', title: 'Bad', duration: '4:12' },
{ id: '7', title: 'Man in the mirror', duration: '3:56' },
{ id: '8', title: 'Scream', duration: '4:12' },
];
const renderSong = ({ item, index }) => (
<TouchableOpacity
style={styles.songItem}
onPress={() => navigation.navigate('playSong', { song: item, album: album })}
>
<View style={styles.songInfo}>
<Text style={styles.songTitle}>{item.title}</Text>
<Text style={styles.songDuration}>{item.duration}</Text>
</View>
<View style={styles.songControls}>
<TouchableOpacity onPress={() => console.log('Play song')}>
<Image source={require('../assets/snack-icon.png')} style={styles.playIcon} />
</TouchableOpacity>
<TouchableOpacity onPress={() => console.log('More options')}>
<Text style={styles.moreOptions}>•••</Text>
</TouchableOpacity>
</View>
</TouchableOpacity>
);
return (
<SafeAreaView style={styles.container}>
<View style={styles.header}>
<Text style={styles.time}>09:41</Text>
<View style={styles.statusIcons}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</View>
</View>
  <View style={styles.titleBar}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
    </TouchableOpacity>
    <Text style={styles.title}>Album Details</Text>
    <TouchableOpacity onPress={() => console.log('Search')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />
    </TouchableOpacity>
  </View>

  <View style={styles.albumInfo}>
    <Image source={require('../assets/snack-icon.png')} style={styles.albumCover} />
    <View style={styles.albumDetails}>
      <Text style={styles.albumTitle}>History</Text>
      <Text style={styles.albumArtist}>by Michael Jackson</Text>
      <Text style={styles.albumMeta}>1996 • 18 Songs • 64 min</Text>
    </View>
  </View>

  <View style={styles.actions}>
    <TouchableOpacity style={styles.playButton} onPress={() => setIsPlaying(!isPlaying)}>
      <Text style={styles.playButtonText}>{isPlaying ? 'Pause' : 'Play'}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.actionButton} onPress={() => console.log('Share')}>
      <Text style={styles.actionButtonText}>Share</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.actionButton} onPress={() => console.log('Add to Favorites')}>
      <Text style={styles.actionButtonText}>Add to Favorites</Text>
    </TouchableOpacity>
  </View>

  <FlatList
    data={songs}
    renderItem={renderSong}
    keyExtractor={item => item.id}
    style={styles.songList}
  />

  <View style={styles.playBar}>
    <Image source={require('../assets/snack-icon.png')} style={styles.smallAlbumCover} />
    <View style={styles.playControls}>
      <TouchableOpacity onPress={() => console.log('Previous track')}>
        <Image source={require('../assets/snack-icon.png')} style={styles.controlIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Play/Pause')}>
        <Image source={require('../assets/snack-icon.png')} style={styles.controlIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Next track')}>
        <Image source={require('../assets/snack-icon.png')} style={styles.controlIcon} />
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
backIcon: {
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
albumInfo: {
flexDirection: 'row',
padding: 16,
alignItems: 'center',
},
albumCover: {
width: 120,
height: 120,
borderRadius: 8,
},
albumDetails: {
marginLeft: 16,
},
albumTitle: {
color: '#fff',
fontSize: 24,
fontWeight: 'bold',
},
albumArtist: {
color: '#999',
fontSize: 16,
},
albumMeta: {
color: '#999',
fontSize: 14,
marginTop: 4,
},
actions: {
flexDirection: 'row',
justifyContent: 'space-around',
paddingVertical: 16,
},
playButton: {
backgroundColor: '#1DB954',
paddingHorizontal: 32,
paddingVertical: 8,
borderRadius: 20,
},
playButtonText: {
color: '#fff',
fontWeight: 'bold',
},
actionButton: {
borderColor: '#fff',
borderWidth: 1,
paddingHorizontal: 16,
paddingVertical: 8,
borderRadius: 20,
},
actionButtonText: {
color: '#fff',
},
songList: {
flex: 1,
},
songItem: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingVertical: 12,
paddingHorizontal: 16,
borderBottomWidth: 1,
borderBottomColor: '#333',
},
songInfo: {
flex: 1,
},
songTitle: {
color: '#fff',
fontSize: 16,
},
songDuration: {
color: '#999',
fontSize: 14,
},
songControls: {
flexDirection: 'row',
alignItems: 'center',
},
playIcon: {
width: 24,
height: 24,
marginRight: 16,
},
moreOptions: {
color: '#999',
fontSize: 20,
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
export default AlbumDetailsScreen;