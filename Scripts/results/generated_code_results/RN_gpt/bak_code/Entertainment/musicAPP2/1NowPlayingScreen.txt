import React from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const NowPlayingScreen = () => {
  const navigation = useNavigation();

  const navigateToPlaylist = () => {
    navigation.navigate('Playlist');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.nowPlayingText}>Now Playing</Text>
      
      <Image 
        source={require('../assets/snack-icon.png')} 
        style={styles.blurryImage} 
      />
      
      <View style={styles.songInfoContainer}>
        <Image 
          source={require('../assets/snack-icon.png')} 
          style={styles.albumArt} 
        />
        <Text style={styles.songTitle}>Apna Time Aayega</Text>
        <Text style={styles.artistName}>Arijit Sing</Text>
      </View>
      
      <View style={styles.timeContainer}>
        <Text style={styles.startTime}>0.00</Text>
        <View style={styles.progressBarContainer}>
          <View style={styles.progressBar} />
          <View style={styles.progressThumb} />
        </View>
        <Text style={styles.endTime}>5.06</Text>
      </View>
      
      <View style={styles.controlsContainer}>
        <TouchableOpacity>
          <Icon name="heart-outline" size={24} color="#ff0044" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="shuffle-outline" size={24} color="#ff0044" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="play-circle-outline" size={60} color="#0000ff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="repeat-outline" size={24} color="#ff0044" />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToPlaylist}>
          <Icon name="musical-notes-outline" size={24} color="#ff0044" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nowPlayingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    position: 'absolute',
    top: 40,
  },
  blurryImage: {
    width: '100%',
    height: '30%',
    position: 'absolute',
    top: 0,
    opacity: 0.7,
  },
  songInfoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  albumArt: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  songTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  artistName: {
    fontSize: 16,
    color: '#777',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  startTime: {
    fontSize: 14,
    color: '#777',
  },
  progressBarContainer: {
    flex: 1,
    height: 2,
    backgroundColor: '#ddd',
    marginHorizontal: 10,
    borderRadius: 5,
    position: 'relative',
  },
  progressBar: {
    position: 'absolute',
    left: 0,
    height: 2,
    width: '40%',
    backgroundColor: '#ff0044',
    borderRadius: 5,
  },
  progressThumb: {
    position: 'absolute',
    left: '40%',
    width: 10,
    height: 10,
    backgroundColor: '#ff0044',
    borderRadius: 5,
    top: -4,
  },
  endTime: {
    fontSize: 14,
    color: '#777',
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginVertical: 20,
  },
});

export default NowPlayingScreen;