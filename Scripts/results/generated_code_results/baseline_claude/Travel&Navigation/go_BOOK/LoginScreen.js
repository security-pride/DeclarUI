import React, { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const LoginScreen = () => {

  const [email, setEmail] = useState('hello.doppixel@gmail.com');

  const [password, setPassword] = useState('');

  const [rememberMe, setRememberMe] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();



  const handleLogin = () => {

    // Implement login logic here

    console.log('Logging in with:', email, password);

  };



  const handleGoogleLogin = () => {

    // Implement Google login logic

    console.log('Logging in with Google');

  };



  const handleAppleLogin = () => {

    // Implement Apple login logic

    console.log('Logging in with Apple');

  };



  const handleFacebookLogin = () => {

    // Implement Facebook login logic

    console.log('Logging in with Facebook');

  };



  const navigateToSignUp = () => {

    navigation.navigate('CreateAccount');

  };



  const toggleShowPassword = () => {

    setShowPassword(!showPassword);

  };



  const toggleRememberMe = () => {

    setRememberMe(!rememberMe);

  };



  const handleForgotPassword = () => {

    // Implement forgot password logic

    console.log('Forgot password');

  };



  return (

    <SafeAreaView style={styles.container}>

      <KeyboardAvoidingView

        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}

        style={styles.keyboardAvoidingView}

      >

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>

          <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

        </TouchableOpacity>

        <Text style={styles.title}>Sign in</Text>

        <View style={styles.inputContainer}>

          <Text style={styles.label}>Email</Text>

          <TextInput

            style={styles.input}

            value={email}

            onChangeText={setEmail}

            keyboardType="email-address"

            autoCapitalize="none"

          />

        </View>

        <View style={styles.inputContainer}>

          <Text style={styles.label}>Password</Text>

          <View style={styles.passwordContainer}>

            <TextInput

              style={styles.passwordInput}

              value={password}

              onChangeText={setPassword}

              secureTextEntry={!showPassword}

            />

            <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIcon}>

              <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

            </TouchableOpacity>

          </View>

        </View>

        <View style={styles.rememberForgotContainer}>

          <TouchableOpacity style={styles.rememberMeContainer} onPress={toggleRememberMe}>

            <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>

              {rememberMe && <View style={styles.checkmark} />}

            </View>

            <Text style={styles.rememberMeText}>Remember me</Text>

          </TouchableOpacity>

          <TouchableOpacity onPress={handleForgotPassword}>

            <Text style={styles.forgotPasswordText}>Forget Password?</Text>

          </TouchableOpacity>

        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>

          <Text style={styles.loginButtonText}>Log in</Text>

        </TouchableOpacity>

        <Text style={styles.orText}>Or continue with</Text>

        <View style={styles.socialLoginContainer}>

          <TouchableOpacity style={styles.socialButton} onPress={handleGoogleLogin}>

            <Image source={require('../assets/snack-icon.png')} style={styles.socialIcon} />

            <Text style={styles.socialButtonText}>Continue with Google</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton} onPress={handleAppleLogin}>

            <Image source={require('../assets/snack-icon.png')} style={styles.socialIcon} />

            <Text style={styles.socialButtonText}>Continue with Apple</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton} onPress={handleFacebookLogin}>

            <Image source={require('../assets/snack-icon.png')} style={styles.socialIcon} />

            <Text style={styles.socialButtonText}>Continue with Facebook</Text>

          </TouchableOpacity>

        </View>

        <View style={styles.signUpContainer}>

          <Text style={styles.signUpText}>Don't have an account? </Text>

          <TouchableOpacity onPress={navigateToSignUp}>

            <Text style={styles.signUpLink}>Sign up</Text>

          </TouchableOpacity>

        </View>

      </KeyboardAvoidingView>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFFFFF',

  },

  keyboardAvoidingView: {

    flex: 1,

    padding: 20,

  },

  backButton: {

    position: 'absolute',

    top: 10,

    left: 10,

    padding: 10,

  },

  backIcon: {

    width: 20,

    height: 20,

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    marginTop: 40,

    marginBottom: 20,

  },

  inputContainer: {

    marginBottom: 20,

  },

  label: {

    fontSize: 16,

    marginBottom: 5,

    color: '#333',

  },

  input: {

    borderWidth: 1,

    borderColor: '#E0E0E0',

    borderRadius: 8,

    padding: 10,

    fontSize: 16,

  },

  passwordContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    borderWidth: 1,

    borderColor: '#E0E0E0',

    borderRadius: 8,

  },

  passwordInput: {

    flex: 1,

    padding: 10,

    fontSize: 16,

  },

  eyeIcon: {

    padding: 10,

  },

  icon: {

    width: 20,

    height: 20,

  },

  rememberForgotContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 20,

  },

  rememberMeContainer: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  checkbox: {

    width: 20,

    height: 20,

    borderWidth: 1,

    borderColor: '#000',

    borderRadius: 4,

    marginRight: 8,

    justifyContent: 'center',

    alignItems: 'center',

  },

  checkboxChecked: {

    backgroundColor: '#000',

  },

  checkmark: {

    width: 12,

    height: 12,

    backgroundColor: '#FFF',

  },

  rememberMeText: {

    fontSize: 14,

    color: '#333',

  },

  forgotPasswordText: {

    fontSize: 14,

    color: '#007AFF',

  },

  loginButton: {

    backgroundColor: '#333',

    borderRadius: 8,

    padding: 15,

    alignItems: 'center',

    marginBottom: 20,

  },

  loginButtonText: {

    color: '#FFF',

    fontSize: 16,

    fontWeight: 'bold',

  },

  orText: {

    textAlign: 'center',

    marginVertical: 20,

    color: '#666',

  },

  socialLoginContainer: {

    marginBottom: 20,

  },

  socialButton: {

    flexDirection: 'row',

    alignItems: 'center',

    borderWidth: 1,

    borderColor: '#E0E0E0',

    borderRadius: 8,

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

    color: '#333',

  },

  signUpContainer: {

    flexDirection: 'row',

    justifyContent: 'center',

  },

  signUpText: {

    fontSize: 14,

    color: '#666',

  },

  signUpLink: {

    fontSize: 14,

    color: '#007AFF',

    fontWeight: 'bold',

  },

});



export default LoginScreen;