import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const ReminderScreen = () => {
const [dosage, setDosage] = useState('');
const [time, setTime] = useState('00:27');
const [additionalTime, setAdditionalTime] = useState('');
const navigation = useNavigation();
const handleCancel = () => {
navigation.navigate('ResultDetail');
};
const handleDone = () => {
// Save reminder logic here
navigation.navigate('ResultDetail');
};
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={handleCancel}>
<Text style={styles.cancelButton}>Cancel</Text>
</TouchableOpacity>
<Text style={styles.title}>Edit Reminder</Text>
</View>
  <View style={styles.medicationInfo}>
    <Image source={{ uri: '../assets/pill_icon.png' }} style={styles.pillIcon} />
    <Text style={styles.medicationName}>Abilify</Text>
  </View>

  <View style={styles.formContainer}>
    <View style={styles.formItem}>
      <Image source={{ uri: '../assets/dosage_icon.png' }} style={styles.icon} />
      <Text style={styles.label}>Dosage</Text>
      <TouchableOpacity style={styles.selectButton} onPress={() => {}}>
        <Text style={styles.selectButtonText}>Select Dosage</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.formItem}>
      <Image source={{ uri: '../assets/clock_icon.png' }} style={styles.icon} />
      <Text style={styles.label}>Time</Text>
      <TextInput
        style={styles.timeInput}
        value={time}
        onChangeText={setTime}
        keyboardType="numeric"
      />
    </View>

    <View style={styles.formItem}>
      <Image source={{ uri: '../assets/clock_icon.png' }} style={styles.icon} />
      <Text style={styles.label}>Add Another Time</Text>
      <TextInput
        style={styles.timeInput}
        value={additionalTime}
        onChangeText={setAdditionalTime}
        placeholder="Enter Time"
        placeholderTextColor="#999"
      />
    </View>
  </View>

  <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
    <Text style={styles.doneButtonText}>Done</Text>
  </TouchableOpacity>
</ScrollView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f5f5f5',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 16,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
cancelButton: {
color: '#007AFF',
fontSize: 17,
},
title: {
fontSize: 17,
fontWeight: 'bold',
},
medicationInfo: {
flexDirection: 'row',
alignItems: 'center',
padding: 16,
backgroundColor: '#fff',
marginTop: 20,
},
pillIcon: {
width: 40,
height: 40,
marginRight: 16,
},
medicationName: {
fontSize: 20,
fontWeight: 'bold',
},
formContainer: {
backgroundColor: '#fff',
marginTop: 20,
},
formItem: {
flexDirection: 'row',
alignItems: 'center',
padding: 16,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
icon: {
width: 24,
height: 24,
marginRight: 16,
},
label: {
flex: 1,
fontSize: 17,
},
selectButton: {
padding: 8,
},
selectButtonText: {
color: '#007AFF',
fontSize: 17,
},
timeInput: {
fontSize: 17,
color: '#007AFF',
textAlign: 'right',
},
doneButton: {
backgroundColor: '#007AFF',
padding: 16,
borderRadius: 10,
marginHorizontal: 16,
marginTop: 20,
alignItems: 'center',
},
doneButtonText: {
color: '#fff',
fontSize: 17,
fontWeight: 'bold',
},
});
export default ReminderScreen;