import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MoveScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/snack-icon.png')} style={styles.imageBackground}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Explore')}>
            <Icon name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.title}>Move</Text>
        </View>

        <View style={styles.featuredSection}>
          <Image source={require('../assets/snack-icon.png')} style={styles.featuredImage} />
          <Text style={styles.featuredLabel}>Featured</Text>
          <Text style={styles.workoutTitle}>Easy Evening Stretch</Text>
          <Text style={styles.workoutDetails}>Workout • 9 min</Text>
          <TouchableOpacity style={styles.playButton}>
            <Icon name="lock-closed" size={16} color="#fff" />
            <Text style={styles.playButtonText}>Play</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.tabs}>
        <Text style={styles.tabText}>Recent</Text>
        <Text style={styles.tabTextActive}>Featured</Text>
        <View style={styles.tabUnderline} />
      </View>

      <View style={styles.workoutList}>
        <View style={styles.workoutItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.workoutThumbnail} />
          <View>
            <Text style={styles.workoutTitle}>Stress Release</Text>
            <Text style={styles.workoutDetails}>Workout • 29 min</Text>
          </View>
          <Icon name="chevron-forward" size={24} color="#fff" />
        </View>
        <View style={styles.workoutItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.workoutThumbnail} />
          <View>
            <Text style={styles.workoutTitle}>Day 1</Text>
            <Text style={styles.workoutDetails}>Workout • 22 min</Text>
          </View>
          <Icon name="chevron-forward" size={24} color="#fff" />
        </View>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.navItem}>
          <Icon name="home" size={24} color="#fff" />
          <Text style={styles.navText}>Today</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Explore')} style={styles.navItem}>
          <Icon name="compass-outline" size={24} color="#fff" />
          <Text style={styles.navText}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.navItem}>
          <Icon name="person" size={24} color="#fff" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0e27',
  },
  imageBackground: {
    width: '100%',
    height: '40%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  featuredSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  featuredImage: {
    width: 100,
    height: 100,
  },
  featuredLabel: {
    color: '#7f7fd5',
    fontSize: 12,
    marginVertical: 5,
  },
  workoutTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  workoutDetails: {
    color: '#7f7fd5',
  },
  playButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#1f7fe5',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  playButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
  },
  tabText: {
    color: '#7f7fd5',
    fontSize: 16,
  },
  tabTextActive: {
    color: '#fff',
    fontSize: 16,
  },
  tabUnderline: {
    height: 3,
    width: 60,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: [{ translateX: -30 }],
  },
  workoutList: {
    marginTop: 10,
  },
  workoutItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  workoutThumbnail: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#0a0e27',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
  },
});

export default MoveScreen;