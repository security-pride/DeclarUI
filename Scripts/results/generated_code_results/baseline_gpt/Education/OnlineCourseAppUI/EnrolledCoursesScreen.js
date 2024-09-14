import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ProgressCircle } from 'react-native-svg-charts';

const courses = [
  {
    id: '1',
    title: '3D Design Basic',
    lessons: '24 lessons',
    progress: 0.25,
    image: require('../assets/snack-icon.png'),
  },
  {
    id: '2',
    title: '3D Abstract Design',
    lessons: '18 lessons',
    progress: 0.50,
    image: require('../assets/snack-icon.png'),
  },
  {
    id: '3',
    title: 'Characters Animation',
    lessons: '22 lessons',
    progress: 0.75,
    image: require('../assets/snack-icon.png'),
  },
  {
    id: '4',
    title: 'Game Design',
    lessons: '25 lessons',
    progress: 1.0,
    image: require('../assets/snack-icon.png'),
  },
  {
    id: '5',
    title: 'Product Design',
    lessons: '23 lessons',
    progress: 1.0,
    image: require('../assets/snack-icon.png'),
  },
];

const EnrolledCoursesScreen = () => {
  const renderCourse = ({ item }) => (
    <View style={styles.courseContainer}>
      <View style={styles.courseInfo}>
        <Image source={item.image} style={styles.courseImage} />
        <View>
          <Text style={styles.courseTitle}>{item.title}</Text>
          <Text style={styles.courseLessons}>{item.lessons}</Text>
        </View>
      </View>
      <ProgressCircle style={styles.progressCircle} progress={item.progress} progressColor={'rgb(134, 65, 244)'} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Enrolled Courses</Text>
        <View style={styles.headerIcons}>
          <Text style={styles.mediumButton}>Medium</Text>
          <Text style={styles.mediumButton}>Medium</Text>
          <Text style={styles.mediumButton}>Medium</Text>
        </View>
      </View>
      <FlatList
        data={courses}
        renderItem={renderCourse}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.courseList}
      />
      <View style={styles.footer}>
        <Icon name="home-outline" size={30} color="#8b4ff5" />
        <Icon name="book-outline" size={30} color="#8b4ff5" />
        <Icon name="chatbubble-outline" size={30} color="#8b4ff5" />
        <Icon name="person-outline" size={30} color="#8b4ff5" />
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
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  mediumButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#8b4ff5',
    borderRadius: 15,
    color: '#8b4ff5',
    fontSize: 14,
  },
  courseList: {
    padding: 20,
  },
  courseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  courseInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  courseImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  courseLessons: {
    fontSize: 14,
    color: '#666',
  },
  progressCircle: {
    width: 40,
    height: 40,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});

export default EnrolledCoursesScreen;