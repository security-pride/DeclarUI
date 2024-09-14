import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, Switch, ImageBackground, TouchableOpacity, Image } from 'react-native';

const AddTaskScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground 
          source={require('../assets/snack-icon.png')}
          style={styles.profileImage}
        />
        <Text style={styles.headerTitle}>Add New Task</Text>
      </View>
      <View style={styles.calendarContainer}>
        <Button title="<" /> 
        <Text style={styles.monthText}>February 2022</Text>
        <Button title=">" />
        <View style={styles.calendarDays}>
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(day => (
            <Text key={day}>{day}</Text>
          ))}
        </View>
        <View style={styles.calendarDates}>
          {[14, 15, 16, 17, 18, 19, 20].map(date => (
            <Text key={date} style={date === 18 ? styles.selectedDate : null}>{date}</Text>
          ))}
        </View>
      </View>
      <Text style={styles.label}>Task title</Text>
      <TextInput style={styles.input} value="Website redesign" />
      <Text style={styles.label}>Task type</Text>
      <View style={styles.buttonContainer}>
        <Button title="Important" color="#ff6347" />
        <Button title="Personal" />
      </View>
      <Text style={styles.label}>Choose date & time</Text>
      <View style={styles.datetimeContainer}>
        <TextInput style={styles.dateInput} value="18-02-2022" />
        <TextInput style={styles.timeInput} value="9:00 AM-12:00 PM" />
      </View>
      <Text style={styles.label}>Get alert for this task</Text>
      <Switch value={true} />
      <Button title="Done" color="#00bfff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  calendarContainer: {
    padding: 10,
    backgroundColor: '#00bfff',
    borderRadius: 10,
    marginBottom: 20,
  },
  monthText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  calendarDays: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  calendarDates: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selectedDate: {
    backgroundColor: '#fff',
    color: '#00bfff',
    borderRadius: 15,
    padding: 5,
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  datetimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  dateInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 5,
  },
  timeInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginLeft: 5,
  },
});

export default AddTaskScreen;