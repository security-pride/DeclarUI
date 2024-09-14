import React, { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const LogInScreen = () => {

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();



  const handleSignIn = () => {

    // Implement sign in logic here

    console.log('Sign in with:', email, password);

  };



  const handleGoogleSignIn = () => {

    // Implement Google sign in logic here

    console.log('Sign in with Google');

  };



  return (

    <View style={styles.container}>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>

        <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

      </TouchableOpacity>

      <Text style={styles.title}>Sign in to your CNN account</Text>

      <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>

        <Text style={styles.signupText}>Don't have an account? <Text style={styles.signupLink}>Sign up</Text></Text>

      </TouchableOpacity>

      <View style={styles.inputContainer}>

        <TextInput

          style={styles.input}

          placeholder="Email address"

          value={email}

          onChangeText={setEmail}

          keyboardType="email-address"

          autoCapitalize="none"

        />

      </View>

      <View style={styles.inputContainer}>

        <TextInput

          style={styles.input}

          placeholder="Password"

          value={password}

          onChangeText={setPassword}

          secureTextEntry={!showPassword}

        />

        <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>

          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

        </TouchableOpacity>

      </View>

      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>

        <Text style={styles.signInButtonText}>Sign in</Text>

      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>

        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>

      </TouchableOpacity>

      <View style={styles.divider}>

        <View style={styles.dividerLine} />

        <Text style={styles.dividerText}>or</Text>

        <View style={styles.dividerLine} />

      </View>

      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignIn}>

        <Image source={require('../assets/snack-icon.png')} style={styles.googleIcon} />

        <Text style={styles.googleButtonText}>Continue with Google</Text>

      </TouchableOpacity>

      <Text style={styles.termsText}>

        By creating an account or signing in, you agree to the <Text style={styles.link}>Terms of Use</Text> and have read our <Text style={styles.link}>Privacy Policy</Text>. You understand CNN and its affiliates may use your email address to provide updates, ads, and offers. You can opt out via the <Text style={styles.link}>Privacy Policy</Text>.

      </Text>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    padding: 20,

    backgroundColor: '#fff',

  },

  backButton: {

    position: 'absolute',

    top: 40,

    left: 20,

  },

  backIcon: {

    width: 24,

    height: 24,

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    marginTop: 60,

    marginBottom: 10,

  },

  signupText: {

    marginBottom: 20,

  },

  signupLink: {

    color: 'blue',

    textDecorationLine: 'underline',

  },

  inputContainer: {

    marginBottom: 20,

    position: 'relative',

  },

  input: {

    borderWidth: 1,

    borderColor: '#ccc',

    borderRadius: 5,

    padding: 10,

    fontSize: 16,

  },

  eyeIcon: {

    position: 'absolute',

    right: 10,

    top: 12,

  },

  icon: {

    width: 24,

    height: 24,

  },

  signInButton: {

    backgroundColor: '#ccc',

    padding: 15,

    borderRadius: 5,

    alignItems: 'center',

    marginBottom: 20,

  },

  signInButtonText: {

    color: '#fff',

    fontSize: 16,

    fontWeight: 'bold',

  },

  forgotPasswordText: {

    color: 'blue',

    textAlign: 'center',

    marginBottom: 20,

  },

  divider: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 20,

  },

  dividerLine: {

    flex: 1,

    height: 1,

    backgroundColor: '#ccc',

  },

  dividerText: {

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

    padding: 10,

    marginBottom: 20,

  },

  googleIcon: {

    width: 24,

    height: 24,

    marginRight: 10,

  },

  googleButtonText: {

    fontSize: 16,

  },

  termsText: {

    fontSize: 12,

    color: '#888',

    textAlign: 'center',

  },

  link: {

    color: 'blue',

    textDecorationLine: 'underline',

  },

});



export default LogInScreen;