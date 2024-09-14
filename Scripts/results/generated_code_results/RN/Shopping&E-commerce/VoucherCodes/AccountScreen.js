import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const AccountScreen = () => {
const navigation = useNavigation();
const menuItems = [
{ icon: 'person', title: 'Personal details' },
{ icon: 'favorite', title: 'Favourite brands' },
{ icon: 'email', title: 'Communication preferences' },
{ icon: 'star', title: 'VIP rewards tracker', badge: 'New' },
{ icon: 'account-balance-wallet', title: 'Track transaction status' },
{ icon: 'card-giftcard', title: 'Gift card wallet' },
{ icon: 'code', title: 'Submit a code' },
];
const handleNavigation = (screenName) => {
navigation.navigate(screenName);
};
return (
<View style={styles.container}>
<ScrollView>
<Text style={styles.header}>Tailor your offers and access exciting rewards</Text>
<TouchableOpacity style={styles.signInButton}>
<Text style={styles.signInText}>Sign In</Text>
</TouchableOpacity>
{menuItems.map((item, index) => (
<TouchableOpacity key={index} style={styles.menuItem}>
<Icon name={item.icon} size={24} color="#000" />
<Text style={styles.menuItemText}>{item.title}</Text>
{item.badge && (
<View style={styles.badge}>
<Text style={styles.badgeText}>{item.badge}</Text>
</View>
)}
<Icon name="chevron-right" size={24} color="#000" style={styles.chevron} />
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
</TouchableOpacity>
<TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
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
fontSize: 24,
fontWeight: 'bold',
textAlign: 'center',
marginVertical: 20,
paddingHorizontal: 20,
},
signInButton: {
backgroundColor: '#FFD700',
padding: 15,
borderRadius: 5,
marginHorizontal: 20,
marginBottom: 20,
alignItems: 'center',
},
signInText: {
fontSize: 18,
fontWeight: 'bold',
},
menuItem: {
flexDirection: 'row',
alignItems: 'center',
paddingVertical: 15,
paddingHorizontal: 20,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
menuItemText: {
fontSize: 16,
marginLeft: 15,
flex: 1,
},
badge: {
backgroundColor: '#FFD700',
borderRadius: 10,
paddingHorizontal: 8,
paddingVertical: 2,
},
badgeText: {
fontSize: 12,
fontWeight: 'bold',
},
chevron: {
marginLeft: 10,
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
activeNavItem: {
borderTopWidth: 2,
borderTopColor: '#FFD700',
},
});
export default AccountScreen;