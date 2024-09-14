import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const messages = [
  {
    id: '1',
    text: 'Hi Hasley, I am good. How are you?',
    time: '8:43 AM',
    isUser: true,
    statusIcon: 'checkmark-done-outline',
  },
  {
    id: '2',
    audio: true,
    time: '8:43 AM',
    isUser: false,
  },
  {
    id: '3',
    image: '../assets/snack-icon.png',
    time: '8:43 AM',
    isUser: false,
  },
  {
    id: '4',
    text: 'Omg! You\'re so beautiful! 😍',
    time: '8:43 AM',
    isUser: true,
    statusIcon: 'checkmark-done-outline',
  },
];

const MessagesScreen = () => {
  const renderMessageItem = ({ item }) => {
    return (
      <View
        style={[
          styles.messageContainer,
          item.isUser ? styles.userMessage : styles.friendMessage,
        ]}
      >
        {item.text && (
          <View style={styles.textBubble}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        {item.audio && (
          <View style={styles.audioBubble}>
            <Icon name="play" size={20} color="#000" />
            <View style={styles.audioWave}></View>
          </View>
        )}
        {item.image && (
          <Image source={require('../assets/snack-icon.png')} style={styles.imageBubble} />
        )}
        <Text style={styles.timeText}>{item.time}</Text>
        {item.isUser && item.statusIcon && (
          <Icon name={item.statusIcon} size={15} color="#A9A9A9" />
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessageItem}
        keyExtractor={item => item.id}
      />
      <View style={styles.inputContainer}>
        <Icon name="happy-outline" size={25} color="#A9A9A9" />
        <TextInput
          style={styles.textInput}
          placeholder="Type here..."
          placeholderTextColor="#A9A9A9"
        />
        <TouchableOpacity>
          <Icon name="send" size={25} color="#A9A9A9" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
  },
  friendMessage: {
    alignSelf: 'flex-start',
  },
  textBubble: {
    maxWidth: '70%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#E1FFC7',
  },
  messageText: {
    fontSize: 16,
  },
  audioBubble: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#F4F4F4',
    marginVertical: 5,
  },
  audioWave: {
    width: 90,
    height: 2,
    backgroundColor: '#C4C4C4',
    marginHorizontal: 5,
  },
  imageBubble: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginVertical: 5,
  },
  timeText: {
    marginLeft: 5,
    fontSize: 12,
    color: '#A9A9A9',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#EDEDED',
    backgroundColor: '#FFF',
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#F4F4F4',
    marginHorizontal: 10,
  },
});

export default MessagesScreen;