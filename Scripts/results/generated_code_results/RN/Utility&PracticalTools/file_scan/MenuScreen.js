import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const MenuPage = () => {
const navigation = useNavigation();
const handleBackPress = () => {
navigation.navigate('Home');
};
return (
<View style={styles.container}>
<View style={styles.header}>
<Image source={require('../assets/snack-icon.png')} style={styles.logo} />
<Text style={styles.logoText}>scaney.</Text>
<View style={styles.statusIcons}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</View>
</View>
  <ScrollView style={styles.menuContent}>
    <TouchableOpacity style={styles.menuItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
      <Text style={styles.menuText}>Upgrade to premium</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.menuItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
      <Text style={styles.menuText}>Remove ads</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.menuItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
      <Text style={styles.menuText}>Signature</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.menuItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
      <Text style={styles.menuText}>Rate us</Text>
    </TouchableOpacity>

    <View style={styles.separator} />

    <Text style={styles.sectionTitle}>More</Text>

    <TouchableOpacity style={styles.menuItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
      <Text style={styles.menuText}>Help</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.menuItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
      <Text style={styles.menuText}>Terms & Conditions</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.menuItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
      <Text style={styles.menuText}>Privacy & Policy</Text>
    </TouchableOpacity>
  </ScrollView>

  <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
    <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
  </TouchableOpacity>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#FFFFFF',
},
header: {
flexDirection: 'row',
alignItems: 'center',
padding: 20,
borderBottomWidth: 1,
borderBottomColor: '#EEEEEE',
},
logo: {
width: 40,
height: 40,
},
logoText: {
fontSize: 24,
fontWeight: 'bold',
marginLeft: 10,
},
statusIcons: {
flexDirection: 'row',
marginLeft: 'auto',
},
icon: {
width: 20,
height: 20,
marginLeft: 5,
},
menuContent: {
flex: 1,
},
menuItem: {
flexDirection: 'row',
alignItems: 'center',
padding: 20,
borderBottomWidth: 1,
borderBottomColor: '#EEEEEE',
},
menuIcon: {
width: 30,
height: 30,
marginRight: 20,
},
menuText: {
fontSize: 18,
},
separator: {
height: 20,
},
sectionTitle: {
fontSize: 16,
fontWeight: 'bold',
color: '#888888',
marginLeft: 20,
marginTop: 10,
marginBottom: 10,
},
backButton: {
position: 'absolute',
top: 20,
right: 20,
},
backIcon: {
width: 30,
height: 30,
},
});
export default MenuPage;