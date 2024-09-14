import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const LogInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Back Icon */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#000" style={styles.backIcon} />
      </TouchableOpacity>

      {/* Logo and Branding */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>BREAKING</Text>
        <Text style={styles.subText}>By SAFE APPS</Text>
      </View>

      {/* Input Prompt */}
      <Text style={styles.promptText}>请输入您的电话号码</Text>

      {/* Phone Input */}
      <View style={styles.phoneInputContainer}>
        <Text style={styles.countryCode}>+1</Text>
        <TextInput 
          style={styles.phoneNumberInput}
          placeholder="输入电话号码"
          keyboardType="phone-pad"
          placeholderTextColor="#aaa"
        />
        <Icon name="arrow-drop-down" size={24} color="#aaa" style={styles.dropdownIcon} />
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>继续</Text>
      </TouchableOpacity>

      {/* Snack Icon (Assumed Position) */}
      <Image 
        source={require('../assets/snack-icon.png')} 
        style={styles.snackIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  backIcon: {
    marginTop: 8,
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logoText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FF0000',
  },
  subText: {
    color: '#FF0000',
    backgroundColor: '#FFC0C0',
    padding: 4,
    borderRadius: 8,
    marginTop: 8,
  },
  promptText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginVertical: 20,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 16,
    borderRadius: 8,
    marginVertical: 20,
  },
  countryCode: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  phoneNumberInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#333',
  },
  dropdownIcon: {
    marginLeft: 8,
  },
  continueButton: {
    backgroundColor: '#FF0000',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginVertical: 20,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  snackIcon: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 30,
  },
});

export default LogInScreen;