import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Pressable } from 'react-native';
const Login = ({ navigation }) => {
const [email, setEmail] = useState('hello.doppixel@gmail.com');
const [password, setPassword] = useState('');
const [showPassword, setShowPassword] = useState(false);
const [rememberMe, setRememberMe] = useState(false);
const handleLogin = () => {
// Implement login logic here
navigation.navigate('Home');
};
const handleSocialLogin = (platform) => {
// Implement social login logic here
navigation.navigate('Home');
};
const handleSignUp = () => {
navigation.navigate('CreateAccount');
};
return (
<View style={styles.container}>
<View style={styles.back}>
<Pressable style={styles.backButton} onPress={() => navigation.navigate('Home')}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
</Pressable>
  <Text style={styles.title}>Sign in</Text>
</View>

  <Text style={styles.label}>Email</Text>
  <TextInput
    style={styles.input}
    value={email}
    onChangeText={setEmail}
    keyboardType="email-address"
    autoCapitalize="none"
  />

  <Text style={styles.label}>Password</Text>
  <View style={styles.passwordContainer}>
    <TextInput
      style={styles.passwordInput}
      value={password}
      onChangeText={setPassword}
      secureTextEntry={!showPassword}
    />
    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
      <Image source={require('../assets/snack-icon.png')} style={styles.eyeIcon} />
    </TouchableOpacity>
  </View>

  <View style={styles.rememberForgotContainer}>
    <TouchableOpacity style={styles.rememberContainer} onPress={() => setRememberMe(!rememberMe)}>
      <View style={[styles.checkbox, rememberMe && styles.checked]}>
        {rememberMe && <Text style={styles.checkmark}>✓</Text>}
      </View>
      <Text style={styles.rememberText}>Remember me</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text style={styles.forgotText}>Forget Password?</Text>
    </TouchableOpacity>
  </View>

  <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
    <Text style={styles.loginButtonText}>Log in</Text>
  </TouchableOpacity>

  <Text style={styles.orText}>Or continue with</Text>

  <TouchableOpacity style={styles.socialButton} onPress={() => handleSocialLogin('Google')}>
    <Image source={require('../assets/snack-icon.png')} style={styles.socialIcon} />
    <Text style={styles.socialButtonText}>Continue with Google</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.socialButton} onPress={() => handleSocialLogin('Apple')}>
    <Image source={require('../assets/snack-icon.png')} style={styles.socialIcon} />
    <Text style={styles.socialButtonText}>Continue with Apple</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.socialButton} onPress={() => handleSocialLogin('Facebook')}>
    <Image source={require('../assets/snack-icon.png')} style={styles.socialIcon} />
    <Text style={styles.socialButtonText}>Continue with Facebook</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.signUpContainer} onPress={handleSignUp}>
    <Text style={styles.signUpText}>Don't have an account? <Text style={styles.signUpLink}>Sign up</Text></Text>
  </TouchableOpacity>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
padding: 20,
backgroundColor: '#fff',
},
back: {
  flexDirection:'row',
},
backButton: {

},
backIcon: {
width: 24,
height: 24,
},
title: {
fontSize: 24,
fontWeight: 'bold',
marginLeft: 100,
marginBottom: 10,
},
label: {
fontSize: 16,
marginBottom: 5,
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
alignItems: 'center',
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
marginRight: 10,
},
rememberForgotContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: 20,
},
rememberContainer: {
flexDirection: 'row',
alignItems: 'center',
},
checkbox: {
width: 20,
height: 20,
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 4,
marginRight: 10,
justifyContent: 'center',
alignItems: 'center',
},
checked: {
backgroundColor: '#007AFF',
borderColor: '#007AFF',
},
checkmark: {
color: '#fff',
fontSize: 14,
},
rememberText: {
fontSize: 14,
},
forgotText: {
fontSize: 14,
color: '#007AFF',
},
loginButton: {
backgroundColor: '#007AFF',
borderRadius: 5,
padding: 15,
alignItems: 'center',
marginBottom: 20,
},
loginButtonText: {
color: '#fff',
fontSize: 16,
fontWeight: 'bold',
},
orText: {
textAlign: 'center',
marginBottom: 20,
},
socialButton: {
flexDirection: 'row',
alignItems: 'center',
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 5,
padding: 10,
marginBottom: 10,
},
socialIcon: {
width: 24,
height: 24,
marginRight: 10,
},
socialButtonText: {
fontSize: 16,
},
signUpContainer: {
marginTop: 20,
},
signUpText: {
textAlign: 'center',
fontSize: 14,
},
signUpLink: {
color: '#007AFF',
fontWeight: 'bold',
},
});
export default Login;