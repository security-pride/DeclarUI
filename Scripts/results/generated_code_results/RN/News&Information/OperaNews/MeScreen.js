import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Me = () => {
const navigation = useNavigation();
const handleHomePress = () => {
navigation.navigate('Home');
};
const handleOfflineReadingPress = () => {
navigation.navigate('OfflineReading');
};
const handleSettingsPress = () => {
navigation.navigate('Settings');
};
return (
<View style={styles.container}>
<View style={styles.header}>
<Image source={require('../assets/snack-icon.png')} style={styles.logo} />
<Text style={styles.appName}>Opera News</Text>
<TouchableOpacity onPress={handleSettingsPress} style={styles.settingsButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.settingsIcon} />
</TouchableOpacity>
</View>
  <ScrollView style={styles.content}>
    <TouchableOpacity style={styles.menuItem} onPress={handleOfflineReadingPress}>
      <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
      <View style={styles.menuTextContainer}>
        <Text style={styles.menuTitle}>Offline reading</Text>
        <Text style={styles.menuDescription}>Read news without the internet</Text>
      </View>
      <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
    </TouchableOpacity>

    <TouchableOpacity style={styles.menuItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
      <Text style={styles.menuTitle}>Read it later</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
    </TouchableOpacity>

    <TouchableOpacity style={styles.menuItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
      <Text style={styles.menuTitle}>Blocked users</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
    </TouchableOpacity>

    <TouchableOpacity style={styles.menuItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
      <Text style={styles.menuTitle}>Country & language</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
    </TouchableOpacity>

    <View style={styles.menuItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
      <Text style={styles.menuTitle}>Dark mode</Text>
      <Text style={styles.automaticText}>Automatic</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
    </View>
  </ScrollView>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem} onPress={handleHomePress}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Home</Text>
    </TouchableOpacity>
    <View style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={[styles.navText, styles.activeNavText]}>Me</Text>
    </View>
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
padding: 16,
borderBottomWidth: 1,
borderBottomColor: '#E0E0E0',
},
logo: {
width: 40,
height: 40,
marginRight: 8,
},
appName: {
fontSize: 18,
fontWeight: 'bold',
},
settingsButton: {
position: 'absolute',
right: 16,
top: 16,
},
settingsIcon: {
width: 24,
height: 24,
},
content: {
flex: 1,
},
menuItem: {
flexDirection: 'row',
alignItems: 'center',
padding: 16,
borderBottomWidth: 1,
borderBottomColor: '#E0E0E0',
},
menuIcon: {
width: 24,
height: 24,
marginRight: 16,
},
menuTextContainer: {
flex: 1,
},
menuTitle: {
fontSize: 16,
fontWeight: '500',
},
menuDescription: {
fontSize: 14,
color: '#757575',
},
arrowIcon: {
width: 16,
height: 16,
},
automaticText: {
marginLeft: 'auto',
marginRight: 8,
fontSize: 14,
color: '#757575',
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#E0E0E0',
paddingVertical: 8,
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
marginTop: 4,
},
activeNavText: {
color: '#FF0000',
},
});
export default Me;