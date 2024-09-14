import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const songData = [

  { id: '1', title: 'Billie Jean', duration: '3:56' },

  { id: '2', title: 'The way you make..', duration: '4:12' },

  { id: '3', title: 'She is out of my life', duration: '3:56' },

  { id: '4', title: 'Thriller', duration: '4:12' },

  { id: '5', title: 'Beat It', duration: '3:56' },

  { id: '6', title: 'Bad', duration: '4:12' },

  { id: '7', title: 'Man in the mirror', duration: '3:56' },

  { id: '8', title: 'Scream', duration: '4:12' },

];



const SongItem = ({ item, index }) => {

  const navigation = useNavigation();
  return (
  <View style={styles.songItem}>

    <TouchableOpacity style={styles.playButton} onPress={()=> navigation.navigate('PlaySong')}>

      <Text style={styles.playIcon}>▶</Text>

    </TouchableOpacity>

    <View style={styles.songInfo}>

      <Text style={styles.songTitle}>{item.title}</Text>

      <Text style={styles.songDuration}>{item.duration}</Text>

    </View>

    <TouchableOpacity style={styles.moreButton}>

      <Text style={styles.moreIcon}>⋮</Text>

    </TouchableOpacity>

  </View>
  )

};



const AlbumsDetailsScreen = ({ route }) => {

  const navigation = useNavigation();

  const { album } = route.params;



  const renderSongItem = ({ item, index }) => (

    <SongItem item={item} index={index} />

  );



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Text style={styles.backIcon}>←</Text>

        </TouchableOpacity>

        <Text style={styles.headerTitle}>Album Details</Text>

        <TouchableOpacity>

          <Text style={styles.searchIcon}>🔍</Text>

        </TouchableOpacity>

      </View>

      <View style={styles.albumInfo}>

        <Image source={require('../assets/snack-icon.png')} style={styles.albumCover} />

        <View style={styles.albumDetails}>

          <Text style={styles.albumTitle}>History</Text>

          <Text style={styles.albumArtist}>by Michael Jackson</Text>

          <Text style={styles.albumMeta}>1996 • 18 Songs • 64 min</Text>

        </View>

      </View>

      <View style={styles.actionButtons}>

        <TouchableOpacity style={styles.playButton}>

          <Text style={styles.playButtonText}>Play</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.shareButton}>

          <Text style={styles.shareButtonText}>Share</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.favoriteButton}>

          <Text style={styles.favoriteButtonText}>Add to Favorites</Text>

        </TouchableOpacity>

      </View>

      <FlatList

        data={songData}

        renderItem={renderSongItem}

        keyExtractor={item => item.id}

        style={styles.songList}

      />

      <View style={styles.playBar}>

        <Image source={require('../assets/snack-icon.png')} style={styles.playBarImage} />

        <View style={styles.playControls}>

          <TouchableOpacity>

            <Text style={styles.controlButton}>⏮</Text>

          </TouchableOpacity>

          <TouchableOpacity>

            <Text style={styles.controlButton}>▶</Text>

          </TouchableOpacity>

          <TouchableOpacity>

            <Text style={styles.controlButton}>⏭</Text>

          </TouchableOpacity>

        </View>

      </View>

      <View style={styles.navBar}>

        <TouchableOpacity style={styles.navItem}>

          <Text style={styles.navIcon}>🏠</Text>

          <Text style={styles.navText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>

          <Text style={[styles.navIcon, styles.activeNavIcon]}>🎵</Text>

          <Text style={[styles.navText, styles.activeNavText]}>Songs</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Text style={styles.navIcon}>⚙️</Text>

          <Text style={styles.navText}>Settings</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#1E1E1E',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 16,

  },

  backIcon: {

    fontSize: 24,

    color: 'white',

  },

  headerTitle: {

    fontSize: 20,

    fontWeight: 'bold',

    color: 'white',

  },

  searchIcon: {

    fontSize: 20,

    color: 'white',

  },

  albumInfo: {

    flexDirection: 'row',

    padding: 16,

    backgroundColor: 'rgba(255, 255, 255, 0.1)',

    borderRadius: 10,

    margin: 16,

  },

  albumCover: {

    width: 100,

    height: 100,

    borderRadius: 5,

  },

  albumDetails: {

    marginLeft: 16,

    justifyContent: 'center',

  },

  albumTitle: {

    fontSize: 24,

    fontWeight: 'bold',

    color: 'white',

  },

  albumArtist: {

    fontSize: 18,

    color: '#999',

  },

  albumMeta: {

    fontSize: 14,

    color: '#999',

    marginTop: 8,

  },

  actionButtons: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    marginVertical: 16,

  },

  playButton: {

    backgroundColor: '#FF69B4',

    paddingVertical: 8,

    paddingHorizontal: 16,

    borderRadius: 20,

  },

  playButtonText: {

    color: 'white',

    fontWeight: 'bold',

  },

  shareButton: {

    borderColor: 'white',

    borderWidth: 1,

    paddingVertical: 8,

    paddingHorizontal: 16,

    borderRadius: 20,

  },

  shareButtonText: {

    color: 'white',

  },

  favoriteButton: {

    borderColor: 'white',

    borderWidth: 1,

    paddingVertical: 8,

    paddingHorizontal: 16,

    borderRadius: 20,

  },

  favoriteButtonText: {

    color: 'white',

  },

  songList: {

    flex: 1,

  },

  songItem: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingVertical: 8,

    paddingHorizontal: 16,

  },

  playIcon: {

    color: '#FF69B4',

    fontSize: 24,

  },

  songInfo: {

    flex: 1,

    marginLeft: 16,

  },

  songTitle: {

    color: 'white',

    fontSize: 16,

  },

  songDuration: {

    color: '#999',

    fontSize: 14,

  },

  moreIcon: {

    color: 'white',

    fontSize: 24,

  },

  playBar: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    borderTopWidth: 1,

    borderTopColor: '#333',

  },

  playBarImage: {

    width: 40,

    height: 40,

    borderRadius: 20,

  },

  playControls: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    flex: 1,

  },

  controlButton: {

    color: 'white',

    fontSize: 24,

  },

  navBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    paddingVertical: 10,

    borderTopWidth: 1,

    borderTopColor: '#333',

  },

  navItem: {

    alignItems: 'center',

  },

  navIcon: {

    fontSize: 20,

    color: '#999',

  },

  navText: {

    color: '#999',

    fontSize: 12,

  },

  activeNavItem: {

    color: '#FF69B4',

  },

  activeNavIcon: {

    color: '#FF69B4',

  },

  activeNavText: {

    color: '#FF69B4',

  },

});



export default AlbumsDetailsScreen;