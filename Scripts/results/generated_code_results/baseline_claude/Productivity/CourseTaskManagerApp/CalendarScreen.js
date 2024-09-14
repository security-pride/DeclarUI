import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const CalendarScreen = () => {

  const navigation = useNavigation();

  const [selectedDate, setSelectedDate] = useState(new Date());



  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const currentWeek = Array.from({ length: 7 }, (_, i) => {

    const date = new Date(selectedDate);

    date.setDate(date.getDate() - date.getDay() + i + 1);

    return { day: weekDays[i], date: date.getDate() };

  });



  const tasks = [

    {

      id: '1',

      time: '9:30',

      endTime: '10:20',

      subject: 'Physics',

      chapter: 'Chapter 3: Force',

      color: '#A78BFA',

      participants: [{ name: 'Alex Jesus', image: '../assets/snack-icon.png' }],

      platform: 'Google Meet',

    },

    {

      id: '2',

      time: '11:00',

      endTime: '11:30',

      subject: 'Geography',

      chapter: 'Chapter 12: Soil Profile',

      color: '#34D399',

      participants: [{ name: 'Jenifer Clark', image: '../assets/snack-icon.png' }],

      platform: 'Zoom',

    },

    {

      id: '3',

      time: '12:20',

      endTime: '13:00',

      subject: 'Assignment',

      chapter: 'World Regional Pattern',

      color: '#FBBF24',

      participants: [{ name: 'Alexis Tentino', image: '../assets/snack-icon.png' }],

      platform: 'Google Docs',

    },

  ];



  const renderTask = ({ item }) => (

    <View style={[styles.taskItem, { backgroundColor: item.color }]}>

      <View style={styles.taskTime}>

        <Text style={styles.taskTimeText}>{item.time}</Text>

      </View>

      <View style={styles.taskContent}>

        <Text style={styles.taskSubject}>{item.subject}</Text>

        <Text style={styles.taskChapter}>{item.chapter}</Text>

        <View style={styles.taskDetails}>

          <View style={styles.taskParticipants}>

            {item.participants.map((participant, index) => (

              <Image key={index} source={require('../assets/snack-icon.png')} style={styles.participantImage} />

            ))}

          </View>

          <View style={styles.taskPlatform}>

            <Icon name={item.platform === 'Zoom' ? 'videocam-outline' : 'document-text-outline'} size={16} color="#FFFFFF" />

            <Text style={styles.platformText}>{item.platform}</Text>

          </View>

        </View>

      </View>

      <TouchableOpacity style={styles.taskOptionsButton}>

        <Icon name="ellipsis-vertical" size={20} color="#FFFFFF" />

      </TouchableOpacity>

    </View>

  );



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.headerDate}>17 September</Text>

        <Text style={styles.headerTitle}>Today</Text>

        <TouchableOpacity style={styles.addButton}>

          <Icon name="add" size={24} color="#FFFFFF" />

          <Text style={styles.addButtonText}>Add Task</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.calendar}>

        <FlatList

          data={currentWeek}

          renderItem={({ item }) => (

            <TouchableOpacity

              style={[

                styles.calendarDay,

                selectedDate.getDate() === item.date && styles.selectedDay,

              ]}

              onPress={() => setSelectedDate(new Date(selectedDate.setDate(item.date)))}

            >

              <Text style={[styles.calendarDayText, selectedDate.getDate() === item.date && styles.selectedDayText]}>

                {item.day}

              </Text>

              <Text style={[styles.calendarDateText, selectedDate.getDate() === item.date && styles.selectedDayText]}>

                {item.date}

              </Text>

            </TouchableOpacity>

          )}

          horizontal

          showsHorizontalScrollIndicator={false}

        />

      </View>



      <FlatList

        data={tasks}

        renderItem={renderTask}

        keyExtractor={(item) => item.id}

        contentContainerStyle={styles.taskList}

      />



      <View style={styles.bottomNav}>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>

          <Icon name="home-outline" size={24} color="#888888" />

          <Text style={styles.navText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Tasks')}>

          <Icon name="list-outline" size={24} color="#888888" />

          <Text style={styles.navText}>Tasks</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Classroom')}>

          <Icon name="school-outline" size={24} color="#888888" />

          <Text style={styles.navText}>Classroom</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Chat')}>

          <Icon name="chatbubble-outline" size={24} color="#888888" />

          <Text style={styles.navText}>Chat</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFFFFF',

  },

  header: {

    padding: 20,

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

  },

  headerDate: {

    fontSize: 14,

    color: '#888888',

  },

  headerTitle: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  addButton: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#4CAF50',

    borderRadius: 20,

    paddingVertical: 8,

    paddingHorizontal: 12,

  },

  addButtonText: {

    color: '#FFFFFF',

    marginLeft: 4,

  },

  calendar: {

    marginBottom: 20,

  },

  calendarDay: {

    alignItems: 'center',

    padding: 10,

    marginHorizontal: 5,

  },

  selectedDay: {

    backgroundColor: '#4CAF50',

    borderRadius: 20,

  },

  calendarDayText: {

    fontSize: 12,

    color: '#888888',

  },

  calendarDateText: {

    fontSize: 16,

    fontWeight: 'bold',

    marginTop: 4,

  },

  selectedDayText: {

    color: '#FFFFFF',

  },

  taskList: {

    paddingHorizontal: 20,

  },

  taskItem: {

    flexDirection: 'row',

    borderRadius: 10,

    marginBottom: 15,

    padding: 15,

  },

  taskTime: {

    marginRight: 15,

  },

  taskTimeText: {

    color: '#FFFFFF',

    fontSize: 14,

  },

  taskContent: {

    flex: 1,

  },

  taskSubject: {

    color: '#FFFFFF',

    fontSize: 18,

    fontWeight: 'bold',

  },

  taskChapter: {

    color: '#FFFFFF',

    fontSize: 14,

    marginTop: 4,

  },

  taskDetails: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginTop: 10,

  },

  taskParticipants: {

    flexDirection: 'row',

  },

  participantImage: {

    width: 24,

    height: 24,

    borderRadius: 12,

    marginRight: -8,

  },

  taskPlatform: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  platformText: {

    color: '#FFFFFF',

    fontSize: 12,

    marginLeft: 4,

  },

  taskOptionsButton: {

    justifyContent: 'center',

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

    paddingVertical: 10,

  },

  navItem: {

    alignItems: 'center',

  },

  navText: {

    fontSize: 12,

    color: '#888888',

    marginTop: 4,

  },

});



export default CalendarScreen;