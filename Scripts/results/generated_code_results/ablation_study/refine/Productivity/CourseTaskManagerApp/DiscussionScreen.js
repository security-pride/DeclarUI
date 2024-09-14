import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const DiscussionScreen = ({ navigation }) => {

  const [message, setMessage] = useState('');



  const renderMessage = (text, isUser, userName) => (

    <View style={[styles.messageContainer, isUser ? styles.userMessage : styles.otherMessage]}>

      <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

      <View style={styles.messageContent}>

        <Text style={styles.userName}>{userName}</Text>

        <Text style={styles.messageText}>{text}</Text>

      </View>

    </View>

  );



  const renderResource = (title, type) => (

    <TouchableOpacity style={styles.resourceItem}>

      <Icon name={type === 'pdf' ? 'picture-as-pdf' : 'description'} size={24} color="#4CAF50" />

      <Text style={styles.resourceTitle}>{title}</Text>

      <Icon name="file-download" size={24} color="#4CAF50" />

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.headerTitle}>Discussion</Text>

        <Text style={styles.subTitle}>Physics</Text>

        <View style={styles.headerIcons}>

          <TouchableOpacity onPress={() => {/* Handle phone call */}}>

            <Icon name="phone" size={24} color="#4CAF50" />

          </TouchableOpacity>

          <TouchableOpacity onPress={() => {/* Handle video call */}}>

            <Icon name="videocam" size={24} color="#4CAF50" />

          </TouchableOpacity>

          <TouchableOpacity onPress={() => {/* Handle info */}}>

            <Icon name="info-outline" size={24} color="#4CAF50" />

          </TouchableOpacity>

        </View>

      </View>



      <ScrollView style={styles.chatContainer}>

        {renderMessage("Here are the resource files of todays' physics class", false, "Maya")}

        {renderResource("Introduction to force", "pdf")}

        {renderResource("Work and energy", "doc")}

        {renderMessage("Thanks a lot Maya. Is anyone please share your class note of this lecture.", true, "Vishal")}

        {renderMessage("I didn't write down class note of this lecture. But I have made powerpoint presentation on force, energy and work.", false, "Alex")}

        {renderResource("Force, Energy & Work", "ppt")}

        {renderMessage("Thank you so much Vishal", true, "Maya")}

      </ScrollView>



      <View style={styles.inputContainer}>

        <TouchableOpacity style={styles.attachButton}>

          <Icon name="attach-file" size={24} color="#4CAF50" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.cameraButton}>

          <Icon name="photo-camera" size={24} color="#4CAF50" />

        </TouchableOpacity>

        <TextInput

          style={styles.input}

          placeholder="Type something"

          value={message}

          onChangeText={setMessage}

        />

        <TouchableOpacity style={styles.sendButton}>

          <Icon name="play-arrow" size={24} color="#FFF" />

        </TouchableOpacity>

      </View>



      <View style={styles.navbar}>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>

          <Icon name="home" size={24} color="#888" />

          <Text style={styles.navText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Tasks')}>

          <Icon name="list" size={24} color="#888" />

          <Text style={styles.navText}>Tasks</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Classroom')}>

          <Icon name="class" size={24} color="#888" />

          <Text style={styles.navText}>Classroom</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="chat" size={24} color="#4CAF50" />

          <Text style={[styles.navText, styles.activeNavText]}>Chat</Text>

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

    backgroundColor: '#FFF',

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#E0E0E0',

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    color: '#333',

  },

  subTitle: {

    fontSize: 16,

    color: '#4CAF50',

    marginTop: 4,

  },

  headerIcons: {

    flexDirection: 'row',

    justifyContent: 'flex-end',

    marginTop: 8,

  },

  chatContainer: {

    flex: 1,

    padding: 16,

  },

  messageContainer: {

    flexDirection: 'row',

    marginBottom: 16,

  },

  userMessage: {

    justifyContent: 'flex-end',

  },

  otherMessage: {

    justifyContent: 'flex-start',

  },

  avatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 8,

  },

  messageContent: {

    backgroundColor: '#FFF',

    borderRadius: 8,

    padding: 12,

    maxWidth: '70%',

  },

  userName: {

    fontWeight: 'bold',

    marginBottom: 4,

  },

  messageText: {

    fontSize: 14,

  },

  resourceItem: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFF',

    borderRadius: 8,

    padding: 12,

    marginBottom: 8,

  },

  resourceTitle: {

    flex: 1,

    marginLeft: 8,

    fontSize: 14,

  },

  inputContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFF',

    padding: 8,

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

  },

  attachButton: {

    padding: 8,

  },

  cameraButton: {

    padding: 8,

  },

  input: {

    flex: 1,

    height: 40,

    backgroundColor: '#F0F0F0',

    borderRadius: 20,

    paddingHorizontal: 16,

    marginHorizontal: 8,

  },

  sendButton: {

    backgroundColor: '#4CAF50',

    borderRadius: 20,

    padding: 8,

  },

  navbar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    backgroundColor: '#FFF',

    paddingVertical: 8,

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

  },

  navItem: {

    alignItems: 'center',

  },

  navText: {

    fontSize: 12,

    marginTop: 4,

    color: '#888',

  },

  activeNavText: {

    color: '#4CAF50',

  },

});



export default DiscussionScreen;