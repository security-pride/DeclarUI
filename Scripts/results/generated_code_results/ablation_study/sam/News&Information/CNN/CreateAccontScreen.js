import React, { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';



const CreateAccontScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');



  const handleSignUp = () => {

    // Implement sign up logic here

    console.log('Sign up with:', email, password);

  };



  const handleGoogleSignUp = () => {

    // Implement Google sign up logic here

    console.log('Sign up with Google');

  };



  return (

    <View style={styles.container}>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Settings')}>

        <Icon name="arrow-left" size={24} color="#000" />

      </TouchableOpacity>

      <Text style={styles.title}>Sign up for a CNN account</Text>

      <Text style={styles.subtitle}>Already have an account? <Text style={styles.link} onPress={() => navigation.navigate('LogIn')}>Sign in</Text></Text>



      <TextInput

        style={styles.input}

        placeholder="Email address"

        value={email}

        onChangeText={setEmail}

        keyboardType="email-address"

        autoCapitalize="none"

      />



      <View style={styles.passwordContainer}>

        <TextInput

          style={styles.passwordInput}

          placeholder="Password"

          value={password}

          onChangeText={setPassword}

          secureTextEntry

        />

        <TouchableOpacity style={styles.eyeIcon}>

          <Icon name="eye-slash" size={20} color="#000" />

        </TouchableOpacity>

      </View>



      <View style={styles.passwordRequirements}>

        <Text style={styles.requirementText}>

          <Icon name="times-circle" size={16} color="#000" /> At least 8 characters

        </Text>

        <Text style={styles.requirementText}>

          <Icon name="times-circle" size={16} color="#000" /> At least one letter

        </Text>

        <Text style={styles.requirementText}>

          <Icon name="times-circle" size={16} color="#000" /> At least one number

        </Text>

      </View>



      <Text style={styles.termsText}>

        By creating an account or signing in, you agree to the <Text style={styles.link}>Terms of Use</Text> and have read our <Text style={styles.link}>Privacy Policy</Text>. You understand CNN and its affiliates may use your email address to provide updates, ads, and offers. You can opt out via the <Text style={styles.link}>Privacy Policy</Text>.

      </Text>



      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>

        <Text style={styles.signUpButtonText}>Sign up</Text>

      </TouchableOpacity>



      <View style={styles.orContainer}>

        <View style={styles.orLine} />

        <Text style={styles.orText}>or</Text>

        <View style={styles.orLine} />

      </View>



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

    backgroundColor: '#fff',

  },

  backButton: {

    position: 'absolute',

    top: 20,

    left: 20,

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    marginTop: 60,

    marginBottom: 10,

  },

  subtitle: {

    fontSize: 16,

    marginBottom: 20,

  },

  input: {

    height: 50,

    borderColor: '#ccc',

    borderWidth: 1,

    borderRadius: 5,

    paddingHorizontal: 10,

    marginBottom: 15,

  },

  passwordContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    borderColor: '#ccc',

    borderWidth: 1,

    borderRadius: 5,

    marginBottom: 15,

  },

  passwordInput: {

    flex: 1,

    height: 50,

    paddingHorizontal: 10,

  },

  eyeIcon: {

    padding: 10,

  },

  passwordRequirements: {

    marginBottom: 15,

  },

  requirementText: {

    fontSize: 14,

    marginBottom: 5,

  },

  termsText: {

    fontSize: 12,

    marginBottom: 20,

  },

  link: {

    color: 'blue',

    textDecorationLine: 'underline',

  },

  signUpButton: {

    backgroundColor: '#ccc',

    height: 50,

    borderRadius: 5,

    justifyContent: 'center',

    alignItems: 'center',

    marginBottom: 20,

  },

  signUpButtonText: {

    color: '#fff',

    fontSize: 18,

    fontWeight: 'bold',

  },

  orContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 20,

  },

  orLine: {

    flex: 1,

    height: 1,

    backgroundColor: '#ccc',

  },

  orText: {

    marginHorizontal: 10,

    color: '#999',

  },

  googleButton: {

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',

    height: 50,

    borderWidth: 1,

    borderColor: '#ccc',

    borderRadius: 5,

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



export default CreateAccontScreen;