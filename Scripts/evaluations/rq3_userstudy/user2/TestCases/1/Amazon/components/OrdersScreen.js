import React from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const OrdersPage = () => {
const navigation = useNavigation();
const handleNavigation = (screen) => {
navigation.navigate(screen);
};
return (
<View style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={() => navigation.goBack()}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
</TouchableOpacity>
<View style={styles.searchBar}>
<TextInput style={styles.searchInput} placeholder="Search Amazon.co.uk" />
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
</View>
</View>
  <Text style={styles.title}>Your Orders</Text>

  <View style={styles.orderSearchBar}>
    <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />
    <TextInput
      style={styles.orderSearchInput}
      placeholder="Search all orders"
    />
    <TouchableOpacity style={styles.filterButton} onPress={() => handleNavigation('Filter')}>
      <Text style={styles.filterText}>Filter</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
    </TouchableOpacity>
  </View>

  <ScrollView>
    <View style={styles.buyAgainSection}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Buy again</Text>
        <TouchableOpacity>
          <Text style={styles.seeMoreText}>See more</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal>
        {['water', 'gloves', 'noodles', 'rice'].map((item, index) => (
          <Image key={index} source={require('../assets/snack-icon.png')} style={styles.buyAgainImage} />
        ))}
      </ScrollView>
    </View>

    <Text style={styles.pastOrdersLabel}>Past three months</Text>

    {[
      { title: 'SmithPackaging Large Bubble Wrap Roll 300mm x 5m - Sm...', date: 'Delivered 10 June' },
      { title: 'AYhome Travel Pillow, Memory Foam Neck Pillow for Travel,...', date: 'Delivered 10 June' },
      { title: 'Toyama Koshihikari 1kg', date: 'Delivered 28 May' },
    ].map((order, index) => (
      <TouchableOpacity key={index} style={styles.orderItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.orderImage} />
        <View style={styles.orderDetails}>
          <Text style={styles.orderTitle}>{order.title}</Text>
          <Text style={styles.orderDate}>{order.date}</Text>
        </View>
        <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
      </TouchableOpacity>
    ))}
  </ScrollView>

  <View style={styles.bottomNav}>
    <TouchableOpacity onPress={() => handleNavigation('Home')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handleNavigation('Profile')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => handleNavigation('Orders')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => handleNavigation('Account')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
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
padding: 10,
backgroundColor: '#e6f2ff',
},
backIcon: {
width: 24,
height: 24,
marginRight: 10,
},
searchBar: {
flex: 1,
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#fff',
borderRadius: 5,
paddingHorizontal: 10,
},
searchInput: {
flex: 1,
height: 40,
},
icon: {
width: 20,
height: 20,
marginLeft: 10,
},
title: {
fontSize: 24,
fontWeight: 'bold',
margin: 10,
},
orderSearchBar: {
flexDirection: 'row',
alignItems: 'center',
margin: 10,
borderWidth: 1,
borderColor: '#ddd',
borderRadius: 5,
},
searchIcon: {
width: 20,
height: 20,
margin: 10,
},
orderSearchInput: {
flex: 1,
height: 40,
},
filterButton: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
borderLeftWidth: 1,
borderLeftColor: '#ddd',
},
filterText: {
marginRight: 5,
},
arrowIcon: {
width: 15,
height: 15,
},
buyAgainSection: {
margin: 10,
},
sectionHeader: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: 10,
},
sectionTitle: {
fontSize: 18,
fontWeight: 'bold',
},
seeMoreText: {
color: '#007185',
},
buyAgainImage: {
width: 80,
height: 80,
marginRight: 10,
},
pastOrdersLabel: {
fontSize: 16,
fontWeight: 'bold',
margin: 10,
},
orderItem: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
borderBottomWidth: 1,
borderBottomColor: '#ddd',
},
orderImage: {
width: 60,
height: 60,
marginRight: 10,
},
orderDetails: {
flex: 1,
},
orderTitle: {
fontSize: 16,
marginBottom: 5,
},
orderDate: {
color: '#555',
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
padding: 10,
borderTopWidth: 1,
borderTopColor: '#ddd',
},
navIcon: {
width: 25,
height: 25,
},
});
export default OrdersPage;