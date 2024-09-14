import React from 'react';

import { View, Text, Image, TextInput, FlatList, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const CommentsScreen = () => {

  const navigation = useNavigation();



  const comments = [

    { id: '1', user: 'martini_rond', comment: 'How neatly I write the date in my book', time: '22h', likes: 8098 },

    { id: '2', user: 'maxjacobson', comment: 'Now that\'s a skill very talented', time: '22h', likes: 8098 },

    { id: '3', user: 'zackjohn', comment: 'Doing this would make me so anxious', time: '22h', likes: 8098 },

    { id: '4', user: 'kiero_d', comment: 'Use that on r air forces to whiten them', time: '21h', likes: 8098 },

    { id: '5', user: 'mis_potter', comment: 'Sjpuld\'ve used that on his forces 😂😂', time: '13h', likes: 8098 },

    { id: '6', user: 'karennne', comment: 'No prressure', time: '22h', likes: 8098 },

    { id: '7', user: 'joshua_l', comment: 'My OCD couldn\'t do it', time: '15h', likes: 8098 },

  ];



  const renderComment = ({ item }) => (

    <View style={styles.commentContainer}>

      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.avatar} />

      <View style={styles.commentContent}>

        <Text style={styles.username}>{item.user}</Text>

        <Text style={styles.commentText}>{item.comment}</Text>

        <View style={styles.commentMeta}>

          <Text style={styles.commentTime}>{item.time}</Text>

          <TouchableOpacity>

            <Text style={styles.viewReplies}>View replies</Text>

          </TouchableOpacity>

        </View>

      </View>

      <TouchableOpacity style={styles.likeButton}>

        <Text style={styles.likeCount}>{item.likes}</Text>

      </TouchableOpacity>

    </View>

  );



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.headerTitle}>579 comments</Text>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Text style={styles.closeButton}>X</Text>

        </TouchableOpacity>

      </View>

      <FlatList

        data={comments}

        renderItem={renderComment}

        keyExtractor={(item) => item.id}

        style={styles.commentList}

      />

      <View style={styles.inputContainer}>

        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.inputAvatar} />

        <TextInput

          style={styles.input}

          placeholder="Add comment..."

          placeholderTextColor="#999"

        />

        <TouchableOpacity style={styles.postButton}>

          <Text style={styles.postButtonText}>Post</Text>

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

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 15,

    borderBottomWidth: 1,

    borderBottomColor: '#333',

  },

  headerTitle: {

    color: '#fff',

    fontSize: 16,

    fontWeight: 'bold',

  },

  closeButton: {

    color: '#fff',

    fontSize: 18,

  },

  commentList: {

    flex: 1,

  },

  commentContainer: {

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

  commentMeta: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  commentTime: {

    color: '#999',

    fontSize: 12,

    marginRight: 10,

  },

  viewReplies: {

    color: '#999',

    fontSize: 12,

  },

  likeButton: {

    justifyContent: 'center',

    alignItems: 'center',

  },

  likeCount: {

    color: '#999',

    fontSize: 12,

  },

  inputContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    borderTopWidth: 1,

    borderTopColor: '#333',

  },

  inputAvatar: {

    width: 30,

    height: 30,

    borderRadius: 15,

    marginRight: 10,

  },

  input: {

    flex: 1,

    height: 40,

    color: '#fff',

    backgroundColor: '#333',

    borderRadius: 20,

    paddingHorizontal: 15,

  },

  postButton: {

    marginLeft: 10,

  },

  postButtonText: {

    color: '#3897f0',

    fontWeight: 'bold',

  },

});



export default CommentsScreen;