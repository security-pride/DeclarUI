import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Home_Top_drawer_openScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Track parcel</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
      </View>

      <View style={styles.inputSection}>
        <Text style={styles.inputLabel}>Enter parcel number or scan QR code</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.textInput}
            placeholder="tracking number"
            placeholderTextColor="#aaa"
          />
          <Icon name="qr-code-scanner" size={30} color="#000" style={styles.qrIcon} />
        </View>
        <TouchableOpacity style={styles.trackButton}>
          <Text style={styles.trackButtonText}>Track parcel</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.myParcelsSection}>
        <Text style={styles.myParcelsHeader}>My parcels</Text>

        <View style={styles.parcelCard}>
          <View style={styles.parcelCardHeader}>
            <Text>00359007738060313786</Text>
            <Image source={require('../assets/snack-icon.png')} style={styles.logo} />
          </View>
          <Text style={styles.inTransitText}>In transit</Text>
          <Text style={styles.updateText}>Last update: 3 hours ago</Text>
          <View style={styles.progressBar}>
            <View style={styles.progress} />
          </View>
          <TouchableOpacity>
            <Text style={styles.detailsText}>Details {'>'}</Text>
          </TouchableOpacity>
        </View>

        {/* Similar Parcel Card can be added here */}

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  inputSection: {
    marginBottom: 40,
  },
  inputLabel: {
    marginBottom: 10,
    color: '#333',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    elevation: 3,
  },
  textInput: {
    flex: 1,
    height: 40,
    color: '#000',
  },
  qrIcon: {
    marginLeft: 10,
  },
  trackButton: {
    backgroundColor: '#000',
    borderRadius: 8,
    marginTop: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  trackButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  myParcelsSection: {
    paddingVertical: 20,
  },
  myParcelsHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  parcelCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
  },
  parcelCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  logo: {
    width: 50,
    height: 20,
  },
  inTransitText: {
    color: '#FFA500',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  updateText: {
    color: '#333',
    marginBottom: 10,
  },
  progressBar: {
    height: 5,
    backgroundColor: '#ddd',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 10,
  },
  progress: {
    width: '70%',
    height: '100%',
    backgroundColor: '#FFA500',
  },
  detailsText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default Home_Top_drawer_openScreen;