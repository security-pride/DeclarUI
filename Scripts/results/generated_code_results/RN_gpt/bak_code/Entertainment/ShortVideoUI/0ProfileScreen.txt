import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.addButton}>
          <Icon name="user-plus" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={styles.username}>Jacob West</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Icon name="ellipsis-h" size={20} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.userInfo}>
        <Image style={styles.avatar} source={require('../assets/snack-icon.png')} />
        <Text style={styles.handle}>@jacob_w</Text>
        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>14</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>38</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>91</Text>
            <Text style={styles.statLabel}>Likes</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileText}>Edit profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookmarkButton}>
          <Icon name="bookmark" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={styles.bioPrompt}>Tap to add bio</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.tabs}>
          <ImageBackground style={styles.tab} source={require('../assets/snack-icon.png')}>
            <Icon name="th" size={20} color="#000" />
          </ImageBackground>
          <ImageBackground style={styles.tab} source={require('../assets/snack-icon.png')}>
            <Icon name="heart-o" size={20} color="#000" />
          </ImageBackground>
        </View>
        <View style={styles.posts}>
          <ImageBackground style={styles.post} source={require('../assets/snack-icon.png')} />
          <ImageBackground style={styles.post} source={require('../assets/snack-icon.png')} />
          <ImageBackground style={styles.post} source={require('../assets/snack-icon.png')} />
          <ImageBackground style={styles.post} source={require('../assets/snack-icon.png')} />
          <TouchableOpacity style={styles.newVideoButton}>
            <Text style={styles.newVideoText}>Tap to create a new video</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={24} color="#000" />
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Discover')}>
          <Icon name="search" size={24} color="#000" />
          <Text style={styles.navButtonText}>Discover</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Create')}>
          <Icon name="plus-square" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Inbox')}>
          <Icon name="envelope" size={24} color="#000" />
          <Text style={styles.navButtonText}>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Profile')}>
          <Icon name="user" size={24} color="#000" />
          <Text style={styles.navButtonText}>Me</Text>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  addButton: {},
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  settingsButton: {},
  userInfo: {
    alignItems: 'center',
    marginVertical: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  handle: {
    fontSize: 16,
    color: '#555',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#555',
  },
  editProfileButton: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  editProfileText: {
    fontSize: 16,
  },
  bookmarkButton: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  bioPrompt: {
    fontSize: 14,
    color: '#aaa',
  },
  content: {
    paddingHorizontal: 10,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 10,
  },
  tab: {
    padding: 10,
  },
  posts: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  post: {
    width: '30%',
    height: 100,
    backgroundColor: '#eee',
    marginBottom: 10,
  },
  newVideoButton: {
    width: '30%',
    height: 100,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  newVideoText: {
    fontSize: 14,
    textAlign: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navButton: {
    alignItems: 'center',
  },
  navButtonText: {
    fontSize: 12,
    marginTop: 3,
  },
});

export default ProfileScreen;