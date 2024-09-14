import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
const navigation = useNavigation();
const navigateToElections = () => {
navigation.navigate('elections');
};
const navigateToSettings = () => {
navigation.navigate('settings');
};
return (
<View style={styles.container}>
<View style={styles.header}>
<View style={styles.statusBar}>
<Text style={styles.time}>6:15</Text>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</View>
<View style={styles.headerContent}>
<Image source={require('../assets/snack-icon.png')} style={styles.logo} />
<TouchableOpacity style={styles.searchButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />
</TouchableOpacity>
</View>
</View>
  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.navTabs}>
    <Text style={[styles.navTabText, styles.activeTab]}>Top News</Text>
    <Text style={styles.navTabText}>Your CNN</Text>
    <Text style={styles.navTabText}>World</Text>
    <Text style={styles.navTabText}>U.S. Politics</Text>
    <Text style={styles.navTabText}>Business</Text>
  </ScrollView>

  <ScrollView style={styles.content}>
    <View style={styles.newsItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.newsImage} />
      <Text style={styles.newsTitle}>Minute-by-minute: Visual timeline of the assassination attempt on Donald Trump</Text>
      <Text style={styles.timeAgo}>7h ago</Text>
      <Text style={styles.label}>BUTLER FARM SHOW GROUNDS</Text>
    </View>

    <View style={styles.updateSection}>
      <Text style={styles.updateLabel}>LIVE UPDATES</Text>
      <Text style={styles.updateTitle}>Biden condemns Trump shooting; authorities search for gunman's motive</Text>
    </View>

    <View style={styles.videoSection}>
      <Text style={styles.videoLabel}>VIDEO</Text>
      <Text style={styles.videoTitle}>Watch Biden's entire Oval Office address</Text>
    </View>

    <View style={styles.analysisSection}>
      <Text style={styles.analysisLabel}>ANALYSIS</Text>
      <Text style={styles.analysisTitle}>A nation traumatized and a campaign transformed as Trump is set to reemerge</Text>
    </View>
  </ScrollView>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={[styles.navIcon, styles.activeNavIcon]} />
      <Text style={[styles.navText, styles.activeNavText]}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={navigateToElections}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Elections</Text>
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
paddingTop: 40,
backgroundColor: '#fff',
},
statusBar: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingHorizontal: 10,
},
time: {
fontSize: 14,
},
icon: {
width: 20,
height: 20,
},
headerContent: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 10,
},
logo: {
width: 50,
height: 50,
},
searchButton: {
padding: 5,
},
searchIcon: {
width: 24,
height: 24,
},
navTabs: {
flexDirection: 'row',
paddingVertical: 10,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
navTabText: {
fontSize: 16,
marginHorizontal: 15,
},
activeTab: {
fontWeight: 'bold',
borderBottomWidth: 2,
borderBottomColor: 'red',
},
content: {
flex: 1,
},
newsItem: {
padding: 15,
},
newsImage: {
width: '100%',
height: 200,
resizeMode: 'cover',
},
newsTitle: {
fontSize: 20,
fontWeight: 'bold',
marginTop: 10,
},
timeAgo: {
fontSize: 12,
color: '#666',
marginTop: 5,
},
label: {
fontSize: 12,
fontWeight: 'bold',
marginTop: 5,
},
updateSection: {
padding: 15,
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
},
updateLabel: {
color: 'red',
fontWeight: 'bold',
marginBottom: 5,
},
updateTitle: {
fontSize: 18,
fontWeight: 'bold',
},
videoSection: {
padding: 15,
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
},
videoLabel: {
fontWeight: 'bold',
marginBottom: 5,
},
videoTitle: {
fontSize: 16,
},
analysisSection: {
padding: 15,
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
},
analysisLabel: {
fontWeight: 'bold',
marginBottom: 5,
},
analysisTitle: {
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
},
activeNavIcon: {
tintColor: 'red',
},
navText: {
fontSize: 12,
},
activeNavText: {
color: 'red',
},
});
export default HomeScreen;