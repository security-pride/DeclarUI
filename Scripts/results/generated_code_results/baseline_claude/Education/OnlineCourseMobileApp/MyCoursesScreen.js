import React, { useState } from 'react';

import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const MyCoursesScreen = () => {

  const navigation = useNavigation();

  const [activeTab, setActiveTab] = useState('Ongoing');



  const courseData = [

    {

      id: '1',

      title: 'Graphics Designer for Beginner',

      instructor: 'Nicola Tesla',

      rating: '4.9',

      reviews: '1,435',

      sessions: '7 / 15',

      progress: 82,

      color: '#4A90E2',

    },

    {

      id: '2',

      title: 'Graphics Designer for Beginner',

      instructor: 'Nicola Tesla',

      rating: '4.9',

      reviews: '1,435',

      sessions: '7 / 15',

      progress: 82,

      color: '#8E44AD',

    },

    {

      id: '3',

      title: 'Graphics Designer for Beginner',

      instructor: 'Nicola Tesla',

      rating: '4.9',

      reviews: '1,435',

      sessions: '7 / 15',

      progress: 82,

      color: '#E74C3C',

    },

  ];



  const CourseCard = ({ item }) => (

    <TouchableOpacity

      style={[styles.courseCard, { backgroundColor: item.color }]}

      onPress={() => navigation.navigate('CourseDetail', { courseId: item.id })}

    >

      <View style={styles.courseHeader}>

        <Image source={require('../assets/snack-icon.png')} style={styles.courseIcon} />

        <TouchableOpacity style={styles.moreButton}>

          <Text style={styles.moreButtonText}>•••</Text>

        </TouchableOpacity>

      </View>

      <Text style={styles.courseTitle}>{item.title}</Text>

      <View style={styles.instructorContainer}>

        <Image source={require('../assets/snack-icon.png')} style={styles.instructorAvatar} />

        <Text style={styles.instructorName}>{item.instructor}</Text>

        <View style={styles.ratingContainer}>

          <Text style={styles.starIcon}>★</Text>

          <Text style={styles.ratingText}>{item.rating}</Text>

          <Text style={styles.reviewsText}>({item.reviews} Reviews)</Text>

        </View>

      </View>

      <View style={styles.progressContainer}>

        <Image source={require('../assets/snack-icon.png')} style={styles.calendarIcon} />

        <Text style={styles.sessionsText}>Sessions {item.sessions}</Text>

        <View style={styles.progressBar}>

          <View style={[styles.progressFill, { width: `${item.progress}%` }]} />

        </View>

        <Text style={styles.progressText}>{item.progress}%</Text>

      </View>

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.headerTitle}>My Courses</Text>

        <TouchableOpacity style={styles.notificationButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.notificationIcon} />

          <View style={styles.notificationBadge} />

        </TouchableOpacity>

      </View>



      <View style={styles.tabContainer}>

        <TouchableOpacity

          style={[styles.tab, activeTab === 'Ongoing' && styles.activeTab]}

          onPress={() => setActiveTab('Ongoing')}

        >

          <Text style={[styles.tabText, activeTab === 'Ongoing' && styles.activeTabText]}>

            Ongoing <Text style={styles.tabCount}>8</Text>

          </Text>

        </TouchableOpacity>

        <TouchableOpacity

          style={[styles.tab, activeTab === 'Completed' && styles.activeTab]}

          onPress={() => setActiveTab('Completed')}

        >

          <Text style={[styles.tabText, activeTab === 'Completed' && styles.activeTabText]}>

            Completed <Text style={styles.tabCount}>12</Text>

          </Text>

        </TouchableOpacity>

      </View>



      <FlatList

        data={courseData}

        renderItem={({ item }) => <CourseCard item={item} />}

        keyExtractor={item => item.id}

        contentContainerStyle={styles.courseList}

      />



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Discover')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Search')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

      </View>

    </View>

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

    paddingHorizontal: 20,

    paddingTop: 60,

    paddingBottom: 20,

  },

  headerTitle: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  notificationButton: {

    position: 'relative',

  },

  notificationIcon: {

    width: 24,

    height: 24,

  },

  notificationBadge: {

    position: 'absolute',

    top: -4,

    right: -4,

    width: 8,

    height: 8,

    borderRadius: 4,

    backgroundColor: '#FF3B30',

  },

  tabContainer: {

    flexDirection: 'row',

    paddingHorizontal: 20,

    marginBottom: 20,

  },

  tab: {

    paddingVertical: 10,

    marginRight: 20,

  },

  activeTab: {

    borderBottomWidth: 2,

    borderBottomColor: '#000',

  },

  tabText: {

    fontSize: 16,

    color: '#999',

  },

  activeTabText: {

    color: '#000',

    fontWeight: 'bold',

  },

  tabCount: {

    color: '#999',

    fontSize: 14,

  },

  courseList: {

    paddingHorizontal: 20,

  },

  courseCard: {

    borderRadius: 10,

    padding: 15,

    marginBottom: 15,

  },

  courseHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 10,

  },

  courseIcon: {

    width: 24,

    height: 24,

    tintColor: '#FFFFFF',

  },

  moreButton: {

    padding: 5,

  },

  moreButtonText: {

    color: '#FFFFFF',

    fontSize: 18,

  },

  courseTitle: {

    color: '#FFFFFF',

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  instructorContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 10,

  },

  instructorAvatar: {

    width: 24,

    height: 24,

    borderRadius: 12,

    marginRight: 5,

  },

  instructorName: {

    color: '#FFFFFF',

    fontSize: 14,

    marginRight: 10,

  },

  ratingContainer: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  starIcon: {

    color: '#FFD700',

    marginRight: 2,

  },

  ratingText: {

    color: '#FFFFFF',

    fontSize: 12,

    marginRight: 2,

  },

  reviewsText: {

    color: '#FFFFFF',

    opacity: 0.7,

    fontSize: 12,

  },

  progressContainer: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  calendarIcon: {

    width: 16,

    height: 16,

    tintColor: '#FFFFFF',

    marginRight: 5,

  },

  sessionsText: {

    color: '#FFFFFF',

    fontSize: 12,

    marginRight: 10,

  },

  progressBar: {

    flex: 1,

    height: 4,

    backgroundColor: 'rgba(255, 255, 255, 0.2)',

    borderRadius: 2,

  },

  progressFill: {

    height: '100%',

    backgroundColor: '#FFFFFF',

    borderRadius: 2,

  },

  progressText: {

    color: '#FFFFFF',

    fontSize: 12,

    marginLeft: 5,

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    paddingVertical: 10,

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

  },

});



export default MyCoursesScreen;