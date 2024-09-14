import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const FavoritesScreen = () => {

  const navigation = useNavigation();

  const [selectedCategory, setSelectedCategory] = useState('All Course');



  const categories = ['All Course', 'UX Design', 'UI Design', '3D Anima'];



  const renderCourseItem = (date, courses) => (

    <View style={styles.dateSection}>

      <View style={styles.dateSectionHeader}>

        <Text style={styles.dateText}>{date}</Text>

        <TouchableOpacity>

          <Text style={styles.seeAllText}>See All</Text>

        </TouchableOpacity>

      </View>

      <View style={styles.courseList}>

        {courses.map((course, index) => (

          <TouchableOpacity key={index} style={styles.courseItem} onPress={() => navigation.navigate('CourseDetail')}>

            <Image source={require('../assets/snack-icon.png')} style={styles.courseImage} />

            <View style={styles.courseInfo}>

              <Text style={styles.courseCategory}>{course.category}</Text>

              <Text style={styles.courseTitle}>{course.title}</Text>

              <Text style={styles.courseInstructor}>{course.instructor}</Text>

              <Text style={styles.coursePrice}>${course.price}</Text>

            </View>

            <TouchableOpacity style={styles.favoriteButton}>

              <Icon name="heart" size={24} color="#FF3B30" />

            </TouchableOpacity>

          </TouchableOpacity>

        ))}

      </View>

    </View>

  );



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.headerTitle}>Favorite</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>

          <Icon name="notifications-outline" size={24} color="#000" />

        </TouchableOpacity>

      </View>



      <View style={styles.searchContainer}>

        <Icon name="search-outline" size={20} color="#999" style={styles.searchIcon} />

        <TextInput

          style={styles.searchInput}

          placeholder="Search..."

          placeholderTextColor="#999"

        />

        <TouchableOpacity style={styles.filterButton}>

          <Icon name="options-outline" size={20} color="#000" />

        </TouchableOpacity>

      </View>



      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>

        {categories.map((category, index) => (

          <TouchableOpacity

            key={index}

            style={[

              styles.categoryButton,

              selectedCategory === category && styles.selectedCategoryButton,

            ]}

            onPress={() => setSelectedCategory(category)}

          >

            <Text

              style={[

                styles.categoryButtonText,

                selectedCategory === category && styles.selectedCategoryButtonText,

              ]}

            >

              {category}

            </Text>

          </TouchableOpacity>

        ))}

      </ScrollView>



      <ScrollView style={styles.contentContainer}>

        {renderCourseItem('May 12, 2023', [

          { category: 'Graphic Design', title: 'Expert Wireframing for Mobile Design', instructor: 'Jerremy Mamika', price: '48' },

          { category: 'Development', title: 'Bootstrapping Principles', instructor: 'Alexander Be', price: '48' },

        ])}

        {renderCourseItem('May 08, 2023', [

          { category: 'UX Design', title: 'User Experience Design Essentials', instructor: 'Sarah Johnson', price: '59' },

        ])}

      </ScrollView>



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Discover')}>

          <Icon name="home-outline" size={24} color="#999" />

          <Text style={styles.tabLabel}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Statistics')}>

          <Icon name="stats-chart-outline" size={24} color="#999" />

          <Text style={styles.tabLabel}>Statistic</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="heart" size={24} color="#6C5CE7" />

          <Text style={[styles.tabLabel, styles.activeTabLabel]}>Favorites</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="person-outline" size={24} color="#999" />

          <Text style={styles.tabLabel}>Profile</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F5F5F5',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 16,

    paddingVertical: 12,

  },

  headerTitle: {

    fontSize: 20,

    fontWeight: 'bold',

  },

  searchContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    borderRadius: 8,

    marginHorizontal: 16,

    marginVertical: 8,

    paddingHorizontal: 12,

  },

  searchIcon: {

    marginRight: 8,

  },

  searchInput: {

    flex: 1,

    height: 40,

  },

  filterButton: {

    padding: 8,

  },

  categoriesContainer: {

    paddingHorizontal: 16,

    marginVertical: 8,

  },

  categoryButton: {

    paddingHorizontal: 16,

    paddingVertical: 8,

    borderRadius: 20,

    marginRight: 8,

    backgroundColor: '#FFFFFF',

  },

  selectedCategoryButton: {

    backgroundColor: '#6C5CE7',

  },

  categoryButtonText: {

    color: '#000000',

  },

  selectedCategoryButtonText: {

    color: '#FFFFFF',

  },

  contentContainer: {

    flex: 1,

  },

  dateSection: {

    marginBottom: 16,

  },

  dateSectionHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 16,

    marginBottom: 8,

  },

  dateText: {

    fontSize: 16,

    fontWeight: '600',

  },

  seeAllText: {

    color: '#6C5CE7',

  },

  courseList: {

    paddingHorizontal: 16,

  },

  courseItem: {

    flexDirection: 'row',

    backgroundColor: '#FFFFFF',

    borderRadius: 8,

    marginBottom: 12,

    overflow: 'hidden',

  },

  courseImage: {

    width: 100,

    height: 100,

  },

  courseInfo: {

    flex: 1,

    padding: 12,

  },

  courseCategory: {

    color: '#6C5CE7',

    marginBottom: 4,

  },

  courseTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 4,

  },

  courseInstructor: {

    color: '#999',

    marginBottom: 4,

  },

  coursePrice: {

    fontWeight: 'bold',

  },

  favoriteButton: {

    position: 'absolute',

    top: 8,

    right: 8,

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#EEEEEE',

    paddingVertical: 8,

    backgroundColor: '#FFFFFF',

  },

  tabItem: {

    alignItems: 'center',

  },

  tabLabel: {

    marginTop: 4,

    fontSize: 12,

    color: '#999',

  },

  activeTabLabel: {

    color: '#6C5CE7',

  },

});



export default FavoritesScreen;