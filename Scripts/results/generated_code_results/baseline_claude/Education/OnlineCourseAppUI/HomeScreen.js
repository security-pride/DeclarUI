import React from 'react';

import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const HomeScreen = () => {

  const navigation = useNavigation();



  const courses = [

    { id: '1', title: '3D Design Basic', lessons: 24, rating: 4.9, price: 24.99 },

    { id: '2', title: 'Characters Animation', lessons: 22, rating: 4.8, price: 22.69 },

  ];



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <View style={styles.headerLeft}>

          <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

          <Text style={styles.greeting}>Hello, Daniel !</Text>

        </View>

        <View style={styles.headerRight}>

          <TouchableOpacity style={styles.iconButton}>

            <Icon name="notifications-outline" size={24} color="#000" />

          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>

            <Icon name="heart-outline" size={24} color="#000" />

          </TouchableOpacity>

        </View>

      </View>



      <View style={styles.searchContainer}>

        <Icon name="search-outline" size={20} color="#6B7280" style={styles.searchIcon} />

        <TextInput

          style={styles.searchInput}

          placeholder="Search"

          placeholderTextColor="#6B7280"

        />

        <TouchableOpacity style={styles.filterButton}>

          <Icon name="options-outline" size={20} color="#3B82F6" />

        </TouchableOpacity>

      </View>



      <View style={styles.promotionContainer}>

        <View style={styles.promotionContent}>

          <Image source={require('../assets/snack-icon.png')} style={styles.promotionImage} />

          <View style={styles.promotionText}>

            <Text style={styles.promotionTitle}>3D Design Fundamentals</Text>

            <TouchableOpacity style={styles.promotionButton}>

              <Text style={styles.promotionButtonText}>Small Button</Text>

            </TouchableOpacity>

          </View>

        </View>

      </View>



      <View style={styles.sectionHeader}>

        <Text style={styles.sectionTitle}>Awesome Courses</Text>

        <TouchableOpacity onPress={() => navigation.navigate('AwesomeCourses')}>

          <Text style={styles.seeAllText}>See all</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.filterContainer}>

        <TouchableOpacity style={[styles.filterChip, styles.activeFilterChip]}>

          <Text style={[styles.filterChipText, styles.activeFilterChipText]}>Medium</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.filterChip}>

          <Text style={styles.filterChipText}>Popular</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.filterChip}>

          <Text style={styles.filterChipText}>Medium</Text>

        </TouchableOpacity>

      </View>



      {courses.map((course) => (

        <TouchableOpacity

          key={course.id}

          style={styles.courseItem}

          onPress={() => navigation.navigate('CourseDetail', { courseId: course.id })}

        >

          <Image source={require('../assets/snack-icon.png')} style={styles.courseImage} />

          <View style={styles.courseInfo}>

            <Text style={styles.courseTitle}>{course.title}</Text>

            <Text style={styles.courseLessons}>{course.lessons} lessons</Text>

            <View style={styles.courseRating}>

              <Icon name="star" size={16} color="#FFC107" />

              <Text style={styles.ratingText}>{course.rating}</Text>

            </View>

          </View>

          <View style={styles.coursePriceContainer}>

            <TouchableOpacity style={styles.favoriteButton}>

              <Icon name="heart-outline" size={20} color="#3B82F6" />

            </TouchableOpacity>

            <Text style={styles.coursePrice}>${course.price}</Text>

          </View>

        </TouchableOpacity>

      ))}



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="home" size={24} color="#3B82F6" />

          <Text style={styles.activeTabText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('EnrolledCourses')}>

          <Icon name="list-outline" size={24} color="#6B7280" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="chatbubble-outline" size={24} color="#6B7280" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="person-outline" size={24} color="#6B7280" />

        </TouchableOpacity>

      </View>

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F3F4F6',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 16,

    paddingTop: 60,

    paddingBottom: 16,

    backgroundColor: '#3B82F6',

  },

  headerLeft: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  avatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 12,

  },

  greeting: {

    fontSize: 20,

    fontWeight: 'bold',

    color: '#FFFFFF',

  },

  headerRight: {

    flexDirection: 'row',

  },

  iconButton: {

    padding: 8,

    backgroundColor: '#FFFFFF',

    borderRadius: 20,

    marginLeft: 8,

  },

  searchContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    borderRadius: 12,

    marginHorizontal: 16,

    marginTop: 16,

    paddingHorizontal: 12,

  },

  searchIcon: {

    marginRight: 8,

  },

  searchInput: {

    flex: 1,

    height: 40,

    fontSize: 16,

  },

  filterButton: {

    padding: 8,

  },

  promotionContainer: {

    backgroundColor: '#3B82F6',

    borderRadius: 12,

    margin: 16,

    overflow: 'hidden',

  },

  promotionContent: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

  },

  promotionImage: {

    width: 80,

    height: 80,

    borderRadius: 8,

  },

  promotionText: {

    flex: 1,

    marginLeft: 16,

  },

  promotionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    color: '#FFFFFF',

    marginBottom: 8,

  },

  promotionButton: {

    backgroundColor: '#FFA500',

    paddingHorizontal: 16,

    paddingVertical: 8,

    borderRadius: 20,

    alignSelf: 'flex-start',

  },

  promotionButtonText: {

    color: '#FFFFFF',

    fontWeight: 'bold',

  },

  sectionHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 16,

    marginTop: 16,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  seeAllText: {

    color: '#3B82F6',

    fontWeight: 'bold',

  },

  filterContainer: {

    flexDirection: 'row',

    paddingHorizontal: 16,

    marginTop: 12,

  },

  filterChip: {

    paddingHorizontal: 16,

    paddingVertical: 8,

    borderRadius: 20,

    borderWidth: 1,

    borderColor: '#3B82F6',

    marginRight: 8,

  },

  activeFilterChip: {

    backgroundColor: '#3B82F6',

  },

  filterChipText: {

    color: '#3B82F6',

  },

  activeFilterChipText: {

    color: '#FFFFFF',

  },

  courseItem: {

    flexDirection: 'row',

    backgroundColor: '#FFFFFF',

    borderRadius: 12,

    margin: 16,

    padding: 12,

  },

  courseImage: {

    width: 80,

    height: 80,

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

  courseRating: {

    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 4,

  },

  ratingText: {

    marginLeft: 4,

    color: '#6B7280',

  },

  coursePriceContainer: {

    alignItems: 'flex-end',

  },

  favoriteButton: {

    padding: 8,

  },

  coursePrice: {

    fontSize: 16,

    fontWeight: 'bold',

    color: '#3B82F6',

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



export default HomeScreen;