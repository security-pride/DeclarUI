import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const DetailsScreen = () => {
const navigation = useNavigation();
const handleNavigation = (screenName) => {
navigation.navigate(screenName);
};
return (
<View style={styles.container}>
<ScrollView>
<TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
<Icon name="arrow-back" size={24} color="#000" />
</TouchableOpacity>
<ImageBackground
source={require('../assets/snack-icon.png')}
style={styles.logo}
resizeMode="contain"
>
<Text style={styles.logoText}>MOBILES.CO.UK</Text>
</ImageBackground>
<View style={styles.content}>
<Text style={styles.title}>Exclusive Free £50 Currys Voucher with Vodafone Pay Monthly Contracts - Use with Code VC10OFF for £10 off Upfront Cost of Handsets</Text>
<View style={styles.rewardInfo}>
<Text style={styles.rewardType}>Online Reward</Text>
<Text style={styles.expiryDate}>Ends 20 Jul</Text>
</View>
<TouchableOpacity style={styles.termsButton} onPress={() => handleNavigation('Terms')}>
<Text style={styles.termsButtonText}>Terms and Conditions</Text>
</TouchableOpacity>
<View style={styles.vipInfo}>
<Icon name="star" size={24} color="#FFD700" />
<Text style={styles.vipText}>This is a VIP retailer! VIPs get a £5 gift card for every two shops with any VIP retailer</Text>
</View>
</View>
</ScrollView>
<TouchableOpacity style={styles.signInButton}>
<Text style={styles.signInButtonText}>Sign In to Get Reward</Text>
</TouchableOpacity>
<View style={styles.bottomNav}>
<TouchableOpacity onPress={() => handleNavigation('Discover')} style={styles.navItem}>
<Icon name="explore" size={24} color="#000" />
<Text>Discover</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => handleNavigation('Search')} style={styles.navItem}>
<Icon name="search" size={24} color="#000" />
<Text>Search</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => handleNavigation('VIP')} style={styles.navItem}>
<Icon name="star" size={24} color="#000" />
<Text>VIP</Text>
<View style={styles.newBadge}>
<Text style={styles.newBadgeText}>NEW</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => handleNavigation('Account')} style={styles.navItem}>
<Icon name="person" size={24} color="#000" />
<Text>Account</Text>
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
backButton: {
position: 'absolute',
top: 40,
left: 20,
zIndex: 1,
},
logo: {
width: '100%',
height: 200,
justifyContent: 'center',
alignItems: 'center',
},
logoText: {
fontSize: 24,
fontWeight: 'bold',
color: '#fff',
},
content: {
padding: 20,
},
title: {
fontSize: 20,
fontWeight: 'bold',
marginBottom: 10,
},
rewardInfo: {
flexDirection: 'row',
justifyContent: 'space-between',
marginBottom: 20,
},
rewardType: {
color: '#FF6347',
},
expiryDate: {
color: '#808080',
},
termsButton: {
backgroundColor: '#FFD700',
padding: 10,
borderRadius: 5,
alignItems: 'center',
marginBottom: 20,
},
termsButtonText: {
fontWeight: 'bold',
},
vipInfo: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#F0F0F0',
padding: 10,
borderRadius: 5,
},
vipText: {
marginLeft: 10,
flex: 1,
},
signInButton: {
backgroundColor: '#FFD700',
padding: 15,
margin: 20,
borderRadius: 5,
alignItems: 'center',
},
signInButtonText: {
fontSize: 18,
fontWeight: 'bold',
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
newBadge: {
position: 'absolute',
top: -5,
right: -15,
backgroundColor: '#FF6347',
borderRadius: 10,
paddingHorizontal: 5,
paddingVertical: 2,
},
newBadgeText: {
color: '#fff',
fontSize: 10,
fontWeight: 'bold',
},
});
export default DetailsScreen;