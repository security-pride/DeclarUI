import React, { useState } from 'react';
import { View, Text, TextInput, Image, Pressable, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SearchScreen = () => {
const navigation = useNavigation();
const [searchQuery, setSearchQuery] = useState('');
const handleSearch = () => {
navigation.navigate('Surroundings');
};
const handleHotelSelect = () => {
navigation.navigate('Details');
};
return (
<View style={styles.container}>
<View style={styles.header}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.logo} />
<Pressable style={styles.notificationButton}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.notificationIcon} />
</Pressable>
</View>
  <View style={styles.searchBar}>
    <TextInput
      style={styles.searchInput}
      placeholder="周围地区"
      value={searchQuery}
      onChangeText={setSearchQuery}
    />
    <View style={styles.dateSelector}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.calendarIcon} />
      <Text style={styles.dateText}>7月18日 周四 - 7月19日 周五</Text>
    </View>
    <Text style={styles.guestInfoText}>1间房 · 2位成人 · 无儿童</Text>
    <Pressable style={styles.searchButton} onPress={handleSearch}>
      <Text style={styles.searchButtonText}>搜索</Text>
    </Pressable>
  </View>

  <Text style={styles.quickAccessTitle}>临时起意？</Text>

  <ScrollView style={styles.hotelList}>
    <Pressable style={styles.hotelItem} onPress={handleHotelSelect}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.hotelImage} />
      <View style={styles.hotelInfo}>
        <Text style={styles.hotelName}>AC Hotel by Marriott Manch...</Text>
        <Text style={styles.hotelDistance}>8,540公里</Text>
        <Text style={styles.hotelPrice}>£160</Text>
      </View>
    </Pressable>
    <Pressable style={styles.hotelItem} onPress={handleHotelSelect}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.hotelImage} />
      <View style={styles.hotelInfo}>
        <Text style={styles.hotelName}>Maldron Hotel Manc</Text>
        <Text style={styles.hotelDistance}>8,541公里</Text>
        <Text style={styles.hotelPrice}>£1</Text>
      </View>
    </Pressable>
  </ScrollView>

  <View style={styles.bottomNav}>
    <Pressable style={styles.navItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>搜索</Text>
    </Pressable>
    <Pressable style={styles.navItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>已保存</Text>
    </Pressable>
    <Pressable style={styles.navItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>订单</Text>
    </Pressable>
    <Pressable style={styles.navItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>账户资料</Text>
    </Pressable>
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
backgroundColor: '#003580',
},
logo: {
width: 150,
height: 30,
resizeMode: 'contain',
},
notificationButton: {
padding: 5,
},
notificationIcon: {
width: 24,
height: 24,
},
searchBar: {
padding: 15,
backgroundColor: '#febb02',
},
searchInput: {
backgroundColor: '#fff',
padding: 10,
borderRadius: 5,
marginBottom: 10,
},
dateSelector: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#fff',
padding: 10,
borderRadius: 5,
marginBottom: 10,
},
calendarIcon: {
width: 20,
height: 20,
marginRight: 10,
},
dateText: {
flex: 1,
},
guestInfoText: {
backgroundColor: '#fff',
padding: 10,
borderRadius: 5,
marginBottom: 10,
},
searchButton: {
backgroundColor: '#0071c2',
padding: 15,
borderRadius: 5,
alignItems: 'center',
},
searchButtonText: {
color: '#fff',
fontWeight: 'bold',
},
quickAccessTitle: {
fontSize: 18,
fontWeight: 'bold',
margin: 15,
},
hotelList: {
flex: 1,
},
hotelItem: {
flexDirection: 'row',
padding: 15,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
hotelImage: {
width: 100,
height: 100,
borderRadius: 5,
marginRight: 15,
},
hotelInfo: {
flex: 1,
},
hotelName: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 5,
},
hotelDistance: {
fontSize: 14,
color: '#666',
marginBottom: 5,
},
hotelPrice: {
fontSize: 16,
fontWeight: 'bold',
color: '#0071c2',
},
bottomNav: {
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
marginBottom: 5,
},
navText: {
fontSize: 12,
},
});
export default SearchScreen;