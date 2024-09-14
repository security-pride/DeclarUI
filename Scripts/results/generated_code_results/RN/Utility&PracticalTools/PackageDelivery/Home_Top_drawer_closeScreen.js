import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const HomeTopDrawerClose = () => {
const navigation = useNavigation();
const [parcels, setParcels] = useState([
{
id: '003590077380603137861',
company: 'amazon',
status: 'In transit',
lastUpdate: '3 hours ago',
progress: 70
},
{
id: '008060313786900773122',
company: 'AliExpress',
status: 'Left the parcel center',
lastUpdate: '21 hours ago',
progress: 40
},
{
id: '006900773128060313783',
company: 'zalando',
status: 'Delivered',
lastUpdate: '2 days ago',
progress: 100
}
]);
const renderParcel = (parcel) => (
<View key={parcel.id} style={styles.parcelItem}>
<Text style={styles.parcelId}>{parcel.id}</Text>
<View style={styles.parcelInfo}>
<Text style={styles.companyName}>{parcel.company}</Text>
<Text style={styles.status}>{parcel.status}</Text>
<Text style={styles.lastUpdate}>Last update: {parcel.lastUpdate}</Text>
<View style={styles.progressBar}>
<View style={[styles.progress, { width: ${parcel.progress}% }]} />
</View>
</View>
<TouchableOpacity style={styles.detailsButton}>
<Text style={styles.detailsButtonText}>Details</Text>
</TouchableOpacity>
</View>
);
return (
<View style={styles.container}>
<StatusBar barStyle="dark-content" />
<View style={styles.header}>
<Text style={styles.headerTitle}>Track parcel</Text>
<TouchableOpacity onPress={() => navigation.navigate('Home_Top_drawer_open')}>
<Image source={require('../assets/snack-icon.png')} style={styles.profileIcon} />
</TouchableOpacity>
</View>
<ScrollView style={styles.parcelList}>
{parcels.map(renderParcel)}
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
parcelList: {
flex: 1,
backgroundColor: '#FFFFFF',
borderTopLeftRadius: 20,
borderTopRightRadius: 20,
padding: 16,
},
parcelItem: {
marginBottom: 20,
borderBottomWidth: 1,
borderBottomColor: '#E0E0E0',
paddingBottom: 10,
},
parcelId: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 5,
},
parcelInfo: {
marginBottom: 10,
},
companyName: {
fontSize: 14,
color: '#666',
},
status: {
fontSize: 16,
fontWeight: '500',
marginVertical: 5,
},
lastUpdate: {
fontSize: 12,
color: '#999',
},
progressBar: {
height: 5,
backgroundColor: '#E0E0E0',
borderRadius: 2.5,
marginTop: 5,
},
progress: {
height: '100%',
backgroundColor: '#FFEB3B',
borderRadius: 2.5,
},
detailsButton: {
alignSelf: 'flex-start',
paddingVertical: 5,
paddingHorizontal: 10,
borderRadius: 15,
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
marginBottom: 5,
},
navText: {
fontSize: 12,
},
});
export default HomeTopDrawerClose;