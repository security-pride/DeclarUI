import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const loginScreen = () => {
  return (
    <ImageBackground 
      source={require('../assets/snack-icon.png')} 
      style={styles.background}
      blurRadius={3}
    >
      <View style={styles.logoContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.logo} />
        <Text style={styles.logoText}>CutG</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.descriptionText}>
          Discover interesting short videos. Share your moments with the CutG community.
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
      <View style={styles.socialContainer}>
        <TouchableOpacity>
          <Icon name="apple" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="facebook" size={30} color="#3b5998" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="google" size={30} color="#db4437" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    width: 80,
    height: 80,
  },
  logoText: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 50,
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#00aaff',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});

export default loginScreen;