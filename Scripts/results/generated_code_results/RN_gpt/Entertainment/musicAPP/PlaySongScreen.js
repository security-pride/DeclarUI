import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PlaySongScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.time}>09:41</Text>
        <View style={styles.signalContainer}>
          <Image source={require('../assets/snack-icon.png')} style={styles.signalIcon} />
        </View>
      </View>

      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.nowPlaying}>Now Playing</Text>
        <TouchableOpacity>
          <Icon name="ellipsis-vertical" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.albumArtContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.albumArt} />
      </View>

      <Text style={styles.songProgress}>3:15 | 4:26</Text>

      <Text style={styles.songTitle}>Black or White</Text>
      <Text style={styles.artistAlbum}>Michael Jackson • Album - Dangerous</Text>

      <Image source={require('../assets/snack-icon.png')} style={styles.equalizer} />

      <View style={styles.controls}>
        <TouchableOpacity>
          <Icon name="play-back" size={32} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="play" size={32} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="play-forward" size={32} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.additionalControls}>
        <TouchableOpacity>
          <Icon name="list" size={24} color="#fff" />
          <Text style={styles.controlLabel}>Playlist</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="shuffle" size={24} color="#fff" />
          <Text style={styles.controlLabel}>Shuffle</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="repeat" size={24} color="#fff" />
          <Text style={styles.controlLabel}>Repeat</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="settings" size={24} color="#fff" />
          <Text style={styles.controlLabel}>EQ</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="heart" size={24} color="#fff" />
          <Text style={styles.controlLabel}>Favourites</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Songs')}>
          <Text style={styles.navLabel}>Songs</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navLabel}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time: {
    color: '#fff',
    fontSize: 12,
  },
  signalContainer: {
    flexDirection: 'row',
  },
  signalIcon: {
    width: 20,
    height: 20,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  nowPlaying: {
    color: '#fff',
    fontSize: 20,
  },
  albumArtContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  albumArt: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  songProgress: {
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 10,
  },
  songTitle: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 5,
  },
  artistAlbum: {
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 20,
  },
  equalizer: {
    width: '100%',
    height: 80,
    marginBottom: 20,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  additionalControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  controlLabel: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 12,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  navLabel: {
    color: '#fff',
  },
});

export default PlaySongScreen;