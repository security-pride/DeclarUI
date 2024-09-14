import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const SettingsScreen = () => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      
      <Text style={styles.title}>ACCOUNT</Text>
      <Text style={styles.option}>Log In to your CNN Account</Text>
      <View style={styles.separator} />
      
      <Text style={styles.option}>Create a free CNN Account</Text>
      <View style={styles.separator} />

      <Text style={styles.option}>Saved Stories</Text>
      <Text style={styles.subtext}>Find your saved articles, videos & audio here</Text>

      <Text style={styles.title}>APP PREFERENCES</Text>
      <Text style={styles.option}>Edition</Text>
      <Text style={styles.subtext}>International</Text>
      <View style={styles.separator} />
      
      <Text style={styles.option}>Alerts</Text>
      <View style={styles.separator} />

      <Text style={styles.option}>Android Notification Settings</Text>
      <View style={styles.separator} />

      <Text style={styles.option}>Enable 'This is CNN'</Text>
      <View style={styles.switchContainer}>
        <Text style={styles.subtext}>A sound effect when you open the app</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      <Text style={styles.infoText}>
        You are currently viewing CNN in light mode. To switch to dark mode, adjust the display setting on your device.
      </Text>

      <Text style={styles.title}>GENERAL</Text>
      <Text style={styles.option}>Send Feedback</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  option: {
    fontSize: 16,
    marginVertical: 10,
  },
  subtext: {
    fontSize: 14,
    color: 'gray',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    marginVertical: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  infoText: {
    fontSize: 14,
    color: 'gray',
    marginVertical: 20,
  }
});

export default SettingsScreen;