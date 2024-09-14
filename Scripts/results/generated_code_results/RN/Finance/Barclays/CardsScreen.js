import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const CardDetails = () => {
const navigation = useNavigation();
const [isActive, setIsActive] = useState(true);
const handleNavigation = (screen) => {
navigation.navigate(screen);
};
return (
<SafeAreaView style={styles.container}>
<ScrollView>
<TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
<Text style={styles.backButtonText}>←</Text>
</TouchableOpacity>
    <Text style={styles.title}>STUDENT ADDITIONS</Text>
    
    <Text style={styles.subtitle}>Personal debit</Text>
    
    <View style={styles.cardContainer}>
      <Image
        source={require('../assets/snack-icon.png')}
        style={styles.cardImage}
      />
    </View>
    
    <Text style={styles.activeStatus}>
      {isActive ? '● Active' : '○ Inactive'}
    </Text>
    
    <Text style={styles.walletStatus}>Added to Apple Wallet ✓</Text>
    
    <View style={styles.actionButtonsContainer}>
      <TouchableOpacity style={styles.actionButton}>
        <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
        <Text style={styles.actionText}>Report damaged, lost or stolen</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
        <Text style={styles.actionText}>Temporary freeze</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
        <Text style={styles.actionText}>View card details & PIN</Text>
      </TouchableOpacity>
    </View>
    
    <Text style={styles.sectionTitle}>Travel money</Text>
    
    <TouchableOpacity style={styles.optionButton}>
      <Text style={styles.optionButtonText}>Create travel wallet</Text>
      <Text style={styles.optionButtonArrow}>→</Text>
    </TouchableOpacity>
    
    <Text style={styles.sectionTitle}>Spending controls</Text>
    
    <TouchableOpacity style={styles.optionButton}>
      <Text style={styles.optionButtonText}>Contactless limit</Text>
      <Text style={styles.optionButtonValue}>£100 →</Text>
    </TouchableOpacity>
  </ScrollView>
  
  <View style={styles.navBar}>
    <TouchableOpacity style={styles.navItem} onPress={() => handleNavigation('Home')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Accounts</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Products</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Pay & Transfer</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => handleNavigation('Help')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Help</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => handleNavigation('More')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>More</Text>
    </TouchableOpacity>
  </View>
</SafeAreaView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
backButton: {
padding: 10,
},
backButtonText: {
fontSize: 24,
fontWeight: 'bold',
},
title: {
fontSize: 24,
fontWeight: 'bold',
textAlign: 'center',
marginVertical: 10,
},
subtitle: {
fontSize: 18,
textAlign: 'center',
color: '#666',
marginBottom: 20,
},
cardContainer: {
alignItems: 'center',
marginBottom: 20,
},
cardImage: {
width: 300,
height: 180,
resizeMode: 'contain',
},
activeStatus: {
fontSize: 16,
textAlign: 'center',
color: 'green',
marginBottom: 10,
},
walletStatus: {
fontSize: 16,
textAlign: 'center',
marginBottom: 20,
},
actionButtonsContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
marginBottom: 20,
},
actionButton: {
alignItems: 'center',
},
actionIcon: {
width: 40,
height: 40,
marginBottom: 5,
},
actionText: {
textAlign: 'center',
fontSize: 12,
},
sectionTitle: {
fontSize: 18,
fontWeight: 'bold',
marginLeft: 20,
marginTop: 20,
marginBottom: 10,
},
optionButton: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingHorizontal: 20,
paddingVertical: 15,
borderBottomWidth: 1,
borderBottomColor: '#eee',
},
optionButtonText: {
fontSize: 16,
},
optionButtonValue: {
fontSize: 16,
color: '#666',
},
optionButtonArrow: {
fontSize: 20,
color: '#666',
},
navBar: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#eee',
paddingVertical: 10,
},
navItem: {
alignItems: 'center',
},
navIcon: {
width: 24,
height: 24,
marginBottom: 5,
},
navText: {
fontSize: 12,
},
});
export default CardDetails;