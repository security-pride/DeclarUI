import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
const InboxScreen = ({ navigation }) => {
return (
<SafeAreaView style={styles.container}>
<View style={styles.header}>
<Text style={styles.time}>9:41</Text>
<View style={styles.statusIcons}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.icon} />
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.icon} />
</View>
</View>
  <View style={styles.titleBar}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>All activity</Text>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.dropdownIcon} />
    </View>
    <TouchableOpacity onPress={() => console.log('Filter pressed')}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.filterIcon} />
    </TouchableOpacity>
  </View>

  <View style={styles.content}>
    <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.messageIcon} />
    <Text style={styles.noNotificationsTitle}>Notifications aren't available</Text>
    <Text style={styles.noNotificationsDescription}>Notifications about your account will appear here</Text>
  </View>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>Discover</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.addButton}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.addIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={[styles.navText, styles.activeNavText]}>Inbox</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>Me</Text>
    </TouchableOpacity>
  </View>
</SafeAreaView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: 'white',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingHorizontal: 15,
height: 44,
},
time: {
fontSize: 14,
fontWeight: 'bold',
},
statusIcons: {
flexDirection: 'row',
},
icon: {
width: 20,
height: 20,
marginLeft: 5,
},
titleBar: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingHorizontal: 15,
paddingVertical: 10,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
titleContainer: {
flexDirection: 'row',
alignItems: 'center',
},
title: {
fontSize: 18,
fontWeight: 'bold',
},
dropdownIcon: {
width: 15,
height: 15,
marginLeft: 5,
},
filterIcon: {
width: 24,
height: 24,
},
content: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
paddingHorizontal: 30,
},
messageIcon: {
width: 60,
height: 60,
marginBottom: 20,
},
noNotificationsTitle: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 10,
textAlign: 'center',
},
noNotificationsDescription: {
fontSize: 14,
color: '#888',
textAlign: 'center',
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
height: 50,
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
},
navItem: {
alignItems: 'center',
},
navIcon: {
width: 24,
height: 24,
},
navText: {
fontSize: 10,
marginTop: 3,
},
addButton: {
width: 40,
height: 25,
backgroundColor: '#ee1d52',
borderRadius: 8,
justifyContent: 'center',
alignItems: 'center',
},
addIcon: {
width: 20,
height: 20,
},
activeNavItem: {
borderTopWidth: 2,
borderTopColor: '#ee1d52',
},
activeNavText: {
color: '#ee1d52',
},
});
export default InboxScreen;