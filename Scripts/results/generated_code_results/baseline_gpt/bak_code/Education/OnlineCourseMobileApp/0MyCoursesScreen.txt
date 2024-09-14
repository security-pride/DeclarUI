import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MyCoursesScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Courses</Text>
        <TouchableOpacity style={styles.notificationIcon}>
          <Icon name="bell" size={24} color="#555" />
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationText}>9+</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.tabs}>
        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.activeTabText}>Ongoing</Text>
          <View style={styles.activeTabCount}>
            <Text style={styles.activeTabCountText}>8</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inactiveTab}>
          <Text style={styles.inactiveTabText}>Completed</Text>
          <View style={styles.inactiveTabCount}>
            <Text style={styles.inactiveTabCountText}>12</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.courseList}>
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </ScrollView>
    </View>
  );
};

const CourseCard = () => (
  <View style={styles.courseCard}>
    <View style={styles.courseImageWrapper}>
      <Image style={styles.courseImage} source={require('../assets/snack-icon.png')} />
    </View>
    <View style={styles.courseInfo}>
      <Text style={styles.courseTitle}>Graphics Designer for Beginner</Text>
      <View style={styles.courseMeta}>
        <Text style={styles.courseInstructor}>Nicola Tesla</Text>
        <View style={styles.courseRating}>
          <Icon name="star" size={14} color="#f39c12" />
          <Text style={styles.courseRatingText}>4.9 (1.435 Reviews)</Text>
        </View>
      </View>
      <View style={styles.courseProgress}>
        <View style={styles.sessionInfo}>
          <Icon name="calendar" size={14} color="#555" />
          <Text style={styles.sessionText}>Sessions 7 / 15</Text>
        </View>
        <Text style={styles.courseCompletion}>82 %</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  notificationIcon: {
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#ff3d71',
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  notificationText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
    marginTop: 16,
  },
  activeTab: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  activeTabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#69c23a',
  },
  activeTabCount: {
    backgroundColor: '#69c23a',
    borderRadius: 12,
    paddingHorizontal: 8,
    marginLeft: 8,
  },
  activeTabCountText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  inactiveTab: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inactiveTabText: {
    fontSize: 16,
    color: '#b0b0b0',
  },
  inactiveTabCount: {
    backgroundColor: '#e0e0e0',
    borderRadius: 12,
    paddingHorizontal: 8,
    marginLeft: 8,
  },
  inactiveTabCountText: {
    color: '#b0b0b0',
    fontWeight: 'bold',
    fontSize: 12,
  },
  courseList: {
    paddingVertical: 16,
  },
  courseCard: {
    flexDirection: 'row',
    backgroundColor: '#f7f9fc',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  courseImageWrapper: {
    marginRight: 16,
  },
  courseImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  courseInfo: {
    flex: 1,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  courseMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  courseInstructor: {
    color: '#555',
    marginRight: 8,
  },
  courseRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  courseRatingText: {
    marginLeft: 4,
    color: '#555',
  },
  courseProgress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sessionInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sessionText: {
    marginLeft: 4,
    color: '#555',
  },
  courseCompletion: {
    color: '#69c23a',
    fontWeight: 'bold',
  },
});

export default MyCoursesScreen;