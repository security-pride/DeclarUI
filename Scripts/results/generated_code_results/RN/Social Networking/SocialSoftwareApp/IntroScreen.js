import React, { useState } from 'react';

import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const Intro = () => {

  const navigation = useNavigation();

  const [message, setMessage] = useState('');



  const handleBack = () => {

    navigation.navigate('Chats');

  };



  const handlePhoneCall = () => {

    // Implement phone call functionality

  };



  const handleVideoCall = () => {

    // Implement video call functionality

  };



  const handleSendMessage = () => {

    // Implement send message functionality

  };



  const handleProfilePress = () => {

    navigation.navigate('Profile');

  };



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={handleBack}>

          <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

        </TouchableOpacity>

        <TouchableOpacity onPress={handleProfilePress} style={styles.profileContainer}>

          <Image source={require('../assets/snack-icon.png')} style={styles.profilePic} />

          <View>

            <Text style={styles.name}>Martha Craig</Text>

            <Text style={styles.subtitle}>Messenger</Text>

          </View>

        </TouchableOpacity>

        <TouchableOpacity onPress={handlePhoneCall}>

          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

        </TouchableOpacity>

        <TouchableOpacity onPress={handleVideoCall}>

          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

        </TouchableOpacity>

      </View>



      <ScrollView style={styles.chatContainer}>

        <Text style={styles.systemMessage}>You're friends on Facebook</Text>

        <Text style={styles.systemMessage}>Say hi to your new Facebook friend, Martha.</Text>

        <View style={styles.messageContainer}>

          <Image source={require('../assets/snack-icon.png')} style={styles.messagePic} />

          <View style={styles.messageContent}>

            <Text style={styles.messageText}>👋</Text>

            <Text style={styles.messageTime}>21:32</Text>

          </View>

        </View>

        <View style={[styles.messageContainer, styles.sentMessage]}>

          <View style={styles.messageContent}>

            <Text style={styles.messageText}>Hello, Jacob!</Text>

            <Text style={styles.messageTime}>16:44</Text>

          </View>

        </View>

        <View style={styles.messageContainer}>

          <Image source={require('../assets/snack-icon.png')} style={styles.messagePic} />

          <View style={styles.messageContent}>

            <Text style={styles.messageText}>How are you doing?</Text>

            <Text style={styles.messageTime}>16:44</Text>

          </View>

        </View>

      </ScrollView>



      <View style={styles.inputContainer}>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.inputIcon} />

        </TouchableOpacity>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.inputIcon} />

        </TouchableOpacity>

        <TextInput

          style={styles.input}

          placeholder="Aa"

          value={message}

          onChangeText={setMessage}

        />

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.inputIcon} />

        </TouchableOpacity>

        <TouchableOpacity onPress={handleSendMessage}>

          <Image source={require('../assets/snack-icon.png')} style={styles.inputIcon} />

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

    borderBottomColor: '#E5E5E5',

  },

  backIcon: {

    width: 24,

    height: 24,

    marginRight: 10,

  },

  profileContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    flex: 1,

  },

  profilePic: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 10,

  },

  name: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  subtitle: {

    fontSize: 12,

    color: '#888',

  },

  icon: {

    width: 24,

    height: 24,

    marginLeft: 10,

  },

  chatContainer: {

    flex: 1,

    padding: 10,

  },

  systemMessage: {

    textAlign: 'center',

    color: '#888',

    marginVertical: 10,

  },

  messageContainer: {

    flexDirection: 'row',

    marginBottom: 10,

  },

  sentMessage: {

    justifyContent: 'flex-end',

  },

  messagePic: {

    width: 30,

    height: 30,

    borderRadius: 15,

    marginRight: 10,

  },

  messageContent: {

    backgroundColor: '#F0F0F0',

    borderRadius: 20,

    padding: 10,

    maxWidth: '70%',

  },

  messageText: {

    fontSize: 16,

  },

  messageTime: {

    fontSize: 12,

    color: '#888',

    alignSelf: 'flex-end',

    marginTop: 5,

  },

  inputContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    borderTopWidth: 1,

    borderTopColor: '#E5E5E5',

  },

  inputIcon: {

    width: 24,

    height: 24,

    marginHorizontal: 5,

  },

  input: {

    flex: 1,

    height: 40,

    backgroundColor: '#F0F0F0',

    borderRadius: 20,

    paddingHorizontal: 15,

    marginHorizontal: 5,

  },

});



export default Intro;