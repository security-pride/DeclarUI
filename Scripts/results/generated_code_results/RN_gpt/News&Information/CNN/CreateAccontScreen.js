import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CreateAccontScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
      <Text style={styles.title}>Sign up for a CNN account</Text>
      <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
        <Text style={styles.signInPrompt}>Already have an account? <Text style={styles.signInText}>Sign in</Text></Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Email address"
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
          <Image source={require('../assets/snack-icon.png')} style={styles.eyeIcon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.passwordHeading}>Your password needs to include:</Text>
      <View style={styles.requirement}>
        <Image source={require('../assets/snack-icon.png')} style={styles.requirementIcon} />
        <Text>At least 8 characters</Text>
      </View>
      <View style={styles.requirement}>
        <Image source={require('../assets/snack-icon.png')} style={styles.requirementIcon} />
        <Text>At least one letter</Text>
      </View>
      <View style={styles.requirement}>
        <Image source={require('../assets/snack-icon.png')} style={styles.requirementIcon} />
        <Text>At least one number</Text>
      </View>

      <Text style={styles.privacyPolicy}>
        By creating an account or signing in, you agree to the <Text style={styles.linkText}>Terms of Use</Text> and have read our <Text style={styles.linkText}>Privacy Policy</Text>. 
      </Text>

      <Button title="Sign up" onPress={() => {}} style={styles.signupButton} />
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View>

      <Button title="Continue with Google" onPress={() => {}} style={styles.googleButton} />

      <View style={styles.redirectContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.redirectText}>Go to Settings</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  backIcon: {
    width: 24,
    height: 24,
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  signInPrompt: {
    fontSize: 16,
    marginBottom: 20,
  },
  signInText: {
    color: '#007AFF',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  eyeIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  passwordHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  requirement: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  requirementIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  privacyPolicy: {
    fontSize: 14,
    marginVertical: 20,
  },
  linkText: {
    color: '#007AFF',
  },
  signupButton: {
    backgroundColor: '#ccc',
    paddingVertical: 15,
    borderRadius: 5,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
  },
  googleButton: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  redirectContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  redirectText: {
    fontSize: 16,
    color: '#007AFF',
  },
});

export default CreateAccontScreen;