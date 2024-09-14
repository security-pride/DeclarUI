import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TrendingScreen = () => {
  const navigation = useNavigation();
  const [selectedGenre, setSelectedGenre] = useState('Partyholics');
  const [selectedYear, setSelectedYear] = useState('2020');

  const trendingSongs = [
    { id: '1', title: "I'm a Freak (feat. Pitbull)", plays: 12598, image: require('../assets/snack-icon.png') },
    { id: '2', title: "Can't Remember To Forget", plays: 12598, image: require('../assets/snack-icon.png') },
    { id: '3', title: "Beyonce", plays: 12598, image: require('../assets/snack-icon.png') },
    { id: '4', title: "Roller Coaster (Single)", plays: 12598, image: require('../assets/snack-icon.png') },
    { id: '5', title: "Unconditionally", plays: 12598, image: require('../assets/snack-icon.png') },
  ];

  const trendingAlbums = [
    { id: '1', title: "Album 1", artist: "Artist 1", image: require('../assets/snack-icon.png') },
    { id: '2', title: "Album 2", artist: "Artist 2", image: require('../assets/snack-icon.png') },
    { id: '3', title: "Album 3", artist: "Artist 3", image: require('../assets/snack-icon.png') },
  ];

  const renderSongItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.songItem}
      onPress={() => navigation.navigate('NowPlaying', { song: item })}
    >
      <Image source={item.image} style={styles.songImage} />
      <View style={styles.songInfo}>
        <Text style={styles.songTitle}>{item.title}</Text>
        <Text style={styles.songPlays}>{item.plays} Played</Text>
      </View>
      <TouchableOpacity style={styles.moreButton}>
        <Text style={styles.moreButtonText}>...</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  const renderAlbumItem = ({ item }) => (
    <TouchableOpacity style={styles.albumItem}>
      <Image source={item.image} style={styles.albumImage} />
      <Text style={styles.albumTitle}>{item.title}</Text>
      <Text style={styles.albumArtist}>{item.artist}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.header}>Trending</Text>
      <View style={styles.filters}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>{selectedGenre}</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.dropdownIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.filterButton, styles.yearFilter]}>
          <Text style={styles.filterButtonText}>{selectedYear}</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.dropdownIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Trending Songs</Text>
        <FlatList
          data={trendingSongs}
          renderItem={renderSongItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
        <Text style={styles.sectionTitle}>Trending Albums</Text>
        <FlatList
          horizontal
          data={trendingAlbums}
          renderItem={renderAlbumItem}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.nowPlayingBar}>
        <Image source={require('../assets/snack-icon.png')} style={styles.smallAlbumCover} />
        <View style={styles.nowPlayingInfo}>
          <Text style={styles.nowPlayingTitle}>Illegal Weapon 2.0</Text>
          <Text style={styles.nowPlayingArtist}>Street Dancer 3D</Text>
        </View>
        <TouchableOpacity style={styles.playPauseButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.playPauseIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.heartButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.heartIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Explore')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />
          <Text style={styles.tabLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>
          <Image source={require('../assets/snack-icon.png')} style={[styles.tabIcon, styles.activeTabIcon]} />
          <Text style={[styles.tabLabel, styles.activeTabLabel]}>Trending</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Search')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />
          <Text style={styles.tabLabel}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />
          <Text style={styles.tabLabel}>Library</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />
          <Text style={styles.tabLabel}>Settings</Text>
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
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 60,
    marginLeft: 20,
    marginBottom: 20,
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  yearFilter: {
    backgroundColor: '#ffe4e1',
  },
  filterButtonText: {
    fontSize: 16,
    marginRight: 5,
  },
  dropdownIcon: {
    width: 12,
    height: 12,
  },
  content: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
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
    color: '#888',
  },
  moreButton: {
    padding: 10,
  },
  moreButtonText: {
    fontSize: 20,
    color: '#888',
  },
  albumItem: {
    marginRight: 15,
    width: 150,
  },
  albumImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  albumTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  albumArtist: {
    fontSize: 14,
    color: '#888',
  },
  nowPlayingBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  smallAlbumCover: {
    width: 40,
    height: 40,
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
  playPauseButton: {
    padding: 10,
  },
  playPauseIcon: {
    width: 30,
    height: 30,
  },
  heartButton: {
    padding: 10,
  },
  heartIcon: {
    width: 20,
    height: 20,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingVertical: 10,
  },
  tabItem: {
    alignItems: 'center',
  },
  tabIcon: {
    width: 24,
    height: 24,
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 4,
  },
  activeTab: {
    // Add styles for active tab
  },
  activeTabIcon: {
    // Add styles for active tab icon
  },
  activeTabLabel: {
    // Add styles for active tab label
  },
});

export default TrendingScreen;