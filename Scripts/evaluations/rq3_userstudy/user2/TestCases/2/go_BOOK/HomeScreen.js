import React, { useState } from 'react';

import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {

  const navigation = useNavigation();

  const [selectedType, setSelectedType] = useState('One Way');

  const [from, setFrom] = useState('France');

  const [to, setTo] = useState('Switzerland');

  const [journeyDate, setJourneyDate] = useState('30 Jul 23');

  const [returnDate, setReturnDate] = useState('');

  const [travelers, setTravelers] = useState('2 Traveler');



  const transportTypes = ['Flight', 'Bus', 'Train', 'Launch'];

  const tripTypes = ['One Way', 'Round Way', 'Multi City'];



  const handleSearch = () => {

    // Implement search logic

    console.log('Searching for trips...');
    navigation.navigate('SearchResult');

  };



  const handleTransportTypePress = (type) => {

    // Handle transport type selection

    console.log(`Selected transport type: ${type}`);

  };



  const handleTripTypePress = (type) => {

    setSelectedType(type);

  };



  const handleSwapLocations = () => {

    const temp = from;

    setFrom(to);

    setTo(temp);

  };



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <View style={styles.profileInfo}>

          <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />

          <View>

            <Text style={styles.name}>Mosarraf H.</Text>

            <Text style={styles.location}>London, UK</Text>

          </View>

        </View>

        <TouchableOpacity style={styles.locationButton}>

          <Text style={styles.locationButtonText}>London, UK</Text>

          <Image source={require('../assets/snack-icon.png')} style={styles.locationIcon} />

        </TouchableOpacity>

      </View>



      <Text style={styles.title}>Welcome to GoBook</Text>

      <Text style={styles.subtitle}>Largest Online Ticket Destination</Text>



      <View style={styles.transportTypes}>

        {transportTypes.map((type, index) => (

          <TouchableOpacity key={index} style={styles.transportTypeButton} onPress={() => handleTransportTypePress(type)}>

            <Image source={require('../assets/snack-icon.png')} style={styles.transportTypeIcon} />

            <Text style={styles.transportTypeText}>{type}</Text>

          </TouchableOpacity>

        ))}

      </View>



      <View style={styles.tripTypes}>

        {tripTypes.map((type, index) => (

          <TouchableOpacity

            key={index}

            style={[styles.tripTypeButton, selectedType === type && styles.selectedTripType]}

            onPress={() => handleTripTypePress(type)}

          >

            <View style={[styles.radioButton, selectedType === type && styles.radioButtonSelected]} />

            <Text style={styles.tripTypeText}>{type}</Text>

          </TouchableOpacity>

        ))}

      </View>



      <View style={styles.formContainer}>

        <View style={styles.formRow}>

          <View style={styles.formField}>

            <Text style={styles.formLabel}>From</Text>

            <TextInput

              style={styles.formInput}

              value={from}

              onChangeText={setFrom}

              placeholder="From"

            />

            <Text style={styles.formSubLabel}>CDG, Paris Airport</Text>

          </View>

          <TouchableOpacity style={styles.swapButton} onPress={handleSwapLocations}>

            <Image source={require('../assets/snack-icon.png')} style={styles.swapIcon} />

          </TouchableOpacity>

          <View style={styles.formField}>

            <Text style={styles.formLabel}>To</Text>

            <TextInput

              style={styles.formInput}

              value={to}

              onChangeText={setTo}

              placeholder="To"

            />

            <Text style={styles.formSubLabel}>ZRH, Zurich Airport</Text>

          </View>

        </View>

        <View style={styles.formRow}>

          <View style={styles.formField}>

            <Text style={styles.formLabel}>Journey Date</Text>

            <TextInput

              style={styles.formInput}

              value={journeyDate}

              onChangeText={setJourneyDate}

              placeholder="Journey Date"

            />

            <Text style={styles.formSubLabel}>Friday 18:25</Text>

          </View>

          <View style={styles.formField}>

            <Text style={styles.formLabel}>Return Date</Text>

            <TextInput

              style={styles.formInput}

              value={returnDate}

              onChangeText={setReturnDate}

              placeholder="Return Date"

            />

            <Text style={styles.formSubLabel}>Save more on return flight</Text>

          </View>

        </View>

        <View style={styles.formRow}>

          <View style={styles.formField}>

            <Text style={styles.formLabel}>Traveler & Class</Text>

            <TextInput

              style={styles.formInput}

              value={travelers}

              onChangeText={setTravelers}

              placeholder="Traveler & Class"

            />

            <Text style={styles.formSubLabel}>Economy</Text>

          </View>

        </View>

      </View>



      <View style={styles.buttonContainer}>

        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>

          <Text style={styles.searchButtonText}>Search</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.filterButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.filterIcon} />

        </TouchableOpacity>

      </View>



      <View style={styles.navbar}>

        <TouchableOpacity style={styles.navItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.navText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Notification')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.navText}>Notification</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.navText}>Ticket</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.navText}>History</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Setting')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.navText}>Setting</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#1C1C1E',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 16,

  },

  profileInfo: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  profileImage: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 12,

  },

  name: {

    color: '#FFFFFF',

    fontSize: 16,

    fontWeight: 'bold',

  },

  location: {

    color: '#8E8E93',

    fontSize: 14,

  },

  locationButton: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#2C2C2E',

    borderRadius: 20,

    padding: 8,

  },

  locationButtonText: {

    color: '#FFFFFF',

    marginRight: 4,

  },

  locationIcon: {

    width: 16,

    height: 16,

  },

  title: {

    color: '#FFFFFF',

    fontSize: 24,

    fontWeight: 'bold',

    marginLeft: 16,

    marginTop: 16,

  },

  subtitle: {

    color: '#8E8E93',

    fontSize: 16,

    marginLeft: 16,

    marginBottom: 16,

  },

  transportTypes: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    marginBottom: 16,

  },

  transportTypeButton: {

    alignItems: 'center',

  },

  transportTypeIcon: {

    width: 24,

    height: 24,

    marginBottom: 4,

  },

  transportTypeText: {

    color: '#FFFFFF',

    fontSize: 12,

  },

  tripTypes: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    marginBottom: 16,

  },

  tripTypeButton: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  radioButton: {

    width: 16,

    height: 16,

    borderRadius: 8,

    borderWidth: 2,

    borderColor: '#8E8E93',

    marginRight: 8,

  },

  radioButtonSelected: {

    backgroundColor: '#007AFF',

    borderColor: '#007AFF',

  },

  tripTypeText: {

    color: '#FFFFFF',

    fontSize: 14,

  },

  formContainer: {

    backgroundColor: '#2C2C2E',

    borderRadius: 12,

    padding: 16,

    margin: 16,

  },

  formRow: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 16,

  },

  formField: {

    flex: 1,

  },

  formLabel: {

    color: '#8E8E93',

    fontSize: 12,

    marginBottom: 4,

  },

  formInput: {

    color: '#FFFFFF',

    fontSize: 16,

    fontWeight: 'bold',

  },

  formSubLabel: {

    color: '#8E8E93',

    fontSize: 12,

    marginTop: 4,

  },

  swapButton: {

    justifyContent: 'center',

    alignItems: 'center',

    width: 40,

  },

  swapIcon: {

    width: 24,

    height: 24,

  },

  buttonContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    margin: 16,

  },

  searchButton: {

    flex: 1,

    backgroundColor: '#007AFF',

    borderRadius: 8,

    padding: 16,

    alignItems: 'center',

    marginRight: 8,

  },

  searchButtonText: {

    color: '#FFFFFF',

    fontSize: 16,

    fontWeight: 'bold',

  },

  filterButton: {

    backgroundColor: '#3A3A3C',

    borderRadius: 8,

    padding: 16,

    alignItems: 'center',

    justifyContent: 'center',

    width: 50,

  },

  filterIcon: {

    width: 24,

    height: 24,

  },

  navbar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    backgroundColor: '#2C2C2E',

    paddingVertical: 12,

    position: 'absolute',

    bottom: 0,

    left: 0,

    right: 0,

  },

  navItem: {

    alignItems: 'center',

  },

  navIcon: {

    width: 24,

    height: 24,

    marginBottom: 4,

  },

  navText: {

    color: '#8E8E93',

    fontSize: 12,

  },

});



export default HomeScreen;