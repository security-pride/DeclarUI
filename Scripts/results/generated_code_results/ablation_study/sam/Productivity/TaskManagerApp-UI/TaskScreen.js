import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { useNavigation } from '@react-navigation/native';



const TaskScreen = () => {

  const navigation = useNavigation();

  const [selectedDay, setSelectedDay] = useState(14);



  const weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  const tasks = [

    { status: 'URGENT', title: 'New Web UI Design Project', description: 'Website UI Design for $500', time: '10 - 11 AM', participants: 2 },

    { status: 'RUNNING', title: 'Application Design Meeting', description: 'Website UI Design for $500', time: '10 - 11 AM', participants: 2 },

    { status: 'ONGOING', title: 'Web Design Meeting', description: '', time: '', participants: 0 },

  ];



  const renderWeekView = () => (

    <View style={styles.weekView}>

      {weekDays.map((day, index) => (

        <TouchableOpacity

          key={index}

          style={[styles.dayButton, selectedDay === index + 10 && styles.selectedDay]}

          onPress={() => setSelectedDay(index + 10)}

        >

          <Text style={[styles.dayText, selectedDay === index + 10 && styles.selectedDayText]}>{day}</Text>

          <Text style={[styles.dateText, selectedDay === index + 10 && styles.selectedDayText]}>{index + 10}</Text>

        </TouchableOpacity>

      ))}

    </View>

  );



  const renderTask = (task, index) => (

    <View key={index} style={styles.taskItem}>

      <View style={styles.taskHeader}>

        <Text style={[styles.taskStatus, { color: getStatusColor(task.status) }]}>{task.status}</Text>

        <Icon name="ellipsis-vertical" size={20} color="#000" />

      </View>

      <Text style={styles.taskTitle}>{task.title}</Text>

      <Text style={styles.taskDescription}>{task.description}</Text>

      <View style={styles.taskFooter}>

        <View style={styles.taskTime}>

          <Icon name="time-outline" size={16} color="#888" />

          <Text style={styles.taskTimeText}>{task.time}</Text>

        </View>

        <View style={styles.taskParticipants}>

          <Icon name="people-outline" size={16} color="#888" />

          <Text style={styles.taskParticipantsText}>{task.participants} Persons</Text>

        </View>

      </View>

    </View>

  );



  const getStatusColor = (status) => {

    switch (status) {

      case 'URGENT':

        return '#FF6B6B';

      case 'RUNNING':

        return '#4ECB71';

      case 'ONGOING':

        return '#4E5DE3';

      default:

        return '#000';

    }

  };



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.headerTitle}>Task</Text>

        <TouchableOpacity onPress={() => navigation.navigate('AddTask')}>

          <Text style={styles.addTaskButton}>+ Add Task</Text>

        </TouchableOpacity>

        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

      </View>

      <Text style={styles.date}>May 01, 2020</Text>

      <Text style={styles.today}>Today</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>

        {renderWeekView()}

      </ScrollView>

      <ScrollView style={styles.tasksContainer}>

        {tasks.map((task, index) => renderTask(task, index))}

      </ScrollView>

      <View style={styles.bottomNav}>

        <TouchableOpacity onPress={() => navigation.navigate('Board')}>

          <Icon name="grid-outline" size={24} color="#888" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>

          <Icon name="checkmark-circle-outline" size={24} color="#888" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddTask')}>

          <Icon name="add" size={24} color="#FFF" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="document-text-outline" size={24} color="#4E5DE3" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Message')}>

          <Icon name="chatbubble-outline" size={24} color="#888" />

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F8F8F8',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 20,

    paddingTop: 40,

  },

  headerTitle: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  addTaskButton: {

    color: '#FF6B6B',

    fontSize: 16,

    fontWeight: 'bold',

  },

  avatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

  },

  date: {

    fontSize: 14,

    color: '#888',

    marginLeft: 20,

  },

  today: {

    fontSize: 24,

    fontWeight: 'bold',

    marginLeft: 20,

    marginTop: 5,

  },

  weekView: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    marginTop: 20,

    paddingHorizontal: 10,

  },

  dayButton: {

    alignItems: 'center',

    padding: 10,

    marginHorizontal: 5,

  },

  selectedDay: {

    backgroundColor: '#4E5DE3',

    borderRadius: 20,

  },

  dayText: {

    fontSize: 12,

    color: '#888',

  },

  dateText: {

    fontSize: 16,

    fontWeight: 'bold',

    marginTop: 5,

  },

  selectedDayText: {

    color: '#FFF',

  },

  tasksContainer: {

    flex: 1,

    marginTop: 20,

  },

  taskItem: {

    backgroundColor: '#FFF',

    borderRadius: 10,

    padding: 15,

    marginHorizontal: 20,

    marginBottom: 15,

  },

  taskHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

  },

  taskStatus: {

    fontSize: 12,

    fontWeight: 'bold',

  },

  taskTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginTop: 10,

  },

  taskDescription: {

    fontSize: 14,

    color: '#888',

    marginTop: 5,

  },

  taskFooter: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginTop: 15,

  },

  taskTime: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  taskTimeText: {

    fontSize: 12,

    color: '#888',

    marginLeft: 5,

  },

  taskParticipants: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  taskParticipantsText: {

    fontSize: 12,

    color: '#888',

    marginLeft: 5,

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    backgroundColor: '#FFF',

    paddingVertical: 10,

    borderTopWidth: 1,

    borderTopColor: '#EEE',

  },

  addButton: {

    backgroundColor: '#FF6B6B',

    width: 50,

    height: 50,

    borderRadius: 25,

    justifyContent: 'center',

    alignItems: 'center',

    elevation: 5,

  },

});



export default TaskScreen;