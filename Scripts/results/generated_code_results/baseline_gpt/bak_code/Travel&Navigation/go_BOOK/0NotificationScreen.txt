import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const NotificationScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back-outline" size={24} />
        </TouchableOpacity>
        <Text style={styles.title}>Search</Text>
        <TouchableOpacity>
          <Icon name="ellipsis-horizontal-outline" size={24} />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Today</Text>

        <NotificationItem
          image={require('../assets/snack-icon.png')}
          name="Mohammad Reza"
          action="commented on"
          details="your UI/UX Designer"
          time="about 2 hours ago"
          iconName="chatbubble-outline"
        />

        <NotificationItem
          image={require('../assets/snack-icon.png')}
          name="Sandra Redden"
          action="like your"
          details="Web UI Design Post."
          time="about 2 hours ago"
          iconName="heart-outline"
        />

        <NotificationItem
          image={require('../assets/snack-icon.png')}
          name="Merry Rose"
          action="joined to"
          details="Final Presentation 🔥"
          time="about 2 hours ago"
          iconName="add-outline"
        />

        <NotificationItem
          image={require('../assets/snack-icon.png')}
          name="Adan Eslishtt"
          action="commented on"
          details="your New shot"
          time="about 2 hours ago"
          iconName="chatbubble-outline"
        />

        <NotificationItem
          image={require('../assets/snack-icon.png')}
          name="Michael Pinson"
          action="want to follow you."
          time="about 2 hours ago"
          iconName="chatbubble-outline"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Yesterday</Text>

        <NotificationItem
          image={require('../assets/snack-icon.png')}
          name="Merry Rose"
          action="joined to"
          details="Final Presentation 🔥"
          time="Yesterday"
          iconName="add-outline"
        />

        <NotificationItem
          image={require('../assets/snack-icon.png')}
          name="Sandra Redden"
          action="like your"
          details="Web UI Design Post."
          time="Yesterday"
          iconName="heart-outline"
        />
      </View>
    </ScrollView>
  );
};

const NotificationItem = ({ image, name, action, details, time, iconName }) => (
  <View style={styles.notificationItem}>
    <Image source={image} style={styles.avatar} />
    <View style={styles.textContainer}>
      <Text style={styles.notificationText}>
        <Text style={styles.boldText}>{name}</Text> {action} {details}
      </Text>
      <Text style={styles.timeText}>{time}</Text>
    </View>
    <Icon name={iconName} size={24} style={styles.icon} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  notificationText: {
    fontSize: 14,
    color: '#333',
  },
  boldText: {
    fontWeight: 'bold',
  },
  timeText: {
    fontSize: 12,
    color: '#999',
  },
  icon: {
    color: '#555',
  },
});

export default NotificationScreen;