import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
const ExploreScreen = () => {
const navigation = useNavigation();
const [searchQuery, setSearchQuery] = useState('');
const quickAccessButtons = [
{ name: '设置住址', icon: 'home' },
{ name: '餐馆', icon: 'restaurant' },
{ name: '酒店', icon: 'hotel' },
{ name: '景点', icon: 'landmark' },
{ name: '加油站', icon: 'gas-pump' },
];
const handleSearch = () => {
navigation.navigate('Destination');
};
return (
<View style={styles.container}>
<View style={styles.searchBar}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.searchIcon} />
<TextInput style={styles.searchInput} placeholder="在此处搜索" value={searchQuery} onChangeText={setSearchQuery} onFocus={handleSearch} />
<TouchableOpacity onPress={() => {/* Handle voice search */}}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.micIcon} />
</TouchableOpacity>
<TouchableOpacity>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.userIcon} />
</TouchableOpacity>
</View>
  <ScrollView horizontal style={styles.quickAccessContainer}>
    {quickAccessButtons.map((button, index) => (
      <TouchableOpacity key={index} style={styles.quickAccessButton}>
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.buttonIcon} />
        <Text style={styles.buttonText}>{button.name}</Text>
      </TouchableOpacity>
    ))}
  </ScrollView>

  <View style={styles.weatherWidget}>
    <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.weatherIcon} />
    <Text style={styles.temperature}>24°</Text>
  </View>

  <MapView
    style={styles.map}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  >
    {/* Add markers here */}
  </MapView>

  <TouchableOpacity style={styles.layersButton}>
    <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.layersIcon} />
  </TouchableOpacity>

  <TouchableOpacity style={styles.directionButton}>
    <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.directionIcon} />
  </TouchableOpacity>

  <View style={styles.infoContainer}>
    <Text style={styles.infoTitle}>此地区的最新动态</Text>
    <View style={styles.hotelInfo}>
      <Text style={styles.hotelTitle}>附近的酒店</Text>
      <Text style={styles.hotelSubtitle}>今晚的价格</Text>
      {/* Add hotel cards here */}
    </View>
  </View>

  <View style={styles.bottomNavigation}>
    <TouchableOpacity style={styles.navItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>探索</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Destination')}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>出行</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Savings')}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>已保存</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Contributions')}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>贡献</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>最新动态</Text>
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
backgroundColor: '#f0f0f0',
borderRadius: 20,
margin: 10,
paddingHorizontal: 10,
},
searchIcon: {
width: 20,
height: 20,
marginRight: 10,
},
searchInput: {
flex: 1,
height: 40,
},
micIcon: {
width: 20,
height: 20,
marginHorizontal: 10,
},
userIcon: {
width: 30,
height: 30,
borderRadius: 15,
},
quickAccessContainer: {
flexDirection: 'row',
paddingHorizontal: 10,
},
quickAccessButton: {
alignItems: 'center',
marginRight: 15,
},
buttonIcon: {
width: 30,
height: 30,
marginBottom: 5,
},
buttonText: {
fontSize: 12,
},
weatherWidget: {
flexDirection: 'row',
alignItems: 'center',
position: 'absolute',
top: 70,
left: 10,
backgroundColor: 'white',
borderRadius: 15,
padding: 5,
},
weatherIcon: {
width: 20,
height: 20,
},
temperature: {
marginLeft: 5,
},
map: {
flex: 1,
},
layersButton: {
position: 'absolute',
top: 70,
right: 10,
backgroundColor: 'white',
borderRadius: 20,
padding: 10,
},
layersIcon: {
width: 20,
height: 20,
},
directionButton: {
position: 'absolute',
bottom: 100,
right: 20,
backgroundColor: 'blue',
borderRadius: 30,
padding: 15,
},
directionIcon: {
width: 30,
height: 30,
tintColor: 'white',
},
infoContainer: {
backgroundColor: 'white',
padding: 15,
},
infoTitle: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 10,
},
hotelInfo: {
marginTop: 10,
},
hotelTitle: {
fontSize: 16,
fontWeight: 'bold',
},
hotelSubtitle: {
fontSize: 14,
color: 'gray',
},
bottomNavigation: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
paddingVertical: 10,
},
navItem: {
alignItems: 'center',
},
navIcon: {
width: 24,
height: 24,
},
navText: {
fontSize: 12,
marginTop: 5,
},
});
export default ExploreScreen;