import React from 'react';

import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';



const PostItem = ({ post }) => (

  <View style={styles.postContainer}>

    <View style={styles.postHeader}>

      <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

      <View style={styles.postHeaderText}>

        <Text style={styles.username}>{post.username}</Text>

        <Text style={styles.postTime}>{post.time}</Text>

      </View>

      <TouchableOpacity style={styles.moreButton}>

        <Ionicons name="ellipsis-horizontal" size={20} color="#FFFFFF" />

      </TouchableOpacity>

    </View>

    <Text style={styles.postContent}>{post.content}</Text>

    {post.image && (

      <Image source={require('../assets/snack-icon.png')} style={styles.postImage} />

    )}

    <View style={styles.postActions}>

      <TouchableOpacity style={styles.actionButton}>

        <Ionicons name="heart-outline" size={24} color="#FFFFFF" />

      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>

        <Ionicons name="chatbubble-outline" size={24} color="#FFFFFF" />

      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>

        <Ionicons name="repeat-outline" size={24} color="#FFFFFF" />

      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>

        <Ionicons name="paper-plane-outline" size={24} color="#FFFFFF" />

      </TouchableOpacity>

    </View>

    <Text style={styles.interactionInfo}>

      {post.answers} answers · {post.likes} likes

    </Text>

  </View>

);



const FeedScreen = () => {

  const posts = [

    {

      id: '1',

      username: 'arochinski',

      time: '2 min',

      content: 'Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint',

      image: true,

      answers: 7,

      likes: 59,

    },

    {

      id: '2',

      username: 'arochinski',

      time: '2 min',

      content: 'Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint',

      image: false,

      answers: 7,

      likes: 59,

    },

    {

      id: '3',

      username: 'aura',

      time: '1min',

      content: 'Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum',

      image: false,

      answers: 0,

      likes: 0,

    },

  ];



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Image source={require('../assets/snack-icon.png')} style={styles.logo} />

      </View>

      <FlatList

        data={posts}

        keyExtractor={(item) => item.id}

        renderItem={({ item }) => <PostItem post={item} />}

      />

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#000000',

  },

  header: {

    height: 50,

    justifyContent: 'center',

    alignItems: 'center',

    borderBottomWidth: 1,

    borderBottomColor: '#333333',

  },

  logo: {

    width: 30,

    height: 30,

  },

  postContainer: {

    paddingHorizontal: 15,

    paddingVertical: 10,

    borderBottomWidth: 1,

    borderBottomColor: '#333333',

  },

  postHeader: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 10,

  },

  avatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 10,

  },

  postHeaderText: {

    flex: 1,

  },

  username: {

    color: '#FFFFFF',

    fontWeight: 'bold',

  },

  postTime: {

    color: '#777777',

    fontSize: 12,

  },

  moreButton: {

    padding: 5,

  },

  postContent: {

    color: '#FFFFFF',

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

    marginBottom: 5,

  },

  actionButton: {

    padding: 5,

  },

  interactionInfo: {

    color: '#777777',

    fontSize: 12,

  },

});



export default FeedScreen;