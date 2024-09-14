import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Button, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {
  const navigation = useNavigation();

  const handleCoursePress = (course) => {
    navigation.navigate('CourseDetail', { course });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="3Di"
          placeholderTextColor="#aaa"
        />
        <Button title="Filter" onPress={() => {}} />
      </View>
      <Text style={styles.resultsTitle}>Results</Text>
      <View style={styles.courseList}>
        {courseData.map((course, index) => (
          <TouchableHighlight
            key={index}
            style={styles.courseItem}
            underlayColor="#dcdcdc"
            onPress={() => handleCoursePress(course)}
          >
            <View style={styles.courseItemContent}>
              <Image source={require('../assets/snack-icon.png')} style={styles.courseImage} />
              <View style={styles.courseInfo}>
                <Text style={styles.courseTitle}>{course.title}</Text>
                <Text style={styles.courseDetails}>{course.lessons_count} lessons</Text>
                <Text style={styles.courseRating}>⭐ {course.rating}</Text>
              </View>
              <Text style={styles.coursePrice}>{course.price}</Text>
              <Button title="❤️" onPress={() => {}} />
            </View>
          </TouchableHighlight>
        ))}
      </View>
      <View style={styles.keyboard}>
        {/* Mockup of a keyboard layout */}
      </View>
    </View>
  );
};

const courseData = [
  { title: '3D Design Basic', lessons_count: 24, rating: 4.9, price: '$24.99' },
  { title: 'Characters Animation', lessons_count: 22, rating: 4.8, price: '$22.69' },
  { title: '3D Abstract Design', lessons_count: 18, rating: 4.7, price: '$19.29' },
  { title: 'Product Design', lessons_count: 23, rating: 4.8, price: '$25.79' }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f1f3f6'
  },
  backButton: {
    padding: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
    padding: 8,
    backgroundColor: '#e0e7f1',
    borderRadius: 8,
    color: '#000'
  },
  resultsTitle: {
    padding: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },
  courseList: {
    flex: 1,
    padding: 10
  },
  courseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f1f3f6',
    borderRadius: 12
  },
  courseItemContent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  courseImage: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  courseInfo: {
    flex: 1
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },
  courseDetails: {
    fontSize: 14,
    color: '#aaa'
  },
  courseRating: {
    fontSize: 14,
    color: '#ffd700'
  },
  coursePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },
  keyboard: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 250,
    backgroundColor: '#e0e7f1'
  }
});

export default SearchScreen;