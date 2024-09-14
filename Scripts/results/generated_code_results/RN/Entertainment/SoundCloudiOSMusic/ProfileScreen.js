import React from 'react';

import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar, ScrollView, ImageBackground } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const ProfileScreen = () => {

  const navigation = useNavigation();



  const navigateToPage = (pageName) => {

    navigation.navigate(pageName);

  };



  return (

    <View style={styles.container}>

      <StatusBar barStyle="dark-content" />

      <ScrollView contentContainerStyle={styles.scrollContent}>

        <View style={styles.premiumBanner}>

          <Text style={styles.premiumTitle}>SoundCloud Premium</Text>

          <Text style={styles.premiumDescription}>Remove boring advs, create infinite playlists and so much</Text>

          <TouchableOpacity style={styles.closeButton}>

            <Text style={styles.closeButtonText}>×</Text>

          </TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.premiumIcon} />

        </View>



        <View style={styles.userInfoContainer}>

          <Image source={require('../assets/snack-icon.png')} style={styles.profilePicture} />

          <View style={styles.userTextInfo}>

            <Text style={styles.userName}>Kimberly Evans</Text>

            <TouchableOpacity>

              <Text style={styles.editProfileText}>Edit profile</Text>

            </TouchableOpacity>

          </View>

          <View style={styles.freeUserBadge}>

            <Text style={styles.freeUserText}>Free User</Text>

          </View>

        </View>



        <View style={styles.menuItems}>

          <TouchableOpacity style={styles.menuItem}>

            <Text style={styles.menuItemText}>My SoundCloud</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>

            <Text style={styles.menuItemText}>Music quality</Text>

            <Text style={styles.menuItemArrow}>›</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>

            <Text style={styles.menuItemText}>Help</Text>

            <Text style={styles.menuItemArrow}>›</Text>

          </TouchableOpacity>

        </View>



        <Text style={styles.playlistsHeader}>My playlists</Text>



        <View style={styles.playlistsContainer}>

          <TouchableOpacity style={styles.playlistItem}>

            <ImageBackground source={require('../assets/snack-icon.png')} style={styles.playlistImage}>

              <Text style={styles.playlistTitle}>Summer Vibes</Text>

              <Text style={styles.playlistFollowers}>1.300.231 FOLLOWERS</Text>

            </ImageBackground>

          </TouchableOpacity>

          <TouchableOpacity style={styles.playlistItem}>

            <ImageBackground source={require('../assets/snack-icon.png')} style={styles.playlistImage}>

              <Text style={styles.playlistTitle}>Rap Zone</Text>

              <Text style={styles.playlistFollowers}>650.231 FOLLOWERS</Text>

            </ImageBackground>

          </TouchableOpacity>

          <TouchableOpacity style={styles.playlistItem}>

            <ImageBackground source={require('../assets/snack-icon.png')} style={styles.playlistImage}>

              <Text style={styles.playlistTitle}>Music Mix</Text>

              <Text style={styles.playlistFollowers}>50.231 FOLLOWERS</Text>

            </ImageBackground>

          </TouchableOpacity>

        </View>

      </ScrollView>



      <View style={styles.nowPlayingBar}>

        <TouchableOpacity style={styles.nowPlayingContent} onPress={() => navigateToPage('Player')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.nowPlayingImage} />

          <View style={styles.nowPlayingTextContainer}>

            <Text style={styles.nowPlayingTitle}>All Mine</Text>

            <Text style={styles.nowPlayingArtist}>Kanye West</Text>

          </View>

        </TouchableOpacity>

        <TouchableOpacity style={styles.playButton}>

          <Text style={styles.playButtonText}>▶</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.bottomNav}>

        <TouchableOpacity style={styles.navItem} onPress={() => navigateToPage('Home')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.navText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigateToPage('Listen')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.navText}>Listen</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigateToPage('Search')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.navText}>Search</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={[styles.navText, styles.activeNavText]}>Profile</Text>

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

  scrollContent: {

    paddingBottom: 70,

  },

  premiumBanner: {

    backgroundColor: '#ff5500',

    padding: 20,

    position: 'relative',

  },

  premiumTitle: {

    color: '#fff',

    fontSize: 18,

    fontWeight: 'bold',

  },

  premiumDescription: {

    color: '#fff',

    fontSize: 14,

  },

  closeButton: {

    position: 'absolute',

    top: 10,

    right: 10,

  },

  closeButtonText: {

    color: '#fff',

    fontSize: 24,

  },

  premiumIcon: {

    width: 20,

    height: 20,

    position: 'absolute',

    top: 10,

    right: 40,

  },

  userInfoContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 20,

  },

  profilePicture: {

    width: 60,

    height: 60,

    borderRadius: 30,

  },

  userTextInfo: {

    marginLeft: 15,

    flex: 1,

  },

  userName: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  editProfileText: {

    color: '#ff5500',

    marginTop: 5,

  },

  freeUserBadge: {

    backgroundColor: '#eee',

    paddingHorizontal: 10,

    paddingVertical: 5,

    borderRadius: 15,

  },

  freeUserText: {

    fontSize: 12,

  },

  menuItems: {

    borderTopWidth: 1,

    borderBottomWidth: 1,

    borderColor: '#eee',

  },

  menuItem: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingVertical: 15,

    paddingHorizontal: 20,

    borderBottomWidth: 1,

    borderBottomColor: '#eee',

  },

  menuItemText: {

    fontSize: 16,

  },

  menuItemArrow: {

    fontSize: 20,

    color: '#ccc',

  },

  playlistsHeader: {

    fontSize: 18,

    fontWeight: 'bold',

    padding: 20,

  },

  playlistsContainer: {

    paddingHorizontal: 20,

  },

  playlistItem: {

    marginBottom: 15,

  },

  playlistImage: {

    width: '100%',

    height: 150,

    justifyContent: 'flex-end',

    padding: 10,

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

  nowPlayingBar: {

    position: 'absolute',

    bottom: 50,

    left: 0,

    right: 0,

    height: 60,

    backgroundColor: '#f2f2f2',

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 15,

  },

  nowPlayingContent: {

    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',

  },

  nowPlayingImage: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 10,

  },

  nowPlayingTextContainer: {

    flex: 1,

  },

  nowPlayingTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  nowPlayingArtist: {

    fontSize: 14,

    color: '#666',

  },

  playButton: {

    width: 40,

    height: 40,

    borderRadius: 20,

    backgroundColor: '#ff5500',

    justifyContent: 'center',

    alignItems: 'center',

  },

  playButtonText: {

    color: '#fff',

    fontSize: 18,

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    position: 'absolute',

    bottom: 0,

    left: 0,

    right: 0,

    height: 50,

    backgroundColor: '#fff',

    borderTopWidth: 1,

    borderTopColor: '#eee',

  },

  navItem: {

    alignItems: 'center',

  },

  navIcon: {

    width: 24,

    height: 24,

  },

  navText: {

    fontSize: 12,

    marginTop: 2,

  },

  activeNavText: {

    color: '#ff5500',

  },

});



export default ProfileScreen;