import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const conversations = [
  {
    id: 1,
    user: 'Ellen',
    message: 'Hey there',
    translation: 'Xin chào',
    avatar: '../assets/snack-icon.png',
  },
  {
    id: 2,
    user: 'Taxi Driver',
    message: 'Hey, where are you going today?',
    translation: 'Chào cô, hôm nay cô sẽ đi đâu',
    avatar: '../assets/snack-icon.png',
  },
  {
    id: 3,
    user: 'Ellen',
    message: '25 Gerhold Valley, please.',
    translation: 'Cho tôi tới 25 Gerhold Valley.',
    avatar: '../assets/snack-icon.png',
  },
  {
    id: 4,
    user: 'Taxi Driver',
    message: 'No problem.',
    translation: 'Không vấn đề.',
    avatar: '../assets/snack-icon.png',
  },
];

const ConversationScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {conversations.map((conversation) => (
        <View key={conversation.id} style={styles.conversationBox}>
          <Text style={styles.messageText}>{conversation.message}</Text>
          <Text style={styles.translationText}>{conversation.translation}</Text>
          <View style={styles.row}>
            <Image source={{ uri: conversation.avatar }} style={styles.avatar} />
            <Text style={styles.userText}>{conversation.user}</Text>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="volume-high-outline" size={24} color="#333" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.repeatButton}>
            <Icon name="mic-outline" size={16} color="#fff" />
            <Text style={styles.buttonText}>REPEAT</Text>
          </TouchableOpacity>
        </View>
      ))}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.listenButton}>
          <Text style={styles.buttonText}>LISTEN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.speakButton}>
          <Text style={styles.buttonText}>SPEAKING</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  conversationBox: {
    backgroundColor: '#f8f9fa',
    margin: 10,
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  messageText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  translationText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  userText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
    marginLeft: 10,
  },
  iconButton: {
    padding: 5,
  },
  repeatButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0058a3',
    borderRadius: 20,
    paddingVertical: 8,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 5,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  listenButton: {
    backgroundColor: '#34c759',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    alignItems: 'center',
  },
  speakButton: {
    backgroundColor: '#007aff',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    alignItems: 'center',
  },
});

export default ConversationScreen;