import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Home = () => {
const [currentTime, setCurrentTime] = useState('');
const navigation = useNavigation();
useEffect(() => {
const updateTime = () => {
const now = new Date();
setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
};
updateTime();
const interval = setInterval(updateTime, 60000);
return () => clearInterval(interval);
}, []);
const handleTryAgain = () => {
// Implement retry logic here
};
const handleRefresh = () => {
// Implement refresh logic here
};
const handleMePress = () => {
navigation.navigate('Me');
};
const handleLogoPress = () => {
navigation.navigate('NewOptions');
};
return (
<View style={styles.container}>
<View style={styles.statusBar}>
<Text style={styles.timeDisplay}>{currentTime}</Text>
<Image source={require('../assets/snack-icon.png')} style={styles.statusIcon} />
</View>
  <TouchableOpacity onPress={handleLogoPress} style={styles.logoContainer}>
    <Image source={require('../assets/snack-icon.png')} style={styles.logo} />
  </TouchableOpacity>

  <Text style={styles.forYou}>For you</Text>

  <View style={styles.menuContainer}>
    <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
  </View>

  <View style={styles.contentContainer}>
    <Text style={styles.connectionFailed}>Connection failed</Text>
    <Image source={require('../assets/snack-icon.png')} style={styles.troubleshootingIcon} />
    <Image source={require('../assets/snack-icon.png')} style={styles.cactusIcon} />
    <TouchableOpacity style={styles.tryAgainButton} onPress={handleTryAgain}>
      <Text style={styles.tryAgainText}>TRY AGAIN</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem} onPress={handleRefresh}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Refresh</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={handleMePress}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Me</Text>
    </TouchableOpacity>
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#F5F5F5',
},
statusBar: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingHorizontal: 10,
height: 40,
},
timeDisplay: {
fontSize: 14,
},
statusIcon: {
width: 20,
height: 20,
},
logoContainer: {
position: 'absolute',
top: 50,
left: 10,
},
logo: {
width: 40,
height: 40,
},
forYou: {
fontSize: 18,
fontWeight: 'bold',
marginLeft: 10,
marginTop: 60,
},
menuContainer: {
position: 'absolute',
top: 50,
right: 10,
},
menuIcon: {
width: 30,
height: 30,
},
contentContainer: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
connectionFailed: {
fontSize: 18,
marginBottom: 20,
},
troubleshootingIcon: {
width: 100,
height: 100,
marginBottom: 20,
},
cactusIcon: {
width: 80,
height: 80,
position: 'absolute',
right: 20,
bottom: 100,
},
tryAgainButton: {
backgroundColor: '#007AFF',
paddingHorizontal: 20,
paddingVertical: 10,
borderRadius: 5,
},
tryAgainText: {
color: '#FFFFFF',
fontWeight: 'bold',
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
height: 60,
borderTopWidth: 1,
borderTopColor: '#E0E0E0',
},
navItem: {
alignItems: 'center',
},
navIcon: {
width: 24,
height: 24,
marginBottom: 4,
},
navText: {
fontSize: 12,
},
});
export default Home;