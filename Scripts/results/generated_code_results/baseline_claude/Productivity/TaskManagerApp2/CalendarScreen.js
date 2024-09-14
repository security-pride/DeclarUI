import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const CalendarScreen = () => {

  const navigation = useNavigation();

  const [selectedDate, setSelectedDate] = useState(14);

  const [searchText, setSearchText] = useState('');



  const weekDays = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

  const schedules = [

    { id: 1, time: '07:00', title: 'Cleaning Clothes', duration: '07:00 - 07:15', tags: ['Urgent', 'Home'] },

    { id: 2, time: '07:15', title: 'Cleaning', duration: '07:15 - 07:30', tags: ['Urgent', 'Home'] },

    { id: 3, time: '08:00', title: 'Cleaning Clothes', duration: '08:00 - 08:35', tags: ['Urgent', 'Home'] },

    { id: 4, time: '08:00', title: 'Cleaning', duration: '08:00 - 08:15', tags: ['Urgent', 'Home'] },

    { id: 5, time: '10:00', title: 'Cleaning Clothes', duration: '10:00 - 10:15', tags: ['Urgent', 'Home'] },

  ];



  const renderWeekDay = ({ item, index }) => (

    <TouchableOpacity

      style={[

        styles.weekDayButton,

        selectedDate === index + 12 && styles.selectedWeekDay,

      ]}

      onPress={() => setSelectedDate(index + 12)}

    >

      <Text style={styles.weekDayText}>{item}</Text>

      <Text style={styles.dateText}>{index + 12}</Text>

    </TouchableOpacity>

  );



  const renderScheduleItem = ({ item }) => (

    <View style={styles.scheduleItem}>

      <Text style={styles.scheduleTime}>{item.time}</Text>

      <View style={styles.scheduleContent}>

        <View style={styles.scheduleHeader}>

          <Text style={styles.scheduleTitle}>{item.title}</Text>

          <TouchableOpacity>

            <Icon name="ellipsis-vertical" size={16} color="#000" />

          </TouchableOpacity>

        </View>

        <Text style={styles.scheduleDuration}>{item.duration}</Text>

        <View style={styles.tagContainer}>

          {item.tags.map((tag, index) => (

            <View key={index} style={styles.tag}>

              <Text style={styles.tagText}>{tag}</Text>

            </View>

          ))}

        </View>

      </View>

    </View>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.headerTitle}>Task</Text>

        <Text style={styles.headerDate}>August 2021</Text>

      </View>



      <View style={styles.searchContainer}>

        <Icon name="search-outline" size={20} color="#888" style={styles.searchIcon} />

        <TextInput

          style={styles.searchInput}

          placeholder="Search for task"

          value={searchText}

          onChangeText={setSearchText}

        />

      </View>



      <FlatList

        data={weekDays}

        renderItem={renderWeekDay}

        keyExtractor={(item) => item}

        horizontal

        showsHorizontalScrollIndicator={false}

        contentContainerStyle={styles.weekDayList}

      />



      <View style={styles.todayContainer}>

        <Text style={styles.todayText}>Today</Text>

        <Text style={styles.todayTime}>09 h 45 min</Text>

      </View>



      <ScrollView style={styles.scheduleList}>

        {schedules.map((item) => (

          <React.Fragment key={item.id}>

            {renderScheduleItem({ item })}

          </React.Fragment>

        ))}

        <View style={styles.emptySchedule}>

          <Text style={styles.emptyScheduleText}>You don't have any schedule for</Text>

          <TouchableOpacity style={styles.addButton}>

            <Text style={styles.addButtonText}>+ Add</Text>

          </TouchableOpacity>

        </View>

      </ScrollView>



      <View style={styles.bottomNavigation}>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="home-outline" size={24} color="#888" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="calendar-outline" size={24} color="#4a3bf5" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.addTaskButton}>

          <Icon name="add" size={32} color="#fff" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="pie-chart-outline" size={24} color="#888" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="person-outline" size={24} color="#888" />

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#fff',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 20,

    paddingTop: 40,

    paddingBottom: 20,

  },

  headerTitle: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  headerDate: {

    fontSize: 14,

    color: '#888',

  },

  searchContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#f0f0f0',

    borderRadius: 20,

    marginHorizontal: 20,

    paddingHorizontal: 15,

    marginBottom: 20,

  },

  searchIcon: {

    marginRight: 10,

  },

  searchInput: {

    flex: 1,

    height: 40,

  },

  weekDayList: {

    paddingHorizontal: 20,

  },

  weekDayButton: {

    alignItems: 'center',

    marginRight: 15,

    paddingVertical: 10,

    paddingHorizontal: 15,

    borderRadius: 10,

  },

  selectedWeekDay: {

    backgroundColor: '#4a3bf5',

  },

  weekDayText: {

    fontSize: 12,

    color: '#888',

    marginBottom: 5,

  },

  dateText: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  todayContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 20,

    marginVertical: 20,

  },

  todayText: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  todayTime: {

    fontSize: 14,

    color: '#888',

  },

  scheduleList: {

    flex: 1,

    paddingHorizontal: 20,

  },

  scheduleItem: {

    flexDirection: 'row',

    marginBottom: 20,

  },

  scheduleTime: {

    width: 50,

    fontSize: 14,

    color: '#888',

  },

  scheduleContent: {

    flex: 1,

    backgroundColor: '#f0f0f0',

    borderRadius: 10,

    padding: 10,

  },

  scheduleHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 5,

  },

  scheduleTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  scheduleDuration: {

    fontSize: 12,

    color: '#888',

    marginBottom: 5,

  },

  tagContainer: {

    flexDirection: 'row',

  },

  tag: {

    backgroundColor: '#e0e0e0',

    borderRadius: 10,

    paddingVertical: 2,

    paddingHorizontal: 8,

    marginRight: 5,

  },

  tagText: {

    fontSize: 12,

    color: '#888',

  },

  emptySchedule: {

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    paddingVertical: 10,

  },

  emptyScheduleText: {

    fontSize: 14,

    color: '#888',

  },

  addButton: {

    backgroundColor: '#f0f0f0',

    borderRadius: 15,

    paddingVertical: 5,

    paddingHorizontal: 10,

  },

  addButtonText: {

    fontSize: 14,

    color: '#4a3bf5',

  },

  bottomNavigation: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

    paddingVertical: 10,

  },

  navItem: {

    padding: 10,

  },

  addTaskButton: {

    backgroundColor: '#4a3bf5',

    borderRadius: 30,

    width: 60,

    height: 60,

    justifyContent: 'center',

    alignItems: 'center',

    marginTop: -30,

  },

});



export default CalendarScreen;