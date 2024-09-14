import React, { useState } from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const Post = ({ post }) => (

  <View style={styles.post}>

    <Text style={styles.postContent}>{post.content}</Text>

    <View style={styles.postStats}>

      <Text>{post.stats.answers} answers · {post.stats.likes} likes · {post.timeAgo}</Text>

    </View>

  </View>

);



const ProfileScreen = () => {

  const navigation = useNavigation();

  const [activeTab, setActiveTab] = useState('Chirps');

  const [posts, setPosts] = useState([

    {

      content: 'Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint',

      stats: { answers: 7, likes: 59 },

      timeAgo: '2 min'

    }

  ]);



  const handleNavigation = (screen) => {

    navigation.navigate(screen);

  };



  const handleLanguageSelector = () => {

    // Implement language selection logic

  };



  const handleInstagramLink = () => {

    // Implement Instagram link logic

  };



  const handleMenuButton = () => {

    // Implement menu logic

  };



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={handleLanguageSelector}>

          <Icon name="globe-outline" size={24} color="#000" />

        </TouchableOpacity>

        <TouchableOpacity onPress={handleInstagramLink}>

          <Icon name="logo-instagram" size={24} color="#000" />

        </TouchableOpacity>

        <TouchableOpacity onPress={handleMenuButton}>

          <Icon name="menu" size={24} color="#000" />

        </TouchableOpacity>

      </View>

      <ScrollView>

        <View style={styles.profileInfo}>

          <Image source={require('../assets/snack-icon.png')} style={styles.profilePicture} />

          <Text style={styles.name}>Alisson Rochinski</Text>

          <Text style={styles.username}>arochinski</Text>

          <Text style={styles.bio}>UI Designer | Let's redesign the world</Text>

          <Text style={styles.website}>threads.net</Text>

          <Text style={styles.email}>alisson.rochinski@gmail.com</Text>

          <Text style={styles.followers}>2957 seguidores</Text>

        </View>

        <View style={styles.actionButtons}>

          <TouchableOpacity style={styles.button}>

            <Text>Editar perfil</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>

            <Text>Compartilhar Perfil</Text>

          </TouchableOpacity>

        </View>

        <View style={styles.tabs}>

          <TouchableOpacity

            style={[styles.tab, activeTab === 'Chirps' && styles.activeTab]}

            onPress={() => setActiveTab('Chirps')}

          >

            <Text>Chirps</Text>

          </TouchableOpacity>

          <TouchableOpacity

            style={[styles.tab, activeTab === 'Answers' && styles.activeTab]}

            onPress={() => setActiveTab('Answers')}

          >

            <Text>Answers</Text>

          </TouchableOpacity>

        </View>

        <FlatList

          data={posts}

          renderItem={({ item }) => <Post post={item} />}

          keyExtractor={(item, index) => index.toString()}

        />

      </ScrollView>

      <View style={styles.bottomNav}>

        <TouchableOpacity onPress={() => handleNavigation('Feed')}>

          <Icon name="home-outline" size={24} color="#000" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleNavigation('Search')}>

          <Icon name="search-outline" size={24} color="#000" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>

          <Icon name="add-circle-outline" size={24} color="#000" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleNavigation('Activity')}>

          <Icon name="heart-outline" size={24} color="#000" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleNavigation('Profile')}>

          <Icon name="person" size={24} color="#000" />

        </TouchableOpacity>

      </View>

    </View>

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

    padding: 10,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

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

    fontSize: 20,

    fontWeight: 'bold',

  },

  username: {

    fontSize: 16,

    color: '#666',

  },

  bio: {

    textAlign: 'center',

    marginVertical: 10,

  },

  website: {

    color: '#1DA1F2',

  },

  email: {

    marginVertical: 5,

  },

  followers: {

    marginTop: 10,

  },

  actionButtons: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    marginVertical: 20,

  },

  button: {

    borderWidth: 1,

    borderColor: '#e0e0e0',

    paddingHorizontal: 20,

    paddingVertical: 10,

    borderRadius: 20,

  },

  tabs: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  tab: {

    paddingVertical: 10,

    flex: 1,

    alignItems: 'center',

  },

  activeTab: {

    borderBottomWidth: 2,

    borderBottomColor: '#1DA1F2',

  },

  post: {

    padding: 15,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  postContent: {

    marginBottom: 10,

  },

  postStats: {

    flexDirection: 'row',

    justifyContent: 'space-between',

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

    paddingVertical: 10,

  },

});



export default ProfileScreen;