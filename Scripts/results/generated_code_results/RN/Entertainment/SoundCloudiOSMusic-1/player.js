import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Slider from '@react-native-community/slider';
const PlayerScreen = () => {
const navigation = useNavigation();
const [isPlaying, setIsPlaying] = useState(true);
const [currentTime, setCurrentTime] = useState(90); // 01:30 in seconds
const totalDuration = 180; // 03:00 in seconds
useEffect(() => {
const interval = setInterval(() => {
if (isPlaying && currentTime < totalDuration) {
setCurrentTime(prevTime => prevTime + 1);
}
return () => clearInterval(interval);
}, [isPlaying, currentTime]);
const formatTime = (timeInSeconds) => {
const minutes = Math.floor(timeInSeconds / 60);
const seconds = timeInSeconds % 60;
return ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')};
};
return (
<View style={styles.container}>
<StatusBar barStyle="dark-content" />
<TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
<Text style={styles.closeButtonText}>×</Text>
</TouchableOpacity>
  <ImageBackground
    source={require('../assets/snack-icon.png')}
    style={styles.albumArt}
    imageStyle={styles.albumArtImage}
  >
    <Text style={styles.albumText}>I love being{'\n'}Bi-Polar{'\n'}It's awesome</Text>
  </ImageBackground>

  <View style={styles.controlsContainer}>
    <View style={styles.songInfoContainer}>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      <View style={styles.songTitleArtist}>
        <Text style={styles.songTitle}>All Mine</Text>
        <Text style={styles.artistName}>Kanye West</Text>
      </View>
      <TouchableOpacity style={styles.heartButton}>
        <Image source={require('../assets/snack-icon.png')} style={styles.heartIcon} />
      </TouchableOpacity>
    </View>

    <Slider
      style={styles.progressBar}
      minimumValue={0}
      maximumValue={totalDuration}
      value={currentTime}
      minimumTrackTintColor="#FF6600"
      maximumTrackTintColor="#000000"
      thumbTintColor="#FF6600"
      onSlidingComplete={(value) => setCurrentTime(value)}
    />

    <View style={styles.timeContainer}>
      <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
      <Text style={styles.timeText}>{formatTime(totalDuration)}</Text>
    </View>

    <View style={styles.playerControls}>
      <TouchableOpacity>
        <Image source={require('../assets/snack-icon.png')} style={styles.controlIcon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../assets/snack-icon.png')} style={styles.controlIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsPlaying(!isPlaying)}>
        <Image
          source={require('../assets/snack-icon.png')}
          style={[styles.controlIcon, styles.playPauseIcon]}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../assets/snack-icon.png')} style={styles.controlIcon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../assets/snack-icon.png')} style={styles.controlIcon} />
      </TouchableOpacity>
    </View>

    <TouchableOpacity style={styles.fullscreenButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.fullscreenIcon} />
    </TouchableOpacity>
  </View>

  <View style={styles.shareContainer}>
    <Image source={require('../assets/snack-icon.png')} style={styles.instagramIcon} />
    <View style={styles.shareTextContainer}>
      <Text style={styles.shareTitle}>Share the sound!</Text>
      <Text style={styles.shareDescription}>Let your friends know what you are listening! Share this song</Text>
    </View>
    <TouchableOpacity style={styles.useAppButton}>
      <Text style={styles.useAppButtonText}>Use the app</Text>
    </TouchableOpacity>
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#FFFFFF',
},
closeButton: {
position: 'absolute',
top: 40,
left: 20,
zIndex: 1,
},
closeButtonText: {
fontSize: 30,
color: '#000',
},
albumArt: {
width: '100%',
height: '50%',
justifyContent: 'center',
alignItems: 'center',
},
albumArtImage: {
resizeMode: 'cover',
},
albumText: {
color: '#00FF00',
fontSize: 24,
textAlign: 'center',
fontWeight: 'bold',
},
controlsContainer: {
flex: 1,
paddingHorizontal: 20,
},
songInfoContainer: {
flexDirection: 'row',
alignItems: 'center',
marginTop: 20,
},
addButton: {
width: 30,
height: 30,
borderRadius: 15,
borderWidth: 1,
borderColor: '#000',
justifyContent: 'center',
alignItems: 'center',
},
addButtonText: {
fontSize: 20,
},
songTitleArtist: {
flex: 1,
marginLeft: 10,
},
songTitle: {
fontSize: 18,
fontWeight: 'bold',
},
artistName: {
fontSize: 16,
color: '#666',
},
heartButton: {
padding: 5,
},
heartIcon: {
width: 20,
height: 20,
},
progressBar: {
width: '100%',
height: 40,
marginTop: 20,
},
timeContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
},
timeText: {
color: '#666',
},
playerControls: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginTop: 20,
},
controlIcon: {
width: 30,
height: 30,
},
playPauseIcon: {
width: 50,
height: 50,
},
fullscreenButton: {
alignSelf: 'flex-end',
marginTop: 20,
},
fullscreenIcon: {
width: 20,
height: 20,
},
shareContainer: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#F0F0F0',
padding: 15,
marginTop: 20,
},
instagramIcon: {
width: 40,
height: 40,
},
shareTextContainer: {
flex: 1,
marginLeft: 10,
},
shareTitle: {
fontWeight: 'bold',
},
shareDescription: {
fontSize: 12,
color: '#666',
},
useAppButton: {
backgroundColor: '#FF1493',
paddingHorizontal: 15,
paddingVertical: 8,
borderRadius: 20,
},
useAppButtonText: {
color: '#FFF',
fontWeight: 'bold',
},
});
export default PlayerScreen;