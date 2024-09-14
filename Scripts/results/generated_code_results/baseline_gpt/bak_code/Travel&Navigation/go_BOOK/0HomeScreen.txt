import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
          <View style={styles.userDetails}>
            <Text style={styles.userName}>Mosarraf H.</Text>
            <Text style={styles.userLocation}>London, UK</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.locationButton}>
          <Text style={styles.locationText}>London, UK</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeText}>Welcome to GoBook</Text>
        <Text style={styles.subtitleText}>Largest Online Ticket Destination</Text>
      </View>

      <View style={styles.navigationTabs}>
        <TouchableOpacity style={styles.tab}>
          <Icon name="flight" size={24} color="#000" />
          <Text style={styles.tabText}>Flight</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Icon name="directions-bus" size={24} color="#000" />
          <Text style={styles.tabText}>Bus</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Icon name="train" size={24} color="#000" />
          <Text style={styles.tabText}>Train</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Icon name="directions-boat" size={24} color="#000" />
          <Text style={styles.tabText}>Launch</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tripOptions}>
        <TouchableOpacity style={styles.tripOption}>
          <Text style={styles.tripOptionText}>One Way</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tripOption}>
          <Text style={styles.tripOptionText}>Round Way</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tripOption}>
          <Text style={styles.tripOptionText}>Multi City</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <View style={styles.locationRow}>
          <View style={styles.locationDetails}>
            <Text style={styles.locationTitle}>From</Text>
            <Text style={styles.locationName}>France</Text>
            <Text style={styles.airportName}>CDG, Paris Airport</Text>
          </View>
          <View style={styles.locationSwitcher}>
            <FontAwesome name="exchange" size={20} color="#000" />
          </View>
          <View style={styles.locationDetails}>
            <Text style={styles.locationTitle}>To</Text>
            <Text style={styles.locationName}>Switzerland</Text>
            <Text style={styles.airportName}>ZRH, Zurich Airport</Text>
          </View>
        </View>

        <View style={styles.dateRow}>
          <View style={styles.dateDetails}>
            <Text style={styles.dateTitle}>Journey Date</Text>
            <Text style={styles.dateText}>30 Jul 23</Text>
            <Text style={styles.dayText}>Friday</Text>
            <Text style={styles.timeText}>
              <Icon name="access-time" size={14} color="#000" /> 18:25
            </Text>
          </View>
          <View style={styles.dateDetails}>
            <Text style={styles.dateTitle}>Return Date</Text>
            <Text style={styles.datePlaceholder}>Save more on return flight</Text>
          </View>
        </View>

        <View style={styles.classRow}>
          <View style={styles.classDetails}>
            <Text style={styles.classTitle}>Traveler & Class</Text>
            <Text style={styles.classText}>2 Traveler</Text>
            <Text style={styles.classSubText}>Economy</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.searchButton}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1C1C1C',
    padding: 15,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userDetails: {
    marginLeft: 10,
  },
  userName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  userLocation: {
    color: '#ccc',
  },
  locationButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: '#333',
  },
  locationText: {
    color: '#fff',
  },
  welcomeSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitleText: {
    fontSize: 14,
    color: '#666',
  },
  navigationTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 15,
    elevation: 2,
    shadowColor: '#000',
  },
  tab: {
    alignItems: 'center',
  },
  tabText: {
    marginTop: 5,
    fontSize: 12,
  },
  tripOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  tripOption: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
  },
  tripOptionText: {
    fontSize: 14,
  },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    borderRadius: 15,
    padding: 15,
    elevation: 2,
    shadowColor: '#000',
  },
  locationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  locationDetails: {
    flex: 1,
  },
  locationTitle: {
    fontSize: 14,
    color: '#888',
  },
  locationName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  airportName: {
    fontSize: 12,
    color: '#aaa',
  },
  locationSwitcher: {
    padding: 10,
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  dateDetails: {
    flex: 1,
    marginHorizontal: 5,
  },
  dateTitle: {
    fontSize: 14,
    color: '#888',
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dayText: {
    fontSize: 12,
    color: '#aaa',
  },
  timeText: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 5,
  },
  datePlaceholder: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 5,
  },
  classRow: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  classDetails: {
    flex: 1,
  },
  classTitle: {
    fontSize: 14,
    color: '#888',
  },
  classText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  classSubText: {
    fontSize: 12,
    color: '#aaa',
  },
  searchButton: {
    marginVertical: 20,
    marginHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#333',
    borderRadius: 25,
    alignItems: 'center',
  },
  searchButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomeScreen;