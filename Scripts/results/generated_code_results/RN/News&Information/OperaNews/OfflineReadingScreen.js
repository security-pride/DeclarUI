import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Switch, StyleSheet, StatusBar, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const OfflineReading = () => {
const navigation = useNavigation();
const [isWifiEnabled, setIsWifiEnabled] = useState(false);
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
const handleDownloadPress = () => {
// Implement download functionality
};
return (
<View style={styles.container}>
<StatusBar barStyle="dark-content" />
<View style={styles.header}>
<TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
<Text style={styles.headerTitle}>Offline reading</Text>
<TouchableOpacity style={styles.trashButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
<TouchableOpacity style={styles.settingsButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
</View>
  <View style={styles.content}>
    <View style={styles.setting}>
      <Text style={styles.settingText}>Automatic download on WiFi</Text>
      <Switch
        value={isWifiEnabled}
        onValueChange={setIsWifiEnabled}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isWifiEnabled ? "#f5dd4b" : "#f4f3f4"}
      />
    </View>

    <View style={styles.downloadSection}>
      <Image source={require('../assets/snack-icon.png')} style={styles.downloadIcon} />
      <Text style={styles.downloadText}>Download articles</Text>
      <TouchableOpacity style={styles.downloadButton} onPress={handleDownloadPress}>
        <Text style={styles.downloadButtonText}>DOWNLO...</Text>
      </TouchableOpacity>
    </View>

    <ImageBackground
      source={require('../assets/snack-icon.png')}
      style={styles.imageBackground}
      imageStyle={styles.imageBackgroundStyle}
    >
      <Text style={styles.imageText}>Download the latest news in 10 seconds</Text>
    </ImageBackground>
  </View>

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
trashButton: {
padding: 5,
},
settingsButton: {
padding: 5,
},
icon: {
width: 24,
height: 24,
},
content: {
flex: 1,
padding: 20,
},
setting: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: 20,
},
settingText: {
fontSize: 16,
},
downloadSection: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 20,
},
downloadIcon: {
width: 24,
height: 24,
marginRight: 10,
},
downloadText: {
flex: 1,
fontSize: 16,
},
downloadButton: {
backgroundColor: '#007AFF',
padding: 10,
borderRadius: 5,
},
downloadButtonText: {
color: '#FFFFFF',
fontWeight: 'bold',
},
imageBackground: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
imageBackgroundStyle: {
opacity: 0.1,
},
imageText: {
fontSize: 16,
textAlign: 'center',
color: '#000000',
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
});
export default OfflineReading;