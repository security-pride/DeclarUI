import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
const CreateAccount = ({ navigation }) => {
const [email, setEmail] = useState('');
const handleContinueWithEmail = () => {
// Handle email login logic
if (email) {
// Simulate account creation
navigation.navigate('Home');
}
};
const handleSocialLogin = (platform) => {
// Handle social login logic
console.log("Logging in with ${platform}");
// Simulate successful login
navigation.navigate('Home');
};
const handleSignUp = () => {
// Navigate to sign up page
console.log('Navigating to sign up page');
navigation.navigate('Login');
};
return (
<View style={styles.container}>
<ImageBackground
source={require('../assets/snack-icon.png')}
style={styles.backgroundImage}
>
<Text style={styles.greeting}>Hi, Welcome Back</Text>
<Text style={styles.subGreeting}>Sign up or login to see what's happening near you.</Text>
</ImageBackground>
  <View style={styles.formContainer}>
    <Text style={styles.label}>Email</Text>
    <TextInput
      style={styles.input}
      placeholder="Email"
      value={email}
      onChangeText={setEmail}
      keyboardType="email-address"
    />

    <TouchableOpacity style={styles.continueButton} onPress={handleContinueWithEmail}>
      <Text style={styles.continueButtonText}>Continue with email</Text>
    </TouchableOpacity>

    <View style={styles.divider}>
      <View style={styles.dividerLine} />
      <Text style={styles.dividerText}>Or continue with</Text>
      <View style={styles.dividerLine} />
    </View>

    <TouchableOpacity
      style={styles.socialButton}
      onPress={() => handleSocialLogin('Google')}
    >
      <Text style={styles.socialButtonText}>Continue with Google</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.socialButton}
      onPress={() => handleSocialLogin('Apple')}
    >
      <Text style={styles.socialButtonText}>Continue with Apple</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.socialButton}
      onPress={() => handleSocialLogin('Facebook')}
    >
      <Text style={styles.socialButtonText}>Continue with Facebook</Text>
    </TouchableOpacity>
  </View>

  <TouchableOpacity onPress={handleSignUp} style={styles.signUpContainer}>
    <Text style={styles.signUpText}>Don't have an account? <Text style={styles.signUpLink}>Sign up</Text></Text>
  </TouchableOpacity>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
backgroundImage: {
height: 260,
justifyContent: 'center',
alignItems: 'center',
},
greeting: {
fontSize: 24,
fontWeight: 'bold',
color: '#fff',
marginBottom: 10,
},
subGreeting: {
fontSize: 16,
color: '#fff',
textAlign: 'center',
paddingHorizontal: 20,
},
formContainer: {
padding: 20,
},
label: {
fontSize: 16,
marginBottom: 5,
},
input: {
borderWidth: 1,
borderColor: '#ddd',
padding: 10,
borderRadius: 5,
marginBottom: 20,
},
continueButton: {
backgroundColor: '#000',
padding: 15,
borderRadius: 5,
alignItems: 'center',
},
continueButtonText: {
color: '#fff',
fontSize: 16,
fontWeight: 'bold',
},
divider: {
flexDirection: 'row',
alignItems: 'center',
marginVertical: 20,
},
dividerLine: {
flex: 1,
height: 1,
backgroundColor: '#ddd',
},
dividerText: {
marginHorizontal: 10,
color: '#888',
},
socialButton: {
borderWidth: 1,
borderColor: '#ddd',
padding: 15,
borderRadius: 5,
alignItems: 'center',
marginBottom: 10,
},
socialButtonText: {
fontSize: 16,
},
signUpContainer: {
alignItems: 'center',
marginTop: 20,
},
signUpText: {
fontSize: 14,
color: '#333',
},
signUpLink: {
color: '#007AFF',
fontWeight: 'bold',
},
});
export default CreateAccount;