import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.gearIcon}>
          <Icon name="settings-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <Image 
          source={require('../assets/snack-icon.png')} 
          style={styles.avatar} 
        />
        <Text style={styles.userName}>子骄 薛</Text>
        <Text style={styles.joinDate}>Joined in 2024</Text>
      </View>
      <Text style={styles.welcomeText}>Welcome!</Text>
      <View style={styles.meditationCard}>
        <Text style={styles.cardTitle}>Beginning meditation</Text>
        <Text style={styles.cardDescription}>Learn the fundamental techniques of meditation.</Text>
      </View>
      <Text style={styles.guestPassTitle}>Headspace 30-Day Guest Pass</Text>
      <View style={styles.guestPassBanner}>
        <Text style={styles.guestPassDescription}>Bring friends along the journey</Text>
        <Text style={styles.guestPassAction}>Send free access to new members</Text>
      </View>
      <Text style={styles.progressTitle}>My progress</Text>
      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Home')}
        >
          <Icon name="home-outline" size={24} color="#fff" />
          <Text style={styles.navText}>Today</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="compass-outline" size={24} color="#fff" />
          <Text style={styles.navText}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="person-outline" size={24} color="#fff" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1333',
  },
  header: {
    alignItems: 'center',
    marginVertical: 20,
  },
  gearIcon: {
    position: 'absolute',
    top: 10,
    right: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  joinDate: {
    color: '#fff',
    fontSize: 16,
  },
  welcomeText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 15,
    marginLeft: 20,
  },
  meditationCard: {
    backgroundColor: '#2d2a72',
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDescription: {
    color: '#cfcfe4',
    fontSize: 14,
    marginTop: 5,
  },
  guestPassTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 15,
    marginLeft: 20,
  },
  guestPassBanner: {
    backgroundColor: '#f5b700',
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  guestPassDescription: {
    color: '#5a5a73',
    fontSize: 14,
    marginBottom: 5,
  },
  guestPassAction: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 15,
    marginLeft: 20,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#13154e',
    alignItems: 'center',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default ProfileScreen;