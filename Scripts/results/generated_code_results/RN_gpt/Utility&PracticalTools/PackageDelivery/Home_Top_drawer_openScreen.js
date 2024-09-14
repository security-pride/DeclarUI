import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar } from 'react-native';

const Home_Top_drawer_openScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.time}>9:41</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.profilePicture} />
      </View>
      <Text style={styles.title}>Track parcel</Text>
      <Text style={styles.prompt}>Enter parcel number or scan QR code</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="tracking number" />
        <TouchableOpacity style={styles.qrButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.qrIcon} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.trackButton}>
        <Text style={styles.trackButtonText}>Track parcel</Text>
      </TouchableOpacity>
      <Text style={styles.sectionTitle}>My parcels</Text>
      
      {/* Parcel card example */}
      <View style={styles.parcelCard}>
        <Text style={styles.parcelNumber}>00359007738060313786</Text>
        <Text style={styles.parcelStatus}>In transit</Text>
        <Text style={styles.parcelUpdate}>Last update: 3 hours ago</Text>
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}></View>
        </View>
        <Text style={styles.parcelDetails}>Details ></Text>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Home_Top_drawer_close')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>My parcels</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('SendParcel_Delivery_method')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Send parcel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Parcel_center')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Parcel center</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9C22E',
    padding: 20,
    paddingBottom: 70,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  time: {
    fontSize: 14,
    color: 'black',
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  prompt: {
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  qrButton: {
    marginLeft: 10,
  },
  qrIcon: {
    width: 30,
    height: 30,
  },
  trackButton: {
    backgroundColor: 'black',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 30,
  },
  trackButtonText: {
    color: 'white',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  parcelCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
  },
  parcelNumber: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
  },
  parcelStatus: {
    fontSize: 14,
    color: 'black',
    marginBottom: 5,
  },
  parcelUpdate: {
    fontSize: 12,
    color: 'black',
    marginBottom: 10,
  },
  progressContainer: {
    height: 4,
    backgroundColor: '#F0F0F0',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 10,
  },
  progressBar: {
    width: '50%',
    height: '100%',
    backgroundColor: '#F9C22E',
  },
  parcelDetails: {
    color: '#F9C22E',
    fontWeight: 'bold',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#D0D0D0',
  },
  navButton: {
    alignItems: 'center',
  },
  navIcon: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  navText: {
    fontSize: 12,
    color: 'black',
  },
});

export default Home_Top_drawer_openScreen;