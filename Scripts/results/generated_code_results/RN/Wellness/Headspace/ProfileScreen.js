import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Profile = () => {
const navigation = useNavigation();
const handleTodayPress = () => {
navigation.navigate('Home');
};
const handleExplorePress = () => {
navigation.navigate('Explore');
};
return (
<View style={styles.container}>
<TouchableOpacity style={styles.settingsButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.settingsIcon} />
</TouchableOpacity>
  <View style={styles.profileHeader}>
    <Image source={require('../assets/snack-icon.png')} style={styles.profilePicture} />
    <Text style={styles.userName}>子骄 薛</Text>
    <Text style={styles.joinDate}>Joined in 2024</Text>
  </View>

  <Text style={styles.welcomeText}>Welcome!</Text>

  <ScrollView style={styles.contentContainer}>
    <View style={styles.beginningMeditationCard}>
      <View>
        <Text style={styles.cardTitle}>Beginning meditation</Text>
        <Text style={styles.cardDescription}>Learn the fundamental techniques of meditation.</Text>
      </View>
      <Image source={require('../assets/snack-icon.png')} style={styles.cardIcon} />
    </View>

    <Text style={styles.guestPassTitle}>Headspace 30-Day Guest Pass</Text>

    <View style={styles.guestPassCard}>
      <Text style={styles.guestPassDescription}>Bring friends along the journey</Text>
      <Text style={styles.guestPassAction}>Send free access to new members</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.guestPassImage} />
    </View>

    <Text style={styles.progressTitle}>My progress</Text>
  </ScrollView>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem} onPress={handleTodayPress}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Today</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={handleExplorePress}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Explore</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={[styles.navText, styles.activeNavText]}>子骄</Text>
    </TouchableOpacity>
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#1E1E2E',
},
settingsButton: {
position: 'absolute',
top: 40,
left: 20,
zIndex: 1,
},
settingsIcon: {
width: 24,
height: 24,
},
profileHeader: {
alignItems: 'center',
marginTop: 60,
},
profilePicture: {
width: 100,
height: 100,
borderRadius: 50,
},
userName: {
color: 'white',
fontSize: 24,
fontWeight: 'bold',
marginTop: 10,
},
joinDate: {
color: '#8E9AB2',
fontSize: 14,
},
welcomeText: {
color: 'white',
fontSize: 28,
fontWeight: 'bold',
marginTop: 20,
marginLeft: 20,
},
contentContainer: {
flex: 1,
padding: 20,
},
beginningMeditationCard: {
backgroundColor: '#2A2A3A',
borderRadius: 10,
padding: 20,
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: 20,
},
cardTitle: {
color: 'white',
fontSize: 18,
fontWeight: 'bold',
},
cardDescription: {
color: '#8E9AB2',
marginTop: 5,
},
cardIcon: {
width: 50,
height: 50,
},
guestPassTitle: {
color: 'white',
fontSize: 18,
fontWeight: 'bold',
marginBottom: 10,
},
guestPassCard: {
backgroundColor: '#FFD700',
borderRadius: 10,
padding: 20,
marginBottom: 20,
},
guestPassDescription: {
color: '#1E1E2E',
fontSize: 16,
},
guestPassAction: {
color: '#1E1E2E',
fontSize: 18,
fontWeight: 'bold',
marginTop: 5,
},
guestPassImage: {
width: '100%',
height: 100,
marginTop: 10,
},
progressTitle: {
color: 'white',
fontSize: 18,
fontWeight: 'bold',
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#2A2A3A',
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
color: '#8E9AB2',
marginTop: 5,
},
activeNavText: {
color: 'white',
},
});
export default Profile;