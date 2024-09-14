import React, { useState } from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const CalendarScreen = () => {

  const navigation = useNavigation();

  const [selectedFilter, setSelectedFilter] = useState('All');



  const renderCalendar = () => (

    <View style={styles.calendar}>

      <View style={styles.calendarHeader}>

        <TouchableOpacity>

          <Icon name="chevron-back-outline" size={24} color="#FFF" />

        </TouchableOpacity>

        <Text style={styles.calendarTitle}>February 2022</Text>

        <TouchableOpacity>

          <Icon name="chevron-forward-outline" size={24} color="#FFF" />

        </TouchableOpacity>

      </View>

      <View style={styles.calendarDays}>

        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (

          <Text key={index} style={styles.calendarDay}>{day}</Text>

        ))}

      </View>

      <View style={styles.calendarDates}>

        {[14, 15, 16, 17, 18, 19, 20].map((date, index) => (

          <TouchableOpacity

            key={index}

            style={[styles.calendarDate, date === 18 && styles.selectedDate]}

          >

            <Text style={[styles.calendarDateText, date === 18 && styles.selectedDateText]}>

              {date}

            </Text>

          </TouchableOpacity>

        ))}

      </View>

    </View>

  );



  const renderFilters = () => (

    <View style={styles.filters}>

      {['All', 'Ongoing', 'Completed'].map((filter) => (

        <TouchableOpacity

          key={filter}

          style={[styles.filterButton, selectedFilter === filter && styles.selectedFilter]}

          onPress={() => setSelectedFilter(filter)}

        >

          <Text style={[styles.filterText, selectedFilter === filter && styles.selectedFilterText]}>

            {filter}

          </Text>

        </TouchableOpacity>

      ))}

    </View>

  );



  const renderTask = (time, title, duration, progress, color) => (

    <View style={[styles.task, { backgroundColor: color }]}>

      <View style={styles.taskHeader}>

        <Text style={styles.taskTitle}>{title}</Text>

        <TouchableOpacity>

          <Icon name="ellipsis-vertical" size={20} color="#000" />

        </TouchableOpacity>

      </View>

      <View style={styles.taskTime}>

        <Icon name="time-outline" size={16} color="#666" />

        <Text style={styles.taskDuration}>{duration}</Text>

      </View>

      <View style={styles.progressBar}>

        <View style={[styles.progress, { width: `${progress}%` }]} />

      </View>

      <Text style={styles.progressText}>{progress}%</Text>

    </View>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

        <Text style={styles.headerTitle}>Today's Task</Text>

      </View>

      {renderCalendar()}

      {renderFilters()}

      <ScrollView style={styles.taskList}>

        <Text style={styles.timeLabel}>09:00 AM</Text>

        {renderTask('10:00 AM', 'Landing page design', '09AM-11AM', 100, '#FFEBEE')}

        <Text style={styles.timeLabel}>11:00 AM</Text>

        {renderTask('12:00 PM', 'Dashboard redesign', '11AM-01PM', 55, '#E3F2FD')}

        <Text style={styles.timeLabel}>01:00 PM</Text>

        <Text style={styles.timeLabel}>02:00 PM</Text>

        {renderTask('03:00 PM', 'Education app design', '02PM-03PM', 30, '#E8EAF6')}

      </ScrollView>

      <View style={styles.bottomNav}>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>

          <Icon name="home-outline" size={24} color="#888" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>

          <Icon name="calendar-outline" size={24} color="#00BCD4" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddTask')}>

          <Icon name="add" size={32} color="#FFF" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="notifications-outline" size={24} color="#888" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="settings-outline" size={24} color="#888" />

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

    alignItems: 'center',

    padding: 20,

  },

  avatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 10,

  },

  headerTitle: {

    fontSize: 20,

    fontWeight: 'bold',

  },

  calendar: {

    backgroundColor: '#00BCD4',

    borderRadius: 10,

    margin: 20,

    padding: 15,

  },

  calendarHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 10,

  },

  calendarTitle: {

    color: '#FFF',

    fontSize: 18,

    fontWeight: 'bold',

  },

  calendarDays: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    marginBottom: 10,

  },

  calendarDay: {

    color: '#FFF',

    fontSize: 14,

  },

  calendarDates: {

    flexDirection: 'row',

    justifyContent: 'space-around',

  },

  calendarDate: {

    width: 30,

    height: 30,

    justifyContent: 'center',

    alignItems: 'center',

    borderRadius: 15,

  },

  calendarDateText: {

    color: '#FFF',

    fontSize: 16,

  },

  selectedDate: {

    backgroundColor: '#FFF',

  },

  selectedDateText: {

    color: '#00BCD4',

  },

  filters: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    marginBottom: 20,

  },

  filterButton: {

    paddingVertical: 8,

    paddingHorizontal: 20,

    borderRadius: 20,

  },

  selectedFilter: {

    backgroundColor: '#FF7043',

  },

  filterText: {

    color: '#888',

  },

  selectedFilterText: {

    color: '#FFF',

  },

  taskList: {

    flex: 1,

    paddingHorizontal: 20,

  },

  timeLabel: {

    color: '#888',

    marginBottom: 10,

  },

  task: {

    borderRadius: 10,

    padding: 15,

    marginBottom: 20,

  },

  taskHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 5,

  },

  taskTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  taskTime: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 10,

  },

  taskDuration: {

    marginLeft: 5,

    color: '#666',

  },

  progressBar: {

    height: 5,

    backgroundColor: '#E0E0E0',

    borderRadius: 2.5,

    marginBottom: 5,

  },

  progress: {

    height: 5,

    backgroundColor: '#FF7043',

    borderRadius: 2.5,

  },

  progressText: {

    alignSelf: 'flex-end',

    color: '#666',

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    backgroundColor: '#FFF',

    paddingVertical: 10,

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

  },

  addButton: {

    backgroundColor: '#00BCD4',

    width: 50,

    height: 50,

    borderRadius: 25,

    justifyContent: 'center',

    alignItems: 'center',

    elevation: 5,

  },

});



export default CalendarScreen;