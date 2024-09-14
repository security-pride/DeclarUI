import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const users = [
  { id: '1', name: 'aura', fullName: 'Aura Brown', followers: '500 mil followers' },
  { id: '2', name: 'rick', fullName: 'Rick Wright', followers: '500 mil followers' },
  { id: '3', name: 'mike', fullName: 'Mike Torello', followers: '500 mil followers' },
  { id: '4', name: 'theodore', fullName: 'Theodore T.C. Calvin', followers: '500 mil followers' },
  { id: '5', name: 'kate', fullName: 'Kate Tanner', followers: '500 mil followers' },
  { id: '6', name: 'thomas', fullName: 'Thomas Magnum', followers: '500 mil followers' },
  { id: '7', name: 'april', fullName: 'April Curtis', followers: '500 mil followers' },
];

const SearchScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.userContainer}>
      <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.fullNameText}>{item.fullName}</Text>
        <Text style={styles.followersText}>{item.followers}</Text>
      </View>
      <TouchableOpacity style={styles.followButton}>
        <Text style={styles.followButtonText}>Follow</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Search</Text>
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#888"
          style={styles.searchInput}
        />
      </View>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    height: 40,
  },
  listContainer: {
    paddingBottom: 20,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#555',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
  },
  fullNameText: {
    fontSize: 14,
    color: '#bbb',
  },
  followersText: {
    fontSize: 14,
    color: '#777',
  },
  followButton: {
    backgroundColor: '#444',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  followButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SearchScreen;