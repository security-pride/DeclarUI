import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Button, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <Icon name="globe-outline" size={24} color="#fff" />
        <View style={styles.headerRight}>
          <Icon name="logo-instagram" size={24} color="#fff" />
          <Icon name="menu" size={24} color="#fff" />
        </View>
      </View>

      {/* User Info */}
      <View style={styles.userInfo}>
        <Text style={styles.name}>Alisson Rochinski</Text>
        <Text style={styles.username}>@arochinski</Text>
        <Text style={styles.bio}>UI Designer | Let's redesign the world</Text>
        <Text style={styles.bio}>alisson.rochinski@gmail.com</Text>
        <View style={styles.followerInfo}>
          <View style={styles.followerAvatars}>
            <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
            <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
            <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
          </View>
          <Text style={styles.followerCount}>2957 seguidores</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actions}>
        <Button title="Editar perfil" onPress={() => {}} />
        <Button title="Compartilhar Perfil" onPress={() => {}} />
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <Text style={styles.tabLabel}>Chirps</Text>
        <Text style={styles.tabInactive}>Answers</Text>
      </View>

      {/* Post */}
      <View style={styles.post}>
        <View style={styles.postUserInfo}>
          <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
          <Text style={styles.username}>arochinski</Text>
          <Text style={styles.timeAgo}>2 min</Text>
        </View>
        <Text style={styles.postContent}>
          Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint
        </Text>
        <View style={styles.postActions}>
          <Icon name="heart-outline" size={24} color="#aaa" />
          <Icon name="chatbubble-outline" size={24} color="#aaa" />
          <Icon name="share-social-outline" size={24} color="#aaa" />
        </View>
        <Text style={styles.postStats}>7 answers · 59 likes</Text>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
          <Icon name="home-outline" size={24} color="#aaa" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Icon name="search-outline" size={24} color="#aaa" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
          <Icon name="add-circle-outline" size={24} color="#aaa" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="heart-outline" size={24} color="#aaa" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="person-circle-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  headerRight: {
    flexDirection: 'row',
    width: 60,
    justifyContent: 'space-between',
  },
  userInfo: {
    alignItems: 'center',
    padding: 15,
  },
  name: {
    fontSize: 18,
    color: '#fff',
  },
  username: {
    fontSize: 16,
    color: '#aaa',
  },
  bio: {
    fontSize: 14,
    color: '#ccc',
  },
  followerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  followerAvatars: {
    flexDirection: 'row',
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 5,
  },
  followerCount: {
    fontSize: 14,
    color: '#aaa',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  tabLabel: {
    fontSize: 16,
    color: '#fff',
  },
  tabInactive: {
    fontSize: 16,
    color: '#aaa',
  },
  post: {
    padding: 15,
  },
  postUserInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  timeAgo: {
    fontSize: 12,
    color: '#aaa',
    marginLeft: 10,
  },
  postContent: {
    color: '#fff',
    marginVertical: 10,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  postStats: {
    fontSize: 12,
    color: '#aaa',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#111',
  },
});

export default ProfileScreen;