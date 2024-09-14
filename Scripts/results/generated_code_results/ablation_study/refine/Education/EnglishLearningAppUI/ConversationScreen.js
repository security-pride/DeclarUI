import React, { useState } from 'react';

import { View, Text, StyleSheet, Pressable, Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const ConversationScreen = ({ navigation }) => {

  const [isListening, setIsListening] = useState(false);

  const [isSpeaking, setIsSpeaking] = useState(false);



  const handleListen = () => {

    setIsListening(true);

    setIsSpeaking(false);

  };



  const handleSpeak = () => {

    setIsListening(false);

    setIsSpeaking(true);

  };



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>

          <Icon name="arrow-back" size={24} color="#000" />

        </Pressable>

        <Text style={styles.headerTitle}>When taking a taxi</Text>

        <View style={styles.notificationBadge} />

      </View>



      <View style={styles.conversationContainer}>

        <View style={styles.messageContainer}>

          <Text style={styles.messageText}>Hey there</Text>

          <Text style={styles.translatedText}>Xin chào</Text>

          <Pressable style={styles.repeatButton}>

            <Icon name="mic" size={20} color="#fff" />

            <Text style={styles.repeatButtonText}>REPEAT</Text>

          </Pressable>

          <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

        </View>



        <View style={styles.messageContainer}>

          <Text style={styles.messageText}>Hey,where are you going today?</Text>

          <Text style={styles.translatedText}>Chào cô, hôm nay cô sẽ đi đâu</Text>

          <Pressable style={styles.repeatButton}>

            <Icon name="mic" size={20} color="#fff" />

            <Text style={styles.repeatButtonText}>REPEAT</Text>

          </Pressable>

          <Image source={require('../assets/snack-icon.png')} style={styles.taxiDriverAvatar} />

        </View>



        <View style={styles.messageContainer}>

          <Text style={styles.messageText}>25 Gerhold Valley, please.</Text>

          <Text style={styles.translatedText}>Cho tôi tới 25 Gerhold Valley.</Text>

          <Pressable style={styles.repeatButton}>

            <Icon name="mic" size={20} color="#fff" />

            <Text style={styles.repeatButtonText}>REPEAT</Text>

          </Pressable>

          <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

        </View>



        <View style={styles.messageContainer}>

          <Text style={styles.messageText}>No problem.</Text>

          <Text style={styles.translatedText}>Không vấn đề.</Text>

          <Pressable style={styles.repeatButton}>

            <Icon name="mic" size={20} color="#fff" />

            <Text style={styles.repeatButtonText}>REPEAT</Text>

          </Pressable>

          <Image source={require('../assets/snack-icon.png')} style={styles.taxiDriverAvatar} />

        </View>

      </View>



      <View style={styles.footer}>

        <Pressable

          style={[styles.footerButton, isListening && styles.activeButton]}

          onPress={handleListen}

        >

          <Text style={styles.footerButtonText}>LISTEN</Text>

        </Pressable>

        <Pressable

          style={[styles.footerButton, isSpeaking && styles.activeButton]}

          onPress={handleSpeak}

        >

          <Icon name="mic" size={20} color="#fff" style={styles.micIcon} />

          <Text style={styles.footerButtonText}>SPEAKING</Text>

        </Pressable>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F0F0F0',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    backgroundColor: '#fff',

  },

  backButton: {

    padding: 8,

  },

  headerTitle: {

    flex: 1,

    fontSize: 18,

    fontWeight: 'bold',

    textAlign: 'center',

  },

  notificationBadge: {

    width: 8,

    height: 8,

    backgroundColor: '#fff',

    borderRadius: 4,

    marginLeft: 8,

  },

  conversationContainer: {

    flex: 1,

    padding: 16,

  },

  messageContainer: {

    backgroundColor: '#fff',

    borderRadius: 8,

    padding: 16,

    marginBottom: 16,

  },

  messageText: {

    fontSize: 16,

    marginBottom: 8,

  },

  translatedText: {

    fontSize: 14,

    color: '#666',

    marginBottom: 16,

  },

  repeatButton: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#0066CC',

    paddingVertical: 8,

    paddingHorizontal: 16,

    borderRadius: 20,

    alignSelf: 'flex-start',

  },

  repeatButtonText: {

    color: '#fff',

    marginLeft: 8,

    fontWeight: 'bold',

  },

  avatar: {

    width: 24,

    height: 24,

    borderRadius: 12,

    position: 'absolute',

    right: 16,

    top: 16,

  },

  taxiDriverAvatar: {

    width: 24,

    height: 24,

    borderRadius: 12,

    position: 'absolute',

    right: 16,

    top: 16,

    backgroundColor: '#FFD700',

  },

  footer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    padding: 16,

    backgroundColor: '#fff',

  },

  footerButton: {

    flex: 1,

    flexDirection: 'row',

    justifyContent: 'center',

    alignItems: 'center',

    backgroundColor: '#0066CC',

    paddingVertical: 12,

    borderRadius: 8,

    marginHorizontal: 8,

  },

  activeButton: {

    backgroundColor: '#004499',

  },

  footerButtonText: {

    color: '#fff',

    fontWeight: 'bold',

  },

  micIcon: {

    marginRight: 8,

  },

});



export default ConversationScreen;