import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const ElectionsScreen = () => {
const navigation = useNavigation();
const navigateToHome = () => {
navigation.navigate('home');
};
const navigateToSettings = () => {
navigation.navigate('settings');
};
return (
<View style={styles.container}>
<View style={styles.header}>
<Text style={styles.headerTitle}>Elections</Text>
<View style={styles.statusIcons}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</View>
</View>
  <ScrollView style={styles.content}>
    <View style={styles.newsItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.newsImage} />
      <Text style={styles.newsTitle}>43 seconds of chaos: How the assassination attempt on Trump unfolded</Text>
      <Text style={styles.timeAgo}>5h ago</Text>
    </View>

    <TouchableOpacity style={styles.articleItem}>
      <Text style={styles.articleTitle}>Minute-by-minute: Visual timeline of the Trump assassination attempt</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.articleItem}>
      <Text style={styles.articleTitle}>'Let me get my shoes': What was said on stage in the seconds after Trump was shot</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.articleItem}>
      <Text style={styles.articleTitle}>Gunman was a few hundred feet away from Trump, CNN analysis shows</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.videoItem}>
      <Text style={styles.videoLabel}>VIDEO</Text>
      <Text style={styles.videoTitle}>'He's got a gun!': Listen to audio of rally attendees as gunman is spotted</Text>
    </TouchableOpacity>
  </ScrollView>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem} onPress={navigateToHome}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={[styles.navText, styles.activeNavText]}>Elections</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Watch</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={navigateToSettings}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Settings</Text>
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
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 10,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
headerTitle: {
fontSize: 20,
fontWeight: 'bold',
},
statusIcons: {
flexDirection: 'row',
},
icon: {
width: 20,
height: 20,
marginLeft: 10,
},
content: {
flex: 1,
},
newsItem: {
padding: 15,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
newsImage: {
width: '100%',
height: 200,
resizeMode: 'cover',
marginBottom: 10,
},
newsTitle: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 5,
},
timeAgo: {
fontSize: 12,
color: '#666',
},
articleItem: {
padding: 15,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
articleTitle: {
fontSize: 16,
},
videoItem: {
padding: 15,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
videoLabel: {
fontSize: 12,
fontWeight: 'bold',
color: '#f00',
marginBottom: 5,
},
videoTitle: {
fontSize: 16,
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
marginBottom: 5,
},
navText: {
fontSize: 12,
},
activeNavText: {
color: '#f00',
},
});
export default ElectionsScreen;