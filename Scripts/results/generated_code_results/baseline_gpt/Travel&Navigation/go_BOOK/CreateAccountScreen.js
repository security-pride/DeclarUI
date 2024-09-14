import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CreateAccountScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/snack-icon.png')} style={styles.imageBackground} />
      <Text style={styles.title}>Hi, Welcome Back</Text>
      <Text style={styles.subtitle}>Sign up or login into see what’s happening near you.</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Email"
          style={styles.textInput}
          keyboardType="email-address"
        />
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Continue with email</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.orText}>Or continue with</Text>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="google" size={24} color="#DB4437" />
          <Text style={styles.socialButtonText}>Continue with Google</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="apple" size={24} color="#000000" />
          <Text style={styles.socialButtonText}>Continue with Apple</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="facebook" size={24} color="#3B5998" />
          <Text style={styles.socialButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.signupText}>
        Don’t have an account? <Text style={styles.signupLink}>Sign up</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  imageBackground: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#999',
    marginTop: 10,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    width: '100%',
    marginTop: 30,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  continueButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    marginVertical: 20,
    color: '#999',
    fontSize: 14,
  },
  socialButtonsContainer: {
    width: '100%',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 10,
  },
  socialButtonText: {
    marginLeft: 10,
    fontSize: 16,
  },
  signupText: {
    marginTop: 20,
    color: '#999',
    fontSize: 14,
  },
  signupLink: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});

export default CreateAccountScreen;