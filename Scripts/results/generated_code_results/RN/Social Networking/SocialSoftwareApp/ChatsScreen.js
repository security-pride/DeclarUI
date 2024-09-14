import React, { useState } from 'react';

import { View, Text, Image, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const ChatsScreen = () => {

  const [searchText, setSearchText] = useState('');

  const navigation = useNavigation();



  const stories = [

    { name: 'Your story', add: true },

    { name: 'Joshua', active: true },

    { name: 'Martin', active: true },

    { name: 'Karen', active: true },

    { name: 'Martha', active: true },

  ];



  const chatList = [

    { name: 'Martin Randolph', lastMessage: "You: What's man!", time: '9:40 AM' },

    { name: 'Andrew Parker', lastMessage: 'You: Ok, thanks!', time: '9:25 AM', read: true },

    { name: 'Karen Castillo', lastMessage: 'You: Ok, See you in To...', time: 'Fri', read: true },

    { name: 'Maisy Humphrey', lastMessage: 'Have a good day, Maisy!', time: 'Fri', read: true },

    { name: 'Joshua Lawrence', lastMessage: 'The business plan loo...', time: 'Thu', read: true },

  ];



  const renderStoryItem = ({ item }) => (

    <TouchableOpacity style={styles.storyItem}>

      <Image

        source={require('../assets/snack-icon.png')}

        style={[styles.storyImage, item.add && styles.addStoryImage]}

      />

      {item.active && <View style={styles.activeIndicator} />}

      <Text style={styles.storyName}>{item.name}</Text>

    </TouchableOpacity>

  );



  const renderChatItem = ({ item }) => (

    <TouchableOpacity

      style={styles.chatItem}

      onPress={() => navigation.navigate('Intro', { chatName: item.name })}

    >

      <Image source={require('../assets/snack-icon.png')} style={styles.chatImage} />

      <View style={styles.chatInfo}>

        <Text style={styles.chatName}>{item.name}</Text>

        <Text style={styles.chatLastMessage}>{item.lastMessage}</Text>

      </View>

      <Text style={styles.chatTime}>{item.time}</Text>

      {item.read && <View style={styles.readIndicator} />}

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Image source={require('../assets/snack-icon.png')} style={styles.profilePic} />

        <Text style={styles.title}>Chats</Text>

        <TouchableOpacity onPress={() => {/* Open camera */}}>

          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('NewMessage')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

        </TouchableOpacity>

      </View>



      <TextInput

        style={styles.searchBar}

        placeholder="Search"

        value={searchText}

        onChangeText={setSearchText}

      />



      <FlatList

        horizontal

        data={stories}

        renderItem={renderStoryItem}

        keyExtractor={(item) => item.name}

        style={styles.storiesList}

      />



      <FlatList

        data={chatList}

        renderItem={renderChatItem}

        keyExtractor={(item) => item.name}

        style={styles.chatList}

      />



      <View style={styles.adContainer}>

        <Image source={require('../assets/snack-icon.png')} style={styles.adIcon} />

        <View style={styles.adInfo}>

          <Text style={styles.adTitle}>Pixsellz</Text>

          <Text style={styles.adMessage}>Make design process easier...</Text>

        </View>

        <TouchableOpacity>

          <Text style={styles.viewMore}>View More</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.bottomNav}>

        <TouchableOpacity style={styles.navItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text>Chats</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('People')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text>People</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text>Discover</Text>

        </TouchableOpacity>

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

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

  },

  profilePic: {

    width: 40,

    height: 40,

    borderRadius: 20,

  },

  title: {

    fontSize: 20,

    fontWeight: 'bold',

    marginLeft: 10,

  },

  icon: {

    width: 24,

    height: 24,

    marginLeft: 10,

  },

  searchBar: {

    backgroundColor: '#f0f0f0',

    padding: 10,

    margin: 10,

    borderRadius: 20,

  },

  storiesList: {

    paddingLeft: 10,

  },

  storyItem: {

    alignItems: 'center',

    marginRight: 15,

  },

  storyImage: {

    width: 60,

    height: 60,

    borderRadius: 30,

  },

  addStoryImage: {

    borderWidth: 2,

    borderColor: '#ccc',

  },

  activeIndicator: {

    position: 'absolute',

    bottom: 20,

    right: 0,

    width: 12,

    height: 12,

    borderRadius: 6,

    backgroundColor: 'green',

    borderWidth: 2,

    borderColor: 'white',

  },

  storyName: {

    marginTop: 5,

    fontSize: 12,

  },

  chatList: {

    flex: 1,

  },

  chatItem: {

    flexDirection: 'row',

    padding: 10,

    alignItems: 'center',

  },

  chatImage: {

    width: 50,

    height: 50,

    borderRadius: 25,

  },

  chatInfo: {

    flex: 1,

    marginLeft: 10,

  },

  chatName: {

    fontWeight: 'bold',

  },

  chatLastMessage: {

    color: '#777',

  },

  chatTime: {

    color: '#777',

    fontSize: 12,

  },

  readIndicator: {

    width: 10,

    height: 10,

    borderRadius: 5,

    backgroundColor: 'blue',

    marginLeft: 5,

  },

  adContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#f0f0f0',

  },

  adIcon: {

    width: 40,

    height: 40,

  },

  adInfo: {

    flex: 1,

    marginLeft: 10,

  },

  adTitle: {

    fontWeight: 'bold',

  },

  adMessage: {

    color: '#777',

  },

  viewMore: {

    color: 'blue',

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    padding: 10,

    borderTopWidth: 1,

    borderTopColor: '#ccc',

  },

  navItem: {

    alignItems: 'center',

  },

  navIcon: {

    width: 24,

    height: 24,

  },

});



export default ChatsScreen;