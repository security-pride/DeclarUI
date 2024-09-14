import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ChatScreen = ({ navigation }) => {
  const messages = [
    { text: 'Hi! Your last shot was really good!', time: '9:30', sender: 'user' },
    { type: 'audio', duration: '1.35', time: '9:32', sender: 'contact' },
    { text: 'What tools do you use?', time: '9:34', sender: 'user' },
    { text: 'Figma, for prototype i use Principle', time: '9:35', sender: 'contact' },
    { text: 'Cool! Your designs inspire me a lot bro. Keep posting!', time: '9:36', sender: 'user' },
    { text: 'Thank u so much Antonio! Glad to hear that :)', time: '9:37', sender: 'contact' },
    { text: "You're welcome!", time: '9:39', sender: 'user' }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} />
        </TouchableOpacity>
        <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.contactName}>Antonio Banderas</Text>
          <Text style={styles.contactStatus}>Online</Text>
        </TouchableOpacity>
        <Icon name="more-vert" size={24} />
      </View>
      
      <View style={styles.messages}>
        {messages.map((msg, index) => (
          <View key={index} style={styles.messageBubble}>
            {msg.type === 'audio' ? (
              <View style={styles.voiceMessage}>
                <Icon name="audiotrack" size={24} />
                <Text>{msg.duration}</Text>
              </View>
            ) : (
              <Text style={styles.messageText}>{msg.text}</Text>
            )}
            <Text style={styles.timestamp}>{msg.time}</Text>
          </View>
        ))}
      </View>

      <View style={styles.inputField}>
        <TouchableOpacity>
          <Icon name="insert-emoticon" size={24} />
        </TouchableOpacity>
        <Text style={styles.placeholder}>Type a message</Text>
        <TouchableOpacity>
          <Icon name="attach-file" size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="add" size={24} />
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
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  contactName: {
    fontWeight: 'bold',
  },
  contactStatus: {
    color: 'green',
  },
  messages: {
    flex: 1,
    padding: 10,
  },
  messageBubble: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
  },
  messageText: {
    marginBottom: 5,
  },
  timestamp: {
    fontSize: 10,
    color: '#999',
    textAlign: 'right',
  },
  voiceMessage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputField: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  placeholder: {
    flex: 1,
    marginLeft: 10,
    color: '#999',
  },
});

export default ChatScreen;