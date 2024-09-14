import React from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const HomePage = () => {
const navigation = useNavigation();
const handleNavigation = (screen) => {
navigation.navigate(screen);
};
return (
<View style={styles.container}>
<View style={styles.searchBar}>
<TextInput style={styles.searchInput} placeholder="Search Amazon.co.uk" />
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
</View>
  <ScrollView>
    <View style={styles.topMenu}>
      <Text style={styles.menuItem}>Prime</Text>
      <Text style={styles.menuItem}>Video</Text>
      <Text style={styles.menuItem}>Music</Text>
    </View>

    <TouchableOpacity style={styles.deliveryAddress}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text>Deliver to Muyi - St. Andrews KY16 9</Text>
    </TouchableOpacity>

    <View style={styles.featuredSection}>
      <Text style={styles.featuredTitle}>Shop Electronics today</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.featuredImage} />
    </View>

    <View style={styles.dealsSection}>
      <View style={styles.dealCard}>
        <Text>Recommended deal for you</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.dealImage} />
      </View>
      <View style={styles.dealCard}>
        <Text>4+ star deal for you</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.dealImage} />
      </View>
      <View style={styles.dealCard}>
        <Text>Sports & Outdoors</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.dealImage} />
      </View>
    </View>

    <Text style={styles.sectionTitle}>Prime Day by category</Text>
    <ScrollView horizontal style={styles.categoryScroll}>
      {['Bags & Luggage', 'Office', 'Automotive', 'Jewellery & Watches'].map((category, index) => (
        <View key={index} style={styles.categoryItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />
          <Text style={styles.categoryText}>{category}</Text>
        </View>
      ))}
    </ScrollView>
  </ScrollView>

  <View style={styles.bottomNav}>
    <TouchableOpacity onPress={() => handleNavigation('Home')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handleNavigation('Profile')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handleNavigation('Orders')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handleNavigation('Account')}>
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
searchBar: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
backgroundColor: '#f0f0f0',
},
searchInput: {
flex: 1,
height: 40,
borderRadius: 5,
paddingLeft: 10,
backgroundColor: '#fff',
},
icon: {
width: 24,
height: 24,
marginLeft: 10,
},
topMenu: {
flexDirection: 'row',
justifyContent: 'space-around',
padding: 10,
backgroundColor: '#e6f2ff',
},
menuItem: {
fontSize: 16,
},
deliveryAddress: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
backgroundColor: '#e6f2ff',
},
featuredSection: {
margin: 10,
},
featuredTitle: {
fontSize: 18,
fontWeight: 'bold',
},
featuredImage: {
width: '100%',
height: 200,
resizeMode: 'cover',
marginTop: 10,
},
dealsSection: {
flexDirection: 'row',
justifyContent: 'space-between',
padding: 10,
},
dealCard: {
width: '30%',
aspectRatio: 1,
backgroundColor: '#f0f0f0',
borderRadius: 5,
padding: 5,
},
dealImage: {
width: '100%',
height: '70%',
resizeMode: 'contain',
},
sectionTitle: {
fontSize: 18,
fontWeight: 'bold',
margin: 10,
},
categoryScroll: {
paddingLeft: 10,
},
categoryItem: {
alignItems: 'center',
marginRight: 20,
},
categoryIcon: {
width: 50,
height: 50,
borderRadius: 25,
backgroundColor: '#007bff',
},
categoryText: {
marginTop: 5,
textAlign: 'center',
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
padding: 10,
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
},
navIcon: {
width: 30,
height: 30,
},
});
export default HomePage;