import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const TaskScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.time}>9:41</Text>
        <Text style={styles.title}>Task</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
        <TouchableOpacity 
          style={styles.addTaskButton} 
          onPress={() => navigation.navigate('AddTask')}
        >
          <Icon name="add" size={16} color="white" />
          <Text style={styles.addTaskText}>Add Task</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.date}>May 01, 2020</Text>
      <Text style={styles.today}>Today</Text>

      <View style={styles.weekView}>
        {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day, index) => (
          <View key={index} style={styles.dayContainer}>
            <Text style={styles.day}>{day}</Text>
            <Text style={[styles.number, index === 4 && styles.selectedDay]}>{
              10 + index
            }</Text>
          </View>
        ))}
      </View>

      <View style={styles.taskCard}>
        <Text style={styles.urgentText}>URGENT</Text>
        <View style={styles.taskDetails}>
          <Text style={styles.taskTitle}>New Web UI Design Project</Text>
          <Text style={styles.taskDescription}>Website UI Design for $500</Text>
          <View style={styles.taskInfo}>
            <Icon name="time" size={14} color="grey" />
            <Text style={styles.taskTime}>10 - 11 AM</Text>
            <Icon name="people" size={14} color="grey" />
            <Text style={styles.taskParticipants}>2 Persons</Text>
          </View>
        </View>
      </View>

      <View style={styles.taskCard}>
        <Text style={styles.runningText}>RUNNING</Text>
        <View style={styles.taskDetails}>
          <Text style={styles.taskTitle}>Application Design Meeting</Text>
          <Text style={styles.taskDescription}>Website UI Design for $500</Text>
          <View style={styles.taskInfo}>
            <Icon name="time" size={14} color="grey" />
            <Text style={styles.taskTime}>10 - 11 AM</Text>
            <Icon name="people" size={14} color="grey" />
            <Text style={styles.taskParticipants}>2 Persons</Text>
          </View>
        </View>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Icon name="grid" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Board')}>
          <Icon name="checkmark" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="add-circle" size={36} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="document" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Message')}>
          <Icon name="chatbubbles" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  time: {
    color: '#535C68',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1A212F',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  addTaskButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF6B6B',
    padding: 10,
    borderRadius: 20,
  },
  addTaskText: {
    color: 'white',
    marginLeft: 8,
  },
  date: {
    paddingHorizontal: 16,
    color: '#535C68',
    fontSize: 16,
  },
  today: {
    paddingHorizontal: 16,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1A212F',
  },
  weekView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  dayContainer: {
    alignItems: 'center',
  },
  day: {
    color: '#5E6C84',
  },
  number: {
    color: '#5E6C84',
  },
  selectedDay: {
    color: '#6C63FF',
    fontWeight: 'bold',
  },
  taskCard: {
    margin: 16,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  urgentText: {
    color: '#FF6B6B',
    fontWeight: 'bold',
  },
  runningText: {
    color: '#34C759',
    fontWeight: 'bold',
  },
  taskDetails: {
    marginTop: 8,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A212F',
  },
  taskDescription: {
    color: '#89909A',
    marginVertical: 4,
  },
  taskInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  taskTime: {
    marginHorizontal: 4,
    color: 'grey',
  },
  taskParticipants: {
    marginHorizontal: 4,
    color: 'grey',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#6C63FF',
    paddingVertical: 12,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default TaskScreen;