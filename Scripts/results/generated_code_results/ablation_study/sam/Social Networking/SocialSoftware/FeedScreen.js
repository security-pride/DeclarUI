import React, { useState } from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const Post = ({ post, onUserPress }) => (

  <View style={styles.post}>

    <TouchableOpacity onPress={() => onUserPress(post.user)}>

      <Text style={styles.username}>{post.user}</Text>

    </TouchableOpacity>

    <Text style={styles.content}>{post.content}</Text>

    {post.image && (

      <Image source={require('../assets/snack-icon.png')} style={styles.postImage} />

    )}

    <View style={styles.postStats}>

      <View style={styles.postStats}>
        <Text>{post.stats?.answers || 0} answers</Text>
        <Text>{post.stats?.likes || 0} likes</Text>
        <Text>{post.timeAgo}</Text>
      </View>

    </View>

  </View>

);



const FeedScreen = () => {

  const navigation = useNavigation();

  const [posts, setPosts] = useState([

    {

      user: 'arochinski',

      content: 'Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint',

      image: true,

      stats: { answers: 7, likes: 59 },

      timeAgo: '2 min'

    },

    {

      user: 'arochinski',

      content: 'Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint',

      stats: { answers: 7, likes: 59 },

      timeAgo: '2 min'

    },

    {

      user: 'aura',

      content: 'Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint',

      timeAgo: '1min'

    }

  ]);



  const handleUserPress = (username) => {

    navigation.navigate('UserProfile', { username });

  };



  const handleNavigation = (screen) => {

    navigation.navigate(screen);

  };



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Image source={require('../assets/snack-icon.png')} style={styles.logo} />

        <TouchableOpacity onPress={() => handleNavigation('Activity')}>

          <Icon name="notifications-outline" size={24} color="#000" />

        </TouchableOpacity>

      </View>

      <FlatList

        data={posts}

        renderItem={({ item }) => <Post post={item} onUserPress={handleUserPress} />}

        keyExtractor={(item, index) => index.toString()}

      />

      <View style={styles.bottomNav}>

        <TouchableOpacity onPress={() => handleNavigation('Feed')}>

          <Icon name="home" size={24} color="#000" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleNavigation('Search')}>

          <Icon name="search" size={24} color="#000" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>

          <Icon name="add-circle-outline" size={24} color="#000" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>

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

  logo: {

    width: 30,

    height: 30,

  },

  post: {

    padding: 10,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  username: {

    fontWeight: 'bold',

    marginBottom: 5,

  },

  content: {

    marginBottom: 10,

  },

  postImage: {

    width: '100%',

    height: 200,

    resizeMode: 'cover',

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



export default FeedScreen;