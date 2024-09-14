import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const AwesomeCoursesScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Awesome Courses</Text>
      </View>

      <View style={styles.filterTabs}>
        <Pressable style={styles.mediumButton}>
          <Text style={styles.filterText}>Medium</Text>
        </Pressable>
        <Pressable style={styles.mediumButton}>
          <Text style={styles.filterText}>Medium</Text>
        </Pressable>
        <Pressable style={styles.mediumButton}>
          <Text style={styles.filterText}>Medium</Text>
        </Pressable>
      </View>

      <ScrollView style={styles.courseList}>
        {courseData.map(course => (
          <TouchableOpacity 
            key={course.title} 
            style={styles.courseCard}
            onPress={() => navigation.navigate('CourseDetail', { course })}>
            <Image source={require('../assets/snack-icon.png')} style={styles.courseImage} />
            <View style={styles.courseInfo}>
              <Text style={styles.courseTitle}>{course.title}</Text>
              <Text style={styles.courseLessons}>{course.lessonsCount} lessons</Text>
              <View style={styles.ratingSection}>
                <Icon name="star" size={14} color="#FFD700" />
                <Text style={styles.ratingText}>{course.rating}</Text>
              </View>
            </View>
            <View style={styles.priceSection}>
              <Text style={styles.coursePrice}>{course.price}</Text>
              <TouchableOpacity>
                <Icon name="heart-outline" size={24} color="#666" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="home" size={28} color="#666" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="albums-outline" size={28} color="#666" />
          <Text style={styles.navText}>Course</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="chatbox-outline" size={28} color="#666" />
          <Text style={styles.navText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="person-outline" size={28} color="#666" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const courseData = [
  { title: '3D Design Basic', lessonsCount: 24, rating: 4.9, price: '$24.99' },
  { title: 'Characters Animation', lessonsCount: 22, rating: 4.8, price: '$22.69' },
  { title: '3D Abstract Design', lessonsCount: 18, rating: 4.7, price: '$19.29' },
  { title: 'Product Design', lessonsCount: 23, rating: 4.8, price: '$25.79' },
  { title: 'Game Design', lessonsCount: 25, rating: 4.9, price: '$26.39' }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    position: 'relative',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  backButton: {
    paddingRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  filterTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  mediumButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  filterText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  courseList: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  courseCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 1,
  },
  courseImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 15,
  },
  courseInfo: {
    flex: 1,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  courseLessons: {
    color: '#666',
    marginTop: 2,
  },
  ratingSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  ratingText: {
    marginLeft: 5,
    color: '#666',
  },
  priceSection: {
    alignItems: 'center',
  },
  coursePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 5,
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
});

export default AwesomeCoursesScreen;