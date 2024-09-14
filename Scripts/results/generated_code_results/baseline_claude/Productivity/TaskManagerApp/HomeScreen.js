import React from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const HomeScreen = () => {

  const navigation = useNavigation();



  const renderDailyTaskCard = () => (

    <View style={styles.dailyTaskCard}>

      <View style={styles.dailyTaskContent}>

        <Text style={styles.dailyTaskTitle}>Your daily task almost done!</Text>

        <TouchableOpacity style={styles.viewTaskButton}>

          <Text style={styles.viewTaskButtonText}>View Task</Text>

        </TouchableOpacity>

      </View>

      <View style={styles.progressCircle}>

        <Text style={styles.progressText}>95%</Text>

      </View>

      <TouchableOpacity style={styles.moreButton}>

        <Icon name="ellipsis-vertical" size={20} color="#FFFFFF" />

      </TouchableOpacity>

    </View>

  );



  const renderTaskCard = (title, progress, color, iconName) => (

    <View style={[styles.taskCard, { backgroundColor: color }]}>

      <View style={styles.taskIconContainer}>

        <Icon name={iconName} size={24} color="#FFFFFF" />

      </View>

      <Text style={styles.taskCardTitle}>{title}</Text>

      <View style={styles.taskProgressContainer}>

        <Text style={styles.taskProgressLabel}>Progress</Text>

        <Text style={styles.taskProgressValue}>{progress}%</Text>

      </View>

      <View style={styles.taskProgressBar}>

        <View style={[styles.taskProgress, { width: `${progress}%` }]} />

      </View>

    </View>

  );



  const renderUpcomingTask = () => (

    <View style={styles.upcomingTaskCard}>

      <View style={styles.upcomingTaskIcon}>

        <Icon name="document-text-outline" size={20} color="#00BCD4" />

      </View>

      <View style={styles.upcomingTaskContent}>

        <Text style={styles.upcomingTaskTitle}>Website Design</Text>

        <Text style={styles.upcomingTaskDate}>23 Feb 2022</Text>

      </View>

      <TouchableOpacity style={styles.upcomingTaskMoreButton}>

        <Icon name="ellipsis-vertical" size={20} color="#000000" />

      </TouchableOpacity>

    </View>

  );



  return (

    <View style={styles.container}>

      <ScrollView>

        <View style={styles.header}>

          <View style={styles.userInfo}>

            <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

            <View>

              <Text style={styles.userName}>Linda C. Ng</Text>

              <Text style={styles.userDate}>18 Feb 2022</Text>

            </View>

          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Search')}>

            <Icon name="search-outline" size={24} color="#000000" />

          </TouchableOpacity>

        </View>



        {renderDailyTaskCard()}



        <View style={styles.sectionHeader}>

          <Text style={styles.sectionTitle}>Today's Task</Text>

          <TouchableOpacity onPress={() => navigation.navigate('AllTasks')}>

            <Text style={styles.seeAllButton}>See All</Text>

          </TouchableOpacity>

        </View>



        <View style={styles.taskCardsContainer}>

          {renderTaskCard("User experience design", 40, "#00BCD4", "person-outline")}

          {renderTaskCard("Meeting with designer", 0, "#FF7043", "people-outline")}

        </View>



        <View style={styles.sectionHeader}>

          <Text style={styles.sectionTitle}>Upcoming Task</Text>

          <TouchableOpacity onPress={() => navigation.navigate('AllTasks')}>

            <Text style={styles.seeAllButton}>See All</Text>

          </TouchableOpacity>

        </View>



        {renderUpcomingTask()}

      </ScrollView>



      <View style={styles.bottomNav}>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="home" size={24} color="#00BCD4" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Calendar')}>

          <Icon name="calendar-outline" size={24} color="#888888" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddTask')}>

          <Icon name="add" size={32} color="#FFFFFF" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="notifications-outline" size={24} color="#888888" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="settings-outline" size={24} color="#888888" />

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

    padding: 20,

  },

  userInfo: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  avatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 10,

  },

  userName: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  userDate: {

    fontSize: 14,

    color: '#888888',

  },

  dailyTaskCard: {

    backgroundColor: '#2E3A59',

    borderRadius: 15,

    margin: 20,

    padding: 20,

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

  },

  dailyTaskContent: {

    flex: 1,

  },

  dailyTaskTitle: {

    color: '#FFFFFF',

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  viewTaskButton: {

    backgroundColor: '#00BCD4',

    paddingHorizontal: 15,

    paddingVertical: 8,

    borderRadius: 20,

    alignSelf: 'flex-start',

  },

  viewTaskButtonText: {

    color: '#FFFFFF',

    fontWeight: 'bold',

  },

  progressCircle: {

    width: 60,

    height: 60,

    borderRadius: 30,

    borderWidth: 5,

    borderColor: '#00BCD4',

    justifyContent: 'center',

    alignItems: 'center',

  },

  progressText: {

    color: '#FFFFFF',

    fontWeight: 'bold',

  },

  moreButton: {

    position: 'absolute',

    top: 10,

    right: 10,

  },

  sectionHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 20,

    marginTop: 20,

    marginBottom: 10,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  seeAllButton: {

    color: '#00BCD4',

  },

  taskCardsContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    paddingHorizontal: 20,

  },

  taskCard: {

    width: '48%',

    borderRadius: 15,

    padding: 15,

  },

  taskIconContainer: {

    width: 40,

    height: 40,

    borderRadius: 20,

    backgroundColor: 'rgba(255, 255, 255, 0.2)',

    justifyContent: 'center',

    alignItems: 'center',

    marginBottom: 10,

  },

  taskCardTitle: {

    color: '#FFFFFF',

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  taskProgressContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 5,

  },

  taskProgressLabel: {

    color: '#FFFFFF',

    opacity: 0.8,

  },

  taskProgressValue: {

    color: '#FFFFFF',

    fontWeight: 'bold',

  },

  taskProgressBar: {

    height: 5,

    backgroundColor: 'rgba(255, 255, 255, 0.2)',

    borderRadius: 2.5,

  },

  taskProgress: {

    height: 5,

    backgroundColor: '#FFFFFF',

    borderRadius: 2.5,

  },

  upcomingTaskCard: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    borderRadius: 15,

    padding: 15,

    marginHorizontal: 20,

    marginBottom: 20,

  },

  upcomingTaskIcon: {

    width: 40,

    height: 40,

    borderRadius: 20,

    backgroundColor: '#E3F2FD',

    justifyContent: 'center',

    alignItems: 'center',

    marginRight: 15,

  },

  upcomingTaskContent: {

    flex: 1,

  },

  upcomingTaskTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  upcomingTaskDate: {

    color: '#888888',

  },

  upcomingTaskMoreButton: {

    padding: 5,

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    paddingVertical: 10,

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

  },

  navItem: {

    padding: 10,

  },

  addButton: {

    backgroundColor: '#00BCD4',

    width: 60,

    height: 60,

    borderRadius: 30,

    justifyContent: 'center',

    alignItems: 'center',

    elevation: 5,

  },

});



export default HomeScreen;