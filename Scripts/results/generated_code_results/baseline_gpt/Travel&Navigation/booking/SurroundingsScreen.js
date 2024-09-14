import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const hotelData = [
  {
    id: '1',
    name: '烟台南山皇冠假日酒店',
    rating: '8.6',
    reviews: '29条点评',
    location: '莱山区, 烟台',
    distance: '10千米',
    roomDetails: '1间酒店客房: 2张床',
    price: '707元',
    image: '../assets/snack-icon.png',
  },
  {
    id: '2',
    name: '烟台世茂希尔顿酒店',
    rating: '8.9',
    reviews: '40条点评',
    location: '烟台',
    distance: '750米',
    roomDetails: '1张床',
    price: '908元',
    image: '../assets/snack-icon.png',
  },
  // More hotel data...
];

const HotelCard = ({ hotel }) => (
  <View style={styles.card}>
    <Image source={require('../assets/snack-icon.png')} style={styles.image} />
    <View style={styles.info}>
      <View style={styles.header}>
        <Text style={styles.name}>{hotel.name}</Text>
        <Icon name="heart-outline" size={20} color="#000" />
      </View>
      <View style={styles.ratingRow}>
        <View style={styles.ratingBox}>
          <Text style={styles.ratingText}>{hotel.rating}</Text>
        </View>
        <Text style={styles.reviews}>{hotel.reviews}</Text>
      </View>
      <Text style={styles.location}>📍 {hotel.location} · 距你: {hotel.distance}</Text>
      <Text style={styles.roomDetails}>{hotel.roomDetails}</Text>
      <Text style={styles.price}>{hotel.price}</Text>
    </View>
  </View>
);

const SurroundingsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Icon name="arrow-back-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>周围地区</Text>
        <Text>7月18日 - 7月19日</Text>
      </View>
      
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Icon name="funnel-outline" size={20} />
          <Text>筛选</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Icon name="map-outline" size={20} />
          <Text>地图</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={hotelData}
        renderItem={({ item }) => <HotelCard hotel={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#003580',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 1,
  },
  image: {
    width: 100,
    height: 100,
  },
  info: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  ratingBox: {
    backgroundColor: '#003580',
    borderRadius: 3,
    padding: 3,
    marginRight: 5,
  },
  ratingText: {
    color: '#fff',
    fontSize: 12,
  },
  reviews: {
    color: '#666',
    fontSize: 12,
  },
  location: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  roomDetails: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff5722',
  },
});

export default SurroundingsScreen;