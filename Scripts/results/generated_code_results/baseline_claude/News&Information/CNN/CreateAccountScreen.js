import React, { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const CreateAccountScreen = () => {

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();



  const handleSignUp = () => {

    // Implement sign up logic here

    console.log('Sign up with:', email, password);

  };



  const handleGoogleSignUp = () => {

    // Implement Google sign up logic here

    console.log('Sign up with Google');

  };



  const navigateToSignIn = () => {

    navigation.navigate('LogIn');

  };



  return (

    <ScrollView contentContainerStyle={styles.container}>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>

        <Text style={styles.backButtonText}>{'<'}</Text>

      </TouchableOpacity>

      <Text style={styles.title}>Sign up for a CNN account</Text>

      <TouchableOpacity onPress={navigateToSignIn}>

        <Text style={styles.signInLink}>Already have an account? Sign in</Text>

      </TouchableOpacity>

      

      <TextInput

        style={styles.input}

        placeholder="Email address"

        value={email}

        onChangeText={setEmail}

        keyboardType="email-address"

        autoCapitalize="none"

      />

      

      <View style={styles.passwordContainer}>

        <TextInput

          style={styles.passwordInput}

          placeholder="Password"

          value={password}

          onChangeText={setPassword}

          secureTextEntry={!showPassword}

        />

        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>

          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

        </TouchableOpacity>

      </View>



      <Text style={styles.passwordRequirements}>Your password needs to include:</Text>

      <View style={styles.requirementItem}>

        <Image source={require('../assets/snack-icon.png')} style={styles.checkIcon} />

        <Text style={styles.requirementText}>At least 8 characters</Text>

      </View>

      <View style={styles.requirementItem}>

        <Image source={require('../assets/snack-icon.png')} style={styles.checkIcon} />

        <Text style={styles.requirementText}>At least one letter</Text>

      </View>

      <View style={styles.requirementItem}>

        <Image source={require('../assets/snack-icon.png')} style={styles.checkIcon} />

        <Text style={styles.requirementText}>At least one number</Text>

      </View>



      <Text style={styles.termsText}>

        By creating an account or signing in, you agree to the Terms of Use and have read our Privacy Policy. You understand CNN and its affiliates may use your email address to provide updates, ads, and offers. You can opt out via the Privacy Policy.

      </Text>



      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>

        <Text style={styles.signUpButtonText}>Sign up</Text>

      </TouchableOpacity>



      <Text style={styles.orText}>or</Text>



      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignUp}>

        <Image source={require('../assets/snack-icon.png')} style={styles.googleIcon} />

        <Text style={styles.googleButtonText}>Continue with Google</Text>

      </TouchableOpacity>

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flexGrow: 1,

    padding: 20,

    backgroundColor: '#fff',

  },

  backButton: {

    position: 'absolute',

    top: 20,

    left: 20,

  },

  backButtonText: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    marginTop: 50,

    marginBottom: 10,

  },

  signInLink: {

    color: '#0000FF',

    marginBottom: 20,

  },

  input: {

    borderWidth: 1,

    borderColor: '#ccc',

    borderRadius: 5,

    padding: 10,

    marginBottom: 15,

  },

  passwordContainer: {

    flexDirection: 'row',

    borderWidth: 1,

    borderColor: '#ccc',

    borderRadius: 5,

    marginBottom: 15,

  },

  passwordInput: {

    flex: 1,

    padding: 10,

  },

  eyeIcon: {

    padding: 10,

  },

  icon: {

    width: 24,

    height: 24,

  },

  passwordRequirements: {

    marginBottom: 10,

  },

  requirementItem: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 5,

  },

  checkIcon: {

    width: 16,

    height: 16,

    marginRight: 10,

  },

  requirementText: {

    fontSize: 14,

  },

  termsText: {

    fontSize: 12,

    color: '#666',

    marginVertical: 20,

  },

  signUpButton: {

    backgroundColor: '#ccc',

    padding: 15,

    borderRadius: 5,

    alignItems: 'center',

    marginBottom: 20,

  },

  signUpButtonText: {

    color: '#fff',

    fontSize: 16,

    fontWeight: 'bold',

  },

  orText: {

    textAlign: 'center',

    marginVertical: 10,

  },

  googleButton: {

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',

    borderWidth: 1,

    borderColor: '#ccc',

    borderRadius: 5,

    padding: 15,

  },

  googleIcon: {

    width: 24,

    height: 24,

    marginRight: 10,

  },

  googleButtonText: {

    fontSize: 16,

  },

});



export default CreateAccountScreen;