import React from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const PlaylistScreen = () => {

  const navigation = useNavigation();



  const playlistData = {

    title: 'Geri - Inder Chahal',

    genre: 'Pop Songs',

    songs: 21,

    author: 'Various Artits',

    tracks: [

      { id: '01', title: 'Gully Boy', artist: 'Ranvir Sing' },

      { id: '02', title: 'Apna Time Aayega', artist: 'Arijit Sing' },

      { id: '03', title: 'Illegal Weapon 2.0', artist: 'Street Dancer 3D' },

      { id: '04', title: 'Lagli Lahore Di', artist: 'Sreya Ghosal' },

      { id: '05', title: 'Bezubaan Kab Se', artist: 'Kapal Dev' },

      { id: '06', title: 'Nachi Nachi', artist: 'Sreya Ghoshal' },

    ]

  };



  const renderTrackItem = ({ item, index }) => (

    <TouchableOpacity style={styles.trackItem}>

      <Text style={styles.trackNumber}>{item.id}.</Text>

      <View style={styles.trackInfo}>

        <Text style={styles.trackTitle}>{item.title}</Text>

        <Text style={styles.trackArtist}>{item.artist}</Text>

      </View>

      <TouchableOpacity style={styles.moreButton}>

        <Text style={styles.moreButtonText}>...</Text>

      </TouchableOpacity>

    </TouchableOpacity>

  );



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>{playlistData.title}</Text>

      </View>

      

      <View style={styles.playlistInfo}>

        <Image source={require('../assets/snack-icon.png')} style={styles.playlistImage} />

        <View style={styles.playlistDetails}>

          <Text style={styles.playlistGenre}>{playlistData.genre}</Text>

          <View style={styles.playlistStats}>

            <View style={styles.statItem}>

              <Text style={styles.statLabel}>Songs</Text>

              <Text style={styles.statValue}>{playlistData.songs} Songs</Text>

            </View>

            <View style={styles.statItem}>

              <Text style={styles.statLabel}>Author</Text>

              <Text style={styles.statValue}>{playlistData.author}</Text>

            </View>

          </View>

        </View>

        <TouchableOpacity style={styles.playButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.playIcon} />

        </TouchableOpacity>

      </View>



      <FlatList

        data={playlistData.tracks}

        renderItem={renderTrackItem}

        keyExtractor={(item) => item.id}

        style={styles.trackList}

      />



      <View style={styles.nowPlayingBar}>

        <Image source={require('../assets/snack-icon.png')} style={styles.nowPlayingImage} />

        <View style={styles.nowPlayingInfo}>

          <Text style={styles.nowPlayingTitle}>Illegal Weapon 2.0</Text>

          <Text style={styles.nowPlayingArtist}>Street Dancer 3D</Text>

        </View>

        <TouchableOpacity style={styles.heartIcon}>

          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.pauseButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFFFFF',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    backgroundColor: '#4285F4',

  },

  backIcon: {

    width: 24,

    height: 24,

    tintColor: '#FFFFFF',

  },

  headerTitle: {

    fontSize: 20,

    fontWeight: 'bold',

    color: '#FFFFFF',

    marginLeft: 16,

  },

  playlistInfo: {

    flexDirection: 'row',

    padding: 16,

    backgroundColor: '#4285F4',

    borderBottomLeftRadius: 30,

    borderBottomRightRadius: 30,

  },

  playlistImage: {

    width: 100,

    height: 100,

    borderRadius: 8,

  },

  playlistDetails: {

    flex: 1,

    marginLeft: 16,

  },

  playlistGenre: {

    fontSize: 16,

    color: '#FFFFFF',

    opacity: 0.8,

  },

  playlistStats: {

    flexDirection: 'row',

    marginTop: 8,

  },

  statItem: {

    marginRight: 16,

  },

  statLabel: {

    fontSize: 14,

    color: '#FFFFFF',

    opacity: 0.8,

  },

  statValue: {

    fontSize: 16,

    fontWeight: 'bold',

    color: '#FFFFFF',

  },

  playButton: {

    width: 50,

    height: 50,

    borderRadius: 25,

    backgroundColor: '#FF4081',

    justifyContent: 'center',

    alignItems: 'center',

    alignSelf: 'flex-end',

  },

  playIcon: {

    width: 24,

    height: 24,

    tintColor: '#FFFFFF',

  },

  trackList: {

    flex: 1,

  },

  trackItem: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#E0E0E0',

  },

  trackNumber: {

    fontSize: 16,

    fontWeight: 'bold',

    color: '#4285F4',

    width: 30,

  },

  trackInfo: {

    flex: 1,

    marginLeft: 16,

  },

  trackTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    color: '#333333',

  },

  trackArtist: {

    fontSize: 14,

    color: '#666666',

  },

  moreButton: {

    padding: 8,

  },

  moreButtonText: {

    fontSize: 20,

    fontWeight: 'bold',

    color: '#666666',

  },

  nowPlayingBar: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    backgroundColor: '#4285F4',

    borderTopLeftRadius: 30,

    borderTopRightRadius: 30,

  },

  nowPlayingImage: {

    width: 40,

    height: 40,

    borderRadius: 20,

  },

  nowPlayingInfo: {

    flex: 1,

    marginLeft: 16,

  },

  nowPlayingTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    color: '#FFFFFF',

  },

  nowPlayingArtist: {

    fontSize: 14,

    color: '#FFFFFF',

    opacity: 0.8,

  },

  heartIcon: {

    marginRight: 16,

  },

  pauseButton: {

    width: 40,

    height: 40,

    borderRadius: 20,

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',

    alignItems: 'center',

  },

  icon: {

    width: 24,

    height: 24,

    tintColor: '#4285F4',

  },

});



export default PlaylistScreen;