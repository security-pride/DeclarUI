import React from 'react';

import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const ProfileScreen = () => {

  const navigation = useNavigation();



  const renderPlaylistItem = (title, followers, image) => (

    <TouchableOpacity style={styles.playlistItem}>

      <Image source={image} style={styles.playlistImage} />

      <Text style={styles.playlistTitle}>{title}</Text>

      <Text style={styles.playlistFollowers}>{followers} FOLLOWERS</Text>

    </TouchableOpacity>

  );



  return (

    <SafeAreaView style={styles.container}>

      <ScrollView>

        <View style={styles.premiumCard}>

          <View style={styles.premiumContent}>

            <Text style={styles.premiumTitle}>SoundCloud Premium</Text>

            <Text style={styles.premiumDescription}>Remove boring advs, create infinite playlists and so much</Text>

          </View>

          <TouchableOpacity style={styles.starButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.starIcon} />

          </TouchableOpacity>

          <TouchableOpacity style={styles.closeButton}>

            <Text style={styles.closeButtonText}>×</Text>

          </TouchableOpacity>

        </View>



        <View style={styles.profileHeader}>

          <View style={styles.profileInfo}>

            <Text style={styles.profileName}>Kimberly Evans</Text>

            <TouchableOpacity>

              <Text style={styles.editProfileText}>Edit profile</Text>

            </TouchableOpacity>

          </View>

          <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />

        </View>



        <TouchableOpacity style={styles.menuItem}>

          <Text style={styles.menuItemText}>My SoundCloud</Text>

          <View style={styles.freeUserBadge}>

            <Text style={styles.freeUserText}>Free User</Text>

          </View>

        </TouchableOpacity>



        <TouchableOpacity style={styles.menuItem}>

          <Text style={styles.menuItemText}>Music quality</Text>

          <Image source={require('../assets/snack-icon.png')} style={styles.chevronIcon} />

        </TouchableOpacity>



        <TouchableOpacity style={styles.menuItem}>

          <Text style={styles.menuItemText}>Help</Text>

          <Image source={require('../assets/snack-icon.png')} style={styles.chevronIcon} />

        </TouchableOpacity>



        <Text style={styles.sectionTitle}>My playlists</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.playlistsContainer}>

          {renderPlaylistItem('Summer Vibes', '3,304,231', require('../assets/snack-icon.png'))}

          {renderPlaylistItem('Rap Zone', '650,231', require('../assets/snack-icon.png'))}

          {renderPlaylistItem('Music Mix', '50,231', require('../assets/snack-icon.png'))}

        </ScrollView>



        <View style={styles.nowPlayingBar}>

          <Image source={require('../assets/snack-icon.png')} style={styles.nowPlayingImage} />

          <View style={styles.nowPlayingInfo}>

            <Text style={styles.nowPlayingSong}>All Mine</Text>

            <Text style={styles.nowPlayingArtist}>Kanye West</Text>

          </View>

          <TouchableOpacity style={styles.playButton} onPress={() => navigation.navigate('Player')}>

            <Image source={require('../assets/snack-icon.png')} style={styles.playIcon} />

          </TouchableOpacity>

        </View>

      </ScrollView>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#fff',

  },

  premiumCard: {

    backgroundColor: '#FF6B00',

    margin: 15,

    borderRadius: 10,

    padding: 15,

    flexDirection: 'row',

  },

  premiumContent: {

    flex: 1,

  },

  premiumTitle: {

    color: '#fff',

    fontWeight: 'bold',

    fontSize: 18,

    marginBottom: 5,

  },

  premiumDescription: {

    color: '#fff',

    fontSize: 14,

  },

  starButton: {

    padding: 5,

  },

  starIcon: {

    width: 20,

    height: 20,

    tintColor: '#fff',

  },

  closeButton: {

    position: 'absolute',

    top: 5,

    right: 10,

  },

  closeButtonText: {

    color: '#fff',

    fontSize: 20,

    fontWeight: 'bold',

  },

  profileHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 15,

  },

  profileInfo: {

    flex: 1,

  },

  profileName: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  editProfileText: {

    color: '#FF6B00',

    marginTop: 5,

  },

  profileImage: {

    width: 60,

    height: 60,

    borderRadius: 30,

  },

  menuItem: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingVertical: 15,

    paddingHorizontal: 15,

    borderBottomWidth: 1,

    borderBottomColor: '#eee',

  },

  menuItemText: {

    fontSize: 16,

  },

  freeUserBadge: {

    backgroundColor: '#FF6B00',

    paddingHorizontal: 10,

    paddingVertical: 5,

    borderRadius: 15,

  },

  freeUserText: {

    color: '#fff',

    fontSize: 12,

  },

  chevronIcon: {

    width: 15,

    height: 15,

  },

  sectionTitle: {

    fontSize: 20,

    fontWeight: 'bold',

    marginLeft: 15,

    marginTop: 20,

    marginBottom: 10,

  },

  playlistsContainer: {

    paddingLeft: 15,

  },

  playlistItem: {

    width: 150,

    marginRight: 15,

  },

  playlistImage: {

    width: 150,

    height: 150,

    borderRadius: 10,

  },

  playlistTitle: {

    fontWeight: 'bold',

    marginTop: 5,

  },

  playlistFollowers: {

    fontSize: 12,

    color: '#888',

  },

  nowPlayingBar: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#f8f8f8',

    borderTopWidth: 1,

    borderTopColor: '#eee',

  },

  nowPlayingImage: {

    width: 40,

    height: 40,

    borderRadius: 5,

    marginRight: 10,

  },

  nowPlayingInfo: {

    flex: 1,

  },

  nowPlayingSong: {

    fontWeight: 'bold',

  },

  nowPlayingArtist: {

    color: '#888',

    fontSize: 12,

  },

  playButton: {

    width: 30,

    height: 30,

    justifyContent: 'center',

    alignItems: 'center',

  },

  playIcon: {

    width: 20,

    height: 20,

  },

});



export default ProfileScreen;