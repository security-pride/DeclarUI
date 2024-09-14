import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

const TaskDetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header with Back Button and Title */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Task Details</Text>
      </View>

      {/* Task Title */}
      <Text style={styles.taskTitle}>User experience design</Text>

      {/* Date and Time */}
      <View style={styles.dateTimeContainer}>
        <View style={styles.dateTimeBox}>
          <Text style={styles.dateTimeText}>18-02-2022</Text>
        </View>
        <View style={styles.dateTimeBox}>
          <Text style={styles.dateTimeText}>9:00 AM-12:00 PM</Text>
        </View>
      </View>

      {/* Pie Chart */}
      <View style={styles.pieChartContainer}>
        <ImageBackground
          source={require('../assets/snack-icon.png')}
          style={styles.pieChart}>
          {/* Placeholder for Pie Chart */}
        </ImageBackground>
        <View style={styles.legend}>
          <Text style={[styles.legendText, { color: 'cyan' }]}>Finish on time</Text>
          <Text style={[styles.legendText, { color: 'orange' }]}>Past the deadline</Text>
          <Text style={[styles.legendText, { color: 'purple' }]}>Still ongoing</Text>
        </View>
      </View>

      {/* Description Section */}
      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.descriptionText}>
        Task management is the process which is monitoring your fast project's tasks through their various stages from start...
        <Text style={styles.seeMore}> See more</Text>
      </Text>

      {/* Sub Task Section */}
      <Text style={styles.sectionTitle}>Sub Task</Text>
      <View style={styles.subTaskContainer}>
        <View style={[styles.subTaskBox, styles.subTaskCompleted]}>
          <TouchableOpacity>
            <Ionicons name="checkmark-circle" size={24} color="cyan" />
          </TouchableOpacity>
          <View style={styles.subTaskContent}>
            <Text style={styles.subTaskTitle}>Website Redesign</Text>
            <Text style={styles.subTaskDate}>18 Feb 2022</Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="ellipsis-horizontal" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.subTaskBox}>
          <TouchableOpacity>
            <Ionicons name="ellipse-outline" size={24} color="gray" />
          </TouchableOpacity>
          <View style={styles.subTaskContent}>
            <Text style={styles.subTaskTitle}>Website Design</Text>
            <Text style={styles.subTaskDate}>19 Feb 2022</Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="ellipsis-horizontal" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
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
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  taskTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  dateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  dateTimeBox: {
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    padding: 10,
  },
  dateTimeText: {
    fontSize: 16,
  },
  pieChartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  pieChart: {
    width: 100,
    height: 100,
  },
  legend: {
    marginLeft: 20,
  },
  legendText: {
    fontSize: 14,
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  seeMore: {
    color: '#007bff',
  },
  subTaskContainer: {
    marginVertical: 10,
  },
  subTaskBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  subTaskCompleted: {
    backgroundColor: '#e0f7fa',
  },
  subTaskContent: {
    flex: 1,
    marginLeft: 10,
  },
  subTaskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subTaskDate: {
    fontSize: 14,
    color: '#555',
  },
});

export default TaskDetailsScreen;