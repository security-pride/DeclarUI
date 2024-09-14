import React, { useState } from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import { Ionicons } from '@expo/vector-icons';



const ProfileScreen = () => {

  const [activeTab, setActiveTab] = useState('Chirps');



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity>

          <Ionicons name="globe-outline" size={24} color="#FFFFFF" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Ionicons name="logo-instagram" size={24} color="#FFFFFF" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Ionicons name="menu-outline" size={24} color="#FFFFFF" />

        </TouchableOpacity>

      </View>



      <View style={styles.profileInfo}>

        <Image source={require('../assets/snack-icon.png')} style={styles.profilePic} />

        <Text style={styles.name}>Alisson Rochinski</Text>

        <Text style={styles.username}>arochinski</Text>

        <Text style={styles.website}>threads.net</Text>

        <Text style={styles.bio}>UI Designer | Let's redesign the world</Text>

        <Text style={styles.email}>alisson.rochinski@gmail.com</Text>



        <View style={styles.followersContainer}>

          <Image source={require('../assets/snack-icon.png')} style={styles.followerPic} />

          <Image source={require('../assets/snack-icon.png')} style={[styles.followerPic, styles.overlappingPic]} />

          <Image source={require('../assets/snack-icon.png')} style={[styles.followerPic, styles.overlappingPic]} />

          <Text style={styles.followersText}>2957 seguidores</Text>

        </View>



        <View style={styles.buttonContainer}>

          <TouchableOpacity style={styles.button}>

            <Text style={styles.buttonText}>Editar perfil</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>

            <Text style={styles.buttonText}>Compartilhar Perfil</Text>

          </TouchableOpacity>

        </View>

      </View>



      <View style={styles.tabContainer}>

        <TouchableOpacity

          style={[styles.tab, activeTab === 'Chirps' && styles.activeTab]}

          onPress={() => setActiveTab('Chirps')}>

          <Text style={[styles.tabText, activeTab === 'Chirps' && styles.activeTabText]}>Chirps</Text>

        </TouchableOpacity>

        <TouchableOpacity

          style={[styles.tab, activeTab === 'Answers' && styles.activeTab]}

          onPress={() => setActiveTab('Answers')}>

          <Text style={[styles.tabText, activeTab === 'Answers' && styles.activeTabText]}>Answers</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.postContainer}>

        <Image source={require('../assets/snack-icon.png')} style={styles.postAvatar} />

        <View style={styles.postContent}>

          <View style={styles.postHeader}>

            <Text style={styles.postUsername}>arochinski</Text>

            <Text style={styles.postTime}>2 min</Text>

            <TouchableOpacity>

              <Ionicons name="ellipsis-horizontal" size={16} color="#FFFFFF" />

            </TouchableOpacity>

          </View>

          <Text style={styles.postText}>

            Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint

          </Text>

          <View style={styles.postActions}>

            <TouchableOpacity>

              <Ionicons name="heart-outline" size={24} color="#FFFFFF" />

            </TouchableOpacity>

            <TouchableOpacity>

              <Ionicons name="chatbubble-outline" size={24} color="#FFFFFF" />

            </TouchableOpacity>

            <TouchableOpacity>

              <Ionicons name="repeat-outline" size={24} color="#FFFFFF" />

            </TouchableOpacity>

            <TouchableOpacity>

              <Ionicons name="paper-plane-outline" size={24} color="#FFFFFF" />

            </TouchableOpacity>

          </View>

          <Text style={styles.postStats}>7 answers · 59 likes</Text>

        </View>

      </View>

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#000000',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    padding: 15,

  },

  profileInfo: {

    alignItems: 'center',

    padding: 20,

  },

  profilePic: {

    width: 80,

    height: 80,

    borderRadius: 40,

    marginBottom: 10,

  },

  name: {

    color: '#FFFFFF',

    fontSize: 24,

    fontWeight: 'bold',

  },

  username: {

    color: '#FFFFFF',

    fontSize: 16,

  },

  website: {

    color: '#AAAAAA',

    fontSize: 14,

  },

  bio: {

    color: '#FFFFFF',

    textAlign: 'center',

    marginVertical: 10,

  },

  email: {

    color: '#AAAAAA',

    fontSize: 14,

  },

  followersContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    marginVertical: 10,

  },

  followerPic: {

    width: 24,

    height: 24,

    borderRadius: 12,

  },

  overlappingPic: {

    marginLeft: -10,

  },

  followersText: {

    color: '#FFFFFF',

    marginLeft: 10,

  },

  buttonContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    width: '100%',

    marginTop: 15,

  },

  button: {

    borderColor: '#333333',

    borderWidth: 1,

    borderRadius: 8,

    paddingVertical: 8,

    paddingHorizontal: 15,

    width: '48%',

  },

  buttonText: {

    color: '#FFFFFF',

    textAlign: 'center',

  },

  tabContainer: {

    flexDirection: 'row',

    borderBottomWidth: 1,

    borderBottomColor: '#333333',

  },

  tab: {

    flex: 1,

    paddingVertical: 15,

    alignItems: 'center',

  },

  activeTab: {

    borderBottomWidth: 2,

    borderBottomColor: '#FFFFFF',

  },

  tabText: {

    color: '#AAAAAA',

  },

  activeTabText: {

    color: '#FFFFFF',

  },

  postContainer: {

    flexDirection: 'row',

    padding: 15,

    borderBottomWidth: 1,

    borderBottomColor: '#333333',

  },

  postAvatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 10,

  },

  postContent: {

    flex: 1,

  },

  postHeader: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 5,

  },

  postUsername: {

    color: '#FFFFFF',

    fontWeight: 'bold',

    marginRight: 5,

  },

  postTime: {

    color: '#AAAAAA',

    fontSize: 12,

    flex: 1,

  },

  postText: {

    color: '#FFFFFF',

    marginBottom: 10,

  },

  postActions: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 5,

  },

  postStats: {

    color: '#AAAAAA',

    fontSize: 12,

  },

});



export default ProfileScreen;