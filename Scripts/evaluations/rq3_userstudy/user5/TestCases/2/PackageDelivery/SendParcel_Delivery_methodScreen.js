import React, { useState } from 'react';

import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';



const SendParcel_Delivery_methodScreen = () => {

  const navigation = useNavigation();

  const [recipientName, setRecipientName] = useState('James May');

  const [recipientEmail, setRecipientEmail] = useState('james.m');

  const [recipientPhone, setRecipientPhone] = useState('');

  const [recipientAddress, setRecipientAddress] = useState('');



  const navigateToMyParcels = () => {

    navigation.navigate('Home_Top_drawer_close');

  };



  const navigateToParcelCenter = () => {

    navigation.navigate('Parcel_center');

  };



  return (

    <SafeAreaView style={styles.container}>

      <ScrollView style={styles.scrollView}>

        <Text style={styles.title}>Send parcel</Text>

        <Text style={styles.subtitle}>Delivery method</Text>



        <View style={styles.deliveryMethodContainer}>

          <TouchableOpacity style={styles.deliveryMethodOption} onPress={() => {navigation.navigate("SendParcel_Parcel_size")}} >

            <Image source={require('../assets/snack-icon.png')} style={styles.deliveryIcon} />

            <View style={styles.deliveryMethodText}>

              <Text style={styles.deliveryMethodTitle}>From door to parcel center</Text>

              <Text style={styles.deliveryMethodDuration}>1 - 2 days</Text>

            </View>

          </TouchableOpacity>



          <TouchableOpacity style={styles.deliveryMethodOption} onPress={() => {navigation.navigate("SendParcel_Parcel_size")}}>

            <Image source={require('../assets/snack-icon.png')} style={styles.deliveryIcon} />

            <View style={styles.deliveryMethodText}>

              <Text style={styles.deliveryMethodTitle}>From door to door</Text>

              <Text style={styles.deliveryMethodDuration}>2 - 3 days</Text>

            </View>

          </TouchableOpacity>

        </View>



        <Text style={styles.formTitle}>Recipient info</Text>



        <View style={styles.formContainer}>

          <Text style={styles.inputLabel}>Name</Text>

          <TextInput

            style={styles.input}

            value={recipientName}

            onChangeText={setRecipientName}

          />



          <Text style={styles.inputLabel}>Email</Text>

          <TextInput

            style={styles.input}

            value={recipientEmail}

            onChangeText={setRecipientEmail}

            keyboardType="email-address"

          />



          <Text style={styles.inputLabel}>Phone number</Text>

          <TextInput

            style={styles.input}

            value={recipientPhone}

            onChangeText={setRecipientPhone}

            keyboardType="phone-pad"

          />



          <Text style={styles.inputLabel}>Address</Text>

          <TextInput

            style={styles.input}

            value={recipientAddress}

            onChangeText={setRecipientAddress}

            multiline

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

  deliveryMethodContainer: {

    backgroundColor: '#F5F5F5',

    borderRadius: 10,

    padding: 15,

    marginBottom: 20,

  },

  deliveryMethodOption: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 15,

  },

  deliveryIcon: {

    width: 40,

    height: 40,

    marginRight: 15,

  },

  deliveryMethodText: {

    flex: 1,

  },

  deliveryMethodTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  deliveryMethodDuration: {

    fontSize: 14,

    color: '#888888',

  },

  formTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 15,

  },

  formContainer: {

    backgroundColor: '#F5F5F5',

    borderRadius: 10,

    padding: 15,

  },

  inputLabel: {

    fontSize: 14,

    color: '#888888',

    marginBottom: 5,

  },

  input: {

    backgroundColor: '#FFFFFF',

    borderRadius: 5,

    padding: 10,

    marginBottom: 15,

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



export default SendParcel_Delivery_methodScreen;