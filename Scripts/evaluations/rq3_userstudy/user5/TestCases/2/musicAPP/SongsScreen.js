import React, { useState } from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, SafeAreaView, TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const SongsScreen = () => {

  const navigation = useNavigation();

  const [activeTab, setActiveTab] = useState('All Songs');



  const tabs = ['All Songs', 'Playlists', 'Albums', 'Artists', 'Genre'];



  const songs = [

    { id: '1', title: 'Billie Jean', artist: 'Michael Jackson', image: require('../assets/snack-icon.png') },

    { id: '2', title: 'Be the girl', artist: 'Bebe Rexha', image: require('../assets/snack-icon.png') },

    { id: '3', title: 'Countryman', artist: 'Daughtry', image: require('../assets/snack-icon.png') },

    { id: '4', title: 'Do you feel lonelyness', artist: 'Marc Anthony', image: require('../assets/snack-icon.png') },

    { id: '5', title: 'Earth song', artist: 'Michael Jackson', image: require('../assets/snack-icon.png') },

    { id: '6', title: 'Smooth criminal', artist: 'Michael Jackson', image: require('../assets/snack-icon.png') },

    { id: '7', title: 'The way you make me feel', artist: 'Michael Jackson', image: require('../assets/snack-icon.png') },

    { id: '8', title: 'Somebody that I used to know', artist: 'Gotye', image: require('../assets/snack-icon.png') },

    { id: '9', title: 'Wild Thoughts', artist: 'DJ Khaled', image: require('../assets/snack-icon.png') },

  ];



  const renderSongItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('PlaySong')}>
    <View style={styles.songItem}>

      <Image source={item.image} style={styles.songImage} />

      <View style={styles.songInfo}>

        <Text style={styles.songTitle}>{item.title}</Text>

        <Text style={styles.songArtist}>{item.artist}</Text>

      </View>

      <TouchableOpacity style={styles.playButton}>

        <Text style={styles.playButtonText}>▶</Text>

      </TouchableOpacity>

    </View>
    </TouchableOpacity>

  );

   const handlePress = (item) => {
      if (item === 'Albums') {
        navigation.navigate('Albums');
      } else if(item === 'All Songs') {
        navigation.navigate('Songs');
      }
      else {
        setActiveTab(item);
      }
    };



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity>

          <Text style={styles.menuIcon}>☰</Text>

        </TouchableOpacity>

        <Text style={styles.headerTitle}>Songs</Text>

        <TouchableOpacity>

          <Text style={styles.searchIcon}>🔍</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.tabContainer}>

        <FlatList

          data={tabs}

          horizontal

          showsHorizontalScrollIndicator={false}

          renderItem={({ item }) => (

            <TouchableOpacity

              style={[styles.tab, activeTab === item && styles.activeTab]}

              onPress={() => handlePress(item)}

            >

              <Text style={[styles.tabText, activeTab === item && styles.activeTabText]}>{item}</Text>

            </TouchableOpacity>

          )}

          keyExtractor={(item) => item}

        />

      </View>



      <FlatList

        data={songs}

        renderItem={renderSongItem}

        keyExtractor={(item) => item.id}

        style={styles.songList}

      />


       <TouchableOpacity onPress={() => navigation.navigate('PlaySong')}>
      <View style={styles.nowPlaying}>

        <Image source={require('../assets/snack-icon.png')} style={styles.nowPlayingImage} />

        <View style={styles.nowPlayingControls}>

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
      </TouchableOpacity>



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>

          <Text style={styles.tabIcon}>🏠</Text>

          <Text style={styles.tabText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.tabItem, styles.activeTabItem]}>

          <Text style={[styles.tabIcon, styles.activeTabIcon]}>🎵</Text>

          <Text style={[styles.tabText, styles.activeTabText]}>Songs</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Text style={styles.tabIcon}>⚙️</Text>

          <Text style={styles.tabText}>Settings</Text>

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

  menuIcon: {

    fontSize: 24,

    color: 'white',

  },

  headerTitle: {

    fontSize: 20,

    fontWeight: 'bold',

    color: 'white',

  },

  searchIcon: {

    fontSize: 24,

    color: 'white',

  },

  tabContainer: {

    marginBottom: 10,

  },

  tab: {

    paddingHorizontal: 16,

    paddingVertical: 8,

  },

  activeTab: {

    borderBottomWidth: 2,

    borderBottomColor: '#FF69B4',

  },

  tabText: {

    color: '#999',

    fontSize: 16,

  },

  activeTabText: {

    color: '#FF69B4',

  },

  songList: {

    flex: 1,

  },

  songItem: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 12,

  },

  songImage: {

    width: 50,

    height: 50,

    borderRadius: 25,

  },

  songInfo: {

    flex: 1,

    marginLeft: 16,

  },

  songTitle: {

    color: 'white',

    fontSize: 16,

  },

  songArtist: {

    color: '#999',

    fontSize: 14,

  },

  playButton: {

    padding: 8,

  },

  playButtonText: {

    color: '#FF69B4',

    fontSize: 20,

  },

  nowPlaying: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    borderTopWidth: 1,

    borderTopColor: '#333',

  },

  nowPlayingImage: {

    width: 40,

    height: 40,

    borderRadius: 20,

  },

  nowPlayingControls: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    flex: 1,

  },

  controlButton: {

    color: 'white',

    fontSize: 24,

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#333',

    paddingVertical: 8,

  },

  tabItem: {

    alignItems: 'center',

  },

  activeTabItem: {

    borderTopWidth: 2,

    borderTopColor: '#FF69B4',

  },

  tabIcon: {

    fontSize: 24,

    color: '#999',

  },

  activeTabIcon: {

    color: '#FF69B4',

  },

  tabText: {

    color: '#999',

    fontSize: 12,

    marginTop: 4,

  },

  activeTabText: {

    color: '#FF69B4',

  },

});



export default SongsScreen;