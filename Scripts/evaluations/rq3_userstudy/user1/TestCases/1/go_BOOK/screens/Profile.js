import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
const Profile = ({ navigation }) => {
const navigateToSection = (section) => {
if (section === 'Settings') {
navigation.navigate('Setting');
} else {
// Navigate to other sections
console.log('Navigating to ${section}');
}
};
return (
<View style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
<Text style={styles.title}>Profile</Text>
<TouchableOpacity onPress={() => navigateToSection('Settings')} style={styles.settingsButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
</View>
  <ScrollView>
    <View style={styles.profileInfo}>
      <View style={styles.avatarContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
        <TouchableOpacity style={styles.editAvatarButton}>
          <Text style={styles.editAvatarText}>✎</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.name}>Mosarraf Hossain</Text>
      <Text style={styles.jobTitle}>Product Designer</Text>
    </View>

    <View style={styles.menuSection}>
      {[
        { title: 'Edit Profile', icon: 'user' },
        { title: 'Notification', icon: 'bell' },
        { title: 'Payment Method', icon: 'credit-card' },
        { title: 'Bookmarks', icon: 'bookmark' },
        { title: 'Security', icon: 'shield' },
        { title: 'Settings', icon: 'cog' },
      ].map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={() => navigateToSection(item.title)}
        >
          <View style={styles.menuItemContent}>
            <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
            <Text style={styles.menuText}>{item.title}</Text>
          </View>
          <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
        </TouchableOpacity>
      ))}
    </View>
  </ScrollView>

  <View style={styles.bottomNav}>
    {['Home', 'Notification', 'Ticket', 'History', 'Setting'].map((item, index) => (
      <TouchableOpacity
        key={index}
        style={styles.navItem}
        onPress={() => navigation.navigate(item)}
      >
        <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
        <Text style={styles.navText}>{item}</Text>
      </TouchableOpacity>
    ))}
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#F5F5F5',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 16,
backgroundColor: '#FFFFFF',
},
backButton: {
padding: 8,
},
settingsButton: {
padding: 8,
},
icon: {
width: 24,
height: 24,
},
title: {
fontSize: 18,
fontWeight: 'bold',
},
profileInfo: {
alignItems: 'center',
padding: 20,
},
avatarContainer: {
position: 'relative',
marginBottom: 10,
},
avatar: {
width: 100,
height: 100,
borderRadius: 50,
},
editAvatarButton: {
position: 'absolute',
right: 0,
bottom: 0,
backgroundColor: '#007AFF',
borderRadius: 15,
width: 30,
height: 30,
justifyContent: 'center',
alignItems: 'center',
},
editAvatarText: {
color: '#FFFFFF',
fontSize: 16,
},
name: {
fontSize: 20,
fontWeight: 'bold',
marginBottom: 5,
},
jobTitle: {
fontSize: 16,
color: '#666',
},
menuSection: {
backgroundColor: '#FFFFFF',
borderRadius: 10,
marginHorizontal: 16,
marginTop: 20,
},
menuItem: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingVertical: 16,
paddingHorizontal: 20,
borderBottomWidth: 1,
borderBottomColor: '#E0E0E0',
},
menuItemContent: {
flexDirection: 'row',
alignItems: 'center',
},
menuIcon: {
width: 24,
height: 24,
marginRight: 16,
},
menuText: {
fontSize: 16,
},
arrowIcon: {
width: 16,
height: 16,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
backgroundColor: '#FFFFFF',
paddingVertical: 10,
borderTopWidth: 1,
borderTopColor: '#E0E0E0',
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
});
export default Profile;