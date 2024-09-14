import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/snack-icon.png')} style={styles.logo} />
        <Text style={styles.appName}>Opera News</Text>
      </View>
      <TouchableOpacity 
        style={styles.menuItem}
        onPress={() => navigation.navigate('OfflineReading')}
      >
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        <View style={styles.menuContent}>
          <Text style={styles.menuText}>Offline reading</Text>
          <Text style={styles.menuSubText}>Read news without the internet</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        <Text style={styles.menuText}>Read it later</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        <Text style={styles.menuText}>Blocked users</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        <Text style={styles.menuText}>Country &amp; language</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        <View style={styles.menuContent}>
          <Text style={styles.menuText}>Dark mode</Text>
          <Text style={styles.menuSubText}>Automatic</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={styles.navIcon}
          onPress={() => navigation.navigate('Home')}
        >
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navIcon}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.navTextActive}>Me</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navIcon}
          onPress={() => navigation.navigate('Settings')}
        >
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 50,
    height: 50,
  },
  appName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 20,
  },
  menuContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  menuText: {
    fontSize: 16,
    fontWeight: '500',
  },
  menuSubText: {
    fontSize: 14,
    color: '#888',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  navIcon: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  navText: {
    fontSize: 12,
    color: '#888',
  },
  navTextActive: {
    fontSize: 12,
    color: '#FF3B30',
  },
});

export default MeScreen;