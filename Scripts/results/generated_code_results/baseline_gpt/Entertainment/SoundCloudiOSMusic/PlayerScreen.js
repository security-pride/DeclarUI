import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PlayerScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <Image source={require('../assets/snack-icon.png')} style={styles.albumArt} />
      <View style={styles.trackInfo}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="plus" size={20} color="#000" />
        </TouchableOpacity>
        <View style={styles.trackDetails}>
          <Text style={styles.trackTitle}>All Mine</Text>
          <Text style={styles.artistName}>Kanye West</Text>
        </View>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="heart-o" size={20} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.progressContainer}>
        <Text style={styles.timeText}>01:30</Text>
        <View style={styles.progressBar}>
          <View style={styles.progress} />
        </View>
        <Text style={styles.timeText}>03:00</Text>
      </View>
      <View style={styles.controls}>
        <TouchableOpacity style={styles.controlButton}>
          <Icon name="repeat" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Icon name="backward" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.playButton}>
          <Icon name="play-circle" size={50} color="#FC6C2C" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Icon name="forward" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Icon name="arrows-alt" size={30} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.shareContainer}>
        <TouchableOpacity style={styles.shareButton}>
          <Icon name="share-alt" size={20} color="#000" />
          <Text style={styles.shareText}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.appButton}>
          <Text style={styles.appButtonText}>Use the app</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 80,
    backgroundColor: '#FC6C2C',
  },
  albumArt: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 15,
  },
  trackInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  iconButton: {
    padding: 10,
  },
  trackDetails: {
    alignItems: 'center',
  },
  trackTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  artistName: {
    fontSize: 14,
    color: '#FC6C2C',
    marginTop: 5,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 30,
  },
  timeText: {
    fontSize: 12,
    color: '#000',
  },
  progressBar: {
    flex: 1,
    height: 2,
    backgroundColor: '#ccc',
    marginHorizontal: 10,
  },
  progress: {
    width: '50%',
    height: '100%',
    backgroundColor: '#FC6C2C',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginTop: 30,
  },
  controlButton: {
    padding: 10,
  },
  playButton: {
    padding: 10,
  },
  shareContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 30,
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shareText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#000',
  },
  appButton: {
    backgroundColor: '#FC6C2C',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  appButtonText: {
    fontSize: 14,
    color: '#fff',
  },
});

export default PlayerScreen;