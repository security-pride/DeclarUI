import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity>
          <Icon name="settings-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.profileSection}>
        <Image
          source={require('../assets/snack-icon.png')}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Mosarraf Hossain</Text>
        <Text style={styles.designation}>Product Designer</Text>
      </View>
      <View style={styles.menu}>
        <MenuItem icon="person-outline" title="Edit Profile" />
        <MenuItem icon="notifications-outline" title="Notification" />
        <MenuItem icon="card-outline" title="Payment Method" />
        <MenuItem icon="bookmark-outline" title="Bookmarks" />
        <MenuItem icon="lock-closed-outline" title="Security" />
        <MenuItem icon="settings-outline" title="Settings" />
      </View>
    </View>
  );
};

const MenuItem = ({ icon, title }) => {
  return (
    <TouchableOpacity style={styles.menuItem}>
      <View style={styles.menuItemLeft}>
        <Icon name={icon} size={24} color="#333" />
        <Text style={styles.menuItemText}>{title}</Text>
      </View>
      <Icon name="chevron-forward-outline" size={24} color="#333" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  designation: {
    fontSize: 14,
    color: '#555',
  },
  menu: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 2,
    borderRadius: 10,
    elevation: 1,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default ProfileScreen;