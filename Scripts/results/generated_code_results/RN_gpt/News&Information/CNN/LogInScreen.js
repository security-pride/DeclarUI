import React from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LogInScreen = () => {
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate('Settings');
  };

  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <Text>6:17</Text>
        {/* Icons are placed here for network and battery status */}
      </View>
      <View style={styles.header}>
        <Text style={styles.heading}>Sign in to your CNN account</Text>
      </View>
      <Text style={styles.subText}>Don't have an account? <Text style={styles.signUpLink}>Sign up</Text></Text>
      <TextInput style={styles.input} placeholder="Email address" />
      <View style={styles.passwordContainer}>
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
        <TouchableOpacity style={styles.eyeIcon}>
          <Image source={require('../assets/snack-icon.png')} style={styles.iconImage} />
        </TouchableOpacity>
      </View>
      <Button title="Sign in" style={styles.signInButton} onPress={handleSignIn} />
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
      </TouchableOpacity>
      <View style={styles.orContainer}><Text>or</Text></View>
      <Text style={styles.termsText}>
        By creating an account or signing in, you agree to the
        <Text style={styles.linkText}> Terms of Use </Text>and have read our
        <Text style={styles.linkText}> Privacy Policy</Text>. You understand CNN and its affiliates may use your email address to provide updates, ads, and offers. You can opt out via the
        <Text style={styles.linkText}> Privacy Policy</Text>.
      </Text>
      <Button title="Continue with Google" style={styles.googleButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  header: {
    marginVertical: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subText: {
    marginBottom: 20,
    fontSize: 16,
  },
  signUpLink: {
    color: 'blue',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
  },
  iconImage: {
    width: 24,
    height: 24,
  },
  signInButton: {
    marginVertical: 20,
    backgroundColor: 'gray',
  },
  forgotPassword: {
    textAlign: 'center',
    color: 'blue',
    marginBottom: 20,
  },
  orContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  termsText: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
  },
  linkText: {
    color: 'blue',
  },
  googleButton: {
    backgroundColor: 'lightgray',
  }
});

export default LogInScreen;