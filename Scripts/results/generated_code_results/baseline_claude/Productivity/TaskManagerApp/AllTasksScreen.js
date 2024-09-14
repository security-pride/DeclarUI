import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const TaskItem = ({ title, time, persons, progress, status }) => {

  const progressColor = status === 'Running' ? '#00BCD4' : 

                        status === 'Ongoing' ? '#3F51B5' : '#FF5722';



  return (

    <View style={styles.taskItem}>

      <View style={styles.taskHeader}>

        <Text style={styles.taskTitle}>{title}</Text>

        <TouchableOpacity>

          <Icon name="ellipsis-vertical" size={20} color="#000" />

        </TouchableOpacity>

      </View>

      <View style={styles.taskDetails}>

        <Icon name="time-outline" size={16} color="#888" />

        <Text style={styles.taskTime}>{time}</Text>

        <Icon name="people-outline" size={16} color="#888" />

        <Text style={styles.taskPersons}>{persons} Persons</Text>

      </View>

      <View style={styles.progressContainer}>

        <View style={[styles.progressBar, { width: `${progress}%`, backgroundColor: progressColor }]} />

      </View>

      <View style={styles.progressTextContainer}>

        <Text style={styles.progressText}>Progress</Text>

        <Text style={styles.progressPercentage}>{progress}%</Text>

      </View>

    </View>

  );

};



const AllTasksScreen = () => {

  const navigation = useNavigation();



  const tasks = [

    { id: '1', title: 'Meeting with designer', time: '09AM-10AM', persons: '04', progress: 60, status: 'Running' },

    { id: '2', title: 'Grocery app design', time: '10AM-11AM', persons: '05', progress: 95, status: 'Ongoing' },

    { id: '3', title: 'Dashboard redesign', time: '02PM-03PM', persons: '03', progress: 50, status: 'Running' },

  ];



  const renderTaskSection = (title, data) => (

    <>

      <Text style={[styles.sectionTitle, { color: data[0].status === 'Running' ? '#00BCD4' : '#3F51B5' }]}>{title}</Text>

      {data.map(task => <TaskItem key={task.id} {...task} />)}

    </>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Icon name="chevron-back-outline" size={24} color="#000" />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>All tasks</Text>

        <TouchableOpacity>

          <Icon name="search-outline" size={24} color="#000" />

        </TouchableOpacity>

      </View>

      <FlatList

        data={[

          { title: 'Todays task', data: tasks.filter(t => t.status === 'Running') },

          { title: 'Ongoing', data: tasks.filter(t => t.status === 'Ongoing') },

        ]}

        renderItem={({ item }) => renderTaskSection(item.title, item.data)}

        keyExtractor={(item, index) => index.toString()}

      />

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F5F5F5',

    padding: 20,

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 20,

  },

  headerTitle: {

    fontSize: 20,

    fontWeight: 'bold',

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  taskItem: {

    backgroundColor: '#FFFFFF',

    borderRadius: 10,

    padding: 15,

    marginBottom: 15,

  },

  taskHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 10,

  },

  taskTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  taskDetails: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 10,

  },

  taskTime: {

    marginLeft: 5,

    marginRight: 15,

    color: '#888',

  },

  taskPersons: {

    marginLeft: 5,

    color: '#888',

  },

  progressContainer: {

    height: 5,

    backgroundColor: '#E0E0E0',

    borderRadius: 2.5,

    marginBottom: 5,

  },

  progressBar: {

    height: 5,

    borderRadius: 2.5,

  },

  progressTextContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

  },

  progressText: {

    color: '#888',

  },

  progressPercentage: {

    color: '#888',

  },

});



export default AllTasksScreen;