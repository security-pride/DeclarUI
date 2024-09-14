import React, { useState } from 'react';

import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {

  const [currentTime, setCurrentTime] = useState('9:41 AM');

  const navigation = useNavigation();



  const navigateToScreen = (screenName) => {

    navigation.navigate(screenName);

  };



  const renderPlaylist = (name, followers) => (

    <TouchableOpacity style={styles.playlist}>

      <Image source={require('../assets/snack-icon.png')} style={styles.playlistImage} />

      <Text style={styles.playlistName}>{name}</Text>

      <Text style={styles.playlistFollowers}>{followers} FOLLOWERS</Text>

    </TouchableOpacity>

  );



  const renderArtist = (name) => (

    <TouchableOpacity style={styles.artist}>

      <Image source={require('../assets/snack-icon.png')} style={styles.artistImage} />

      <Text style={styles.artistName}>{name}</Text>

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.statusBar}>

        <Text style={styles.time}>{currentTime}</Text>

        <View style={styles.statusIcons}>

          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

          <View style={styles.battery} />

        </View>

      </View>



      <ScrollView>

        <Text style={styles.sectionHeader}>Hots now</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>

          {renderPlaylist('Summer Vibes', '1,300,231')}

          {renderPlaylist('Rap Zone', '650,231')}

        </ScrollView>



        <Text style={styles.sectionHeader}>Mood</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>

          {renderPlaylist('Shower Time', '1,300,231')}

          {renderPlaylist('Old School', '300,231')}

        </ScrollView>



        <Text style={styles.sectionHeader}>Popular artists</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>

          {renderArtist('Ed Sheeran')}

          {renderArtist('Rita Ora')}

          {renderArtist('Eminem')}

          {renderArtist('Dua Lipa')}

        </ScrollView>

      </ScrollView>



      <TouchableOpacity style={styles.nowPlaying} onPress={() => navigateToScreen('Player')}>

        <Image source={require('../assets/snack-icon.png')} style={styles.nowPlayingImage} />

        <View style={styles.nowPlayingInfo}>

          <Text style={styles.nowPlayingTitle}>All Mine</Text>

          <Text style={styles.nowPlayingArtist}>Kanye West</Text>

        </View>

        <TouchableOpacity style={styles.playButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.playIcon} />

        </TouchableOpacity>

      </TouchableOpacity>



      <View style={styles.bottomNav}>

        <TouchableOpacity onPress={() => navigateToScreen('Home')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToScreen('Listen')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToScreen('Search')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToScreen('Profile')}>

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

  statusBar: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 10,

    height: 44,

  },

  time: {

    fontSize: 14,

    fontWeight: 'bold',

  },

  statusIcons: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  icon: {

    width: 16,

    height: 16,

    marginLeft: 5,

  },

  battery: {

    width: 24,

    height: 12,

    borderWidth: 1,

    borderColor: '#000',

    borderRadius: 3,

    marginLeft: 5,

  },

  sectionHeader: {

    fontSize: 22,

    fontWeight: 'bold',

    marginLeft: 15,

    marginTop: 20,

    marginBottom: 10,

  },

  horizontalScroll: {

    paddingLeft: 15,

  },

  playlist: {

    marginRight: 15,

    width: 150,

  },

  playlistImage: {

    width: 150,

    height: 150,

    borderRadius: 10,

  },

  playlistName: {

    fontSize: 16,

    fontWeight: 'bold',

    marginTop: 5,

  },

  playlistFollowers: {

    fontSize: 12,

    color: '#888',

  },

  artist: {

    marginRight: 15,

    alignItems: 'center',

  },

  artistImage: {

    width: 80,

    height: 80,

    borderRadius: 40,

  },

  artistName: {

    fontSize: 14,

    marginTop: 5,

  },

  nowPlaying: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    borderTopWidth: 1,

    borderTopColor: '#eee',

  },

  nowPlayingImage: {

    width: 50,

    height: 50,

    borderRadius: 5,

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

    color: '#888',

  },

  playButton: {

    padding: 10,

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

    borderTopColor: '#eee',

  },

  navIcon: {

    width: 24,

    height: 24,

  },

});



export default HomeScreen;