import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SONGS = [
  { id: '1', title: 'Billie Jean', artist: 'Michael Jackson', image: '../assets/snack-icon.png' },
  { id: '2', title: 'Be the girl', artist: 'Bebe Rexa', image: '../assets/snack-icon.png' },
  { id: '3', title: 'Countryman', artist: 'Daughtry', image: '../assets/snack-icon.png' },
  { id: '4', title: 'Do you feel lonelyness', artist: 'Marc Anthony', image: '../assets/snack-icon.png' },
  { id: '5', title: 'Earth song', artist: 'Michael Jackson', image: '../assets/snack-icon.png' },
  { id: '6', title: 'Smooth criminal', artist: 'Michael Jackson', image: '../assets/snack-icon.png' },
  { id: '7', title: 'The way you make me feel', artist: 'Michael Jackson', image: '../assets/snack-icon.png' },
  { id: '8', title: 'Somebody that I used to know', artist: 'Gotye', image: '../assets/snack-icon.png' },
  { id: '9', title: 'Wild Thoughts', artist: 'Unknown Artist', image: '../assets/snack-icon.png' },
];

const SongsScreen = ({ navigation }) => {
  const renderSongItem = ({ item }) => (
    <TouchableOpacity style={styles.songItem} onPress={() => navigation.navigate('PlaySong')}>
      <Image source={{ uri: item.image }} style={styles.songImage} />
      <View style={styles.songDetails}>
        <Text style={styles.songTitle}>{item.title}</Text>
        <Text style={styles.songArtist}>{item.artist}</Text>
      </View>
      <Icon name="play" size={20} color="#FF007F" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="menu" size={30} color="#FFFFFF" />
        <Text style={styles.headerTitle}>Songs</Text>
        <Icon name="search" size={30} color="#FFFFFF" />
      </View>
      <View style={styles.tabs}>
        <Text style={styles.activeTab}>All Songs</Text>
        <Text style={styles.tab}>Playlists</Text>
        <Text style={styles.tab}>Albums</Text>
        <Text style={styles.tab}>Artists</Text>
        <Text style={styles.tab}>Genres</Text>
      </View>
      <FlatList
        data={SONGS}
        renderItem={renderSongItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15151F',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  tab: {
    color: '#666',
    fontSize: 16,
  },
  activeTab: {
    color: '#FF007F',
    fontSize: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#FF007F',
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  songDetails: {
    flex: 1,
  },
  songTitle: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  songArtist: {
    color: '#888',
    fontSize: 14,
  },
});

export default SongsScreen;