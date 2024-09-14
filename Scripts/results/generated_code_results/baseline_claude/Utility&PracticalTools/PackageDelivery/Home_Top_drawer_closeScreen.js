import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const Home_Top_drawer_closeScreen = () => {

  const navigation = useNavigation();



  const navigateToSendParcel = () => {

    navigation.navigate('SendParcel_Delivery_method');

  };



  const navigateToParcelCenter = () => {

    navigation.navigate('Parcel_center');

  };



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.title}>Track parcel</Text>

        <TouchableOpacity onPress={() => {/* Handle profile press */}}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.profileImage} />

        </TouchableOpacity>

      </View>



      <ScrollView style={styles.parcelsContainer}>

        <Text style={styles.sectionTitle}>My parcels</Text>



        <View style={styles.parcelItem}>

          <Text style={styles.parcelNumber}>003590077380603137861</Text>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.companyLogo} />

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

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.companyLogo} />

          <Text style={styles.parcelStatus}>Left the parcel center</Text>

          <Text style={styles.lastUpdate}>Last update: 21 hours ago</Text>

          <View style={styles.progressBar}>

            <View style={[styles.progress, { width: '30%' }]} />

          </View>

          <TouchableOpacity style={styles.detailsButton}>

            <Text style={styles.detailsButtonText}>Details</Text>

          </TouchableOpacity>

        </View>



        <View style={styles.parcelItem}>

          <Text style={styles.parcelNumber}>006900773128060313781</Text>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.companyLogo} />

          <Text style={styles.parcelStatus}>Delivered</Text>

          <Text style={styles.lastUpdate}>Last update: 2 days ago</Text>

          <View style={styles.progressBar}>

            <View style={[styles.progress, { width: '100%' }]} />

          </View>

        </View>

      </ScrollView>



      <View style={styles.footer}>

        <TouchableOpacity style={styles.footerButton} onPress={() => {}}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.footerIcon} />

          <Text style={styles.footerButtonTextActive}>My parcels</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} onPress={navigateToSendParcel}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.footerIcon} />

          <Text style={styles.footerButtonText}>Send parcel</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} onPress={navigateToParcelCenter}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.footerIcon} />

          <Text style={styles.footerButtonText}>Parcel center</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFF',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 20,

    backgroundColor: '#FFD700',

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

  parcelsContainer: {

    flex: 1,

    padding: 20,

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



export default Home_Top_drawer_closeScreen;