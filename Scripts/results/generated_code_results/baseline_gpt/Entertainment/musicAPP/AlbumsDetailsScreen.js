import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const songData = [
  { id: '1', title: 'Billie Jean', duration: '3:56' },
  { id: '2', title: 'The way you make me feel', duration: '4:12' },
  { id: '3', title: 'She is out of my life', duration: '3:56' },
  { id: '4', title: 'Thriller', duration: '4:12' },
  { id: '5', title: 'Beat It', duration: '3:56' },
  { id: '6', title: 'Bad', duration: '4:12' },
  { id: '7', title: 'Man in the mirror', duration: '3:56' },
  { id: '8', title: 'Scream', duration: '4:12' },
];

const AlbumsDetailsScreen = () => {
  const renderSongItem = ({ item }) => (
    <View style={styles.songItem}>
      <TouchableOpacity>
        <Icon name="play-circle-outline" size={24} color="#ff5e6c" />
      </TouchableOpacity>
      <Text style={styles.songTitle}>{item.title}</Text>
      <Text style={styles.songDuration}>{item.duration}</Text>
      <Icon name="ellipsis-vertical" size={24} color="#fff" />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Album Details</Text>
        <TouchableOpacity>
          <Icon name="search-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.albumInfo}>
        <Image source={require('../assets/snack-icon.png')} style={styles.albumImage} />
        <View style={styles.albumText}>
          <Text style={styles.albumTitle}>History</Text>
          <Text style={styles.artistName}>by Michael Jackson</Text>
          <Text style={styles.albumDetails}>1996 . 18 Songs . 64 min</Text>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.playButton}>
              <Text style={styles.buttonText}>Play</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="share-outline" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="heart-outline" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <FlatList
        data={songData}
        renderItem={renderSongItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.songList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c2c',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  albumInfo: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  albumImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  albumText: {
    flex: 1,
    marginLeft: 20,
  },
  albumTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  artistName: {
    color: '#aaa',
    fontSize: 16,
    marginVertical: 4,
  },
  albumDetails: {
    color: '#aaa',
    fontSize: 14,
    marginVertical: 4,
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  playButton: {
    backgroundColor: '#ff5e6c',
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  songList: {
    paddingHorizontal: 20,
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
  songTitle: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
  },
  songDuration: {
    color: '#aaa',
    fontSize: 14,
  },
});

export default AlbumsDetailsScreen;