import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const CreateAccount = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [showPassword, setShowPassword] = useState(false);
const navigation = useNavigation();
const handleSignUp = () => {
// Implement sign up logic here
console.log('Sign up button pressed');
};
const handleGoogleSignUp = () => {
// Implement Google sign up logic here
console.log('Continue with Google pressed');
};
const navigateToSettings = () => {
navigation.navigate('settings');
};
return (
<View style={styles.container}>
<TouchableOpacity onPress={navigateToSettings} style={styles.backButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
</TouchableOpacity>
  <Image source={require('../assets/snack-icon.png')} style={styles.wifiIcon} />
  <Image source={require('../assets/snack-icon.png')} style={styles.batteryIcon} />
  <Image source={require('../assets/snack-icon.png')} style={styles.solidCircle} />

  <Text style={styles.title}>Sign up for a CNN account</Text>

  <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
    <Text style={styles.signInPrompt}>Already have an account? Sign in</Text>
  </TouchableOpacity>

  <TextInput
    style={styles.input}
    placeholder="Email address"
    value={email}
    onChangeText={setEmail}
    keyboardType="email-address"
  />

  <View style={styles.passwordContainer}>
    <TextInput
      style={styles.passwordInput}
      placeholder="Password"
      value={password}
      onChangeText={setPassword}
      secureTextEntry={!showPassword}
    />
    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
      <Image source={require('../assets/snack-icon.png')} style={styles.eyeIcon} />
    </TouchableOpacity>
  </View>

  <Text style={styles.passwordRequirementHeading}>Your password needs to include:</Text>
  <View style={styles.passwordRequirement}>
    <Image source={require('../assets/snack-icon.png')} style={styles.crossIcon} />
    <Text>At least 8 characters</Text>
  </View>
  <View style={styles.passwordRequirement}>
    <Image source={require('../assets/snack-icon.png')} style={styles.crossIcon} />
    <Text>At least one letter</Text>
  </View>
  <View style={styles.passwordRequirement}>
    <Image source={require('../assets/snack-icon.png')} style={styles.crossIcon} />
    <Text>At least one number</Text>
  </View>

  <Text style={styles.privacyPolicy}>
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
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
padding: 20,
backgroundColor: 'white',
},
backButton: {
position: 'absolute',
top: 20,
left: 20,
},
backIcon: {
width: 30,
height: 30,
},
wifiIcon: {
position: 'absolute',
top: 20,
right: 60,
width: 20,
height: 20,
},
batteryIcon: {
position: 'absolute',
top: 20,
right: 20,
width: 20,
height: 20,
},
solidCircle: {
position: 'absolute',
top: 20,
right: 90,
width: 10,
height: 10,
},
title: {
fontSize: 24,
fontWeight: 'bold',
marginTop: 60,
marginBottom: 20,
},
signInPrompt: {
color: 'blue',
marginBottom: 20,
},
input: {
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 5,
padding: 10,
marginBottom: 20,
},
passwordContainer: {
flexDirection: 'row',
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 5,
marginBottom: 20,
},
passwordInput: {
flex: 1,
padding: 10,
},
eyeIcon: {
width: 30,
height: 30,
alignSelf: 'center',
marginRight: 10,
},
passwordRequirementHeading: {
fontWeight: 'bold',
marginBottom: 10,
},
passwordRequirement: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 5,
},
crossIcon: {
width: 20,
height: 20,
marginRight: 10,
},
privacyPolicy: {
fontSize: 12,
color: 'gray',
marginBottom: 20,
},
signUpButton: {
backgroundColor: 'blue',
padding: 15,
borderRadius: 5,
alignItems: 'center',
marginBottom: 20,
},
signUpButtonText: {
color: 'white',
fontWeight: 'bold',
},
orText: {
textAlign: 'center',
marginBottom: 20,
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
width: 20,
height: 20,
marginRight: 10,
},
googleButtonText: {
fontWeight: 'bold',
},
});
export default CreateAccount;