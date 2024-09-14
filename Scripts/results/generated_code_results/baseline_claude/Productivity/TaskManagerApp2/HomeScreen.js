import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const HomeScreen = () => {

  const navigation = useNavigation();



  const taskCards = [

    { title: 'Complete', count: 86, color: '#87CEFA', icon: 'checkmark-circle-outline' },

    { title: 'Pending', count: 15, color: '#8A2BE2', icon: 'time-outline' },

    { title: 'Canceled', count: 15, color: '#FF6347', icon: 'close-circle-outline' },

    { title: 'On Going', count: 67, color: '#90EE90', icon: 'play-circle-outline' },

  ];



  const todayTasks = [

    { title: 'Cleaning Clothes', time: '07:00 - 07:15', tags: ['Urgent', 'Home'] },

    { title: 'Cleaning Clothes', time: '08:00 - 08:35', tags: ['Urgent', 'Home'] },

  ];



  const renderTaskCard = ({ title, count, color, icon }) => (

    <TouchableOpacity style={[styles.taskCard, { backgroundColor: color }]}>

      <View style={styles.taskCardContent}>

        <Icon name={icon} size={24} color="#FFF" />

        <Text style={styles.taskCardCount}>{count}</Text>

        <Text style={styles.taskCardTitle}>{title}</Text>

      </View>

      <Text style={styles.taskCardTask}>Task</Text>

      <Icon name="chevron-forward-outline" size={24} color="#FFF" style={styles.taskCardArrow} />

    </TouchableOpacity>

  );



  const renderTodayTask = ({ title, time, tags }) => (

    <View style={styles.todayTaskItem}>

      <View style={styles.todayTaskLeft}>

        <View style={styles.todayTaskIndicator} />

      </View>

      <View style={styles.todayTaskContent}>

        <Text style={styles.todayTaskTitle}>{title}</Text>

        <Text style={styles.todayTaskTime}>{time}</Text>

        <View style={styles.todayTaskTags}>

          {tags.map((tag, index) => (

            <View key={index} style={styles.todayTaskTag}>

              <Text style={styles.todayTaskTagText}>{tag}</Text>

            </View>

          ))}

        </View>

      </View>

      <TouchableOpacity style={styles.todayTaskMore}>

        <Icon name="ellipsis-vertical" size={20} color="#000" />

      </TouchableOpacity>

    </View>

  );



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <View>

          <Text style={styles.greeting}>Hi, Steven</Text>

          <Text style={styles.subGreeting}>Let's make this day productive</Text>

        </View>

        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.avatar} />

      </View>



      <Text style={styles.sectionTitle}>My Task</Text>

      <View style={styles.taskCardsContainer}>

        {taskCards.map((card, index) => (

          <View key={index} style={styles.taskCardWrapper}>

            {renderTaskCard(card)}

          </View>

        ))}

      </View>



      <View style={styles.todayTaskHeader}>

        <Text style={styles.sectionTitle}>Today Task</Text>

        <TouchableOpacity>

          <Text style={styles.viewAllText}>View all</Text>

        </TouchableOpacity>

      </View>



      {todayTasks.map((task, index) => (

        <React.Fragment key={index}>

          {renderTodayTask(task)}

        </React.Fragment>

      ))}



      <View style={styles.bottomNavigation}>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="home" size={24} color="#4a3bf5" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="calendar-outline" size={24} color="#888" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.addTaskButton}>

          <Icon name="add" size={32} color="#FFF" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="pie-chart-outline" size={24} color="#888" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="person-outline" size={24} color="#888" />

        </TouchableOpacity>

      </View>

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFF',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 20,

  },

  greeting: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  subGreeting: {

    fontSize: 14,

    color: '#888',

  },

  avatar: {

    width: 50,

    height: 50,

    borderRadius: 25,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginLeft: 20,

    marginTop: 20,

  },

  taskCardsContainer: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',

    padding: 20,

  },

  taskCardWrapper: {

    width: '48%',

    marginBottom: 15,

  },

  taskCard: {

    borderRadius: 15,

    padding: 15,

    height: 120,

  },

  taskCardContent: {

    flex: 1,

  },

  taskCardCount: {

    fontSize: 24,

    fontWeight: 'bold',

    color: '#FFF',

    marginVertical: 5,

  },

  taskCardTitle: {

    fontSize: 16,

    color: '#FFF',

  },

  taskCardTask: {

    fontSize: 12,

    color: '#FFF',

    opacity: 0.8,

  },

  taskCardArrow: {

    position: 'absolute',

    right: 10,

    bottom: 10,

  },

  todayTaskHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingRight: 20,

  },

  viewAllText: {

    color: '#4a3bf5',

    fontSize: 14,

  },

  todayTaskItem: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 20,

  },

  todayTaskLeft: {

    marginRight: 15,

  },

  todayTaskIndicator: {

    width: 3,

    height: 40,

    backgroundColor: '#4a3bf5',

    borderRadius: 3,

  },

  todayTaskContent: {

    flex: 1,

  },

  todayTaskTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  todayTaskTime: {

    fontSize: 14,

    color: '#888',

    marginVertical: 5,

  },

  todayTaskTags: {

    flexDirection: 'row',

  },

  todayTaskTag: {

    backgroundColor: '#F0F0F0',

    borderRadius: 10,

    paddingHorizontal: 10,

    paddingVertical: 2,

    marginRight: 5,

  },

  todayTaskTagText: {

    fontSize: 12,

    color: '#888',

  },

  todayTaskMore: {

    padding: 5,

  },

  bottomNavigation: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

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



export default HomeScreen;