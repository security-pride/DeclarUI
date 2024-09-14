import React, { useState } from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const ConversationScreen = () => {

  const navigation = useNavigation();

  const [isSpeaking, setIsSpeaking] = useState(false);



  const conversations = [

    { text: 'Hey there', translation: 'Xin chào', speaker: 'Ellen' },

    { text: 'Hey,where are you going today?', translation: 'Chào cô, hôm nay cô sẽ đi đâu', speaker: 'Taxi Driver' },

    { text: '25 Gerhold Valley, please.', translation: 'Cho tôi tới 25 Gerhold Valley.', speaker: 'Ellen' },

    { text: 'No problem.', translation: 'Không vấn đề.', speaker: 'Taxi Driver' },

  ];



  const handleBackPress = () => {

    navigation.goBack();

  };



  const handleRepeat = (index) => {

    // Implement repeat functionality

    console.log(`Repeating message at index ${index}`);

  };



  const toggleSpeaking = () => {

    setIsSpeaking(!isSpeaking);

  };



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={handleBackPress}>

          <Text style={styles.backButton}>←</Text>

        </TouchableOpacity>

        <Text style={styles.headerTitle}>When taking a taxi</Text>

      </View>

      <ScrollView style={styles.conversationContainer}>

        {conversations.map((item, index) => (

          <View key={index} style={styles.messageContainer}>

            <View style={styles.messageContent}>

              <Text style={styles.messageText}>{item.text}</Text>

              <Text style={styles.translationText}>{item.translation}</Text>

              <TouchableOpacity

                style={styles.repeatButton}

                onPress={() => handleRepeat(index)}

              >

                <Text style={styles.repeatButtonText}>REPEAT</Text>

              </TouchableOpacity>

              {item.speaker && (

                <View style={styles.avatarContainer}>

                  <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

                  <Text style={styles.speakerName}>{item.speaker}</Text>

                </View>

                )}

            </View>

            

          </View>

        ))}

      </ScrollView>

      <View style={styles.footer}>

        <TouchableOpacity style={styles.listenButton}>

          <Text style={styles.buttonText}>LISTEN</Text>

        </TouchableOpacity>

        <TouchableOpacity

          style={[styles.speakingButton, isSpeaking && styles.speakingButtonActive]}

          onPress={toggleSpeaking}

        >

          <Text style={styles.buttonText}>SPEAKING</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#f0f0f5',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    backgroundColor: '#3a3b3c',

  },

  backButton: {

    fontSize: 24,

    color: 'white',

    marginRight: 16,

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    color: 'white',

  },

  conversationContainer: {

    flex: 1,

    padding: 16,

  },

  messageContainer: {

    flexDirection: 'row',

    marginBottom: 16,

    justifyContent: 'space-between',

  },

  messageContent: {

    flex: 1,

    backgroundColor: 'white',

    borderRadius: 8,

    padding: 12,

    marginRight: 8,

  },

  messageText: {

    fontSize: 16,

    marginBottom: 4,

  },

  translationText: {

    fontSize: 14,

    color: '#666',

    marginBottom: 8,

  },

  repeatButton: {

    alignSelf: 'flex-start',

    backgroundColor: '#007AFF',

    paddingVertical: 6,

    paddingHorizontal: 12,

    borderRadius: 4,

  },

  repeatButtonText: {

    color: 'white',

    fontWeight: 'bold',

  },

  avatarContainer: {

    alignItems: 'center',

    marginTop: -50,

    marginLeft: 230,
  },

  avatar: {

    width: 20,

    height: 20,

    borderRadius: 20,

  },

  speakerName: {

    fontSize: 12,

    marginTop: 4,

    marginLeft: 5

  },

  footer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    padding: 16,

    backgroundColor: 'white',

  },

  listenButton: {

    backgroundColor: '#4CAF50',

    paddingVertical: 12,

    paddingHorizontal: 24,

    borderRadius: 4,

  },

  speakingButton: {

    backgroundColor: '#2196F3',

    paddingVertical: 12,

    paddingHorizontal: 24,

    borderRadius: 4,

  },

  speakingButtonActive: {

    backgroundColor: '#1976D2',

  },

  buttonText: {

    color: 'white',

    fontWeight: 'bold',

  },

});



export default ConversationScreen;