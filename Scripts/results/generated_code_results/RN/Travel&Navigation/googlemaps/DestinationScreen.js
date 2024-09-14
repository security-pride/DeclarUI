import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const DestinationScreen = () => {
const navigation = useNavigation();
const [departureLocation, setDepartureLocation] = useState('您的位置');
const transportationOptions = [
{ id: '1', name: '驾车', icon: 'car', selected: true },
{ id: '2', name: '公共交通', icon: 'bus' },
{ id: '3', name: '步行', icon: 'walking' },
{ id: '4', name: '骑车', icon: 'bicycle' },
{ id: '5', name: '飞机', icon: 'plane' },
];
const savedLocations = [
{ id: '1', name: '家', icon: 'home', description: '设置位置' },
{ id: '2', name: '单位', icon: 'briefcase', description: '设置位置' },
];
const recentSearches = [
{ id: '1', name: '放置图钉', icon: 'clock' },
{ id: '2', name: '酒店', icon: 'clock' },
{ id: '3', name: '景点', icon: 'clock' },
{ id: '4', name: '餐馆', icon: 'clock' },
];
const previousSearches = [
{ id: '1', name: 'Starbucks', description: '查看地点信息' },
{ id: '2', name: 'Costa Coffee', description: 'Domestic Arrivals, 爱丁堡机场 (EDI) Tur...' },
{ id: '3', name: 'A720, Edinburgh', icon: 'clock' },
];
const renderTransportationOption = ({ item }) => (
<TouchableOpacity style={[styles.transportOption, item.selected && styles.selectedTransport]}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.transportIcon} />
</TouchableOpacity>
);
const renderSavedLocation = ({ item }) => (
<TouchableOpacity style={styles.savedLocation}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.locationIcon} />
<View>
<Text style={styles.locationName}>{item.name}</Text>
<Text style={styles.locationDescription}>{item.description}</Text>
</View>
</TouchableOpacity>
);
const renderRecentSearch = ({ item }) => (
<TouchableOpacity style={styles.recentSearch}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.clockIcon} />
<Text style={styles.searchText}>{item.name}</Text>
</TouchableOpacity>
);
const renderPreviousSearch = ({ item }) => (
<TouchableOpacity style={styles.previousSearch}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.clockIcon} />
<View>
<Text style={styles.searchName}>{item.name}</Text>
<Text style={styles.searchDescription}>{item.description}</Text>
</View>
</TouchableOpacity>
);
return (
<View style={styles.container}>
<TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Explore')}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.backIcon} />
</TouchableOpacity>
  <TouchableOpacity style={styles.locationInput} onPress={() => navigation.navigate('Departure')}>
    <Text>{departureLocation}</Text>
    <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.arrowIcon} />
  </TouchableOpacity>

  <TouchableOpacity style={styles.destinationInput}>
    <Text style={styles.inputPlaceholder}>选择目的地</Text>
    <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.arrowIcon} />
  </TouchableOpacity>

  <FlatList
    horizontal
    data={transportationOptions}
    renderItem={renderTransportationOption}
    keyExtractor={(item) => item.id}
    style={styles.transportList}
  />

  <FlatList
    data={savedLocations}
    renderItem={renderSavedLocation}
    keyExtractor={(item) => item.id}
    style={styles.savedLocationsList}
  />

  <Text style={styles.sectionTitle}>今天</Text>
  <FlatList
    data={recentSearches}
    renderItem={renderRecentSearch}
    keyExtractor={(item) => item.id}
    style={styles.recentSearchesList}
  />

  <Text style={styles.sectionTitle}>以前的搜索</Text>
  <FlatList
    data={previousSearches}
    renderItem={renderPreviousSearch}
    keyExtractor={(item) => item.id}
    style={styles.previousSearchesList}
  />

  <TouchableOpacity style={styles.viewMoreButton}>
    <Text style={styles.viewMoreText}>查看更多</Text>
  </TouchableOpacity>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
padding: 15,
},
backButton: {
marginBottom: 15,
},
backIcon: {
width: 24,
height: 24,
},
locationInput: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 10,
backgroundColor: '#f0f0f0',
borderRadius: 5,
marginBottom: 10,
},
destinationInput: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 10,
backgroundColor: '#f0f0f0',
borderRadius: 5,
marginBottom: 15,
},
inputPlaceholder: {
color: '#888',
},
arrowIcon: {
width: 16,
height: 16,
},
transportList: {
marginBottom: 15,
},
transportOption: {
marginRight: 10,
padding: 10,
backgroundColor: '#f0f0f0',
borderRadius: 5,
},
selectedTransport: {
backgroundColor: '#e0e0e0',
},
transportIcon: {
width: 24,
height: 24,
},
savedLocationsList: {
marginBottom: 15,
},
savedLocation: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 10,
},
locationIcon: {
width: 24,
height: 24,
marginRight: 10,
},
locationName: {
fontWeight: 'bold',
},
locationDescription: {
color: '#888',
},
sectionTitle: {
fontWeight: 'bold',
marginBottom: 10,
},
recentSearchesList: {
marginBottom: 15,
},
recentSearch: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 10,
},
clockIcon: {
width: 20,
height: 20,
marginRight: 10,
},
searchText: {
color: '#333',
},
previousSearchesList: {
marginBottom: 15,
},
previousSearch: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 10,
},
searchName: {
fontWeight: 'bold',
},
searchDescription: {
color: '#888',
},
viewMoreButton: {
alignItems: 'center',
},
viewMoreText: {
color: '#007AFF',
},
});
export default DestinationScreen;