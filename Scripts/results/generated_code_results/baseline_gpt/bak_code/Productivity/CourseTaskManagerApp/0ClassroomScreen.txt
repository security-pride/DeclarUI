import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ClassroomScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.dateText}>Today, 17 Sept</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+ Add Class</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.title}>Classroom</Text>
      
      <Image 
        source={require('../assets/snack-icon.png')} 
        style={styles.image}
      />
      
      <View style={styles.overlay}>
        <Text style={styles.liveText}>Live</Text>
      </View>
      
      <View style={styles.infoContainer}>
        <Text style={styles.subjectText}>📚 Physics</Text>
        <Text style={styles.chapterText}>📘 Chapter 3: Force</Text>
        <Text style={styles.teacherText}>Alex Jesus</Text>
        <Text style={styles.enrolledText}>45 Enrolled</Text>
      </View>
      
      <View style={styles.tabBar}>
        <Text style={styles.tabText}>Description</Text>
        <Text style={styles.tabText}>Discussion</Text>
        <Text style={styles.tabText}>Resources</Text>
      </View>

      <View style={styles.description}>
        <Text style={styles.descriptionHeader}>About this class</Text>
        <Text style={styles.descriptionText}>
          Force: The push or pull on an object with mass that causes it to change its velocity.
        </Text>
        <Text style={styles.descriptionText}>
          Force is an external agent capable of changing the state of rest or motion of a particular body.
          It has a magnitude and a direction. The direction towards which the force is applied is known 
          as the direction of the force and the application of force is the point where force is applied.
        </Text>
      </View>
    </ScrollView>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  dateText: {
    fontSize: 16,
    color: '#666',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  overlay: {
    position: 'absolute',
    top: 15,
    left: 15,
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  liveText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  subjectText: {
    color: '#000',
    fontWeight: 'bold',
  },
  chapterText: {
    color: '#4CAF50',
  },
  teacherText: {
    color: '#000',
  },
  enrolledText: {
    color: '#000',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  description: {
    paddingVertical: 10,
  },
  descriptionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
  },
});

export default ClassroomScreen;