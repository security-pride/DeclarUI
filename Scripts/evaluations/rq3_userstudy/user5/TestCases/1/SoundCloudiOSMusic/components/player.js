import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Slider from '@react-native-community/slider';
const PlayerScreen = () => {
const navigation = useNavigation();
const [isPlaying, setIsPlaying] = useState(true);
const [progress, setProgress] = useState(0.3); // 01:30 / 03:00
useEffect(() => {
if (isPlaying) {
const interval = setInterval(() => {
setProgress((prevProgress) => {
if (prevProgress >= 1) {
clearInterval(interval);
return 1;
}
return prevProgress + 0.01;
});
}, 1000);
return () => clearInterval(interval);
}
}, [isPlaying]);
const formatTime = (value) => {
const minutes = Math.floor(value * 3);
const seconds = Math.floor((value * 3 - minutes) * 60);
return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};
return (
<SafeAreaView style={styles.container}>
<StatusBar barStyle="light-content" />
<ImageBackground source={require('../assets/snack-icon.png')} style={styles.backgroundImage}>
<TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
<Text style={styles.closeButtonText}>X</Text>
</TouchableOpacity>
<View style={styles.overlay}>
<Text style={styles.overlayText}>I love being</Text>
<Text style={styles.overlayText}>Bi-Polar its awesome</Text>
</View>
</ImageBackground>
<View style={styles.controlsContainer}>
<View style={styles.songInfo}>
<TouchableOpacity style={styles.addButton}>
<Text style={styles.addButtonText}>+</Text>
</TouchableOpacity>
<View style={styles.titleArtist}>
<Text style={styles.songTitle}>All Mine</Text>
<Text style={styles.artistName}>Kanye West</Text>
</View>
<TouchableOpacity style={styles.likeButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
</View>
<Slider
style={styles.progressBar}
minimumValue={0}
maximumValue={1}
value={progress}
minimumTrackTintColor="#FF5500"
maximumTrackTintColor="#000000"
thumbTintColor="#FF5500"
onSlidingComplete={(value) => setProgress(value)}
/>
<View style={styles.timeInfo}>
<Text style={styles.timeText}>{formatTime(progress)}</Text>
<Text style={styles.timeText}>03:00</Text>
</View>
<View style={styles.controls}>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
<TouchableOpacity onPress={() => setIsPlaying(!isPlaying)}>
<Image
source={require('../assets/snack-icon.png')}
style={[styles.icon, styles.playPauseIcon]}
/>
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
</View>
<TouchableOpacity style={styles.fullscreenButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
</View>
<View style={styles.shareContainer}>
<Image source={require('../assets/snack-icon.png')} style={styles.instagramIcon} />
<View style={styles.shareTextContainer}>
<Text style={styles.shareTitle}>Share the sound!</Text>
<Text style={styles.shareDescription}>Let your friends know what are you listening! Share this song</Text>
</View>
<TouchableOpacity style={styles.useAppButton}>
<Text style={styles.useAppButtonText}>Use the app</Text>
</TouchableOpacity>
</View>
</SafeAreaView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
backgroundImage: {
width: '100%',
height: '50%',
},
closeButton: {
position: 'absolute',
top: 10,
right: 10,
padding: 10,
},
closeButtonText: {
color: '#fff',
fontSize: 20,
},
overlay: {
position: 'absolute',
bottom: 20,
left: 20,
},
overlayText: {
color: '#0f0',
fontSize: 18,
fontWeight: 'bold',
},
controlsContainer: {
padding: 20,
},
songInfo: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 20,
},
addButton: {
marginRight: 15,
},
addButtonText: {
fontSize: 24,
fontWeight: 'bold',
},
titleArtist: {
flex: 1,
},
songTitle: {
fontSize: 18,
fontWeight: 'bold',
},
artistName: {
fontSize: 16,
color: '#666',
},
likeButton: {
marginLeft: 15,
},
progressBar: {
width: '100%',
height: 40,
},
timeInfo: {
flexDirection: 'row',
justifyContent: 'space-between',
marginBottom: 20,
},
timeText: {
color: '#666',
},
controls: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: 20,
},
icon: {
width: 24,
height: 24,
},
playPauseIcon: {
width: 48,
height: 48,
},
fullscreenButton: {
alignSelf: 'flex-end',
},
shareContainer: {
flexDirection: 'row',
alignItems: 'center',
padding: 20,
backgroundColor: '#f0f0f0',
},
instagramIcon: {
width: 40,
height: 40,
marginRight: 15,
},
shareTextContainer: {
flex: 1,
},
shareTitle: {
fontSize: 16,
fontWeight: 'bold',
},
shareDescription: {
fontSize: 14,
color: '#666',
},
useAppButton: {
backgroundColor: '#FF1493',
paddingHorizontal: 15,
paddingVertical: 8,
borderRadius: 20,
},
useAppButtonText: {
color: '#fff',
fontWeight: 'bold',
},
});
export default PlayerScreen;