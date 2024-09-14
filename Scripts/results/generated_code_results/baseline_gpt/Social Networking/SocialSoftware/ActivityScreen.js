import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const data = [
  { id: 1, name: 'thomas' },
  { id: 2, name: 'mike' },
  { id: 3, name: 'michael' },
  { id: 4, name: 'willie' },
  { id: 5, name: 'peter' },
  { id: 6, name: 'angela' },
  { id: 7, name: 'devon' },
  { id: 8, name: 'col' },
  { id: 9, name: 'templeton' },
  { id: 10, name: 'willie' },
  { id: 11, name: 'dori' },
];

const ActivityScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.activityText}>Started following you</Text>
      </View>
      <TouchableOpacity style={styles.followButton}>
        <Text style={styles.followButtonText}>Follow</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Activity</Text>
      <View style={styles.tabs}>
        <TouchableOpacity style={styles.tabSelected}>
          <Text style={styles.tabTextSelected}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Answers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Mentions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Verified</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#333',
    marginRight: 5,
  },
  tabSelected: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#fff',
    marginRight: 5,
  },
  tabText: {
    color: '#fff',
  },
  tabTextSelected: {
    color: '#000',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    color: '#fff',
  },
  activityText: {
    fontSize: 14,
    color: '#888',
  },
  followButton: {
    backgroundColor: '#1E90FF',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  followButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ActivityScreen;