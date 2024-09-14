import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.settingsButton}>
          <Icon name="cog" size={24} color="#ffffff" />
        </TouchableOpacity>
        <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
        <Text style={styles.profileName}>子骥 薛</Text>
        <Text style={styles.joinedDate}>Joined in 2024</Text>
      </View>
      
      <Text style={styles.welcomeText}>Welcome!</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Beginning meditation</Text>
        <Text style={styles.cardSubtitle}>Learn the fundamental techniques of meditation.</Text>
      </View>
      
      <Text style={styles.guestPassTitle}>Headspace 30-Day Guest Pass</Text>
      
      <View style={styles.guestPassCard}>
        <Text style={styles.guestPassText}>Bring friends along the journey</Text>
        <Text style={styles.guestPassTextBold}>Send free access to new members</Text>
      </View>
      
      <Text style={styles.progressTitle}>My progress</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d30',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 40,
  },
  settingsButton: {
    alignSelf: 'flex-end',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: -30,
  },
  profileName: {
    fontSize: 20,
    color: '#ffffff',
    marginTop: 10,
  },
  joinedDate: {
    fontSize: 14,
    color: '#dddddd',
  },
  welcomeText: {
    fontSize: 20,
    color: '#ffffff',
    marginTop: 30,
  },
  card: {
    backgroundColor: '#1a1a40',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
  },
  cardTitle: {
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 16,
    color: '#bbbbbb',
  },
  guestPassTitle: {
    fontSize: 18,
    color: '#ffffff',
    marginTop: 20,
  },
  guestPassCard: {
    backgroundColor: '#ffd700',
    borderRadius: 10,
    padding: 20,
    marginTop: 10,
  },
  guestPassText: {
    fontSize: 16,
    color: '#333333',
  },
  guestPassTextBold: {
    fontSize: 16,
    color: '#333333',
    fontWeight: 'bold',
  },
  progressTitle: {
    fontSize: 18,
    color: '#ffffff',
    marginTop: 20,
  },
});

export default ProfileScreen;