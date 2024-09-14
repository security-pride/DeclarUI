import React, { useState } from 'react';
import { View, Text, ScrollView, Switch, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SettingsScreen = () => {
const [isEnabled, setIsEnabled] = useState(false);
const navigation = useNavigation();
const toggleSwitch = () => setIsEnabled(previousState => !previousState);
const navigateToHome = () => {
navigation.navigate('home');
};
const navigateToLogin = () => {
navigation.navigate('LogIn');
};
const navigateToCreateAccount = () => {
navigation.navigate('CreateAccont');
};
return (
<View style={styles.container}>
<View style={styles.header}>
<Text style={styles.headerTitle}>Settings</Text>
<View style={styles.statusBar}>
<Text style={styles.time}>6:17</Text>
<View style={styles.statusIcons}>
<View style={styles.icon} />
<View style={styles.icon} />
<View style={styles.icon} />
</View>
</View>
</View>
  <ScrollView style={styles.content}>
    <Text style={styles.sectionHeader}>ACCOUNT</Text>

    <TouchableOpacity style={styles.settingItem} onPress={navigateToLogin}>
      <Text style={styles.settingText}>Log In to your CNN Account</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.settingItem} onPress={navigateToCreateAccount}>
      <Text style={styles.settingText}>Create a free CNN Account</Text>
    </TouchableOpacity>

    <View style={styles.settingItem}>
      <Text style={styles.settingText}>Saved Stories</Text>
      <Text style={styles.settingDescription}>Find your saved articles, videos & audio here</Text>
    </View>

    <Text style={styles.sectionHeader}>APP PREFERENCES</Text>

    <View style={styles.settingItem}>
      <Text style={styles.settingText}>Edition</Text>
      <Text style={styles.settingDescription}>International</Text>
    </View>

    <TouchableOpacity style={styles.settingItem}>
      <Text style={styles.settingText}>Alerts</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.settingItem}>
      <Text style={styles.settingText}>Android Notification Settings</Text>
    </TouchableOpacity>

    <View style={styles.settingItem}>
      <View style={styles.switchContainer}>
        <Text style={styles.settingText}>Enable 'This is CNN'</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <Text style={styles.settingDescription}>A sound effect when you open the app</Text>
    </View>

    <Text style={styles.infoText}>
      You are currently viewing CNN in light mode. To switch to dark mode, adjust the display setting on your device.
    </Text>

    <Text style={styles.sectionHeader}>GENERAL</Text>

    <TouchableOpacity style={styles.settingItem}>
      <Text style={styles.settingText}>Send Feedback</Text>
    </TouchableOpacity>
  </ScrollView>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem} onPress={navigateToHome}>
      <View style={styles.navIcon} />
      <Text style={styles.navText}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <View style={styles.navIcon} />
      <Text style={styles.navText}>Elections</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <View style={styles.navIcon} />
      <Text style={styles.navText}>Watch</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <View style={styles.navIcon} />
      <Text style={[styles.navText, styles.activeNavText]}>Settings</Text>
    </TouchableOpacity>
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
header: {
padding: 20,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
headerTitle: {
fontSize: 24,
fontWeight: 'bold',
},
statusBar: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginTop: 10,
},
time: {
fontSize: 14,
},
statusIcons: {
flexDirection: 'row',
},
icon: {
width: 20,
height: 20,
backgroundColor: '#000',
marginLeft: 5,
borderRadius: 10,
},
content: {
flex: 1,
},
sectionHeader: {
fontSize: 12,
fontWeight: 'bold',
color: '#888',
padding: 15,
backgroundColor: '#f5f5f5',
},
settingItem: {
padding: 15,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
settingText: {
fontSize: 16,
},
settingDescription: {
fontSize: 14,
color: '#888',
marginTop: 5,
},
switchContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
},
infoText: {
padding: 15,
fontSize: 14,
color: '#888',
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
paddingVertical: 10,
},
navItem: {
alignItems: 'center',
},
navIcon: {
width: 24,
height: 24,
backgroundColor: '#888',
marginBottom: 5,
},
navText: {
fontSize: 12,
},
activeNavText: {
color: 'red',
},
});
export default SettingsScreen;