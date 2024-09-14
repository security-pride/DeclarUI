import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
const AccountPage = () => {
const navigation = useNavigation();
const [searchQuery, setSearchQuery] = useState('');
const handleNavigation = (screen) => {
navigation.navigate(screen);
};
return (
<view style={styles.container}>
<ScrollView style={styles.container}>
<TouchableOpacity style={styles.backArrow} onPress={() => navigation.goBack()}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
  <View style={styles.searchBar}>
    <TextInput
      style={styles.searchInput}
      placeholder="Search Amazon.co.uk"
      value={searchQuery}
      onChangeText={setSearchQuery}
    />
    <TouchableOpacity onPress={() => {/* Handle camera search */}}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {/* Handle voice search */}}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
    </TouchableOpacity>
  </View>

  <Text style={styles.sectionHeader}>Orders</Text>
  <TouchableOpacity style={styles.option} onPress={() => handleNavigation('Orders')}>
    <Text>Your Orders</Text>
    <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
  </TouchableOpacity>
  <TouchableOpacity style={styles.option}>
    <Text>Your Subscribe & Save</Text>
    <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
  </TouchableOpacity>
  <TouchableOpacity style={styles.option}>
    <Text>Your Amazon Day</Text>
    <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
  </TouchableOpacity>

  <Text style={styles.sectionHeader}>Payments</Text>
  <TouchableOpacity style={styles.option}>
    <Text>Payments and transactions</Text>
    <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
  </TouchableOpacity>
  <TouchableOpacity style={styles.option}>
    <Text>Manage gift card balance</Text>
    <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
  </TouchableOpacity>
  <TouchableOpacity style={styles.option}>
    <Text>Shop with Points</Text>
    <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
  </TouchableOpacity>
  <TouchableOpacity style={styles.option}>
    <Text>Top up account</Text>
    <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
  </TouchableOpacity>
  <TouchableOpacity style={styles.option}>
    <Text>In-Store Promo Wallet</Text>
    <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
  </TouchableOpacity>

  <Text style={styles.sectionHeader}>Customer Service</Text>
  <TouchableOpacity style={styles.option}>
    <Text>Contact Us</Text>
    <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
  </TouchableOpacity>

  <Text style={styles.sectionHeader}>Account Settings</Text>
</ScrollView>
<View style={styles.bottomBar}>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.bottomBarIcon} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.bottomBarIcon} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={require('../assets/snack-icon.png')} style={styles.bottomBarIcon} />
      <View style={styles.cartBadge}>
        <Text style={styles.cartBadgeText}>2</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={require('../assets/snack-icon.png')} style={styles.bottomBarIcon} />
    </TouchableOpacity>
  </View>
</view>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
backArrow: {
padding: 10,
},
searchBar: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
backgroundColor: '#f0f0f0',
borderRadius: 5,
margin: 10,
},
searchInput: {
flex: 1,
marginRight: 10,
},
icon: {
width: 24,
height: 24,
marginHorizontal: 5,
},
sectionHeader: {
fontSize: 18,
fontWeight: 'bold',
paddingHorizontal: 15,
paddingVertical: 10,
},
option: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingVertical: 15,
paddingHorizontal: 20,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
padding: 10,
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
},
navIcon: {
width: 25,
height: 25,
},
badge: {
position: 'absolute',
right: -6,
top: -6,
backgroundColor: '#007185',
borderRadius: 10,
width: 20,
height: 20,
justifyContent: 'center',
alignItems: 'center',
},
badgeText: {
color: '#fff',
fontSize: 12,
},
arrowIcon: {
width: 16,
height: 16,
},
});
export default AccountPage;