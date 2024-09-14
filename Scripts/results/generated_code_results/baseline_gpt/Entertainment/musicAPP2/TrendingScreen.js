import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TrendingScreen = () => {

  const songs = [
    { id: '1', title: "I'm a Freak (feat. Pitbull)", played: '12,598 Played', image: require('../assets/snack-icon.png') },
    { id: '2', title: "Can't Remember To Forget", played: '12,598 Played', image: require('../assets/snack-icon.png') },
    { id: '3', title: "Beyonce", played: '12,598 Played', image: require('../assets/snack-icon.png') },
    { id: '4', title: "Roller Coaster (Single)", played: '12,598 Played', image: require('../assets/snack-icon.png') },
    { id: '5', title: "Unconditionally", played: '12,598 Played', image: require('../assets/snack-icon.png') },
  ];

  const SongListItem = ({ song }) => (
    <View style={styles.songItem}>
      <Image source={song.image} style={styles.songImage} />
      <View style={styles.songInfo}>
        <Text style={styles.songTitle}>{song.title}</Text>
        <Text style={styles.songPlayed}>{song.played}</Text>
      </View>
      <Icon name="more-vert" size={24} color="#333" />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Trending</Text>
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>Partyholics</Text>
          <Icon name="arrow-drop-down" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.dropdownActive}>
          <Text style={styles.dropdownText}>2020</Text>
          <Icon name="arrow-drop-down" size={24} color="#333" />
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>Trending Songs</Text>
      <FlatList
        data={songs}
        renderItem={({ item }) => <SongListItem song={item} />}
        keyExtractor={item => item.id}
      />
      <Text style={styles.sectionTitle}>Trending Albums</Text>
      {/* Trending Albums List (placeholder) */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  dropdown: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#CCC',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    justifyContent: 'space-between',
  },
  dropdownActive: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'red',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    justifyContent: 'space-between',
  },
  dropdownText: {
    color: '#000',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 10,
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  songImage: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 15,
  },
  songInfo: {
    flex: 1,
  },
  songTitle: {
    fontSize: 18,
    color: '#000',
  },
  songPlayed: {
    fontSize: 14,
    color: '#888',
  },
});

export default TrendingScreen;