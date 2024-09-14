import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, StatusBar } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const TaskScreen = ({ navigation }) => {

  const [selectedDate, setSelectedDate] = useState(14);



  const renderCalendarDays = () => {

    const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

    return days.map((day, index) => (

      <TouchableOpacity

        key={index}

        style={[styles.calendarDay, selectedDate === index + 10 && styles.selectedDay]}

        onPress={() => setSelectedDate(index + 10)}

      >

        <Text style={[styles.dayText, selectedDate === index + 10 && styles.selectedDayText]}>{day}</Text>

        <Text style={[styles.dateText, selectedDate === index + 10 && styles.selectedDateText]}>{index + 10}</Text>

      </TouchableOpacity>

    ));

  };



  const renderTaskCard = (title, description, time, persons, status, color) => (

    <View style={[styles.taskCard, { borderLeftColor: color }]}>

      <Text style={styles.taskStatus}>{status}</Text>

      <Text style={styles.taskTitle}>{title}</Text>

      <Text style={styles.taskDescription}>{description}</Text>

      <View style={styles.taskDetails}>

        <View style={styles.taskTime}>

          <Icon name="access-time" size={16} color="#8E8E93" />

          <Text style={styles.taskTimeText}>{time}</Text>

        </View>

        <View style={styles.taskPersons}>

          <Icon name="people" size={16} color="#8E8E93" />

          <Text style={styles.taskPersonsText}>{persons} Persons</Text>

        </View>

      </View>

    </View>

  );



  return (

    <View style={styles.container}>

      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>

        <Text style={styles.title}>Task</Text>

        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

      </View>

      <View style={styles.dateContainer}>

        <Text style={styles.date}>May 01, 2020</Text>

        <Text style={styles.today}>Today</Text>

      </View>

      <TouchableOpacity style={styles.addTaskButton} onPress={() => navigation.navigate('AddTask')}>

        <Icon name="add" size={24} color="#FFFFFF" />

        <Text style={styles.addTaskButtonText}>Add Task</Text>

      </TouchableOpacity>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.calendar}>

        {renderCalendarDays()}

      </ScrollView>

      <ScrollView style={styles.tasksContainer}>

        {renderTaskCard(

          'New Web UI Design Project',

          'Website UI Design for $500',

          '10 - 11 AM',

          2,

          'URGENT',

          '#FF4C6A'

        )}

        {renderTaskCard(

          'Application Design Meeting',

          'Website UI Design for $500',

          '10 - 11 AM',

          2,

          'RUNNING',

          '#48DA89'

        )}

        {renderTaskCard(

          'Web Design Meeting',

          'Website UI Design for $500',

          '10 - 11 AM',

          2,

          'ONGOING',

          '#8F81FE'

        )}

      </ScrollView>

      <View style={styles.bottomNav}>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>

          <Icon name="grid-view" size={24} color="#BDBDBD" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Calendar')}>

          <Icon name="event-note" size={24} color="#8875FF" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddTask')}>

          <Icon name="add" size={32} color="#FFFFFF" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Clock')}>

          <Icon name="access-time" size={24} color="#BDBDBD" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>

          <Icon name="person-outline" size={24} color="#BDBDBD" />

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F1F5FF',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 20,

    paddingTop: 60,

    paddingBottom: 20,

  },

  title: {

    fontSize: 32,

    fontWeight: 'bold',

    color: '#1D1D1D',

  },

  avatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

  },

  dateContainer: {

    paddingHorizontal: 20,

    marginBottom: 20,

  },

  date: {

    fontSize: 14,

    color: '#8E8E93',

  },

  today: {

    fontSize: 24,

    fontWeight: 'bold',

    color: '#1D1D1D',

  },

  addTaskButton: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FF4C6A',

    paddingVertical: 10,

    paddingHorizontal: 20,

    borderRadius: 25,

    alignSelf: 'flex-end',

    marginRight: 20,

    marginBottom: 20,

  },

  addTaskButtonText: {

    color: '#FFFFFF',

    fontWeight: 'bold',

    marginLeft: 5,

  },

  calendar: {

    flexDirection: 'row',

    paddingHorizontal: 10,

    marginBottom: 20,

  },

  calendarDay: {

    alignItems: 'center',

    justifyContent: 'center',

    width: 50,

    height: 70,

    marginHorizontal: 5,

  },

  selectedDay: {

    backgroundColor: '#8875FF',

    borderRadius: 25,

  },

  dayText: {

    fontSize: 12,

    color: '#8E8E93',

  },

  dateText: {

    fontSize: 18,

    fontWeight: 'bold',

    color: '#1D1D1D',

    marginTop: 5,

  },

  selectedDayText: {

    color: '#FFFFFF',

  },

  selectedDateText: {

    color: '#FFFFFF',

  },

  tasksContainer: {

    flex: 1,

    paddingHorizontal: 20,

  },

  taskCard: {

    backgroundColor: '#FFFFFF',

    borderRadius: 15,

    padding: 20,

    marginBottom: 15,

    borderLeftWidth: 5,

  },

  taskStatus: {

    fontSize: 12,

    fontWeight: 'bold',

    color: '#8E8E93',

    marginBottom: 5,

  },

  taskTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    color: '#1D1D1D',

    marginBottom: 5,

  },

  taskDescription: {

    fontSize: 14,

    color: '#8E8E93',

    marginBottom: 10,

  },

  taskDetails: {

    flexDirection: 'row',

    justifyContent: 'space-between',

  },

  taskTime: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  taskTimeText: {

    marginLeft: 5,

    color: '#8E8E93',

  },

  taskPersons: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  taskPersonsText: {

    marginLeft: 5,

    color: '#8E8E93',

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    paddingVertical: 10,

    borderTopLeftRadius: 20,

    borderTopRightRadius: 20,

  },

  navItem: {

    padding: 10,

  },

  addButton: {

    backgroundColor: '#8875FF',

    width: 56,

    height: 56,

    borderRadius: 28,

    justifyContent: 'center',

    alignItems: 'center',

    elevation: 5,

    marginTop: -30,

  },

});



export default TaskScreen;