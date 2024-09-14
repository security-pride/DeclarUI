import React, { useState } from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



const ProfileScreen = ({ navigation }) => {

  const [activeTab, setActiveTab] = useState('Chirps');



  const renderPost = () => (

    <View style={styles.post}>

      <View style={styles.postHeader}>

        <Image source={require('../assets/snack-icon.png')} style={styles.postAvatar} />

        <Text style={styles.postUsername}>arochinski</Text>

        <Text style={styles.postTime}>2 min</Text>

        <TouchableOpacity>

          <Icon name="ellipsis-horizontal" size={20} color="#fff" />

        </TouchableOpacity>

      </View>

      <Text style={styles.postContent}>

        Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint

      </Text>

      <View style={styles.postActions}>

        <TouchableOpacity>

          <Icon name="heart-outline" size={24} color="#fff" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="chatbubble-outline" size={24} color="#fff" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="refresh-outline" size={24} color="#fff" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="paper-plane-outline" size={24} color="#fff" />

        </TouchableOpacity>

      </View>

      <Text style={styles.postStats}>7 answers · 59 likes</Text>

    </View>

  );



  return (

    <View style={styles.container}>

      <StatusBar barStyle="light-content" />

      <View style={styles.header}>

        <TouchableOpacity>

          <Icon name="globe-outline" size={24} color="#fff" />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>Alisson Rochinski</Text>

        <TouchableOpacity>

          <Icon name="logo-instagram" size={24} color="#fff" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="menu-outline" size={24} color="#fff" />

        </TouchableOpacity>

      </View>

      <ScrollView>

        <View style={styles.profileInfo}>

          <Image source={require('../assets/snack-icon.png')} style={styles.profilePicture} />

          <Text style={styles.name}>Alisson Rochinski</Text>

          <Text style={styles.username}>arochinski</Text>

          <Text style={styles.bio}>UI Designer | Let's redesign the world</Text>

          <Text style={styles.email}>alisson.rochinski@gmail.com</Text>

          <View style={styles.followersContainer}>

            <Image source={require('../assets/snack-icon.png')} style={styles.followerAvatar} />

            <Image source={require('../assets/snack-icon.png')} style={[styles.followerAvatar, styles.overlappingAvatar]} />

            <Image source={require('../assets/snack-icon.png')} style={[styles.followerAvatar, styles.overlappingAvatar]} />

            <Text style={styles.followersCount}>2957 seguidores</Text>

          </View>

          <View style={styles.buttonContainer}>

            <TouchableOpacity style={styles.editButton}>

              <Text style={styles.buttonText}>Editar perfil</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.shareButton}>

              <Text style={styles.buttonText}>Compartilhar Perfil</Text>

            </TouchableOpacity>

          </View>

        </View>

        <View style={styles.tabContainer}>

          <TouchableOpacity

            style={[styles.tab, activeTab === 'Chirps' && styles.activeTab]}

            onPress={() => setActiveTab('Chirps')}

          >

            <Text style={[styles.tabText, activeTab === 'Chirps' && styles.activeTabText]}>Chirps</Text>

          </TouchableOpacity>

          <TouchableOpacity

            style={[styles.tab, activeTab === 'Answers' && styles.activeTab]}

            onPress={() => setActiveTab('Answers')}

          >

            <Text style={[styles.tabText, activeTab === 'Answers' && styles.activeTabText]}>Answers</Text>

          </TouchableOpacity>

        </View>

        {renderPost()}

      </ScrollView>

      <View style={styles.bottomNav}>

        <TouchableOpacity onPress={() => navigation.navigate('Feed')}>

          <Icon name="home-outline" size={24} color="#fff" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="search-outline" size={24} color="#fff" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="add-circle-outline" size={24} color="#fff" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="heart-outline" size={24} color="#fff" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.bottomNavAvatar} />

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

    borderBottomWidth: 1,

    borderBottomColor: '#333',

  },

  headerTitle: {

    color: '#fff',

    fontSize: 18,

    fontWeight: 'bold',

  },

  profileInfo: {

    alignItems: 'center',

    padding: 20,

  },

  profilePicture: {

    width: 100,

    height: 100,

    borderRadius: 50,

    marginBottom: 10,

  },

  name: {

    color: '#fff',

    fontSize: 24,

    fontWeight: 'bold',

  },

  username: {

    color: '#888',

    fontSize: 16,

  },

  bio: {

    color: '#fff',

    textAlign: 'center',

    marginTop: 10,

  },

  email: {

    color: '#888',

    marginTop: 5,

  },

  followersContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 15,

  },

  followerAvatar: {

    width: 30,

    height: 30,

    borderRadius: 15,

    borderWidth: 2,

    borderColor: '#000',

  },

  overlappingAvatar: {

    marginLeft: -15,

  },

  followersCount: {

    color: '#fff',

    marginLeft: 10,

  },

  buttonContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    width: '100%',

    marginTop: 20,

  },

  editButton: {

    backgroundColor: '#333',

    padding: 10,

    borderRadius: 20,

    width: '48%',

  },

  shareButton: {

    backgroundColor: '#333',

    padding: 10,

    borderRadius: 20,

    width: '48%',

  },

  buttonText: {

    color: '#fff',

    textAlign: 'center',

  },

  tabContainer: {

    flexDirection: 'row',

    borderBottomWidth: 1,

    borderBottomColor: '#333',

  },

  tab: {

    flex: 1,

    paddingVertical: 15,

    alignItems: 'center',

  },

  activeTab: {

    borderBottomWidth: 2,

    borderBottomColor: '#1DA1F2',

  },

  tabText: {

    color: '#888',

  },

  activeTabText: {

    color: '#fff',

  },

  post: {

    padding: 15,

    borderBottomWidth: 1,

    borderBottomColor: '#333',

  },

  postHeader: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 10,

  },

  postAvatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 10,

  },

  postUsername: {

    color: '#fff',

    fontWeight: 'bold',

    flex: 1,

  },

  postTime: {

    color: '#888',

  },

  postContent: {

    color: '#fff',

    marginBottom: 10,

  },

  postActions: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginTop: 10,

  },

  postStats: {

    color: '#888',

    marginTop: 5,

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    borderTopWidth: 1,

    borderTopColor: '#333',

    paddingVertical: 10,

  },

  bottomNavAvatar: {

    width: 24,

    height: 24,

    borderRadius: 12,

  },

});



export default ProfileScreen;