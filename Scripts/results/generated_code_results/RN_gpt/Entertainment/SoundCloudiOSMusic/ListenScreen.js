import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const ListenScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hots now</Text>
      <View style={styles.playlistSection}>
        <ImageBackground
          source={require('../assets/snack-icon.png')}
          style={styles.imageBackground}
        >
          <View style={styles.overlay}>
            <Text style={styles.playlistTitle}>Summer Vibes</Text>
            <Text style={styles.followers}>1,300,231 FOLLOWERS</Text>
          </View>
        </ImageBackground>
        <ImageBackground
          source={require('../assets/snack-icon.png')}
          style={styles.imageBackground}
        >
          <View style={styles.overlay}>
            <Text style={styles.playlistTitle}>Monday Party</Text>
            <Text style={styles.followers}>650,231 FOLLOWERS</Text>
          </View>
        </ImageBackground>
      </View>

      <Text style={styles.sectionHeader}>Recents</Text>
      <View style={styles.recentSection}>
        <TouchableOpacity style={styles.recentItem}>
          <View style={styles.recentItemContent}>
            <Icon name="trending-up" size={24} color="#ff6347" />
            <Text style={styles.recentText}>Ranking</Text>
          </View>
          <Text style={styles.newsBadge}>News</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.recentItem}>
          <View style={styles.recentItemContent}>
            <Icon name="bookmark" size={24} color="#ff6347" />
            <Text style={styles.recentText}>Weekly featured</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.recentItem} onPress={() => navigation.navigate('Player')}>
          <View style={styles.recentItemContent}>
            <Icon name="podium" size={24} color="#ff6347" />
            <Text style={styles.recentText}>Podcast</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.recentItem}>
          <View style={styles.recentItemContent}>
            <Icon name="mic" size={24} color="#ff6347" />
            <Text style={styles.recentText}>Live</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.recentItem}>
          <View style={styles.recentItemContent}>
            <Icon name="musical-notes" size={24} color="#ff6347" />
            <Text style={styles.recentText}>Concerts</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.playingBar}>
        <View style={styles.playingInfo}>
          <Text style={styles.songTitle}>All Mine</Text>
          <Text style={styles.artistName}>Kanye West</Text>
        </View>
        <TouchableOpacity>
          <Icon name="play" size={24} color="#ff6347" />
        </TouchableOpacity>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={28} color="#000" />
        </TouchableOpacity>
        <Icon name="headset" size={28} color="#ff6347" />
        <Icon name="search" size={28} color="#000" />
        <Icon name="person" size={28} color="#000" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff6347',
    marginVertical: 16,
  },
  playlistSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  imageBackground: {
    width: 160,
    height: 160,
    justifyContent: 'flex-end',
  },
  overlay: {
    padding: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  playlistTitle: {
    fontSize: 16,
    color: '#fff',
  },
  followers: {
    fontSize: 12,
    color: '#fff',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 8,
  },
  recentSection: {
    marginBottom: 16,
  },
  recentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
  },
  recentItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recentText: {
    fontSize: 16,
    marginLeft: 8,
  },
  newsBadge: {
    backgroundColor: '#ff6347',
    color: '#fff',
    borderRadius: 8,
    paddingHorizontal: 4,
    fontSize: 12,
  },
  playingBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  playingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  songTitle: {
    fontSize: 16,
    color: '#ff6347',
  },
  artistName: {
    fontSize: 14,
    color: '#000',
    marginLeft: 8,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopColor: '#e0e0e0',
    borderTopWidth: 1,
  },
});

export default ListenScreen;