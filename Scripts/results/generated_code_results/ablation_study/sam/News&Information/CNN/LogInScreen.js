import React, { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const LogInScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);



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

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Settings')}>

        <Icon name="arrow-back" size={24} color="#000" />

      </TouchableOpacity>

      <Text style={styles.title}>Sign in to your CNN account</Text>

      <TouchableOpacity onPress={() => navigation.navigate('CreateAccont')}>

        <Text style={styles.signUpText}>Don't have an account? <Text style={styles.link}>Sign up</Text></Text>

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

          <Icon name={showPassword ? "visibility" : "visibility-off"} size={24} color="#000" />

        </TouchableOpacity>

      </View>

      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>

        <Text style={styles.signInButtonText}>Sign in</Text>

      </TouchableOpacity>

      <TouchableOpacity>

        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>

      </TouchableOpacity>

      <View style={styles.divider}>

        <View style={styles.dividerLine} />

        <Text style={styles.dividerText}>or</Text>

        <View style={styles.dividerLine} />

      </View>

      <Text style={styles.termsText}>

        By creating an account or signing in, you agree to the <Text style={styles.link}>Terms of Use</Text> and have read our <Text style={styles.link}>Privacy Policy</Text>. You understand CNN and its affiliates may use your email address to provide updates, ads, and offers. You can opt out via the <Text style={styles.link}>Privacy Policy</Text>.

      </Text>

      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignIn}>

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

    backgroundColor: '#fff',

  },

  backButton: {

    marginBottom: 20,

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  signUpText: {

    marginBottom: 20,

  },

  inputContainer: {

    marginBottom: 15,

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

  signInButton: {

    backgroundColor: '#ccc',

    padding: 15,

    borderRadius: 5,

    alignItems: 'center',

    marginBottom: 15,

  },

  signInButtonText: {

    color: '#fff',

    fontSize: 16,

    fontWeight: 'bold',

  },

  forgotPasswordText: {

    textAlign: 'center',

    color: '#000',

    textDecorationLine: 'underline',

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

  termsText: {

    marginBottom: 20,

    fontSize: 12,

    color: '#888',

  },

  link: {

    color: '#000',

    textDecorationLine: 'underline',

  },

  googleButton: {

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',

    borderWidth: 1,

    borderColor: '#ccc',

    borderRadius: 5,

    padding: 10,

  },

  googleIcon: {

    width: 24,

    height: 24,

    marginRight: 10,

  },

  googleButtonText: {

    fontSize: 16,

  },

});



export default LogInScreen;