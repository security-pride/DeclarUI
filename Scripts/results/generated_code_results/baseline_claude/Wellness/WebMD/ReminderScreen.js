import React, { useState } from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const ReminderScreen = () => {

  const navigation = useNavigation();

  const [time, setTime] = useState('00:27');

  const [dosage, setDosage] = useState('');



  const handleCancel = () => {

    navigation.goBack();

  };



  const handleDone = () => {

    // Save reminder logic here

    navigation.goBack();

  };



  const handleSelectDosage = () => {

    // Open dosage selection modal or navigate to dosage selection screen

  };



  const handleAddAnotherTime = () => {

    // Logic to add another time input

  };



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={handleCancel}>

          <Text style={styles.cancelText}>Cancel</Text>

        </TouchableOpacity>

        <Text style={styles.headerTitle}>Edit Reminder</Text>

        <View style={styles.placeholder} />

      </View>



      <View style={styles.content}>

        <View style={styles.medicineInfo}>

          <View style={styles.pillIconContainer}>

            <Image source={{ uri: '../assets/pill-icon.png' }} style={styles.pillIcon} />

          </View>

          <Text style={styles.medicineName}>Abilify</Text>

        </View>



        <TouchableOpacity style={styles.row} onPress={handleSelectDosage}>

          <View style={styles.rowLeft}>

            <Image source={{ uri: '../assets/dosage-icon.png' }} style={styles.rowIcon} />

            <Text style={styles.rowLabel}>Dosage</Text>

          </View>

          <Text style={styles.rowRightText}>Select Dosage</Text>

        </TouchableOpacity>



        <View style={styles.row}>

          <View style={styles.rowLeft}>

            <Image source={{ uri: '../assets/clock-icon.png' }} style={styles.rowIcon} />

            <Text style={styles.rowLabel}>Time</Text>

          </View>

          <TextInput

            style={styles.timeInput}

            value={time}

            onChangeText={setTime}

            keyboardType="numeric"

          />

        </View>



        <TouchableOpacity style={styles.row} onPress={handleAddAnotherTime}>

          <View style={styles.rowLeft}>

            <Image source={{ uri: '../assets/clock-icon.png' }} style={styles.rowIcon} />

            <Text style={styles.rowLabel}>Add Another Time</Text>

          </View>

          <Text style={styles.rowRightText}>Enter Time</Text>

        </TouchableOpacity>

      </View>



      <TouchableOpacity style={styles.doneButton} onPress={handleDone}>

        <Text style={styles.doneButtonText}>Done</Text>

      </TouchableOpacity>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F2F2F7',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 16,

    backgroundColor: '#FFFFFF',

    borderBottomWidth: 1,

    borderBottomColor: '#E5E5EA',

  },

  cancelText: {

    color: '#007AFF',

    fontSize: 17,

  },

  headerTitle: {

    fontSize: 17,

    fontWeight: 'bold',

  },

  placeholder: {

    width: 50,

  },

  content: {

    backgroundColor: '#FFFFFF',

    marginTop: 20,

    borderTopWidth: 1,

    borderBottomWidth: 1,

    borderColor: '#E5E5EA',

  },

  medicineInfo: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#E5E5EA',

  },

  pillIconContainer: {

    width: 40,

    height: 40,

    backgroundColor: '#007AFF',

    borderRadius: 8,

    justifyContent: 'center',

    alignItems: 'center',

    marginRight: 12,

  },

  pillIcon: {

    width: 24,

    height: 24,

    tintColor: '#FFFFFF',

  },

  medicineName: {

    fontSize: 17,

    fontWeight: 'bold',

  },

  row: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#E5E5EA',

  },

  rowLeft: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  rowIcon: {

    width: 24,

    height: 24,

    marginRight: 12,

    tintColor: '#007AFF',

  },

  rowLabel: {

    fontSize: 17,

  },

  rowRightText: {

    fontSize: 17,

    color: '#8E8E93',

  },

  timeInput: {

    fontSize: 17,

    backgroundColor: '#F2F2F7',

    paddingVertical: 6,

    paddingHorizontal: 12,

    borderRadius: 8,

  },

  doneButton: {

    backgroundColor: '#FFFFFF',

    paddingVertical: 16,

    alignItems: 'center',

    position: 'absolute',

    bottom: 0,

    left: 0,

    right: 0,

    borderTopWidth: 1,

    borderTopColor: '#E5E5EA',

  },

  doneButtonText: {

    fontSize: 17,

    fontWeight: 'bold',

    color: '#007AFF',

  },

});



export default ReminderScreen;