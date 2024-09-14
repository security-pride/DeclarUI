import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const albumData = [
  {
    id: '1',
    title: 'History',
    artist: 'Michael Jackson',
    cover: '../assets/snack-icon.png',
    songs: '10 Songs',
  },
  {
    id: '2',
    title: 'Thriller',
    artist: 'Michael Jackson',
    cover: '../assets/snack-icon.png',
    songs: '10 Songs',
  },
  {
    id: '3',
    title: "It Won't Be Soon...",
    artist: 'Maroon 5',
    cover: '../assets/snack-icon.png',
    songs: '10 Songs',
  },
  {
    id: '4',
    title: 'I Am... Yours',
    artist: 'Beyonce',
    cover: '../assets/snack-icon.png',
    songs: '10 Songs',
  },
];

const AlbumsScreen = () => {
  const renderAlbumItem = ({ item }) => (
    <View style={styles.albumItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.albumCover} />
      <View style={styles.albumInfo}>
        <Text style={styles.albumTitle}>{item.title}</Text>
        <Text style={styles.albumArtist}>{item.artist} • {item.songs}</Text>
      </View>
      <TouchableOpacity>
        <Icon name="more-vert" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="menu" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Songs</Text>
        <TouchableOpacity>
          <Icon name="search" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.tabContainer}>
        <Text style={styles.tabText}>All Songs</Text>
        <Text style={styles.tabText}>Playlists</Text>
        <Text style={styles.activeTabText}>Albums</Text>
        <Text style={styles.tabText}>Artists</Text>
        <Text style={styles.tabText}>Genres</Text>
      </View>

      <FlatList
        data={albumData}
        renderItem={renderAlbumItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.albumList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191B28',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2C3B',
  },
  tabText: {
    color: '#A4A5A5',
    fontSize: 16,
  },
  activeTabText: {
    color: '#C150F0',
    fontSize: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#C150F0',
    paddingBottom: 5,
  },
  albumList: {
    padding: 10,
  },
  albumItem: {
    flex: 1,
    margin: 10,
    backgroundColor: '#252836',
    borderRadius: 10,
    padding: 10,
  },
  albumCover: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  albumInfo: {
    marginTop: 10,
  },
  albumTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  albumArtist: {
    color: '#A4A5A5',
    fontSize: 14,
  },
});

export default AlbumsScreen;