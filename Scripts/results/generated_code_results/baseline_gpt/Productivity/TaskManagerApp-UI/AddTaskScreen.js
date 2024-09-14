import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const AddTaskScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back-outline" size={30} color="#fff" />
        <Text style={styles.headerText}>Add Task</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.label}>Task Name</Text>
        <TextInput style={styles.input} placeholder="Enter task name" />
      </View>
      
      <View style={styles.section}>
        <Text style={styles.label}>Team Member</Text>
        <View style={styles.teamMembers}>
          <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
          <Text>John</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
          <Text>Ranak</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.avatarActive} />
          <FontAwesome name="check-circle" size={16} color="#fff" style={styles.checkIcon} />
          <Text>Parkao</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
          <Text>Mahmud</Text>
          <TouchableOpacity style={styles.addMember}>
            <FontAwesome name="plus" size={20} color="#6e6be8" />
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.label}>Date</Text>
        <View style={styles.datePicker}>
          <Text>May 01, 2020</Text>
          <FontAwesome name="calendar" size={20} color="#6e6be8" />
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.label}>Start Time</Text>
        <View style={styles.timePicker}>
          <Text>10:00 AM</Text>
          <FontAwesome name="caret-down" size={20} color="#6e6be8" />
        </View>
        <Text style={styles.label}>End Time</Text>
        <View style={styles.timePicker}>
          <Text>01:00 PM</Text>
          <FontAwesome name="caret-down" size={20} color="#6e6be8" />
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.descriptionInput]}
          placeholder="Enter description"
          multiline
        />
      </View>
      
      <View style={styles.section}>
        <Text style={styles.label}>Board</Text>
        <View style={styles.boardOptions}>
          <TouchableOpacity style={styles.boardButtonUrgent}>
            <Text style={styles.boardButtonText}>URGENT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boardButtonRunning}>
            <Text style={styles.boardButtonText}>RUNNING</Text>
            <FontAwesome name="check-circle" size={16} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.boardButton}>
            <Text style={styles.boardButtonText}>ONGOING</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addBoard}>
            <FontAwesome name="plus" size={20} color="#6e6be8" />
          </TouchableOpacity>
        </View>
      </View>
      
      <TouchableOpacity style={styles.doneButton}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f1f2',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
  section: {
    marginBottom: 15,
  },
  label: {
    color: '#8f8fcb',
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    paddingLeft: 15,
    fontSize: 16,
    borderColor: '#e3e3e3',
    borderWidth: 1,
  },
  descriptionInput: {
    minHeight: 80,
    maxHeight: 120,
  },
  teamMembers: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  avatarActive: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    borderColor: '#6e6be8',
    borderWidth: 2,
  },
  checkIcon: {
    position: 'absolute',
    bottom: 0,
    right: 10,
  },
  addMember: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: '#6e6be8',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  datePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
  },
  timePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  boardOptions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boardButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
    marginRight: 10,
  },
  boardButtonUrgent: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f8d7da',
    marginRight: 10,
  },
  boardButtonRunning: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#66c2a5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  boardButtonText: {
    fontSize: 14,
    color: '#494949',
  },
  addBoard: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: '#6e6be8',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doneButton: {
    backgroundColor: '#6e6be8',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  doneButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddTaskScreen;