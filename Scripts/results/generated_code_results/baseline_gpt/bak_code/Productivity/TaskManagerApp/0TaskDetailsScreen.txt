import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const TaskDetailsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Task Details</Text>
      </View>

      {/* Task Info */}
      <View style={styles.taskInfo}>
        <Text style={styles.taskTitle}>User experience design</Text>
        <View style={styles.dateTimeContainer}>
          <View style={styles.dateTimeBox}>
            <Text style={styles.dateTimeText}>18-02-2022</Text>
          </View>
          <View style={styles.dateTimeBox}>
            <Text style={styles.dateTimeText}>9:00 AM-12:00 PM</Text>
          </View>
        </View>

        <Image
          source={require('../assets/snack-icon.png')}
          style={styles.chartImage}
        />

        <View style={styles.statusContainer}>
          <Text style={styles.statusItem}>
            <Text style={[styles.dot, {color: '#00C88C'}]}>• </Text>
            Finish on time
          </Text>
          <Text style={styles.statusItem}>
            <Text style={[styles.dot, {color: '#FF5A5F'}]}>• </Text>
            Past the deadline
          </Text>
          <Text style={styles.statusItem}>
            <Text style={[styles.dot, {color: '#8763FF'}]}>• </Text>
            Still ongoing
          </Text>
        </View>
      </View>

      {/* Description */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.descriptionText}>
          Task management is the process which is monitoring your fast project's tasks through their various stages from start... <Text style={styles.moreText}>See more</Text>
        </Text>
      </View>

      {/* Sub Task */}
      <View style={styles.subTaskContainer}>
        <Text style={styles.sectionTitle}>Sub Task</Text>
        
        {/* Sub Task Item */}
        <View style={styles.subTaskItem}>
          <Icon name="check-square" size={24} color="#00C88C" />
          <View style={styles.subTaskInfo}>
            <Text style={styles.subTaskTitle}>Website Redesign</Text>
            <Text style={styles.subTaskDate}>18 Feb 2022</Text>
          </View>
          <Icon name="more-horizontal" size={24} color="#000" />
        </View>

        {/* Sub Task Item */}
        <View style={styles.subTaskItem}>
          <Icon name="square" size={24} color="#000" />
          <View style={styles.subTaskInfo}>
            <Text style={styles.subTaskTitle}>Website Design</Text>
            <Text style={styles.subTaskDate}>19 Feb 2022</Text>
          </View>
          <Icon name="more-horizontal" size={24} color="#000" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  taskInfo: {
    marginBottom: 24,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  dateTimeContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  dateTimeBox: {
    backgroundColor: '#F5F5F5',
    padding: 8,
    borderRadius: 8,
    marginRight: 8,
  },
  dateTimeText: {
    fontSize: 14,
    color: '#555',
  },
  chartImage: {
    height: 120,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusItem: {
    fontSize: 14,
    color: '#555',
  },
  dot: {
    fontSize: 18,
  },
  descriptionContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 14,
    color: '#555',
  },
  moreText: {
    color: '#007BFF',
  },
  subTaskContainer: {},
  subTaskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  subTaskInfo: {
    flex: 1,
    marginLeft: 12,
  },
  subTaskTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
  },
  subTaskDate: {
    fontSize: 14,
    color: '#666',
  },
});

export default TaskDetailsScreen;