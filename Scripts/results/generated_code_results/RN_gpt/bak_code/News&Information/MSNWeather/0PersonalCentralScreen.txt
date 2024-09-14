import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const PersonalCentralScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.profileSection} onPress={() => navigation.navigate('PersonalCentral')}>
        <Image source={require('../assets/snack-icon.png')} style={styles.profileIcon} />
        <View style={styles.profileTextSection}>
          <Text style={styles.signInText}>Tap to sign in</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
        </View>
      </TouchableOpacity>

      <View style={styles.rewardsSection}>
        <Text style={styles.rewardLabel}>My Rewards</Text>
        <Text style={styles.pointsLabel}>Today's points</Text>
        <Text style={styles.points}>0/30</Text>
      </View>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Notifications')}>
        <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
        <Text style={styles.menuText}>Notifications</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Settings')}>
        <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
        <Text style={styles.menuText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Interests')}>
        <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
        <Text style={styles.menuText}>Interests</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('History')}>
        <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
        <Text style={styles.menuText}>History</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Bookmarks')}>
        <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
        <Text style={styles.menuText}>Bookmarks and saves</Text>
      </TouchableOpacity>

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Weather')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Weather</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Apps')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Apps</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F5FF',
    paddingVertical: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  profileIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  profileTextSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signInText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  arrowIcon: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  rewardsSection: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  rewardLabel: {
    fontSize: 14,
  },
  pointsLabel: {
    fontSize: 14,
  },
  points: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 15,
  },
  menuIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  menuText: {
    fontSize: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  navIcon: {
    width: 30,
    height: 30,
  },
  navText: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default PersonalCentralScreen;