import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const LogIn = () => {
const [phoneNumber, setPhoneNumber] = useState('');
const [countryCode, setCountryCode] = useState('+1');
const navigation = useNavigation();
const handleContinue = () => {
// Handle login logic here
// For now, we'll just navigate back to Settings
navigation.navigate('Settings');
};
const renderKeypadButton = (number, letters) => (
<TouchableOpacity
style={styles.keypadButton}
onPress={() => setPhoneNumber(phoneNumber + number)}
>
<Text style={styles.keypadNumber}>{number}</Text>
{letters && <Text style={styles.keypadLetters}>{letters}</Text>}
</TouchableOpacity>
);
return (
<View style={styles.container}>
<StatusBar barStyle="dark-content" />
<TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Settings')}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.backIcon} />
</TouchableOpacity>
  <Text style={styles.title}>BREAKING</Text>
  <Text style={styles.subtitle}>By SAFE APPS</Text>
  
  <Text style={styles.inputLabel}>请输入您的电话号码</Text>
  
  <View style={styles.phoneInputContainer}>
    <TouchableOpacity style={styles.countryCodeButton}>
      <Text style={styles.countryCodeText}>{countryCode}</Text>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.dropdownIcon} />
    </TouchableOpacity>
    <TextInput
      style={styles.phoneInput}
      value={phoneNumber}
      onChangeText={setPhoneNumber}
      placeholder="输入电话号码"
      keyboardType="phone-pad"
    />
  </View>
  
  <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
    <Text style={styles.continueButtonText}>继续</Text>
  </TouchableOpacity>
  
  <View style={styles.keypad}>
    {renderKeypadButton('1')}
    {renderKeypadButton('2', 'ABC')}
    {renderKeypadButton('3', 'DEF')}
    {renderKeypadButton('4', 'GHI')}
    {renderKeypadButton('5', 'JKL')}
    {renderKeypadButton('6', 'MNO')}
    {renderKeypadButton('7', 'PQRS')}
    {renderKeypadButton('8', 'TUV')}
    {renderKeypadButton('9', 'WXYZ')}
    <TouchableOpacity style={styles.keypadButton}>
      <Text style={styles.keypadNumber}>*</Text>
    </TouchableOpacity>
    {renderKeypadButton('0', '+')}
    <TouchableOpacity style={styles.keypadButton}>
      <Text style={styles.keypadNumber}>#</Text>
    </TouchableOpacity>
  </View>
  
  <View style={styles.keyboardExtraRow}>
    <TouchableOpacity style={styles.keyboardExtraButton}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.keyboardIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.keyboardExtraButton}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.placeholderIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.keyboardExtraButton} onPress={() => setPhoneNumber(phoneNumber.slice(0, -1))}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.backspaceIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.keyboardExtraButton}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.checkIcon} />
    </TouchableOpacity>
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#FFFFFF',
padding: 20,
},
backButton: {
position: 'absolute',
top: 40,
left: 20,
},
backIcon: {
width: 24,
height: 24,
},
title: {
fontSize: 32,
fontWeight: 'bold',
color: 'red',
textAlign: 'center',
marginTop: 60,
},
subtitle: {
fontSize: 18,
color: 'red',
textAlign: 'center',
marginBottom: 40,
},
inputLabel: {
fontSize: 16,
marginBottom: 10,
},
phoneInputContainer: {
flexDirection: 'row',
marginBottom: 20,
},
countryCodeButton: {
flexDirection: 'row',
alignItems: 'center',
borderWidth: 1,
borderColor: '#CCCCCC',
borderRadius: 5,
paddingHorizontal: 10,
marginRight: 10,
},
countryCodeText: {
fontSize: 16,
marginRight: 5,
},
dropdownIcon: {
width: 12,
height: 12,
},
phoneInput: {
flex: 1,
borderWidth: 1,
borderColor: '#CCCCCC',
borderRadius: 5,
paddingHorizontal: 10,
fontSize: 16,
},
continueButton: {
backgroundColor: 'red',
borderRadius: 5,
paddingVertical: 12,
alignItems: 'center',
marginBottom: 20,
},
continueButtonText: {
color: '#FFFFFF',
fontSize: 18,
fontWeight: 'bold',
},
keypad: {
flexDirection: 'row',
flexWrap: 'wrap',
justifyContent: 'space-between',
},
keypadButton: {
width: '30%',
aspectRatio: 2,
justifyContent: 'center',
alignItems: 'center',
marginBottom: 10,
backgroundColor: '#F0F0F0',
borderRadius: 5,
},
keypadNumber: {
fontSize: 24,
fontWeight: 'bold',
},
keypadLetters: {
fontSize: 12,
},
keyboardExtraRow: {
flexDirection: 'row',
justifyContent: 'space-between',
marginTop: 10,
},
keyboardExtraButton: {
width: '22%',
aspectRatio: 2,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#F0F0F0',
borderRadius: 5,
},
keyboardIcon: {
width: 24,
height: 24,
},
placeholderIcon: {
width: 24,
height: 24,
},
backspaceIcon: {
width: 24,
height: 24,
},
checkIcon: {
width: 24,
height: 24,
},
});
export default LogIn;