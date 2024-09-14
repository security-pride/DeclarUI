import React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.time}>9:41</Text>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hi, Steven !</Text>
        <Text style={styles.subtitle}>Learn new sentences right away</Text>
      </View>
      <View style={styles.navigation}>
        <Text style={styles.activeTab}>NEW FEED</Text>
        <Text style={styles.inactiveTab}>SUBSCRIPTION</Text>
        <TouchableOpacity style={styles.notificationIcon}>
          <Text style={styles.notificationCount}>3</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.feedItem}>
        <View style={styles.profile}>
          <Image style={styles.profilePic} source={require('../assets/snack-icon.png')} />
          <Text style={styles.profileName}>Charlie Herrera</Text>
        </View>
        <View style={styles.lessonContent}>
          <Text style={styles.lessonTitle}>ENGLISH TOURISM</Text>
          <Text style={styles.lessonSubtitle}>Through the airport security door</Text>
          <Button title="LEARN FREE NOW" onPress={() => navigation.navigate('LessonDetail')} />
        </View>
      </View>
      <View style={styles.feedItem}>
        <Text style={styles.sectionTitle}>When get hurt</Text>
        <Text style={styles.viewAll}>view all</Text>
        <View style={styles.profile}>
          <Image style={styles.profilePicSmall} source={require('../assets/snack-icon.png')} />
          <Text style={styles.profileName}>Ellen Jacobs</Text>
        </View>
        <Image style={styles.videoThumbnail} source={require('../assets/snack-icon.png')} />
        <Text style={styles.videoDuration}>0:17</Text>
        <View style={styles.translation}>
          <Text style={styles.mainText}>It’s just a ..</Text>
          <Text style={styles.subText}>Chỉ xước nhẹ thôi ý mà.</Text>
        </View>
      </View>
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Speak')}>
          <Text style={styles.navText}>Speak</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Word')}>
          <Text style={styles.navText}>Word</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  time: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 16,
    color: '#000000',
  },
  header: {
    marginTop: 10,
    marginLeft: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  subtitle: {
    fontSize: 14,
    color: '#8e8e8e',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  activeTab: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0066ff',
  },
  inactiveTab: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8e8e8e',
  },
  notificationIcon: {
    backgroundColor: '#ffffff',
  },
  notificationCount: {
    color: '#ff4d4d',
  },
  feedItem: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  profilePicSmall: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  lessonContent: {
    marginTop: 10,
  },
  lessonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lessonSubtitle: {
    fontSize: 14,
    color: '#8e8e8e',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  viewAll: {
    fontSize: 14,
    color: '#0066ff',
    alignSelf: 'flex-end',
  },
  videoThumbnail: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginTop: 10,
  },
  videoDuration: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    color: '#ffffff',
    backgroundColor: '#00000080',
    padding: 3,
    borderRadius: 5,
  },
  translation: {
    marginTop: 10,
  },
  mainText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 14,
    color: '#8e8e8e',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e2e2e2',
  },
  navText: {
    fontSize: 14,
    color: '#8e8e8e',
  },
});

export default HomeScreen;