import React from 'react';
import { View, Text, Button, Image, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const IntroScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Button title='' onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="chevron-back" size={24} color="black" />
        </Button>
        <Image source={require('../assets/snack-icon.png')} style={styles.profilePicture} />
        <View style={styles.headerText}>
          <Text style={styles.headerName}>Martha Craig</Text>
          <Text style={styles.headerSubtitle}>Messenger</Text>
        </View>
        <Button title='' onPress={() => navigation.navigate('Profile')} style={styles.audioCallButton}>
          <Icon name="call-outline" size={24} color="dodgerblue" />
        </Button>
        <Button title='' onPress={() => navigation.navigate('Profile')} style={styles.videoCallButton}>
          <Icon name="videocam-outline" size={24} color="dodgerblue" />
        </Button>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image source={require('../assets/snack-icon.png')} style={styles.largeProfilePicture} />
        <Text style={styles.profileName}>Martha Craig</Text>
        <Text style={styles.profileSystemMessage}>You're friends on Facebook</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.smallProfilePicture} />
        <Text style={styles.profilePrompt}>Say hi to your new Facebook friend, Martha.</Text>
      </View>

      {/* Messages */}
      <View style={styles.messages}>
        <Text style={styles.timestamp}>21:32</Text>
        <Text style={styles.emoji}>👋</Text>
        <Text style={styles.timestampSelf}>16:44</Text>
        <View style={styles.messageSelf}>
          <Image source={require('../assets/snack-icon.png')} style={styles.smallProfilePicture} />
          <Text style={styles.messageText}>Hello, Jacob!</Text>
        </View>
        <View style={styles.messageSelf}>
          <Image source={require('../assets/snack-icon.png')} style={styles.smallProfilePicture} />
          <Text style={styles.messageText}>How are you doing?</Text>
        </View>
      </View>

      {/* Bottom Toolbar */}
      <View style={styles.toolbar}>
        <Button title='' style={styles.iconButton}>
          <Icon name="apps-outline" size={24} color="blue" />
        </Button>
        <Button title='' style={styles.iconButton}>
          <Icon name="camera-outline" size={24} color="blue" />
        </Button>
        <Button title='' style={styles.iconButton}>
          <Icon name="image-outline" size={24} color="blue" />
        </Button>
        <Button title='' style={styles.iconButton}>
          <Icon name="mic-outline" size={24} color="blue" />
        </Button>
        <TextInput style={styles.textInput} placeholder="Aa" />
        <Button title='' style={styles.iconButton}>
          <Icon name="happy-outline" size={24} color="blue" />
        </Button>
        <Button title='' style={styles.iconButton}>
          <Icon name="thumbs-up-outline" size={24} color="blue" />
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  backButton: {
    marginRight: 10,
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerText: {
    flex: 1,
    marginLeft: 10,
  },
  headerName: {
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: 'grey',
  },
  audioCallButton: {
    marginHorizontal: 10,
  },
  videoCallButton: {
    marginHorizontal: 10,
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  largeProfilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileSystemMessage: {
    color: 'grey',
    marginTop: 5,
  },
  smallProfilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginTop: 5,
  },
  profilePrompt: {
    color: 'grey',
    marginTop: 5,
  },
  messages: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  timestamp: {
    alignSelf: 'center',
    color: 'grey',
  },
  emoji: {
    fontSize: 36,
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  timestampSelf: {
    alignSelf: 'flex-end',
    color: 'grey',
    marginTop: 10,
  },
  messageSelf: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  messageText: {
    backgroundColor: '#e1ffc7',
    borderRadius: 15,
    padding: 10,
    marginLeft: 10,
  },
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: 'lightgrey',
  },
  iconButton: {
    marginHorizontal: 6,
  },
  textInput: {
    flex: 1,
    marginHorizontal: 6,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
});

export default IntroScreen;