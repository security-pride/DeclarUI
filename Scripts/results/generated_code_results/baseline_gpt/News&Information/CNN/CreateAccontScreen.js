import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CreateAccontScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Sign up for a CNN account</Text>
        <TouchableOpacity>
          <Text style={styles.signInText}>Already have an account? <Text style={styles.signInLink}>Sign in</Text></Text>
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
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
            <Icon name={showPassword ? "eye" : "eye-off"} size={24} color="grey" />
          </TouchableOpacity>
        </View>

        <View style={styles.passwordCriteria}>
          <Text style={styles.criteriaHeader}>Your password needs to include:</Text>
          <View style={styles.criteriaItem}>
            <Icon name="close-circle-outline" size={20} color="black" />
            <Text style={styles.criteriaText}>At least 8 characters</Text>
          </View>
          <View style={styles.criteriaItem}>
            <Icon name="close-circle-outline" size={20} color="black" />
            <Text style={styles.criteriaText}>At least one letter</Text>
          </View>
          <View style={styles.criteriaItem}>
            <Icon name="close-circle-outline" size={20} color="black" />
            <Text style={styles.criteriaText}>At least one number</Text>
          </View>
        </View>
      </View>

      <Text style={styles.termsText}>
        By creating an account or signing in, you agree to the <Text style={styles.link}>Terms of Use</Text> and have read our <Text style={styles.link}>Privacy Policy</Text>. You understand CNN and its affiliates may use your email address to provide updates, ads, and offers. You can opt out via the <Text style={styles.link}>Privacy Policy</Text>.
      </Text>

      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>Sign up</Text>
      </TouchableOpacity>

      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View>

      <TouchableOpacity style={styles.googleButton}>
        <Image source={require('../assets/snack-icon.png')} style={styles.googleIcon} />
        <Text style={styles.googleText}>Continue with Google</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  signInText: {
    fontSize: 14,
    color: 'grey',
  },
  signInLink: {
    color: 'blue',
  },
  form: {
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  passwordInput: {
    flex: 1,
  },
  passwordCriteria: {
    marginBottom: 16,
  },
  criteriaHeader: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  criteriaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  criteriaText: {
    marginLeft: 8,
  },
  termsText: {
    fontSize: 12,
    color: 'grey',
    marginVertical: 16,
  },
  link: {
    color: 'blue',
  },
  signUpButton: {
    backgroundColor: 'lightgrey',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  signUpButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'lightgrey',
  },
  orText: {
    marginHorizontal: 8,
    color: 'grey',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
    paddingVertical: 12,
    justifyContent: 'center',
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  googleText: {
    fontWeight: 'bold',
  },
});

export default CreateAccontScreen;