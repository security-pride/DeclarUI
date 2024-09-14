import React, { useState } from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const ConversationScreen = ({ navigation }) => {

  const [currentSpeaker, setCurrentSpeaker] = useState(null);



  const conversation = [

    { speaker: 'Ellen', text: 'Hey there', translation: 'Xin chào' },

    { speaker: 'Taxi Driver', text: 'Hey,where are you going today?', translation: 'Chào cô, hôm nay cô sẽ đi đâu' },

    { speaker: 'Ellen', text: '25 Gerhold Valley, please.', translation: 'Cho tôi tới 25 Gerhold Valley.' },

    { speaker: 'Taxi Driver', text: 'No problem.', translation: 'Không vấn đề.' },

  ];



  const handleRepeat = (index) => {

    setCurrentSpeaker(index);

    // Implement audio playback logic here

  };



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Icon name="arrow-back" size={24} color="#000" />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>When taking a taxi</Text>

      </View>

      <ScrollView style={styles.conversationContainer}>

        {conversation.map((item, index) => (

          <View key={index} style={styles.messageContainer}>

            <View style={styles.avatarContainer}>

              <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

              <Text style={styles.speakerName}>{item.speaker}</Text>

            </View>

            <View style={styles.textContainer}>

              <Text style={styles.messageText}>{item.text}</Text>

              <Text style={styles.translationText}>{item.translation}</Text>

            </View>

            <TouchableOpacity onPress={() => handleRepeat(index)} style={styles.repeatButton}>

              <Icon name="replay" size={24} color="#007AFF" />

            </TouchableOpacity>

          </View>

        ))}

      </ScrollView>

      <View style={styles.controlsContainer}>

        <TouchableOpacity style={styles.controlButton}>

          <Icon name="headset" size={24} color="#FFF" />

          <Text style={styles.controlText}>LISTEN</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.controlButton, styles.speakingButton]}>

          <Icon name="mic" size={24} color="#FFF" />

          <Text style={styles.controlText}>SPEAKING</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F5F5F5',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    backgroundColor: '#FFF',

    borderBottomWidth: 1,

    borderBottomColor: '#E0E0E0',

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginLeft: 16,

  },

  conversationContainer: {

    flex: 1,

    padding: 16,

  },

  messageContainer: {

    flexDirection: 'row',

    marginBottom: 16,

  },

  avatarContainer: {

    alignItems: 'center',

    marginRight: 12,

  },

  avatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

  },

  speakerName: {

    fontSize: 12,

    marginTop: 4,

  },

  textContainer: {

    flex: 1,

    backgroundColor: '#FFF',

    borderRadius: 8,

    padding: 12,

  },

  messageText: {

    fontSize: 16,

    marginBottom: 4,

  },

  translationText: {

    fontSize: 14,

    color: '#666',

  },

  repeatButton: {

    justifyContent: 'center',

    marginLeft: 8,

  },

  controlsContainer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    padding: 16,

    backgroundColor: '#FFF',

  },

  controlButton: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#007AFF',

    paddingVertical: 12,

    paddingHorizontal: 24,

    borderRadius: 24,

  },

  speakingButton: {

    backgroundColor: '#4CD964',

  },

  controlText: {

    color: '#FFF',

    fontWeight: 'bold',

    marginLeft: 8,

  },

});



export default ConversationScreen;