import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/snack-icon.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <View style={styles.header}>
        <Text style={styles.headerText}>Following</Text>
        <Text style={styles.headerText}>|</Text>
        <Text style={[styles.headerText, styles.selectedText]}>For You</Text>
      </View>
      
      <View style={styles.sideMenu}>
        <Image
          source={require('../assets/snack-icon.png')}
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.iconWrapper}>
          <Icon name="heart-outline" size={30} color="#FFF" />
          <Text style={styles.iconText}>328.7K</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper}>
          <Icon name="chatbubble-outline" size={30} color="#FFF" />
          <Text style={styles.iconText}>578</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper}>
          <Icon name="arrow-redo-outline" size={30} color="#FFF" />
          <Text style={styles.iconText}>Share</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.userInfo}>
        <Text style={styles.userText}>@craig_love</Text>
        <Text style={styles.descriptionText}>
          The most satisfying Job #fyp #satisfying #roadmarking
        </Text>
        <Text style={styles.musicText}>
          <Icon name="musical-note-outline" size={12} color="#FFF" /> Roddy Roundicch - The Rou
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backgroundImage: {
    position: 'absolute',
    width: width,
    height: height,
  },
  header: {
    position: 'absolute',
    top: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#FFF',
    fontSize: 16,
    marginHorizontal: 10,
  },
  selectedText: {
    fontWeight: 'bold',
  },
  sideMenu: {
    position: 'absolute',
    right: 10,
    top: height / 3,
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 20,
  },
  iconWrapper: {
    alignItems: 'center',
    marginVertical: 10,
  },
  iconText: {
    color: '#FFF',
    fontSize: 12,
    marginTop: 5,
  },
  userInfo: {
    position: 'absolute',
    bottom: 120,
    left: 10,
    paddingHorizontal: 10,
  },
  userText: {
    color: '#FFF',
    fontSize: 16,
    marginBottom: 5,
  },
  descriptionText: {
    color: '#FFF',
    fontSize: 14,
    marginBottom: 5,
  },
  musicText: {
    color: '#FFF',
    fontSize: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default HomeScreen;