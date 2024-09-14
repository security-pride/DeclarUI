import React, { useState } from 'react';

import { View, Text, Image, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const CommentItem = ({ item }) => (

  <View style={styles.commentItem}>

    <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.avatar} />

    <View style={styles.commentContent}>

      <Text style={styles.username}>{item.username}</Text>

      <Text style={styles.commentText}>{item.text}</Text>

      <TouchableOpacity style={styles.replyButton}>

        <Text style={styles.replyText}>View replies ({item.replies})</Text>

      </TouchableOpacity>

    </View>

    <TouchableOpacity style={styles.likeButton}>

      <Text style={styles.likeCount}>{item.likes}</Text>

    </TouchableOpacity>

  </View>

);



const CommentsScreen = () => {

  const navigation = useNavigation();

  const [comments, setComments] = useState([

    { id: '1', username: 'Babayaga', text: 'Lorem ipsum dolor sit amet, elit poo consectetur adipiscing elit. Aenean sit.', replies: 12, likes: '1.2k' },

    { id: '2', username: 'LilKittt', text: 'Lorem ipsum dolor sit amet, elit poo consectetur adipiscing elit.', replies: 12, likes: '1.8k' },

    { id: '3', username: 'Spiderman', text: 'Lorem ipsum dolor sit amet, elit poo consectetur adipiscing elit.', replies: 12, likes: '1.8k' },

    { id: '4', username: 'Badli', text: 'Lorem ipsum dolor sit amet, elit poo consectetur adipiscing elit.', replies: 12, likes: '1.8k' },

    { id: '5', username: 'Tung Tran', text: 'Lorem ipsum dolor sit amet, elit poo consectetur adipiscing elit.', replies: 12, likes: '1.8k' },

  ]);



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.headerTitle}>4231 Comments</Text>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.closeIcon} />

        </TouchableOpacity>

      </View>

      <FlatList

        data={comments}

        renderItem={({ item }) => <CommentItem item={item} />}

        keyExtractor={(item) => item.id}

        style={styles.commentsList}

      />

      <View style={styles.inputContainer}>

        <TextInput

          style={styles.input}

          placeholder="Add Comment..."

          placeholderTextColor="#999"

        />

        <TouchableOpacity style={styles.sendButton}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.sendIcon} />

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

    padding: 15,

    borderBottomWidth: 1,

    borderBottomColor: '#333',

  },

  headerTitle: {

    color: '#fff',

    fontSize: 18,

    fontWeight: 'bold',

  },

  closeIcon: {

    width: 24,

    height: 24,

    tintColor: '#fff',

  },

  commentsList: {

    flex: 1,

  },

  commentItem: {

    flexDirection: 'row',

    padding: 15,

    borderBottomWidth: 1,

    borderBottomColor: '#333',

  },

  avatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 10,

  },

  commentContent: {

    flex: 1,

  },

  username: {

    color: '#fff',

    fontWeight: 'bold',

    marginBottom: 5,

  },

  commentText: {

    color: '#fff',

    marginBottom: 5,

  },

  replyButton: {

    alignSelf: 'flex-start',

  },

  replyText: {

    color: '#888',

    fontSize: 12,

  },

  likeButton: {

    justifyContent: 'center',

    alignItems: 'center',

    marginLeft: 10,

  },

  likeCount: {

    color: '#fff',

    fontSize: 12,

  },

  inputContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    borderTopWidth: 1,

    borderTopColor: '#333',

  },

  input: {

    flex: 1,

    backgroundColor: '#333',

    borderRadius: 20,

    paddingHorizontal: 15,

    paddingVertical: 8,

    color: '#fff',

  },

  sendButton: {

    marginLeft: 10,

  },

  sendIcon: {

    width: 24,

    height: 24,

    tintColor: '#fff',

  },

});



export default CommentsScreen;