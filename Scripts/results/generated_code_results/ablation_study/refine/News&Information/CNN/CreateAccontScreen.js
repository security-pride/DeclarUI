import React, { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



const CreateAccontScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);



  const togglePasswordVisibility = () => {

    setShowPassword(!showPassword);

  };



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>

          <Icon name="arrow-back" size={24} color="black" />

        </TouchableOpacity>

        <View style={styles.headerRight}>

          <Icon name="wifi" size={18} color="black" style={styles.icon} />

          <Text style={styles.time}>6:17</Text>

          <Image source={require('../assets/snack-icon.png')} style={styles.batteryIcon} />

        </View>

      </View>



      <View style={styles.content}>

        <Text style={styles.title}>Sign up for a CNN account</Text>

        <Text style={styles.signInPrompt}>

          Already have an account? <Text style={styles.signInLink}>Sign in</Text>

        </Text>



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

            secureTextEntry={!showPassword}

          />

          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>

            <Icon name={showPassword ? 'eye-off' : 'eye'} size={24} color="gray" />

          </TouchableOpacity>

        </View>



        <Text style={styles.passwordRequirements}>Your password needs to include:</Text>

        <View style={styles.requirementItem}>

          <Icon name="close-circle-outline" size={20} color="red" />

          <Text style={styles.requirementText}>At least 8 characters</Text>

        </View>

        <View style={styles.requirementItem}>

          <Icon name="close-circle-outline" size={20} color="red" />

          <Text style={styles.requirementText}>At least one letter</Text>

        </View>

        <View style={styles.requirementItem}>

          <Icon name="close-circle-outline" size={20} color="red" />

          <Text style={styles.requirementText}>At least one number</Text>

        </View>



        <Text style={styles.termsText}>

          By creating an account or signing in, you agree to the{' '}

          <Text style={styles.linkText}>Terms of Use</Text> and have read our{' '}

          <Text style={styles.linkText}>Privacy Policy</Text>. You understand CNN and its

          affiliates may use your email address to provide updates, ads, and offers. You can

          opt out via the <Text style={styles.linkText}>Privacy Policy</Text>.

        </Text>



        <TouchableOpacity style={styles.signUpButton}>

          <Text style={styles.signUpButtonText}>Sign up</Text>

        </TouchableOpacity>



        <Text style={styles.orText}>or</Text>



        <TouchableOpacity style={styles.googleButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.googleIcon} />

          <Text style={styles.googleButtonText}>Continue with Google</Text>

        </TouchableOpacity>

      </View>

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: 'white',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 10,

  },

  backButton: {

    padding: 5,

  },

  headerRight: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  icon: {

    marginRight: 5,

  },

  time: {

    marginRight: 5,

    fontSize: 14,

  },

  batteryIcon: {

    width: 20,

    height: 20,

  },

  content: {

    padding: 20,

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  signInPrompt: {

    marginBottom: 20,

  },

  signInLink: {

    color: 'blue',

    textDecorationLine: 'underline',

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

    marginBottom: 15,

  },

  passwordInput: {

    flex: 1,

    padding: 10,

  },

  eyeIcon: {

    padding: 10,

    justifyContent: 'center',

  },

  passwordRequirements: {

    marginBottom: 10,

    fontWeight: 'bold',

  },

  requirementItem: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 5,

  },

  requirementText: {

    marginLeft: 10,

  },

  termsText: {

    marginVertical: 20,

    fontSize: 12,

  },

  linkText: {

    color: 'blue',

    textDecorationLine: 'underline',

  },

  signUpButton: {

    backgroundColor: '#ccc',

    borderRadius: 5,

    padding: 15,

    alignItems: 'center',

    marginBottom: 15,

  },

  signUpButtonText: {

    color: 'white',

    fontWeight: 'bold',

  },

  orText: {

    textAlign: 'center',

    marginVertical: 10,

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



export default CreateAccontScreen;