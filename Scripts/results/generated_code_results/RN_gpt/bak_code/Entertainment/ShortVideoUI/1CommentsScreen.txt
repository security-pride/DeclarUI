import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const CommentsScreen = () => {
  const navigation = useNavigation();

  const handleRedirectToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>579 comments</Text>
        <TouchableOpacity style={styles.closeButton} onPress={handleRedirectToHome}>
          <Icon name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.commentSection}>
        {comments.map((comment, index) => (
          <View key={index} style={styles.comment}>
            <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
            <View style={styles.commentTextContainer}>
              <Text style={styles.username}>{comment.user}</Text>
              <Text style={styles.commentText}>{comment.text}</Text>
              <Text style={styles.commentTime}>{comment.time}</Text>
              <TouchableOpacity>
                <Text style={styles.viewReplies}>View replies ({comment.replies})</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.likeSection}>
              <TouchableOpacity>
                <Icon name="heart-outline" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.likeCount}>{comment.likes}</Text>
            </View>
          </View>
        ))}
      </View>
      <View style={styles.commentInputContainer}>
        <TextInput
          style={styles.commentInput}
          placeholder="Add comment..."
        />
        <TouchableOpacity style={styles.commentButton}>
          <Icon name="happy-outline" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.commentButton}>
          <Icon name="at-outline" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const comments = [
  {
    user: 'martini_rond',
    text: 'How neatly I write the date in my book',
    time: '22h',
    likes: '8098',
    replies: '4'
  },
  {
    user: 'maxjacobson',
    text: "Now that's a skill very talented",
    time: '22h',
    likes: '8098',
    replies: '1'
  },
  // Add more comments here
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  closeButton: {
    padding: 8,
  },
  commentSection: {
    flex: 1,
    paddingHorizontal: 16,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  commentTextContainer: {
    flex: 1,
    marginRight: 8,
  },
  username: {
    fontWeight: 'bold',
  },
  commentText: {
    marginTop: 2,
    marginBottom: 2,
  },
  commentTime: {
    color: '#888',
    fontSize: 12,
    marginBottom: 4,
  },
  viewReplies: {
    color: '#0a84ff',
    marginTop: 4,
  },
  likeSection: {
    alignItems: 'center',
  },
  likeCount: {
    marginTop: 4,
    fontSize: 12,
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  commentInput: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 6,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    marginRight: 8,
  },
  commentButton: {
    marginLeft: 8,
  }
});

export default CommentsScreen;