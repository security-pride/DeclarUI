import React, { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



const LogInScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.time}>6:17</Text>

        <Icon name="cellular" size={16} color="black" />

        <Icon name="wifi" size={16} color="black" />

        <Icon name="battery-full" size={16} color="black" />

      </View>



      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>

        <Icon name="arrow-back" size={24} color="black" />

      </TouchableOpacity>



      <View style={styles.content}>

        <Text style={styles.title}>Sign in to your CNN account</Text>

        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>

          <Text style={styles.signUpText}>

            Don't have an account? <Text style={styles.link}>Sign up</Text>

          </Text>

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

          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>

            <Icon name={showPassword ? "eye-off-outline" : "eye-outline"} size={24} color="gray" />

          </TouchableOpacity>

        </View>



        <TouchableOpacity style={styles.signInButton}>

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



        <TouchableOpacity style={styles.googleButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.googleIcon} />

          <Text style={styles.googleButtonText}>Continue with Google</Text>

        </TouchableOpacity>



        <Text style={styles.termsText}>

          By creating an account or signing in, you agree to the <Text style={styles.link}>Terms of Use</Text> and have read our <Text style={styles.link}>Privacy Policy</Text>. You understand CNN and its affiliates may use your email address to provide updates, ads, and offers. You can opt out via the <Text style={styles.link}>Privacy Policy</Text>.

        </Text>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: 'white',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'flex-end',

    alignItems: 'center',

    paddingTop: 10,

    paddingRight: 10,

  },

  time: {

    marginRight: 5,

  },

  backButton: {

    position: 'absolute',

    top: 40,

    left: 10,

  },

  content: {

    flex: 1,

    paddingHorizontal: 20,

    paddingTop: 60,

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  signUpText: {

    marginBottom: 20,

  },

  input: {

    borderWidth: 1,

    borderColor: '#e0e0e0',

    borderRadius: 5,

    padding: 10,

    marginBottom: 10,

  },

  passwordContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    borderWidth: 1,

    borderColor: '#e0e0e0',

    borderRadius: 5,

    marginBottom: 20,

  },

  passwordInput: {

    flex: 1,

    padding: 10,

  },

  eyeIcon: {

    padding: 10,

  },

  signInButton: {

    backgroundColor: '#e0e0e0',

    padding: 15,

    borderRadius: 5,

    alignItems: 'center',

    marginBottom: 20,

  },

  signInButtonText: {

    color: 'white',

    fontWeight: 'bold',

  },

  forgotPasswordText: {

    textAlign: 'center',

    color: 'blue',

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

    backgroundColor: '#e0e0e0',

  },

  dividerText: {

    marginHorizontal: 10,

    color: 'gray',

  },

  googleButton: {

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',

    borderWidth: 1,

    borderColor: '#e0e0e0',

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

    fontWeight: 'bold',

  },

  termsText: {

    fontSize: 12,

    color: 'gray',

    textAlign: 'center',

  },

  link: {

    color: 'blue',

    textDecorationLine: 'underline',

  },

});



export default LogInScreen;