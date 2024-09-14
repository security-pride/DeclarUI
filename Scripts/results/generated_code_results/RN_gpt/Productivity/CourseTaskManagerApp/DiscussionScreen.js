import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DiscussionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Discussion</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Icon name="camera-outline" size={24} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="videocam-outline" size={24} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="information-circle-outline" size={24} />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.title}>Physics</Text>

      <View style={styles.messageContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
        <View style={styles.messageBox}>
          <Text style={styles.messageText}>Here are the resource files of todays' physics class</Text>
        </View>
      </View>

      <View style={styles.fileContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.fileIcon} />
        <Text style={styles.fileText}>Introduction to force</Text>
        <TouchableOpacity>
          <Icon name="download-outline" size={24} />
        </TouchableOpacity>
      </View>

      <View style={styles.fileContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.fileIcon} />
        <Text style={styles.fileText}>Work and energy</Text>
        <TouchableOpacity>
          <Icon name="download-outline" size={24} />
        </TouchableOpacity>
      </View>

      <View style={styles.messageContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
        <View style={styles.messageBoxGreen}>
          <Text style={styles.messageText}>Thanks a lot Maya. Is anyone please share your class note of this lecture.</Text>
        </View>
      </View>

      <View style={styles.messageContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
        <View style={styles.messageBox}>
          <Text style={styles.messageText}>I didn't write down class note of this lecture. But I have made powerpoint presentation on force, energy and work.</Text>
        </View>
      </View>

      <View style={styles.fileContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.fileIcon} />
        <Text style={styles.fileText}>Force, Energy & Work</Text>
        <TouchableOpacity>
          <Icon name="download-outline" size={24} />
        </TouchableOpacity>
      </View>

      <View style={styles.messageContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
        <View style={styles.messageBoxGreen}>
          <Text style={styles.messageText}>Thank you so much Vishal</Text>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Type something" />
        <TouchableOpacity>
          <Icon name="attach-outline" size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="image-outline" size={24} />
        </TouchableOpacity>
      </View>

      <View style={styles.footerNav}>
        <TouchableOpacity>
          <Icon name="home-outline" size={24} />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="clipboard-outline" size={24} />
          <Text>Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="book-outline" size={24} />
          <Text>Classroom</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="chatbubble-outline" size={24} />
          <Text>Chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageBox: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    flex: 1,
  },
  messageBoxGreen: {
    backgroundColor: '#bff0b0',
    padding: 10,
    borderRadius: 10,
    flex: 1,
  },
  messageText: {
    fontSize: 16,
  },
  fileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 10,
  },
  fileIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  fileText: {
    flex: 1,
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  footerNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  }
});

export default DiscussionScreen;