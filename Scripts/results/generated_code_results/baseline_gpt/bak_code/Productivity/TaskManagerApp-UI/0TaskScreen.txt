import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TaskScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.profileWrapper}>
          <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
        </View>
      </View>

      {/* Title and Date */}
      <View style={styles.titleDateContainer}>
        <Text style={styles.title}>Task</Text>
        <Text style={styles.date}>May 01, 2020</Text>
        <Text style={styles.today}>Today</Text>
      </View>

      {/* Week Days */}
      <View style={styles.weekDaysContainer}>
        {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day, index) => (
          <View key={index} style={styles.weekDay}>
            <Text style={styles.weekDayText}>{day}</Text>
            <Text style={styles.weekDayNumber}>{10 + index}</Text>
          </View>
        ))}
      </View>

      {/* Add Task Button */}
      <TouchableOpacity style={styles.addTaskButton}>
        <Icon name="add" size={20} color="#fff" />
        <Text style={styles.addTaskButtonText}>Add Task</Text>
      </TouchableOpacity>

      {/* Task List */}
      <ScrollView style={styles.taskList}>
        <TaskCard
          status="URGENT"
          statusColor="#FF3D00"
          title="New Web UI Design Project"
          description="Website UI Design for $500"
          time="10 - 11 AM"
          persons="2 Persons"
        />
        <TaskCard
          status="RUNNING"
          statusColor="#00A86B"
          title="Application Design Meeting"
          description="Website UI Design for $500"
          time="10 - 11 AM"
          persons="2 Persons"
        />
        <TaskCard
          status="ONGOING"
          statusColor="#6A0DAD"
          title="Web Design Meeting"
          description="Website UI Design for $500"
          time="10 - 11 AM"
          persons="2 Persons"
        />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <Icon name="grid-outline" size={24} color="#fff" />
        <Icon name="calendar-outline" size={24} color="#fff" />
        <TouchableOpacity style={styles.addButton}>
          <Icon name="add" size={40} color="#fff" />
        </TouchableOpacity>
        <Icon name="clipboard-outline" size={24} color="#fff" />
        <Icon name="chatbubbles-outline" size={24} color="#fff" />
      </View>
    </View>
  );
};

const TaskCard = ({ status, statusColor, title, description, time, persons }) => (
  <View style={styles.taskCard}>
    <Text style={[styles.taskStatus, { color: statusColor }]}>{status}</Text>
    <View style={styles.taskDetails}>
      <Text style={styles.taskTitle}>{title}</Text>
      <Text style={styles.taskDescription}>{description}</Text>
    </View>
    <View style={styles.taskFooter}>
      <Icon name="time-outline" size={16} color="#9E9E9E" />
      <Text style={styles.taskTime}>{time}</Text>
      <Icon name="person-outline" size={16} color="#9E9E9E" />
      <Text style={styles.taskPersons}>{persons}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  titleDateContainer: {
    marginVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#212121',
  },
  date: {
    fontSize: 14,
    color: '#757575',
  },
  today: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#212121',
  },
  weekDaysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  weekDay: {
    alignItems: 'center',
  },
  weekDayText: {
    fontSize: 12,
    color: '#757575',
  },
  weekDayNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  addTaskButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF5722',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginVertical: 20,
  },
  addTaskButtonText: {
    color: '#FFF',
    marginLeft: 10,
  },
  taskList: {
    flex: 1,
  },
  taskCard: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  taskStatus: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  taskDetails: {
    marginVertical: 10,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121',
  },
  taskDescription: {
    fontSize: 14,
    color: '#9E9E9E',
  },
  taskFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  taskTime: {
    marginLeft: 5,
    marginRight: 15,
    color: '#9E9E9E',
  },
  taskPersons: {
    marginLeft: 5,
    color: '#9E9E9E',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#6200EE',
    height: 60,
    borderRadius: 30,
    marginVertical: 20,
  },
  addButton: {
    backgroundColor: '#FF5722',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    bottom: 15,
  },
});

export default TaskScreen;