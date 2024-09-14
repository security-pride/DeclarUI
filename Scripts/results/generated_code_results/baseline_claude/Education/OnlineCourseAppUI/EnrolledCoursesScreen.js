import React from 'react';

import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const courses = [

  { id: '1', title: '3D Design Basic', lessons: 24, progress: 25 },

  { id: '2', title: '3D Abstract Design', lessons: 18, progress: 50 },

  { id: '3', title: 'Characters Animation', lessons: 22, progress: 75 },

  { id: '4', title: 'Game Design', lessons: 25, progress: 100 },

  { id: '5', title: 'Product Design', lessons: 23, progress: 100 },

];



const CourseItem = ({ item }) => (

  <TouchableOpacity style={styles.courseItem}>

    <Image source={require('../assets/snack-icon.png')} style={styles.courseImage} />

    <View style={styles.courseInfo}>

      <Text style={styles.courseTitle}>{item.title}</Text>

      <Text style={styles.courseLessons}>{item.lessons} lessons</Text>

    </View>

    <View style={styles.progressContainer}>

      <View style={[styles.progressCircle, { borderColor: getProgressColor(item.progress) }]}>

        <Text style={styles.progressText}>{item.progress}%</Text>

      </View>

    </View>

  </TouchableOpacity>

);



const getProgressColor = (progress) => {

  if (progress < 50) return '#3B82F6';

  if (progress < 75) return '#8B5CF6';

  return '#10B981';

};



const EnrolledCoursesScreen = () => {

  const navigation = useNavigation();



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.headerTitle}>My Enrolled Courses</Text>

      </View>

      <View style={styles.filterContainer}>

        {['Medium', 'Medium', 'Medium'].map((filter, index) => (

          <TouchableOpacity key={index} style={[styles.filterButton, index === 0 && styles.activeFilterButton]}>

            <Text style={[styles.filterText, index === 0 && styles.activeFilterText]}>{filter}</Text>

          </TouchableOpacity>

        ))}

      </View>

      <FlatList

        data={courses}

        renderItem={({ item }) => <CourseItem item={item} />}

        keyExtractor={item => item.id}

        showsVerticalScrollIndicator={false}

      />

      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="home-outline" size={24} color="#6B7280" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="list-outline" size={24} color="#3B82F6" />

          <Text style={styles.activeTabText}>Course</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="chatbubble-outline" size={24} color="#6B7280" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="person-outline" size={24} color="#6B7280" />

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F3F4F6',

  },

  header: {

    backgroundColor: '#3B82F6',

    paddingTop: 60,

    paddingBottom: 20,

    paddingHorizontal: 16,

    borderBottomLeftRadius: 20,

    borderBottomRightRadius: 20,

  },

  headerTitle: {

    fontSize: 24,

    fontWeight: 'bold',

    color: '#FFFFFF',

  },

  filterContainer: {

    flexDirection: 'row',

    paddingHorizontal: 16,

    paddingVertical: 12,

  },

  filterButton: {

    paddingHorizontal: 16,

    paddingVertical: 8,

    borderRadius: 20,

    marginRight: 8,

    borderWidth: 1,

    borderColor: '#3B82F6',

  },

  activeFilterButton: {

    backgroundColor: '#3B82F6',

  },

  filterText: {

    color: '#3B82F6',

  },

  activeFilterText: {

    color: '#FFFFFF',

  },

  courseItem: {

    flexDirection: 'row',

    backgroundColor: '#FFFFFF',

    marginHorizontal: 16,

    marginVertical: 8,

    borderRadius: 12,

    padding: 12,

    alignItems: 'center',

  },

  courseImage: {

    width: 60,

    height: 60,

    borderRadius: 8,

  },

  courseInfo: {

    flex: 1,

    marginLeft: 12,

  },

  courseTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  courseLessons: {

    fontSize: 14,

    color: '#6B7280',

    marginTop: 4,

  },

  progressContainer: {

    marginLeft: 12,

  },

  progressCircle: {

    width: 50,

    height: 50,

    borderRadius: 25,

    borderWidth: 4,

    justifyContent: 'center',

    alignItems: 'center',

  },

  progressText: {

    fontSize: 12,

    fontWeight: 'bold',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    paddingVertical: 12,

    borderTopWidth: 1,

    borderTopColor: '#E5E7EB',

  },

  tabItem: {

    alignItems: 'center',

  },

  activeTabText: {

    fontSize: 12,

    color: '#3B82F6',

    marginTop: 4,

  },

});



export default EnrolledCoursesScreen;