import React from 'react';
import { View, Text, Image, Button, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const commentsData = [
  {
    user: 'Babayaga',
    comment: 'Lorem ipsum dolor sit amet, elit poo consectetur adipiscing elit. Aenean sit.',
    likes: '1.2k',
    replies: 12,
  },
  {
    user: 'LilKittt',
    comment: 'Lorem ipsum dolor sit amet, elit poo consectetur adipiscing elit.',
    likes: '1.8k',
    replies: 12,
  },
  {
    user: 'Spiderman',
    comment: 'Lorem ipsum dolor sit amet, elit poo consectetur adipiscing elit.',
    likes: '1.8k',
    replies: 12,
  },
  {
    user: 'Badli',
    comment: 'Lorem ipsum dolor sit amet, elit poo consectetur adipiscing elit.',
    likes: '1.8k',
    replies: 12,
  },
  {
    user: 'Tung Tran',
    comment: 'Lorem ipsum dolor sit amet, elit poo consectetur adipiscing elit.',
    likes: '1.8k',
    replies: 12,
  },
];

const CommentItem = ({ user, comment, likes, replies }) => {
  return (
    <View style={styles.commentContainer}>
      <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
      <View style={styles.commentContent}>
        <Text style={styles.username}>{user}</Text>
        <Text style={styles.commentText}>{comment}</Text>
        <View style={styles.actions}>
          <TouchableOpacity>
            <Text style={styles.viewReplies}>View replies ({replies})</Text>
          </TouchableOpacity>
          <View style={styles.likeButton}>
            <Icon name="heart" size={20} color="red" />
            <Text style={styles.likeText}>{likes}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>4231 Comments</Text>
        <TouchableOpacity>
          <Icon name="edit" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={commentsData}
        renderItem={({ item }) => (
          <CommentItem user={item.user} comment={item.comment} likes={item.likes} replies={item.replies} />
        )}
        keyExtractor={(item) => item.user}
      />
      <View style={styles.addCommentContainer}>
        <TextInput style={styles.commentInput} placeholder="Add Comment..." placeholderTextColor="#888" />
        <TouchableOpacity>
          <Icon name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerText: {
    fontSize: 18,
    color: 'white',
  },
  commentContainer: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  commentContent: {
    flex: 1,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  commentText: {
    fontSize: 14,
    color: 'white',
    marginVertical: 4,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  viewReplies: {
    color: '#3b82f6',
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeText: {
    marginLeft: 4,
    color: 'white',
  },
  addCommentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  commentInput: {
    flex: 1,
    padding: 10,
    backgroundColor: '#222',
    borderRadius: 20,
    marginRight: 8,
    color: 'white',
  },
});

export default CommentsScreen;