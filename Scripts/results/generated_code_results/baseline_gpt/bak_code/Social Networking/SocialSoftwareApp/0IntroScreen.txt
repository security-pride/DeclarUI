import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Icon name="arrow-back" size={24} color="#007AFF" />
        <View style={styles.profileHeader}>
          <Image source={require('../assets/snack-icon.png')} style={styles.profileImageSmall} />
          <View>
            <Text style={styles.profileName}>Martha Craig</Text>
            <Text style={styles.profileSubText}>Messenger</Text>
          </View>
        </View>
        <View style={styles.headerIcons}>
          <Icon name="call-outline" size={24} color="#007AFF" style={styles.iconMargin} />
          <Icon name="videocam-outline" size={24} color="#007AFF" />
        </View>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
        <Text style={styles.mainName}>Martha Craig</Text>
        <Text style={styles.friendText}>You're friends on Facebook</Text>
        <View style={styles.friendImages}>
          <Image source={require('../assets/snack-icon.png')} style={styles.friendImage} />
          <Image source={require('../assets/snack-icon.png')} style={styles.friendImage} />
        </View>
        <Text style={styles.captionText}>
          Say hi to your new Facebook friend, Martha.
        </Text>

        {/* Message time and emoji */}
        <View style={styles.messageTime}>
          <Text style={styles.timeText}>21:32</Text>
        </View>
        <Image source={require('../assets/snack-icon.png')} style={styles.emoji} />

        {/* Messages */}
        <View style={styles.messages}>
          <View style={styles.messageBubble}>
            <Text style={styles.messageText}>Hello, Jacob!</Text>
          </View>
          <View style={styles.messageBubble}>
            <Text style={styles.messageText}>How are you doing?</Text>
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <MaterialIcons name="apps" size={28} color="#007AFF" />
        <MaterialIcons name="photo-camera" size={28} color="#007AFF" />
        <MaterialIcons name="insert-photo" size={28} color="#007AFF" />
        <MaterialIcons name="keyboard-voice" size={28} color="#007AFF" />
        <TextInput style={styles.input} placeholder="Aa" />
        <MaterialIcons name="insert-emoticon" size={28} color="#007AFF" />
        <MaterialIcons name="thumb-up" size={28} color="#007AFF" />
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
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f8f8f8',
    elevation: 2,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImageSmall: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 8,
  },
  profileName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  profileSubText: {
    fontSize: 12,
    color: '#666',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconMargin: {
    marginRight: 10,
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 10,
  },
  mainName: {
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  friendText: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 8,
  },
  friendImages: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  friendImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginHorizontal: 5,
  },
  captionText: {
    fontSize: 13,
    textAlign: 'center',
    color: '#666',
  },
  messageTime: {
    alignItems: 'center',
    marginTop: 20,
  },
  timeText: {
    fontSize: 12,
    color: '#ccc',
  },
  emoji: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginVertical: 10,
  },
  messages: {
    marginTop: 10,
  },
  messageBubble: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    alignSelf: 'flex-start',
    maxWidth: '80%',
  },
  messageText: {
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    marginHorizontal: 10,
  },
});

export default IntroScreen;