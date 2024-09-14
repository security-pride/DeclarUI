import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ListenScreen = () => {

  const renderHotItem = ({ item }) => (
    <View style={styles.hotItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.hotImage} />
      <Text style={styles.hotText}>{item.title}</Text>
      <Text style={styles.hotSubtitle}>{item.subtitle}</Text>
    </View>
  );

  const renderRecentItem = ({ item }) => (
    <TouchableOpacity style={styles.recentItem}>
      <View style={styles.recentIconContainer}>
        <Icon name={item.icon} size={20} color="#ff5500" />
      </View>
      <Text style={styles.recentText}>{item.title}</Text>
      {item.isNew && <Text style={styles.newBadge}>News</Text>}
      <Icon name="chevron-forward-outline" size={20} color="#ccc" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hots now</Text>
      <FlatList
        horizontal
        data={hotItems}
        renderItem={renderHotItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        style={styles.hotList}
      />
      
      <Text style={styles.sectionHeader}>Recents</Text>
      <FlatList
        data={recentItems}
        renderItem={renderRecentItem}
        keyExtractor={item => item.id}
        style={styles.recentList}
      />

      <Text style={styles.sectionHeader}>Playlists</Text>
      <View style={styles.bottomBar}>
        <Text style={styles.bottomBarText}>All Mine</Text>
        <Text style={styles.bottomBarSubtext}>Kanye West</Text>
        <Icon name="play-circle-outline" size={25} color="#ff5500" />
      </View>

      <View style={styles.tabBar}>
        <Icon name="home-outline" size={25} color="#ccc" />
        <Icon name="headset-outline" size={25} color="#ff5500" />
        <Icon name="search-outline" size={25} color="#ccc" />
        <Icon name="person-outline" size={25} color="#ccc" />
      </View>
    </View>
  );
};

const hotItems = [
  { id: '1', title: 'Summer Vibes', subtitle: 'Summer Vibes\n1,300,231 FOLLOWERS' },
  { id: '2', title: 'Monday Party', subtitle: 'Rap Zone\n650,231 FOLLOWERS' },
];

const recentItems = [
  { id: '1', icon: 'bar-chart-outline', title: 'Ranking', isNew: true },
  { id: '2', icon: 'bookmark-outline', title: 'Weekly featured', isNew: false },
  { id: '3', icon: 'radio-outline', title: 'Podcast', isNew: false },
  { id: '4', icon: 'mic-outline', title: 'Live', isNew: false },
  { id: '5', icon: 'musical-notes-outline', title: 'Concerts', isNew: false },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff5500',
    marginVertical: 16,
  },
  hotList: {
    marginBottom: 16,
  },
  hotItem: {
    marginRight: 16,
    width: 150,
  },
  hotImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  hotText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    position: 'absolute',
    bottom: 20,
    left: 8,
  },
  hotSubtitle: {
    fontSize: 12,
    color: '#fff',
    position: 'absolute',
    bottom: 8,
    left: 8,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  recentList: {
    marginBottom: 16,
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  },
  recentIconContainer: {
    width: 30,
  },
  recentText: {
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
  },
  newBadge: {
    backgroundColor: '#ff5500',
    color: 'white',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    fontSize: 12,
    marginRight: 10,
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    marginVertical: 16,
  },
  bottomBarText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomBarSubtext: {
    fontSize: 14,
    color: '#999',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
  },
});

export default ListenScreen;