import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Use specific icon package as needed
import { useNavigation } from '@react-navigation/native';

const CreateAccountScreen = () => {
  const navigation = useNavigation();

  const handleGoToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/snack-icon.png')}
        style={styles.imageBackground}
      >
        <Text style={styles.greeting}>Hi, Welcome Back</Text>
        <Text style={styles.description}>
          Sign up or login to see what's happening near you.
        </Text>
      </ImageBackground>
      
      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.textInput} placeholder="Email" />
        <TouchableOpacity style={styles.emailButton} onPress={handleGoToHome}>
          <Text style={styles.emailButtonText}>Continue with email</Text>
        </TouchableOpacity>
        
        <View style={styles.separator}>
          <View style={styles.line} />
          <Text style={styles.orText}>Or continue with</Text>
          <View style={styles.line} />
        </View>
        
        <TouchableOpacity style={styles.socialButton} onPress={handleGoToHome}>
          <Icon name="logo-google" size={24} color="#000" />
          <Text style={styles.socialButtonText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton} onPress={handleGoToHome}>
          <Icon name="logo-apple" size={24} color="#000" />
          <Text style={styles.socialButtonText}>Continue with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton} onPress={handleGoToHome}>
          <Icon name="logo-facebook" size={24} color="#000" />
          <Text style={styles.socialButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.bottomNav}>
        <Text style={styles.signupText}>
          Don’t have an account? <Text style={styles.signupLink}>Sign up</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  imageBackground: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 20,
  },
  description: {
    color: '#fff',
    textAlign: 'center',
    marginHorizontal: 40,
  },
  form: {
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: '#333',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  emailButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  emailButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
    color: '#333',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  socialButtonText: {
    marginLeft: 10,
    color: '#333',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  signupText: {
    color: '#333',
  },
  signupLink: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default CreateAccountScreen;