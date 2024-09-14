import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Setting')} style={styles.settingsButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.profileSection}>
        <View style={styles.profilePictureContainer}>
          <Image source={require('../assets/snack-icon.png')} style={styles.profilePicture} />
          <TouchableOpacity style={styles.editIcon}>
            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.profileName}>Mosarraf Hossain</Text>
        <Text style={styles.profileRole}>Product Designer</Text>
      </View>

      <View style={styles.options}>
        <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('Edit Profile')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />
          <Text style={styles.optionText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('Notification')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />
          <Text style={styles.optionText}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('Payment Method')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />
          <Text style={styles.optionText}>Payment Method</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('Bookmarks')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />
          <Text style={styles.optionText}>Bookmarks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('Security')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />
          <Text style={styles.optionText}>Security</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('Setting')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />
          <Text style={styles.optionText}>Settings</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Ticket</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Setting</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  backButton: {
    padding: 10,
  },
  settingsButton: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    width: 24,
    height: 24,
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  profilePictureContainer: {
    position: 'relative',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editIcon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 5,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  profileRole: {
    fontSize: 16,
    color: 'gray',
  },
  options: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    elevation: 1,
  },
  optionIcon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  optionText: {
    fontSize: 16,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
  },
  navText: {
    fontSize: 12,
    color: '#FFF',
  },
});

export default ProfileScreen;