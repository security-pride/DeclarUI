import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PlaySongScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Now Playing</Text>
        <Icon name="more-vert" size={24} color="#fff" />
      </View>
      <View style={styles.albumArtContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.albumArt} />
      </View>
      <Text style={styles.time}>3:15 | 4:26</Text>
      <Text style={styles.songTitle}>Black or White</Text>
      <Text style={styles.artist}>Michael Jackson • Album - Dangerous</Text>
      <View style={styles.visualizer} />
      <View style={styles.controls}>
        <Icon name="skip-previous" size={36} color="#fff" />
        <Icon name="play-circle-filled" size={64} color="#fff" />
        <Icon name="skip-next" size={36} color="#fff" />
      </View>
      <View style={styles.options}>
        <Icon name="queue-music" size={24} color="#fff" />
        <Icon name="shuffle" size={24} color="#fff" />
        <Icon name="repeat" size={24} color="#fff" />
        <Icon name="equalizer" size={24} color="#fff" />
        <Icon name="favorite-border" size={24} color="#fff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 18,
  },
  albumArtContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  albumArt: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  time: {
    textAlign: 'center',
    color: '#bbb',
    fontSize: 14,
  },
  songTitle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    marginTop: 10,
  },
  artist: {
    textAlign: 'center',
    color: '#bbb',
    fontSize: 16,
    marginVertical: 5,
  },
  visualizer: {
    height: 50,
    backgroundColor: '#444',
    marginVertical: 20,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  options: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10,
  },
});

export default PlaySongScreen;