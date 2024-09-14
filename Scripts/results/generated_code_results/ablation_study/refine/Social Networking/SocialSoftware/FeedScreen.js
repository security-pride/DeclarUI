import React, { useState } from 'react';

import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



const Post = ({ username, content, imageUrl, time, likes, answers }) => {

  const [isLiked, setIsLiked] = useState(false);



  return (

    <View style={styles.postContainer}>

      <View style={styles.postHeader}>

        <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />

        <View style={styles.postInfo}>

          <Text style={styles.username}>{username}</Text>

          <Text style={styles.time}>{time}</Text>

        </View>

        <TouchableOpacity>

          <Icon name="ellipsis-horizontal" size={20} color="#fff" />

        </TouchableOpacity>

      </View>

      <Text style={styles.postContent}>{content}</Text>

      {imageUrl && <Image source={{ uri: imageUrl }} style={styles.postImage} />}

      <View style={styles.postActions}>

        <Pressable onPress={() => setIsLiked(!isLiked)}>

          <Icon name={isLiked ? "heart" : "heart-outline"} size={24} color={isLiked ? "#E91E63" : "#fff"} />

        </Pressable>

        <Pressable>

          <Icon name="chatbubble-outline" size={24} color="#fff" />

        </Pressable>

        <Pressable>

          <Icon name="arrow-redo-outline" size={24} color="#fff" />

        </Pressable>

        <Pressable>

          <Icon name="bookmark-outline" size={24} color="#fff" />

        </Pressable>

      </View>

      <Text style={styles.interactionInfo}>{answers} answers · {likes} likes</Text>

    </View>

  );

};



const FeedScreen = () => {

  const [posts, setPosts] = useState([

    {

      id: '1',

      username: 'arochinski',

      content: 'Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint',

      imageUrl: 'https://example.com/image1.jpg',

      time: '2 min',

      likes: 59,

      answers: 7

    },

    {

      id: '2',

      username: 'arochinski',

      content: 'Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint',

      time: '2 min',

      likes: 59,

      answers: 7

    },

    {

      id: '3',

      username: 'aura',

      content: 'Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint',

      time: '1min',

      likes: 0,

      answers: 0

    }

  ]);



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Image source={require('../assets/snack-icon.png')} style={styles.logo} />

        <TouchableOpacity>

          <Icon name="search" size={24} color="#fff" />

        </TouchableOpacity>

      </View>

      <FlatList

        data={posts}

        renderItem={({ item }) => <Post {...item} />}

        keyExtractor={item => item.id}

      />

      <View style={styles.bottomNav}>

        <TouchableOpacity>

          <Icon name="home" size={24} color="#fff" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="search" size={24} color="#fff" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="add-circle-outline" size={24} color="#fff" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="heart-outline" size={24} color="#fff" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.profileImageSmall} />

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

  logo: {

    width: 30,

    height: 30,

  },

  postContainer: {

    padding: 15,

    borderBottomWidth: 1,

    borderBottomColor: '#333',

  },

  postHeader: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 10,

  },

  profileImage: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 10,

  },

  postInfo: {

    flex: 1,

  },

  username: {

    color: '#fff',

    fontWeight: 'bold',

  },

  time: {

    color: '#888',

    fontSize: 12,

  },

  postContent: {

    color: '#fff',

    marginBottom: 10,

  },

  postImage: {

    width: '100%',

    height: 200,

    borderRadius: 10,

    marginBottom: 10,

  },

  postActions: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 10,

  },

  interactionInfo: {

    color: '#888',

    fontSize: 12,

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    borderTopWidth: 1,

    borderTopColor: '#333',

    paddingVertical: 10,

  },

  profileImageSmall: {

    width: 24,

    height: 24,

    borderRadius: 12,

  },

});



export default FeedScreen;