import React from 'react';

import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const albumData = [

  { id: '1', title: 'History', artist: 'Michael Jackson', songs: 10, image: '../assets/snack-icon.png' },

  { id: '2', title: 'Thriller', artist: 'Michael Jackson', songs: 10, image: '../assets/snack-icon.png' },

  { id: '3', title: "It Won't Be Soon..", artist: 'Maroon 5', songs: 10, image: '../assets/snack-icon.png' },

  { id: '4', title: 'I Am... Yours', artist: 'Beyonce', songs: 10, image: '../assets/snack-icon.png' },

];



const AlbumItem = ({ item, onPress }) => (

  <TouchableOpacity style={styles.albumItem} onPress={onPress}>

    <Image source={item.image} style={styles.albumCover} />

    <View style={styles.albumInfo}>

      <Text style={styles.albumTitle}>{item.title}</Text>

      <Text style={styles.albumArtist}>{item.artist} • {item.songs} Songs</Text>

    </View>

    <TouchableOpacity style={styles.moreButton}>

      <Text style={styles.moreButtonText}>:</Text>

    </TouchableOpacity>

  </TouchableOpacity>

);



const AlbumsScreen = () => {

  const navigation = useNavigation();



  const renderAlbumItem = ({ item }) => (

    <AlbumItem

      item={item}

      onPress={() => navigation.navigate('AlbumDetails', { album: item })}

    />

  );



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity>

          <Text style={styles.menuIcon}>≡</Text>

        </TouchableOpacity>

        <Text style={styles.headerTitle}>Songs</Text>

        <TouchableOpacity>

          <Text style={styles.searchIcon}>🔍</Text>

        </TouchableOpacity>

      </View>

      <View style={styles.tabContainer}>

        <TouchableOpacity style={styles.tab}  onPress={() => navigation.navigate('Songs')}>

          <Text style={styles.tabText}>All Songs</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tab}>

          <Text style={styles.tabText}>Playlists</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.tab, styles.activeTab]}>

          <Text style={[styles.tabText, styles.activeTabText]}>Albums</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tab}>

          <Text style={styles.tabText}>Artists</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tab}>

          <Text style={styles.tabText}>Genre</Text>

        </TouchableOpacity>

      </View>

      <FlatList

        data={albumData}

        renderItem={renderAlbumItem}

        keyExtractor={item => item.id}

        style={styles.list}

      />
      <TouchableOpacity onPress={() => navigation.navigate('PlaySong')}>
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
      </TouchableOpacity>

      <View style={styles.navBar}>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>

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

    fontSize: 20,

    color: 'white',

  },

  tabContainer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    paddingVertical: 10,

  },

  tab: {

    paddingVertical: 5,

  },

  tabText: {

    color: '#999',

    fontSize: 16,

  },

  activeTab: {

    borderBottomWidth: 2,

    borderBottomColor: '#FF69B4',

  },

  activeTabText: {

    color: '#FF69B4',

  },

  list: {

    flex: 1,

  },

  albumItem: {

    flexDirection: 'row',

    padding: 10,

    alignItems: 'center',

  },

  albumCover: {

    width: 60,

    height: 60,

    borderRadius: 5,

  },

  albumInfo: {

    flex: 1,

    marginLeft: 10,

  },

  albumTitle: {

    color: 'white',

    fontSize: 16,

    fontWeight: 'bold',

  },

  albumArtist: {

    color: '#999',

    fontSize: 14,

  },

  moreButton: {

    padding: 10,

  },

  moreButtonText: {

    color: 'white',

    fontSize: 20,

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



export default AlbumsScreen;