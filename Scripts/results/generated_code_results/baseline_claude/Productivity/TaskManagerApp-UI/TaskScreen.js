import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

const weekDates = [10, 11, 12, 13, 14, 15, 16];



const tasks = [

  {

    id: '1',

    status: 'URGENT',

    title: 'New Web UI Design Project',

    description: 'Website UI Design for $500',

    time: '10 - 11 AM',

    participants: 2,

  },

  {

    id: '2',

    status: 'RUNNING',

    title: 'Application Design Meeting',

    description: 'Website UI Design for $500',

    time: '10 - 11 AM',

    participants: 2,

  },

  {

    id: '3',

    status: 'ONGOING',

    title: 'Web Design Meeting',

    description: '',

    time: '',

    participants: 0,

  },

];



const TaskItem = ({ task }) => (

  <View style={styles.taskItem}>

    <Text style={[styles.taskStatus, { color: task.status === 'URGENT' ? '#FF6B6B' : task.status === 'RUNNING' ? '#4CAF50' : '#6A5ACD' }]}>

      {task.status}

    </Text>

    <View style={styles.taskContent}>

      <View style={styles.taskHeader}>

        <Text style={styles.taskTitle}>{task.title}</Text>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.moreIcon} />

        </TouchableOpacity>

      </View>

      <Text style={styles.taskDescription}>{task.description}</Text>

      {task.time && (

        <View style={styles.taskDetails}>

          <View style={styles.taskDetailItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.taskDetailIcon} />

            <Text style={styles.taskDetailText}>{task.time}</Text>

          </View>

          <View style={styles.taskDetailItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.taskDetailIcon} />

            <Text style={styles.taskDetailText}>{task.participants} Persons</Text>

          </View>

        </View>

      )}

    </View>

  </View>

);



const TaskScreen = () => {

  const navigation = useNavigation();



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.title}>Task</Text>

        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

      </View>



      <View style={styles.dateContainer}>

        <View>

          <Text style={styles.date}>May 01, 2020</Text>

          <Text style={styles.today}>Today</Text>

        </View>

        <TouchableOpacity style={styles.addTaskButton}>

          <Text style={styles.addTaskButtonText}>+ Add Task</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.calendar}>

        <FlatList

          data={weekDays}

          renderItem={({ item, index }) => (

            <View style={styles.calendarItem}>

              <Text style={styles.calendarDay}>{item}</Text>

              <Text style={[styles.calendarDate, index === 4 && styles.activeDate]}>{weekDates[index]}</Text>

            </View>

          )}

          keyExtractor={(item) => item}

          horizontal

          showsHorizontalScrollIndicator={false}

        />

      </View>



      <FlatList

        data={tasks}

        renderItem={({ item }) => <TaskItem task={item} />}

        keyExtractor={(item) => item.id}

        showsVerticalScrollIndicator={false}

      />



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.addButton}>

          <Text style={styles.addButtonText}>+</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F0F0F5',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 20,

    paddingTop: 20,

    paddingBottom: 10,

  },

  title: {

    fontSize: 28,

    fontWeight: 'bold',

    color: '#1E1E1E',

  },

  avatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

  },

  dateContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 20,

    marginBottom: 20,

  },

  date: {

    fontSize: 14,

    color: '#A0A0A0',

  },

  today: {

    fontSize: 24,

    fontWeight: 'bold',

    color: '#1E1E1E',

  },

  addTaskButton: {

    backgroundColor: '#FF6B6B',

    paddingHorizontal: 15,

    paddingVertical: 10,

    borderRadius: 20,

  },

  addTaskButtonText: {

    color: 'white',

    fontWeight: 'bold',

  },

  calendar: {

    marginBottom: 20,

  },

  calendarItem: {

    alignItems: 'center',

    marginHorizontal: 10,

  },

  calendarDay: {

    fontSize: 12,

    color: '#A0A0A0',

  },

  calendarDate: {

    fontSize: 16,

    fontWeight: 'bold',

    color: '#1E1E1E',

    marginTop: 5,

  },

  activeDate: {

    color: '#6A5ACD',

    borderBottomWidth: 2,

    borderBottomColor: '#6A5ACD',

  },

  taskItem: {

    backgroundColor: 'white',

    borderRadius: 15,

    marginHorizontal: 20,

    marginBottom: 15,

    padding: 15,

  },

  taskStatus: {

    fontSize: 12,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  taskContent: {

    borderLeftWidth: 2,

    borderLeftColor: '#FF6B6B',

    paddingLeft: 10,

  },

  taskHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

  },

  taskTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    color: '#1E1E1E',

  },

  moreIcon: {

    width: 20,

    height: 20,

  },

  taskDescription: {

    fontSize: 14,

    color: '#A0A0A0',

    marginTop: 5,

  },

  taskDetails: {

    flexDirection: 'row',

    marginTop: 10,

  },

  taskDetailItem: {

    flexDirection: 'row',

    alignItems: 'center',

    marginRight: 20,

  },

  taskDetailIcon: {

    width: 16,

    height: 16,

    marginRight: 5,

  },

  taskDetailText: {

    fontSize: 12,

    color: '#A0A0A0',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    backgroundColor: '#6A5ACD',

    paddingVertical: 10,

    borderTopLeftRadius: 20,

    borderTopRightRadius: 20,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

    tintColor: '#FFFFFF',

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

  addButtonText: {

    fontSize: 30,

    color: 'white',

  },

});



export default TaskScreen;