import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const flightResults = [

  { id: '1', airline: 'AirArabia', departure: '11:00', arrival: '16:30', duration: '05h 30m', price: 330 },

  { id: '2', airline: 'ZAYAAN', departure: '11:00', arrival: '16:30', duration: '05h 30m', price: 330 },

  { id: '3', airline: 'BIMAN', departure: '11:00', arrival: '16:30', duration: '05h 30m', price: 330 },

  { id: '4', airline: 'NOVOAIR', departure: '11:00', arrival: '16:30', duration: '05h 30m', price: 330 },

];



const SearchResultScreen = () => {

  const navigation = useNavigation();



  const renderFlightItem = ({ item }) => (

    <View style={styles.flightCard}>

      <View style={styles.flightHeader}>

        <Text style={styles.airlineName}>{item.airline}</Text>

      </View>

      <View style={styles.flightDetails}>

        <View style={styles.timeContainer}>

          <Text style={styles.time}>{item.departure}</Text>

          <Text style={styles.airport}>LHR</Text>

        </View>

        <View style={styles.durationContainer}>

          <Image source={require('../assets/snack-icon.png')} style={styles.planeIcon} />

          <Text style={styles.duration}>{item.duration}</Text>

        </View>

        <View style={styles.timeContainer}>

          <Text style={styles.time}>{item.arrival}</Text>

          <Text style={styles.airport}>BHD</Text>

        </View>

      </View>

      <View style={styles.priceContainer}>

        <Text style={styles.price}>${item.price}</Text>

        <Text style={styles.priceLabel}>Ticket Price</Text>

        <TouchableOpacity style={styles.bookButton} onPress={() => console.log('Book Now pressed')}>

          <Text style={styles.bookButtonText}>Book Now</Text>

        </TouchableOpacity>

      </View>

    </View>

  );



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>Search</Text>

        <TouchableOpacity onPress={() => console.log('More options')} style={styles.moreButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.moreIcon} />

        </TouchableOpacity>

      </View>



      <View style={styles.searchInfo}>

        <Text style={styles.searchText}>France • Switzerland</Text>

        <Text style={styles.searchDetails}>Friday, 30 Jul • 2 Seat • Business</Text>

        <TouchableOpacity style={styles.editButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.editIcon} />

        </TouchableOpacity>

      </View>



      <View style={styles.resultHeader}>

        <Text style={styles.resultTitle}>Search Result</Text>

        <Text style={styles.resultCount}>15 Founds</Text>

      </View>



      <FlatList

        data={flightResults}

        renderItem={renderFlightItem}

        keyExtractor={item => item.id}

        contentContainerStyle={styles.flightList}

      />

    </SafeAreaView>

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

  backButton: {

    padding: 8,

  },

  backIcon: {

    width: 24,

    height: 24,

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  moreButton: {

    padding: 8,

  },

  moreIcon: {

    width: 24,

    height: 24,

  },

  searchInfo: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    padding: 16,

    marginTop: 1,

  },

  searchText: {

    flex: 1,

    fontSize: 16,

    fontWeight: 'bold',

  },

  searchDetails: {

    flex: 2,

    fontSize: 12,

    color: '#888888',

  },

  editButton: {

    padding: 8,

  },

  editIcon: {

    width: 20,

    height: 20,

  },

  resultHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 16,

  },

  resultTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  resultCount: {

    fontSize: 14,

    color: '#888888',

  },

  flightList: {

    padding: 16,

  },

  flightCard: {

    backgroundColor: '#FFFFFF',

    borderRadius: 8,

    marginBottom: 16,

    padding: 16,

    elevation: 2,

  },

  flightHeader: {

    marginBottom: 8,

  },

  airlineName: {

    fontSize: 16,

    fontWeight: 'bold',

    color: '#FF0000',

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

    fontSize: 18,

    fontWeight: 'bold',

  },

  airport: {

    fontSize: 14,

    color: '#888888',

  },

  durationContainer: {

    alignItems: 'center',

  },

  planeIcon: {

    width: 24,

    height: 24,

    marginBottom: 4,

  },

  duration: {

    fontSize: 12,

    color: '#888888',

  },

  priceContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

  },

  price: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  priceLabel: {

    fontSize: 12,

    color: '#888888',

  },

  bookButton: {

    backgroundColor: '#007AFF',

    paddingVertical: 8,

    paddingHorizontal: 16,

    borderRadius: 4,

  },

  bookButtonText: {

    color: '#FFFFFF',

    fontWeight: 'bold',

  },

});



export default SearchResultScreen;