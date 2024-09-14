import React from 'react';

import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const MessagesScreen = () => {

  const navigation = useNavigation();



  const messages = [

    { id: '1', name: 'Antonio Banderas', message: "You're welcome", time: '9:39', initials: 'AB', unread: 0, online: true },

    { id: '2', name: 'Chris Evans', message: 'Hello there?', time: '8:45', initials: 'CE', unread: 0, online: false },

    { id: '3', name: 'Scarlett Johansson', message: 'Thanks ray!', time: '8:30', initials: 'SJ', unread: 2, online: true },

    { id: '4', name: 'Billie Eilish', message: 'Okay thank you billie', time: '7:55', initials: 'BE', unread: 0, online: true },

    { id: '5', name: 'Dasha Taran', message: 'Photo', time: '6:00', initials: 'DT', unread: 2, online: false },

    { id: '6', name: 'Ilay Serah', message: 'Video', time: 'Yesterday', initials: 'IS', unread: 2, online: false },

    { id: '7', name: 'Emily Blunt', message: 'Audio', time: 'Yesterday', initials: 'EB', unread: 0, online: false },

    { id: '8', name: 'Johnny Deep', message: 'Cool!', time: 'Monday', initials: 'JD', unread: 0, online: false },

  ];



  const renderMessageItem = ({ item }) => (

    <TouchableOpacity style={styles.messageItem} onPress={() => navigation.navigate('Chat', { contact: item })}>

      <View style={styles.avatarContainer}>

        <View style={styles.avatar}>

          <Text style={styles.avatarText}>{item.initials}</Text>

        </View>

        {item.online && <View style={styles.onlineIndicator} />}

      </View>

      <View style={styles.messageContent}>

        <View style={styles.messageHeader}>

          <Text style={styles.messageName}>{item.name}</Text>

          <Text style={styles.messageTime}>{item.time}</Text>

        </View>

        <View style={styles.messageFooter}>

          <Text style={styles.messageText} numberOfLines={1}>

            {item.message.startsWith('Photo') && '📷 '}

            {item.message.startsWith('Video') && '🎥 '}

            {item.message.startsWith('Audio') && '🎵 '}

            {item.message}

          </Text>

          {item.unread > 0 && (

            <View style={styles.unreadBadge}>

              <Text style={styles.unreadText}>{item.unread}</Text>

            </View>

          )}

        </View>

      </View>

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.title}>Messages</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Search')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />

        </TouchableOpacity>

      </View>

      <FlatList

        data={messages}

        renderItem={renderMessageItem}

        keyExtractor={item => item.id}

        style={styles.messageList}

      />

      <View style={styles.tabBar}>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>

          <Image source={require('../assets/snack-icon.png')} style={[styles.tabIcon, styles.activeTabIcon]} />

          <Text style={[styles.tabText, styles.activeTabText]}>Messages</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Contacts')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Contacts</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Calls')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Calls</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Profile')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Profile</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFFFFF',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 16,

  },

  title: {

    fontSize: 34,

    fontWeight: 'bold',

  },

  searchIcon: {

    width: 24,

    height: 24,

  },

  messageList: {

    flex: 1,

  },

  messageItem: {

    flexDirection: 'row',

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#EEEEEE',

  },

  avatarContainer: {

    position: 'relative',

    marginRight: 16,

  },

  avatar: {

    width: 50,

    height: 50,

    borderRadius: 25,

    backgroundColor: '#EEEEEE',

    justifyContent: 'center',

    alignItems: 'center',

  },

  avatarText: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  onlineIndicator: {

    position: 'absolute',

    right: 0,

    bottom: 0,

    width: 12,

    height: 12,

    borderRadius: 6,

    backgroundColor: '#4CAF50',

    borderWidth: 2,

    borderColor: '#FFFFFF',

  },

  messageContent: {

    flex: 1,

  },

  messageHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 4,

  },

  messageName: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  messageTime: {

    fontSize: 14,

    color: '#999999',

  },

  messageFooter: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

  },

  messageText: {

    fontSize: 14,

    color: '#666666',

    flex: 1,

  },

  unreadBadge: {

    backgroundColor: '#000000',

    borderRadius: 10,

    paddingHorizontal: 6,

    paddingVertical: 2,

  },

  unreadText: {

    color: '#FFFFFF',

    fontSize: 12,

  },

  tabBar: {

    flexDirection: 'row',

    borderTopWidth: 1,

    borderTopColor: '#EEEEEE',

    paddingVertical: 8,

  },

  tabItem: {

    flex: 1,

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

    marginBottom: 4,

  },

  tabText: {

    fontSize: 12,

    color: '#999999',

  },

  activeTab: {

    borderTopWidth: 2,

    borderTopColor: '#000000',

  },

  activeTabIcon: {

    tintColor: '#000000',

  },

  activeTabText: {

    color: '#000000',

  },

});



export default MessagesScreen;