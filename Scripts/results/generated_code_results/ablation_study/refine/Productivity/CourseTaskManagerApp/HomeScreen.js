import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const HomeScreen = ({ navigation }) => {

  return (

    <View style={styles.container}>

      <ScrollView contentContainerStyle={styles.scrollContent}>

        <View style={styles.header}>

          <View>

            <Text style={styles.greeting}>Hello Liana</Text>

            <Text style={styles.taskCount}>You've got <Text style={styles.taskNumber}>4 tasks</Text> today</Text>

          </View>

          <TouchableOpacity style={styles.profileButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />

            <View style={styles.notificationBadge}>

              <Text style={styles.notificationText}>2</Text>

            </View>

          </TouchableOpacity>

        </View>



        <Text style={styles.sectionTitle}>Courses</Text>

        <Text style={styles.sectionSubtitle}>Your running subjects</Text>

        <View style={styles.coursesContainer}>

          <TouchableOpacity style={[styles.courseCard, { backgroundColor: '#FF6B6B' }]}>

            <Icon name="functions" size={40} color="#FFF" />

            <Text style={styles.courseText}>Mathematics</Text>

          </TouchableOpacity>

          <TouchableOpacity style={[styles.courseCard, { backgroundColor: '#FFA06B' }]}>

            <Icon name="science" size={40} color="#FFF" />

            <Text style={styles.courseText}>Chemistry</Text>

          </TouchableOpacity>

        </View>



        <Text style={styles.sectionTitle}>Your schedule</Text>

        <Text style={styles.sectionSubtitle}>Upcoming classes and tasks</Text>

        <View style={styles.scheduleCard}>

          <View style={styles.scheduleHeader}>

            <Text style={styles.scheduleSubject}>Physics</Text>

            <TouchableOpacity>

              <Icon name="more-vert" size={24} color="#FFF" />

            </TouchableOpacity>

          </View>

          <Text style={styles.scheduleChapter}>Chapter 3: Force</Text>

          <View style={styles.scheduleDetails}>

            <View style={styles.scheduleItem}>

              <Icon name="access-time" size={16} color="#FFF" />

              <Text style={styles.scheduleText}>09:30</Text>

            </View>

            <View style={styles.scheduleItem}>

              <Icon name="person" size={16} color="#FFF" />

              <Text style={styles.scheduleText}>Alex Jesus</Text>

            </View>

            <View style={styles.scheduleItem}>

              <Icon name="video-call" size={16} color="#FFF" />

              <Text style={styles.scheduleText}>Google Meet</Text>

            </View>

          </View>

        </View>

      </ScrollView>



      <View style={styles.navbar}>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="home" size={24} color="#4CAF50" />

          <Text style={[styles.navText, styles.activeNavText]}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Tasks')}>

          <Icon name="list" size={24} color="#888" />

          <Text style={styles.navText}>Tasks</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Classroom')}>

          <Icon name="class" size={24} color="#888" />

          <Text style={styles.navText}>Classroom</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Discussion')}>

          <Icon name="chat" size={24} color="#888" />

          <Text style={styles.navText}>Discuss</Text>

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

  scrollContent: {

    padding: 20,

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 20,

  },

  greeting: {

    fontSize: 24,

    fontWeight: 'bold',

    color: '#333',

  },

  taskCount: {

    fontSize: 16,

    color: '#666',

  },

  taskNumber: {

    color: '#4CAF50',

    fontWeight: 'bold',

  },

  profileButton: {

    position: 'relative',

  },

  profileImage: {

    width: 50,

    height: 50,

    borderRadius: 25,

  },

  notificationBadge: {

    position: 'absolute',

    top: -5,

    right: -5,

    backgroundColor: 'red',

    borderRadius: 10,

    width: 20,

    height: 20,

    justifyContent: 'center',

    alignItems: 'center',

  },

  notificationText: {

    color: '#FFF',

    fontSize: 12,

    fontWeight: 'bold',

  },

  sectionTitle: {

    fontSize: 20,

    fontWeight: 'bold',

    color: '#333',

    marginTop: 20,

  },

  sectionSubtitle: {

    fontSize: 14,

    color: '#888',

    marginBottom: 10,

  },

  coursesContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

  },

  courseCard: {

    width: '48%',

    aspectRatio: 1,

    borderRadius: 15,

    padding: 20,

    justifyContent: 'space-between',

  },

  courseText: {

    color: '#FFF',

    fontSize: 18,

    fontWeight: 'bold',

  },

  scheduleCard: {

    backgroundColor: '#7B68EE',

    borderRadius: 15,

    padding: 20,

  },

  scheduleHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

  },

  scheduleSubject: {

    color: '#FFF',

    fontSize: 20,

    fontWeight: 'bold',

  },

  scheduleChapter: {

    color: '#FFF',

    fontSize: 16,

    marginTop: 5,

  },

  scheduleDetails: {

    marginTop: 15,

  },

  scheduleItem: {

    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 5,

  },

  scheduleText: {

    color: '#FFF',

    marginLeft: 10,

  },

  navbar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    backgroundColor: '#FFF',

    paddingVertical: 10,

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

  },

  navItem: {

    alignItems: 'center',

  },

  navText: {

    fontSize: 12,

    marginTop: 4,

    color: '#888',

  },

  activeNavText: {

    color: '#4CAF50',

  },

});



export default HomeScreen;