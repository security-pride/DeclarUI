import React from 'react';

import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, TextInput, SafeAreaView, StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const MOCK_DATA = [

  { id: '1', name: 'Martin Randolph', message: 'You: What's man!', time: '9:40 AM', avatar: '../assets/snack-icon.png', isOnline: true },

  { id: '2', name: 'Andrew Parker', message: 'You: Ok, thanks!', time: '9:25 AM', avatar: '../assets/snack-icon.png', isOnline: false },

  { id: '3', name: 'Karen Castillo', message: 'You: Ok, See you in To...', time: 'Fri', avatar: '../assets/snack-icon.png', isOnline: true },

  { id: '4', name: 'Maisy Humphrey', message: 'Have a good day, Maisy!', time: 'Fri', avatar: '../assets/snack-icon.png', isOnline: false },

  { id: '5', name: 'Joshua Lawrence', message: 'The business plan loo...', time: 'Thu', avatar: '../assets/snack-icon.png', isOnline: true },

];



const STORY_DATA = [

  { id: 'story', name: 'Your story', avatar: '../assets/snack-icon.png' },

  { id: '1', name: 'Joshua', avatar: '../assets/snack-icon.png', isOnline: true },

  { id: '2', name: 'Martin', avatar: '../assets/snack-icon.png', isOnline: true },

  { id: '3', name: 'Karen', avatar: '../assets/snack-icon.png', isOnline: true },

  { id: '4', name: 'Marth', avatar: '../assets/snack-icon.png', isOnline: true },

];



const ChatsScreen = () => {

  const navigation = useNavigation();



  const renderChatItem = ({ item }) => (

    <TouchableOpacity style={styles.chatItem}>

      <View style={styles.avatarContainer}>

        <Image source={item.avatar} style={styles.avatar} />

        {item.isOnline && <View style={styles.onlineIndicator} />}

      </View>

      <View style={styles.chatContent}>

        <Text style={styles.chatName}>{item.name}</Text>

        <Text style={styles.chatMessage} numberOfLines={1}>{item.message}</Text>

      </View>

      <Text style={styles.chatTime}>{item.time}</Text>

    </TouchableOpacity>

  );



  const renderStoryItem = ({ item }) => (

    <TouchableOpacity style={styles.storyItem}>

      <View style={styles.storyAvatarContainer}>

        <Image source={item.avatar} style={styles.storyAvatar} />

        {item.isOnline && <View style={styles.storyOnlineIndicator} />}

      </View>

      <Text style={styles.storyName}>{item.name}</Text>

    </TouchableOpacity>

  );



  return (

    <SafeAreaView style={styles.container}>

      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>

        <Image source="../assets/snack-icon.png" style={styles.headerAvatar} />

        <Text style={styles.headerTitle}>Chats</Text>

        <TouchableOpacity onPress={() => navigation.navigate('NewMessage')}>

          <Image source="../assets/snack-icon.png" style={styles.headerIcon} />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('NewMessage')}>

          <Image source="../assets/snack-icon.png" style={styles.headerIcon} />

        </TouchableOpacity>

      </View>

      <View style={styles.searchContainer}>

        <Image source="../assets/snack-icon.png" style={styles.searchIcon} />

        <TextInput

          style={styles.searchInput}

          placeholder="Search"

          placeholderTextColor="#8E8E93"

        />

      </View>

      <FlatList

        data={STORY_DATA}

        renderItem={renderStoryItem}

        keyExtractor={item => item.id}

        horizontal

        showsHorizontalScrollIndicator={false}

        style={styles.storyList}

      />

      <FlatList

        data={MOCK_DATA}

        renderItem={renderChatItem}

        keyExtractor={item => item.id}

        style={styles.chatList}

      />

      <View style={styles.adContainer}>

        <Image source="../assets/snack-icon.png" style={styles.adIcon} />

        <View style={styles.adContent}>

          <Text style={styles.adTitle}>Pixsellz</Text>

          <Text style={styles.adDescription}>Make design process easier...</Text>

        </View>

        <TouchableOpacity style={styles.adButton}>

          <Text style={styles.adButtonText}>View More</Text>

        </TouchableOpacity>

      </View>

      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem}>

          <Image source="../assets/snack-icon.png" style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source="../assets/snack-icon.png" style={styles.tabIcon} />

          <View style={styles.tabBadge}>

            <Text style={styles.tabBadgeText}>2</Text>

          </View>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source="../assets/snack-icon.png" style={styles.tabIcon} />

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFFFFF',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 16,

    paddingTop: 10,

    paddingBottom: 10,

  },

  headerAvatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

  },

  headerTitle: {

    flex: 1,

    fontSize: 24,

    fontWeight: 'bold',

    marginLeft: 16,

  },

  headerIcon: {

    width: 24,

    height: 24,

    marginLeft: 16,

  },

  searchContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#F2F2F7',

    borderRadius: 10,

    marginHorizontal: 16,

    paddingHorizontal: 8,

    marginBottom: 16,

  },

  searchIcon: {

    width: 20,

    height: 20,

    marginRight: 8,

  },

  searchInput: {

    flex: 1,

    height: 36,

    fontSize: 17,

  },

  storyList: {

    marginBottom: 16,

  },

  storyItem: {

    alignItems: 'center',

    marginRight: 16,

  },

  storyAvatarContainer: {

    position: 'relative',

  },

  storyAvatar: {

    width: 60,

    height: 60,

    borderRadius: 30,

  },

  storyOnlineIndicator: {

    position: 'absolute',

    right: 0,

    bottom: 0,

    width: 14,

    height: 14,

    borderRadius: 7,

    backgroundColor: '#4CD964',

    borderWidth: 2,

    borderColor: '#FFFFFF',

  },

  storyName: {

    fontSize: 12,

    marginTop: 4,

  },

  chatList: {

    flex: 1,

  },

  chatItem: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 16,

    paddingVertical: 8,

  },

  avatarContainer: {

    position: 'relative',

  },

  avatar: {

    width: 50,

    height: 50,

    borderRadius: 25,

  },

  onlineIndicator: {

    position: 'absolute',

    right: 0,

    bottom: 0,

    width: 14,

    height: 14,

    borderRadius: 7,

    backgroundColor: '#4CD964',

    borderWidth: 2,

    borderColor: '#FFFFFF',

  },

  chatContent: {

    flex: 1,

    marginLeft: 12,

  },

  chatName: {

    fontSize: 17,

    fontWeight: '600',

  },

  chatMessage: {

    fontSize: 15,

    color: '#8E8E93',

  },

  chatTime: {

    fontSize: 13,

    color: '#8E8E93',

  },

  adContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#F2F2F7',

    marginHorizontal: 16,

    marginVertical: 8,

    padding: 12,

    borderRadius: 10,

  },

  adIcon: {

    width: 40,

    height: 40,

    marginRight: 12,

  },

  adContent: {

    flex: 1,

  },

  adTitle: {

    fontSize: 15,

    fontWeight: '600',

  },

  adDescription: {

    fontSize: 13,

    color: '#8E8E93',

  },

  adButton: {

    backgroundColor: '#007AFF',

    paddingHorizontal: 12,

    paddingVertical: 6,

    borderRadius: 16,

  },

  adButtonText: {

    color: '#FFFFFF',

    fontSize: 13,

    fontWeight: '600',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#E5E5EA',

    paddingVertical: 8,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

  },

  tabBadge: {

    position: 'absolute',

    top: -4,

    right: -4,

    backgroundColor: '#FF3B30',

    borderRadius: 8,

    minWidth: 16,

    height: 16,

    justifyContent: 'center',

    alignItems: 'center',

  },

  tabBadgeText: {

    color: '#FFFFFF',

    fontSize: 11,

    fontWeight: '600',

  },

});



export default ChatsScreen;