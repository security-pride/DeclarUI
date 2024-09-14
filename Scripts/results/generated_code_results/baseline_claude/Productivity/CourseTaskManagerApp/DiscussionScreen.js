import React, { useState } from 'react';

import {

  View,

  Text,

  StyleSheet,

  SafeAreaView,

  TouchableOpacity,

  FlatList,

  Image,

  TextInput,

} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const DiscussionScreen = () => {

  const navigation = useNavigation();

  const [message, setMessage] = useState('');



  const discussionData = [

    {

      id: '1',

      user: {

        name: 'Maya',

        avatar: '../assets/snack-icon.png',

      },

      message: "Here are the resource files of today's physics class",

      attachments: [

        { id: '1', name: 'Introduction to force', type: 'pdf' },

        { id: '2', name: 'Work and energy', type: 'doc' },

      ],

    },

    {

      id: '2',

      user: {

        name: 'You',

        avatar: '../assets/snack-icon.png',

      },

      message: 'Thanks a lot Maya. Is anyone please share your class notes of this lecture.',

    },

    {

      id: '3',

      user: {

        name: 'Vishal',

        avatar: '../assets/snack-icon.png',

      },

      message: "I didn't write down class note of this lecture. But I have made powerpoint presentation on force, energy and work.",

      attachments: [

        { id: '3', name: 'Force, Energy & Work', type: 'ppt' },

      ],

    },

    {

      id: '4',

      user: {

        name: 'You',

        avatar: '../assets/snack-icon.png',

      },

      message: 'Thank you so much Vishal',

    },

  ];



  const renderMessage = ({ item }) => (

    <View style={[styles.messageContainer, item.user.name === 'You' && styles.ownMessage]}>

      <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

      <View style={styles.messageContent}>

        {item.user.name !== 'You' && <Text style={styles.userName}>{item.user.name}</Text>}

        <Text style={styles.messageText}>{item.message}</Text>

        {item.attachments && (

          <View style={styles.attachmentsContainer}>

            {item.attachments.map((attachment) => (

              <TouchableOpacity key={attachment.id} style={styles.attachment}>

                <Icon name={getAttachmentIcon(attachment.type)} size={20} color="#4B5563" />

                <Text style={styles.attachmentName}>{attachment.name}</Text>

                <Icon name="download-outline" size={20} color="#4B5563" />

              </TouchableOpacity>

            ))}

          </View>

        )}

      </View>

    </View>

  );



  const getAttachmentIcon = (type) => {

    switch (type) {

      case 'pdf':

        return 'document-text-outline';

      case 'doc':

        return 'document-outline';

      case 'ppt':

        return 'easel-outline';

      default:

        return 'document-outline';

    }

  };



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.headerTitle}>Physics</Text>

        <View style={styles.headerIcons}>

          <TouchableOpacity style={styles.iconButton}>

            <Icon name="call-outline" size={24} color="#4B5563" />

          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>

            <Icon name="videocam-outline" size={24} color="#4B5563" />

          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>

            <Icon name="information-circle-outline" size={24} color="#4B5563" />

          </TouchableOpacity>

        </View>

      </View>



      <FlatList

        data={discussionData}

        renderItem={renderMessage}

        keyExtractor={(item) => item.id}

        contentContainerStyle={styles.messageList}

      />



      <View style={styles.inputContainer}>

        <TouchableOpacity style={styles.attachButton}>

          <Icon name="add-circle-outline" size={24} color="#4B5563" />

        </TouchableOpacity>

        <TextInput

          style={styles.input}

          placeholder="Type something"

          value={message}

          onChangeText={setMessage}

        />

        <TouchableOpacity style={styles.sendButton}>

          <Icon name="image-outline" size={24} color="#4B5563" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.sendButton}>

          <Icon name="send-outline" size={24} color="#4B5563" />

        </TouchableOpacity>

      </View>



      <View style={styles.bottomNav}>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>

          <Icon name="home-outline" size={24} color="#6B7280" />

          <Text style={styles.navText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Tasks')}>

          <Icon name="list-outline" size={24} color="#6B7280" />

          <Text style={styles.navText}>Tasks</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Classroom')}>

          <Icon name="school-outline" size={24} color="#6B7280" />

          <Text style={styles.navText}>Classroom</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Chat')}>

          <Icon name="chatbubble-outline" size={24} color="#10B981" />

          <Text style={[styles.navText, styles.activeNavText]}>Chat</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFFFFF',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#E5E7EB',

  },

  headerTitle: {

    fontSize: 20,

    fontWeight: 'bold',

    color: '#111827',

  },

  headerIcons: {

    flexDirection: 'row',

  },

  iconButton: {

    marginLeft: 16,

  },

  messageList: {

    paddingHorizontal: 16,

    paddingVertical: 8,

  },

  messageContainer: {

    flexDirection: 'row',

    marginBottom: 16,

  },

  ownMessage: {

    justifyContent: 'flex-end',

  },

  avatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 8,

  },

  messageContent: {

    maxWidth: '80%',

    backgroundColor: '#F3F4F6',

    borderRadius: 12,

    padding: 12,

  },

  userName: {

    fontSize: 14,

    fontWeight: 'bold',

    color: '#4B5563',

    marginBottom: 4,

  },

  messageText: {

    fontSize: 16,

    color: '#1F2937',

  },

  attachmentsContainer: {

    marginTop: 8,

  },

  attachment: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#E5E7EB',

    borderRadius: 8,

    padding: 8,

    marginTop: 4,

  },

  attachmentName: {

    flex: 1,

    fontSize: 14,

    color: '#4B5563',

    marginHorizontal: 8,

  },

  inputContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 8,

    borderTopWidth: 1,

    borderTopColor: '#E5E7EB',

  },

  attachButton: {

    padding: 8,

  },

  input: {

    flex: 1,

    height: 40,

    backgroundColor: '#F3F4F6',

    borderRadius: 20,

    paddingHorizontal: 16,

    marginHorizontal: 8,

  },

  sendButton: {

    padding: 8,

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#E5E7EB',

    paddingVertical: 8,

  },

  navItem: {

    alignItems: 'center',

  },

  navText: {

    fontSize: 12,

    color: '#6B7280',

    marginTop: 4,

  },

  activeNavText: {

    color: '#10B981',

  },

});



export default DiscussionScreen;