import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const messages = [
  { id: '1', time: '9:30', content: 'Hi! Your last shot was really good!' },
  { id: '2', time: '9:32', content: 'audio', type: 'audio' },
  { id: '3', time: '9:34', content: 'What tools do you use?' },
  { id: '4', time: '9:35', content: 'Figma, for prototype i use Principle' },
  { id: '5', time: '9:36', content: 'Cool! Your designs inspire me a lot bro. Keep posting!' },
  { id: '6', time: '9:37', content: 'Thank u so much Antonio! Glad to hear that :)' },
  { id: '7', time: '9:39', content: 'You’re welcome!' },
];

const ChatScreen = () => {
  const renderMessageItem = ({ item }) => {
    if (item.type === 'audio') {
      return (
        <View style={styles.audioMessage}>
          <Icon name="waveform" size={20} color="#555" />
          <Text style={styles.audioDuration}>1.35</Text>
          <Text style={styles.timeText}>{item.time}</Text>
        </View>
      );
    }
    return (
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>{item.content}</Text>
        <Text style={styles.timeText}>{item.time}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.headerInfo}>
          <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
          <View>
            <Text style={styles.headerTitle}>Antonio Banderas</Text>
            <Text style={styles.statusText}>Online</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Icon name="dots-vertical" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <Text style={styles.todayText}>Today</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessageItem}
        style={styles.messageList}
      />
      <View style={styles.inputContainer}>
        <TouchableOpacity>
          <Icon name="emoticon-outline" size={24} color="#777" />
        </TouchableOpacity>
        <TextInput style={styles.textInput} placeholder="Type a message" />
        <TouchableOpacity>
          <Icon name="attachment" size={24} color="#777" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="plus" size={24} color="#777" />
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
    borderBottomColor: '#ddd',
  },
  headerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginLeft: 10,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statusText: {
    color: 'green',
  },
  todayText: {
    textAlign: 'center',
    marginVertical: 10,
    color: '#777',
  },
  messageList: {
    paddingHorizontal: 10,
  },
  messageContainer: {
    marginVertical: 5,
  },
  messageText: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 2,
  },
  timeText: {
    fontSize: 10,
    color: '#777',
    alignSelf: 'flex-end',
  },
  audioMessage: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  audioDuration: {
    marginLeft: 5,
    color: '#555',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    padding: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
});

export default ChatScreen;