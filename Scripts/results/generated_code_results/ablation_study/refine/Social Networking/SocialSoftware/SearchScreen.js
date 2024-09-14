import React, { useState } from 'react';

import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



const userData = [

  { id: '1', name: 'Aura Brown', followers: '500 mil followers' },

  { id: '2', name: 'Rick Wright', followers: '500 mil followers' },

  { id: '3', name: 'Mike Torello', followers: '500 mil followers' },

  { id: '4', name: 'Theodore T.C. Calvin', followers: '500 mil followers' },

  { id: '5', name: 'Kate Tanner', followers: '500 mil followers' },

  { id: '6', name: 'Thomas Magnum', followers: '500 mil followers' },

  { id: '7', name: 'April Curtis', followers: '500 mil followers' },

];



const SearchScreen = ({ navigation }) => {

  const [searchQuery, setSearchQuery] = useState('');



  const renderUserItem = ({ item }) => (

    <View style={styles.userItem}>

      <View>

        <Text style={styles.userName}>{item.name.split(' ')[0].toLowerCase()}</Text>

        <Text style={styles.userFullName}>{item.name}</Text>

        <Text style={styles.userFollowers}>{item.followers}</Text>

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

        <Icon name="search" size={20} color="#999" style={styles.searchIcon} />

        <TextInput

          style={styles.searchInput}

          placeholder="Search"

          value={searchQuery}

          onChangeText={setSearchQuery}

          placeholderTextColor="#999"

        />

      </View>

      <FlatList

        data={userData}

        renderItem={renderUserItem}

        keyExtractor={(item) => item.id}

        showsVerticalScrollIndicator={false}

      />

      <View style={styles.navbar}>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>

          <Icon name="home-outline" size={24} color="#999" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Search')}>

          <Icon name="search" size={24} color="#fff" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('NewPost')}>

          <Icon name="add-circle-outline" size={24} color="#999" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Likes')}>

          <Icon name="heart-outline" size={24} color="#999" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>

          <Icon name="person-outline" size={24} color="#999" />

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#000',

    paddingTop: 40,

  },

  headerText: {

    fontSize: 24,

    fontWeight: 'bold',

    color: '#fff',

    marginLeft: 15,

    marginBottom: 15,

  },

  searchContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#1c1c1e',

    borderRadius: 10,

    marginHorizontal: 15,

    marginBottom: 15,

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

  userItem: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingVertical: 10,

    paddingHorizontal: 15,

    borderBottomWidth: 1,

    borderBottomColor: '#333',

  },

  userName: {

    color: '#fff',

    fontSize: 16,

    fontWeight: 'bold',

  },

  userFullName: {

    color: '#999',

    fontSize: 14,

  },

  userFollowers: {

    color: '#999',

    fontSize: 12,

  },

  followButton: {

    backgroundColor: '#1c1c1e',

    paddingHorizontal: 15,

    paddingVertical: 8,

    borderRadius: 20,

  },

  followButtonText: {

    color: '#fff',

    fontWeight: 'bold',

  },

  navbar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    backgroundColor: '#1c1c1e',

    paddingVertical: 10,

    position: 'absolute',

    bottom: 0,

    left: 0,

    right: 0,

  },

});



export default SearchScreen;