import React from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const UserProfileScreen = ({ route }) => {

  const navigation = useNavigation();

  const { username } = route.params;



  const userInfo = {

    name: 'Alisson Rochinski',

    username: 'arochinski',

    website: 'threads.net',

    bio: "UI Designer | Let's redesign the world",

    email: 'alisson.rochinski@gmail.com',

    followers: 2957,

  };



  const posts = [

    {

      content: 'Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint',

      stats: { answers: 7, likes: 59 },

      timeAgo: '2 min',

    },

  ];



  const renderPost = ({ item }) => (

    <View style={styles.post}>

      <Text style={styles.postContent}>{item.content}</Text>

      <View style={styles.postStats}>

        <Text style={styles.statText}>{item.stats.answers} answers</Text>

        <Text style={styles.statText}>{item.stats.likes} likes</Text>

        <Text style={styles.timeAgo}>{item.timeAgo}</Text>

      </View>

    </View>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Icon name="arrow-back" size={24} color="#fff" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="logo-instagram" size={24} color="#fff" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="ellipsis-horizontal" size={24} color="#fff" />

        </TouchableOpacity>

      </View>



      <ScrollView>

        <View style={styles.profileInfo}>

          <Image source={require('../assets/snack-icon.png')} style={styles.profilePicture} />

          <Text style={styles.name}>{userInfo.name}</Text>

          <Text style={styles.username}>{userInfo.username}</Text>

          <Text style={styles.bio}>{userInfo.bio}</Text>

          <Text style={styles.website}>{userInfo.website}</Text>

          <Text style={styles.followers}>{userInfo.followers} followers</Text>

        </View>



        <TouchableOpacity style={styles.followButton}>

          <Text style={styles.followButtonText}>Follow</Text>

        </TouchableOpacity>



        <View style={styles.tabs}>

          <TouchableOpacity style={styles.tab}>

            <Text style={styles.tabText}>Chirps</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.tab}>

            <Text style={styles.tabText}>Answers</Text>

          </TouchableOpacity>

        </View>



        <FlatList

          data={posts}

          renderItem={renderPost}

          keyExtractor={(item, index) => index.toString()}

        />

      </ScrollView>



      <View style={styles.bottomNav}>

        <TouchableOpacity onPress={() => navigation.navigate('Feed')}>

          <Icon name="home-outline" size={24} color="#fff" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Search')}>

          <Icon name="search-outline" size={24} color="#fff" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="add-circle-outline" size={24} color="#fff" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Activity')}>

          <Icon name="heart-outline" size={24} color="#fff" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>

          <Icon name="person-outline" size={24} color="#fff" />

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

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#333',

  },

  profileInfo: {

    alignItems: 'center',

    padding: 16,

  },

  profilePicture: {

    width: 80,

    height: 80,

    borderRadius: 40,

    marginBottom: 8,

  },

  name: {

    fontSize: 18,

    fontWeight: 'bold',

    color: '#fff',

  },

  username: {

    fontSize: 16,

    color: '#999',

    marginBottom: 8,

  },

  bio: {

    fontSize: 14,

    color: '#fff',

    textAlign: 'center',

    marginBottom: 8,

  },

  website: {

    fontSize: 14,

    color: '#3897f0',

    marginBottom: 8,

  },

  followers: {

    fontSize: 14,

    color: '#999',

  },

  followButton: {

    backgroundColor: '#fff',

    paddingVertical: 8,

    paddingHorizontal: 16,

    borderRadius: 20,

    alignSelf: 'center',

    marginVertical: 16,

  },

  followButtonText: {

    color: '#000',

    fontWeight: 'bold',

  },

  tabs: {

    flexDirection: 'row',

    borderBottomWidth: 1,

    borderBottomColor: '#333',

  },

  tab: {

    flex: 1,

    alignItems: 'center',

    paddingVertical: 16,

  },

  tabText: {

    color: '#fff',

    fontWeight: 'bold',

  },

  post: {

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#333',

  },

  postContent: {

    color: '#fff',

    fontSize: 14,

    marginBottom: 8,

  },

  postStats: {

    flexDirection: 'row',

    justifyContent: 'space-between',

  },

  statText: {

    color: '#999',

    fontSize: 12,

  },

  timeAgo: {

    color: '#999',

    fontSize: 12,

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    paddingVertical: 12,

    borderTopWidth: 1,

    borderTopColor: '#333',

  },

});



export default UserProfileScreen;