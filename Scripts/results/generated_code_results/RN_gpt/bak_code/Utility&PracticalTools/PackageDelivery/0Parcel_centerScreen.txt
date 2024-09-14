import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Parcel_centerScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.heading}>Parcel centers</Text>
      
      <View style={styles.mapContainer}>
        <ImageBackground source={require('../assets/snack-icon.png')} style={styles.map} />
      </View>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.parcelCenterContainer}>
          <Text style={styles.centerCode}>NY0924</Text>
          <View style={styles.centerInfo}>
            <Text style={styles.centerAddress}>985 Meadow St.</Text>
            <Text style={styles.centerLocation}>Staten Island, NY 10306</Text>
            <Text style={styles.centerStatus}>Fully occupied</Text>
            <View style={styles.occupancyIndicator} />
          </View>
          <Text style={styles.centerAvailability}>Available 24/7</Text>
        </View>
        
        <View style={styles.parcelCenterContainer}>
          <Text style={styles.centerCode}>NY0812</Text>
          <View style={styles.centerInfo}>
            <Text style={styles.centerAddress}>54 West Adams Court</Text>
            <Text style={styles.centerLocation}>Rego Park, NY 11374</Text>
            <Text style={styles.centerStatus}>Lots of empty space</Text>
          </View>
          <Text style={styles.centerAvailability}>Available 24/7</Text>
        </View>
      </ScrollView>
      
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('My_parcels')}>
          <Icon name="mail-outline" size={24} color="#555" />
          <Text style={styles.navLabel}>My parcels</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('SendParcel_Delivery_method')}>
          <Icon name="cube-outline" size={24} color="#555" />
          <Text style={styles.navLabel}>Send parcel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItemActive} onPress={() => navigation.navigate('Parcel_center')}>
          <Icon name="home-outline" size={24} color="#000" />
          <Text style={styles.navLabelActive}>Parcel center</Text>
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
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
    marginLeft: 16,
  },
  mapContainer: {
    height: 200,
    backgroundColor: '#eee',
  },
  map: {
    flex: 1,
    resizeMode: 'cover',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  parcelCenterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  centerCode: {
    fontWeight: 'bold',
  },
  centerInfo: {
    flex: 1,
    marginLeft: 16,
  },
  centerAddress: {
    fontWeight: 'bold',
    marginBottom: 2,
  },
  centerLocation: {
    marginBottom: 4,
    color: '#555',
  },
  centerStatus: {
    marginBottom: 4,
    color: '#555',
  },
  occupancyIndicator: {
    height: 4,
    backgroundColor: 'yellow',
    marginBottom: 4,
    borderRadius: 2,
  },
  centerAvailability: {
    alignSelf: 'flex-end',
    color: '#555',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
  },
  navItem: {
    alignItems: 'center',
  },
  navLabel: {
    marginTop: 2,
    color: '#555',
  },
  navItemActive: {
    alignItems: 'center',
  },
  navLabelActive: {
    marginTop: 2,
    color: '#000',
  },
});

export default Parcel_centerScreen;