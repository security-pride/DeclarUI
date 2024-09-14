import React from 'react';

import { View, Text, StyleSheet, Image, TextInput, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const messages = [

  { id: '1', name: 'Jonathan D. Dye', message: 'Hello', time: 'Now', avatar: '../assets/snack-icon.png' },

  { id: '2', name: 'Charles L. Wenner', message: 'Its need urgently', time: '10:00 am', avatar: '../assets/snack-icon.png' },

  { id: '3', name: 'Luther K. Cusack', message: 'Check this design', time: '04', avatar: '../assets/snack-icon.png', attachmentIcon: '../assets/snack-icon.png' },

  { id: '4', name: 'Devignedge UI Design T.', message: 'Hello, Manik are you there?', time: 'Yesterday', avatar: '../assets/snack-icon.png', groupCount: '+3' },

  { id: '5', name: 'Gloria G. Johnson', message: 'Hi Nik', time: '3 day', avatar: '../assets/snack-icon.png' },

  { id: '6', name: 'Madge T. Crews', message: 'Check it', time: '04 Sep', avatar: '../assets/snack-icon.png' },

  { id: '7', name: 'Rosemary J. Strickland', message: '', time: '03 Sep', avatar: '../assets/snack-icon.png' },

];



const MessageItem = ({ item }) => (

  <TouchableOpacity style={styles.messageItem}>

    <View style={styles.avatarContainer}>

      <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

      {item.groupCount && (

        <View style={styles.groupCount}>

          <Text style={styles.groupCountText}>{item.groupCount}</Text>

        </View>

      )}

    </View>

    <View style={styles.messageContent}>

      <View style={styles.messageHeader}>

        <Text style={styles.name}>{item.name}</Text>

        <Text style={styles.time}>{item.time}</Text>

      </View>

      <View style={styles.messageBody}>

        {item.attachmentIcon ? (

          <Image source={require('../assets/snack-icon.png')} style={styles.attachmentIcon} />

        ) : null}

        <Text style={styles.message} numberOfLines={1}>{item.message}</Text>

      </View>

    </View>

  </TouchableOpacity>

);



const MessageScreen = () => {

  const navigation = useNavigation();



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.title}>Message</Text>

        <Image source={require('../assets/snack-icon.png')} style={styles.profilePic} />

      </View>



      <View style={styles.searchContainer}>

        <TextInput

          style={styles.searchInput}

          placeholder="Search ..."

          placeholderTextColor="#A0A0A0"

        />

        <TouchableOpacity style={styles.searchButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />

        </TouchableOpacity>

      </View>



      <FlatList

        data={messages}

        renderItem={({ item }) => <MessageItem item={item} />}

        keyExtractor={item => item.id}

        showsVerticalScrollIndicator={false}

      />



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.addButton}>

          <Text style={styles.addButtonText}>+</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F0F0F5',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 20,

    paddingTop: 20,

    paddingBottom: 10,

  },

  title: {

    fontSize: 28,

    fontWeight: 'bold',

    color: '#1E1E1E',

  },

  profilePic: {

    width: 40,

    height: 40,

    borderRadius: 20,

  },

  searchContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: 'white',

    borderRadius: 25,

    marginHorizontal: 20,

    marginVertical: 10,

    paddingLeft: 15,

  },

  searchInput: {

    flex: 1,

    height: 50,

    fontSize: 16,

  },

  searchButton: {

    padding: 10,

  },

  searchIcon: {

    width: 20,

    height: 20,

    tintColor: '#A0A0A0',

  },

  messageItem: {

    flexDirection: 'row',

    backgroundColor: 'white',

    borderRadius: 15,

    marginHorizontal: 20,

    marginVertical: 5,

    padding: 15,

  },

  avatarContainer: {

    position: 'relative',

  },

  avatar: {

    width: 50,

    height: 50,

    borderRadius: 25,

  },

  groupCount: {

    position: 'absolute',

    right: -5,

    bottom: -5,

    backgroundColor: '#6A5ACD',

    borderRadius: 10,

    width: 20,

    height: 20,

    justifyContent: 'center',

    alignItems: 'center',

  },

  groupCountText: {

    color: 'white',

    fontSize: 12,

    fontWeight: 'bold',

  },

  messageContent: {

    flex: 1,

    marginLeft: 15,

  },

  messageHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 5,

  },

  name: {

    fontSize: 16,

    fontWeight: 'bold',

    color: '#1E1E1E',

  },

  time: {

    fontSize: 12,

    color: '#A0A0A0',

  },

  messageBody: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  attachmentIcon: {

    width: 20,

    height: 20,

    marginRight: 5,

  },

  message: {

    fontSize: 14,

    color: '#707070',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    backgroundColor: '#6A5ACD',

    paddingVertical: 10,

    borderTopLeftRadius: 20,

    borderTopRightRadius: 20,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

    tintColor: '#FFFFFF',

  },

  addButton: {

    backgroundColor: '#FF6B6B',

    width: 50,

    height: 50,

    borderRadius: 25,

    justifyContent: 'center',

    alignItems: 'center',

    elevation: 5,

  },

  addButtonText: {

    fontSize: 30,

    color: 'white',

  },

});



export default MessageScreen;