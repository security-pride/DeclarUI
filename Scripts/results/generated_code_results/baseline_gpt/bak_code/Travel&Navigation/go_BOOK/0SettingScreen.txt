import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Switch, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingScreen = () => {
  const [isNotificationEnabled, setIsNotificationEnabled] = React.useState(false);

  const toggleSwitch = () => setIsNotificationEnabled(previousState => !previousState);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notification</Text>
        <TouchableOpacity>
          <Icon name="settings" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.profileContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>Mosarraf Hossain</Text>
          <Text style={styles.profileTitle}>Product Designer</Text>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Icon name="create-outline" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <OptionItem
        iconName="key-outline"
        label="Change Password"
        onPress={() => {}}
      />

      <View style={styles.optionItem}>
        <View style={styles.optionItemContent}>
          <Icon name="notifications-outline" size={24} color="#000" />
          <Text style={styles.optionText}>Notification</Text>
        </View>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isNotificationEnabled ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isNotificationEnabled}
        />
      </View>

      <OptionItem
        iconName="card-outline"
        label="Payment Method"
        onPress={() => {}}
      />

      <OptionItem
        iconName="shield-checkmark-outline"
        label="Security"
        onPress={() => {}}
      />

      <OptionItem
        iconName="people-outline"
        label="Invite Friend"
        onPress={() => {}}
      />

      <OptionItem
        iconName="document-text-outline"
        label="Terms & Condition"
        onPress={() => {}}
      />

      <OptionItem
        iconName="finger-print-outline"
        label="Privacy Policy"
        onPress={() => {}}
      />

      <TouchableOpacity style={styles.logoutButton}>
        <Icon name="log-out-outline" size={20} color="#fff" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const OptionItem = ({ iconName, label, onPress }) => (
  <TouchableOpacity style={styles.optionItem} onPress={onPress}>
    <View style={styles.optionItemContent}>
      <Icon name={iconName} size={24} color="#000" />
      <Text style={styles.optionText}>{label}</Text>
    </View>
    <Icon name="chevron-forward-outline" size={24} color="#000" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    marginVertical: 8,
    borderRadius: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileTextContainer: {
    flex: 1,
    marginLeft: 16,
  },
  profileName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  profileTitle: {
    color: '#777',
  },
  editButton: {
    backgroundColor: '#333',
    borderRadius: 20,
    padding: 6,
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  optionItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: '600',
  },
  logoutButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingVertical: 16,
    margin: 16,
    borderRadius: 8,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default SettingScreen;