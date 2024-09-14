import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const HomeScreen = () => {

  const navigation = useNavigation();



  const courses = [

    { name: 'Mathematics', color: '#FF69B4' },

    { name: 'Chemistry', color: '#FFA500' },

  ];



  const schedule = [

    {

      subject: 'Physics',

      chapter: 'Chapter 3: Force',

      time: '09:30',

      instructor: 'Alex Jesus',

      platform: 'Google Meet',

    },

  ];



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <View>

          <Text style={styles.greeting}>Hello Liana</Text>

          <Text style={styles.title}>You've got 4 tasks today</Text>

        </View>

        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

      </View>



      <View style={styles.coursesSection}>

        <Text style={styles.sectionTitle}>Courses</Text>

        <Text style={styles.sectionSubtitle}>Your running subjects</Text>

        <View style={styles.courseList}>

          {courses.map((course, index) => (

            <TouchableOpacity key={index} style={[styles.courseItem, { backgroundColor: course.color }]}>

              <Icon name="school" size={24} color="#FFF" />

              <Text style={styles.courseName}>{course.name}</Text>

            </TouchableOpacity>

          ))}

        </View>

      </View>



      <View style={styles.scheduleSection}>

        <Text style={styles.sectionTitle}>Your schedule</Text>

        <Text style={styles.sectionSubtitle}>Upcoming classes and tasks</Text>

        {schedule.map((item, index) => (

          <TouchableOpacity

            key={index}

            style={styles.scheduleItem}

            onPress={() => navigation.navigate('Classroom')}

          >

            <View style={styles.scheduleInfo}>

              <Text style={styles.scheduleSubject}>{item.subject}</Text>

              <Text style={styles.scheduleChapter}>{item.chapter}</Text>

              <View style={styles.scheduleDetails}>

                <Icon name="access-time" size={16} color="#666" />

                <Text style={styles.scheduleTime}>{item.time}</Text>

                <Icon name="person" size={16} color="#666" />

                <Text style={styles.scheduleInstructor}>{item.instructor}</Text>

              </View>

              <View style={styles.schedulePlatform}>

                <Icon name="video-call" size={16} color="#666" />

                <Text style={styles.schedulePlatformText}>{item.platform}</Text>

              </View>

            </View>

            <Icon name="more-vert" size={24} color="#666" />

          </TouchableOpacity>

        ))}

      </View>



      <View style={styles.bottomNav}>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="home" size={24} color="#4CAF50" />

          <Text style={styles.navText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Calendar')}>

          <Icon name="event" size={24} color="#666" />

          <Text style={styles.navText}>Tasks</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Classroom')}>

          <Icon name="class" size={24} color="#666" />

          <Text style={styles.navText}>Classroom</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Discussion')}>

          <Icon name="chat" size={24} color="#666" />

          <Text style={styles.navText}>Discuss</Text>

        </TouchableOpacity>

      </View>

    </ScrollView>

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

    padding: 16,

  },

  greeting: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  title: {

    fontSize: 16,

    color: '#666',

  },

  avatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

  },

  coursesSection: {

    padding: 16,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 4,

  },

  sectionSubtitle: {

    fontSize: 14,

    color: '#666',

    marginBottom: 16,

  },

  courseList: {

    flexDirection: 'row',

    justifyContent: 'space-between',

  },

  courseItem: {

    width: '48%',

    padding: 16,

    borderRadius: 8,

    alignItems: 'center',

  },

  courseName: {

    color: '#FFF',

    marginTop: 8,

    fontWeight: 'bold',

  },

  scheduleSection: {

    padding: 16,

  },

  scheduleItem: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    backgroundColor: '#E8EAF6',

    borderRadius: 8,

    padding: 16,

    marginBottom: 16,

  },

  scheduleInfo: {

    flex: 1,

  },

  scheduleSubject: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 4,

  },

  scheduleChapter: {

    fontSize: 14,

    color: '#666',

    marginBottom: 8,

  },

  scheduleDetails: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 4,

  },

  scheduleTime: {

    marginLeft: 4,

    marginRight: 12,

  },

  scheduleInstructor: {

    marginLeft: 4,

  },

  schedulePlatform: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  schedulePlatformText: {

    marginLeft: 4,

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    backgroundColor: '#FFF',

    paddingVertical: 8,

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

  },

  navItem: {

    alignItems: 'center',

  },

  navText: {

    fontSize: 12,

    marginTop: 4,

  },

});



export default HomeScreen;