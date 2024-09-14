import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} />
        </TouchableOpacity>
        <View style={styles.profileHeader}>
          <Image
            source={require('../assets/snack-icon.png')}
            style={styles.profilePicture}
          />
          <Text style={styles.name}>Martha Craig</Text>
          <Text style={styles.subtitle}>Messenger</Text>
        </View>
      </View>

      <View style={styles.actionRow}>
        <Button title="Audio" onPress={() => {}} />
        <Button title="Video" onPress={() => {}} />
        <Button title="Profile" onPress={() => {}} />
        <Button title="Mute" onPress={() => {}} />
      </View>

      <View style={styles.divider} />

      <View style={styles.optionRow}>
        <Text>Color</Text>
        <Icon name="toggle-on" size={24} color="blue" />
      </View>
      <View style={styles.optionRow}>
        <Text>Emoji</Text>
        <Image
          source={require('../assets/snack-icon.png')}
          style={styles.optionIcon}
        />
      </View>
      <View style={styles.optionRow}>
        <Text>Nicknames</Text>
        <Icon name="chevron-right" size={24} />
      </View>

      <Text style={styles.sectionHeader}>MORE ACTIONS</Text>

      <View style={styles.optionRow}>
        <Text>Search in Conversation</Text>
        <Icon name="search" size={24} />
      </View>
      <View style={styles.optionRow}>
        <Text>Create group</Text>
        <Icon name="group" size={24} />
      </View>

      <Text style={styles.sectionHeader}>PRIVACY</Text>

      <View style={styles.optionRow}>
        <Text>Notifications</Text>
        <Text>On</Text>
      </View>
      <View style={styles.optionRow}>
        <Text>Ignore Messages</Text>
        <Icon name="remove-circle" size={24} />
      </View>
      <View style={styles.optionRow}>
        <Text>Block</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileHeader: {
    flex: 1,
    alignItems: 'center',
  },
  profilePicture: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'gray',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 16,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  sectionHeader: {
    fontSize: 14,
    color: 'gray',
    marginTop: 16,
    marginBottom: 8,
  },
  optionIcon: {
    width: 24,
    height: 24,
  },
});

export default ProfileScreen;