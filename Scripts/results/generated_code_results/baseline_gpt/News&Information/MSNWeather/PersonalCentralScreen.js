import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ProgressBarAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PersonalCentralScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
          <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.signInText}>Tap to sign in</Text>
            <Icon name="chevron-forward" size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.rewardsContainer}>
        <View style={styles.rewardsBox}>
          <View style={styles.rewardsRow}>
            <View style={styles.rewardsColumn}>
              <Text style={styles.rewardsCaption}>My Rewards</Text>
              <Text style={styles.rewardsValue}>0</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.rewardsColumn}>
              <Text style={styles.rewardsCaption}>Today's points</Text>
              <View style={styles.progressRow}>
                <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={0} color="#c4c4c4" />
                <Text style={styles.pointsText}>0/30</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      
      <View style={styles.menuContainer}>
        <MenuItem icon="notifications-outline" title="Notifications" />
        <MenuItem icon="settings-outline" title="Settings" />
        <MenuItem icon="star-outline" title="Interests" />
        <MenuItem icon="time-outline" title="History" />
        <MenuItem icon="bookmarks-outline" title="Bookmarks and saves" />
      </View>
    </ScrollView>
  );
};

const MenuItem = ({ icon, title }) => (
  <TouchableOpacity style={styles.menuItem}>
    <Icon name={icon} size={24} color="#000" />
    <Text style={styles.menuItemText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  signInButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
  },
  signInText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rewardsContainer: {
    padding: 16,
  },
  rewardsBox: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 1,
  },
  rewardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rewardsColumn: {
    alignItems: 'center',
  },
  rewardsCaption: {
    fontSize: 14,
    color: '#888',
  },
  rewardsValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  divider: {
    width: 1,
    backgroundColor: '#e0e0e0',
    height: '100%',
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointsText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#888',
  },
  menuContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  menuItemText: {
    marginLeft: 16,
    fontSize: 16,
  },
});

export default PersonalCentralScreen;