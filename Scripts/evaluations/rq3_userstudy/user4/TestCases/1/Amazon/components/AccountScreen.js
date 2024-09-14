import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const AccountPage = () => {
const navigation = useNavigation();
const [searchQuery, setSearchQuery] = useState('');
const handleNavigation = (screen) => {
navigation.navigate(screen);
};
return (
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
marginLeft: 5,
marginRight: 5,
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingVertical: 15,
paddingHorizontal: 20,
borderWidth: 1,
borderColor: '#e0e0e0',
borderRadius: 10,
},
arrowIcon: {
width: 16,
height: 16,
},
});
export default AccountPage;