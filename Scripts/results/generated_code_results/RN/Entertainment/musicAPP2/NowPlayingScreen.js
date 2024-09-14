import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');
const NowPlayingScreen = () => {
const navigation = useNavigation();
const [isPlaying, setIsPlaying] = useState(true);
const [currentTime, setCurrentTime] = useState(0);
const togglePlayPause = () => {
setIsPlaying(!isPlaying);
};
const navigateToPlaylist = () => {
navigation.navigate('Playlist');
};
return (
<View style={styles.container}>
<StatusBar barStyle="light-content" />
<Image source={require('../assets/snack-icon.png')} style={styles.backgroundImage} blurRadius={20} />
<View style={styles.content}>
<Text style={styles.headerText}>Now Playing</Text>
<TouchableOpacity style={styles.downArrow} onPress={() => navigation.goBack()}>
<Image source={require('../assets/snack-icon.png')} style={styles.downArrowIcon} />
</TouchableOpacity>
<View style={styles.albumArtContainer}>
<Image source={require('../assets/snack-icon.png')} style={styles.albumArt} />
</View>
<View style={styles.songInfo}>
<Text style={styles.songTitle}>Apna Time Aayega</Text>
<Text style={styles.artistName}>Arijit Sing</Text>
</View>
<View style={styles.progressBar}>
<View style={[styles.progress, { width: ${(currentTime / 5.06) * 100}% }]} />
</View>
<View style={styles.timeInfo}>
<Text style={styles.timeText}>0.00</Text>
<Text style={styles.timeText}>5.06</Text>
</View>
<View style={styles.controls}>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.controlIcon} />
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.controlIcon} />
</TouchableOpacity>
<TouchableOpacity style={styles.playPauseButton} onPress={togglePlayPause}>
<Image
source={isPlaying ? require('../assets/snack-icon.png') : require('../assets/snack-icon.png')}
style={styles.playPauseIcon}
/>
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.controlIcon} />
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.controlIcon} />
</TouchableOpacity>
</View>
<View style={styles.bottomIcons}>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.bottomIcon} />
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.bottomIcon} />
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.bottomIcon} />
</TouchableOpacity>
<TouchableOpacity onPress={navigateToPlaylist}>
<Image source={require('../assets/snack-icon.png')} style={styles.bottomIcon} />
</TouchableOpacity>
</View>
</View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#4a90e2',
},
backgroundImage: {
position: 'absolute',
width: width,
height: height,
opacity: 0.5,
},
content: {
flex: 1,
padding: 20,
justifyContent: 'space-between',
},
headerText: {
fontSize: 24,
fontWeight: 'bold',
color: 'white',
marginTop: 40,
},
downArrow: {
position: 'absolute',
top: 60,
left: '50%',
marginLeft: -15,
},
downArrowIcon: {
width: 30,
height: 30,
tintColor: 'white',
},
albumArtContainer: {
alignItems: 'center',
marginTop: 40,
},
albumArt: {
width: width * 0.7,
height: width * 0.7,
borderRadius: 20,
},
songInfo: {
alignItems: 'center',
marginTop: 20,
},
songTitle: {
fontSize: 24,
fontWeight: 'bold',
color: 'white',
},
artistName: {
fontSize: 18,
color: 'rgba(255, 255, 255, 0.8)',
marginTop: 5,
},
progressBar: {
height: 4,
backgroundColor: 'rgba(255, 255, 255, 0.3)',
borderRadius: 2,
marginTop: 20,
},
progress: {
height: 4,
backgroundColor: 'white',
borderRadius: 2,
},
timeInfo: {
flexDirection: 'row',
justifyContent: 'space-between',
marginTop: 10,
},
timeText: {
color: 'rgba(255, 255, 255, 0.8)',
fontSize: 12,
},
controls: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginTop: 30,
},
controlIcon: {
width: 30,
height: 30,
tintColor: 'white',
},
playPauseButton: {
width: 70,
height: 70,
borderRadius: 35,
backgroundColor: 'white',
justifyContent: 'center',
alignItems: 'center',
},
playPauseIcon: {
width: 30,
height: 30,
tintColor: '#4a90e2',
},
bottomIcons: {
flexDirection: 'row',
justifyContent: 'space-between',
marginTop: 40,
},
bottomIcon: {
width: 25,
height: 25,
tintColor: 'white',
},
});
export default NowPlayingScreen;