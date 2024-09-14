import React from 'react';

import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {

  const navigation = useNavigation();



  const renderHotItem = (title, followers) => (

    <TouchableOpacity style={styles.hotItem}>

      <Image source={require('../assets/snack-icon.png')} style={styles.hotItemImage} />

      <Text style={styles.hotItemTitle}>{title}</Text>

      <Text style={styles.hotItemFollowers}>{followers} FOLLOWERS</Text>

    </TouchableOpacity>

  );



  const renderMoodItem = (title, followers) => (

    <TouchableOpacity style={styles.moodItem}>

      <Image source={require('../assets/snack-icon.png')} style={styles.moodItemImage} />

      <View style={styles.moodItemOverlay}>

        <Text style={styles.moodItemTitle}>{title}</Text>

        <Text style={styles.moodItemFollowers}>{followers} FOLLOWERS</Text>

      </View>

    </TouchableOpacity>

  );



  const renderArtistItem = (name, image) => (

    <TouchableOpacity style={styles.artistItem}>

      <Image source={image} style={styles.artistImage} />

      <Text style={styles.artistName}>{name}</Text>

    </TouchableOpacity>

  );



  return (
  <SafeAreaView style={styles.container}>

    <ScrollView style={styles.container}>

      <Text style={styles.sectionTitle}>Hots now</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.hotSection}>

        {renderHotItem('Summer Vibes', '3,304,231')}

        {renderHotItem('Rap Zone', '650,231')}

      </ScrollView>



      <Text style={styles.sectionTitle}>Mood</Text>

      <View style={styles.moodSection}>

        {renderMoodItem('Shower Time', '1,300,231')}

        {renderMoodItem('Old School', '300,231')}

      </View>



      <Text style={styles.sectionTitle}>Popular artists</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.artistsSection}>

        {renderArtistItem('Ed Sheeran', require('../assets/snack-icon.png'))}

        {renderArtistItem('Rita Ora', require('../assets/snack-icon.png'))}

        {renderArtistItem('Eminem', require('../assets/snack-icon.png'))}

        {renderArtistItem('Dua Lipa', require('../assets/snack-icon.png'))}

      </ScrollView>
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

    <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={[styles.navText, styles.activeNavText]}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Listen')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Listen</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Search')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Search</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Profile</Text>
    </TouchableOpacity>
    </View>
  </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#fff',

    paddingTop: 60,

  },

  sectionTitle: {

    fontSize: 20,

    fontWeight: 'bold',

    marginLeft: 15,

    marginTop: 20,

    marginBottom: 10,

  },

  hotSection: {

    paddingLeft: 15,

  },

  hotItem: {

    width: 150,

    marginRight: 15,

  },

  hotItemImage: {

    width: 150,

    height: 150,

    borderRadius: 10,

  },

  hotItemTitle: {

    fontWeight: 'bold',

    marginTop: 5,

  },

  hotItemFollowers: {

    fontSize: 12,

    color: '#888',

  },

  moodSection: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    paddingHorizontal: 15,

  },

  moodItem: {

    width: '48%',

    height: 100,

    marginBottom: 10,

  },

  moodItemImage: {

    width: '100%',

    height: '100%',

    borderRadius: 10,

  },

  moodItemOverlay: {

    ...StyleSheet.absoluteFillObject,

    backgroundColor: 'rgba(0,0,0,0.3)',

    borderRadius: 10,

    justifyContent: 'center',

    alignItems: 'center',

  },

  moodItemTitle: {

    color: '#fff',

    fontWeight: 'bold',

    fontSize: 16,

  },

  moodItemFollowers: {

    color: '#fff',

    fontSize: 12,

  },

  artistsSection: {

    paddingLeft: 15,

  },

  artistItem: {

    alignItems: 'center',

    marginRight: 20,

  },

  artistImage: {

    width: 80,

    height: 80,

    borderRadius: 40,

  },

  artistName: {

    marginTop: 5,

    fontSize: 12,

  },

  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#2a2a2a',
    paddingVertical: 8,
  },

  navItem: {
    alignItems: 'center',
  },

  navIcon: {
    width: 24,
    height: 24,
  },

  navText: {
    color: '#999',
    fontSize: 12,
    marginTop: 4,
  },

  activeNavText: {
    color: '#1DB954',
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



export default HomeScreen;