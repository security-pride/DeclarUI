import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {
  // Dummy data for playlists
  const playlists = [
    { id: '1', title: 'Summer Vibes', followers: '1,300,231 FOLLOWERS', image: require('../assets/snack-icon.png') },
    { id: '2', title: 'Rap Zone', followers: '650,231 FOLLOWERS', image: require('../assets/snack-icon.png') },
    { id: '3', title: 'Music Mix', followers: '50,231 FOLLOWERS', image: require('../assets/snack-icon.png') },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.adBanner}>
        <Text style={styles.adText}>SoundCloud Premium</Text>
        <Text style={styles.adSubText}>Remove boring advs, create infinite playlists and so much</Text>
        <TouchableOpacity>
          <Icon name="ios-close" size={25} color="#fff" style={styles.adCloseIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.profileSection}>
        <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
        <View style={styles.profileDetails}>
          <Text style={styles.profileName}>Kimberly Evans</Text>
          <Text style={styles.editProfileText}>Edit profile</Text>
        </View>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>My SoundCloud</Text>
          <View style={styles.freeBadge}>
            <Text style={styles.freeBadgeText}>Free User</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>Music quality</Text>
          <Icon name="ios-chevron-forward" size={20} color="#ccc" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>Help</Text>
          <Icon name="ios-chevron-forward" size={20} color="#ccc" />
        </TouchableOpacity>
      </View>

      <View style={styles.playlistSection}>
        <Text style={styles.sectionTitle}>My playlists</Text>
        <FlatList 
          data={playlists}
          horizontal
          renderItem={({ item }) => (
            <View style={styles.playlistItem}>
              <Image source={item.image} style={styles.playlistImage} />
              <Text style={styles.playlistTitle}>{item.title}</Text>
              <Text style={styles.playlistFollowers}>{item.followers}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>

      <View style={styles.footerNavigation}>
        <TouchableOpacity>
          <Icon name="ios-home" size={30} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="ios-musical-notes" size={30} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="ios-search" size={30} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="ios-person" size={30} color="#666" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  adBanner: {
    backgroundColor: '#ff6f00',
    padding: 20,
    position: 'relative'
  },
  adText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  adSubText: {
    color: '#fff',
    fontSize: 14,
    marginVertical: 5,
  },
  adCloseIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  profileDetails: {
    flexDirection: 'column',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  editProfileText: {
    fontSize: 14,
    color: '#aaa',
  },
  section: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  rowText: {
    fontSize: 16,
  },
  freeBadge: {
    backgroundColor: '#ff6f00',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  freeBadgeText: {
    color: '#fff',
    fontSize: 12,
  },
  playlistSection: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  playlistItem: {
    marginRight: 20,
  },
  playlistImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  playlistTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  playlistFollowers: {
    fontSize: 12,
    color: '#999',
    marginTop: 3,
  },
  footerNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff'
  },
});

export default ProfileScreen;