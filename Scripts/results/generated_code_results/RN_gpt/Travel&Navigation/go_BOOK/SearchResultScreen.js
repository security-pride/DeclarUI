import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchResultScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Search</Text>
        <TouchableOpacity>
          <Icon name="ellipsis-v" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.routeInfo}>
        <Text style={styles.routeText}>France</Text>
        <View style={styles.routeIcon}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </View>
        <Text style={styles.routeText}>Switzerland</Text>
        <Icon name="pencil" size={20} color="#000" />
      </View>
      <Text style={styles.routeDetails}>Friday, 30 Jul • 2 Seat • Business</Text>

      <Text style={styles.resultsTitle}>Search Result</Text>
      <Text style={styles.resultsCount}>15 Found</Text>
      
      {renderFlightCard('AirArabia')}
      {renderFlightCard('Zayaan')}
      {renderFlightCard('Biman')}
      {renderFlightCard('Novoair')}

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="search" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="user" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const renderFlightCard = (airline) => (
  <View style={styles.flightCard}>
    <Text style={styles.airline}>{airline}</Text>
    <View style={styles.flightInfo}>
      <Text style={styles.flightTime}>11:00</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text style={styles.flightTime}>16:30</Text>
    </View>
    <Text style={styles.flightDuration}>05h 30m</Text>
    <View style={styles.flightDetails}>
      <Text style={styles.flightDetailText}>LHR</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text style={styles.flightDetailText}>BHD</Text>
    </View>
    <View style={styles.priceSection}>
      <Text style={styles.ticketPrice}>$330</Text>
      <Text style={styles.ticketPriceLabel}>Ticket Price</Text>
      <TouchableOpacity style={styles.bookNowButton}>
        <Text style={styles.bookNowText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  routeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  routeText: {
    fontSize: 16,
    marginRight: 10,
  },
  routeIcon: {
    marginRight: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  routeDetails: {
    paddingLeft: 15,
    paddingBottom: 10,
    color: 'grey',
  },
  resultsTitle: {
    paddingLeft: 15,
    paddingTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultsCount: {
    paddingLeft: 15,
    paddingBottom: 10,
    color: 'grey',
  },
  flightCard: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    elevation: 1,
  },
  airline: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff5a5f',
  },
  flightInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  flightTime: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  flightDuration: {
    fontSize: 14,
    color: 'grey',
  },
  flightDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  flightDetailText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  priceSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ticketPrice: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  ticketPriceLabel: {
    fontSize: 14,
    color: 'grey',
  },
  bookNowButton: {
    backgroundColor: '#ff5a5f',
    padding: 10,
    borderRadius: 5,
  },
  bookNowText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
  },
});

export default SearchResultScreen;