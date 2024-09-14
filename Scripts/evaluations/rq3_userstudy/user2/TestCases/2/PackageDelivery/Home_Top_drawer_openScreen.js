import React, { useState } from 'react';

import {

  View,

  Text,

  StyleSheet,

  Image,

  TextInput,

  TouchableOpacity,

  ScrollView,

  SafeAreaView,

} from 'react-native';

import { useNavigation } from '@react-navigation/native';



const Home_Top_drawer_openScreen = () => {

  const navigation = useNavigation();

  const [trackingNumber, setTrackingNumber] = useState('');



  const navigateToSendParcel = () => {

    navigation.navigate('SendParcel_Delivery_method');

  };



  const navigateToParcelCenter = () => {

    navigation.navigate('Parcel_center');

  };



  const handleTrackParcel = () => {

    // Implement tracking logic here

    console.log('Tracking parcel:', trackingNumber);

  };



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.title}>Track parcel</Text>

        <TouchableOpacity onPress={() => {/* Handle profile press */}}>

          <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />

        </TouchableOpacity>

      </View>



      <ScrollView style={styles.content}>

        <Text style={styles.inputLabel}>Enter parcel number or scan QR code</Text>

        <View style={styles.inputContainer}>

          <TextInput

            style={styles.input}

            placeholder="tracking number"

            value={trackingNumber}

            onChangeText={setTrackingNumber}

          />

          <TouchableOpacity style={styles.qrButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.qrIcon} />

          </TouchableOpacity>

        </View>



        <TouchableOpacity style={styles.trackButton} onPress={handleTrackParcel}>

          <Text style={styles.trackButtonText}>Track parcel</Text>

        </TouchableOpacity>



        <Text style={styles.sectionTitle}>My parcels</Text>



        <View style={styles.parcelItem}>

          <Text style={styles.parcelNumber}>003590077380603137861</Text>

          <Image source={require('../assets/snack-icon.png')} style={styles.companyLogo} />

          <Text style={styles.parcelStatus}>In transit</Text>

          <Text style={styles.lastUpdate}>Last update: 3 hours ago</Text>

          <View style={styles.progressBar}>

            <View style={[styles.progress, { width: '60%' }]} />

          </View>

          <TouchableOpacity style={styles.detailsButton}>

            <Text style={styles.detailsButtonText}>Details</Text>

          </TouchableOpacity>

        </View>



        <View style={styles.parcelItem}>

          <Text style={styles.parcelNumber}>008060313786900773121</Text>

          <Image source={require('../assets/snack-icon.png')} style={styles.companyLogo} />

          {/* Add content for the second parcel item */}

        </View>

      </ScrollView>



      <View style={styles.footer}>

        <TouchableOpacity style={styles.footerButton} onPress={() => {}}>

          <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />

          <Text style={styles.footerButtonTextActive}>My parcels</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} onPress={navigateToSendParcel}>

          <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />

          <Text style={styles.footerButtonText}>Send parcel</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} onPress={navigateToParcelCenter}>

          <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />

          <Text style={styles.footerButtonText}>Parcel center</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFD700',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 20,

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  profileImage: {

    width: 40,

    height: 40,

    borderRadius: 20,

  },

  content: {

    flex: 1,

    backgroundColor: '#FFFFFF',

    borderTopLeftRadius: 20,

    borderTopRightRadius: 20,

    padding: 20,

  },

  inputLabel: {

    fontSize: 16,

    marginBottom: 10,

  },

  inputContainer: {

    flexDirection: 'row',

    marginBottom: 20,

  },

  input: {

    flex: 1,

    height: 50,

    borderWidth: 1,

    borderColor: '#E0E0E0',

    borderRadius: 5,

    paddingHorizontal: 10,

    marginRight: 10,

  },

  qrButton: {

    width: 50,

    height: 50,

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',

    alignItems: 'center',

    borderWidth: 1,

    borderColor: '#E0E0E0',

    borderRadius: 5,

  },

  qrIcon: {

    width: 24,

    height: 24,

  },

  trackButton: {

    backgroundColor: '#000000',

    height: 50,

    justifyContent: 'center',

    alignItems: 'center',

    borderRadius: 5,

    marginBottom: 20,

  },

  trackButtonText: {

    color: '#FFFFFF',

    fontSize: 16,

    fontWeight: 'bold',

  },

  sectionTitle: {

    fontSize: 20,

    fontWeight: 'bold',

    marginBottom: 15,

  },

  parcelItem: {

    backgroundColor: '#F8F8F8',

    borderRadius: 10,

    padding: 15,

    marginBottom: 15,

  },

  parcelNumber: {

    fontSize: 14,

    marginBottom: 5,

  },

  companyLogo: {

    width: 80,

    height: 20,

    resizeMode: 'contain',

    alignSelf: 'flex-end',

  },

  parcelStatus: {

    fontSize: 16,

    fontWeight: 'bold',

    marginTop: 10,

  },

  lastUpdate: {

    fontSize: 12,

    color: '#888',

    marginTop: 5,

  },

  progressBar: {

    height: 5,

    backgroundColor: '#E0E0E0',

    borderRadius: 2.5,

    marginTop: 10,

  },

  progress: {

    height: 5,

    backgroundColor: '#FFD700',

    borderRadius: 2.5,

  },

  detailsButton: {

    marginTop: 10,

    alignSelf: 'flex-start',

  },

  detailsButtonText: {

    color: '#000',

    fontWeight: 'bold',

  },

  footer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

    paddingVertical: 10,

    backgroundColor: '#FFFFFF',

  },

  footerButton: {

    alignItems: 'center',

  },

  footerIcon: {

    width: 24,

    height: 24,

    marginBottom: 5,

  },

  footerButtonText: {

    fontSize: 12,

    color: '#888',

  },

  footerButtonTextActive: {

    fontSize: 12,

    color: '#000',

    fontWeight: 'bold',

  },

});



export default Home_Top_drawer_openScreen;