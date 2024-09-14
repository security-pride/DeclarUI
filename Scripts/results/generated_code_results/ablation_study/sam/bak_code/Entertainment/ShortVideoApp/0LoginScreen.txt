import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = ({ navigation }) => {
  const handleSignIn = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/snack-icon.png')} style={styles.backgroundImage} />
      <View style={styles.overlay}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/snack-icon.png')} style={styles.logo} />
          <Text style={styles.appName}>CutG</Text>
        </View>
        <Text style={styles.welcomeMessage}>Welcome!</Text>
        <Text style={styles.description}>
          Discover interesting short videos. Share your moments with the CutG community
        </Text>
        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.signInButtonText}>Sign in</Text>
        </TouchableOpacity>
        <View style={styles.socialLoginContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Icon name="apple" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Icon name="facebook" size={24} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Icon name="google" size={24} color="#db4437" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  welcomeMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  signInButton: {
    backgroundColor: '#00a2ed',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 20,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
});

export default LoginScreen;