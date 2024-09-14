import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchScreen = () => {
  const songs = [
    { id: '1', title: 'Gully Gully Mein Gully Boy', subtitle: 'Song | Gully Gully Mein Gully boy', image: '../assets/snack-icon.png' },
    { id: '2', title: 'Mere Gully Mein', subtitle: 'Song | Mere Gully Mein', image: '../assets/snack-icon.png' },
    { id: '3', title: 'Ashli Hip Hip', subtitle: 'Album, 2019 | Gully Boy', image: '../assets/snack-icon.png' },
    { id: '4', title: 'Apna Time Aayega', subtitle: 'Album, 2019 | Gully Boy', image: '../assets/snack-icon.png' },
    { id: '5', title: 'Doori', subtitle: 'Album, 2019 | Gully Boy', image: '../assets/snack-icon.png' },
  ];

  const albums = [
    { id: '1', title: 'Gully Boy 2', subtitle: 'Various Artists', image: '../assets/snack-icon.png' },
    { id: '2', title: 'Gully Boy Unlimited', subtitle: 'Various Artists', image: '../assets/snack-icon.png' },
    { id: '3', title: 'Hip Gully', subtitle: 'Various Artists', image: '../assets/snack-icon.png' },
  ];

  const artists = [
    { id: '1', name: 'Justin Bieber', image: '../assets/snack-icon.png' },
    { id: '2', name: 'Michael Jackson', image: '../assets/snack-icon.png' },
    { id: '3', name: 'Sam Smith', image: '../assets/snack-icon.png' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Search</Text>
      <View style={styles.searchBox}>
        <Icon name="search" size={20} color="#888" />
        <TextInput style={styles.input} placeholder="Gully Boy" placeholderTextColor="#888" />
      </View>
      
      <Text style={styles.sectionTitle}>Most Popular</Text>
      <View style={styles.popularItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.popularImage} />
        <View>
          <Text style={styles.songTitle}>Gully Boy</Text>
          <Text style={styles.songSubtitle}>Song | Gully Boy</Text>
        </View>
        <Icon name="ellipsis-horizontal" size={24} color="#888" style={styles.moreIcon} />
      </View>

      <Text style={styles.sectionTitle}>Songs</Text>
      <FlatList
        data={songs}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.songItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.songImage} />
            <View>
              <Text style={styles.songTitle}>{item.title}</Text>
              <Text style={styles.songSubtitle}>{item.subtitle}</Text>
            </View>
            <Icon name="ellipsis-horizontal" size={24} color="#888" style={styles.moreIcon} />
          </View>
        )}
      />

      <Text style={styles.sectionTitle}>Albums</Text>
      <FlatList
        data={albums}
        keyExtractor={item => item.id}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.albumItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.albumImage} />
            <Text style={styles.albumTitle}>{item.title}</Text>
            <Text style={styles.albumSubtitle}>{item.subtitle}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.sectionTitle}>Artists</Text>
      <FlatList
        data={artists}
        keyExtractor={item => item.id}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.artistItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.artistImage} />
            <Text style={styles.artistName}>{item.name}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  popularItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  popularImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  songTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  songSubtitle: {
    fontSize: 14,
    color: '#888',
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  albumItem: {
    marginRight: 15,
    alignItems: 'center',
  },
  albumImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
  albumTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  albumSubtitle: {
    fontSize: 12,
    color: '#888',
  },
  artistItem: {
    marginRight: 15,
    alignItems: 'center',
  },
  artistImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 5,
  },
  artistName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  moreIcon: {
    marginLeft: 'auto',
  }
});

export default SearchScreen;