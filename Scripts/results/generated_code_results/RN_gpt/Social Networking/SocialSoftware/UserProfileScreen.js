import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const UserProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Icon name="logo-instagram" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="menu-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* User Information */}
      <View style={styles.userInfo}>
        <Text style={styles.name}>Alisson Rochinski</Text>
        <View style={styles.iconRow}>
          <Icon name="at-outline" size={14} color="white" />
          <Text style={styles.handle}>arochinski</Text>
          <Text style={styles.website}>threads.net</Text>
        </View>
        <Text style={styles.bio}>UI Designer | Let's redesign the world</Text>
        <Text style={styles.email}>alisson.rochinski@gmail.com</Text>
        <View style={styles.followInfo}>
          <Image style={styles.profileImage} source={require('../assets/snack-icon.png')} />
          <Text style={styles.followers}>2957 seguidores</Text>
        </View>
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followButtonText}>Follow</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <Text style={styles.tabText}>Chirps</Text>
        <Text style={styles.tabText}>Answers</Text>
      </View>

      {/* Post */}
      <View style={styles.post}>
        <View style={styles.postHeader}>
          <Image style={styles.postProfileImage} source={require('../assets/snack-icon.png')} />
          <Text style={styles.postHandle}>arochinski</Text>
          <Text style={styles.postTime}>2 min</Text>
        </View>
        <Text style={styles.postContent}>
          Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint
        </Text>
        <View style={styles.postActions}>
          <TouchableOpacity>
            <Icon name="heart-outline" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="chatbubble-outline" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="share-outline" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.postStats}>7 answers · 59 likes</Text>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Icon name="search-outline" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
          <Icon name="heart-outline" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="add-circle-outline" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="home-outline" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
          <Icon name="person-outline" size={30} color="white" />
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
    padding: 10,
  },
  backText: {
    color: 'white',
    fontSize: 16,
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 15,
  },
  userInfo: {
    padding: 20,
    alignItems: 'center',
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  handle: {
    color: 'white',
    fontSize: 14,
    marginLeft: 5,
  },
  website: {
    color: 'gray',
    fontSize: 14,
    marginLeft: 10,
  },
  bio: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 5,
  },
  email: {
    color: 'white',
    marginBottom: 10,
  },
  followInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 30,
    height: 30,
  },
  followers: {
    color: 'white',
    marginLeft: 10,
  },
  followButton: {
    backgroundColor: '#1D72F1',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  followButtonText: {
    color: 'white',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  tabText: {
    color: 'white',
    fontSize: 16,
    marginHorizontal: 20,
  },
  post: {
    padding: 20,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  postProfileImage: {
    width: 40,
    height: 40,
  },
  postHandle: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  postTime: {
    color: 'gray',
    fontSize: 14,
    marginLeft: 'auto',
  },
  postContent: {
    color: 'white',
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  postStats: {
    color: 'gray',
    textAlign: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderTopColor: 'gray',
    borderTopWidth: 1,
  },
});

export default UserProfileScreen;