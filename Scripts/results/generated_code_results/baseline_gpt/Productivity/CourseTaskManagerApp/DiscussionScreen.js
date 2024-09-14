import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DiscussionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Discussion</Text>
        <Text style={styles.subtitle}>Physics</Text>
        <View style={styles.headerIcons}>
          <Icon name="call" size={24} color="#000" />
          <Icon name="videocam" size={24} color="#000" style={styles.iconMargin} />
          <Icon name="info" size={24} color="#000" />
        </View>
      </View>
      
      <ScrollView style={styles.messageContainer}>
        <View style={styles.messageBubble}>
          <Text style={styles.messageText}>Here are the resource files of todays’ physics class</Text>
          <View style={styles.attachment}>
            <Icon name="picture-as-pdf" size={24} color="#f00" />
            <Text style={styles.attachmentText}>Introduction to force</Text>
            <Icon name="download" size={24} color="#666" />
          </View>
          <View style={styles.attachment}>
            <Icon name="description" size={24} color="#00f" />
            <Text style={styles.attachmentText}>Work and energy</Text>
            <Icon name="download" size={24} color="#666" />
          </View>
        </View>

        <View style={styles.replyBubble}>
          <Text style={styles.replyText}>Thanks a lot Maya. Is anyone please share your class note of this lecture.</Text>
          <Image style={styles.avatar} source={require('../assets/snack-icon.png')} />
        </View>

        <View style={styles.messageBubble}>
          <Text style={styles.messageText}>I didn’t write down class note of this lecture. But I have made powerpoint presentation on force, energy and work.</Text>
          <Image style={styles.avatar} source={require('../assets/snack-icon.png')} />
          <View style={styles.attachment}>
            <Icon name="picture-as-pdf" size={24} color="#f00" />
            <Text style={styles.attachmentText}>Forece, Energy & Work</Text>
            <Icon name="download" size={24} color="#666" />
          </View>
        </View>

        <View style={styles.replyBubble}>
          <Text style={styles.replyText}>Thank you so much Vishal</Text>
          <Image style={styles.avatar} source={require('../assets/snack-icon.png')} />
        </View>
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Type something" />
        <TouchableOpacity>
          <Icon name="attachment" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="camera-alt" size={24} color="#666" style={styles.iconMargin} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="send" size={24} color="#666" />
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
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconMargin: {
    marginHorizontal: 10,
  },
  messageContainer: {
    flex: 1,
    padding: 10,
  },
  messageBubble: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
  },
  replyBubble: {
    backgroundColor: '#34eb86',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageText: {
    marginBottom: 5,
  },
  replyText: {
    color: '#fff',
    marginRight: 10
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 5,
  },
  attachment: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  attachmentText: {
    flex: 1,
    marginHorizontal: 10,
    color: '#666',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
    padding: 10,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
  },
});

export default DiscussionScreen;