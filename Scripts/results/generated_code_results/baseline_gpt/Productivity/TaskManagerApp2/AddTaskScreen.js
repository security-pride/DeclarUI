import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AddTaskScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back-outline" size={24} color="#000" />
        <Text style={styles.headerTitle}>Add Task</Text>
      </View>

      <Text style={styles.label}>Title</Text>
      <TextInput style={styles.input} placeholder="Plan for a month" />

      <Text style={styles.label}>Date</Text>
      <View style={styles.dateContainer}>
        <Text>4 August 2021</Text>
        <Icon name="calendar-outline" size={20} color="#000" />
      </View>

      <Text style={styles.label}>Time</Text>
      <View style={styles.timeContainer}>
        <TextInput style={styles.timeInput} placeholder="07:00 AM" />
        <TextInput style={styles.timeInput} placeholder="07:30 AM" />
      </View>

      <Text style={styles.label}>Description</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Creating this month's work plan"
        multiline
        numberOfLines={4}
      />

      <Text style={styles.label}>Type</Text>
      <View style={styles.typeContainer}>
        <TouchableOpacity style={[styles.typeButton, styles.selected]}>
          <Text style={styles.typeText}>Personal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.typeButton}>
          <Text style={styles.typeText}>Private</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.typeButton}>
          <Text style={styles.typeText}>Secret</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Tags</Text>
      <View style={styles.tagsContainer}>
        <View style={styles.tag}><Text style={styles.tagText}>Office</Text></View>
        <View style={styles.tag}><Text style={styles.tagText}>Home</Text></View>
        <View style={styles.tag}><Text style={styles.tagText}>Urgent</Text></View>
        <View style={styles.tag}><Text style={styles.tagText}>Work</Text></View>
      </View>

      <TouchableOpacity>
        <Text style={styles.addNewTag}>+ Add new tag</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createButtonText}>Create</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 5,
    marginBottom: 15,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 5,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeInput: {
    flex: 0.48,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 5,
    marginBottom: 15,
  },
  typeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  typeButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginRight: 5,
  },
  selected: {
    backgroundColor: '#e5e5e5',
  },
  typeText: {
    fontSize: 16,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  tag: {
    backgroundColor: '#e1e4fc',
    padding: 8,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  tagText: {
    fontSize: 14,
    color: '#61688B',
  },
  addNewTag: {
    fontSize: 16,
    color: '#61688B',
    textAlign: 'center',
    marginBottom: 20,
  },
  createButton: {
    backgroundColor: '#6C63FF',
    paddingVertical: 15,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default AddTaskScreen;