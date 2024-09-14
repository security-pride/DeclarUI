import React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const Parcel_centerScreen = () => {

  const navigation = useNavigation();



  const navigateToMyParcels = () => {

    navigation.navigate('Home_Top_drawer_close');

  };



  const navigateToSendParcel = () => {

    navigation.navigate('SendParcel_Delivery_method');

  };



  return (

    <SafeAreaView style={styles.container}>

      <Text style={styles.header}>Parcel centers</Text>

      <ScrollView style={styles.content}>

        <Image

          source={require( '../assets/snack-icon.png' )}

          style={styles.map}

          resizeMode="cover"

        />

        <View style={styles.parcelCenter}>

          <View style={styles.parcelCenterHeader}>

            <Text style={styles.parcelCenterCode}>NY0924</Text>

            <Text style={styles.availability}>Available 24/7</Text>

          </View>

          <Text style={styles.address}>985 Meadow St.</Text>

          <Text style={styles.city}>Staten Island, NY 10306</Text>

          <Text style={styles.status}>Fully occupied</Text>

          <View style={styles.progressBar}>

            <View style={[styles.progress, { width: '100%' }]} />

          </View>

        </View>

        <View style={styles.parcelCenter}>

          <View style={styles.parcelCenterHeader}>

            <Text style={styles.parcelCenterCode}>NY0812</Text>

            <Text style={styles.availability}>Available 24/7</Text>

          </View>

          <Text style={styles.address}>54 West Adams Court</Text>

          <Text style={styles.city}>Rego Park, NY 11374</Text>

          <Text style={styles.status}>Lots of empty space</Text>

          <View style={styles.progressBar}>

            <View style={[styles.progress, { width: '20%' }]} />

          </View>

        </View>

      </ScrollView>

      <View style={styles.footer}>

        <TouchableOpacity style={styles.footerButton} onPress={navigateToMyParcels}>

          <Image source={require( '../assets/snack-icon.png' )} style={styles.footerIcon} />

          <Text style={styles.footerButtonText}>My parcels</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} onPress={navigateToSendParcel}>

          <Image source={require( '../assets/snack-icon.png' )} style={styles.footerIcon} />

          <Text style={styles.footerButtonText}>Send parcel</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>

          <Image source={require( '../assets/snack-icon.png' )} style={styles.footerIcon} />

          <Text style={styles.footerButtonTextActive}>Parcel center</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFFFFF',

  },

  header: {

    fontSize: 28,

    fontWeight: 'bold',

    padding: 20,

  },

  content: {

    flex: 1,

  },

  map: {

    width: '100%',

    height: 200,

    marginBottom: 20,

  },

  parcelCenter: {

    backgroundColor: '#F8F8F8',

    borderRadius: 10,

    padding: 15,

    marginHorizontal: 20,

    marginBottom: 20,

  },

  parcelCenterHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 10,

  },

  parcelCenterCode: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  availability: {

    fontSize: 14,

    color: '#888',

  },

  address: {

    fontSize: 16,

    marginBottom: 5,

  },

  city: {

    fontSize: 16,

    marginBottom: 10,

  },

  status: {

    fontSize: 14,

    marginBottom: 5,

  },

  progressBar: {

    height: 5,

    backgroundColor: '#E0E0E0',

    borderRadius: 2.5,

  },

  progress: {

    height: 5,

    backgroundColor: '#FFD700',

    borderRadius: 2.5,

  },

  footer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

    paddingVertical: 10,

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



export default Parcel_centerScreen;