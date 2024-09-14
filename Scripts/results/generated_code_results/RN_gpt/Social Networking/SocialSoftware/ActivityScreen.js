import React from 'react';
import { View, Text, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ActivityScreen = ({ navigation }) => {
  const activityList = [
    { name: 'thomas', action: 'Started following you' },
    { name: 'mike', action: 'Started following you' },
    { name: 'michael', action: 'Started following you' },
    { name: 'willie', action: 'Started following you' },
    { name: 'peter', action: 'Started following you' },
    { name: 'angela', action: 'Started following you' },
    { name: 'devon', action: 'Started following you' },
    { name: 'col', action: 'Started following you' },
    { name: 'templeton', action: 'Started following you' },
    { name: 'willie', action: 'Started following you' },
    { name: 'dori', action: 'Started following you' }
  ];

  const BottomNavIcon = ({ icon }) => {
    return <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Activity</Text>
      <View style={styles.tabs}>
        {['All', 'Answers', 'Mentions', 'Verified'].map(tab => (
          <TouchableOpacity key={tab} style={styles.tab}>
            <Text style={styles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {activityList.map(({ name, action }) => (
        <View key={name} style={styles.activityItem}>
          <Image
            source={require('../assets/snack-icon.png')}
            style={styles.profileIcon}
          />
          <View style={styles.activityTextContainer}>
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.actionText}>{action}</Text>
          </View>
          <Button title="Follow" onPress={() => {}} />
        </View>
      ))}
      <View style={styles.bottomNav}>
        {['Home', 'Search', 'Create', 'Likes', 'Profile'].map(icon => (
          <TouchableOpacity key={icon} onPress={() => {
            if (icon === 'Profile') {
              navigation.navigate('UserProfile');
            } else if (icon === 'Home') {
              navigation.navigate('Feed');
            } else {
              navigation.navigate(icon);
            }
          }}>
            <BottomNavIcon icon={icon.toLowerCase()} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    color: '#fff',
    paddingHorizontal: 16,
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  tab: {
    padding: 8,
  },
  tabText: {
    color: '#fff',
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  activityTextContainer: {
    flex: 1,
  },
  userName: {
    color: '#fff',
    fontSize: 16,
  },
  actionText: {
    color: '#888',
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  navIcon: {
    width: 24,
    height: 24,
  }
});

export default ActivityScreen;