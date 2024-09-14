import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';

const Home_Top_drawer_closeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Track parcel</Text>
        <ImageBackground
          source={require('../assets/snack-icon.png')}
          style={styles.profileImage}
        />
      </View>
      
      <Text style={styles.sectionTitle}>My parcels</Text>

      <View style={styles.parcelContainer}>
        <View style={styles.parcelInfo}>
          <Text style={styles.trackingNumber}>00359007738060313786</Text>
          <Text style={styles.status}>In transit</Text>
          <Text style={styles.updateTime}>Last update: 3 hours ago</Text>
          <View style={styles.progressBar}></View>
          <TouchableOpacity
            style={styles.detailsButton}
            onPress={() => navigation.navigate('ParcelDetails')}
          >
            <Text style={styles.detailsText}>Details</Text>
          </TouchableOpacity>
        </View>
        <Image source={require('../assets/snack-icon.png')} style={styles.logo} />
      </View>

      <View style={styles.parcelContainer}>
        <View style={styles.parcelInfo}>
          <Text style={styles.trackingNumber}>00806031378690077312</Text>
          <Text style={styles.status}>Left the parcel center</Text>
          <Text style={styles.updateTime}>Last update: 21 hours ago</Text>
          <View style={styles.progressBar}></View>
          <TouchableOpacity style={styles.detailsButton} onPress={() => navigation.navigate('ParcelDetails')}>
            <Text style={styles.detailsText}>Details</Text>
          </TouchableOpacity>
        </View>
        <Image source={require('../assets/snack-icon.png')} style={styles.logo} />
      </View>

      <View style={styles.parcelContainer}>
        <View style={styles.parcelInfo}>
          <Text style={styles.trackingNumber}>00690077312806031378</Text>
          <Text style={styles.status}>Delivered</Text>
          <Text style={styles.updateTime}>Last update: 2 days ago</Text>
          <View style={styles.progressBar}></View>
          <TouchableOpacity style={styles.detailsButton} onPress={() => navigation.navigate('ParcelDetails')}>
            <Text style={styles.detailsText}>Details</Text>
          </TouchableOpacity>
        </View>
        <Image source={require('../assets/snack-icon.png')} style={styles.logo} />
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home_Top_drawer_open')}>
          <Text>My parcels</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SendParcel_Delivery_method')}>
          <Text>Send parcel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Parcel_center')}>
          <Text>Parcel center</Text>
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
    backgroundColor: '#FFD700',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 16,
    marginVertical: 10,
  },
  parcelContainer: {
    backgroundColor: '#f9f9f9',
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 10,
    padding: 16,
    flexDirection: 'row',
  },
  parcelInfo: {
    flex: 1,
  },
  trackingNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 16,
    color: '#000',
  },
  updateTime: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#FFD700',
    marginBottom: 8,
  },
  detailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsText: {
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  logo: {
    width: 50,
    height: 20,
    marginLeft: 10,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
  },
});

export default Home_Top_drawer_closeScreen;