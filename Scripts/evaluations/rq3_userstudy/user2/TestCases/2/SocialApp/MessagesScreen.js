import React, { useState } from 'react';

import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const MessagesScreen = () => {

  const navigation = useNavigation();

  const [message, setMessage] = useState('');



  const handleSend = () => {

    // Handle sending message

    setMessage('');

  };



  return (

    <SafeAreaView style={styles.container}>

      <KeyboardAvoidingView 

        behavior={Platform.OS === "ios" ? "padding" : "height"}

        style={styles.container}

      >

        <View style={styles.header}>

          <TouchableOpacity onPress={() => navigation.goBack()}>

            <Icon name="arrow-back" size={24} color="#000" />

          </TouchableOpacity>

          <View style={styles.profileInfo}>

            <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

            <View>

              <Text style={styles.name}>Hasley Junior</Text>

              <Text style={styles.status}>Online</Text>

            </View>

          </View>

          <View style={styles.headerIcons}>

            <TouchableOpacity style={styles.iconButton}>

              <Icon name="videocam-outline" size={24} color="#000" />

            </TouchableOpacity>

            <TouchableOpacity style={styles.iconButton}>

              <Icon name="call-outline" size={24} color="#000" />

            </TouchableOpacity>

          </View>

        </View>



        <ScrollView style={styles.messagesContainer}>

          <View style={styles.messageWrapper}>

            <Text style={styles.messageText}>How are you?</Text>

            <Text style={styles.messageTime}>8:43 AM</Text>

          </View>



          <View style={[styles.messageWrapper, styles.ownMessage]}>

            <Text style={[styles.messageText, styles.ownMessageText]}>

              Hi Hasley, I am good. How are you?

            </Text>

            <View style={styles.ownMessageTimeWrapper}>

              <Text style={styles.ownMessageTime}>8:43 AM</Text>

              <Icon name="checkmark-done" size={16} color="#7c3aed" />

            </View>

          </View>



          <View style={styles.messageWrapper}>

            <View style={styles.audioMessage}>

              <TouchableOpacity>

                <Icon name="play" size={24} color="#000" />

              </TouchableOpacity>

              <View style={styles.audioWaveform}>

                {/* Audio waveform representation */}

                {[...Array(20)].map((_, index) => (

                  <View key={index} style={[styles.waveformBar, { height: Math.random() * 20 + 5 }]} />

                ))}

              </View>

            </View>

          </View>



          <View style={styles.messageWrapper}>

            <Image source={require('../assets/snack-icon.png')} style={styles.messageImage} />

            <Text style={styles.messageTime}>8:43 AM</Text>

          </View>



          <View style={[styles.messageWrapper, styles.ownMessage]}>

            <Text style={[styles.messageText, styles.ownMessageText]}>

              Omg! you're so beautiful!! 😍

            </Text>

            <View style={styles.ownMessageTimeWrapper}>

              <Text style={styles.ownMessageTime}>8:43 AM</Text>

              <Icon name="checkmark-done" size={16} color="#7c3aed" />

            </View>

          </View>

        </ScrollView>



        <View style={styles.inputContainer}>

          <TouchableOpacity style={styles.attachButton}>

            <Icon name="attach" size={24} color="#7c3aed" />

          </TouchableOpacity>

          <TextInput

            style={styles.input}

            placeholder="Type here..."

            value={message}

            onChangeText={setMessage}

          />

          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>

            <Icon name="send" size={24} color="#fff" />

          </TouchableOpacity>

        </View>

      </KeyboardAvoidingView>

    </SafeAreaView>

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

    paddingHorizontal: 16,

    paddingVertical: 12,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  profileInfo: {

    flexDirection: 'row',

    alignItems: 'center',

    flex: 1,

    marginLeft: 16,

  },

  avatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 12,

  },

  name: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  status: {

    fontSize: 12,

    color: '#4CAF50',

  },

  headerIcons: {

    flexDirection: 'row',

  },

  iconButton: {

    marginLeft: 16,

  },

  messagesContainer: {

    flex: 1,

    padding: 16,

  },

  messageWrapper: {

    marginBottom: 16,

    maxWidth: '80%',

  },

  messageText: {

    backgroundColor: '#f0f0f0',

    padding: 12,

    borderRadius: 20,

    fontSize: 16,

  },

  messageTime: {

    fontSize: 12,

    color: '#888',

    marginTop: 4,

  },

  ownMessage: {

    alignSelf: 'flex-end',

  },

  ownMessageText: {

    backgroundColor: '#7c3aed',

    color: '#fff',

  },

  ownMessageTimeWrapper: {

    flexDirection: 'row',

    justifyContent: 'flex-end',

    alignItems: 'center',

    marginTop: 4,

  },

  ownMessageTime: {

    fontSize: 12,

    color: '#888',

    marginRight: 4,

  },

  audioMessage: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#f0f0f0',

    padding: 12,

    borderRadius: 20,

  },

  audioWaveform: {

    flexDirection: 'row',

    alignItems: 'flex-end',

    height: 30,

    marginLeft: 12,

  },

  waveformBar: {

    width: 3,

    backgroundColor: '#7c3aed',

    marginHorizontal: 1,

  },

  messageImage: {

    width: 200,

    height: 200,

    borderRadius: 12,

  },

  inputContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 12,

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

  },

  attachButton: {

    marginRight: 12,

  },

  input: {

    flex: 1,

    backgroundColor: '#f0f0f0',

    borderRadius: 20,

    paddingHorizontal: 16,

    paddingVertical: 8,

    fontSize: 16,

  },

  sendButton: {

    backgroundColor: '#7c3aed',

    width: 40,

    height: 40,

    borderRadius: 20,

    justifyContent: 'center',

    alignItems: 'center',

    marginLeft: 12,

  },

});



export default MessagesScreen;