import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Image } from 'react-native';

const AddTaskScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello Liana</Text>
        <Text style={styles.title}>Add a task</Text>
        <Image style={styles.profilePicture} source={require('../assets/snack-icon.png')} />
      </View>
      <Text style={styles.categoryLabel}>Category</Text>
      <View style={styles.categories}>
        <TouchableOpacity style={styles.categoryButton}><Text style={styles.categoryText}>Class</Text></TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}><Text style={styles.categoryText}>Exam</Text></TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}><Text style={styles.categoryText}>Lab</Text></TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}><Text style={styles.categoryText}>Assignment</Text></TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}><Text style={styles.categoryText}>Presentation</Text></TouchableOpacity>
      </View>
      <View style={styles.form}>
        <Text style={styles.inputLabel}>Biology</Text>
        <TextInput style={styles.inputField} placeholder="Topic / Chapter Name" />
        <View style={styles.datePickerSection}>
          <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
          <Text style={styles.dateText}>Fri 25, September, 2020</Text>
        </View>
        <View style={styles.timePickerSection}>
          <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
          <Text style={styles.timeText}>09:30 AM</Text>
        </View>
      </View>
      <Button title="Add Task" onPress={() => { /* placeholder for add task logic */ }} />
      <View style={styles.bottomNav}>
        <Button title="Home" onPress={() => { /* navigation logic */ }} />
        <Button title="Tasks" onPress={() => { /* navigation logic */ }} />
        <Button title="Classroom" onPress={() => { /* navigation logic */ }} />
        <Button title="Chat" onPress={() => { /* navigation logic */ }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  greeting: {
    fontSize: 16,
    color: '#000',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  categoryLabel: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  categoryButton: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
    marginTop: 10,
  },
  categoryText: {
    fontSize: 14,
    color: '#000',
  },
  form: {
    marginTop: 20,
  },
  inputLabel: {
    backgroundColor: '#f4f4f4',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  inputField: {
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  datePickerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  dateText: {
    fontSize: 14,
    color: '#000',
  },
  timePickerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  timeText: {
    fontSize: 14,
    color: '#000',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  }
});

export default AddTaskScreen;