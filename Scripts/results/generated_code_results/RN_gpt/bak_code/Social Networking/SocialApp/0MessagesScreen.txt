import React from 'react';
import { View, Text, Image, Button, TextInput, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MessageBubble = ({ text, sender, time }) => (
  <View style={[styles.messageBubble, sender === 'user' ? styles.userBubble : styles.otherBubble]}>
    <Text style={styles.messageText}>{text}</Text>
    <Text style={styles.timestamp}>{time}</Text>
  </View>
);

const MessagesScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={24} style={styles.backArrow} />
        <Image source={require('../assets/snack-icon.png')} style={styles.profilePicture} />
        <View style={styles.headerText}>
          <Text style={styles.userName}>Hasley Junior</Text>
          <Text style={styles.userStatus}>Online</Text>
        </View>
        <Icon name="videocam" size={24} style={styles.callButton} />
        <Icon name="phone" size={24} style={styles.callButton} />
      </View>
      <View style={styles.messagesContainer}>
        <MessageBubble text="How are you?" sender="other" time="8:43 AM" />
        <MessageBubble text="Hi Hasley, I am good. How are you?" sender="user" time="8:43 AM" />
        <View style={styles.audioMessage}>
          <Button title="Play" onPress={() => {}} />
          <Icon name="multitrack-audio" size={24} />
        </View>
        <Text style={styles.timestamp}>8:43 AM</Text>
        <ImageBackground source={require('../assets/snack-icon.png')} style={styles.imageMessage}>
          <Icon name="play-circle-outline" size={34} style={styles.playIcon} />
        </ImageBackground>
        <MessageBubble text="Omg! you're so beautiful!!" sender="user" time="8:43 AM" />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Type here..." />
        <Button title="Send" onPress={() => {}} />
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
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backArrow: {
    marginRight: 10,
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  headerText: {
    flex: 1,
  },
  userName: {
    fontWeight: 'bold',
  },
  userStatus: {
    color: 'gray',
  },
  callButton: {
    marginLeft: 10,
  },
  messagesContainer: {
    flex: 1,
    padding: 10,
  },
  messageBubble: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
    maxWidth: '75%',
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#e0e0e0',
  },
  otherBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#f0f0f0',
  },
  messageText: {
    fontSize: 16,
  },
  timestamp: {
    fontSize: 12,
    color: 'gray',
    alignSelf: 'flex-end',
  },
  audioMessage: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  imageMessage: {
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  playIcon: {
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  textInput: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
  },
});

export default MessagesScreen;