import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const songList = [
  { id: '1', title: 'Gully Boy', artist: 'Ranvir Sing' },
  { id: '2', title: 'Apna Time Aayega', artist: 'Arijit Sing' },
  { id: '3', title: 'Illegal Weapon 2.0', artist: 'Street Dancer 3D' },
  { id: '4', title: 'Lagli Lahore Di', artist: 'Sreya Ghosal' },
  { id: '5', title: 'Bezubaan Kab Se', artist: 'Kapal Dev' },
  { id: '6', title: 'Nachi Nachi', artist: 'Sreya Ghoshal' },
];

const PlaylistScreen = () => {
  const renderSongItem = ({ item, index }) => (
    <View style={styles.songItem}>
      <Text style={styles.songIndex}>{index + 1 > 9 ? index + 1 : `0${index + 1}` }.</Text>
      <View style={styles.songDetails}>
        <Text style={styles.songTitle}>{item.title}</Text>
        <Text style={styles.songArtist}>{item.artist}</Text>
      </View>
      <Icon name="ellipsis-horizontal" size={24} color="#d1d1d1" />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={28} color="#fff" />
        <Text style={styles.headerTime}>9:41</Text>
        <Icon name="ios-wifi" size={24} color="#fff" />
        <Icon name="ios-battery-full" size={24} color="#fff" />
      </View>
      <View style={styles.mainContent}>
        <Text style={styles.playlistTitle}>Geri - Inder Chahal</Text>
        <Text style={styles.genre}>Pop Songs</Text>
        <View style={styles.artworkContainer}>
          <Image source={require('../assets/snack-icon.png')} style={styles.albumArtwork} />
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoTextLabel}>Songs</Text>
            <Text style={styles.infoTextValue}>21 Songs</Text>
            <Text style={styles.infoTextLabel}>Author</Text>
            <Text style={styles.infoTextValue}>Various Artists</Text>
          </View>
          <TouchableOpacity style={styles.playButton}>
            <Icon name="ios-play" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList 
        data={songList}
        renderItem={renderSongItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.currentTrack}>
        <Image source={require('../assets/snack-icon.png')} style={styles.currentTrackImage} />
        <View style={styles.currentTrackDetails}>
          <Text style={styles.currentTrackTitle}>Illegal Weapon 2.0</Text>
          <Text style={styles.currentTrackArtist}>Street Dancer 3D</Text>
        </View>
        <View style={styles.currentTrackActions}>
          <Icon name="heart-outline" size={24} color="#fff" />
          <Icon name="pause" size={24} color="#fff" />
        </View>
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
    height: 100,
    backgroundColor: '#5D9CEC',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  headerTime: {
    color: '#fff',
    fontSize: 18,
  },
  mainContent: {
    backgroundColor: '#5D9CEC',
    padding: 20,
  },
  playlistTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  genre: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
  },
  artworkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  albumArtwork: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginRight: 20,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoTextLabel: {
    color: '#fff',
  },
  infoTextValue: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  playButton: {
    backgroundColor: '#FF5B5B',
    padding: 20,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    padding: 20,
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  songIndex: {
    color: '#BBB',
    fontSize: 18,
    marginRight: 15,
  },
  songDetails: {
    flex: 1,
  },
  songTitle: {
    fontSize: 18,
    color: '#333',
    fontWeight: '500',
  },
  songArtist: {
    color: '#BBB',
    fontSize: 14,
  },
  currentTrack: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5D9CEC',
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  currentTrackImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  currentTrackDetails: {
    flex: 1,
    marginLeft: 10,
  },
  currentTrackTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  currentTrackArtist: {
    color: '#fff',
    fontSize: 14,
  },
  currentTrackActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 70,
  },
});

export default PlaylistScreen;