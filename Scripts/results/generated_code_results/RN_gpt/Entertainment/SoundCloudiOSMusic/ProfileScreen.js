import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Button, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* SoundCloud Premium banner */}
      <View style={styles.premiumBanner}>
        <Text style={styles.premiumTitle}>SoundCloud Premium</Text>
        <Text style={styles.premiumDesc}>Remove boring advs, create infinite playlists and so much</Text>
      </View>

      {/* User Info */}
      <View style={styles.userInfoContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.profilePicture} />
        <View>
          <Text style={styles.userName}>Kimberly Evans</Text>
          <Text style={styles.editProfile}>Edit profile</Text>
        </View>
        <Text style={styles.freeUser}>Free User</Text>
      </View>

      {/* Menu Items */}
      <View style={styles.menuItems}>
        <Text style={styles.menuItemText} onPress={() => navigation.navigate('Player')}>My SoundCloud</Text>
        <Text style={styles.menuItemText}>Music quality</Text>
        <Text style={styles.menuItemText} onPress={() => navigation.navigate('Help')}>Help</Text>
      </View>

      {/* Playlists */}
      <Text style={styles.myPlaylistsText}>My playlists</Text>
      <View style={styles.playlists}>
        <View style={styles.playlistItem}>
          <ImageBackground source={require('../assets/snack-icon.png')} style={styles.playlistImage}>
            <Text style={styles.playlistName}>Summer Vibes</Text>
            <Text style={styles.followers}>1,300,231 FOLLOWERS</Text>
          </ImageBackground>
        </View>
        <View style={styles.playlistItem}>
          <ImageBackground source={require('../assets/snack-icon.png')} style={styles.playlistImage}>
            <Text style={styles.playlistName}>Rap Zone</Text>
            <Text style={styles.followers}>650,231 FOLLOWERS</Text>
          </ImageBackground>
        </View>
        <View style={styles.playlistItem}>
          <ImageBackground source={require('../assets/snack-icon.png')} style={styles.playlistImage}>
            <Text style={styles.playlistName}>Music Mix</Text>
            <Text style={styles.followers}>50,231 FOLLOWERS</Text>
          </ImageBackground>
        </View>
      </View>

      {/* Now Playing */}
      <View style={styles.nowPlayingBar}>
        <Text style={styles.nowPlayingText} onPress={() => navigation.navigate('Home')}>All Mine</Text>
        <Text style={styles.artistText}>Kanye West</Text>
        <Button title="Play" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  premiumBanner: {
    backgroundColor: '#f89',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  premiumTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
  premiumDesc: {
    color: '#fff',
    marginTop: 4,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  editProfile: {
    color: '#f89',
  },
  freeUser: {
    marginLeft: 'auto',
    backgroundColor: '#f89',
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  menuItems: {
    marginBottom: 16,
  },
  menuItemText: {
    fontSize: 16,
    marginBottom: 8,
  },
  myPlaylistsText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  playlists: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  playlistItem: {
    width: '30%',
  },
  playlistImage: {
    height: 100,
    justifyContent: 'flex-end',
    padding: 8,
  },
  playlistName: {
    fontWeight: 'bold',
    color: '#fff',
  },
  followers: {
    color: '#fff',
    fontSize: 12,
  },
  nowPlayingBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginTop: 16,
  },
  nowPlayingText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  artistText: {
    color: '#777',
  },
});

export default ProfileScreen;