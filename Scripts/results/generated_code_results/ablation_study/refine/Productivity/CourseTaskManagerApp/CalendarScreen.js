import React from 'react';

import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const CalendarScreen = ({ navigation }) => {

  const renderDayItem = (day, date, isActive = false) => (

    <TouchableOpacity style={[styles.dayItem, isActive && styles.activeDayItem]}>

      <Text style={[styles.dayText, isActive && styles.activeDayText]}>{day}</Text>

      <Text style={[styles.dateText, isActive && styles.activeDateText]}>{date}</Text>

    </TouchableOpacity>

  );



  const renderEventItem = ({ time, title, subtitle, instructor, platform, color }) => (

    <View style={styles.eventItem}>

      <Text style={styles.eventTime}>{time}</Text>

      <View style={[styles.eventContent, { backgroundColor: color }]}>

        <Text style={styles.eventTitle}>{title}</Text>

        <Text style={styles.eventSubtitle}>{subtitle}</Text>

        <View style={styles.eventDetails}>

          <View style={styles.eventDetailItem}>

            <Icon name="person" size={16} color="#fff" />

            <Text style={styles.eventDetailText}>{instructor}</Text>

          </View>

          <View style={styles.eventDetailItem}>

            <Icon name="video-call" size={16} color="#fff" />

            <Text style={styles.eventDetailText}>{platform}</Text>

          </View>

        </View>

      </View>

    </View>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.dateHeader}>17 September</Text>

        <Text style={styles.todayText}>Today</Text>

        <TouchableOpacity style={styles.addTaskButton} onPress={() => navigation.navigate('AddTask')}>

          <Text style={styles.addTaskButtonText}>+ Add Task</Text>

        </TouchableOpacity>

      </View>

      

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.calendarStrip}>

        {renderDayItem('Mon', '14')}

        {renderDayItem('Tue', '15')}

        {renderDayItem('Wed', '16')}

        {renderDayItem('Thu', '17', true)}

        {renderDayItem('Fri', '18')}

        {renderDayItem('Sat', '19')}

        {renderDayItem('Sun', '20')}

      </ScrollView>



      <ScrollView style={styles.eventsContainer}>

        {renderEventItem({

          time: '9:30',

          title: 'Physics',

          subtitle: 'Chapter 3: Force',

          instructor: 'Alex Jesus',

          platform: 'Google Meet',

          color: '#8A7AFF'

        })}

        {renderEventItem({

          time: '11:00',

          title: 'Geography',

          subtitle: 'Chapter 12: Soil Profile',

          instructor: 'Jennifer Clark',

          platform: 'Zoom',

          color: '#4CAF50'

        })}

        {renderEventItem({

          time: '12:20',

          title: 'Assignment',

          subtitle: 'World Regional Pattern',

          instructor: 'Alexis Tentino',

          platform: 'Google Docs',

          color: '#FF7A5A'

        })}

      </ScrollView>



      <View style={styles.navbar}>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>

          <Icon name="home" size={24} color="#000" />

          <Text style={styles.navText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Tasks')}>

          <Icon name="list" size={24} color="#000" />

          <Text style={styles.navText}>Tasks</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Classroom')}>

          <Icon name="class" size={24} color="#000" />

          <Text style={styles.navText}>Classroom</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Chat')}>

          <Icon name="chat" size={24} color="#000" />

          <Text style={styles.navText}>Chat</Text>

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

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 20,

    paddingTop: 40,

    paddingBottom: 20,

  },

  dateHeader: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  todayText: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  addTaskButton: {

    backgroundColor: '#4CAF50',

    paddingHorizontal: 15,

    paddingVertical: 8,

    borderRadius: 20,

  },

  addTaskButtonText: {

    color: 'white',

    fontWeight: 'bold',

  },

  calendarStrip: {

    flexDirection: 'row',

    paddingVertical: 10,

    paddingHorizontal: 20,

  },

  dayItem: {

    alignItems: 'center',

    marginRight: 20,

  },

  activeDayItem: {

    backgroundColor: '#4CAF50',

    borderRadius: 20,

    paddingHorizontal: 10,

    paddingVertical: 5,

  },

  dayText: {

    fontSize: 14,

  },

  dateText: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  activeDayText: {

    color: 'white',

  },

  activeDateText: {

    color: 'white',

  },

  eventsContainer: {

    flex: 1,

    paddingHorizontal: 20,

  },

  eventItem: {

    flexDirection: 'row',

    marginBottom: 20,

  },

  eventTime: {

    width: 50,

    fontSize: 14,

    color: '#888',

  },

  eventContent: {

    flex: 1,

    backgroundColor: '#8A7AFF',

    borderRadius: 10,

    padding: 15,

  },

  eventTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    color: 'white',

  },

  eventSubtitle: {

    fontSize: 14,

    color: 'white',

    marginBottom: 10,

  },

  eventDetails: {

    flexDirection: 'row',

    justifyContent: 'space-between',

  },

  eventDetailItem: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  eventDetailText: {

    color: 'white',

    marginLeft: 5,

  },

  navbar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    paddingVertical: 10,

    backgroundColor: 'white',

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

  },

  navItem: {

    alignItems: 'center',

  },

  navText: {

    fontSize: 12,

    marginTop: 5,

  },

});



export default CalendarScreen;