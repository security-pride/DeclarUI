import React, { useState } from 'react';

import { View, Text, TextInput, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const SearchScreen = () => {

  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = useState('');



  const recentSearches = [

    { song: 'Better Now', artist: 'Post Malone' },

    { song: 'Kimberly Evans', artist: 'Calvin Harris, Dua Lipa' },

    { song: 'I Like It', artist: 'Cardi B, Bad Bunny, J Balvin' },

    { song: 'Girls Like You (feat Cardi B)', artist: 'Maroon 5' },

    { song: 'Back To You', artist: 'Selena Gomez' },

    { song: 'Lucid Dreams', artist: 'Juice WRLD' },

    { song: 'No Tears Left To Cry', artist: 'Ariana Grande' },

    { song: 'Nice For What', artist: 'Drake' },

    { song: 'Youngblood', artist: '5 Seconds of Summer' },

  ];



  const renderRecentItem = ({ item }) => (

    <View style={styles.recentItem}>

      <Image source={require('../assets/snack-icon.png')} style={styles.albumCover} />

      <View style={styles.songInfo}>

        <Text style={styles.songTitle}>{item.song}</Text>

        <Text style={styles.artistName}>{item.artist}</Text>

      </View>

      <TouchableOpacity style={styles.removeButton}>

        <Text style={styles.removeButtonText}>x</Text>

      </TouchableOpacity>

    </View>

  );



  return (

    <View style={styles.container}>

      <View style={styles.searchBarContainer}>

        <TextInput

          style={styles.searchInput}

          placeholder="Search that song!"

          value={searchQuery}

          onChangeText={setSearchQuery}

        />

        <TouchableOpacity style={styles.voiceSearchButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.voiceIcon} />

        </TouchableOpacity>

      </View>



      <Text style={styles.recentsTitle}>Recents</Text>



      <FlatList

        data={recentSearches}

        renderItem={renderRecentItem}

        keyExtractor={(item) => item.song}

        style={styles.recentList}

      />



      <View style={styles.nowPlayingBar}>

        <Image source={require('../assets/snack-icon.png')} style={styles.nowPlayingCover} />

        <View style={styles.nowPlayingInfo}>

          <Text style={styles.nowPlayingTitle}>All Mine</Text>

          <Text style={styles.nowPlayingArtist}>Kanye West</Text>

        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Player')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.playIcon} />

        </TouchableOpacity>

      </View>



      <View style={styles.bottomNav}>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Listen')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Search')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>

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

  searchBarContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#f0f0f0',

  },

  searchInput: {

    flex: 1,

    height: 40,

    borderRadius: 20,

    paddingHorizontal: 15,

    backgroundColor: '#fff',

  },

  voiceSearchButton: {

    marginLeft: 10,

  },

  voiceIcon: {

    width: 24,

    height: 24,

  },

  recentsTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    margin: 10,

  },

  recentList: {

    flex: 1,

  },

  recentItem: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    borderBottomWidth: 1,

    borderBottomColor: '#f0f0f0',

  },

  albumCover: {

    width: 50,

    height: 50,

    borderRadius: 5,

  },

  songInfo: {

    flex: 1,

    marginLeft: 10,

  },

  songTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  artistName: {

    fontSize: 14,

    color: '#666',

  },

  removeButton: {

    padding: 5,

  },

  removeButtonText: {

    fontSize: 18,

    color: '#999',

  },

  nowPlayingBar: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#f8f8f8',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

  },

  nowPlayingCover: {

    width: 40,

    height: 40,

    borderRadius: 20,

  },

  nowPlayingInfo: {

    flex: 1,

    marginLeft: 10,

  },

  nowPlayingTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  nowPlayingArtist: {

    fontSize: 14,

    color: '#666',

  },

  playIcon: {

    width: 30,

    height: 30,

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    height: 50,

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

  },

  navIcon: {

    width: 24,

    height: 24,

  },

});



export default SearchScreen;