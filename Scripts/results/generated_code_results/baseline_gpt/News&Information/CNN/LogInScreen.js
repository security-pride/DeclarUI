import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const LogInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={28} />
      </TouchableOpacity>
      <Text style={styles.title}>Sign in to your CNN account</Text>
      <View style={styles.signUpContainer}>
        <Text style={styles.text}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
          <Text style={styles.linkText}>Sign up</Text>
        </TouchableOpacity>
      </View>
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
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={hidePassword}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
          <Icon name={hidePassword ? 'visibility-off' : 'visibility'} size={24} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInButtonText}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.linkText}>Forgot your password?</Text>
      </TouchableOpacity>
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.divider} />
      </View>
      <Text style={styles.policyText}>
        By creating an account or signing in, you agree to the{' '}
        <Text style={styles.linkText}>Terms of Use</Text> and have read our{' '}
        <Text style={styles.linkText}>Privacy Policy</Text>. You understand CNN and its affiliates may
        use your email address to provide updates, ads, and offers. You can opt out via the{' '}
        <Text style={styles.linkText}>Privacy Policy</Text>.
      </Text>
      <TouchableOpacity style={styles.googleButton}>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  signUpContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
  },
  linkText: {
    fontSize: 14,
    color: '#007aff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    flex: 1,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signInButton: {
    backgroundColor: '#888',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 20,
  },
  signInButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 14,
  },
  policyText: {
    fontSize: 12,
    color: '#666',
    marginVertical: 20,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleButtonText: {
    fontSize: 16,
    color: '#444',
  },
});

export default LogInScreen;