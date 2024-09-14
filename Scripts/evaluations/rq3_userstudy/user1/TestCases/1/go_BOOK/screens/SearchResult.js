import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
const SearchResult = ({ navigation }) => {
const flightData = [
{ id: '1', airline: 'AirArabia', departureTime: '11:00', arrivalTime: '16:30', departureCode: 'LHR', arrivalCode: 'BHD', duration: '05h 30m', price: '$330' },
{ id: '2', airline: 'ZAYAAN', departureTime: '11:00', arrivalTime: '16:30', departureCode: 'LHR', arrivalCode: 'BHD', duration: '05h 30m', price: '$330' },
{ id: '3', airline: 'Biman Bangladesh Airlines', departureTime: '11:00', arrivalTime: '16:30', departureCode: 'LHR', arrivalCode: 'BHD', duration: '05h 30m', price: '$330' },
{ id: '4', airline: 'Novoair', departureTime: '11:00', arrivalTime: '16:30', departureCode: 'LHR', arrivalCode: 'BHD', duration: '05h 30m', price: '$330' },
];
const renderFlightCard = ({ item }) => (
<View style={styles.flightCard}>
<View style={styles.airlineInfo}>
<Image source={require('../assets/snack-icon.png')} style={styles.airlineLogo} />
<Text style={styles.airlineName}>{item.airline}</Text>
</View>
<View style={styles.flightDetails}>
<View style={styles.timeContainer}>
<Text style={styles.time}>{item.departureTime}</Text>
<Text style={styles.airport}>{item.departureCode}</Text>
</View>
<View style={styles.durationContainer}>
<View style={styles.durationLine} />
<Image source={require('../assets/snack-icon.png')} style={styles.planeIcon} />
<Text style={styles.duration}>{item.duration}</Text>
</View>
<View style={styles.timeContainer}>
<Text style={styles.time}>{item.arrivalTime}</Text>
<Text style={styles.airport}>{item.arrivalCode}</Text>
</View>
</View>
<View style={styles.priceBookContainer}>
<View>
<Text style={styles.priceLabel}>Ticket Price</Text>
<Text style={styles.price}>{item.price}</Text>
</View>
<TouchableOpacity style={styles.bookButton}>
<Text style={styles.bookButtonText}>Book Now</Text>
</TouchableOpacity>
</View>
</View>
);
return (
<View style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={() => navigation.goBack()}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
</TouchableOpacity>
<Text style={styles.headerTitle}>Search</Text>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
</TouchableOpacity>
</View>
  <View style={styles.searchInfo}>
    <View style={styles.routeInfo}>
      <Text style={styles.routeText}>France • Switzerland</Text>
      <TouchableOpacity>
        <Image source={require('../assets/snack-icon.png')} style={styles.editIcon} />
      </TouchableOpacity>
    </View>
    <Text style={styles.flightDetails}>Friday, 30 Jul • 2 Seat • Business</Text>
  </View>

  <View style={styles.resultHeader}>
    <Text style={styles.resultTitle}>Search Result</Text>
    <Text style={styles.resultCount}>15 Founds</Text>
  </View>

  <FlatList
    data={flightData}
    renderItem={renderFlightCard}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
  />
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#F5F5F5',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 16,
backgroundColor: '#FFFFFF',
},
backIcon: {
width: 24,
height: 24,
},
headerTitle: {
fontSize: 18,
fontWeight: 'bold',
},
menuIcon: {
width: 24,
height: 24,
},
searchInfo: {
backgroundColor: '#FFFFFF',
padding: 16,
marginBottom: 16,
},
routeInfo: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
},
routeText: {
fontSize: 16,
fontWeight: 'bold',
},
editIcon: {
width: 20,
height: 20,
},
flightDetails: {
color: '#666',
marginTop: 4,
},
resultHeader: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingHorizontal: 16,
marginBottom: 16,
},
resultTitle: {
fontSize: 18,
fontWeight: 'bold',
},
resultCount: {
color: '#666',
},
flightCard: {
backgroundColor: '#FFFFFF',
borderRadius: 8,
padding: 16,
marginHorizontal: 16,
marginBottom: 16,
},
airlineInfo: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 16,
},
airlineLogo: {
width: 32,
height: 32,
marginRight: 8,
},
airlineName: {
fontSize: 16,
fontWeight: 'bold',
},
flightDetails: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: 16,
},
timeContainer: {
alignItems: 'center',
},
time: {
fontSize: 16,
fontWeight: 'bold',
},
airport: {
color: '#666',
},
durationContainer: {
alignItems: 'center',
},
durationLine: {
width: 100,
height: 1,
backgroundColor: '#666',
position: 'absolute',
top: 10,
},
planeIcon: {
width: 24,
height: 24,
},
duration: {
color: '#666',
marginTop: 4,
},
priceBookContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
},
priceLabel: {
color: '#666',
},
price: {
fontSize: 18,
fontWeight: 'bold',
},
bookButton: {
backgroundColor: '#007AFF',
paddingHorizontal: 16,
paddingVertical: 8,
borderRadius: 4,
},
bookButtonText: {
color: '#FFFFFF',
fontWeight: 'bold',
},
});
export default SearchResult;