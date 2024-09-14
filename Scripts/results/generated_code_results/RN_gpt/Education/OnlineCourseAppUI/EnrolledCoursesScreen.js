import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Assuming icons are from Ionicons
import { useNavigation } from '@react-navigation/native';

const courses = [
  { title: '3D Design Basic', lessons: 24, progress: 25, image: require('../assets/snack-icon.png') },
  { title: '3D Abstract Design', lessons: 18, progress: 50, image: require('../assets/snack-icon.png') },
  { title: 'Characters Animation', lessons: 22, progress: 75, image: require('../assets/snack-icon.png') },
  { title: 'Game Design', lessons: 25, progress: 100, image: require('../assets/snack-icon.png') },
  { title: 'Product Design', lessons: 23, progress: 100, image: require('../assets/snack-icon.png') },
];

const EnrolledCoursesScreen = () => {
  const navigation = useNavigation();

  const renderCourseItem = ({ item }) => (
    <TouchableOpacity style={styles.courseItem} onPress={() => navigation.navigate('CourseDetail')}>
      <Image source={item.image} style={styles.courseImage} />
      <View style={styles.courseInfo}>
        <Text style={styles.courseTitle}>{item.title}</Text>
        <Text style={styles.lessons}>{`${item.lessons} lessons`}</Text>
      </View>
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>{`${item.progress}%`}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Enrolled Courses</Text>
        <View style={styles.filterTabs}>
          <Text style={styles.filterTab}>Medium</Text>
          <Text style={styles.filterTab}>Medium</Text>
          <Text style={styles.filterTab}>Medium</Text>
        </View>
      </View>
      <FlatList
        data={courses}
        renderItem={renderCourseItem}
        keyExtractor={(item) => item.title}
        contentContainerStyle={styles.courseList}
      />
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="home-outline" size={24} color="#6A5ACD" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('EnrolledCourses')}>
          <Icon name="book-outline" size={24} color="#6A5ACD" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <Icon name="chatbubble-outline" size={24} color="#6A5ACD" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon name="person-outline" size={24} color="#6A5ACD" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 50,
  },
  header: {
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  filterTabs: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  filterTab: {
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#6A5ACD',
    borderRadius: 20,
    color: '#6A5ACD',
  },
  courseList: {
    paddingBottom: 80,
  },
  courseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    elevation: 2,
  },
  courseImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  courseInfo: {
    flex: 1,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lessons: {
    fontSize: 14,
    color: '#A9A9A9',
  },
  progressContainer: {
    justifyContent: 'center',
  },
  progressText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6A5ACD',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E2E2E2',
  },
});

export default EnrolledCoursesScreen;