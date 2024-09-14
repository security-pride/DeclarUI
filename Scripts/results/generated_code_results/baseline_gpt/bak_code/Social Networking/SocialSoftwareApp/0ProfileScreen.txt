import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
        <Text style={styles.name}>Martha Craig</Text>
        <Text style={styles.subtitle}>Messenger</Text>
      </View>
      
      <View style={styles.buttonsRow}>
        <TouchableOpacity style={styles.button}>
          <Icon name="call-outline" size={24} />
          <Text style={styles.buttonText}>Audio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="videocam-outline" size={24} />
          <Text style={styles.buttonText}>Video</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="person-outline" size={24} />
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="notifications-off-outline" size={24} />
          <Text style={styles.buttonText}>Mute</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Color</Text>
        <Icon name="ellipse" size={24} color="blue" />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Emoji</Text>
        <Text style={styles.emoji}>👍</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nicknames</Text>
        <Icon name="chevron-forward-outline" size={24} />
      </View>

      <Text style={styles.moreActionsText}>MORE ACTIONS</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Search in Conversation</Text>
        <Icon name="search-outline" size={24} />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Create group</Text>
        <MaterialIcons name="group" size={24} />
      </View>

      <Text style={styles.privacyText}>PRIVACY</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <Text style={styles.sectionValue}>On</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ignore Messages</Text>
        <MaterialIcons name="block" size={24} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  name: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  button: {
    alignItems: 'center',
  },
  buttonText: {
    marginTop: 5,
    fontSize: 14,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  sectionTitle: {
    fontSize: 16,
  },
  emoji: {
    fontSize: 24,
  },
  sectionValue: {
    fontSize: 16,
    color: 'gray',
  },
  moreActionsText: {
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
    fontSize: 12,
    color: 'gray',
  },
  privacyText: {
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
    fontSize: 12,
    color: 'gray',
  },
});

export default ProfileScreen;