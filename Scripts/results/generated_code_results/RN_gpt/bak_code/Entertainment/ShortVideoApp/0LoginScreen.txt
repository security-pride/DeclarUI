import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate('Home');
  };

  const renderSocialLoginIcon = (iconName, onPress) => (
    <TouchableOpacity onPress={onPress} style={styles.socialIcon}>
      <Icon name={iconName} size={30} color="black" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Image source={require('../assets/snack-icon.png')} style={styles.logo} />
      <Text style={styles.welcomeText}>Welcome!</Text>
      <Text style={styles.descriptionText}>
        Discover interesting short videos. Share your moments with the CutG community
      </Text>
      <View style={styles.signInButton}>
        <Button title="Sign in" onPress={handleSignIn} color="#42A5F5" />
      </View>
      <View style={styles.socialIconsContainer}>
        {renderSocialLoginIcon('logo-apple', () => {})}
        {renderSocialLoginIcon('logo-facebook', () => {})}
        {renderSocialLoginIcon('logo-google', () => {})}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
  },
  logo: {
    width: 100,
    height: 100,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
  },
  descriptionText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginHorizontal: 40,
    marginVertical: 20,
  },
  signInButton: {
    marginVertical: 30,
    width: '80%',
    borderRadius: 5,
    overflow: 'hidden',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
  },
  socialIcon: {
    padding: 10,
  },
});

export default LoginScreen;