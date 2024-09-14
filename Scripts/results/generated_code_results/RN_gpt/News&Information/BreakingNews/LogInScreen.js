import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';

const LogInScreen = ({ navigation }) => {
  const handleContinue = () => {
    // Implement redirection logic here
    navigation.navigate('Settings');
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>BREAKING</Text>
        <Text style={styles.subtitle}>By SAFE APPS</Text>
      </View>

      {/* Phone Number Input Section */}
      <View style={styles.inputSection}>
        <Text style={styles.prompt}>请输入您的电话号码</Text>
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.countryCode}>
            <Text style={styles.countryCodeText}>+1</Text>
            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          </TouchableOpacity>
          <TextInput style={styles.phoneNumberInput} placeholder="输入电话号码" />
        </View>
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueButtonText}>继续</Text>
        </TouchableOpacity>
      </View>

      {/* Custom Keyboard */}
      <View style={styles.keyboard}>
        {[
          ['1', '2 ABC', '3 DEF', '-'],
          ['4 GHI', '5 JKL', '6 MNO', ' '],
          ['7 PQRS', '8 TUV', '9 WXYZ', require('../assets/snack-icon.png')],
          ['*#', '0 +', '.', require('../assets/snack-icon.png')],
        ].map((row, rowIndex) => (
          <View key={rowIndex} style={styles.keyboardRow}>
            {row.map((key, keyIndex) => (
              <TouchableOpacity key={keyIndex} style={styles.key}>
                {typeof key === 'string' ? (
                  <Text style={styles.keyText}>{key}</Text>
                ) : (
                  <Image source={key} style={styles.keyIcon} />
                )}
              </TouchableOpacity>
            ))}
          </View>
        ))}
        <TouchableOpacity style={styles.toggleKeyboardButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.toggleKeyboardIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    paddingTop: 20,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 20,
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 26,
    color: 'red',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#333',
  },
  inputSection: {
    padding: 20,
    alignItems: 'center',
  },
  prompt: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 10,
  },
  countryCode: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  countryCodeText: {
    fontSize: 18,
  },
  phoneNumberInput: {
    fontSize: 18,
    flex: 1,
  },
  continueButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  keyboard: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#f5f5f5',
    paddingTop: 10,
    paddingBottom: 20,
  },
  keyboardRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  key: {
    padding: 5,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1,
  },
  keyText: {
    fontSize: 18,
  },
  keyIcon: {
    width: 24,
    height: 24,
  },
  toggleKeyboardButton: {
    alignItems: 'center',
    marginTop: 10,
  },
  toggleKeyboardIcon: {
    width: 24,
    height: 24,
  },
});

export default LogInScreen;