import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
        <View style={styles.headerText}>
          <Text style={styles.welcomeText}>Welcome Back</Text>
          <Text style={styles.nameText}>Nicolas Doflamingo! <Text style={styles.emoji}>🤘</Text></Text>
        </View>
        <View style={styles.notificationContainer}>
          <Icon name="notifications" size={24} />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>9+</Text>
          </View>
        </View>
      </View>

      <Text style={styles.bestCoursesTitle}>Best courses that suits to you</Text>
      <TouchableOpacity style={styles.seeAllButton}>
        <Icon name="arrow-forward" size={24} />
      </TouchableOpacity>

      <View style={styles.coursesSection}>
        <TouchableOpacity style={styles.courseCard} onPress={() => navigation.navigate('CourseDetail')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.courseImage} />
          <Text style={styles.courseCategory}>GRAPHICS DESIGN</Text>
          <Text style={styles.courseTitle}>How to make modern poster for Beginner</Text>
          <Text style={styles.instructorText}>Nicola Tesla</Text>
          <Text style={styles.sessionText}>Sessions 7 / 15</Text>
          <Text style={styles.progressText}>82%</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.courseCard} onPress={() => navigation.navigate('CourseDetail')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.courseImage} />
          <Text style={styles.courseCategory}>UI/UX DESIGN</Text>
          <Text style={styles.courseTitle}>How to make D system in easy</Text>
          <Text style={styles.instructorText}>Dwi Gunawan</Text>
          <Text style={styles.sessionText}>Sessions 7 / 15</Text>
          <Text style={styles.progressText}>82%</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.mentorTitle}>Mentor of The Weeks</Text>
      <View style={styles.mentorSection}>
        <View style={styles.mentorCard}>
          <Image source={require('../assets/snack-icon.png')} style={styles.mentorAvatar} />
          <Text style={styles.mentorName}>Nicola Tesla</Text>
          <Text style={styles.mentorRating}>4.9 (1,435 Reviews)</Text>
        </View>

        <View style={styles.mentorCard}>
          <Image source={require('../assets/snack-icon.png')} style={styles.mentorAvatar} />
          <Text style={styles.mentorName}>Galileo Galilei</Text>
          <Text style={styles.mentorRating}>4.9 (1,435 Reviews)</Text>
        </View>
      </View>

      <View style={styles.bottomNav}>
        <Icon name="home" size={30} />
        <TouchableOpacity onPress={() => navigation.navigate('Discover')}>
          <Icon name="search" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MyCourses')}>
          <Icon name="library-books" size={30} />
        </TouchableOpacity>
        <Icon name="person" size={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerText: {
    flex: 1,
    paddingLeft: 10,
  },
  welcomeText: {
    fontSize: 18,
    color: '#888',
  },
  nameText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  emoji: {
    fontSize: 22,
  },
  notificationContainer: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#f33',
    borderRadius: 10,
    padding: 2,
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
  },
  bestCoursesTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 16,
  },
  seeAllButton: {
    position: 'absolute',
    right: 20,
    top: 80,
  },
  coursesSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 16,
  },
  courseCard: {
    width: '48%',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
  },
  courseImage: {
    height: 100,
    width: '100%',
    borderRadius: 10,
  },
  courseCategory: {
    fontSize: 14,
    color: '#888',
    marginTop: 8,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  instructorText: {
    fontSize: 14,
    color: '#888',
  },
  sessionText: {
    fontSize: 14,
    color: '#888',
  },
  progressText: {
    fontSize: 14,
    color: '#388e3c',
    fontWeight: 'bold',
  },
  mentorTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  mentorSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  mentorCard: {
    width: '48%',
    alignItems: 'center',
  },
  mentorAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  mentorName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  mentorRating: {
    fontSize: 14,
    color: '#888',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
  },
});

export default HomeScreen;