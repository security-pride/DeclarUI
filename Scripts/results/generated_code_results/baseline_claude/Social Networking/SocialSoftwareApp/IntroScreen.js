import React, { useState } from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const IntroScreen = () => {

  const navigation = useNavigation();

  const [message, setMessage] = useState('');



  const handleSend = () => {

    // Handle sending the message

    console.log('Message sent:', message);

    setMessage('');

  };



  return (

    <SafeAreaView style={styles.container}>

      <StatusBar barStyle="dark-content" />

      <KeyboardAvoidingView 

        behavior={Platform.OS === "ios" ? "padding" : "height"}

        style={styles.keyboardAvoidingView}

      >

        <View style={styles.header}>

          <TouchableOpacity onPress={() => navigation.goBack()}>

            <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

          </TouchableOpacity>

          <View style={styles.headerContent}>

            <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

            <View>

              <Text style={styles.name}>Martha Craig</Text>

              <Text style={styles.subtitle}>Messenger</Text>

            </View>

          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Call')}>

            <Image source={require('../assets/snack-icon.png')} style={styles.callIcon} />

          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('VideoCall')}>

            <Image source={require('../assets/snack-icon.png')} style={styles.videoIcon} />

          </TouchableOpacity>

        </View>



        <View style={styles.content}>

          <Image source={require('../assets/snack-icon.png')} style={styles.largeAvatar} />

          <Text style={styles.largeName}>Martha Craig</Text>

          <Text style={styles.friendStatus}>You're friends on Facebook</Text>

          <View style={styles.mutualFriends}>

            <Image source={require('../assets/snack-icon.png')} style={styles.mutualFriendAvatar} />

            <Image source={require('../assets/snack-icon.png')} style={[styles.mutualFriendAvatar, styles.overlappingAvatar]} />

          </View>

          <Text style={styles.mutualFriendText}>Say hi to your new Facebook friend, Martha.</Text>

          <View style={styles.timeStamp}>

            <Text style={styles.timeText}>21:32</Text>

          </View>

          <Image source={require('../assets/snack-icon.png')} style={styles.waveEmoji} />

          <View style={styles.messageContainer}>

            <View style={styles.messageBubble}>

              <Text style={styles.messageText}>Hello, Jacob!</Text>

            </View>

            <View style={styles.messageBubble}>

              <Text style={styles.messageText}>How are you doing?</Text>

            </View>

          </View>

        </View>



        <View style={styles.inputContainer}>

          <TouchableOpacity style={styles.inputButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.inputIcon} />

          </TouchableOpacity>

          <TouchableOpacity style={styles.inputButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.inputIcon} />

          </TouchableOpacity>

          <TouchableOpacity style={styles.inputButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.inputIcon} />

          </TouchableOpacity>

          <TouchableOpacity style={styles.inputButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.inputIcon} />

          </TouchableOpacity>

          <TextInput

            style={styles.input}

            placeholder="Aa"

            value={message}

            onChangeText={setMessage}

          />

          <TouchableOpacity style={styles.inputButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.inputIcon} />

          </TouchableOpacity>

          <TouchableOpacity style={styles.inputButton} onPress={handleSend}>

            <Image source={require('../assets/snack-icon.png')} style={styles.inputIcon} />

          </TouchableOpacity>

        </View>

      </KeyboardAvoidingView>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFFFFF',

  },

  keyboardAvoidingView: {

    flex: 1,

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 10,

    paddingVertical: 10,

    borderBottomWidth: 1,

    borderBottomColor: '#E5E5EA',

  },

  backIcon: {

    width: 24,

    height: 24,

    marginRight: 10,

  },

  headerContent: {

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

  name: {

    fontSize: 17,

    fontWeight: 'bold',

  },

  subtitle: {

    fontSize: 13,

    color: '#8E8E93',

  },

  callIcon: {

    width: 24,

    height: 24,

    marginLeft: 15,

  },

  videoIcon: {

    width: 24,

    height: 24,

    marginLeft: 15,

  },

  content: {

    flex: 1,

    alignItems: 'center',

    paddingTop: 20,

  },

  largeAvatar: {

    width: 100,

    height: 100,

    borderRadius: 50,

  },

  largeName: {

    fontSize: 22,

    fontWeight: 'bold',

    marginTop: 10,

  },

  friendStatus: {

    fontSize: 15,

    color: '#8E8E93',

    marginTop: 5,

  },

  mutualFriends: {

    flexDirection: 'row',

    marginTop: 10,

  },

  mutualFriendAvatar: {

    width: 30,

    height: 30,

    borderRadius: 15,

  },

  overlappingAvatar: {

    marginLeft: -10,

  },

  mutualFriendText: {

    fontSize: 13,

    color: '#8E8E93',

    marginTop: 5,

  },

  timeStamp: {

    marginTop: 20,

  },

  timeText: {

    fontSize: 12,

    color: '#8E8E93',

  },

  waveEmoji: {

    width: 50,

    height: 50,

    marginTop: 10,

  },

  messageContainer: {

    alignSelf: 'flex-start',

    marginLeft: 20,

    marginTop: 20,

  },

  messageBubble: {

    backgroundColor: '#F2F2F7',

    borderRadius: 18,

    paddingHorizontal: 12,

    paddingVertical: 8,

    marginBottom: 5,

  },

  messageText: {

    fontSize: 15,

  },

  inputContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 10,

    paddingVertical: 10,

    borderTopWidth: 1,

    borderTopColor: '#E5E5EA',

  },

  inputButton: {

    padding: 5,

  },

  inputIcon: {

    width: 24,

    height: 24,

  },

  input: {

    flex: 1,

    height: 36,

    backgroundColor: '#F2F2F7',

    borderRadius: 18,

    paddingHorizontal: 12,

    marginHorizontal: 5,

    fontSize: 15,

  },

});



export default IntroScreen;