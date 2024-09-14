import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, ScrollView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const ParcelCenter = () => {
const navigation = useNavigation();
const parcelCenters = [
{
id: 'NY0924',
address: '985 Meadow St.',
city: 'Staten Island, NY 10306',
availability: 'Available 24/7',
occupancy: 'Fully occupied',
},
{
id: 'NY0812',
address: '54 West Adams Court',
city: 'Rego Park, NY 11374',
availability: 'Available 24/7',
occupancy: 'Lots of empty space',
},
];
return (
<View style={styles.container}>
<StatusBar barStyle="dark-content" />
<Text style={styles.header}>Parcel centers</Text>
  <ScrollView style={styles.mapContainer}>
    <ImageBackground
      source={require('../assets/snack-icon.png')}
      style={styles.map}
      resizeMode="cover"
    >
      {/* Map markers would go here */}
    </ImageBackground>
  </ScrollView>

  <ScrollView style={styles.centerList}>
    {parcelCenters.map((center) => (
      <View key={center.id} style={styles.centerItem}>
        <View style={styles.centerHeader}>
          <Text style={styles.centerId}>{center.id}</Text>
          <Text style={styles.availability}>{center.availability}</Text>
        </View>
        <Text style={styles.address}>{center.address}</Text>
        <Text style={styles.city}>{center.city}</Text>
        <Text style={styles.occupancy}>{center.occupancy}</Text>
      </View>
    ))}
  </ScrollView>

  <View style={styles.navbar}>
    <TouchableOpacity
      style={styles.navItem}
      onPress={() => navigation.navigate('Home_Top_drawer_open')}
    >
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
    <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={[styles.navText, styles.activeNavText]}>Parcel center</Text>
    </TouchableOpacity>
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#FFFFFF',
},
header: {
fontSize: 28,
fontWeight: 'bold',
padding: 16,
paddingTop: 60,
},
mapContainer: {
height: 300,
},
map: {
flex: 1,
},
centerList: {
flex: 1,
},
centerItem: {
padding: 16,
borderBottomWidth: 1,
borderBottomColor: '#E0E0E0',
},
centerHeader: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: 8,
},
centerId: {
fontSize: 18,
fontWeight: 'bold',
},
availability: {
fontSize: 14,
color: '#888',
},
address: {
fontSize: 16,
marginBottom: 4,
},
city: {
fontSize: 16,
marginBottom: 8,
},
occupancy: {
fontSize: 14,
color: '#888',
},
navbar: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#E0E0E0',
paddingVertical: 8,
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
color: '#888',
},
activeNavItem: {
// Add styles for active state if needed
},
activeNavText: {
color: '#000',
fontWeight: 'bold',
},
});
export default ParcelCenter;