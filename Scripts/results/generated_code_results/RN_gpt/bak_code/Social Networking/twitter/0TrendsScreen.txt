import React from 'react';
import { View, Text, TextInput, Image, Button, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TrendsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.userProfileIcon} />
        </TouchableOpacity>
        <TextInput
          style={styles.searchBar}
          placeholder="Search Twitter"
          onFocus={() => navigation.navigate('Search')}
        />
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.gearIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.mainContent}>
        <Text style={styles.sectionLabel}>Trends for you</Text>
        <Text style={styles.noTrendsMessage}>No new trends for you</Text>
        <Text style={styles.additionalInfo}>
          It seems like there’s not a lot to show you right now, but you can see trends for other areas
        </Text>
        <Button title="Change location" onPress={() => {/* Handle location change */}} />
      </View>
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.fab} onPress={() => {/* Handle new tweet action */}}>
        <Image source={require('../assets/snack-icon.png')} style={styles.fabIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f8fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e8ed',
  },
  userProfileIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  searchBar: {
    flex: 1,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#edf0f1',
    borderRadius: 20,
  },
  gearIcon: {
    width: 24,
    height: 24,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  sectionLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  noTrendsMessage: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  additionalInfo: {
    fontSize: 14,
    color: '#657786',
    textAlign: 'center',
    marginBottom: 16,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 56,
    borderTopWidth: 1,
    borderTopColor: '#e1e8ed',
    backgroundColor: '#ffffff',
  },
  icon: {
    width: 28,
    height: 28,
  },
  fab: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#1DA1F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabIcon: {
    width: 28,
    height: 28,
    tintColor: '#ffffff',
  },
});

export default TrendsScreen;