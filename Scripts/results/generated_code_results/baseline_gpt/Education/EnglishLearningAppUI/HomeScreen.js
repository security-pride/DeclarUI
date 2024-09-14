import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const HomeScreen = () => {
  const feedData = [
    {
      id: '1',
      name: 'Charlie Herrera',
      image: '../assets/snack-icon.png',
      title: 'ENGLISH TOURISM',
      description: 'Through the airport security door',
    },
    {
      id: '2',
      name: 'Ellen Jacobs',
      image: '../assets/snack-icon.png',
      title: 'When get hurt',
      description: 'It’s just a scratch.',
      subDescription: 'Chỉ xước nhẹ thôi ý mà.',
      videoDuration: '0:17',
    },
  ];

  const renderFeedItem = ({ item }) => {
    return (
      <View style={styles.feedItemContainer}>
        <View style={styles.profileContainer}>
          <Image source={{ uri: item.image }} style={styles.profileImage} />
          <Text style={styles.profileName}>{item.name}</Text>
        </View>
        <View style={styles.feedImageContainer}>
          <Image source={{ uri: item.image }} style={styles.feedImage} />
          {item.videoDuration && (
            <View style={styles.videoDuration}>
              <Text style={styles.videoDurationText}>{item.videoDuration}</Text>
            </View>
          )}
        </View>
        <Text style={styles.feedTitle}>{item.title}</Text>
        <Text style={styles.feedDescription}>{item.description}</Text>
        {item.subDescription && <Text style={styles.feedSubDescription}>{item.subDescription}</Text>}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hi, Steven !</Text>
        <Text style={styles.subtitle}>Learn new sentences right away</Text>
        <TouchableOpacity style={styles.notificationIconContainer}>
          <Icon name="bell" size={24} color="#000" />
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationBadgeText}>3</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity>
          <Text style={styles.activeTab}>NEW FEED</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.inactiveTab}>SUBSCRIPTION</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={feedData}
        renderItem={renderFeedItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.feedContent}
      />
      <View style={styles.bottomNavigation}>
        <Icon name="headphones" size={24} color="#000" />
        <Icon name="search" size={24} color="#000" />
        <Icon name="mic" size={24} color="#000" />
        <Icon name="book" size={24} color="#000" />
        <Icon name="user" size={24} color="#000" />
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
    marginTop: 50,
    paddingHorizontal: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#999',
  },
  notificationIconContainer: {
    position: 'absolute',
    right: 20,
    top: 10,
  },
  notificationBadge: {
    position: 'absolute',
    right: -10,
    top: -5,
    backgroundColor: '#ff5a5f',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationBadgeText: {
    color: '#fff',
    fontSize: 12,
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  activeTab: {
    marginRight: 20,
    fontSize: 16,
    color: '#007AFF',
    borderBottomWidth: 2,
    borderColor: '#007AFF',
  },
  inactiveTab: {
    fontSize: 16,
    color: '#999',
  },
  feedContent: {
    paddingHorizontal: 20,
  },
  feedItemContainer: {
    marginBottom: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  feedImageContainer: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  feedImage: {
    width: '100%',
    height: 200,
  },
  videoDuration: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#000',
    padding: 5,
    borderRadius: 5,
  },
  videoDurationText: {
    color: '#fff',
    fontSize: 12,
  },
  feedTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  feedDescription: {
    color: '#999',
  },
  feedSubDescription: {
    color: '#007AFF',
    marginTop: 5,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});

export default HomeScreen;