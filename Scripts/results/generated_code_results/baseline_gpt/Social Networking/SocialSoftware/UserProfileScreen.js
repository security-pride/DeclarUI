import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const UserProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={24} color="white" />
        <View style={styles.headerIcons}>
          <MaterialIcon name="bell-outline" size={24} color="white" style={styles.icon} />
          <Icon name="ellipsis-horizontal" size={24} color="white" />
        </View>
      </View>

      <View style={styles.profileSection}>
        <Image source={require('../assets/snack-icon.png')} style={styles.profilePic} />
        <View style={styles.profileInfo}>
          <Text style={styles.userName}>Alisson Rochinski</Text>
          <Text style={styles.userHandle}>arochinski <Text style={styles.platform}>threads.net</Text></Text>
          <Text style={styles.bio}>UI Designer | Let's redesign the world{'\n'}alisson.rochinski@gmail.com</Text>
        </View>
      </View>

      <View style={styles.followerSection}>
        <Icon name="people" size={24} color="white" />
        <Text style={styles.followersCount}>2957 seguidores</Text>
      </View>

      <TouchableOpacity style={styles.followButton}>
        <Text style={styles.followButtonText}>Follow</Text>
      </TouchableOpacity>

      <View style={styles.tabSection}>
        <Text style={styles.activeTab}>Chirps</Text>
        <Text style={styles.inactiveTab}>Answers</Text>
      </View>

      <View style={styles.post}>
        <Image source={require('../assets/snack-icon.png')} style={styles.postPic} />
        <View style={styles.postContent}>
          <Text style={styles.postHeader}>arochinski <Text style={styles.postTime}>2 min</Text></Text>
          <Text style={styles.postText}>
            Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi 
            excepteur sit ad ipsum consectetur proident deserunt sint
          </Text>
          <View style={styles.postFooter}>
            <MaterialIcon name="heart-outline" size={20} color="white" style={styles.postIcon} />
            <MaterialIcon name="chat-outline" size={20} color="white" style={styles.postIcon} />
            <MaterialIcon name="refresh" size={20} color="white" style={styles.postIcon} />
            <MaterialIcon name="share-outline" size={20} color="white" style={styles.postIcon} />
            <Text style={styles.postStats}>7 answers · 59 likes</Text>
          </View>
        </View>
      </View>
    </ScrollView>
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
    padding: 16,
    alignItems: 'center',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 8,
  },
  profileSection: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileInfo: {
    marginLeft: 16,
  },
  userName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userHandle: {
    color: '#bbb',
  },
  platform: {
    color: '#666',
    backgroundColor: '#222',
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  bio: {
    color: '#ccc',
    marginTop: 4,
  },
  followerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  followersCount: {
    color: '#fff',
    marginLeft: 8,
  },
  followButton: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
  followButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  tabSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 0.5,
    borderBottomColor: '#333',
  },
  activeTab: {
    color: '#fff',
    paddingBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
  },
  inactiveTab: {
    color: '#666',
    paddingBottom: 12,
  },
  post: {
    flexDirection: 'row',
    padding: 16,
  },
  postPic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  postContent: {
    marginLeft: 10,
    flex: 1,
  },
  postHeader: {
    color: '#fff',
    fontWeight: 'bold',
  },
  postTime: {
    color: '#666',
    fontSize: 12,
  },
  postText: {
    color: '#ccc',
    marginTop: 4,
    marginBottom: 8,
  },
  postFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postIcon: {
    marginRight: 10,
  },
  postStats: {
    color: '#666',
    marginLeft: 'auto',
  },
});

export default UserProfileScreen;