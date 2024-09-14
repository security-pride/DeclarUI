import React from 'react';

import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const HomeScreen = () => {

  const navigation = useNavigation();



  const courses = [

    { name: 'Mathematics', color: '#FF6B6B', icon: 'calculator-outline' },

    { name: 'Chemistry', color: '#FFD93D', icon: 'flask-outline' },

    { name: 'Physics', color: '#6BCB77', icon: 'magnet-outline' },

  ];



  return (

    <SafeAreaView style={styles.container}>

      <ScrollView>

        <View style={styles.header}>

          <View>

            <Text style={styles.greeting}>Hello Liana</Text>

            <Text style={styles.taskCount}>

              You've got <Text style={styles.taskCountHighlight}>4 tasks</Text> today

            </Text>

          </View>

          <TouchableOpacity>

            <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />

            <View style={styles.notificationBadge}>

              <Text style={styles.notificationText}>3</Text>

            </View>

          </TouchableOpacity>

        </View>



        <View style={styles.coursesSection}>

          <Text style={styles.sectionTitle}>Courses</Text>

          <Text style={styles.sectionSubtitle}>Your running subjects</Text>

          <View style={styles.courseGrid}>

            {courses.map((course, index) => (

              <TouchableOpacity key={index} style={[styles.courseItem, { backgroundColor: course.color }]}>

                <Icon name={course.icon} size={24} color="#FFFFFF" />

                <Text style={styles.courseText}>{course.name}</Text>

              </TouchableOpacity>

            ))}

          </View>

        </View>



        <View style={styles.scheduleSection}>

          <Text style={styles.sectionTitle}>Your schedule</Text>

          <Text style={styles.sectionSubtitle}>Upcoming classes and tasks</Text>

          <View style={styles.scheduleCard}>

            <View style={styles.scheduleHeader}>

              <Text style={styles.scheduleTitle}>Physics</Text>

              <TouchableOpacity>

                <Icon name="ellipsis-vertical" size={20} color="#6B7280" />

              </TouchableOpacity>

            </View>

            <Text style={styles.scheduleSubtitle}>Chapter 3: Force</Text>

            <View style={styles.scheduleInfo}>

              <View style={styles.scheduleInfoItem}>

                <Icon name="time-outline" size={16} color="#6B7280" />

                <Text style={styles.scheduleInfoText}>09:30</Text>

              </View>

              <View style={styles.scheduleInfoItem}>

                <Icon name="person-outline" size={16} color="#6B7280" />

                <Text style={styles.scheduleInfoText}>Alex Jesus</Text>

              </View>

            </View>

            <View style={styles.scheduleInfoItem}>

              <Icon name="videocam-outline" size={16} color="#6B7280" />

              <Text style={styles.scheduleInfoText}>Google Meet</Text>

            </View>

          </View>

        </View>

      </ScrollView>



      <View style={styles.bottomNav}>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>

          <Icon name="home" size={24} color="#10B981" />

          <Text style={[styles.navText, styles.activeNavText]}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Tasks')}>

          <Icon name="list-outline" size={24} color="#6B7280" />

          <Text style={styles.navText}>Tasks</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Classroom')}>

          <Icon name="school-outline" size={24} color="#6B7280" />

          <Text style={styles.navText}>Classroom</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Discuss')}>

          <Icon name="chatbubble-outline" size={24} color="#6B7280" />

          <Text style={styles.navText}>Discuss</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFFFFF',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 20,

  },

  greeting: {

    fontSize: 16,

    color: '#6B7280',

  },

  taskCount: {

    fontSize: 24,

    fontWeight: 'bold',

    color: '#111827',

  },

  taskCountHighlight: {

    color: '#10B981',

  },

  profileImage: {

    width: 40,

    height: 40,

    borderRadius: 20,

  },

  notificationBadge: {

    position: 'absolute',

    top: -5,

    right: -5,

    backgroundColor: '#EF4444',

    borderRadius: 10,

    width: 20,

    height: 20,

    justifyContent: 'center',

    alignItems: 'center',

  },

  notificationText: {

    color: '#FFFFFF',

    fontSize: 12,

    fontWeight: 'bold',

  },

  coursesSection: {

    padding: 20,

  },

  sectionTitle: {

    fontSize: 20,

    fontWeight: 'bold',

    color: '#111827',

  },

  sectionSubtitle: {

    fontSize: 14,

    color: '#6B7280',

    marginTop: 4,

  },

  courseGrid: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginTop: 16,

  },

  courseItem: {

    width: '30%',

    aspectRatio: 1,

    borderRadius: 16,

    padding: 16,

    justifyContent: 'space-between',

  },

  courseText: {

    color: '#FFFFFF',

    fontWeight: 'bold',

    fontSize: 16,

  },

  scheduleSection: {

    padding: 20,

  },

  scheduleCard: {

    backgroundColor: '#F3F4F6',

    borderRadius: 16,

    padding: 16,

    marginTop: 16,

  },

  scheduleHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

  },

  scheduleTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    color: '#111827',

  },

  scheduleSubtitle: {

    fontSize: 14,

    color: '#6B7280',

    marginTop: 4,

  },

  scheduleInfo: {

    flexDirection: 'row',

    marginTop: 12,

  },

  scheduleInfoItem: {

    flexDirection: 'row',

    alignItems: 'center',

    marginRight: 16,

    marginTop: 4,

  },

  scheduleInfoText: {

    fontSize: 14,

    color: '#6B7280',

    marginLeft: 4,

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#E5E7EB',

    paddingVertical: 10,

  },

  navItem: {

    alignItems: 'center',

  },

  navText: {

    fontSize: 12,

    color: '#6B7280',

    marginTop: 4,

  },

  activeNavText: {

    color: '#10B981',

  },

});



export default HomeScreen;