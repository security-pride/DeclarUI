import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SettingsScreen = () => {
const navigation = useNavigation();
const handleNavigation = (screen) => {
navigation.navigate(screen);
};
return (
<SafeAreaView style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
</TouchableOpacity>
<Text style={styles.headerTitle}>Settings</Text>
</View>
  <ScrollView>
    <Text style={styles.sectionTitle}>Accounts</Text>
    
    <TouchableOpacity style={styles.settingItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.settingIcon} />
      <Text style={styles.settingText}>Microsoft account</Text>
      <Text style={styles.signInText}>Sign in</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.settingItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.settingIcon} />
      <Text style={styles.settingText}>Work or school account</Text>
      <Text style={styles.signInText}>Sign in</Text>
    </TouchableOpacity>

    <Text style={styles.sectionTitle}>General</Text>

    <TouchableOpacity style={styles.settingItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.settingIcon} />
      <Text style={styles.settingText}>Privacy</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.settingItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.settingIcon} />
      <Text style={styles.settingText}>Region and language</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.settingItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.settingIcon} />
      <Text style={styles.settingText}>Permissions</Text>
    </TouchableOpacity>

    <Text style={styles.sectionTitle}>Preferences</Text>

    <TouchableOpacity style={styles.settingItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.settingIcon} />
      <Text style={styles.settingText}>Homepage</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.settingItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.settingIcon} />
      <Text style={styles.settingText}>Notifications</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.settingItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.settingIcon} />
      <Text style={styles.settingText}>Theme</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.settingItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.settingIcon} />
      <Text style={styles.settingText}>Search</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.settingItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.settingIcon} />
      <Text style={styles.settingText}>Rewards</Text>
    </TouchableOpacity>
  </ScrollView>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem} onPress={() => handleNavigation('Home')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => handleNavigation('Weather')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Weather</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => handleNavigation('Chat')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Chat</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => handleNavigation('Tabs')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Tabs</Text>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>4</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => handleNavigation('Apps')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Apps</Text>
    </TouchableOpacity>
  </View>
</SafeAreaView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#F0F0F0',
},
header: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
borderBottomWidth: 1,
borderBottomColor: '#E0E0E0',
},
backButton: {
padding: 10,
},
backIcon: {
width: 24,
height: 24,
},
headerTitle: {
fontSize: 20,
fontWeight: 'bold',
marginLeft: 20,
},
sectionTitle: {
fontSize: 16,
fontWeight: 'bold',
padding: 15,
backgroundColor: '#F8F8F8',
},
settingItem: {
flexDirection: 'row',
alignItems: 'center',
padding: 15,
backgroundColor: 'white',
borderBottomWidth: 1,
borderBottomColor: '#E0E0E0',
},
settingIcon: {
width: 24,
height: 24,
marginRight: 15,
},
settingText: {
flex: 1,
fontSize: 16,
},
signInText: {
color: '#4285F4',
fontSize: 16,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#E0E0E0',
paddingVertical: 10,
backgroundColor: 'white',
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
marginTop: 2,
},
badge: {
position: 'absolute',
top: -5,
right: -5,
backgroundColor: 'red',
borderRadius: 10,
width: 20,
height: 20,
justifyContent: 'center',
alignItems: 'center',
},
badgeText: {
color: 'white',
fontSize: 12,
},
});
export default SettingsScreen;