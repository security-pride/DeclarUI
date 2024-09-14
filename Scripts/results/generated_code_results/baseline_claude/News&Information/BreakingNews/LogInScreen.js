import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, KeyboardAvoidingView, Platform } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const LogInScreen = () => {

  const navigation = useNavigation();

  const [phoneNumber, setPhoneNumber] = useState('');

  const [countryCode, setCountryCode] = useState('+1');



  const handleContinue = () => {

    // Implement login logic here

    console.log('Login attempt with phone number:', countryCode + phoneNumber);

  };



  const handleBack = () => {

    navigation.goBack();

  };



  return (

    <KeyboardAvoidingView 

      behavior={Platform.OS === "ios" ? "padding" : "height"}

      style={styles.container}

    >

      <View style={styles.header}>

        <TouchableOpacity onPress={handleBack} style={styles.backButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

        </TouchableOpacity>

      </View>



      <View style={styles.content}>

        <Text style={styles.title}>BREAKING</Text>

        <Text style={styles.subtitle}>By SAFE APPS</Text>



        <Text style={styles.inputLabel}>请输入您的电话号码</Text>

        <View style={styles.phoneInputContainer}>

          <TouchableOpacity style={styles.countryCodeContainer}>

            <Text style={styles.countryCode}>{countryCode}</Text>

            <Image source={require('../assets/snack-icon.png')} style={styles.dropdownIcon} />

          </TouchableOpacity>

          <TextInput

            style={styles.phoneInput}

            placeholder="输入电话号码"

            value={phoneNumber}

            onChangeText={setPhoneNumber}

            keyboardType="phone-pad"

          />

        </View>



        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>

          <Text style={styles.continueButtonText}>继续</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.keypad}>

        {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map((item, index) => (

          <TouchableOpacity key={index} style={styles.keypadButton}>

            <Text style={styles.keypadButtonText}>{item}</Text>

            {item === 2 && <Text style={styles.keypadSubText}>ABC</Text>}

            {item === 3 && <Text style={styles.keypadSubText}>DEF</Text>}

            {item === 4 && <Text style={styles.keypadSubText}>GHI</Text>}

            {item === 5 && <Text style={styles.keypadSubText}>JKL</Text>}

            {item === 6 && <Text style={styles.keypadSubText}>MNO</Text>}

            {item === 7 && <Text style={styles.keypadSubText}>PQRS</Text>}

            {item === 8 && <Text style={styles.keypadSubText}>TUV</Text>}

            {item === 9 && <Text style={styles.keypadSubText}>WXYZ</Text>}

          </TouchableOpacity>

        ))}

      </View>

    </KeyboardAvoidingView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFFFFF',

  },

  header: {

    padding: 16,

  },

  backButton: {

    padding: 8,

  },

  backIcon: {

    width: 24,

    height: 24,

  },

  content: {

    flex: 1,

    paddingHorizontal: 24,

    justifyContent: 'center',

  },

  title: {

    fontSize: 36,

    fontWeight: 'bold',

    color: 'red',

    textAlign: 'center',

  },

  subtitle: {

    fontSize: 16,

    color: 'red',

    textAlign: 'center',

    marginBottom: 48,

  },

  inputLabel: {

    fontSize: 16,

    marginBottom: 8,

  },

  phoneInputContainer: {

    flexDirection: 'row',

    borderWidth: 1,

    borderColor: '#CCCCCC',

    borderRadius: 8,

    marginBottom: 24,

  },

  countryCodeContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 12,

    borderRightWidth: 1,

    borderRightColor: '#CCCCCC',

  },

  countryCode: {

    fontSize: 16,

    marginRight: 4,

  },

  dropdownIcon: {

    width: 12,

    height: 12,

  },

  phoneInput: {

    flex: 1,

    padding: 12,

    fontSize: 16,

  },

  continueButton: {

    backgroundColor: 'red',

    paddingVertical: 16,

    borderRadius: 8,

    alignItems: 'center',

  },

  continueButtonText: {

    color: '#FFFFFF',

    fontSize: 18,

    fontWeight: 'bold',

  },

  keypad: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',

    paddingHorizontal: 24,

    paddingBottom: 24,

  },

  keypadButton: {

    width: '30%',

    aspectRatio: 2,

    justifyContent: 'center',

    alignItems: 'center',

    marginBottom: 16,

    backgroundColor: '#F0F0F0',

    borderRadius: 8,

  },

  keypadButtonText: {

    fontSize: 24,

  },

  keypadSubText: {

    fontSize: 12,

    color: '#666666',

  },

});



export default LogInScreen;