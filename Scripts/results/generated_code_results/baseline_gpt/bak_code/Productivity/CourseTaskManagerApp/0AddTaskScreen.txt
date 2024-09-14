import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';

const AddTaskScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello Liana</Text>
        <Text style={styles.title}>Add a task</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
      </View>

      <Text style={styles.sectionTitle}>Category</Text>

      <View style={styles.categoryContainer}>
        {['Class', 'Exam', 'Lab', 'Assignment', 'Presentation'].map((cat, index) => (
          <TouchableOpacity key={index} style={[styles.categoryButton, styles[`category${cat}`]]}>
            <Text style={styles.categoryText}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="book" size={24} color="#666" />
        <TextInput style={styles.input} placeholder="Biology" />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="file-text" size={24} color="#666" />
        <TextInput style={styles.input} placeholder="Topic / Chapter Name" />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="calendar" size={24} color="#666" />
        <TextInput style={styles.input} placeholder="Fri 25, September, 2020" />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="clock-o" size={24} color="#666" />
        <TextInput style={styles.input} placeholder="09:30 AM" />
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>
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
    alignItems: 'center',
  },
  greeting: {
    fontSize: 16,
    color: '#888',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    margin: 5,
  },
  categoryClass: {
    backgroundColor: '#58D68D',
  },
  categoryExam: {
    backgroundColor: '#EC7063',
  },
  categoryLab: {
    backgroundColor: '#AF7AC5',
  },
  categoryAssignment: {
    backgroundColor: '#F7DC6F',
  },
  categoryPresentation: {
    backgroundColor: '#5DADE2',
  },
  categoryText: {
    color: '#fff',
    fontWeight: '600',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F3F4',
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  addButton: {
    backgroundColor: '#58D68D',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddTaskScreen;