import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const NotificationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button title="Back" onPress={() => navigation.goBack()} />
        <Text style={styles.searchLabel}>Search</Text>
        <TouchableOpacity style={styles.ellipsis}>
          <Icon name="more-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Text style={styles.sectionLabel}>Today</Text>
        {NotificationItem("Mohammad Reza", "commented on your UI/UX Designer", "2 hour ago", "message-circle", navigation)}
        {NotificationItem("Sandra Redden", "like your Web UI Design Post.", "2 hour ago", "heart", navigation)}
        {NotificationItem("Merry Rose", "joined to Final Presentation", "2 hour ago", "zap", navigation, true)}
        {NotificationItem("Adan Eslishth", "commented on your New shot", "2 hour ago", "message-circle", navigation)}
        {NotificationItem("Michael Pinson", "want to follow you.", "2 hour ago", "message-circle", navigation)}
        <Text style={styles.sectionLabel}>Yesterday</Text>
        {NotificationItem("Merry Rose", "joined to Final Presentation", "1 day ago", "zap", navigation, true)}
        {NotificationItem("Sandra Redden", "like your Web UI Design Post.", "1 day ago", "heart", navigation)}
      </ScrollView>
      <View style={styles.bottomNav}>
        {BottomNavButton("Home", "home", () => navigation.navigate("Home"))}
        {BottomNavButton("Notification", "bell", () => navigation.navigate("Notification"))}
        {BottomNavButton("Ticket", "tag", () => navigation.navigate("Ticket"))}
        {BottomNavButton("History", "clock", () => navigation.navigate("History"))}
        {BottomNavButton("Setting", "settings", () => navigation.navigate("Setting"))}
      </View>
    </View>
  );
};

const NotificationItem = (name, message, time, icon, navigation, isImportant = false) => (
  <View style={styles.notificationCard}>
    <Image source={require('../assets/snack-icon.png')} style={styles.profilePicture} />
    <View style={styles.notificationTextContainer}>
      <Text style={styles.notificationText}>
        <Text style={{ fontWeight: 'bold' }}>{name} </Text>
        {message}
      </Text>
      <Text style={styles.timestamp}>{time}</Text>
    </View>
    <TouchableOpacity style={[styles.iconButton, isImportant && { backgroundColor: '#FFD700' }]}>
      <Icon name={icon} size={20} color="black" />
    </TouchableOpacity>
  </View>
);

const BottomNavButton = (label, icon, onPress) => (
  <TouchableOpacity style={styles.navButton} onPress={onPress}>
    <Icon name={icon} size={24} color="black" />
    <Text style={styles.navLabel}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  searchLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ellipsis: {
    padding: 8,
  },
  sectionLabel: {
    marginVertical: 8,
    marginLeft: 16,
    fontWeight: 'bold',
    fontSize: 16,
  },
  notificationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    borderRadius: 8,
    boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.1)',
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  notificationTextContainer: {
    flex: 1,
  },
  notificationText: {
    fontSize: 14,
  },
  timestamp: {
    fontSize: 12,
    color: 'grey',
    marginTop: 4,
  },
  iconButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: '#EAEAEA',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: 'white',
    borderTopColor: '#EAEAEA',
    borderTopWidth: 1,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navButton: {
    alignItems: 'center',
  },
  navLabel: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default NotificationScreen;