import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SongsScreen = ({ navigation }) => {
  const songs = [
    { title: 'Billie Jean', artist: 'Michael Jackson' },
    { title: 'Be the girl', artist: 'Bebe Rexa' },
    { title: 'Countryman', artist: 'Daughtry' },
    { title: 'Do you feel loneliness', artist: 'Marc Anthony' },
    { title: 'Earth song', artist: 'Michael Jackson' },
    { title: 'Smooth criminal', artist: 'Michael Jackson' },
    { title: 'The way you make me feel', artist: 'Michael Jackson' },
    { title: 'Somebody that I used to know', artist: 'Gotye' },
    { title: 'Wild Thoughts', artist: '' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.songItem} onPress={() => navigation.navigate('PlaySong')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.albumCover} />
      <View style={styles.songInfo}>
        <Text style={styles.songTitle}>{item.title}</Text>
        <Text style={styles.artistName}>{item.artist}</Text>
      </View>
      <Icon name="play" size={16} color="#fff" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.time}>09:41</Text>
        <Icon name="signal" size={16} color="#fff" style={styles.icon} />
        <Icon name="wifi" size={16} color="#fff" style={styles.icon} />
        <Icon name="battery-full" size={16} color="#fff" style={styles.icon} />
      </View>

      <View style={styles.navbar}>
        <Button title="Menu" onPress={() => {}} />
        <Text style={styles.navTitle}>Songs</Text>
        <Button title="Search" onPress={() => {}} />
      </View>

      <View style={styles.tabs}>
        {['All Songs', 'Playlists', 'Albums', 'Artists', 'Genre'].map(tab => (
          <TouchableOpacity key={tab} onPress={() => tab === 'Albums' && navigation.navigate('Albums')}>
            <Text style={styles.tab}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={songs}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />

      <View style={styles.nowPlayingBar}>
        <Image source={require('../assets/snack-icon.png')} style={styles.nowPlayingCover} />
        <View style={styles.nowPlayingInfo}>
          <Text style={styles.nowPlayingTitle}>Smooth criminal</Text>
          <Text style={styles.nowPlayingArtist}>Michael Jackson</Text>
        </View>
        <Icon name="backward" size={24} color="#fff" />
        <Icon name="play" size={24} color="#fff" />
        <Icon name="forward" size={24} color="#fff" />
      </View>

      <View style={styles.bottomNav}>
        {['Home', 'Songs', 'Settings'].map(item => (
          <TouchableOpacity key={item} onPress={() => navigation.navigate(item)}>
            <Text style={styles.bottomNavItem}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 5,
    backgroundColor: '#1a1a1a',
  },
  time: {
    color: '#fff',
  },
  icon: {
    marginHorizontal: 5,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#232323',
    padding: 10,
  },
  navTitle: {
    color: '#fff',
    fontSize: 18,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  tab: {
    color: '#fuchsia',
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
  albumCover: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  songInfo: {
    flex: 1,
  },
  songTitle: {
    color: '#fff',
    fontSize: 16,
  },
  artistName: {
    color: '#888',
  },
  nowPlayingBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#232323',
    borderTopColor: '#333',
    borderTopWidth: 1,
  },
  nowPlayingCover: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  nowPlayingInfo: {
    flex: 1,
  },
  nowPlayingTitle: {
    color: '#fff',
    fontSize: 14,
  },
  nowPlayingArtist: {
    color: '#888',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderTopColor: '#333',
    borderTopWidth: 1,
  },
  bottomNavItem: {
    color: '#999',
  },
});

export default SongsScreen;