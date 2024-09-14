import React from 'react';
import { View, Text, Image, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CalendarScreen = () => {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#ccc" />
        <TextInput style={styles.searchInput} placeholder="Search for task" />
        <Icon name="close-circle" size={20} color="#ccc" />
      </View>

      {/* Calendar Header */}
      <View style={styles.calendarHeader}>
        <View>
          <Text style={styles.taskText}>Task</Text>
        </View>
        <View style={styles.weekDaysContainer}>
          <Text style={styles.weekDayText}>MO</Text>
          <Text style={styles.weekDayText}>TU</Text>
          <Text style={[styles.weekDayText, styles.selectedDay]}>WE</Text>
          <Text style={styles.weekDayText}>TH</Text>
          <Text style={styles.weekDayText}>FR</Text>
          <Text style={styles.weekDayText}>SA</Text>
          <Text style={styles.weekDayText}>SU</Text>
        </View>
        <View style={styles.dateContainer}>
          <Icon name="calendar-outline" size={20} color="#000" />
          <Text style={styles.dateText}>August 2021</Text>
        </View>
      </View>

      {/* Task List */}
      <ScrollView style={styles.taskList}>
        <Text style={styles.todayText}>Today</Text>

        {/* Task Row */}
        <View style={styles.taskTimeContainer}>
          <Text style={styles.timeText}>07:00</Text>
          <View style={styles.taskCard}>
            <View style={styles.taskDetails}>
              <Text style={styles.taskTitle}>Cleaning Clothes</Text>
              <Text style={styles.taskTime}>07:00 - 07:15</Text>
            </View>
            <View style={styles.labelsContainer}>
              <Text style={styles.urgentLabel}>Urgent</Text>
              <Text style={styles.homeLabel}>Home</Text>
            </View>
          </View>
        </View>

        {/* Add more tasks in a similar way */}
        {/* ... */}

        {/* Add Task Placeholder */}
        <View style={styles.addTaskContainer}>
          <Text style={styles.addTaskText}>09:00   You don’t have any scheduler + Add</Text>
        </View>

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          <Icon name="home-outline" size={30} color="#ccc" />
          <Icon name="calendar-outline" size={30} color="#000" />
          <TouchableOpacity style={styles.addButton}>
            <Icon name="add" size={30} color="#fff" />
          </TouchableOpacity>
          <Icon name="stats-chart-outline" size={30} color="#ccc" />
          <Icon name="person-outline" size={30} color="#ccc" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#f6f6f6',
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    color: '#000',
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  taskText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  weekDaysContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weekDayText: {
    marginHorizontal: 5,
    color: '#000',
  },
  selectedDay: {
    color: '#fff',
    backgroundColor: '#3B71F3',
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    marginLeft: 5,
    color: '#000',
  },
  taskList: {
    paddingHorizontal: 20,
  },
  todayText: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  timeText: {
    marginRight: 20,
    fontSize: 16,
    color: '#000',
  },
  taskCard: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f6f7fb',
  },
  taskDetails: {
    marginBottom: 5,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  taskTime: {
    color: '#999',
  },
  labelsContainer: {
    flexDirection: 'row',
  },
  urgentLabel: {
    marginRight: 10,
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 5,
    backgroundColor: '#FF6B6B',
    color: '#fff',
    fontSize: 12,
  },
  homeLabel: {
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 5,
    backgroundColor: '#776FF8',
    color: '#fff',
    fontSize: 12,
  },
  addTaskContainer: {
    marginVertical: 10,
  },
  addTaskText: {
    color: '#999',
    fontSize: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3B71F3',
  },
});

export default CalendarScreen;