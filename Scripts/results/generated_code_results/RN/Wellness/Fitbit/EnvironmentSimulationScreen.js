import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const EnvironmentSimulationScreen = () => {
const navigation = useNavigation();
const [isFavorite, setIsFavorite] = useState(false);
const toggleFavorite = () => {
setIsFavorite(!isFavorite);
};
const handleBackPress = () => {
navigation.navigate('Discovery');
};
const handleTryPremium = () => {
// Implement premium subscription logic here
console.log('Try Premium pressed');
};
return (
<SafeAreaView style={styles.container}>
<Image source={require('../assets/snack-icon.png')} style={styles.backgroundImage} />
<View style={styles.overlay}>
<View style={styles.header}>
<TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
<Text style={styles.backButtonText}>✕</Text>
</TouchableOpacity>
<TouchableOpacity onPress={toggleFavorite} style={styles.favoriteButton}>
<Text style={styles.favoriteButtonText}>{isFavorite ? '★' : '☆'}</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.lockButton}>
<Text style={styles.lockButtonText}>🔒</Text>
</TouchableOpacity>
</View>
<View style={styles.content}>
<View style={styles.calmBadge}>
<Text style={styles.calmText}>Calm</Text>
</View>
<Text style={styles.title}>Nature rain on leaves</Text>
<Text style={styles.subtitle}>用心</Text>
<Text style={styles.description}>
Relax with ease to the sounds of rain on leaves.
</Text>
<View style={styles.durationContainer}>
<Image source={require('../assets/snack-icon.png')} style={styles.clockIcon} />
<Text style={styles.durationLabel}>持续时间</Text>
<Text style={styles.durationText}>45 分钟</Text>
</View>
</View>
<TouchableOpacity style={styles.premiumButton} onPress={handleTryPremium}>
<Text style={styles.premiumButtonText}>试用 PREMIUM</Text>
</TouchableOpacity>
</View>
</SafeAreaView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
},
backgroundImage: {
...StyleSheet.absoluteFillObject,
width: '100%',
height: '100%',
},
overlay: {
...StyleSheet.absoluteFillObject,
backgroundColor: 'rgba(0, 0, 0, 0.5)',
justifyContent: 'space-between',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
padding: 20,
},
backButton: {
padding: 10,
},
backButtonText: {
color: 'white',
fontSize: 24,
},
favoriteButton: {
padding: 10,
},
favoriteButtonText: {
color: 'white',
fontSize: 24,
},
lockButton: {
padding: 10,
},
lockButtonText: {
color: 'white',
fontSize: 24,
},
content: {
padding: 20,
},
calmBadge: {
backgroundColor: '#4A90E2',
alignSelf: 'flex-start',
paddingHorizontal: 10,
paddingVertical: 5,
borderRadius: 15,
marginBottom: 10,
},
calmText: {
color: 'white',
fontWeight: 'bold',
},
title: {
color: 'white',
fontSize: 28,
fontWeight: 'bold',
marginBottom: 5,
},
subtitle: {
color: 'white',
fontSize: 18,
marginBottom: 10,
},
description: {
color: 'white',
fontSize: 16,
marginBottom: 20,
},
durationContainer: {
flexDirection: 'row',
alignItems: 'center',
},
clockIcon: {
width: 20,
height: 20,
marginRight: 5,
},
durationLabel: {
color: 'white',
marginRight: 5,
},
durationText: {
color: 'white',
fontWeight: 'bold',
},
premiumButton: {
backgroundColor: '#4CAF50',
padding: 15,
borderRadius: 25,
alignItems: 'center',
marginHorizontal: 20,
marginBottom: 30,
},
premiumButtonText: {
color: 'white',
fontSize: 18,
fontWeight: 'bold',
},
});
export default EnvironmentSimulationScreen;