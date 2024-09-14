import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Slider from '@react-native-community/slider';
const PlaySongScreen = ({ route }) => {
const navigation = useNavigation();
const { song } = route.params;
const [isPlaying, setIsPlaying] = useState(true);
const [progress, setProgress] = useState(0);
useEffect(() => {
const interval = setInterval(() => {
if (isPlaying && progress < 1) {
setProgress((prevProgress) => prevProgress + 0.01);
}
}, 1000);
return () => clearInterval(interval);
}, [isPlaying, progress]);
const togglePlay = () => setIsPlaying(!isPlaying);
const formatTime = (timeInSeconds) => {
const minutes = Math.floor(timeInSeconds / 60);
const seconds = Math.floor(timeInSeconds % 60);
return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};
return (
<SafeAreaView style={styles.container}>
<StatusBar barStyle="light-content" />
<View style={styles.header}>
<TouchableOpacity onPress={() => navigation.goBack()}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
</TouchableOpacity>
<Text style={styles.headerTitle}>Now Playing</Text>
<TouchableOpacity onPress={() => console.log('More options')}>
<Image source={require('../assets/snack-icon.png')} style={styles.moreIcon} />
</TouchableOpacity>
</View>
  <View style={styles.albumArtContainer}>
    <Image source={require('../assets/snack-icon.png')} style={styles.albumArt} />
  </View>

  <View style={styles.songInfoContainer}>
    <Text style={styles.songTitle}>Black or White</Text>
    <Text style={styles.artistAlbum}>Michael Jackson • Album - Dangerous</Text>
  </View>

  <View style={styles.progressContainer}>
    <Slider
      style={styles.progressBar}
      minimumValue={0}
      maximumValue={1}
      value={progress}
      minimumTrackTintColor="#1DB954"
      maximumTrackTintColor="#777"
      thumbTintColor="#1DB954"
      onSlidingComplete={(value) => setProgress(value)}
    />
    <View style={styles.timeContainer}>
      <Text style={styles.timeText}>{formatTime(progress * 266)}</Text>
      <Text style={styles.timeText}>4:26</Text>
    </View>
  </View>

  <View style={styles.controlsContainer}>
    <TouchableOpacity onPress={() => console.log('Previous')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.controlIcon} />
    </TouchableOpacity>
    <TouchableOpacity onPress={togglePlay}>
      <Image 
        source={{ uri: isPlaying ? '../assets/snack-icon.png' : '../assets/snack-icon.png' }}
        style={styles.playPauseIcon}
      />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => console.log('Next')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.controlIcon} />
    </TouchableOpacity>
  </View>

  <View style={styles.additionalControlsContainer}>
    <TouchableOpacity style={styles.additionalControl}>
      <Image source={require('../assets/snack-icon.png')} style={styles.additionalControlIcon} />
      <Text style={styles.additionalControlText}>Playlist</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.additionalControl}>
      <Image source={require('../assets/snack-icon.png')} style={styles.additionalControlIcon} />
      <Text style={styles.additionalControlText}>Shuffle</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.additionalControl}>
      <Image source={require('../assets/snack-icon.png')} style={styles.additionalControlIcon} />
      <Text style={styles.additionalControlText}>Repeat</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.additionalControl}>
      <Image source={require('../assets/snack-icon.png')} style={styles.additionalControlIcon} />
      <Text style={styles.additionalControlText}>EQ</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.additionalControl}>
      <Image source={require('../assets/snack-icon.png')} style={styles.additionalControlIcon} />
      <Text style={styles.additionalControlText}>Favourites</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('home')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('songs')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Songs</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('settings')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
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
padding: 16,
},
backIcon: {
width: 24,
height: 24,
},
headerTitle: {
color: '#fff',
fontSize: 18,
fontWeight: 'bold',
},
moreIcon: {
width: 24,
height: 24,
},
albumArtContainer: {
alignItems: 'center',
marginTop: 20,
},
albumArt: {
width: 300,
height: 300,
borderRadius: 150,
},
songInfoContainer: {
alignItems: 'center',
marginTop: 20,
},
songTitle: {
color: '#fff',
fontSize: 24,
fontWeight: 'bold',
},
artistAlbum: {
color: '#999',
fontSize: 16,
marginTop: 4,
},
progressContainer: {
marginTop: 20,
paddingHorizontal: 20,
},
progressBar: {
width: '100%',
height: 40,
},
timeContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
},
timeText: {
color: '#999',
fontSize: 12,
},
controlsContainer: {
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
paddingBottom: 30,
},
controlIcon: {
width: 32,
height: 32,
marginHorizontal: 30,
},
playPauseIcon: {
width: 64,
height: 64,
},
additionalControlsContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
marginTop: -40,
},
additionalControl: {
alignItems: 'center',
},
additionalControlIcon: {
width: 24,
height: 24,
},
additionalControlText: {
color: '#999',
fontSize: 12,
marginTop: 4,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#333',
paddingVertical: 10,
position: 'absolute',
bottom: 0,
left: 0,
right: 0,
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
});
export default PlaySongScreen;