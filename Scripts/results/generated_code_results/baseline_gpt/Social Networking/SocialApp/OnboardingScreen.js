import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const OnboardingScreen = () => {
  return (
    <ImageBackground 
      source={require('../assets/snack-icon.png')} 
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <View style={styles.logoContainer}>
          <Icon name="circle-o" size={24} color="#fff" />
          <Text style={styles.logoText}>heact</Text>
        </View>
        <Text style={styles.title}>Effortlessly Discover Your Ideal Match</Text>
        <Text style={styles.description}>
          Experience a seamless journey uncovering the ideal match that aligns with your preferences and aspirations
        </Text>
        <TouchableOpacity style={styles.buttonApple}>
          <Icon name="apple" size={16} color="#fff" />
          <Text style={styles.buttonText}>Continue with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonFacebook}>
          <Icon name="facebook-f" size={16} color="#fff" />
          <Text style={styles.buttonText}>Continue with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonPhone}>
          <Text style={styles.buttonText}>Use Phone Number</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoText: {
    color: '#fff',
    fontSize: 24,
    marginLeft: 8,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
    marginVertical: 10,
  },
  description: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  buttonApple: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 25,
    padding: 15,
    width: '80%',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonFacebook: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1877f2',
    borderRadius: 25,
    padding: 15,
    width: '80%',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonPhone: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 25,
    padding: 15,
    width: '80%',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default OnboardingScreen;