import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FeedScreen = () => {
  const data = [
    {
      id: '1',
      username: 'arochinski',
      time: '2 min',
      text: 'Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint',
      image: '../assets/snack-icon.png',
      answers: 7,
      likes: 59,
    },
    {
      id: '2',
      username: 'aura',
      time: '1 min',
      text: 'Tempor dolor proident duis incididunt et. Cillum',
      answers: 0,
      likes: 0,
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      <View style={styles.header}>
        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.time}>{item.time}</Text>
        <Icon name="ellipsis-horizontal" size={20} color="#FFFFFF" />
      </View>
      <Text style={styles.text}>{item.text}</Text>
      {item.image && <Image source={require('../assets/snack-icon.png')} style={styles.postImage} />}
      <View style={styles.actions}>
        <TouchableOpacity>
          <Icon name="heart-outline" size={24} color="#FFFFFF" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="chatbubble-outline" size={24} color="#FFFFFF" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="share-outline" size={24} color="#FFFFFF" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.stats}>{item.answers} answers · {item.likes} likes</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  postContainer: {
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  header: {
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
  username: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    flex: 1,
  },
  time: {
    color: '#AAAAAA',
    marginRight: 10,
  },
  text: {
    color: '#FFFFFF',
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  icon: {
    marginRight: 15,
  },
  stats: {
    color: '#AAAAAA',
  },
});

export default FeedScreen;