import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </Pressable>
        <Text style={styles.title}>Notification</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Ionicons name="settings-sharp" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <Text style={styles.recent}>Recent</Text>
      <View style={styles.notification}>
        <ImageBackground source={require('../assets/snack-icon.png')} style={styles.icon}>
          <Ionicons name="cart" size={24} color="#fff" />
        </ImageBackground>
        <View style={styles.notificationText}>
          <Text style={styles.notificationTitle}>Purchase Completed!</Text>
          <Text style={styles.notificationDescription}>
            You already bought a class from Jerremy Mamika. Enjoy the class! 👋
          </Text>
          <Text style={styles.notificationTime}>2 m ago</Text>
        </View>
      </View>
      <View style={styles.notification}>
        <Image source={require('../assets/snack-icon.png')} style={styles.userImage} />
        <View style={styles.notificationText}>
          <Text style={styles.notificationTitle}>Jerremy Send You a Message</Text>
          <Text style={styles.notificationDescription}>
            Hi Magdalena, I've seen your challenge...
          </Text>
          <Text style={styles.replyLink}>Reply the message</Text>
          <Text style={styles.notificationTime}>2 m ago</Text>
        </View>
      </View>
      <View style={styles.notification}>
        <ImageBackground source={require('../assets/snack-icon.png')} style={styles.icon}>
          <Ionicons name="pricetag" size={24} color="#fff" />
        </ImageBackground>
        <View style={styles.notificationText}>
          <Text style={styles.notificationTitle}>Ramadhan Flash Sale!</Text>
          <Text style={styles.notificationDescription}>
            Get 20% discount for first transaction in this month!😍😍
          </Text>
          <Text style={styles.notificationTime}>2 m ago</Text>
        </View>
      </View>
      <View style={styles.notification}>
        <ImageBackground source={require('../assets/snack-icon.png')} style={styles.icon}>
          <Ionicons name="trophy" size={24} color="#fff" />
        </ImageBackground>
        <View style={styles.notificationText}>
          <Text style={styles.notificationTitle}>Challange Completed</Text>
          <Text style={styles.notificationDescription}>
            Congratulation! you have completed course by Jerremy Mamika
          </Text>
          <Text style={styles.notificationTime}>10 m ago</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  settingsButton: {},
  recent: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  icon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  notificationText: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  notificationDescription: {
    fontSize: 14,
    color: '#787878',
  },
  replyLink: {
    color: '#007AFF',
    marginTop: 5,
  },
  notificationTime: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },
});

export default NotificationsScreen;