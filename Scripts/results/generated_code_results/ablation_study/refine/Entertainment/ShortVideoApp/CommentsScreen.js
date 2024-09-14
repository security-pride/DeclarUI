import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CommentItem = ({ user, comment, likes, replies }) => (
  <View style={styles.commentItem}>
    <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
    <View style={styles.commentContent}>
      <Text style={styles.username}>{user}</Text>
      <Text style={styles.commentText}>{comment}</Text>
      <View style={styles.commentActions}>
        <TouchableOpacity style={styles.likeButton}>
          <Icon name="heart-outline" size={20} color="#888" />
          <Text style={styles.likeCount}>{likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.viewReplies}>View replies ({replies})</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const CommentsScreen = () => {
  const [comments, setComments] = useState([
    { id: '1', user: 'Babayaga', comment: 'Lorem ipsum dolor sit amet, elit poo consectetur adipiscing elit. Aenean sit.', likes: '1.2k', replies: 12 },
    { id: '2', user: 'LilKittt', comment: 'Lorem ipsum dolor sit amet, elit poo consectetur adipiscing elit.', likes: '1.8k', replies: 12 },
    { id: '3', user: 'Spiderman', comment: 'Lorem ipsum dolor sit amet, elit poo consectetur adipiscing elit.', likes: '1.8k', replies: 12 },
    { id: '4', user: 'Badli', comment: 'Lorem ipsum dolor sit amet, elit poo consectetur adipiscing elit.', likes: '1.8k', replies: 12 },
    { id: '5', user: 'Tung Tran', comment: 'Lorem ipsum dolor sit amet, elit poo consectetur adipiscing elit.', likes: '1.8k', replies: 12 },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>4231 Comments</Text>
        <TouchableOpacity>
          <Icon name="create-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={comments}
        renderItem={({ item }) => <CommentItem {...item} />}
        keyExtractor={item => item.id}
        style={styles.commentList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add Comment..."
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.sendButton}>
          <Icon name="arrow-up" size={24} color="#fff" />
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
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  commentList: {
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
  commentActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  likeCount: {
    color: '#888',
    marginLeft: 5,
  },
  viewReplies: {
    color: '#888',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  input: {
    flex: 1,
    backgroundColor: '#333',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: '#fff',
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#555',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CommentsScreen;