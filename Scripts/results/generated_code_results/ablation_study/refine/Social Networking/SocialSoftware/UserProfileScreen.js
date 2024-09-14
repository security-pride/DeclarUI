import React, { useState } from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



const UserProfileScreen = ({ navigation }) => {

  const [isFollowing, setIsFollowing] = useState(false);



  const toggleFollow = () => {

    setIsFollowing(!isFollowing);

  };



  return (

    <SafeAreaView style={styles.container}>

      <ScrollView>

        <View style={styles.header}>

          <TouchableOpacity onPress={() => navigation.goBack()}>

            <Icon name="arrow-back" size={24} color="#fff" />

          </TouchableOpacity>

          <Text style={styles.headerText}>Voltar</Text>

          <View style={styles.headerRight}>

            <Icon name="logo-instagram" size={24} color="#fff" />

            <Icon name="menu" size={24} color="#fff" style={styles.menuIcon} />

          </View>

        </View>



        <View style={styles.profileInfo}>

          <View style={styles.profileHeader}>

            <View>

              <Text style={styles.name}>Alisson Rochinski</Text>

              <Text style={styles.username}>arochinski</Text>

              <Text style={styles.bio}>UI Designer | Let's redesign the world</Text>

              <Text style={styles.email}>alisson.rochinski@gmail.com</Text>

              <Text style={styles.website}>threads.net</Text>

            </View>

            <View style={styles.profileImageContainer}>

              <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />

              <View style={styles.badgeContainer}>

                <Icon name="checkmark-circle" size={20} color="#fff" style={styles.badge} />

              </View>

            </View>

          </View>



          <View style={styles.followersContainer}>

            <Image source={require('../assets/snack-icon.png')} style={styles.followerImage} />

            <Image source={require('../assets/snack-icon.png')} style={[styles.followerImage, styles.overlappingImage]} />

            <Image source={require('../assets/snack-icon.png')} style={[styles.followerImage, styles.overlappingImage]} />

            <Text style={styles.followersText}>2957 seguidores</Text>

          </View>



          <TouchableOpacity style={styles.followButton} onPress={toggleFollow}>

            <Text style={styles.followButtonText}>{isFollowing ? 'Following' : 'Follow'}</Text>

          </TouchableOpacity>

        </View>



        <View style={styles.tabContainer}>

          <TouchableOpacity style={styles.activeTab}>

            <Text style={styles.activeTabText}>Chirps</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.inactiveTab}>

            <Text style={styles.inactiveTabText}>Answers</Text>

          </TouchableOpacity>

        </View>



        <View style={styles.post}>

          <View style={styles.postHeader}>

            <Image source={require('../assets/snack-icon.png')} style={styles.postProfileImage} />

            <View>

              <Text style={styles.postUsername}>arochinski</Text>

              <Text style={styles.postTime}>2 min</Text>

            </View>

            <Icon name="ellipsis-horizontal" size={20} color="#999" style={styles.postMenu} />

          </View>

          <Text style={styles.postContent}>

            Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum

            consectetur proident deserunt sint

          </Text>

          <View style={styles.postActions}>

            <TouchableOpacity>

              <Icon name="heart-outline" size={24} color="#999" />

            </TouchableOpacity>

            <TouchableOpacity>

              <Icon name="chatbubble-outline" size={24} color="#999" />

            </TouchableOpacity>

            <TouchableOpacity>

              <Icon name="repeat-outline" size={24} color="#999" />

            </TouchableOpacity>

            <TouchableOpacity>

              <Icon name="paper-plane-outline" size={24} color="#999" />

            </TouchableOpacity>

          </View>

          <Text style={styles.postStats}>7 answers · 59 likes</Text>

        </View>

      </ScrollView>



      <View style={styles.navbar}>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>

          <Icon name="home-outline" size={24} color="#999" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Search')}>

          <Icon name="search-outline" size={24} color="#999" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('NewPost')}>

          <Icon name="add-circle-outline" size={24} color="#999" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>

          <Icon name="heart-outline" size={24} color="#999" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>

          <Icon name="person-outline" size={24} color="#fff" />

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#000',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    padding: 15,

  },

  headerText: {

    color: '#fff',

    fontSize: 18,

    fontWeight: 'bold',

  },

  headerRight: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  menuIcon: {

    marginLeft: 15,

  },

  profileInfo: {

    padding: 15,

  },

  profileHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'flex-start',

  },

  name: {

    color: '#fff',

    fontSize: 24,

    fontWeight: 'bold',

  },

  username: {

    color: '#999',

    fontSize: 16,

  },

  bio: {

    color: '#fff',

    fontSize: 16,

    marginTop: 10,

  },

  email: {

    color: '#999',

    fontSize: 14,

    marginTop: 5,

  },

  website: {

    color: '#999',

    fontSize: 14,

  },

  profileImageContainer: {

    position: 'relative',

  },

  profileImage: {

    width: 80,

    height: 80,

    borderRadius: 40,

  },

  badgeContainer: {

    position: 'absolute',

    bottom: 0,

    right: 0,

    backgroundColor: '#1DA1F2',

    borderRadius: 10,

    padding: 2,

  },

  badge: {

    backgroundColor: '#1DA1F2',

    borderRadius: 10,

  },

  followersContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 15,

  },

  followerImage: {

    width: 30,

    height: 30,

    borderRadius: 15,

    borderWidth: 2,

    borderColor: '#000',

  },

  overlappingImage: {

    marginLeft: -10,

  },

  followersText: {

    color: '#999',

    fontSize: 14,

    marginLeft: 10,

  },

  followButton: {

    backgroundColor: '#fff',

    borderRadius: 20,

    paddingVertical: 10,

    paddingHorizontal: 20,

    alignItems: 'center',

    marginTop: 15,

  },

  followButtonText: {

    color: '#000',

    fontWeight: 'bold',

  },

  tabContainer: {

    flexDirection: 'row',

    borderBottomWidth: 1,

    borderBottomColor: '#333',

  },

  activeTab: {

    flex: 1,

    alignItems: 'center',

    paddingVertical: 15,

    borderBottomWidth: 2,

    borderBottomColor: '#fff',

  },

  inactiveTab: {

    flex: 1,

    alignItems: 'center',

    paddingVertical: 15,

  },

  activeTabText: {

    color: '#fff',

    fontWeight: 'bold',

  },

  inactiveTabText: {

    color: '#999',

  },

  post: {

    padding: 15,

    borderBottomWidth: 1,

    borderBottomColor: '#333',

  },

  postHeader: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  postProfileImage: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 10,

  },

  postUsername: {

    color: '#fff',

    fontWeight: 'bold',

  },

  postTime: {

    color: '#999',

    fontSize: 12,

  },

  postMenu: {

    marginLeft: 'auto',

  },

  postContent: {

    color: '#fff',

    fontSize: 16,

    marginTop: 10,

    marginBottom: 15,

  },

  postActions: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 10,

  },

  postStats: {

    color: '#999',

    fontSize: 14,

  },

  navbar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    borderTopWidth: 1,

    borderTopColor: '#333',

    paddingVertical: 10,

  },

});



export default UserProfileScreen;