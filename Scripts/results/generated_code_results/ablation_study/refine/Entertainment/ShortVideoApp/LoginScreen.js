import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = ({ navigation }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSignIn = () => {
    navigation.navigate('Home');
  };

  const handleSocialSignIn = (platform) => {
    console.log(`Signing in with ${platform}`);
    // Implement social sign-in logic here
  };

  return (
    <ImageBackground
      source={require('../assets/snack-icon.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/snack-icon.png')}
            style={styles.logo}
          />
          <Text style={styles.appName}>CutG</Text>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.welcomeText}>Welcome!</Text>
          <Text style={styles.descriptionText}>
            Discover interesting short videos. Share your moments with the CutG community
          </Text>

          <View style={styles.dotsContainer}>
            {[0, 1, 2].map((index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  index === currentSlide && styles.activeDot,
                ]}
              />
            ))}
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
            <Text style={styles.signInText}>Sign in</Text>
          </TouchableOpacity>

          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => handleSocialSignIn('Apple')}
            >
              <Icon name="apple" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => handleSocialSignIn('Facebook')}
            >
              <Icon name="facebook" size={24} color="#3b5998" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => handleSocialSignIn('Google')}
            >
              <Icon name="google" size={24} color="#db4437" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'space-between',
    paddingVertical: 50,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  appName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  welcomeText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  descriptionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#fff',
  },
  buttonContainer: {
    paddingHorizontal: 40,
  },
  signInButton: {
    backgroundColor: '#80FFFF',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  signInText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialButtonsContainer: {
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