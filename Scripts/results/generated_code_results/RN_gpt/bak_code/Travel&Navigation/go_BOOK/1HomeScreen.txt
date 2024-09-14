import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
        <Text style={styles.userName}>Mosarraf H.</Text>
        <TouchableOpacity style={styles.locationButton}>
          <Text style={styles.locationText}>London, UK</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.welcomeText}>Welcome to GoBook</Text>
      <Text style={styles.tagline}>Largest Online Ticket Destination</Text>
      
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tab}>
          <Icon name="plane" size={20} color="#000" />
          <Text style={styles.tabLabel}>Flight</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Icon name="bus" size={20} color="#aaa" />
          <Text style={styles.tabLabel}>Bus</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Icon name="train" size={20} color="#aaa" />
          <Text style={styles.tabLabel}>Train</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Icon name="ship" size={20} color="#aaa" />
          <Text style={styles.tabLabel}>Launch</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tripTypeContainer}>
        <Text style={styles.tripType}>One Way</Text>
        <Text style={styles.tripType}>Round Way</Text>
        <Text style={styles.tripType}>Multi City</Text>
      </View>

      <View style={styles.detailContainer}>
        <View style={styles.locationBox}>
          <Text style={styles.label}>From</Text>
          <Text style={styles.location}>France</Text>
          <Text style={styles.airportCode}>CDG, Paris Airport</Text>
        </View>
        <Button title="⇅" style={styles.switchButton} onPress={() => {}} />
        <View style={styles.locationBox}>
          <Text style={styles.label}>To</Text>
          <Text style={styles.location}>Switzerland</Text>
          <Text style={styles.airportCode}>ZRH, Zurich Airport</Text>
        </View>
      </View>

      <View style={styles.dateContainer}>
        <View style={styles.dateBox}>
          <Text style={styles.label}>Journey Date</Text>
          <Text style={styles.date}>30 Jul 23</Text>
          <Text style={styles.time}>Friday 18:25</Text>
        </View>
        <View style={styles.dateBox}>
          <Text style={styles.label}>Return Date</Text>
          <Text style={styles.returnInfo}>Save more on return flights</Text>
        </View>
      </View>

      <View style={styles.travelerContainer}>
        <Text style={styles.travelerText}>2 Traveler</Text>
        <Text style={styles.classText}>Economy</Text>
      </View>

      <TouchableOpacity
        style={styles.searchButton}
        onPress={() => navigation.navigate('SearchResult')}
      >
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.filterButton}>
        <Icon name="filter" size={20} color="#aaa" />
      </TouchableOpacity>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Notification')}>
          <Icon name="bell" size={20} color="#aaa" />
          <Text style={styles.navLabel}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
          <Icon name="ticket" size={20} color="#aaa" />
          <Text style={styles.navLabel}>Ticket</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="history" size={20} color="#aaa" />
          <Text style={styles.navLabel}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="cog" size={20} color="#aaa" />
          <Text style={styles.navLabel}>Setting</Text>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#333',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userName: {
    marginLeft: 8,
    color: '#fff',
    fontWeight: 'bold',
  },
  locationButton: {
    marginLeft: 'auto',
    padding: 8,
    borderRadius: 15,
    backgroundColor: '#eee',
  },
  locationText: {
    color: '#000',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8,
  },
  tagline: {
    textAlign: 'center',
    color: '#555',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  tab: {
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: 12,
    color: '#000',
  },
  tripTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  tripType: {
    padding: 8,
    borderRadius: 15,
    backgroundColor: '#eee',
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  locationBox: {
    flex: 1,
    padding: 8,
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    margin: 4,
  },
  label: {
    fontWeight: 'bold',
  },
  location: {
    fontSize: 16,
  },
  airportCode: {
    color: '#888',
  },
  switchButton: {
    marginVertical: 32,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  dateBox: {
    flex: 1,
    padding: 8,
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    margin: 4,
  },
  date: {
    fontSize: 16,
  },
  time: {
    color: '#888',
  },
  returnInfo: {
    color: '#888',
  },
  travelerContainer: {
    padding: 16,
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  travelerText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  classText: {
    color: '#888',
  },
  searchButton: {
    backgroundColor: '#000',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  filterButton: {
    position: 'absolute',
    right: 32,
    bottom: 96,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    backgroundColor: '#333',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
  },
  navLabel: {
    color: '#fff',
    fontSize: 12,
  },
});

export default HomeScreen;