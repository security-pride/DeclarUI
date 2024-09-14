import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, SafeAreaView } from 'react-native';
const PlaylistScreen = ({ navigation }) => {
const [isPlaying, setIsPlaying] = useState(false);
const songList = [
{ number: '01', title: 'Gully Boy', artist: 'Ranvir Sing' },
{ number: '02', title: 'Apna Time Aayega', artist: 'Arijit Sing' },
{ number: '03', title: 'Illegal Weapon 2.0', artist: 'Street Dancer 3D' },
{ number: '04', title: 'Lagli Lahore Di', artist: 'Sreya Ghosal' },
{ number: '05', title: 'Bezubaan Kab Se', artist: 'Kapal Dev' },
{ number: '06', title: 'Nachi Nachi', artist: 'Sreya Ghoshal' },
];
const renderSongItem = ({ item, index }) => (
<TouchableOpacity style={styles.songItem}>
<Text style={styles.songNumber}>{item.number}</Text>
<View style={styles.songInfo}>
<Text style={[styles.songTitle, index === 2 && styles.activeSong]}>{item.title}</Text>
<Text style={styles.artistName}>{item.artist}</Text>
</View>
<TouchableOpacity style={styles.moreButton}>
<Text style={styles.moreButtonText}>•••</Text>
</TouchableOpacity>
</TouchableOpacity>
);
return (
<SafeAreaView style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={() => navigation.goBack()}>
<Image source={require('../assets/snack-icon.png')} style={styles.backButton} />
</TouchableOpacity>
<View style={styles.headerTextContainer}>
<Text style={styles.headerTitle}>Geri - Inder Chahal</Text>
<Text style={styles.headerSubtitle}>Pop Songs</Text>
</View>
</View>
  <View style={styles.albumInfoContainer}>
    <Image source={require('../assets/snack-icon.png')} style={styles.albumCover} />
    <View style={styles.albumDetails}>
      <Text style={styles.songsCount}>21 Songs</Text>
      <Text style={styles.albumAuthor}>Various Artists</Text>
      <TouchableOpacity style={styles.playButton} onPress={() => setIsPlaying(!isPlaying)}>
        <Image source={require('../assets/snack-icon.png')} style={styles.playIcon} />
      </TouchableOpacity>
    </View>
  </View>

  <FlatList
    data={songList}
    renderItem={renderSongItem}
    keyExtractor={(item) => item.number}
    style={styles.songList}
  />

  <View style={styles.nowPlayingBar}>
    <Image source={require('../assets/snack-icon.png')} style={styles.nowPlayingImage} />
    <View style={styles.nowPlayingInfo}>
      <Text style={styles.nowPlayingTitle}>Illegal Weapon 2.0</Text>
      <Text style={styles.nowPlayingArtist}>Street Dancer 3D</Text>
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('NowPlaying')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.heartIcon} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setIsPlaying(!isPlaying)}>
      <Image 
        source={isPlaying ? require('../assets/snack-icon.png') : require('../assets/snack-icon.png')} 
        style={styles.playPauseIcon} 
      />
    </TouchableOpacity>
  </View>
</SafeAreaView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#4169E1',
},
header: {
flexDirection: 'row',
alignItems: 'center',
padding: 20,
},
backButton: {
width: 24,
height: 24,
marginRight: 15,
},
headerTextContainer: {
flex: 1,
},
headerTitle: {
fontSize: 24,
fontWeight: 'bold',
color: '#FFFFFF',
},
headerSubtitle: {
fontSize: 16,
color: '#E0E0E0',
},
albumInfoContainer: {
flexDirection: 'row',
padding: 20,
alignItems: 'center',
},
albumCover: {
width: 120,
height: 120,
borderRadius: 10,
},
albumDetails: {
marginLeft: 20,
},
songsCount: {
fontSize: 18,
color: '#FFFFFF',
fontWeight: 'bold',
},
albumAuthor: {
fontSize: 16,
color: '#E0E0E0',
},
playButton: {
backgroundColor: '#FF4500',
width: 50,
height: 50,
borderRadius: 25,
justifyContent: 'center',
alignItems: 'center',
marginTop: 10,
},
playIcon: {
width: 20,
height: 20,
},
songList: {
backgroundColor: '#FFFFFF',
borderTopLeftRadius: 30,
borderTopRightRadius: 30,
},
songItem: {
flexDirection: 'row',
alignItems: 'center',
padding: 15,
borderBottomWidth: 1,
borderBottomColor: '#E0E0E0',
},
songNumber: {
fontSize: 16,
color: '#888888',
width: 30,
},
songInfo: {
flex: 1,
},
songTitle: {
fontSize: 16,
fontWeight: 'bold',
},
artistName: {
fontSize: 14,
color: '#888888',
},
activeSong: {
color: '#4169E1',
},
moreButton: {
padding: 5,
},
moreButtonText: {
fontSize: 20,
color: '#888888',
},
nowPlayingBar: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
backgroundColor: '#3A5FCD',
},
nowPlayingImage: {
width: 40,
height: 40,
borderRadius: 20,
marginRight: 10,
},
nowPlayingInfo: {
flex: 1,
},
nowPlayingTitle: {
fontSize: 16,
color: '#FFFFFF',
fontWeight: 'bold',
},
nowPlayingArtist: {
fontSize: 14,
color: '#E0E0E0',
},
heartIcon: {
width: 24,
height: 24,
marginRight: 15,
},
playPauseIcon: {
width: 30,
height: 30,
},
});
export default PlaylistScreen;