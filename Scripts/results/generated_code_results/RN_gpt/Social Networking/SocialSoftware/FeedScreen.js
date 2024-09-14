import React from 'react';
import { View, Text, Image, Pressable, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FeedScreen = ({ navigation }) => {
  const navigateToUserProfile = (username) => {
    navigation.navigate('UserProfile', { username });
  };

  const navigateToProfile = () => {
    navigation.navigate('Profile');
  };

  const navigateToFeed = () => {
    navigation.navigate('Feed');
  };

  const navigateToSearch = () => {
    navigation.navigate('Search');
  };

  const navigateToActivity = () => {
    navigation.navigate('Activity');
  };

  const renderPost = (post) => (
    <View style={styles.postContainer} key={post.user}>
      <TouchableOpacity onPress={() => navigateToUserProfile(post.user)}>
        <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
      </TouchableOpacity>
      <View style={styles.postContent}>
        <TouchableOpacity onPress={() => navigateToUserProfile(post.user)}>
          <Text style={styles.username}>{post.user}</Text>
        </TouchableOpacity>
        <Text style={styles.timeAgo}>{post.timeAgo}</Text>
        <Text>{post.content}</Text>
        {post.image && (
          <Image source={require('../assets/snack-icon.png')} style={styles.postImage} />
        )}
        <View style={styles.postActions}>
          <Pressable>
            <Icon name="heart" size={20} style={styles.icon} />
          </Pressable>
          <Pressable>
            <Icon name="reload" size={20} style={styles.icon} />
          </Pressable>
          <TouchableOpacity>
            <Icon name="refresh" size={20} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <Text>{post.stats.answers} answers · {post.stats.likes} likes</Text>
      </View>
    </View>
  );

  const posts = [
    {
      user: 'arochinski',
      content: 'Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint',
      image: true,
      stats: { answers: 7, likes: 59 },
      timeAgo: '2 min'
    },
    {
      user: 'aura',
      content: 'Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint',
      stats: { answers: 7, likes: 59 },
      timeAgo: '1 min'
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="logo-instagram" size={30} />
      </View>
      {posts.map(renderPost)}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={navigateToFeed}>
          <Icon name="home" size={30} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToSearch}>
          <Icon name="search" size={30} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="add-circle" size={30} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToActivity}>
          <Icon name="heart" size={30} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToProfile}>
          <Icon name="person" size={30} style={styles.icon} />
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
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  postContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  postContent: {
    flex: 1,
    marginLeft: 10,
  },
  username: {
    fontWeight: 'bold',
    color: 'white',
  },
  timeAgo: {
    color: 'gray',
    fontSize: 12,
  },
  postImage: {
    width: '100%',
    height: 200,
    marginVertical: 10,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
    marginVertical: 5,
  },
  icon: {
    color: 'white',
  },
  bottomNav: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'gray',
  },
});

export default FeedScreen;