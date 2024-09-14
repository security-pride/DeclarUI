import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const PersonalCentralScreen = () => {
const navigation = useNavigation();
const handleNavigation = (screen) => {
navigation.navigate(screen);
};
return (
<SafeAreaView style={styles.container}>
<ScrollView>
<TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
</TouchableOpacity>
    <TouchableOpacity style={styles.signInButton} onPress={() => {/* Handle sign in */}}>
      <Image source={require('../assets/snack-icon.png')} style={styles.profileIcon} />
      <Text style={styles.signInText}>Tap to sign in</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
    </TouchableOpacity>

    <View style={styles.rewardsCard}>
      <View style={styles.rewardsInfo}>
        <Text style={styles.rewardsTitle}>My Rewards</Text>
        <Text style={styles.rewardsPoints}>0</Text>
      </View>
      <View style={styles.pointsInfo}>
        <Text style={styles.pointsTitle}>Today's points</Text>
        <Text style={styles.pointsCount}>0/30</Text>
      </View>
      <View style={styles.progressBar} />
    </View>

    <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigation('Notifications')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
      <Text style={styles.menuText}>Notifications</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigation('Settings')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
      <Text style={styles.menuText}>Settings</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigation('Interests')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
      <Text style={styles.menuText}>Interests</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigation('History')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
      <Text style={styles.menuText}>History</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigation('BookmarksAndSaves')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
      <Text style={styles.menuText}>Bookmarks and saves</Text>
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
backButton: {
padding: 10,
},
backIcon: {
width: 24,
height: 24,
},
signInButton: {
flexDirection: 'row',
alignItems: 'center',
padding: 20,
},
profileIcon: {
width: 60,
height: 60,
borderRadius: 30,
marginRight: 15,
},
signInText: {
fontSize: 18,
fontWeight: 'bold',
flex: 1,
},
arrowIcon: {
width: 20,
height: 20,
},
rewardsCard: {
backgroundColor: 'white',
margin: 15,
borderRadius: 10,
padding: 15,
},
rewardsInfo: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: 10,
},
rewardsTitle: {
fontSize: 16,
},
rewardsPoints: {
fontSize: 24,
fontWeight: 'bold',
},
pointsInfo: {
flexDirection: 'row',
justifyContent: 'space-between',
marginBottom: 5,
},
pointsTitle: {
fontSize: 14,
color: '#666',
},
pointsCount: {
fontSize: 14,
color: '#666',
},
progressBar: {
height: 4,
backgroundColor: '#E0E0E0',
borderRadius: 2,
},
menuItem: {
flexDirection: 'row',
alignItems: 'center',
padding: 15,
backgroundColor: 'white',
marginBottom: 1,
},
menuIcon: {
width: 24,
height: 24,
marginRight: 15,
},
menuText: {
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
export default PersonalCentralScreen;