import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SendParcelDeliveryMethod = () => {
const navigation = useNavigation();
const [deliveryMethod, setDeliveryMethod] = useState('');
const [recipientInfo, setRecipientInfo] = useState({
name: 'James May',
email: 'james.m',
phone: '',
address: '',
});
const handleDeliveryMethodSelect = (method) => {
setDeliveryMethod(method);
};
const handleRecipientInfoChange = (field, value) => {
setRecipientInfo({ ...recipientInfo, [field]: value });
};
const handleContinue = () => {
if (deliveryMethod && recipientInfo.name && recipientInfo.email && recipientInfo.phone && recipientInfo.address) {
navigation.navigate('SendParcel_Parcel_size');
} else {
// Show error message or highlight missing fields
}
};
return (
<ScrollView style={styles.container}>
<StatusBar barStyle="dark-content" />
<Text style={styles.header}>Send parcel</Text>
<Text style={styles.subHeader}>Delivery method</Text>
  <View style={styles.deliveryOptions}>
    <TouchableOpacity
      style={[styles.optionCard, deliveryMethod === 'parcel_center' && styles.selectedOption]}
      onPress={() => handleDeliveryMethodSelect('parcel_center')}
    >
      <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />
      <View>
        <Text style={styles.optionTitle}>From door to parcel center</Text>
        <Text style={styles.optionDuration}>1 - 2 days</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity
      style={[styles.optionCard, deliveryMethod === 'door_to_door' && styles.selectedOption]}
      onPress={() => handleDeliveryMethodSelect('door_to_door')}
    >
      <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />
      <View>
        <Text style={styles.optionTitle}>From door to door</Text>
        <Text style={styles.optionDuration}>2 - 3 days</Text>
      </View>
    </TouchableOpacity>
  </View>

  <Text style={styles.sectionTitle}>Recipient info</Text>
  
  <View style={styles.inputContainer}>
    <Text style={styles.label}>Name</Text>
    <TextInput
      style={styles.input}
      value={recipientInfo.name}
      onChangeText={(text) => handleRecipientInfoChange('name', text)}
    />
  </View>

  <View style={styles.inputContainer}>
    <Text style={styles.label}>Email</Text>
    <TextInput
      style={styles.input}
      value={recipientInfo.email}
      onChangeText={(text) => handleRecipientInfoChange('email', text)}
      keyboardType="email-address"
    />
  </View>

  <View style={styles.inputContainer}>
    <Text style={styles.label}>Phone number</Text>
    <TextInput
      style={styles.input}
      value={recipientInfo.phone}
      onChangeText={(text) => handleRecipientInfoChange('phone', text)}
      keyboardType="phone-pad"
    />
  </View>

  <View style={styles.inputContainer}>
    <Text style={styles.label}>Address</Text>
    <TextInput
      style={styles.input}
      value={recipientInfo.address}
      onChangeText={(text) => handleRecipientInfoChange('address', text)}
      multiline
    />
  </View>

  <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
    <Text style={styles.continueButtonText}>Continue</Text>
  </TouchableOpacity>

  <View style={styles.navbar}>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home_Top_drawer_open')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>My parcels</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
      <Image source={require('../assets/snack-icon.png')} style={[styles.navIcon, styles.activeNavIcon]} />
      <Text style={[styles.navText, styles.activeNavText]}>Send parcel</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Parcel_center')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Parcel center</Text>
    </TouchableOpacity>
  </View>
</ScrollView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#FFFFFF',
padding: 16,
},
header: {
fontSize: 28,
fontWeight: 'bold',
marginBottom: 16,
},
subHeader: {
fontSize: 20,
fontWeight: 'bold',
marginBottom: 16,
},
deliveryOptions: {
marginBottom: 24,
},
optionCard: {
flexDirection: 'row',
alignItems: 'center',
padding: 16,
borderRadius: 8,
borderWidth: 1,
borderColor: '#E0E0E0',
marginBottom: 16,
},
selectedOption: {
borderColor: '#FFC300',
backgroundColor: '#FFF9E6',
},
optionIcon: {
width: 40,
height: 40,
marginRight: 16,
},
optionTitle: {
fontSize: 16,
fontWeight: 'bold',
},
optionDuration: {
fontSize: 14,
color: '#888',
},
sectionTitle: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 16,
},
inputContainer: {
marginBottom: 16,
},
label: {
fontSize: 14,
marginBottom: 8,
},
input: {
borderWidth: 1,
borderColor: '#E0E0E0',
borderRadius: 8,
padding: 12,
fontSize: 16,
},
continueButton: {
backgroundColor: '#000000',
borderRadius: 8,
padding: 16,
alignItems: 'center',
marginTop: 24,
marginBottom: 32,
},
continueButtonText: {
color: '#FFFFFF',
fontSize: 16,
fontWeight: 'bold',
},
navbar: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#E0E0E0',
paddingVertical: 8,
marginBottom: 20,
},
navItem: {
alignItems: 'center',
},
navIcon: {
width: 24,
height: 24,
},
navText: {
fontSize: 12,
marginTop: 4,
},
activeNavItem: {
opacity: 1,
},
activeNavIcon: {
tintColor: '#000',
},
activeNavText: {
color: '#000',
},
});
export default SendParcelDeliveryMethod;