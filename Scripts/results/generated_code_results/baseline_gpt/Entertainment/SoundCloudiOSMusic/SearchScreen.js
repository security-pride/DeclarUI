import React from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchScreen = () => {
  const recentTracks = [
    { id: '1', title: 'Better Now', artist: 'Post Malone', image: require('../assets/snack-icon.png') },
    { id: '2', title: 'Kimberly Evans', artist: 'Calvin Harris, Dua Lipa', image: require('../assets/snack-icon.png') },
    { id: '3', title: 'I Like It', artist: 'Cardi B, Bad Bunny, J Balvin', image: require('../assets/snack-icon.png') },
    { id: '4', title: 'Girls Like You (feat Cardi B)', artist: 'Maroon 5, Cardi B', image: require('../assets/snack-icon.png') },
    { id: '5', title: 'Back To You', artist: 'Selena Gomez', image: require('../assets/snack-icon.png') },
    { id: '6', title: 'Lucid Dreams', artist: 'Juice WRLD', image: require('../assets/snack-icon.png') },
    { id: '7', title: 'No Tears Left To Cry', artist: 'Ariana Grande', image: require('../assets/snack-icon.png') },
    { id: '8', title: 'Nice For What', artist: 'Drake', image: require('../assets/snack-icon.png') },
    { id: '9', title: 'Youngblood', artist: '5 Seconds of Summer', image: require('../assets/snack-icon.png') }
  ];

  const renderItem = ({ item }) => (
    <View style={styles.trackItem}>
      <Image source={item.image} style={styles.trackImage} />
      <View style={styles.trackInfo}>
        <Text style={styles.trackTitle}>{item.title}</Text>
        <Text style={styles.trackArtist}>{item.artist}</Text>
      </View>
      <TouchableOpacity>
        <Icon name="close" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput 
          style={styles.searchInput} 
          placeholder="Search that song!"
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.searchIconContainer}>
          <Icon name="search" size={30} color="#4285F4" />
        </TouchableOpacity>
      </View>
      <Text style={styles.recentText}>Recents</Text>
      <FlatList
        data={recentTracks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View style={styles.bottomBar}>
        <Text style={styles.currentTrackTitle}>All Mine</Text>
        <Text style={styles.currentTrackArtist}>Kanye West</Text>
        <TouchableOpacity style={styles.playButton}>
          <Icon name="play-arrow" size={30} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: '#f1f1f1',
    borderRadius: 10
  },
  searchInput: {
    flex: 1,
    color: '#000'
  },
  searchIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  recentText: {
    marginTop: 18,
    marginLeft: 16,
    fontSize: 18,
    fontWeight: 'bold'
  },
  trackItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  trackImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10
  },
  trackInfo: {
    flex: 1
  },
  trackTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  trackArtist: {
    fontSize: 14,
    color: '#555'
  },
  bottomBar: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingHorizontal: 12,
    backgroundColor: '#fff'
  },
  currentTrackTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold'
  },
  currentTrackArtist: {
    fontSize: 14,
    color: '#fc6'
  },
  playButton: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default SearchScreen;