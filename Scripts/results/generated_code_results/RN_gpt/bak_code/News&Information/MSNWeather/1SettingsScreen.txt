import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <Text style={styles.statusText}>9:13</Text>
        <Text style={styles.statusText}>3G</Text>
      </View>

      <Text style={styles.sectionHeader}>Accounts</Text>
      <View style={styles.listItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        <Text style={styles.itemText}>Microsoft account</Text>
        <Text style={styles.signInText}>Sign in</Text>
      </View>
      <View style={styles.listItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        <Text style={styles.itemText}>Work or school account</Text>
        <Text style={styles.signInText}>Sign in</Text>
      </View>

      <Text style={styles.sectionHeader}>General</Text>
      <View style={styles.listItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        <Text style={styles.itemText}>Privacy</Text>
      </View>
      <View style={styles.listItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        <Text style={styles.itemText}>Region and language</Text>
      </View>
      <View style={styles.listItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        <Text style={styles.itemText}>Permissions</Text>
      </View>

      <Text style={styles.sectionHeader}>Preferences</Text>
      <View style={styles.listItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        <Text style={styles.itemText}>Homepage</Text>
      </View>
      <View style={styles.listItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        <Text style={styles.itemText}>Notifications</Text>
      </View>
      <View style={styles.listItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        <Text style={styles.itemText}>Theme</Text>
      </View>
      <View style={styles.listItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        <Text style={styles.itemText}>Search</Text>
      </View>
      <View style={styles.listItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        <Text style={styles.itemText}>Rewards</Text>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navItem}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PersonalCentral')}>
          <Text style={styles.navItem}>PersonalCentral</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navItem}>Weather</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navItem}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navItem}>Tabs</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navItem}>Apps</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
  backArrow: {
    fontSize: 24,
    color: '#000000',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0000ff',
  },
  statusText: {
    fontSize: 14,
    color: '#888888',
  },
  sectionHeader: {
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#f2f2f2',
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
  },
  signInText: {
    color: '#0000ff',
    fontSize: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
  },
  navItem: {
    fontSize: 16,
    color: '#000000',
  },
});

export default SettingsScreen;