import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Slider from '@react-native-community/slider';
const { width, height } = Dimensions.get('window');
const NowPlayingScreen = ({ navigation }) => {
const [isPlaying, setIsPlaying] = useState(true);
const [currentTime, setCurrentTime] = useState(0);
const totalDuration = 5.06 * 60; // Convert to seconds
const togglePlayPause = () => {
setIsPlaying(!isPlaying);
};
const formatTime = (timeInSeconds) => {
const minutes = Math.floor(timeInSeconds / 60);
const seconds = Math.floor(timeInSeconds % 60);
return ${minutes}.${seconds < 10 ? '0' : ''}${seconds};
};
return (
<View style={styles.container}>
<View style={styles.header}>
<Text style={styles.headerText}>Now Playing</Text>
<TouchableOpacity onPress={() => navigation.goBack()}>
<Image source={require('../assets/snack-icon.png')} style={styles.collapseButton} />
</TouchableOpacity>
</View>
  <View style={styles.albumArtContainer}>
    <Image source={require('../assets/snack-icon.png')} style={styles.albumArt} />
  </View>

  <View style={styles.songInfoContainer}>
    <Text style={styles.songTitle}>Apna Time Aayega</Text>
    <Text style={styles.artistName}>Arijit Sing</Text>
  </View>

  <View style={styles.progressContainer}>
    <Slider
      style={styles.progressBar}
      minimumValue={0}
      maximumValue={totalDuration}
      value={currentTime}
      onValueChange={setCurrentTime}
      minimumTrackTintColor="#FF5733"
      maximumTrackTintColor="#FFFFFF"
      thumbTintColor="#FF5733"
    />
    <View style={styles.timeContainer}>
      <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
      <Text style={styles.timeText}>{formatTime(totalDuration)}</Text>
    </View>
  </View>

  <View style={styles.controlsContainer}>
    <TouchableOpacity>
      <Image source={require('../assets/snack-icon.png')} style={styles.controlIcon} />
    </TouchableOpacity>
    <TouchableOpacity onPress={togglePlayPause}>
      <Image
        source={isPlaying ? require('../assets/snack-icon.png') : require('../assets/snack-icon.png')}
        style={styles.playPauseIcon}
      />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={require('../assets/snack-icon.png')} style={styles.controlIcon} />
    </TouchableOpacity>
  </View>

  <View style={styles.actionsContainer}>
    <TouchableOpacity>
      <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
    </TouchableOpacity>
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#4169E1',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingHorizontal: 20,
paddingTop: 40,
paddingBottom: 20,
},
headerText: {
color: '#FFFFFF',
fontSize: 24,
fontWeight: 'bold',
},
collapseButton: {
width: 30,
height: 30,
},
albumArtContainer: {
alignItems: 'center',
marginTop: 20,
},
albumArt: {
width: width * 0.8,
height: width * 0.8,
borderRadius: 20,
},
songInfoContainer: {
alignItems: 'center',
marginTop: 20,
},
songTitle: {
color: '#FFFFFF',
fontSize: 24,
fontWeight: 'bold',
},
artistName: {
color: '#FFFFFF',
fontSize: 18,
marginTop: 5,
},
progressContainer: {
marginHorizontal: 20,
marginTop: 30,
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
color: '#FFFFFF',
},
controlsContainer: {
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
marginTop: 30,
},
controlIcon: {
width: 30,
height: 30,
marginHorizontal: 30,
},
playPauseIcon: {
width: 60,
height: 60,
},
actionsContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
marginTop: 40,
paddingHorizontal: 20,
},
actionIcon: {
width: 24,
height: 24,
},
});
export default NowPlayingScreen;