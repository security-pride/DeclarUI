import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CommentsScreen = () => {
  const commentsData = [
    {
      key: '1',
      username: 'martini_rond',
      comment: 'How neatly I write the date in my book',
      time: '22h',
      replies: 4,
      likes: 8098,
    },
    {
      key: '2',
      username: 'maxjacobson',
      comment: 'Now that’s a skill very talented',
      time: '22h',
      replies: 1,
      likes: 8098,
    },
    {
      key: '3',
      username: 'zackjohn',
      comment: 'Doing this would make me so anxious',
      time: '',
      replies: 0,
      likes: 8098,
    },
    {
      key: '4',
      username: 'kiero_d',
      comment: 'Use that on r air forces to whiten them',
      time: '21h',
      replies: 9,
      likes: 8098,
    },
    {
      key: '5',
      username: 'mis_potter',
      comment: 'Sjpuld’ve used that on his forces 😂😂',
      time: '13h',
      replies: 4,
      likes: 8098,
    },
    {
      key: '6',
      username: 'karenne',
      comment: 'No pressure',
      time: '22h',
      replies: 2,
      likes: 8098,
    },
    {
      key: '7',
      username: 'joshua_l',
      comment: 'My OCD couldn’t do it',
      time: '15h',
      replies: 0,
      likes: 8098,
    },
  ];

  const renderComment = ({ item }) => (
    <View style={styles.commentContainer}>
      <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
      <View style={styles.commentContent}>
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.commentText}>{item.comment}</Text>
        <View style={styles.commentInfo}>
          <Text style={styles.commentTime}>{item.time}</Text>
          {item.replies > 0 && (
            <Text style={styles.replies}>View replies ({item.replies})</Text>
          )}
        </View>
      </View>
      <View style={styles.likesContainer}>
        <Icon name="heart-outline" size={18} color="#000" />
        <Text style={styles.likes}>{item.likes}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.commentsHeader}>579 comments</Text>
      <FlatList
        data={commentsData}
        renderItem={renderComment}
        keyExtractor={item => item.key}
      />
      <View style={styles.addCommentContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add comment..."
          placeholderTextColor="#8e8e8f"
        />
        <TouchableOpacity>
          <Icon name="at-circle-outline" size={24} color="#8e8e8f" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="happy-outline" size={24} color="#8e8e8f" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  commentsHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  commentContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'flex-start',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  commentContent: {
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
  },
  commentText: {
    marginVertical: 4,
  },
  commentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentTime: {
    color: '#8e8e8f',
    marginRight: 8,
  },
  replies: {
    color: '#3493d9',
  },
  likesContainer: {
    alignItems: 'center',
  },
  likes: {
    fontSize: 12,
    marginTop: 2,
  },
  addCommentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderColor: '#e1e1e1',
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#f1f1f1',
    borderRadius: 16,
    marginRight: 8,
  },
});

export default CommentsScreen;