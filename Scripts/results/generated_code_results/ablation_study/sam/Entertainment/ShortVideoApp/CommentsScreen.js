import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CommentsScreen = ({ navigation }) => {
  const [comments, setComments] = useState([
    { id: '1', user: 'Babayaga', comment: 'Lorem ipsum dolor sit amet, elit poo consectetur adipiscing elit. Aenean sit.', likes: '1.2k', replies: 12 },
    { id: '2', user: 'LilKittt', comment: 'Lorem ipsum dolor sit amet, elit poo consectetur adipiscing elit.', likes: '1.8k', replies: 12 },
    { id: '3', user: 'Spiderman', comment: 'Lorem ipsum dolor sit amet, elit poo consectetur adipiscing elit.', likes: '1.8k', replies: 12 },
    { id: '4', user: 'Badli', comment: 'Lorem ipsum dolor sit amet, elit poo consectetur adipiscing elit.', likes: '1.8k', replies: 12 },
    { id: '5', user: 'Tung Tran', comment: 'Lorem ipsum dolor sit amet, elit poo consectetur adipiscing elit.', likes: '1.8k', replies: 12 },
  ]);

  const [newComment, setNewComment] = useState('');

  const renderCommentItem = ({ item }) => (
    <View style={styles.commentItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
      <View style={styles.commentContent}>
        <Text style={styles.username}>{item.user}</Text>
        <Text style={styles.commentText}>{item.comment}</Text>
        <View style={styles.commentActions}>
          <TouchableOpacity style={styles.likeButton}>
            <Icon name="heart-o" size={16} color="#666" />
            <Text style={styles.likeCount}>{item.likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.replyButton}>
            <Text style={styles.replyText}>View replies ({item.replies})</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const addComment = () => {
    if (newComment.trim()) {
      setComments([
        {
          id: String(comments.length + 1),
          user: 'Me',
          comment: newComment,
          likes: '0',
          replies: 0,
        },
        ...comments,
      ]);
      setNewComment('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>4231 Comments</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="times" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={comments}
        renderItem={renderCommentItem}
        keyExtractor={(item) => item.id}
        style={styles.commentList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add Comment..."
          value={newComment}
          onChangeText={setNewComment}
        />
        <TouchableOpacity style={styles.sendButton} onPress={addComment}>
          <Icon name="send" size={20} color="#007AFF" />
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
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  commentList: {
    flex: 1,
  },
  commentItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  commentContent: {
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  commentText: {
    marginBottom: 8,
  },
  commentActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  likeCount: {
    marginLeft: 4,
    color: '#666',
  },
  replyButton: {},
  replyText: {
    color: '#666',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  sendButton: {
    padding: 8,
  },
});

export default CommentsScreen;