import React, { useState, useEffect } from 'react';
import { View, Text, Switch, TouchableOpacity, ScrollView, StyleSheet, StatusBar, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Settings = () => {
const navigation = useNavigation();
const [newsNotification, setNewsNotification] = useState(true);
const [message, setMessage] = useState(true);
const [currentTime, setCurrentTime] = useState('');
useEffect(() => {
const updateTime = () => {
const now = new Date();
setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
};
updateTime();
const interval = setInterval(updateTime, 60000);
return () => clearInterval(interval);
}, []);
const handleBackPress = () => {
navigation.navigate('Me');
};
const handleHomePress = () => {
navigation.navigate('Home');
};
const handleMePress = () => {
navigation.navigate('Me');
};
return (
<View style={styles.container}>
<StatusBar barStyle="dark-content" />
<View style={styles.header}>
<TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
<Text style={styles.headerTitle}>Settings</Text>
<View style={styles.statusIcons}>
<Text style={styles.timeDisplay}>{currentTime}</Text>
<Image source={require('../assets/snack-icon.png')} style={styles.batteryIcon} />
<Image source={require('../assets/snack-icon.png')} style={styles.networkIcon} />
</View>
</View>
  <ScrollView style={styles.content}>
    <Text style={styles.sectionHeader}>Features</Text>
    
    <View style={styles.settingItem}>
      <Text style={styles.settingLabel}>News notification</Text>
      <Switch
        value={newsNotification}
        onValueChange={setNewsNotification}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={newsNotification ? "#f5dd4b" : "#f4f3f4"}
      />
    </View>

    <TouchableOpacity style={styles.settingItem}>
      <Text style={styles.settingLabel}>News notification settings</Text>
    </TouchableOpacity>

    <View style={styles.settingItem}>
      <Text style={styles.settingLabel}>Message</Text>
      <Switch
        value={message}
        onValueChange={setMessage}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={message ? "#f5dd4b" : "#f4f3f4"}
      />
    </View>

    <TouchableOpacity style={styles.settingItem}>
      <Text style={styles.settingLabel}>Messaging settings</Text>
    </TouchableOpacity>

    <View style={styles.settingItem}>
      <Text style={styles.settingLabel}>Reader mode</Text>
      <Text style={styles.settingValue}>Auto</Text>
    </View>

    <TouchableOpacity style={styles.settingItem}>
      <Text style={styles.settingLabel}>Clear cache</Text>
    </TouchableOpacity>

    <Text style={styles.sectionHeader}>Data</Text>

    <View style={styles.settingItem}>
      <Text style={styles.settingLabel}>Data Saving</Text>
      <Text style={styles.settingValue}>0 B saved</Text>
    </View>

    <View style={styles.settingItem}>
      <Text style={styles.settingLabel}>Pictureless Mode</Text>
      <Text style={styles.settingValue}>Disabled</Text>
    </View>

    <Text style={styles.sectionHeader}>Terms</Text>

    <TouchableOpacity style={styles.settingItem}>
      <Text style={styles.settingLabel}>End-user license agreement</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.settingItem}>
      <Text style={styles.settingLabel}>Privacy statement</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.settingItem}>
      <Text style={styles.settingLabel}>Delete my data</Text>
    </TouchableOpacity>
  </ScrollView>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem} onPress={handleHomePress}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={handleMePress}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={[styles.navText, styles.activeNavText]}>Me</Text>
    </TouchableOpacity>
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#FFFFFF',
},
header: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
borderBottomWidth: 1,
borderBottomColor: '#E0E0E0',
},
backButton: {
padding: 5,
},
headerTitle: {
flex: 1,
fontSize: 20,
fontWeight: 'bold',
marginLeft: 10,
},
statusIcons: {
flexDirection: 'row',
alignItems: 'center',
},
timeDisplay: {
marginRight: 5,
},
batteryIcon: {
width: 20,
height: 20,
marginRight: 5,
},
networkIcon: {
width: 20,
height: 20,
},
content: {
flex: 1,
},
sectionHeader: {
fontSize: 16,
color: '#888',
marginTop: 20,
marginBottom: 10,
marginLeft: 15,
},
settingItem: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 15,
borderBottomWidth: 1,
borderBottomColor: '#E0E0E0',
},
settingLabel: {
fontSize: 16,
},
settingValue: {
fontSize: 14,
color: '#888',
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#E0E0E0',
paddingVertical: 10,
},
navItem: {
alignItems: 'center',
},
navIcon: {
width: 24,
height: 24,
},
navText: {
fontSize: 12,
marginTop: 5,
},
activeNavText: {
color: '#FF0000',
},
icon: {
width: 24,
height: 24,
},
});
export default Settings;