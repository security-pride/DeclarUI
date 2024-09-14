import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.profileText}>
          <Text style={styles.deviceText}>iPhone</Text>
          <Text style={styles.subText}>MetaQuotes Software Corp.</Text>
          <Text style={styles.subText}>152932025 - MetaQuotes-Demo</Text>
          <Text style={styles.subText}>Main</Text>
        </View>
        <View style={styles.demoBadge}>
          <Text style={styles.demoText}>Demo</Text>
        </View>
      </View>
      <View style={styles.divider} />
      {settingsOptions.map((option, index) => (
        <TouchableOpacity key={index} style={styles.optionContainer}>
          <Image source={{uri: option.icon}} style={styles.icon} />
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>{option.title}</Text>
            {option.subtitle && <Text style={styles.optionSubText}>{option.subtitle}</Text>}
          </View>
          <Icon name="chevron-forward" size={20} color="gray" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const settingsOptions = [
  {
    icon: '../assets/snack-icon.png',
    title: 'New Account',
  },
  {
    icon: '../assets/snack-icon.png',
    title: 'Mailbox',
    subtitle: 'Built-in Virtual Hosting — trading robots and signals',
  },
  {
    icon: '../assets/snack-icon.png',
    title: 'News',
    subtitle: 'UAE is poised to hit its oil capacity a year earlier t...',
  },
  {
    icon: '../assets/snack-icon.png',
    title: 'Tradays',
    subtitle: 'Economic calendar',
  },
  {
    icon: '../assets/snack-icon.png',
    title: 'Chat and Messages',
    subtitle: 'Sign in to MQL5.community!',
  },
  {
    icon: '../assets/snack-icon.png',
    title: 'Traders Community',
  },
  {
    icon: '../assets/snack-icon.png',
    title: 'MQL5 Algo Trading',
  },
  {
    icon: '../assets/snack-icon.png',
    title: 'OTP',
    subtitle: 'One-time password generator',
  },
  {
    icon: '../assets/snack-icon.png',
    title: 'Interface',
    subtitle: 'English',
  },
  {
    icon: '../assets/snack-icon.png',
    title: 'Charts',
  },
  {
    icon: '../assets/snack-icon.png',
    title: 'Journal',
  },
];

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1C1E',
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#333',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#2C2C2E',
  },
  profileText: {
    flex: 1,
  },
  deviceText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subText: {
    color: 'gray',
    fontSize: 14,
  },
  demoBadge: {
    backgroundColor: 'green',
    borderRadius: 5,
    padding: 2,
    alignSelf: 'center',
  },
  demoText: {
    color: 'white',
    fontSize: 12,
  },
  divider: {
    height: 1,
    backgroundColor: '#444',
    marginVertical: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  optionTextContainer: {
    flex: 1,
  },
  optionText: {
    color: 'white',
    fontSize: 16,
  },
  optionSubText: {
    color: 'gray',
    fontSize: 14,
  },
});

export default SettingsScreen;