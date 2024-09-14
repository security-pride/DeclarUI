import React from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.tabText}>For You</Text>
        <Text style={styles.tabText}>Following</Text>
        <Text style={styles.tabText}>Live</Text>
      </View>

      <Image
        source={require('../assets/snack-icon.png')}
        style={styles.backgroundImage}
        resizeMode='cover'
      />

      <View style={styles.content}>
        <View style={styles.userInfo}>
          <Image
            source={require('../assets/snack-icon.png')}
            style={styles.profileIcon}
          />
          <Text style={styles.userName}>RomeoSmile</Text>
          <Button title="Follow" color="#e6007a" onPress={() => {}} />
        </View>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla ac a eu eras. Et augue amet id
        </Text>
        <View style={styles.interactions}>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="heart-outline" size={24} color="#fff" />
            <Text style={styles.interactionText}>4231</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Comments')}>
            <Icon name="chatbox-ellipses-outline" size={24} color="#fff" />
            <Text style={styles.interactionText}>644</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="share-social-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.musicInfo}>🎵 eyes blue like the atlantic</Text>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={30} color="#e6007a" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Discover')}>
          <Icon name="compass-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Icon name="add-circle-outline" size={42} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Icon name="notifications-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Icon name="person-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  tabText: {
    color: '#fff',
    fontSize: 18,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: -1,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    color: '#fff',
    fontSize: 16,
    marginRight: 10,
  },
  description: {
    color: '#fff',
    marginVertical: 10,
  },
  interactions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginVertical: 10,
  },
  interactionText: {
    color: '#fff',
    textAlign: 'center',
  },
  musicInfo: {
    color: '#fff',
    marginTop: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#000',
  },
});

export default HomeScreen;