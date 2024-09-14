import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hots now</Text>
      
      <ScrollView horizontal style={styles.section}>
        <TouchableOpacity style={styles.playlist}>
          <Image source={require('../assets/snack-icon.png')} style={styles.image} />
          <Text style={styles.playlistText}>Summer Vibes</Text>
          <Text style={styles.followers}>1,300,231 FOLLOWERS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.playlist}>
          <Image source={require('../assets/snack-icon.png')} style={styles.image} />
          <Text style={styles.playlistText}>Rap Zone</Text>
          <Text style={styles.followers}>650,231 FOLLOWERS</Text>
        </TouchableOpacity>
      </ScrollView>

      <Text style={styles.sectionHeader}>Mood</Text>
      <ScrollView horizontal style={styles.section}>
        <TouchableOpacity style={styles.playlist}>
          <Image source={require('../assets/snack-icon.png')} style={styles.image} />
          <Text style={styles.playlistText}>Shower Time</Text>
          <Text style={styles.followers}>1,300,231 FOLLOWERS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.playlist}>
          <Image source={require('../assets/snack-icon.png')} style={styles.image} />
          <Text style={styles.playlistText}>Old School</Text>
          <Text style={styles.followers}>300,231 FOLLOWERS</Text>
        </TouchableOpacity>
      </ScrollView>

      <Text style={styles.sectionHeader}>Popular artists</Text>
      <ScrollView horizontal style={styles.section}>
        {['Ed Sheeran', 'Rita Ora', 'Eminem', 'Dua Lipa'].map((artist, index) => (
          <View key={index} style={styles.artist}>
            <Image source={require('../assets/snack-icon.png')} style={styles.artistImage} />
            <Text style={styles.artistName}>{artist}</Text>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.nowPlaying}
        onPress={() => navigation.navigate('Player')}
      >
        <Text style={styles.nowPlayingText}>All Mine</Text>
        <Text style={styles.nowPlayingArtist}>Kanye West</Text>
      </TouchableOpacity>

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navIcon}>⚡</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Listen')}>
          <Text style={styles.navIcon}>🎧</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Text style={styles.navIcon}>🔍</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.navIcon}>👤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'orange',
  },
  section: {
    marginVertical: 16,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  playlist: {
    alignItems: 'center',
    marginRight: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  playlistText: {
    fontWeight: 'bold',
  },
  followers: {
    fontSize: 12,
    color: 'grey',
  },
  artist: {
    alignItems: 'center',
    marginRight: 16,
  },
  artistImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  artistName: {
    fontSize: 12,
    marginTop: 4,
  },
  nowPlaying: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 8,
    paddingBottom: 16,
  },
  nowPlayingText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  nowPlayingArtist: {
    fontSize: 14,
    color: 'orange',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  navIcon: {
    fontSize: 24,
  },
});

export default HomeScreen;