import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Settings</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Accounts</Text>
        <TouchableOpacity style={styles.row}>
          <Icon name="person-outline" size={24} color="grey" />
          <Text style={styles.rowText}>Microsoft account</Text>
          <Text style={styles.signIn}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Icon name="briefcase-outline" size={24} color="grey" />
          <Text style={styles.rowText}>Work or school account</Text>
          <Text style={styles.signIn}>Sign in</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>General</Text>
        <TouchableOpacity style={styles.row}>
          <Icon name="shield-checkmark-outline" size={24} color="grey" />
          <Text style={styles.rowText}>Privacy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Icon name="globe-outline" size={24} color="grey" />
          <Text style={styles.rowText}>Region and language</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Icon name="lock-closed-outline" size={24} color="grey" />
          <Text style={styles.rowText}>Permissions</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        <TouchableOpacity style={styles.row}>
          <Icon name="home-outline" size={24} color="grey" />
          <Text style={styles.rowText}>Homepage</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Icon name="notifications-outline" size={24} color="grey" />
          <Text style={styles.rowText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Icon name="color-palette-outline" size={24} color="grey" />
          <Text style={styles.rowText}>Theme</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Icon name="search-outline" size={24} color="grey" />
          <Text style={styles.rowText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Icon name="trophy-outline" size={24} color="grey" />
          <Text style={styles.rowText}>Rewards</Text>
        </TouchableOpacity>
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
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  title: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    marginBottom: 10,
    color: 'grey',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  rowText: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
  },
  signIn: {
    color: '#007BFF',
  },
});

export default SettingsScreen;