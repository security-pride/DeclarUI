import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({ navigation }) => {

  // Sample data
  const hotRecommended = [
    { id: '1', title: 'Sound of Sky', artist: 'Dilon Bruce', image: '../assets/snack-icon.png' },
    { id: '2', title: 'Girl on Fire', artist: 'Alecia Keys', image: '../assets/snack-icon.png' },
  ];

  const playlist = [
    { id: '1', title: 'Classic Playlist', artist: 'Piano Guys', image: '../assets/snack-icon.png' },
    { id: '2', title: 'Summer Playlist', artist: 'Dilon Bruce', image: '../assets/snack-icon.png' },
    { id: '3', title: 'Pop Music', artist: 'Michael Jackson', image: '../assets/snack-icon.png' },
  ];
  
  const recentlyPlayed = [
    { id: '1', title: 'Billie Jean', artist: 'Michael Jackson' },
    { id: '2', title: 'Earth Song', artist: 'Michael Jackson' },
    { id: '3', title: 'Mirror', artist: 'Justin Timberlake' },
    { id: '4', title: 'Remember the Time', artist: 'Michael Jackson' },
  ];

  const renderHotRecommended = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={require('../assets/snack-icon.png')} style={styles.image} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardArtist}>{item.artist}</Text>
    </TouchableOpacity>
  );

  const renderPlaylist = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={require('../assets/snack-icon.png')} style={styles.image} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardArtist}>{item.artist}</Text>
    </TouchableOpacity>
  );

  const renderRecentlyPlayed = ({ item }) => (
    <View style={styles.recentlyPlayed}>
      <Icon name="play-circle-outline" size={24} color="#F7287B" />
      <View style={styles.recentlyPlayedText}>
        <Text style={styles.recentlyPlayedTitle}>{item.title}</Text>
        <Text style={styles.recentlyPlayedArtist}>{item.artist}</Text>
      </View>
      <Icon name="heart-outline" size={24} color="#FFFFFF" />
      <View style={styles.stars}>
        <Icon name="star" size={20} color="#F7287B" />
        <Icon name="star" size={20} color="#F7287B" />
        <Icon name="star" size={20} color="#F7287B" />
        <Icon name="star" size={20} color="#F7287B" />
        <Icon name="star" size={20} color="#F7287B" />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="menu" size={24} color="#FFFFFF" />
        <View style={styles.search}>
          <Icon name="search" size={20} color="#777777" />
          <TextInput style={styles.searchInput} placeholder="Search album song" placeholderTextColor="#777777" />
        </View>
        <View style={styles.statusBar}>
          <Text style={styles.time}>09:41</Text>
          <MaterialCommunityIcons name="signal" size={16} color="#FFFFFF" />
          <MaterialCommunityIcons name="battery" size={16} color="#FFFFFF" />
        </View>
      </View>

      <Text style={styles.sectionTitle}>Hot Recommended</Text>

      <FlatList
        horizontal
        data={hotRecommended}
        renderItem={renderHotRecommended}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Playlist</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>

      <FlatList
        horizontal
        data={playlist}
        renderItem={renderPlaylist}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Recently Played</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>

      <FlatList
        data={recentlyPlayed}
        renderItem={renderRecentlyPlayed}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1D38',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2F3046',
    borderRadius: 10,
    paddingHorizontal: 10,
    flex: 1,
    marginHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    color: '#FFFFFF',
    marginLeft: 10,
  },
  statusBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    color: '#FFFFFF',
    marginRight: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAll: {
    color: '#F7287B',
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
  card: {
    marginRight: 16,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 5,
  },
  cardArtist: {
    color: '#777777',
  },
  recentlyPlayed: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  recentlyPlayedText: {
    flex: 1,
    marginLeft: 10,
  },
  recentlyPlayedTitle: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  recentlyPlayedArtist: {
    color: '#777777',
  },
  stars: {
    flexDirection: 'row',
  },
});

export default HomeScreen;