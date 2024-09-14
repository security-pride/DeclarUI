import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, Button, ScrollView, TouchableOpacity } from 'react-native';

const SearchScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <Text style={styles.statusBarText}>9:41 AM</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.wifiIcon} />
      </View>

      <View style={styles.searchBarContainer}>
        <TextInput style={styles.searchBar} placeholder="Search that song!" />
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.voiceSearchIcon} />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <Text style={styles.recentLabel}>Recents</Text>
        
        {recentSearches.map((item, index) => (
          <View key={index} style={styles.recentItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.recentItemImage} />
            <View style={styles.recentItemTextContainer}>
              <Text style={styles.recentItemSong}>{item.song}</Text>
              <Text style={styles.recentItemArtist}>{item.artist}</Text>
            </View>
            <Button title="x" onPress={() => removeRecentSearch(index)} />
          </View>
        ))}
      </ScrollView>

      <View style={styles.nowPlaying}>
        <TouchableOpacity onPress={() => navigation.navigate("Player")}>
          <Text style={styles.nowPlayingText}>All Mine</Text>
          <Text style={styles.nowPlayingArtist}>Kanye West</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Listen")}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const recentSearches = [
  {song: 'Better Now', artist: 'Post Malone'},
  {song: 'Kimberly Evans', artist: 'Calvin Harris, Dua Lipa'},
  {song: 'I Like It', artist: 'Cardi B, Bad Bunny, J Balvin'},
  {song: 'Girls Like You (feat Cardi B)', artist: 'Maroon 5'},
  {song: 'Back To You', artist: 'Selena Gomez'},
  {song: 'Lucid Dreams', artist: 'Juice WRLD'},
  {song: 'No Tears Left To Cry', artist: 'Ariana Grande'},
  {song: 'Nice For What', artist: 'Drake'},
  {song: 'Youngblood', artist: '5 Seconds of Summer'}
];

const removeRecentSearch = (index) => {
  // Function to remove a recent search item
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
  },
  statusBarText: {
    fontSize: 16,
  },
  wifiIcon: {
    width: 20,
    height: 20,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    padding: 10,
  },
  voiceSearchIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  recentLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  recentItemImage: {
    width: 40,
    height: 40,
  },
  recentItemTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  recentItemSong: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  recentItemArtist: {
    fontSize: 14,
    color: '#666',
  },
  nowPlaying: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  nowPlayingText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  nowPlayingArtist: {
    fontSize: 14,
    color: '#666',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
  },
  navIcon: {
    width: 30,
    height: 30,
  },
});

export default SearchScreen;