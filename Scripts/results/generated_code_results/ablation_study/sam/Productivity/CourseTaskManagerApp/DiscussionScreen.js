import React, { useState } from 'react';

import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const DiscussionScreen = () => {

  const navigation = useNavigation();

  const [message, setMessage] = useState('');



  const messages = [

    {

      id: '1',

      user: 'Maya',

      content: "Here are the resource files of todays' physics class",

      files: ['Introduction to force', 'Work and energy'],

    },

    {

      id: '2',

      user: 'Liana',

      content: 'Thanks a lot Maya\nIs anyone please share your class notes of this lecture.',

    },

    {

      id: '3',

      user: 'Vishal',

      content: "I didn't write down class note of this lecture. But I have made powerpoint presentation on force, energy and work.",

      files: ['Force, Energy & Work'],

    },

  ];



  const renderMessage = ({ item }) => (

    <View style={styles.messageContainer}>

      <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

      <View style={styles.messageContent}>

        <Text style={styles.userName}>{item.user}</Text>

        <Text style={styles.messageText}>{item.content}</Text>

        {item.files && (

          <View style={styles.filesContainer}>

            {item.files.map((file, index) => (

              <TouchableOpacity key={index} style={styles.fileItem}>

                <Icon name="description" size={20} color="#4CAF50" />

                <Text style={styles.fileName}>{file}</Text>

              </TouchableOpacity>

            ))}

          </View>

        )}

      </View>

    </View>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.headerTitle}>Physics</Text>

        <View style={styles.headerIcons}>

          <TouchableOpacity>

            <Icon name="call" size={24} color="#000" />

          </TouchableOpacity>

          <TouchableOpacity>

            <Icon name="videocam" size={24} color="#000" />

          </TouchableOpacity>

          <TouchableOpacity>

            <Icon name="info" size={24} color="#000" />

          </TouchableOpacity>

        </View>

      </View>

      <FlatList

        data={messages}

        renderItem={renderMessage}

        keyExtractor={(item) => item.id}

        style={styles.messageList}

      />

      <View style={styles.inputContainer}>

        <TextInput

          style={styles.input}

          placeholder="Type something"

          value={message}

          onChangeText={setMessage}

        />

        <TouchableOpacity>

          <Icon name="image" size={24} color="#4CAF50" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="camera-alt" size={24} color="#4CAF50" />

        </TouchableOpacity>

      </View>

      <View style={styles.bottomNav}>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>

          <Icon name="home" size={24} color="#000" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>

          <Icon name="event" size={24} color="#000" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Classroom')}>

          <Icon name="class" size={24} color="#000" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="chat" size={24} color="#4CAF50" />

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

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 16,

    backgroundColor: '#fff',

    elevation: 2,

  },

  headerTitle: {

    fontSize: 20,

    fontWeight: 'bold',

  },

  headerIcons: {

    flexDirection: 'row',

    width: 100,

    justifyContent: 'space-between',

  },

  messageList: {

    flex: 1,

  },

  messageContainer: {

    flexDirection: 'row',

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#E0E0E0',

  },

  avatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 12,

  },

  messageContent: {

    flex: 1,

  },

  userName: {

    fontWeight: 'bold',

    marginBottom: 4,

  },

  messageText: {

    fontSize: 16,

  },

  filesContainer: {

    marginTop: 8,

  },

  fileItem: {

    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 4,

  },

  fileName: {

    marginLeft: 8,

    color: '#4CAF50',

  },

  inputContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 8,

    backgroundColor: '#fff',

  },

  input: {

    flex: 1,

    height: 40,

    borderWidth: 1,

    borderColor: '#E0E0E0',

    borderRadius: 20,

    paddingHorizontal: 16,

    marginRight: 8,

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    height: 56,

    backgroundColor: '#fff',

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

  },

});



export default DiscussionScreen;