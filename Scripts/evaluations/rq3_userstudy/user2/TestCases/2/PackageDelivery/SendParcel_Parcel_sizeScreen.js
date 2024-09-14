import React from 'react';

import {

  View,

  Text,

  StyleSheet,

  SafeAreaView,

  ScrollView,

  TouchableOpacity,

  Image,

} from 'react-native';

import { useNavigation } from '@react-navigation/native';



const SendParcel_Parcel_sizeScreen = () => {

  const navigation = useNavigation();



  const navigateToMyParcels = () => {

    navigation.navigate('Home_Top_drawer_close');

  };



  const navigateToParcelCenter = () => {

    navigation.navigate('Parcel_center');

  };



  const ParcelSizeOption = ({ size, maxDimensions, description, icon }) => (

    <TouchableOpacity style={styles.parcelSizeOption}>

      <Image source={require('../assets/snack-icon.png')} style={styles.parcelIcon} />

      <View style={styles.parcelSizeInfo}>

        <Text style={styles.parcelSizeTitle}>{size}</Text>

        <Text style={styles.parcelSizeMaxDimensions}>{maxDimensions}</Text>

        <Text style={styles.parcelSizeDescription}>{description}</Text>

      </View>

    </TouchableOpacity>

  );



  return (

    <SafeAreaView style={styles.container}>

      <ScrollView style={styles.scrollView}>

        <Text style={styles.title}>Send parcel</Text>

        <Text style={styles.subtitle}>Parcel size</Text>



        <View style={styles.parcelSizesContainer}>

          <ParcelSizeOption

            size="Small"

            maxDimensions="Max. 25 kg, 8 x 38 x 64 cm"

            description="Fits in an envelope"

          />

          <ParcelSizeOption

            size="Medium"

            maxDimensions="Max. 25 kg, 19 x 38 x 64 cm"

            description="Fits in a shoe box"

          />

          <ParcelSizeOption

            size="Large"

            maxDimensions="Max. 25 kg, 41 x 38 x 64 cm"

            description="Fits in a cardboard box"

          />

          <ParcelSizeOption

            size="Custom"

            maxDimensions="Max: 30kg or 300cm"

            description="Fits on a skid"

          />

        </View>

      </ScrollView>



      <View style={styles.footer}>

        <TouchableOpacity style={styles.footerButton} onPress={navigateToMyParcels}>

          <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />

          <Text style={styles.footerButtonText}>My parcels</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />

          <Text style={styles.footerButtonTextActive}>Send parcel</Text>

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

    backgroundColor: '#FFFFFF',

  },

  scrollView: {

    flex: 1,

    padding: 20,

  },

  title: {

    fontSize: 32,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  subtitle: {

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 20,

  },

  parcelSizesContainer: {

    backgroundColor: '#F5F5F5',

    borderRadius: 10,

    padding: 15,

  },

  parcelSizeOption: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 20,

  },

  parcelIcon: {

    width: 60,

    height: 60,

    marginRight: 15,

  },

  parcelSizeInfo: {

    flex: 1,

  },

  parcelSizeTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  parcelSizeMaxDimensions: {

    fontSize: 14,

    marginBottom: 5,

  },

  parcelSizeDescription: {

    fontSize: 14,

    color: '#888888',

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

    color: '#888888',

  },

  footerButtonTextActive: {

    fontSize: 12,

    color: '#000000',

    fontWeight: 'bold',

  },

});



export default SendParcel_Parcel_sizeScreen;