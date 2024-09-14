import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="globe" size={24} color="#fff" />
        <Icon name="ellipsis-vertical" size={24} color="#fff" />
      </View>
      <View style={styles.profileContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Alisson Rochinski</Text>
          <Text style={styles.userHandle}>arochinski</Text>
          <View style={styles.tag}>
            <Text style={styles.tagText}>threads.net</Text>
          </View>
          <Text style={styles.userTitle}>UI Designer | Let's redesign the world</Text>
          <Text style={styles.email}>alisson.rochinski@gmail.com</Text>
          <View style={styles.followersContainer}>
            <Image source={require('../assets/snack-icon.png')} style={styles.followerImage} />
            <Image source={require('../assets/snack-icon.png')} style={styles.followerImage} />
            <Image source={require('../assets/snack-icon.png')} style={styles.followerImage} />
            <Text style={styles.followersCount}>2957 seguidores</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Editar perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Compartilhar Perfil</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tabs}>
        <TouchableOpacity>
          <Text style={styles.activeTab}>Chirps</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.inactiveTab}>Answers</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.post}>
        <Image source={require('../assets/snack-icon.png')} style={styles.postProfileImage} />
        <View style={styles.postContent}>
          <Text style={styles.postUserName}>arochinski</Text>
          <Text style={styles.postTime}>2 min</Text>
          <Text style={styles.postText}>
            Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi exceptuer sit ad ipsum consectetur proident deserunt sint
          </Text>
          <View style={styles.postInteractions}>
            <Icon name="heart-outline" size={20} color="#fff" />
            <Icon name="chatbubble-outline" size={20} color="#fff" />
            <Icon name="repeat-outline" size={20} color="#fff" />
            <Icon name="share-social-outline" size={20} color="#fff" />
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
  },
  profileContainer: {
    flexDirection: 'row',
    padding: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  userInfo: {
    justifyContent: 'center',
  },
  userName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userHandle: {
    color: '#aaa',
    fontSize: 14,
  },
  tag: {
    backgroundColor: '#333',
    borderRadius: 12,
    paddingHorizontal: 8,
    marginVertical: 4,
  },
  tagText: {
    color: '#fff',
    fontSize: 12,
  },
  userTitle: {
    color: '#aaa',
    fontSize: 14,
  },
  email: {
    color: '#444',
    fontSize: 14,
  },
  followersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  followerImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: -8,
  },
  followersCount: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: '#444',
  },
  activeTab: {
    color: '#fff',
    paddingVertical: 16,
    fontSize: 16,
    fontWeight: 'bold',
  },
  inactiveTab: {
    color: '#555',
    paddingVertical: 16,
    fontSize: 16,
  },
  post: {
    flexDirection: 'row',
    padding: 16,
  },
  postProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  postContent: {
    flex: 1,
  },
  postUserName: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  postTime: {
    color: '#555',
    fontSize: 12,
  },
  postText: {
    color: '#fff',
    fontSize: 14,
    marginVertical: 8,
  },
  postInteractions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  postStats: {
    color: '#555',
    fontSize: 12,
    marginLeft: 8,
  },
});

export default ProfileScreen;