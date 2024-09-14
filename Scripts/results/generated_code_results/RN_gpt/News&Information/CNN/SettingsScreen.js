import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Image } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = React.useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      
      <Text style={styles.sectionLabel}>ACCOUNT</Text>
      <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
        <Text style={styles.optionText}>Log In to your CNN Account</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('CreateAccont')}>
        <Text style={styles.optionText}>Create a free CNN Account</Text>
      </TouchableOpacity>

      <Text style={styles.optionTextDescription}>
        Saved Stories
      </Text>
      <Text style={styles.subText}>
        Find your saved articles, videos & audio here
      </Text>

      <Text style={styles.sectionLabel}>APP PREFERENCES</Text>
      <Text style={styles.optionText}>Edition</Text>
      <Text style={styles.subText}>International</Text>
      <Text style={styles.optionText}>Alerts</Text>
      <Text style={styles.optionText}>Android Notification Settings</Text>

      <View style={styles.switchRow}>
        <Text style={styles.optionText}>Enable 'This is CNN'</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <Text style={styles.subText}>
        A sound effect when you open the app
      </Text>

      <Text style={styles.modeText}>
        You are currently viewing CNN in light mode. To switch to dark mode, adjust the display setting on your device.
      </Text>

      <Text style={styles.sectionLabel}>GENERAL</Text>
      <TouchableOpacity>
        <Text style={styles.optionText}>Send Feedback</Text>
      </TouchableOpacity>

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Elections')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text>Elections</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text>Watch</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.activeNavText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#555',
    marginVertical: 8,
  },
  optionText: {
    fontSize: 16,
    paddingVertical: 8,
  },
  optionTextDescription: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 8,
  },
  subText: {
    fontSize: 14,
    color: '#888',
    marginBottom: 16,
  },
  modeText: {
    fontSize: 14,
    color: '#444',
    marginVertical: 16,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 64,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  activeNavText: {
    color: 'red',
  },
  icon: {
    height: 24,
    width: 24,
    marginBottom: 4,
  },
});

export default SettingsScreen;