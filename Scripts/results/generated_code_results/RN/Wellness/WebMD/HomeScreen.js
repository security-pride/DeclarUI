import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
const [searchQuery, setSearchQuery] = useState('');
const navigation = useNavigation();
const features = [
{ name: 'Symptom Checker', icon: 'target' },
{ name: 'Med Reminders', icon: 'pill-clock' },
{ name: 'Prescription Discounts', icon: 'rx' },
{ name: 'Drug Interactions', icon: 'molecule' },
{ name: 'Pill Identifier', icon: 'magnifying-glass-pill' },
{ name: 'Track Symptoms', icon: 'chart-line' },
];
const navigateToPillIdentifier = () => {
navigation.navigate('PillIdentifier');
};
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<TouchableOpacity style={styles.menuIcon}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.icon} />
</TouchableOpacity>
<TextInput style={styles.searchBar} placeholder="Search drugs, conditions, news..." value={searchQuery} onChangeText={setSearchQuery} />
</View>
  <View style={styles.featuresGrid}>
    {features.map((feature, index) => (
      <TouchableOpacity
        key={index}
        style={styles.featureItem}
        onPress={feature.name === 'Pill Identifier' ? navigateToPillIdentifier : null}
      >
        <Image source={{ uri: `../assets/${feature.icon}.png` }} style={styles.featureIcon} />
        <Text style={styles.featureText}>{feature.name}</Text>
      </TouchableOpacity>
    ))}
  </View>

  <View style={styles.adBanner}>
    <Text style={styles.adTitle}>WebMDRx</Text>
    <Text style={styles.adDescription}>Save up to 80% on prescriptions</Text>
    <TouchableOpacity style={styles.adButton}>
      <Text style={styles.adButtonText}>Compare prices</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.newsSection}>
    <Text style={styles.newsSectionTitle}>Top News</Text>
    <View style={styles.newsItem}>
      <Image source={{ uri: '../assets/covid-news.png' }} style={styles.newsImage} />
      <Text style={styles.newsTitle}>The Summer COVID Wave Is Spreading</Text>
      <Text style={styles.newsDescription}>
        The summertime spread of COVID-19 is nowhere near ending, according to newly published
      </Text>
    </View>
  </View>

  <View style={styles.bottomNavBar}>
    <TouchableOpacity style={styles.navItem}>
      <Image source={{ uri: '../assets/home-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={{ uri: '../assets/doctor-finder-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>Doctor Finder</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={{ uri: '../assets/profile-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>Profile</Text>
    </TouchableOpacity>
  </View>
</ScrollView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
header: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
},
menuIcon: {
marginRight: 10,
},
icon: {
width: 24,
height: 24,
},
searchBar: {
flex: 1,
height: 40,
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 20,
paddingHorizontal: 10,
},
featuresGrid: {
flexDirection: 'row',
flexWrap: 'wrap',
justifyContent: 'space-around',
padding: 10,
},
featureItem: {
alignItems: 'center',
width: '30%',
marginBottom: 20,
},
featureIcon: {
width: 50,
height: 50,
marginBottom: 5,
},
featureText: {
textAlign: 'center',
},
adBanner: {
backgroundColor: '#e6f2ff',
padding: 15,
margin: 10,
borderRadius: 10,
},
adTitle: {
fontSize: 18,
fontWeight: 'bold',
},
adDescription: {
marginVertical: 5,
},
adButton: {
backgroundColor: '#007bff',
padding: 10,
borderRadius: 5,
alignSelf: 'flex-start',
},
adButtonText: {
color: '#fff',
},
newsSection: {
padding: 10,
},
newsSectionTitle: {
fontSize: 20,
fontWeight: 'bold',
marginBottom: 10,
},
newsItem: {
marginBottom: 15,
},
newsImage: {
width: '100%',
height: 200,
borderRadius: 10,
marginBottom: 10,
},
newsTitle: {
fontSize: 16,
fontWeight: 'bold',
},
newsDescription: {
color: '#666',
},
bottomNavBar: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#ccc',
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
},
});
export default HomeScreen;