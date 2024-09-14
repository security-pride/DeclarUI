import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Switch } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';

const AddTaskScreen = () => {
  const [isAlertOn, setIsAlertOn] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
        <Text style={styles.headerText}>Add New Task</Text>
      </View>
      <View style={styles.calendar}>
        <FontAwesome name="angle-left" size={24} color="#fff" />
        <Text style={styles.calendarText}>February 2022</Text>
        <FontAwesome name="angle-right" size={24} color="#fff" />
      </View>
      <View style={styles.inputSection}>
        <Text style={styles.label}>Task title</Text>
        <TextInput style={styles.input} placeholder="Website redesign" />
      </View>
      <View style={styles.taskTypeSection}>
        <Text style={styles.label}>Task type</Text>
        <View style={styles.taskTypeButtons}>
          <TouchableOpacity style={styles.typeButtonActive}>
            <Text style={styles.typeButtonTextActive}>Important</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.typeButtonInactive}>
            <Text style={styles.typeButtonTextInactive}>Personal</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.datetimeSection}>
        <Text style={styles.label}>Choose date & time</Text>
        <View style={styles.datetimeInputs}>
          <TextInput style={styles.input} placeholder="18-02-2022" />
          <TextInput style={styles.input} placeholder="9:00 AM-12:00 PM" />
        </View>
      </View>
      <View style={styles.alertSection}>
        <Text style={styles.label}>Get alert for this task</Text>
        <Switch
          value={isAlertOn}
          onValueChange={setIsAlertOn}
          trackColor={{ false: '#767577', true: '#f76a6a' }}
          thumbColor={isAlertOn ? '#f76a6a' : '#f4f3f4'}
        />
      </View>
      <TouchableOpacity style={styles.doneButton}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  calendar: {
    backgroundColor: '#00c2e6',
    borderRadius: 10,
    padding: 20,
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  calendarText: {
    color: '#fff',
    fontSize: 18,
  },
  inputSection: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#dedede',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  taskTypeSection: {
    marginVertical: 10,
  },
  taskTypeButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  typeButtonActive: {
    backgroundColor: '#f76a6a',
    borderRadius: 5,
    padding: 10,
    width: '48%',
  },
  typeButtonTextActive: {
    color: '#fff',
    textAlign: 'center',
  },
  typeButtonInactive: {
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    padding: 10,
    width: '48%',
    borderWidth: 1,
    borderColor: '#dedede',
  },
  typeButtonTextInactive: {
    color: '#000',
    textAlign: 'center',
  },
  datetimeSection: {
    marginVertical: 10,
  },
  datetimeInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  alertSection: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  doneButton: {
    backgroundColor: '#00c2e6',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  doneButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AddTaskScreen;