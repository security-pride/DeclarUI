import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const ProfilePage = () => {
const navigation = useNavigation();
const handleNavigation = (screen) => {
navigation.navigate(screen);
};
return (
<View style={styles.container}>
<View style={styles.header}>
<Image source={require('../assets/snack-icon.png')} style={styles.logo} />
<View style={styles.headerRight}>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
</View>
</View>
  <ScrollView>
    <View style={styles.userInfo}>
      <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
      <View style={styles.userNameContainer}>
        <Text style={styles.greeting}>Hello, ml296</Text>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.dropdownIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.languageSelector}>
        <Image source={require('../assets/snack-icon.png')} style={styles.flagIcon} />
        <Text style={styles.languageText}>EN</Text>
      </View>
    </View>

    <View style={styles.quickAccessButtons}>
      <TouchableOpacity style={styles.quickAccessButton} onPress={() => handleNavigation('Orders')}>
        <Text>Your Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.quickAccessButton}>
        <Text>Buy Again</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.quickAccessButton} onPress={() => handleNavigation('Account')}>
        <Text>Your Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.quickAccessButton}>
        <Text>Your Lists</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Your Orders</Text>
        <TouchableOpacity onPress={() => handleNavigation('Orders')}>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.orderItems}>
        <Image source={require('../assets/snack-icon.png')} style={styles.orderImage} />
        <Image source={require('../assets/snack-icon.png')} style={styles.orderImage} />
      </View>
    </View>

    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Buy again</Text>
        <TouchableOpacity onPress={() => handleNavigation('Orders')}>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Image source={require('../assets/snack-icon.png')} style={styles.buyAgainImage} />
        <Image source={require('../assets/snack-icon.png')} style={styles.buyAgainImage} />
        <Image source={require('../assets/snack-icon.png')} style={styles.buyAgainImage} />
        <Image source={require('../assets/snack-icon.png')} style={styles.buyAgainImage} />
        <Image source={require('../assets/snack-icon.png')} style={styles.buyAgainImage} />
        <Image source={require('../assets/snack-icon.png')} style={styles.buyAgainImage} />
      </ScrollView>
    </View>
  </ScrollView>

  <View style={styles.bottomNav}>
    <TouchableOpacity onPress={() => handleNavigation('Home')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handleNavigation('Orders')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <View style={styles.badge}>
        <Text style={styles.badgeText}>2</Text>
      </View>
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
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 10,
backgroundColor: '#e6f2ff',
},
logo: {
width: 100,
height: 30,
resizeMode: 'contain',
},
headerRight: {
flexDirection: 'row',
},
icon: {
width: 24,
height: 24,
marginLeft: 15,
},
userInfo: {
flexDirection: 'row',
alignItems: 'center',
padding: 15,
},
avatar: {
width: 40,
height: 40,
borderRadius: 20,
},
userNameContainer: {
flexDirection: 'row',
alignItems: 'center',
marginLeft: 10,
},
greeting: {
fontSize: 18,
fontWeight: 'bold',
},
dropdownIcon: {
width: 15,
height: 15,
marginLeft: 5,
},
languageSelector: {
flexDirection: 'row',
alignItems: 'center',
marginLeft: 'auto',
},
flagIcon: {
width: 24,
height: 16,
marginRight: 5,
},
languageText: {
fontSize: 16,
},
quickAccessButtons: {
flexDirection: 'row',
flexWrap: 'wrap',
justifyContent: 'space-between',
padding: 10,
},
quickAccessButton: {
width: '48%',
backgroundColor: '#f0f0f0',
padding: 15,
borderRadius: 5,
alignItems: 'center',
marginBottom: 10,
},
section: {
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
seeAllText: {
color: '#007185',
},
orderItems: {
flexDirection: 'row',
justifyContent: 'space-between',
},
orderImage: {
width: '48%',
height: 150,
resizeMode: 'cover',
borderRadius: 5,
},
buyAgainImage: {
width: 100,
height: 100,
marginRight: 10,
borderRadius: 5,
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
});
export default ProfilePage;