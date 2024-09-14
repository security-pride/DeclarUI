import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const CalendarScreen = () => {

  const navigation = useNavigation();

  const [selectedDate, setSelectedDate] = useState('17');



  const renderScheduleItem = ({ item }) => (

    <TouchableOpacity style={styles.scheduleItem}>

      <Text style={styles.scheduleTime}>{item.time}</Text>

      <View style={styles.scheduleDetails}>

        <Text style={styles.scheduleSubject}>{item.subject}</Text>

        <Text style={styles.scheduleChapter}>{item.chapter || item.title}</Text>

        <Text style={styles.scheduleInstructor}>{item.instructor}</Text>

        <Text style={styles.schedulePlatform}>{item.platform}</Text>

      </View>

    </TouchableOpacity>

  );



  const schedule = [

    {

      time: '9:30',

      subject: 'Physics',

      chapter: 'Chapter 3: Force',

      instructor: 'Alex Jesus',

      platform: 'Google Meet'

    },

    {

      time: '11:00',

      subject: 'Geography',

      chapter: 'Chapter 12: Soil Profile',

      instructor: 'Jennifer Clark',

      platform: 'Zoom'

    },

    {

      time: '12:20',

      subject: 'Assignment',

      title: 'World Regional Pattern',

      instructor: 'Alexia Tenorio',

      platform: 'Google Docs'

    }

  ];



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.date}>17 September</Text>

        <Text style={styles.title}>Today</Text>

        <TouchableOpacity

          style={styles.addButton}

          onPress={() => navigation.navigate('AddTask')}

        >

          <Text style={styles.addButtonText}>+ Add Task</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.calendar}>

        <Text style={styles.calendarMonth}>September 2020</Text>

        <View style={styles.calendarDays}>

          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (

            <Text key={index} style={styles.calendarDay}>{day}</Text>

          ))}

        </View>

        <View style={styles.calendarDates}>

          {['14', '15', '16', '17', '18', '19', '20'].map((date, index) => (

            <TouchableOpacity

              key={index}

              style={[

                styles.calendarDate,

                selectedDate === date && styles.selectedDate

              ]}

              onPress={() => setSelectedDate(date)}

            >

              <Text style={[

                styles.calendarDateText,

                selectedDate === date && styles.selectedDateText

              ]}>{date}</Text>

            </TouchableOpacity>

          ))}

        </View>

      </View>



      <FlatList

        data={schedule}

        renderItem={renderScheduleItem}

        keyExtractor={(item) => item.time}

        style={styles.scheduleList}

      />



      <View style={styles.bottomNav}>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>

          <Icon name="home" size={24} color="#000" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="event" size={24} color="#4CAF50" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Classroom')}>

          <Icon name="school" size={24} color="#000" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Discussion')}>

          <Icon name="forum" size={24} color="#000" />

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F5F5F5',

  },

  header: {

    padding: 20,

    backgroundColor: '#FFFFFF',

  },

  date: {

    fontSize: 14,

    color: '#888',

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    marginTop: 5,

  },

  addButton: {

    position: 'absolute',

    top: 20,

    right: 20,

    backgroundColor: '#4CAF50',

    paddingHorizontal: 15,

    paddingVertical: 8,

    borderRadius: 20,

  },

  addButtonText: {

    color: '#FFFFFF',

    fontWeight: 'bold',

  },

  calendar: {

    backgroundColor: '#FFFFFF',

    padding: 20,

  },

  calendarMonth: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  calendarDays: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 10,

  },

  calendarDay: {

    fontSize: 12,

    color: '#888',

  },

  calendarDates: {

    flexDirection: 'row',

    justifyContent: 'space-between',

  },

  calendarDate: {

    width: 36,

    height: 36,

    justifyContent: 'center',

    alignItems: 'center',

    borderRadius: 18,

  },

  selectedDate: {

    backgroundColor: '#4CAF50',

  },

  calendarDateText: {

    fontSize: 16,

  },

  selectedDateText: {

    color: '#FFFFFF',

  },

  scheduleList: {

    flex: 1,

    backgroundColor: '#FFFFFF',

    marginTop: 20,

  },

  scheduleItem: {

    flexDirection: 'row',

    padding: 20,

    borderBottomWidth: 1,

    borderBottomColor: '#F0F0F0',

  },

  scheduleTime: {

    fontSize: 16,

    fontWeight: 'bold',

    marginRight: 20,

  },

  scheduleDetails: {

    flex: 1,

  },

  scheduleSubject: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  scheduleChapter: {

    fontSize: 14,

    color: '#888',

    marginBottom: 5,

  },

  scheduleInstructor: {

    fontSize: 14,

    color: '#888',

  },

  schedulePlatform: {

    fontSize: 14,

    color: '#4CAF50',

    marginTop: 5,

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    paddingVertical: 10,

    borderTopWidth: 1,

    borderTopColor: '#F0F0F0',

  },

});



export default CalendarScreen;