import React from 'react';

import { View, Text, StyleSheet, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { useNavigation } from '@react-navigation/native';



const MessageScreen = () => {

  const navigation = useNavigation();



  const conversations = [

    { id: '1', name: 'Jonathan D. Dye', message: 'Hello', time: 'Now' },

    { id: '2', name: 'Charles L. Wenner', message: 'Its need urgently', time: '10:00 am' },

    { id: '3', name: 'Luther K. Cusack', message: 'Check this design', time: '04:00 pm' },

    { id: '4', name: 'Devignedge UI Design T.', message: 'Hello, Manik are you there?', time: 'Yesterday' },

    { id: '5', name: 'Gloria G. Johnson', message: 'Hi Nik', time: '3 day' },

    { id: '6', name: 'Madge T. Crews', message: 'Check it', time: '04 Sep' },

    { id: '7', name: 'Rosemary J. Strickland', message: '', time: '03 Sep' },

  ];



  const renderConversationItem = ({ item }) => (

    <TouchableOpacity style={styles.conversationItem}>

      <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

      <View style={styles.conversationContent}>

        <Text style={styles.name}>{item.name}</Text>

        <Text style={styles.message}>{item.message}</Text>

      </View>

      <Text style={styles.time}>{item.time}</Text>

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.title}>Message</Text>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.userAvatar} />

        </TouchableOpacity>

      </View>

      <View style={styles.searchContainer}>

        <TextInput

          style={styles.searchInput}

          placeholder="Search ..."

          placeholderTextColor="#999"

        />

        <Icon name="search" size={20} color="#999" style={styles.searchIcon} />

      </View>

      <FlatList

        data={conversations}

        renderItem={renderConversationItem}

        keyExtractor={item => item.id}

        showsVerticalScrollIndicator={false}

      />

      <View style={styles.bottomNav}>

        <TouchableOpacity onPress={() => navigation.navigate('Board')}>

          <Icon name="grid" size={24} color="#999" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>

          <Icon name="checkmark" size={24} color="#999" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('AddTask')} style={styles.addButton}>

          <Icon name="add" size={24} color="#FFF" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Task')}>

          <Icon name="document" size={24} color="#999" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="chatbubble" size={24} color="#6200EE" />

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F5F5F5',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 20,

    paddingTop: 40,

    backgroundColor: '#FFF',

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  userAvatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

  },

  searchContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFF',

    borderRadius: 25,

    margin: 10,

    paddingHorizontal: 15,

  },

  searchInput: {

    flex: 1,

    height: 50,

    fontSize: 16,

  },

  searchIcon: {

    marginLeft: 10,

  },

  conversationItem: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFF',

    padding: 15,

    marginBottom: 1,

  },

  avatar: {

    width: 50,

    height: 50,

    borderRadius: 25,

    marginRight: 15,

  },

  conversationContent: {

    flex: 1,

  },

  name: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  message: {

    fontSize: 14,

    color: '#666',

  },

  time: {

    fontSize: 12,

    color: '#999',

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    backgroundColor: '#FFF',

    paddingVertical: 10,

    borderTopWidth: 1,

    borderTopColor: '#EEE',

  },

  addButton: {

    backgroundColor: '#6200EE',

    width: 50,

    height: 50,

    borderRadius: 25,

    justifyContent: 'center',

    alignItems: 'center',

    elevation: 5,

  },

});



export default MessageScreen;