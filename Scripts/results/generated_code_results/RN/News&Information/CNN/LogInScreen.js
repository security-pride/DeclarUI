import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const LoginScreen = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [showPassword, setShowPassword] = useState(false);
const navigation = useNavigation();
const handleLogin = () => {
// Implement login logic here
console.log('Login button pressed');
};
const handleGoogleLogin = () => {
// Implement Google login logic here
console.log('Continue with Google pressed');
};
const navigateToSettings = () => {
navigation.navigate('settings');
};
const navigateToCreateAccount = () => {
navigation.navigate('CreateAccont');
};
return (
<View style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={navigateToSettings}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
</TouchableOpacity>
<View style={styles.statusBar}>
<Text style={styles.time}>6:17</Text>
<View style={styles.statusIcons}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</View>
</View>
</View>
  <Text style={styles.title}>Sign in to your CNN account</Text>

  <TouchableOpacity onPress={navigateToCreateAccount}>
    <Text style={styles.signUpPrompt}>Don't have an account? Sign up</Text>
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

  <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
    <Text style={styles.signInButtonText}>Sign in</Text>
  </TouchableOpacity>

  <TouchableOpacity>
    <Text style={styles.forgotPassword}>Forgot your password?</Text>
  </TouchableOpacity>

  <View style={styles.separatorContainer}>
    <View style={styles.separator} />
    <Text style={styles.separatorText}>or</Text>
    <View style={styles.separator} />
  </View>

  <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
    <Image source={require('../assets/snack-icon.png')} style={styles.googleIcon} />
    <Text style={styles.googleButtonText}>Continue with Google</Text>
  </TouchableOpacity>

  <Text style={styles.termsText}>
    By creating an account or signing in, you agree to the Terms of Use and have read our Privacy Policy. You understand CNN and its affiliates may use your email address to provide updates, ads, and offers. You can opt out via the Privacy Policy.
  </Text>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
padding: 20,
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: 20,
},
backIcon: {
width: 24,
height: 24,
},
statusBar: {
flexDirection: 'row',
alignItems: 'center',
},
time: {
marginRight: 10,
},
statusIcons: {
flexDirection: 'row',
},
icon: {
width: 20,
height: 20,
marginLeft: 5,
},
title: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 10,
},
signUpPrompt: {
color: 'blue',
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
marginBottom: 20,
},
passwordInput: {
flex: 1,
padding: 10,
},
eyeIcon: {
width: 24,
height: 24,
alignSelf: 'center',
marginRight: 10,
},
signInButton: {
backgroundColor: '#ccc',
padding: 15,
borderRadius: 5,
alignItems: 'center',
marginBottom: 15,
},
signInButtonText: {
color: 'white',
fontWeight: 'bold',
},
forgotPassword: {
color: 'blue',
textAlign: 'center',
marginBottom: 20,
},
separatorContainer: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 20,
},
separator: {
flex: 1,
height: 1,
backgroundColor: '#ccc',
},
separatorText: {
marginHorizontal: 10,
color: '#888',
},
googleButton: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 5,
padding: 15,
marginBottom: 20,
},
googleIcon: {
width: 20,
height: 20,
marginRight: 10,
},
googleButtonText: {
fontWeight: 'bold',
},
termsText: {
fontSize: 12,
color: '#888',
textAlign: 'center',
},
});
export default LoginScreen;