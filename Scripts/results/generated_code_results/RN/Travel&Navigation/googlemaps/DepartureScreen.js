import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const DepartureScreen = () => {
const navigation = useNavigation();
const [searchText, setSearchText] = useState('');
const locationOptions = [
{ id: '1', name: '您的位置', icon: 'location-arrow' },
{ id: '2', name: '在地图上选择', icon: 'map-pin' },
];
const recentSearches = [
{ id: '1', name: '放置图钉', icon: 'clock' },
{ id: '2', name: '酒店', icon: 'clock' },
{ id: '3', name: '景点', icon: 'clock' },
{ id: '4', name: '餐馆', icon: 'clock' },
];
const renderLocationOption = ({ item }) => (
<TouchableOpacity style={styles.locationOption}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.icon} />
<Text style={styles.optionText}>{item.name}</Text>
</TouchableOpacity>
);
const renderRecentSearch = ({ item }) => (
<TouchableOpacity style={styles.recentSearch}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.icon} />
<Text style={styles.recentSearchText}>{item.name}</Text>
</TouchableOpacity>
);
return (
<View style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={() => navigation.goBack()}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.backIcon} />
</TouchableOpacity>
<View style={styles.searchBar}>
<TextInput style={styles.searchInput} placeholder="选择出发地" value={searchText} onChangeText={setSearchText} />
<TouchableOpacity>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.voiceIcon} />
</TouchableOpacity>
</View>
</View>
  <FlatList
    data={locationOptions}
    renderItem={renderLocationOption}
    keyExtractor={(item) => item.id}
    ListHeaderComponent={
      <Text style={styles.sectionTitle}>选择出发地</Text>
    }
  />

  <View style={styles.divider} />

  <Text style={styles.sectionTitle}>今天</Text>
  <FlatList
    data={recentSearches}
    renderItem={renderRecentSearch}
    keyExtractor={(item) => item.id}
  />

  <View style={styles.keyboard}>
    {/* Keyboard layout */}
    {/* This is a simplified representation. In a real app, you'd use a custom keyboard component or the device's native keyboard. */}
    <View style={styles.keyboardRow}>
      <TouchableOpacity style={styles.key}><Text>Q</Text></TouchableOpacity>
      <TouchableOpacity style={styles.key}><Text>W</Text></TouchableOpacity>
      <TouchableOpacity style={styles.key}><Text>E</Text></TouchableOpacity>
      <TouchableOpacity style={styles.key}><Text>R</Text></TouchableOpacity>
      <TouchableOpacity style={styles.key}><Text>T</Text></TouchableOpacity>
      <TouchableOpacity style={styles.key}><Text>Y</Text></TouchableOpacity>
      <TouchableOpacity style={styles.key}><Text>U</Text></TouchableOpacity>
      <TouchableOpacity style={styles.key}><Text>I</Text></TouchableOpacity>
      <TouchableOpacity style={styles.key}><Text>O</Text></TouchableOpacity>
      <TouchableOpacity style={styles.key}><Text>P</Text></TouchableOpacity>
    </View>
    {/* Add more keyboard rows as needed */}
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
backgroundColor: '#f0f0f0',
borderRadius: 20,
padding: 5,
},
searchInput: {
flex: 1,
padding: 5,
},
voiceIcon: {
width: 20,
height: 20,
},
sectionTitle: {
fontSize: 18,
fontWeight: 'bold',
margin: 10,
},
locationOption: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
},
icon: {
width: 24,
height: 24,
marginRight: 10,
},
optionText: {
fontSize: 16,
},
divider: {
height: 1,
backgroundColor: '#e0e0e0',
marginVertical: 10,
},
recentSearch: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
},
recentSearchText: {
fontSize: 16,
},
keyboard: {
position: 'absolute',
bottom: 0,
left: 0,
right: 0,
backgroundColor: '#d1d5db',
},
keyboardRow: {
flexDirection: 'row',
justifyContent: 'space-around',
padding: 5,
},
key: {
backgroundColor: '#fff',
padding: 10,
borderRadius: 5,
},
});
export default DepartureScreen;