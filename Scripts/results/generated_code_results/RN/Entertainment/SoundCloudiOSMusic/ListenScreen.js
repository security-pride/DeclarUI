import React from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const ListenScreen = () => {

  const navigation = useNavigation();



  const navigateTo = (screen) => {

    navigation.navigate(screen);

  };



  return (

    <View style={styles.container}>

      <Text style={styles.header}>Hots now</Text>

      

      <ScrollView style={styles.content}>

        <View style={styles.featuredPlaylists}>

          <ImageBackground

            source={require('../assets/snack-icon.png')}

            style={styles.playlistImage}

          >

            <Text style={styles.playlistTitle}>Summer Vibes</Text>

            <Text style={styles.playlistFollowers}>1,300,231 followers</Text>

            <Image source={require('../assets/snack-icon.png')} style={styles.blueRibbon} />

          </ImageBackground>

          

          <ImageBackground

            source={require('../assets/snack-icon.png')}

            style={styles.playlistImage}

          >

            <Text style={styles.playlistTitle}>Monday Party</Text>

            <Text style={styles.playlistFollowers}>650,231 followers</Text>

          </ImageBackground>

        </View>

        

        <View style={styles.recents}>

          <Text style={styles.recentTitle}>Recents</Text>

          <TouchableOpacity style={styles.recentItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.recentIcon} />

            <Text style={styles.recentText}>Ranking</Text>

            <Text style={styles.newBadge}>New</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.recentItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.recentIcon} />

            <Text style={styles.recentText}>Weekly featured</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.recentItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.recentIcon} />

            <Text style={styles.recentText}>Podcast</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.recentItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.recentIcon} />

            <Text style={styles.recentText}>Live</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.recentItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.recentIcon} />

            <Text style={styles.recentText}>Concerts</Text>

          </TouchableOpacity>

        </View>

      </ScrollView>

      

      <TouchableOpacity style={styles.nowPlaying} onPress={() => navigateTo('Player')}>

        <Image source={require('../assets/snack-icon.png')} style={styles.albumCover} />

        <View style={styles.songInfo}>

          <Text style={styles.songTitle}>All Mine</Text>

          <Text style={styles.artistName}>Kanye West</Text>

        </View>

        <TouchableOpacity style={styles.playButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.playIcon} />

        </TouchableOpacity>

      </TouchableOpacity>

      

      <View style={styles.bottomNav}>

        <TouchableOpacity onPress={() => navigateTo('Home')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

        </TouchableOpacity>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateTo('Search')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateTo('Profile')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

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

    fontSize: 24,

    fontWeight: 'bold',

    padding: 16,

  },

  content: {

    flex: 1,

  },

  featuredPlaylists: {

    flexDirection: 'row',

    padding: 16,

  },

  playlistImage: {

    width: 150,

    height: 150,

    marginRight: 16,

    justifyContent: 'flex-end',

    padding: 8,

  },

  playlistTitle: {

    color: '#fff',

    fontSize: 18,

    fontWeight: 'bold',

  },

  playlistFollowers: {

    color: '#fff',

    fontSize: 12,

  },

  blueRibbon: {

    position: 'absolute',

    top: 8,

    right: 8,

    width: 24,

    height: 24,

  },

  recents: {

    padding: 16,

  },

  recentTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 16,

  },

  recentItem: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 16,

  },

  recentIcon: {

    width: 24,

    height: 24,

    marginRight: 16,

  },

  recentText: {

    fontSize: 16,

  },

  newBadge: {

    backgroundColor: '#ff4500',

    color: '#fff',

    fontSize: 12,

    paddingHorizontal: 8,

    paddingVertical: 2,

    borderRadius: 10,

    marginLeft: 8,

  },

  nowPlaying: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

  },

  albumCover: {

    width: 48,

    height: 48,

    marginRight: 16,

  },

  songInfo: {

    flex: 1,

  },

  songTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  artistName: {

    fontSize: 14,

    color: '#666',

  },

  playButton: {

    width: 36,

    height: 36,

    borderRadius: 18,

    backgroundColor: '#ff4500',

    justifyContent: 'center',

    alignItems: 'center',

  },

  playIcon: {

    width: 24,

    height: 24,

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    paddingVertical: 16,

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

  },

  navIcon: {

    width: 24,

    height: 24,

  },

});



export default ListenScreen;