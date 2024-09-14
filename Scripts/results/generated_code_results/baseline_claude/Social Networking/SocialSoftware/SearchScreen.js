import React, { useState } from 'react';

import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

import { Ionicons } from '@expo/vector-icons';



const SearchItem = ({ item }) => (

  <View style={styles.searchItem}>

    <View style={styles.userInfo}>

      <Text style={styles.username}>{item.username}</Text>

      <Text style={styles.fullName}>{item.fullName}</Text>

      <Text style={styles.followers}>{item.followers} followers</Text>

    </View>

    <TouchableOpacity style={styles.followButton}>

      <Text style={styles.followButtonText}>Follow</Text>

    </TouchableOpacity>

  </View>

);



const SearchScreen = () => {

  const [searchQuery, setSearchQuery] = useState('');



  const searchData = [

    { id: '1', username: 'aura', fullName: 'Aura Brown', followers: '500 mil' },

    { id: '2', username: 'rick', fullName: 'Rick Wright', followers: '500 mil' },

    { id: '3', username: 'mike', fullName: 'Mike Torello', followers: '500 mil' },

    { id: '4', username: 'theodore', fullName: 'Theodore T.C. Calvin', followers: '500 mil' },

    { id: '5', username: 'kate', fullName: 'Kate Tanner', followers: '500 mil' },

    { id: '6', username: 'thomas', fullName: 'Thomas Magnum', followers: '500 mil' },

    { id: '7', username: 'april', fullName: 'April Curtis', followers: '500 mil' },

  ];



  return (

    <View style={styles.container}>

      <Text style={styles.headerText}>Search</Text>

      <View style={styles.searchInputContainer}>

        <Ionicons name="search" size={20} color="#777" style={styles.searchIcon} />

        <TextInput

          style={styles.searchInput}

          placeholder="Search"

          placeholderTextColor="#777"

          value={searchQuery}

          onChangeText={setSearchQuery}

        />

      </View>

      <FlatList

        data={searchData}

        renderItem={({ item }) => <SearchItem item={item} />}

        keyExtractor={item => item.id}

      />

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#000',

    paddingTop: 50,

  },

  headerText: {

    fontSize: 30,

    fontWeight: 'bold',

    color: '#fff',

    marginLeft: 20,

    marginBottom: 20,

  },

  searchInputContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#222',

    borderRadius: 10,

    marginHorizontal: 20,

    marginBottom: 20,

    paddingHorizontal: 10,

  },

  searchIcon: {

    marginRight: 10,

  },

  searchInput: {

    flex: 1,

    height: 40,

    color: '#fff',

  },

  searchItem: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 20,

    paddingVertical: 15,

    borderBottomWidth: 1,

    borderBottomColor: '#222',

  },

  userInfo: {

    flex: 1,

  },

  username: {

    color: '#fff',

    fontSize: 16,

    fontWeight: 'bold',

  },

  fullName: {

    color: '#777',

    fontSize: 14,

  },

  followers: {

    color: '#777',

    fontSize: 12,

    marginTop: 2,

  },

  followButton: {

    backgroundColor: '#333',

    paddingHorizontal: 15,

    paddingVertical: 8,

    borderRadius: 20,

  },

  followButtonText: {

    color: '#fff',

    fontSize: 14,

    fontWeight: 'bold',

  },

});



export default SearchScreen;