import React, { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const CreateAccountScreen = () => {

  const [email, setEmail] = useState('');

  const navigation = useNavigation();



  const handleContinueWithEmail = () => {

    // Implement email sign up logic

    console.log('Continue with email:', email);
    navigation.navigate('Home');
  };



  const handleGoogleSignUp = () => {

    // Implement Google sign up logic

    console.log('Sign up with Google');
    navigation.navigate('Home');
  };



  const handleAppleSignUp = () => {

    // Implement Apple sign up logic

    console.log('Sign up with Apple');
    navigation.navigate('Home');
  };



  const handleFacebookSignUp = () => {

    // Implement Facebook sign up logic

    console.log('Sign up with Facebook');
    navigation.navigate('Home');
  };



  const navigateToLogin = () => {

    navigation.navigate('Login');
    navigation.navigate('Home');
  };



  return (

    <KeyboardAvoidingView

      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}

      style={styles.container}

    >

      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <Image

          source={require('../assets/snack-icon.png')}

          style={styles.backgroundImage}

        />

        <View style={styles.content}>

          <Text style={styles.title}>Hi, Welcome Back</Text>

          <Text style={styles.subtitle}>Sign up or login into see what's happening near you.</Text>

          

          <TextInput

            style={styles.input}

            placeholder="Email"

            value={email}

            onChangeText={setEmail}

            keyboardType="email-address"

            autoCapitalize="none"

          />

          

          <TouchableOpacity style={styles.button} onPress={handleContinueWithEmail}>

            <Text style={styles.buttonText}>Continue with email</Text>

          </TouchableOpacity>

          

          <Text style={styles.orText}>Or continue with</Text>

          

          <TouchableOpacity style={styles.socialButton} onPress={handleGoogleSignUp}>

            <Image source={require('../assets/snack-icon.png')} style={styles.socialIcon} />

            <Text style={styles.socialButtonText}>Continue with Google</Text>

          </TouchableOpacity>

          

          <TouchableOpacity style={styles.socialButton} onPress={handleAppleSignUp}>

            <Image source={require('../assets/snack-icon.png')} style={styles.socialIcon} />

            <Text style={styles.socialButtonText}>Continue with Apple</Text>

          </TouchableOpacity>

          

          <TouchableOpacity style={styles.socialButton} onPress={handleFacebookSignUp}>

            <Image source={require('../assets/snack-icon.png')} style={styles.socialIcon} />

            <Text style={styles.socialButtonText}>Continue with Facebook</Text>

          </TouchableOpacity>

          

          <TouchableOpacity onPress={navigateToLogin}>

            <Text style={styles.signUpText}>Don't have an account? Sign up</Text>

          </TouchableOpacity>

        </View>

      </ScrollView>

    </KeyboardAvoidingView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#2C2C2E',

  },

  scrollContainer: {

    flexGrow: 1,

    justifyContent: 'center',

  },

  backgroundImage: {

    position: 'absolute',

    top: 0,

    left: 0,

    right: 0,

    bottom: 0,

    opacity: 0.1,

  },

  content: {

    padding: 20,

    alignItems: 'center',

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    color: 'white',

    marginBottom: 10,

  },

  subtitle: {

    fontSize: 16,

    color: '#A0A0A0',

    textAlign: 'center',

    marginBottom: 30,

  },

  input: {

    width: '100%',

    height: 50,

    backgroundColor: '#3A3A3C',

    borderRadius: 8,

    paddingHorizontal: 15,

    color: 'white',

    marginBottom: 15,

  },

  button: {

    width: '100%',

    height: 50,

    backgroundColor: '#007AFF',

    borderRadius: 8,

    justifyContent: 'center',

    alignItems: 'center',

    marginBottom: 20,

  },

  buttonText: {

    color: 'white',

    fontSize: 16,

    fontWeight: 'bold',

  },

  orText: {

    color: '#A0A0A0',

    marginVertical: 15,

  },

  socialButton: {

    width: '100%',

    height: 50,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#3A3A3C',

    borderRadius: 8,

    marginBottom: 10,

    paddingHorizontal: 15,

  },

  socialIcon: {

    width: 24,

    height: 24,

    marginRight: 10,

  },

  socialButtonText: {

    color: 'white',

    fontSize: 16,

  },

  signUpText: {

    color: '#007AFF',

    marginTop: 20,

  },

});



export default CreateAccountScreen;