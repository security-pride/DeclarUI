import React from 'react';

import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {

  const navigation = useNavigation();



  const CourseCard = ({ title, instructor, sessions, progress, color }) => (

    <TouchableOpacity

      style={[styles.courseCard, { backgroundColor: color }]}

      onPress={() => navigation.navigate('CourseDetail')}

    >

      <View style={styles.courseIconContainer}>

        <Image source={require('../assets/snack-icon.png')} style={styles.courseIcon} />

      </View>

      <Text style={styles.courseCategory}>GRAPHICS DESIGN</Text>

      <Text style={styles.courseTitle}>{title}</Text>

      <View style={styles.instructorContainer}>

        <Image source={require('../assets/snack-icon.png')} style={styles.instructorAvatar} />

        <Text style={styles.instructorName}>{instructor}</Text>

      </View>

      <View style={styles.progressContainer}>

        <Text style={styles.sessionsText}>Sessions {sessions}</Text>

        <View style={styles.progressBar}>

          <View style={[styles.progressFill, { width: `${progress}%` }]} />

        </View>

        <Text style={styles.progressText}>{progress}%</Text>

      </View>

    </TouchableOpacity>

  );



  const MentorCard = ({ name, rating, reviews }) => (

    <View style={styles.mentorCard}>

      <Image source={require('../assets/snack-icon.png')} style={styles.mentorAvatar} />

      <Text style={styles.mentorName}>{name}</Text>

      <View style={styles.ratingContainer}>

        <Text style={styles.starIcon}>★</Text>

        <Text style={styles.ratingText}>{rating}</Text>

        <Text style={styles.reviewsText}>({reviews} Reviews)</Text>

      </View>

    </View>

  );



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <View>

          <Text style={styles.welcomeText}>Welcome Back</Text>

          <Text style={styles.userName}>Nicolas Doflamingo !👋📚</Text>

        </View>

        <TouchableOpacity style={styles.notificationButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.notificationIcon} />

          <View style={styles.notificationBadge} />

        </TouchableOpacity>

      </View>



      <TouchableOpacity style={styles.bestCoursesButton} onPress={() => navigation.navigate('Discover')}>

        <Text style={styles.bestCoursesText}>Best courses that suits to you</Text>

        <Text style={styles.arrowIcon}>→</Text>

      </TouchableOpacity>



      <View style={styles.sectionHeader}>

        <Text style={styles.sectionTitle}>My Courses</Text>

        <TouchableOpacity onPress={() => navigation.navigate('MyCourses')}>

          <Text style={styles.seeAllText}>See all</Text>

        </TouchableOpacity>

      </View>



      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.courseList}>

        <CourseCard

          title="How to make modern poster for Beginner"

          instructor="Nicola Tesla"

          sessions="7 / 15"

          progress={82}

          color="#4A90E2"

        />

        <CourseCard

          title="How to make Design system in easy waen"

          instructor="Dwi Gunawan"

          sessions="7 / 15"

          progress={82}

          color="#8E44AD"

        />

      </ScrollView>



      <View style={styles.sectionHeader}>

        <Text style={styles.sectionTitle}>Mentor of The Weeks</Text>

        <TouchableOpacity>

          <Text style={styles.seeAllText}>See all</Text>

        </TouchableOpacity>

      </View>



      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.mentorList}>

        <MentorCard name="Nicola Tesla" rating="4.9" reviews="1,435" />

        <MentorCard name="Galileo Galilei" rating="4.9" reviews="1,435" />

      </ScrollView>



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Discover')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('MyCourses')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Search')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

      </View>

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#1E1E1E',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 20,

    paddingTop: 60,

    paddingBottom: 20,

  },

  welcomeText: {

    color: '#FFFFFF',

    opacity: 0.7,

    fontSize: 14,

  },

  userName: {

    color: '#FFFFFF',

    fontSize: 18,

    fontWeight: 'bold',

  },

  notificationButton: {

    position: 'relative',

  },

  notificationIcon: {

    width: 24,

    height: 24,

    tintColor: '#FFFFFF',

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

  bestCoursesButton: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    backgroundColor: '#2C2C2E',

    borderRadius: 10,

    padding: 20,

    marginHorizontal: 20,

    marginVertical: 10,

  },

  bestCoursesText: {

    color: '#FFFFFF',

    fontSize: 16,

    fontWeight: 'bold',

  },

  arrowIcon: {

    color: '#FFFFFF',

    fontSize: 20,

  },

  sectionHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 20,

    marginTop: 20,

  },

  sectionTitle: {

    color: '#FFFFFF',

    fontSize: 18,

    fontWeight: 'bold',

  },

  seeAllText: {

    color: '#FFFFFF',

    opacity: 0.7,

  },

  courseList: {

    paddingLeft: 20,

    marginTop: 10,

  },

  courseCard: {

    width: 200,

    borderRadius: 10,

    padding: 15,

    marginRight: 15,

  },

  courseIconContainer: {

    width: 40,

    height: 40,

    borderRadius: 20,

    backgroundColor: 'rgba(255, 255, 255, 0.2)',

    justifyContent: 'center',

    alignItems: 'center',

    marginBottom: 10,

  },

  courseIcon: {

    width: 24,

    height: 24,

    tintColor: '#FFFFFF',

  },

  courseCategory: {

    color: '#FFFFFF',

    opacity: 0.7,

    fontSize: 12,

    marginBottom: 5,

  },

  courseTitle: {

    color: '#FFFFFF',

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  instructorContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 10,

  },

  instructorAvatar: {

    width: 20,

    height: 20,

    borderRadius: 10,

    marginRight: 5,

  },

  instructorName: {

    color: '#FFFFFF',

    fontSize: 12,

  },

  progressContainer: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  sessionsText: {

    color: '#FFFFFF',

    fontSize: 12,

    marginRight: 5,

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

  mentorList: {

    paddingLeft: 20,

    marginTop: 10,

  },

  mentorCard: {

    alignItems: 'center',

    marginRight: 20,

  },

  mentorAvatar: {

    width: 60,

    height: 60,

    borderRadius: 30,

    marginBottom: 5,

  },

  mentorName: {

    color: '#FFFFFF',

    fontSize: 14,

    fontWeight: 'bold',

    marginBottom: 5,

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

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    paddingVertical: 10,

    backgroundColor: '#2C2C2E',

    marginTop: 20,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

    tintColor: '#FFFFFF',

  },

});



export default HomeScreen;