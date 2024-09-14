import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const ProfileScreen = () => {

  const navigation = useNavigation();



  const taskCategories = [

    { title: 'Personal', icon: 'person-outline', tasks: 6, color: '#8A2BE2' },

    { title: 'Work', icon: 'briefcase-outline', tasks: 8, color: '#87CEFA' },

    { title: 'Private', icon: 'lock-closed-outline', tasks: 3, color: '#FF6347' },

    { title: 'Meeting', icon: 'people-outline', tasks: 4, color: '#90EE90' },

    { title: 'Events', icon: 'calendar-outline', tasks: 4, color: '#8A2BE2' },

    { title: 'Create Board', icon: 'add-outline', tasks: null, color: '#FFA07A' },

  ];



  const renderTaskCategory = ({ title, icon, tasks, color }) => (

    <TouchableOpacity style={styles.categoryCard}>

      <View style={[styles.categoryIcon, { backgroundColor: color }]}>

        <Icon name={icon} size={24} color="#FFF" />

      </View>

      <Text style={styles.categoryTitle}>{title}</Text>

      {tasks !== null && <Text style={styles.categoryTasks}>{tasks} Task</Text>}

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <ScrollView>

        <View style={styles.header}>

          <TouchableOpacity style={styles.moreButton}>

            <Icon name="ellipsis-horizontal" size={24} color="#000" />

          </TouchableOpacity>

        </View>



        <View style={styles.profileInfo}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.avatar} />

          <Text style={styles.name}>Steve Job</Text>

          <Text style={styles.email}>SteveJob@gmail.com</Text>

        </View>



        <View style={styles.categoriesContainer}>

          {taskCategories.map((category, index) => (

            <View key={index} style={styles.categoryWrapper}>

              {renderTaskCategory(category)}

            </View>

          ))}

        </View>

      </ScrollView>



      <View style={styles.bottomNavigation}>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="home-outline" size={24} color="#888" />

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

          <Icon name="person" size={24} color="#4a3bf5" />

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFF',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'flex-end',

    padding: 20,

  },

  moreButton: {

    padding: 5,

  },

  profileInfo: {

    alignItems: 'center',

    marginBottom: 30,

  },

  avatar: {

    width: 100,

    height: 100,

    borderRadius: 50,

    marginBottom: 15,

  },

  name: {

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  email: {

    fontSize: 16,

    color: '#888',

  },

  categoriesContainer: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',

    paddingHorizontal: 20,

  },

  categoryWrapper: {

    width: '48%',

    marginBottom: 15,

  },

  categoryCard: {

    backgroundColor: '#F0F0F0',

    borderRadius: 15,

    padding: 15,

    alignItems: 'center',

  },

  categoryIcon: {

    width: 50,

    height: 50,

    borderRadius: 25,

    justifyContent: 'center',

    alignItems: 'center',

    marginBottom: 10,

  },

  categoryTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  categoryTasks: {

    fontSize: 14,

    color: '#888',

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



export default ProfileScreen;