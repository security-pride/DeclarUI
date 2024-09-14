import React from 'react';

import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const courses = [

  { id: '1', title: '3D Design Basic', lessons: 24, rating: 4.9, price: 24.99, image: '../assets/snack-icon.png' },

  { id: '2', title: 'Characters Animation', lessons: 22, rating: 4.8, price: 22.69, image: '../assets/snack-icon.png' },

  { id: '3', title: '3D Abstract Design', lessons: 18, rating: 4.7, price: 19.29, image: '../assets/snack-icon.png' },

  { id: '4', title: 'Product Design', lessons: 23, rating: 4.8, price: 25.79, image: '../assets/snack-icon.png' },

  { id: '5', title: 'Game Design', lessons: 25, rating: 4.9, price: 26.39, image: '../assets/snack-icon.png' },

];



const CourseItem = ({ item }) => (

  <View style={styles.courseItem}>

    <Image source={item.image} style={styles.courseImage} />

    <View style={styles.courseInfo}>

      <Text style={styles.courseTitle}>{item.title}</Text>

      <Text style={styles.courseLessons}>{item.lessons} lessons</Text>

      <View style={styles.ratingContainer}>

        <Icon name="star" size={16} color="#FFD700" />

        <Text style={styles.ratingText}>{item.rating}</Text>

      </View>

    </View>

    <View style={styles.priceContainer}>

      <Text style={styles.priceText}>${item.price.toFixed(2)}</Text>

    </View>

    <TouchableOpacity style={styles.favoriteButton}>

      <Icon name="heart-outline" size={24} color="#000" />

    </TouchableOpacity>

  </View>

);



const AwesomeCoursesScreen = () => {

  const navigation = useNavigation();



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Icon name="chevron-back" size={24} color="#000" />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>Awesome Courses</Text>

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

          <Text style={styles.tabText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="list-outline" size={24} color="#6B7280" />

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

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 16,

    paddingTop: 60,

    paddingBottom: 16,

    backgroundColor: '#FFF',

  },

  headerTitle: {

    fontSize: 20,

    fontWeight: 'bold',

    marginLeft: 16,

  },

  filterContainer: {

    flexDirection: 'row',

    paddingHorizontal: 16,

    paddingVertical: 12,

    backgroundColor: '#FFF',

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

    color: '#FFF',

  },

  courseItem: {

    flexDirection: 'row',

    backgroundColor: '#FFF',

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

  ratingContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 4,

  },

  ratingText: {

    marginLeft: 4,

    fontSize: 14,

    color: '#6B7280',

  },

  priceContainer: {

    marginLeft: 12,

  },

  priceText: {

    fontSize: 16,

    fontWeight: 'bold',

    color: '#3B82F6',

  },

  favoriteButton: {

    marginLeft: 12,

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    backgroundColor: '#FFF',

    paddingVertical: 12,

    borderTopWidth: 1,

    borderTopColor: '#E5E7EB',

  },

  tabItem: {

    alignItems: 'center',

  },

  tabText: {

    fontSize: 12,

    color: '#6B7280',

    marginTop: 4,

  },

});



export default AwesomeCoursesScreen;