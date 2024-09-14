import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/FontAwesome';

const NowPlayingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Now Playing</Text>
        <Icon name="chevron-down" size={20} color="#fff" />
      </View>
      <View style={styles.albumArtContainer}>
        <Image
          source={require('../assets/snack-icon.png')}
          style={styles.albumArt}
        />
        <Text style={styles.songTitle}>Apna Time Aayega</Text>
        <Text style={styles.artist}>Arijit Sing</Text>
      </View>
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FF0000"
          maximumTrackTintColor="#000000"
          thumbTintColor="#FF0000"
        />
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>0.00</Text>
          <Text style={styles.timeText}>5.06</Text>
        </View>
      </View>
      <View style={styles.controls}>
        <Icon name="step-backward" size={30} color="#B0BEC5" />
        <TouchableOpacity style={styles.playButton}>
          <Icon name="play" size={30} color="#fff" />
        </TouchableOpacity>
        <Icon name="step-forward" size={30} color="#B0BEC5" />
      </View>
      <View style={styles.extraControls}>
        <Icon name="heart" size={30} color="#FF4081" />
        <Icon name="random" size={30} color="#B0BEC5" />
        <Icon name="repeat" size={30} color="#B0BEC5" />
        <Icon name="list-ul" size={30} color="#B0BEC5" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: 100,
    backgroundColor: '#4A90E2',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  albumArtContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  albumArt: {
    width: 300,
    height: 300,
    borderRadius: 15,
  },
  songTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
  },
  artist: {
    fontSize: 16,
    color: '#7B7B7B',
  },
  sliderContainer: {
    width: '80%',
    alignItems: 'center',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  timeText: {
    color: '#7B7B7B',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  playButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 50,
    padding: 20,
    marginHorizontal: 20,
  },
  extraControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 30,
  },
});

export default NowPlayingScreen;