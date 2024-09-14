import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const courses = [
  { id: '1', title: '3D Design Basic', lessons: '24 lessons', price: '$24.99', rating: 4.9 },
  { id: '2', title: 'Characters Animation', lessons: '22 lessons', price: '$22.69', rating: 4.8 },
  { id: '3', title: '3D Abstract Design', lessons: '18 lessons', price: '$19.29', rating: 4.7 },
  { id: '4', title: 'Product Design', lessons: '23 lessons', price: '$25.79', rating: 4.8 },
  { id: '5', title: 'Game Design', lessons: '25 lessons', price: '$26.39', rating: 4.9 },
];

const AwesomeCoursesScreen = () => {
  const renderCourse = ({ item }) => (
    <View style={styles.courseCard}>
      <Image source={require('../assets/snack-icon.png')} style={styles.courseImage} />
      <View style={styles.courseDetails}>
        <Text style={styles.courseTitle}>{item.title}</Text>
        <Text style={styles.courseLessons}>{item.lessons}</Text>
        <View style={styles.courseFooter}>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={18} color="#f2c94c" />
            <Text style={styles.courseRating}>{item.rating}</Text>
          </View>
          <Text style={styles.coursePrice}>{item.price}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Icon name="heart-outline" size={24} color="#666" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={28} color="#666" />
        <Text style={styles.title}>Awesome Courses</Text>
      </View>

      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Medium</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Medium</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButtonOutline}>
          <Text style={styles.filterText}>Medium</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={courses}
        renderItem={renderCourse}
        keyExtractor={(item) => item.id}
        style={styles.courseList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 16,
    color: '#333',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#007bff',
    borderRadius: 20,
    marginHorizontal: 4,
  },
  filterButtonOutline: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#007bff',
    marginHorizontal: 4,
  },
  filterText: {
    color: '#fff',
  },
  courseList: {
    flexGrow: 0,
  },
  courseCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#f8f8f8',
    marginBottom: 12,
  },
  courseImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  courseDetails: {
    flex: 1,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  courseLessons: {
    color: '#777',
  },
  courseFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  coursePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007bff',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  courseRating: {
    marginLeft: 4,
    color: '#333',
  },
});

export default AwesomeCoursesScreen;