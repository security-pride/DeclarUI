import React, { useState } from 'react';

import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const SearchScreen = () => {

  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = useState('');



  const searchResults = [

    { name: 'aura', fullName: 'Aura Brown', followers: '500 mil' },

    { name: 'rick', fullName: 'Rick Wright', followers: '500 mil' },

    { name: 'mike', fullName: 'Mike Torello', followers: '500 mil' },

    { name: 'theodore', fullName: 'Theodore T.C. Calvin', followers: '500 mil' },

    { name: 'kate', fullName: 'Kate Tanner', followers: '500 mil' },

    { name: 'thomas', fullName: 'Thomas Magnum', followers: '500 mil' },

    { name: 'april', fullName: 'April Curtis', followers: '500 mil' },

  ];



  const renderSearchItem = ({ item }) => (

    <TouchableOpacity

      style={styles.searchItem}

      onPress={() => navigation.navigate('UserProfile', { username: item.name })}

    >

      <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

      <View style={styles.userInfo}>

        <Text style={styles.fullName}>{item.fullName}</Text>

        <Text style={styles.username}>{item.name}</Text>

        <Text style={styles.followers}>{item.followers} followers</Text>

      </View>

      <TouchableOpacity style={styles.followButton}>

        <Text style={styles.followButtonText}>Follow</Text>

      </TouchableOpacity>

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.title}>Search</Text>

        <View style={styles.searchBar}>

          <Icon name="search" size={20} color="#999" style={styles.searchIcon} />

          <TextInput

            style={styles.searchInput}

            placeholder="Search"

            value={searchQuery}

            onChangeText={setSearchQuery}

          />

        </View>

      </View>

      <FlatList

        data={searchResults}

        renderItem={renderSearchItem}

        keyExtractor={(item) => item.name}

        style={styles.resultsList}

      />

      <View style={styles.bottomNav}>

        <TouchableOpacity onPress={() => navigation.navigate('Feed')}>

          <Icon name="home-outline" size={24} color="#fff" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="search" size={24} color="#fff" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="add-circle-outline" size={24} color="#fff" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Activity')}>

          <Icon name="heart-outline" size={24} color="#fff" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>

          <Icon name="person-outline" size={24} color="#fff" />

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#000',

  },

  header: {

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#333',

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    color: '#fff',

    marginBottom: 16,

  },

  searchBar: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#333',

    borderRadius: 8,

    paddingHorizontal: 12,

  },

  searchIcon: {

    marginRight: 8,

  },

  searchInput: {

    flex: 1,

    height: 40,

    color: '#fff',

  },

  resultsList: {

    flex: 1,

  },

  searchItem: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#333',

  },

  avatar: {

    width: 50,

    height: 50,

    borderRadius: 25,

    marginRight: 16,

  },

  userInfo: {

    flex: 1,

  },

  fullName: {

    fontSize: 16,

    fontWeight: 'bold',

    color: '#fff',

  },

  username: {

    fontSize: 14,

    color: '#999',

  },

  followers: {

    fontSize: 12,

    color: '#666',

    marginTop: 4,

  },

  followButton: {

    backgroundColor: '#333',

    paddingHorizontal: 16,

    paddingVertical: 8,

    borderRadius: 16,

  },

  followButtonText: {

    color: '#fff',

    fontWeight: 'bold',

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    paddingVertical: 12,

    borderTopWidth: 1,

    borderTopColor: '#333',

  },

});



export default SearchScreen;