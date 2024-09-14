import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

const AddTaskScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Task</Text>
      </View>
      
      <View style={styles.field}>
        <Text style={styles.label}>Title</Text>
        <Text style={styles.fieldValue}>Plan for a month</Text>
      </View>
      
      <View style={styles.field}>
        <Text style={styles.label}>Date</Text>
        <View style={styles.dateRow}>
          <Text style={styles.fieldValue}>4 August 2021</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </View>
      </View>
      
      <View style={styles.field}>
        <Text style={styles.label}>Time</Text>
        <View style={styles.timeRow}>
          <Text style={styles.timeValue}>07:00</Text>
          <Text style={styles.amPm}>AM</Text>
          <Text style={styles.timeValue}>07:30</Text>
          <Text style={styles.amPm}>AM</Text>
        </View>
      </View>
      
      <View style={styles.field}>
        <Text style={styles.label}>Description</Text>
        <Text style={styles.fieldValue}>Creating this month's work plan</Text>
      </View>
      
      <View style={styles.field}>
        <Text style={styles.label}>Type</Text>
        <View style={styles.typeRow}>
          <Button title="Personal" />
          <Button title="Private" />
          <Button title="Secret" />
        </View>
      </View>
      
      <View style={styles.field}>
        <Text style={styles.label}>Tags</Text>
        <View style={styles.tagsRow}>
          <Button title="Office" />
          <Button title="Home" />
          <Button title="Urgent" />
          <Button title="Work" />
        </View>
        <Text style={styles.addNewTag}>+ Add new tag</Text>
      </View>
      
      <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.createButtonText}>Create</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backArrow: {
    fontSize: 24,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  field: {
    marginVertical: 10,
  },
  label: {
    color: '#888',
    fontSize: 16,
    marginBottom: 5,
  },
  fieldValue: {
    fontSize: 18,
    color: '#000',
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeValue: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  amPm: {
    fontSize: 14,
    color: '#888',
    marginHorizontal: 5,
  },
  icon: {
    width: 24,
    height: 24,
  },
  typeRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tagsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  addNewTag: {
    marginTop: 10,
    color: '#888',
    fontSize: 16,
    textAlign: 'center',
  },
  createButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 8,
    paddingVertical: 15,
    marginTop: 20,
  },
  createButtonText: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default AddTaskScreen;