import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Switch, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = () => {
  const [isMuteNotifications, setIsMuteNotifications] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="more-vert" size={24} />
        </TouchableOpacity>
      </View>
      <View style={styles.profileInfo}>
        <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
        <View style={styles.profileDetails}>
          <Text style={styles.profileName}>Antonio Banderas</Text>
          <Text style={styles.onlineStatus}>Online</Text>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.sectionRow}>
          <Text style={styles.sectionText}>Mute notifications</Text>
          <Switch
            value={isMuteNotifications}
            onValueChange={(value) => setIsMuteNotifications(value)}
          />
        </View>
        <View style={styles.sectionRow}>
          <Text style={styles.sectionText}>Custom notifications</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bio and phone number</Text>
        <Text style={styles.sectionInfo}>UI Design enthusiast</Text>
        <Text style={styles.sectionDate}>June 24, 2020</Text>
        <View style={styles.sectionRow}>
          <Text style={styles.sectionPhone}>+62 009 1212 3131</Text>
          <View style={styles.icons}>
            <Icon name="call" size={24} />
            <Icon name="message" size={24} style={styles.icon} />
            <Icon name="videocam" size={24} style={styles.icon} />
          </View>
        </View>
      </View>
      <View style={styles.tabs}>
        <Text style={styles.tab}>Media</Text>
        <Text style={styles.tab}>Documents</Text>
        <Text style={styles.tab}>Links</Text>
        <Text style={styles.tab}>Groups</Text>
      </View>
      <View style={styles.mediaGrid}>
        {
          // Placeholder empty blocks for media grid
          [...Array(6)].map((_, index) => (
            <View key={index} style={styles.mediaItem} />
          ))
        }
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  profileDetails: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  onlineStatus: {
    color: 'green',
  },
  section: {
    backgroundColor: '#fff',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  sectionText: {
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  sectionInfo: {
    fontSize: 16,
    marginBottom: 5,
  },
  sectionDate: {
    fontSize: 14,
    color: '#999',
    marginBottom: 10,
  },
  sectionPhone: {
    fontSize: 16,
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f8f8f8',
    paddingVertical: 10,
  },
  tab: {
    fontSize: 16,
    fontWeight: '600',
  },
  mediaGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
  },
  mediaItem: {
    width: '48%',
    height: 100,
    backgroundColor: '#ccc',
    margin: '1%',
  },
});

export default ProfileScreen;