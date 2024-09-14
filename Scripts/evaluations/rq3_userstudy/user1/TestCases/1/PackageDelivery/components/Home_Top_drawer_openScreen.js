import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, StatusBar, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const HomeTopDrawerOpen = () => {
const navigation = useNavigation();
const [trackingNumber, setTrackingNumber] = useState('');
const handleTrackParcel = () => {
// Implement tracking logic here
console.log('Tracking parcel:', trackingNumber);
};
const handleScanQR = () => {
// Implement QR code scanning logic here
console.log('Scanning QR code');
};
return (
<View style={styles.container}>
<StatusBar barStyle="dark-content" />
<View style={styles.header}>
<Text style={styles.headerTitle}>Track parcel</Text>
<TouchableOpacity onPress={() => navigation.navigate('Home_Top_drawer_close')}>
<Image source={require('../assets/snack-icon.png')} style={styles.profileIcon} />
</TouchableOpacity>
</View>
  <View style={styles.inputContainer}>
    <Text style={styles.inputLabel}>Enter parcel number or scan QR code</Text>
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        placeholder="tracking number"
        value={trackingNumber}
        onChangeText={setTrackingNumber}
      />
      <TouchableOpacity style={styles.qrButton} onPress={handleScanQR}>
        <Image source={require('../assets/snack-icon.png')} style={styles.qrIcon} />
      </TouchableOpacity>
    </View>
    <TouchableOpacity style={styles.trackButton} onPress={handleTrackParcel}>
      <Text style={styles.trackButtonText}>Track parcel</Text>
    </TouchableOpacity>
  </View>

  <ScrollView style={styles.parcelList}>
    <Text style={styles.sectionTitle}>My parcels</Text>
    {/* Add parcel list items here */}
    <View style={styles.parcelItem}>
      <Text style={styles.parcelId}>003590077380603137861</Text>
      <Text style={styles.parcelCompany}>amazon</Text>
      <Text style={styles.parcelStatus}>In transit</Text>
      <Text style={styles.lastUpdate}>Last update: 3 hours ago</Text>
      <TouchableOpacity style={styles.detailsButton}>
        <Text style={styles.detailsButtonText}>Details</Text>
      </TouchableOpacity>
    </View>
    {/* Add more parcel items as needed */}
  </ScrollView>

  <View style={styles.navbar}>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>My parcels</Text>
    </TouchableOpacity>
    <TouchableOpacity 
      style={styles.navItem}
      onPress={() => navigation.navigate('SendParcel_Delivery_method')}
    >
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Send parcel</Text>
    </TouchableOpacity>
    <TouchableOpacity 
      style={styles.navItem}
      onPress={() => navigation.navigate('Parcel_center')}
    >
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Parcel center</Text>
    </TouchableOpacity>
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#FFEB3B',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 16,
paddingTop: 60,
},
headerTitle: {
fontSize: 24,
fontWeight: 'bold',
},
profileIcon: {
width: 40,
height: 40,
borderRadius: 20,
},
inputContainer: {
padding: 16,
},
inputLabel: {
fontSize: 16,
marginBottom: 8,
},
inputWrapper: {
flexDirection: 'row',
marginBottom: 16,
},
input: {
flex: 1,
height: 48,
borderWidth: 1,
borderColor: '#E0E0E0',
borderRadius: 8,
paddingHorizontal: 12,
backgroundColor: '#FFFFFF',
},
qrButton: {
width: 48,
height: 48,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#FFFFFF',
borderWidth: 1,
borderColor: '#E0E0E0',
borderRadius: 8,
marginLeft: 8,
},
qrIcon: {
width: 24,
height: 24,
},
trackButton: {
backgroundColor: '#000000',
borderRadius: 8,
padding: 16,
alignItems: 'center',
},
trackButtonText: {
color: '#FFFFFF',
fontSize: 16,
fontWeight: 'bold',
},
parcelList: {
flex: 1,
backgroundColor: '#FFFFFF',
borderTopLeftRadius: 20,
borderTopRightRadius: 20,
padding: 16,
},
sectionTitle: {
fontSize: 20,
fontWeight: 'bold',
marginBottom: 16,
},
parcelItem: {
marginBottom: 16,
borderBottomWidth: 1,
borderBottomColor: '#E0E0E0',
paddingBottom: 16,
},
parcelId: {
fontSize: 16,
fontWeight: 'bold',
},
parcelCompany: {
fontSize: 14,
color: '#666',
},
parcelStatus: {
fontSize: 16,
fontWeight: '500',
marginTop: 4,
},
lastUpdate: {
fontSize: 12,
color: '#999',
marginTop: 4,
},
detailsButton: {
alignSelf: 'flex-start',
marginTop: 8,
paddingVertical: 4,
paddingHorizontal: 12,
borderRadius: 12,
backgroundColor: '#FFEB3B',
},
detailsButtonText: {
color: '#000',
fontWeight: '500',
},
navbar: {
flexDirection: 'row',
justifyContent: 'space-around',
paddingVertical: 10,
borderTopWidth: 1,
borderTopColor: '#E0E0E0',
backgroundColor: '#FFFFFF',
},
navItem: {
alignItems: 'center',
},
navIcon: {
width: 24,
height: 24,
marginBottom: 4,
},
navText: {
fontSize: 12,
},
});
export default HomeTopDrawerOpen;