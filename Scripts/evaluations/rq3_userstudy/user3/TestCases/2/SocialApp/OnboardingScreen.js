import React from 'react';

import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';



const OnboardingScreen = () => {

  const navigation = useNavigation();



  const handleContinueWithApple = () => {

    // Implement Apple sign-in logic

    navigation.navigate('Homepage');

  };



  const handleContinueWithFacebook = () => {

    // Implement Facebook sign-in logic

    navigation.navigate('Homepage');

  };



  const handleUsePhoneNumber = () => {

    // Navigate to phone number input screen

    navigation.navigate('PhoneNumberInput');

  };



  return (

    <ImageBackground

      source={require('../assets/snack-icon.png')}

      style={styles.backgroundImage}

    >

      <StatusBar style="light" />

      <SafeAreaView style={styles.container}>

        <View style={styles.logoContainer}>

          <Image

            source={require('../assets/snack-icon.png')}

            style={styles.logo}

            resizeMode="contain"

          />

          <Text style={styles.logoText}>heact</Text>

        </View>

        <View style={styles.contentContainer}>

          <Text style={styles.title}>Effortlessly Discover{'\n'}Your Ideal Match</Text>

          <Text style={styles.subtitle}>

            Experience a seamless journey uncovering the ideal match that aligns with your preferences and aspirations

          </Text>

          <TouchableOpacity

            style={[styles.button, styles.appleButton]}

            onPress={handleContinueWithApple}

          >

            <Image

              source={require('../assets/snack-icon.png')}

              style={styles.buttonIcon}

            />

            <Text style={styles.buttonText}>Continue with Apple</Text>

          </TouchableOpacity>

          <TouchableOpacity

            style={[styles.button, styles.facebookButton]}

            onPress={handleContinueWithFacebook}

          >

            <Image

              source={require('../assets/snack-icon.png')}

              style={styles.buttonIcon}

            />

            <Text style={[styles.buttonText, styles.facebookButtonText]}>Continue with Facebook</Text>

          </TouchableOpacity>

          <TouchableOpacity

            style={[styles.button, styles.phoneButton]}

            onPress={handleUsePhoneNumber}

          >

            <Text style={[styles.buttonText, styles.phoneButtonText]}>Use Phone Number</Text>

          </TouchableOpacity>

        </View>

      </SafeAreaView>

    </ImageBackground>

  );

};



const styles = StyleSheet.create({

  backgroundImage: {

    flex: 1,

    width: '100%',

    height: '100%',

  },

  container: {

    flex: 1,

    backgroundColor: 'rgba(0, 0, 0, 0.5)',

  },

  logoContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',

    marginTop: 40,

  },

  logo: {

    width: 30,

    height: 30,

    marginRight: 10,

  },

  logoText: {

    fontSize: 24,

    fontWeight: 'bold',

    color: '#FFFFFF',

  },

  contentContainer: {

    flex: 1,

    justifyContent: 'flex-end',

    alignItems: 'center',

    paddingHorizontal: 20,

    paddingBottom: 40,

  },

  title: {

    fontSize: 28,

    fontWeight: 'bold',

    color: '#FFFFFF',

    textAlign: 'center',

    marginBottom: 10,

  },

  subtitle: {

    fontSize: 16,

    color: '#FFFFFF',

    textAlign: 'center',

    marginBottom: 30,

    opacity: 0.8,

  },

  button: {

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',

    width: '100%',

    height: 50,

    borderRadius: 25,

    marginBottom: 10,

  },

  buttonIcon: {

    width: 20,

    height: 20,

    marginRight: 10,

  },

  buttonText: {

    fontSize: 16,

    fontWeight: '600',

  },

  appleButton: {

    backgroundColor: '#FFFFFF',

  },

  facebookButton: {

    backgroundColor: '#1877F2',

  },

  facebookButtonText: {

    color: '#FFFFFF',

  },

  phoneButton: {

    backgroundColor: 'transparent',

    borderWidth: 1,

    borderColor: '#FFFFFF',

  },

  phoneButtonText: {

    color: '#FFFFFF',

  },

});



export default OnboardingScreen;