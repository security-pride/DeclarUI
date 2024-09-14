import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchResultScreen = () => {
  const flights = [
    { id: '1', airline: 'AirArabia', logo: require('../assets/snack-icon.png'), departure: '11:00', arrival: '16:30', price: '$330' },
    { id: '2', airline: 'Zayaan', logo: require('../assets/snack-icon.png'), departure: '11:00', arrival: '16:30', price: '$330' },
    { id: '3', airline: 'Biman', logo: require('../assets/snack-icon.png'), departure: '11:00', arrival: '16:30', price: '$330' },
    { id: '4', airline: 'NovoAir', logo: require('../assets/snack-icon.png'), departure: '11:00', arrival: '16:30', price: '$330' }
  ];

  const renderFlightItem = ({ item }) => (
    <View style={styles.flightItem}>
      <Image source={item.logo} style={styles.logo} />
      <View style={styles.flightDetails}>
        <Text style={styles.time}>{item.departure}</Text>
        <Icon name="flight" size={24} color="gray" />
        <Text style={styles.time}>{item.arrival}</Text>
      </View>
      <Text style={styles.location}>LHR</Text>
      <Text style={styles.location}>BHD</Text>
      <Text style={styles.duration}>05h 30m</Text>
      <Text style={styles.price}>{item.price}</Text>
      <Text style={styles.ticket}>Ticket Price</Text>
      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.bookText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={24} color="black" />
        <Text style={styles.title}>Search</Text>
        <Icon name="more-vert" size={24} color="black" />
      </View>
      
      <View style={styles.routeInfo}>
        <Text>France</Text>
        <Icon name="swap-horiz" size={24} color="black" />
        <Text>Switzerland</Text>
        <Icon name="edit" size={18} color="gray" />
      </View>
      <Text style={styles.subText}>Friday, 30 Jul • 2 Seat • Business</Text>

      <Text style={styles.searchResultText}>Search Result <Text style={styles.resultCount}>15 Found</Text></Text>
      <FlatList
        data={flights}
        renderItem={renderFlightItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 16
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  routeInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10
  },
  subText: {
    color: 'gray',
    marginBottom: 10
  },
  searchResultText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  resultCount: {
    color: 'gray'
  },
  list: {
    marginTop: 10
  },
  flightItem: {
    backgroundColor: '#fff',
    marginBottom: 16,
    borderRadius: 10,
    padding: 10,
    elevation: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 10
  },
  flightDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  time: {
    fontSize: 14,
    fontWeight: 'bold',
    marginHorizontal: 4
  },
  location: {
    fontSize: 12,
    color: 'gray',
    width: 30
  },
  duration: {
    fontSize: 12,
    color: 'gray',
    flex: 1,
    textAlign: 'center'
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10
  },
  ticket: {
    fontSize: 10,
    color: 'gray'
  },
  bookButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 5
  },
  bookText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});

export default SearchResultScreen;