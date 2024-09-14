import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AlbumsScreen = ({ navigation }) => {
  const albums = [
    { name: 'History', artist: 'Michael Jackson', songs: 10, image: require('../assets/snack-icon.png') },
    { name: 'Thriller', artist: 'Michael Jackson', songs: 10, image: require('../assets/snack-icon.png') },
    { name: "It Won't Be Soon..", artist: 'Maroon 5', songs: 10, image: require('../assets/snack-icon.png') },
    { name: 'I Am... Yours', artist: 'Beyonce', songs: 10, image: require('../assets/snack-icon.png') }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.time}>09:41</Text>
        <View style={styles.headerIcons}>
          <Icon name="wifi" size={20} color="#fff" />
          <Icon name="battery-half" size={20} color="#fff" />
        </View>
      </View>
      <View style={styles.menuBar}>
        <TouchableOpacity>
          <Icon name="menu-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Songs</Text>
        <Pressable>
          <Icon name="search-outline" size={30} color="#fff" />
        </Pressable>
      </View>
      <ScrollView horizontal contentContainerStyle={styles.tabContainer}>
        <Text style={styles.tabText}>All Songs</Text>
        <Text style={styles.tabText}>Playlists</Text>
        <Text style={styles.activeTabText}>Albums</Text>
        <Text style={styles.tabText}>Artists</Text>
        <Text style={styles.tabText}>Genre</Text>
      </ScrollView>
      <ScrollView>
        <View style={styles.albumGrid}>
          {albums.map((album, index) => (
            <TouchableOpacity key={index}
              style={styles.albumContainer}
              onPress={() => navigation.navigate('AlbumsDetails')}>
              <Image source={album.image} style={styles.albumImage} />
              <Text style={styles.albumTitle}>{album.name}</Text>
              <Text style={styles.albumArtist}>{album.artist}</Text>
              <Text style={styles.albumSongs}>{album.songs} Songs</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={styles.bottomNav}>
        <Icon name="home-outline" size={30} color="#fff" />
        <Icon name="musical-notes" size={30} color="#f54ea2" />
        <Icon name="settings-outline" size={30} color="#fff" />
      </View>
      <View style={styles.nowPlayingBar}>
        <Image source={require('../assets/snack-icon.png')} style={styles.nowPlayingImage} />
        <View style={styles.playControls}>
          <TouchableOpacity>
            <Icon name="play-skip-back-outline" size={25} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="play-outline" size={25} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="play-skip-forward-outline" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  time: {
    color: '#fff',
    fontSize: 16,
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 50,
  },
  menuBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
  },
  tabContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  tabText: {
    color: '#aaa',
    fontSize: 16,
    marginRight: 20,
  },
  activeTabText: {
    color: '#f54ea2',
    fontSize: 16,
    marginRight: 20,
  },
  albumGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  albumContainer: {
    width: '48%',
    marginBottom: 20,
  },
  albumImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  albumTitle: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
  },
  albumArtist: {
    color: '#aaa',
    fontSize: 14,
  },
  albumSongs: {
    color: '#aaa',
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#333',
    paddingVertical: 10,
  },
  nowPlayingBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#333',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  nowPlayingImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  playControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  },
});

export default AlbumsScreen;