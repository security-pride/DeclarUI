import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const MoreScreen = () => {
const navigation = useNavigation();
const rewardOffers = [
{
logo: require('../assets/snack-icon.png'),
title: 'Exclusive Great Savings with Prime Day Deals Plus a £3...',
type: 'Online Reward',
expiryDate: 'Ends 22 Jul'
},
{
logo: require('../assets/snack-icon.png'),
title: 'Exclusive Free £10 Currys Voucher with Orders Over £...',
type: 'Online Reward',
expiryDate: 'Ends 1 Aug'
},
{
logo: require('../assets/snack-icon.png'),
title: 'Exclusive Free £3 Amazon Voucher with Orders Over £...',
type: 'Online Reward',
expiryDate: 'Ends today'
},
{
logo: require('../assets/snack-icon.png'),
title: 'Exclusive 15% off Selected Hotel Bookings: Free £5 A...',
type: 'Online Reward',
expiryDate: 'Ends 1 Aug'
}
];
const handleNavigation = (screenName) => {
navigation.navigate(screenName);
};
return (
<View style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
<Icon name="arrow-back" size={24} color="#000" />
</TouchableOpacity>
<Text style={styles.headerTitle}>Reward Offers</Text>
</View>
<ScrollView style={styles.scrollView}>
{rewardOffers.map((offer, index) => (
<TouchableOpacity
key={index}
style={styles.offerCard}
onPress={() => handleNavigation('Details')}
>
<Image source={offer.logo} style={styles.logo} />
<View style={styles.offerDetails}>
<Text style={styles.offerTitle}>{offer.title}</Text>
<View style={styles.offerInfo}>
<Text style={styles.offerType}>{offer.type}</Text>
<Text style={styles.offerExpiry}>{offer.expiryDate}</Text>
</View>
</View>
</TouchableOpacity>
))}
</ScrollView>
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
header: {
flexDirection: 'row',
alignItems: 'center',
padding: 20,
backgroundColor: '#FFD700',
},
backButton: {
marginRight: 10,
},
headerTitle: {
fontSize: 20,
fontWeight: 'bold',
},
scrollView: {
flex: 1,
},
offerCard: {
flexDirection: 'row',
padding: 15,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
logo: {
width: 50,
height: 50,
marginRight: 15,
},
offerDetails: {
flex: 1,
},
offerTitle: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 5,
},
offerInfo: {
flexDirection: 'row',
justifyContent: 'space-between',
},
offerType: {
color: '#FF6347',
},
offerExpiry: {
color: '#808080',
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
export default MoreScreen;