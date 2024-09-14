import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Notification</Text>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="settings" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.profileContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>Mosarraf Hossain</Text>
          <Text style={styles.profileTitle}>Product Designer</Text>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Icon name="create-outline" size={20} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <ListItem title="Change Password" iconName="key" />
        <View style={styles.notificationItem}>
          <Icon name="notifications-outline" size={20} color="#000" style={styles.icon} />
          <Text style={styles.listTitle}>Notification</Text>
          <Switch />
        </View>
        <ListItem title="Payment Method" iconName="wallet" />
        <ListItem title="Security" iconName="shield-checkmark-outline" />
        <ListItem title="Invite Friend" iconName="person-add-outline" />
        <ListItem title="Terms & Condition" iconName="alert-circle-outline" />
        <ListItem title="Privacy Policy" iconName="document-text-outline" />
      </View>
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const ListItem = ({ title, iconName }) => (
  <TouchableOpacity style={styles.listItem}>
    <Icon name={iconName} size={20} color="#000" style={styles.icon} />
    <Text style={styles.listTitle}>{title}</Text>
    <Icon name="chevron-forward-outline" size={20} color="#000" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconButton: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileContainer: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileTitle: {
    color: '#888',
  },
  editButton: {
    padding: 5,
  },
  listContainer: {
    marginBottom: 20,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  listTitle: {
    flex: 1,
    fontSize: 16,
  },
  notificationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  logoutButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#000',
    borderRadius: 10,
    padding: 15,
  },
  logoutText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default SettingScreen;