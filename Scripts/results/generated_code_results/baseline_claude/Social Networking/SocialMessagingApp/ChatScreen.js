import React from 'react';

import { View, Text, Image, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const ChatScreen = () => {

  const navigation = useNavigation();



  const messages = [

    { id: '1', text: "Hi! Your last shot was really good!", time: '9:30', sender: 'user' },

    { id: '2', audio: true, duration: '1:35', time: '9:32', sender: 'other' },

    { id: '3', text: "What tools do you use?", time: '9:34', sender: 'user' },

    { id: '4', text: "Figma, for prototype i use Principle", time: '9:35', sender: 'other' },

    { id: '5', text: "Cool! Your designs inspire me a lot bro. Keep posting! 🙌", time: '9:36', sender: 'user' },

    { id: '6', text: "Thank u so much Antonio! Glad to hear that :)", time: '9:37', sender: 'other' },

    { id: '7', text: "You're welcome!", time: '9:39', sender: 'user' },

  ];



  const renderMessage = ({ item }) => (

    <View style={[styles.messageContainer, item.sender === 'user' ? styles.userMessage : styles.otherMessage]}>

      {item.audio ? (

        <View style={styles.audioMessage}>

          <View style={styles.audioWaveform}></View>

          <Text style={styles.audioDuration}>{item.duration}</Text>

        </View>

      ) : (

        <Text style={styles.messageText}>{item.text}</Text>

      )}

      <Text style={styles.messageTime}>{item.time}</Text>

    </View>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

        </TouchableOpacity>

        <View style={styles.userInfo}>

          <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

          <View>

            <Text style={styles.userName}>Antonio Banderas</Text>

            <Text style={styles.userStatus}>Online</Text>

          </View>

        </View>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.moreIcon} />

        </TouchableOpacity>

      </View>

      

      <FlatList

        data={messages}

        renderItem={renderMessage}

        keyExtractor={item => item.id}

        contentContainerStyle={styles.messageList}

      />

      

      <View style={styles.inputContainer}>

        <TextInput

          style={styles.input}

          placeholder="Type a message"

          placeholderTextColor="#999"

        />

        <TouchableOpacity style={styles.sendButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.sendIcon} />

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

    alignItems: 'center',

    padding: 10,

    borderBottomWidth: 1,

    borderBottomColor: '#EEEEEE',

  },

  backIcon: {

    width: 24,

    height: 24,

    marginRight: 10,

  },

  userInfo: {

    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',

  },

  avatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 10,

  },

  userName: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  userStatus: {

    fontSize: 12,

    color: '#4CAF50',

  },

  moreIcon: {

    width: 24,

    height: 24,

  },

  messageList: {

    padding: 10,

  },

  messageContainer: {

    maxWidth: '80%',

    marginVertical: 5,

    padding: 10,

    borderRadius: 20,

  },

  userMessage: {

    alignSelf: 'flex-end',

    backgroundColor: '#DCF8C6',

  },

  otherMessage: {

    alignSelf: 'flex-start',

    backgroundColor: '#ECECEC',

  },

  messageText: {

    fontSize: 16,

  },

  messageTime: {

    fontSize: 12,

    color: '#999',

    alignSelf: 'flex-end',

    marginTop: 5,

  },

  audioMessage: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  audioWaveform: {

    width: 100,

    height: 30,

    backgroundColor: '#999',

    borderRadius: 15,

  },

  audioDuration: {

    marginLeft: 10,

    fontSize: 12,

    color: '#999',

  },

  inputContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    borderTopWidth: 1,

    borderTopColor: '#EEEEEE',

  },

  input: {

    flex: 1,

    height: 40,

    backgroundColor: '#F0F0F0',

    borderRadius: 20,

    paddingHorizontal: 15,

    marginRight: 10,

  },

  sendButton: {

    width: 40,

    height: 40,

    borderRadius: 20,

    backgroundColor: '#075E54',

    justifyContent: 'center',

    alignItems: 'center',

  },

  sendIcon: {

    width: 20,

    height: 20,

    tintColor: '#FFFFFF',

  },

});



export default ChatScreen;