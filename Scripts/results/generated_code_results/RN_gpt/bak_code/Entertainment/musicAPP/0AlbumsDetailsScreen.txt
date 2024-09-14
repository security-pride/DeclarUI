import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button, FlatList } from 'react-native';

// Sample data for the track list
const tracks = [
  { name: 'Billie Jean', duration: '3:56' },
  { name: 'The way you make..', duration: '4:12' },
  { name: 'She is out of my life', duration: '3:56' },
  { name: 'Thriller', duration: '4:12' },
  { name: 'Beat It', duration: '3:56' },
  { name: 'Bad', duration: '4:12' },
  { name: 'Man in the mirror', duration: '3:56' },
  { name: 'Scream', duration: '4:12' }
];

const AlbumsDetailsScreen = ({ navigation }) => {
  const renderTrack = ({ item }) => (
    <View style={styles.trackContainer}>
      <TouchableOpacity style={styles.playButton} onPress={() => navigation.navigate('PlaySong')}>
        <Text style={styles.playButtonText}>▶️</Text>
      </TouchableOpacity>
      <Text style={styles.trackName}>{item.name}</Text>
      <Text style={styles.trackDuration}>{item.duration}</Text>
      <TouchableOpacity style={styles.optionsButton}>
        <Text style={styles.optionsButtonText}>• • •</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.statusBarTime}>09:41</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.statusBarIcon} />
        <Image source={require('../assets/snack-icon.png')} style={styles.statusBarIcon} />
        <Image source={require('../assets/snack-icon.png')} style={styles.statusBarIcon} />
      </View>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Album Details</Text>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />
        </TouchableOpacity>
      </View>

      {/* Album Info */}
      <View style={styles.albumInfoContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.albumCover} />
        <View style={styles.albumDetails}>
          <Text style={styles.albumTitle}>History</Text>
          <Text style={styles.albumArtist}>by Michael Jackson</Text>
          <Text style={styles.albumInfo}>1996 • 18 Songs • 64 min</Text>
          <View style={styles.albumActions}>
            <Button title="Play" color="#FF4081" onPress={() => navigation.navigate('PlaySong')} />
            <Button title="Share" color="#FFFFFF" onPress={() => {}} />
            <Button title="Add to Favorites" color="#FFFFFF" onPress={() => {}} />
          </View>
        </View>
      </View>

      {/* Track List */}
      <FlatList
        data={tracks}
        renderItem={renderTrack}
        keyExtractor={(item, index) => index.toString()}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.navItem}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Songs')} style={styles.navItem}>
          <Text style={styles.navText}>Songs</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={styles.navItem}>
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1B24',
    paddingHorizontal: 15,
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  statusBarTime: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  statusBarIcon: {
    width: 20,
    height: 20,
    tintColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  backButton: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  headerIcon: {
    width: 25,
    height: 25,
    tintColor: '#FFFFFF',
  },
  albumInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  albumCover: {
    width: 100,
    height: 100,
    marginRight: 15,
  },
  albumDetails: {
    flex: 1,
  },
  albumTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  albumArtist: {
    color: '#CCCCCC',
    fontSize: 16,
  },
  albumInfo: {
    color: '#CCCCCC',
    fontSize: 14,
    marginVertical: 5,
  },
  albumActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  trackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  playButton: {
    marginRight: 10,
  },
  playButtonText: {
    color: '#FF4081',
    fontSize: 24,
  },
  trackName: {
    color: '#FFFFFF',
    fontSize: 16,
    flex: 1,
  },
  trackDuration: {
    color: '#CCCCCC',
    fontSize: 14,
    marginHorizontal: 10,
  },
  optionsButton: {
    marginLeft: 10,
  },
  optionsButtonText: {
    color: '#CCCCCC',
    fontSize: 24,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});

export default AlbumsDetailsScreen;