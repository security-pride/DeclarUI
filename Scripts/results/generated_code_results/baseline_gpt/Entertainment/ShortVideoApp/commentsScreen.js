import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const commentsData = [
  {
    id: '1',
    user: 'Babayaga',
    text: 'Lorem ipsum dolor sit amet, elit poo consectetur adipiscing elit. Aenean sit.',
    likes: '1.2k',
    replies: 12,
    avatar: '../assets/snack-icon.png'
  },
  {
    id: '2',
    user: 'LilKitt',
    text: 'Lorem ipsum dolor sit amet, elit poo consectetur adipiscing elit.',
    likes: '1.8k',
    replies: 12,
    avatar: '../assets/snack-icon.png'
  },
  {
    id: '3',
    user: 'Spiderman',
    text: 'Lorem ipsum dolor sit amet, elit poo consectetur adipiscing elit.',
    likes: '1.8k',
    replies: 12,
    avatar: '../assets/snack-icon.png'
  },
  {
    id: '4',
    user: 'Badli',
    text: 'Lorem ipsum dolor sit amet, elit poo consectetur adipiscing elit.',
    likes: '1.8k',
    replies: 12,
    avatar: '../assets/snack-icon.png'
  },
  {
    id: '5',
    user: 'Tung Tran',
    text: 'Lorem ipsum dolor sit amet, elit poo consectetur adipiscing elit.',
    likes: '1.8k',
    replies: 12,
    avatar: '../assets/snack-icon.png'
  }
];

const commentsScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.commentContainer}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.commentBody}>
        <Text style={styles.userName}>{item.user}</Text>
        <Text style={styles.commentText}>{item.text}</Text>
        <View style={styles.commentFooter}>
          <Text style={styles.viewReplies}>View replies ({item.replies})</Text>
          <Icon name="chevron-down" size={16} color="rgba(255, 255, 255, 0.7)" />
        </View>
      </View>
      <View style={styles.likesContainer}>
        <Icon name="heart" size={20} color="red" />
        <Text style={styles.likesText}>{item.likes}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>4231 Comments</Text>
      <FlatList
        data={commentsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View style={styles.addCommentContainer}>
        <TextInput
          placeholder="Add Comment..."
          placeholderTextColor="rgba(255, 255, 255, 0.6)"
          style={styles.input}
        />
        <TouchableOpacity style={styles.sendButton}>
          <Icon name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    padding: 10
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10
  },
  commentBody: {
    flex: 1
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  commentText: {
    fontSize: 14,
    color: 'white',
    marginVertical: 5
  },
  commentFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
  viewReplies: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.6)'
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  likesText: {
    color: 'rgba(255, 255, 255, 0.8)',
    marginLeft: 5
  },
  addCommentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.3)',
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#1c1c1c'
  },
  input: {
    flex: 1,
    color: 'white',
    marginRight: 10
  },
  sendButton: {
    paddingHorizontal: 10
  }
});

export default commentsScreen;