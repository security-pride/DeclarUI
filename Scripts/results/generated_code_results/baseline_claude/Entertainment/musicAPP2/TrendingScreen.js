import React, { useState } from 'react';

import {

  View,

  Text,

  StyleSheet,

  SafeAreaView,

  TouchableOpacity,

  Image,

  FlatList,

  ScrollView,

} from 'react-native';

import { useNavigation } from '@react-navigation/native';



const TrendingScreen = () => {

  const navigation = useNavigation();

  const [genre, setGenre] = useState('Partyholics');

  const [year, setYear] = useState('2020');



  const trendingSongs = [

    { id: '1', title: "I'm a Freak (feat. Pitbull)", plays: '12,598 Played' },

    { id: '2', title: "Can't Remember To Forget", plays: '12,598 Played' },

    { id: '3', title: 'Beyonce', plays: '12,598 Played' },

    { id: '4', title: 'Roller Coaster (Single)', plays: '12,598 Played' },

    { id: '5', title: 'Unconditionally', plays: '12,598 Played' },

  ];



  const trendingAlbums = [

    { id: '1', image: require('../assets/snack-icon.png') },

    { id: '2', image: require('../assets/snack-icon.png') },

    { id: '3', image: require('../assets/snack-icon.png') },

  ];



  const renderSongItem = ({ item }) => (

    <View style={styles.songItem}>

      <Image source={require('../assets/snack-icon.png')} style={styles.songImage} />

      <View style={styles.songInfo}>

        <Text style={styles.songTitle}>{item.title}</Text>

        <Text style={styles.songPlays}>{item.plays}</Text>

      </View>

      <TouchableOpacity style={styles.moreButton}>

        <Text style={styles.moreButtonText}>...</Text>

      </TouchableOpacity>

    </View>

  );



  const renderAlbumItem = ({ item }) => (

    <Image source={item.image} style={styles.albumImage} />

  );



  return (

    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>Trending</Text>

      <View style={styles.filterContainer}>

        <TouchableOpacity style={styles.filterButton}>

          <Text style={styles.filterButtonText}>{genre}</Text>

          <Image source={require('../assets/snack-icon.png')} style={styles.dropdownIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={[styles.filterButton, styles.yearButton]}>

          <Text style={[styles.filterButtonText, styles.yearButtonText]}>{year}</Text>

          <Image source={require('../assets/snack-icon.png')} style={[styles.dropdownIcon, styles.yearDropdownIcon]} />

        </TouchableOpacity>

      </View>

      <ScrollView>

        <View style={styles.section}>

          <Text style={styles.sectionTitle}>Trending Songs</Text>

          <FlatList

            data={trendingSongs}

            renderItem={renderSongItem}

            keyExtractor={(item) => item.id}

            scrollEnabled={false}

          />

        </View>

        <View style={styles.section}>

          <Text style={styles.sectionTitle}>Trending Albums</Text>

          <FlatList

            data={trendingAlbums}

            renderItem={renderAlbumItem}

            keyExtractor={(item) => item.id}

            horizontal

            showsHorizontalScrollIndicator={false}

          />

        </View>

      </ScrollView>

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

      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>

          <Image source={require('../assets/snack-icon.png')} style={[styles.tabIcon, styles.activeTabIcon]} />

          <Text style={[styles.tabText, styles.activeTabText]}>Trending</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Search')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Search</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Library')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Library</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Settings')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Settings</Text>

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

  title: {

    fontSize: 32,

    fontWeight: 'bold',

    color: '#000080',

    marginLeft: 20,

    marginTop: 20,

    marginBottom: 20,

  },

  filterContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginHorizontal: 20,

    marginBottom: 20,

  },

  filterButton: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#F0F0F0',

    borderRadius: 20,

    paddingHorizontal: 15,

    paddingVertical: 10,

  },

  filterButtonText: {

    fontSize: 16,

    marginRight: 5,

  },

  yearButton: {

    borderColor: '#FF69B4',

    borderWidth: 1,

    backgroundColor: 'transparent',

  },

  yearButtonText: {

    color: '#FF69B4',

  },

  dropdownIcon: {

    width: 12,

    height: 12,

    tintColor: '#000000',

  },

  yearDropdownIcon: {

    tintColor: '#FF69B4',

  },

  section: {

    marginBottom: 20,

  },

  sectionTitle: {

    fontSize: 24,

    fontWeight: 'bold',

    color: '#000080',

    marginLeft: 20,

    marginBottom: 10,

  },

  songItem: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 20,

    marginBottom: 15,

  },

  songImage: {

    width: 50,

    height: 50,

    borderRadius: 5,

  },

  songInfo: {

    flex: 1,

    marginLeft: 15,

  },

  songTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  songPlays: {

    fontSize: 14,

    color: '#888888',

  },

  moreButton: {

    padding: 5,

  },

  moreButtonText: {

    fontSize: 20,

    color: '#888888',

  },

  albumImage: {

    width: 150,

    height: 150,

    borderRadius: 10,

    marginRight: 15,

  },

  nowPlayingBar: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#4285F4',

    borderTopLeftRadius: 15,

    borderTopRightRadius: 15,

  },

  nowPlayingImage: {

    width: 40,

    height: 40,

    borderRadius: 5,

  },

  nowPlayingInfo: {

    flex: 1,

    marginLeft: 10,

  },

  nowPlayingTitle: {

    color: '#FFFFFF',

    fontSize: 14,

    fontWeight: 'bold',

  },

  nowPlayingArtist: {

    color: '#FFFFFF',

    fontSize: 12,

  },

  heartIcon: {

    marginHorizontal: 10,

  },

  pauseButton: {

    backgroundColor: '#FFFFFF',

    borderRadius: 15,

    padding: 5,

  },

  icon: {

    width: 20,

    height: 20,

    tintColor: '#4285F4',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    paddingVertical: 10,

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

    tintColor: '#888888',

  },

  tabText: {

    fontSize: 12,

    color: '#888888',

    marginTop: 5,

  },

  activeTab: {

    backgroundColor: '#4285F4',

    borderRadius: 20,

    paddingHorizontal: 15,

    paddingVertical: 5,

  },

  activeTabIcon: {

    tintColor: '#FFFFFF',

  },

  activeTabText: {

    color: '#FFFFFF',

  },

});



export default TrendingScreen;