import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const PlaylistScreen = () => {
const navigation = useNavigation();
const [isPlaying, setIsPlaying] = useState(false);
const songs = [
{ id: '01', title: 'Gully Boy', artist: 'Ranvir Sing' },
{ id: '02', title: 'Apna Time Aayega', artist: 'Arijit Sing' },
{ id: '03', title: 'Illegal Weapon 2.0', artist: 'Street Dancer 3D' },
{ id: '04', title: 'Lagli Lahore Di', artist: 'Sreya Ghosal' },
{ id: '05', title: 'Bezubaan Kab Se', artist: 'Kapal Dev' },
{ id: '06', title: 'Nachi Nachi', artist: 'Sreya Ghoshal' },
];
const renderSongItem = ({ item, index }) => (
<TouchableOpacity
style={styles.songItem}
onPress={() => navigation.navigate('NowPlaying', { song: item })}
>
<Text style={[styles.songNumber, index === 2 && styles.activeSongNumber]}>{item.id}.</Text>
<View style={styles.songInfo}>
<Text style={[styles.songTitle, index === 2 && styles.activeSongTitle]}>{item.title}</Text>
<Text style={styles.songArtist}>{item.artist}</Text>
</View>
<TouchableOpacity style={styles.moreButton}>
<Text style={styles.moreButtonText}>...</Text>
</TouchableOpacity>
</TouchableOpacity>
);
return (
<View style={styles.container}>
<StatusBar barStyle="light-content" />
<View style={styles.header}>
<TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
</TouchableOpacity>
<View>
<Text style={styles.playlistTitle}>Geri - Inder Chahal</Text>
<Text style={styles.playlistGenre}>Pop Songs</Text>
</View>
</View>
<View style={styles.playlistInfo}>
<Image source={require('../assets/snack-icon.png')} style={styles.albumCover} />
<View style={styles.playlistDetails}>
<Text style={styles.songsCount}>Songs</Text>
<Text style={styles.songsNumber}>21 Songs</Text>
<Text style={styles.authorLabel}>Author</Text>
<Text style={styles.authorName}>Various Artits</Text>
</View>
<TouchableOpacity style={styles.playButton} onPress={() => setIsPlaying(!isPlaying)}>
<Image source={require('../assets/snack-icon.png')} style={styles.playIcon} />
</TouchableOpacity>
</View>
<FlatList
data={songs}
renderItem={renderSongItem}
keyExtractor={(item) => item.id}
style={styles.songList}
/>
<View style={styles.nowPlayingBar}>
<Image source={require('../assets/snack-icon.png')} style={styles.smallAlbumCover} />
<View style={styles.nowPlayingInfo}>
<Text style={styles.nowPlayingTitle}>Illegal Weapon 2.0</Text>
<Text style={styles.nowPlayingArtist}>Street Dancer 3D</Text>
</View>
<TouchableOpacity onPress={() => setIsPlaying(!isPlaying)} style={styles.pauseButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.pauseIcon} />
</TouchableOpacity>
<TouchableOpacity style={styles.heartButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.heartIcon} />
</TouchableOpacity>
</View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#4a90e2',
},
header: {
flexDirection: 'row',
alignItems: 'center',
paddingTop: 50,
paddingHorizontal: 20,
},
backButton: {
marginRight: 15,
},
backIcon: {
width: 24,
height: 24,
tintColor: 'white',
},
playlistTitle: {
fontSize: 24,
fontWeight: 'bold',
color: 'white',
},
playlistGenre: {
fontSize: 16,
color: 'rgba(255, 255, 255, 0.8)',
},
playlistInfo: {
flexDirection: 'row',
padding: 20,
alignItems: 'center',
},
albumCover: {
width: 100,
height: 100,
borderRadius: 10,
},
playlistDetails: {
marginLeft: 20,
flex: 1,
},
songsCount: {
color: 'rgba(255, 255, 255, 0.8)',
fontSize: 14,
},
songsNumber: {
color: 'white',
fontSize: 18,
fontWeight: 'bold',
},
authorLabel: {
color: 'rgba(255, 255, 255, 0.8)',
fontSize: 14,
marginTop: 10,
},
authorName: {
color: 'white',
fontSize: 18,
fontWeight: 'bold',
},
playButton: {
width: 60,
height: 60,
borderRadius: 30,
backgroundColor: '#ff4081',
justifyContent: 'center',
alignItems: 'center',
},
playIcon: {
width: 24,
height: 24,
tintColor: 'white',
},
songList: {
backgroundColor: 'white',
borderTopLeftRadius: 30,
borderTopRightRadius: 30,
},
songItem: {
flexDirection: 'row',
alignItems: 'center',
paddingVertical: 15,
paddingHorizontal: 20,
borderBottomWidth: 1,
borderBottomColor: '#f0f0f0',
},
songNumber: {
width: 30,
fontSize: 16,
color: '#999',
},
songInfo: {
flex: 1,
},
songTitle: {
fontSize: 16,
fontWeight: 'bold',
},
songArtist: {
fontSize: 14,
color: '#999',
},
moreButton: {
padding: 10,
},
moreButtonText: {
fontSize: 20,
color: '#999',
},
activeSongNumber: {
color: '#4a90e2',
},
activeSongTitle: {
color: '#4a90e2',
},
nowPlayingBar: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#4a90e2',
padding: 10,
},
smallAlbumCover: {
width: 40,
height: 40,
borderRadius: 5,
},
nowPlayingInfo: {
flex: 1,
marginLeft: 10,
},
nowPlayingTitle: {
color: 'white',
fontSize: 14,
fontWeight: 'bold',
},
nowPlayingArtist: {
color: 'rgba(255, 255, 255, 0.8)',
fontSize: 12,
},
pauseButton: {
padding: 10,
},
pauseIcon: {
width: 24,
height: 24,
tintColor: 'white',
},
heartButton: {
padding: 10,
},
heartIcon: {
width: 24,
height: 24,
tintColor: 'white',
},
});
export default PlaylistScreen;