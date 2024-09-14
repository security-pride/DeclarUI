import React, { useState } from 'react';

import { View, Text, StyleSheet, Image, TextInput, FlatList, TouchableOpacity, StatusBar } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const MessageScreen = ({ navigation }) => {

  const [searchQuery, setSearchQuery] = useState('');



  const messages = [

    { id: '1', name: 'Jonathan D. Dye', message: 'Hello', time: 'Now', avatar: require('../assets/snack-icon.png') },

    { id: '2', name: 'Charles L. Wenner', message: 'Its need urgently', time: '10:00 am', avatar: require('../assets/snack-icon.png') },

    { id: '3', name: 'Luther K. Cusack', message: 'Check this design', time: '04:30 pm', avatar: require('../assets/snack-icon.png') },

    { id: '4', name: 'Devignedge UI Design T.', message: 'Hello, Manik are you there?', time: 'Yesterday', avatar: require('../assets/snack-icon.png') },

    { id: '5', name: 'Gloria G. Johnson', message: 'Hi Nik', time: '3 day', avatar: require('../assets/snack-icon.png') },

    { id: '6', name: 'Madge T. Crews', message: 'Check it', time: '04 Sep', avatar: require('../assets/snack-icon.png') },

    { id: '7', name: 'Rosemary J. Strickland', message: '', time: '03 Sep', avatar: require('../assets/snack-icon.png') },

  ];



  const renderMessageItem = ({ item }) => (

    <TouchableOpacity style={styles.messageItem} onPress={() => navigation.navigate('ChatDetail', { user: item })}>

      <Image source={item.avatar} style={styles.avatar} />

      <View style={styles.messageContent}>

        <View style={styles.messageHeader}>

          <Text style={styles.name}>{item.name}</Text>

          <Text style={styles.time}>{item.time}</Text>

        </View>

        <Text style={styles.message} numberOfLines={1}>{item.message}</Text>

      </View>

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>

        <Text style={styles.title}>Message</Text>

        <Image source={require('../assets/snack-icon.png')} style={styles.userAvatar} />

      </View>

      <View style={styles.searchContainer}>

        <Icon name="search" size={20} color="#8E8E93" style={styles.searchIcon} />

        <TextInput

          style={styles.searchInput}

          placeholder="Search ..."

          value={searchQuery}

          onChangeText={setSearchQuery}

        />

      </View>

      <FlatList

        data={messages}

        renderItem={renderMessageItem}

        keyExtractor={item => item.id}

        showsVerticalScrollIndicator={false}

      />

      <View style={styles.bottomNav}>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="grid-view" size={24} color="#BDBDBD" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="check-circle-outline" size={24} color="#BDBDBD" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.addButton}>

          <Icon name="add" size={32} color="#FFFFFF" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="calendar-today" size={24} color="#BDBDBD" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="chat-bubble-outline" size={24} color="#8875FF" />

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F1F5FF',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 20,

    paddingTop: 60,

    paddingBottom: 20,

  },

  title: {

    fontSize: 32,

    fontWeight: 'bold',

    color: '#1D1D1D',

  },

  userAvatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

  },

  searchContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    borderRadius: 25,

    marginHorizontal: 20,

    marginBottom: 20,

    paddingHorizontal: 15,

  },

  searchIcon: {

    marginRight: 10,

  },

  searchInput: {

    flex: 1,

    height: 50,

    fontSize: 16,

    color: '#1D1D1D',

  },

  messageItem: {

    flexDirection: 'row',

    padding: 15,

    backgroundColor: '#FFFFFF',

    marginHorizontal: 20,

    marginBottom: 10,

    borderRadius: 15,

  },

  avatar: {

    width: 50,

    height: 50,

    borderRadius: 25,

    marginRight: 15,

  },

  messageContent: {

    flex: 1,

  },

  messageHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 5,

  },

  name: {

    fontSize: 16,

    fontWeight: 'bold',

    color: '#1D1D1D',

  },

  time: {

    fontSize: 12,

    color: '#8E8E93',

  },

  message: {

    fontSize: 14,

    color: '#8E8E93',

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    paddingVertical: 10,

    borderTopLeftRadius: 20,

    borderTopRightRadius: 20,

  },

  navItem: {

    padding: 10,

  },

  addButton: {

    backgroundColor: '#8875FF',

    width: 56,

    height: 56,

    borderRadius: 28,

    justifyContent: 'center',

    alignItems: 'center',

    elevation: 5,

    marginTop: -30,

  },

});



export default MessageScreen;