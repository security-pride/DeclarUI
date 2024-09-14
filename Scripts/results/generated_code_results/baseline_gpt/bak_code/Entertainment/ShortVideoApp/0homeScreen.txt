import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const homeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/snack-icon.png')} style={styles.backgroundImage} />
      <View style={styles.header}>
        <Text style={styles.headerText}>For You</Text>
        <Text style={styles.headerText}>Following</Text>
        <Text style={styles.headerText}>Live</Text>
      </View>
      
      <View style={styles.footer}>
        <View style={styles.userInfo}>
          <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
          <View>
            <Text style={styles.userName}>RomeoSmile</Text>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followText}>Follow</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla ac a eu cras. Et augue amet id
        </Text>
        <Text style={styles.music}>🎵 eyes blue like the atlantic</Text>
      </View>

      <View style={styles.actions}>
        <View style={styles.iconContainer}>
          <Icon name="heart" size={30} color="white" />
          <Text style={styles.iconText}>3.2k</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon name="chatbubble" size={30} color="white" />
          <Text style={styles.iconText}>4231</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon name="paper-plane" size={30} color="white" />
          <Text style={styles.iconText}>644</Text>
        </View>
      </View>

      <View style={styles.navigation}>
        <View style={styles.navItem}>
          <Icon name="home" size={30} color="red" />
          <Text style={styles.navText}>Home</Text>
        </View>
        <View style={styles.navItem}>
          <Icon name="compass" size={30} color="grey" />
          <Text style={styles.navText}>Discover</Text>
        </View>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="add-circle" size={30} color="grey" />
        </TouchableOpacity>
        <View style={styles.navItem}>
          <Icon name="notifications" size={30} color="grey" />
          <Text style={styles.navText}>Activity</Text>
        </View>
        <View style={styles.navItem}>
          <Icon name="person" size={30} color="grey" />
          <Text style={styles.navText}>Profile</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'black'
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    opacity: 0.7,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
    paddingHorizontal: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
  },
  footer: {
    padding: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  userName: {
    color: '#fff',
    fontSize: 16,
  },
  followButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 5,
  },
  followText: {
    color: '#fff',
    fontSize: 14,
  },
  description: {
    color: '#fff',
    marginVertical: 10,
  },
  music: {
    color: '#fff',
  },
  actions: {
    position: 'absolute',
    right: 10,
    bottom: 120,
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  iconText: {
    color: '#fff',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#000',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: 'grey',
  },
});

export default homeScreen;