import React, { useState } from 'react';

import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const SearchScreen = () => {

  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = useState('Design');



  const categories = ['UI/UX DESIGN', 'GRAPHICS DESIGN', 'INTERACTION'];



  const courses = [

    { id: '1', title: 'How to make modern poster for Beginner', category: 'GRAPHICS DESIGN', rating: 4.9, price: 12.00 },

    { id: '2', title: 'How to make Design system in easy waen', category: 'UI/UX DESIGN', rating: 4.9, price: 23.99 },

    { id: '3', title: 'How to make modern poster for Beginner', category: 'INTERACTION DESIGN', rating: 4.9, price: 15.45 },

    { id: '4', title: 'How to make Design system in easy waen', category: 'PHOTO EDITOR', rating: 4.9, price: 16.13 },

  ];



  const renderCategoryItem = ({ item }) => (

    <TouchableOpacity style={styles.categoryItem}>

      <Text style={styles.categoryText}>{item}</Text>

    </TouchableOpacity>

  );



  const renderCourseItem = ({ item }) => (

    <TouchableOpacity style={styles.courseItem} onPress={() => navigation.navigate('CourseDetail', { courseId: item.id })}>

      <Image source={require('../assets/snack-icon.png')} style={styles.courseIcon} />

      <View style={styles.courseInfo}>

        <Text style={styles.courseCategory}>{item.category}</Text>

        <Text style={styles.courseTitle}>{item.title}</Text>

        <View style={styles.courseRating}>

          <Image source={require('../assets/snack-icon.png')} style={styles.starIcon} />

          <Text style={styles.ratingText}>{item.rating}</Text>

        </View>

        <Text style={styles.coursePrice}>${item.price.toFixed(2)}</Text>

      </View>

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.title}>Discover</Text>

        <TouchableOpacity style={styles.notificationButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.notificationIcon} />

          <View style={styles.notificationBadge} />

        </TouchableOpacity>

      </View>



      <View style={styles.searchContainer}>

        <View style={styles.searchInputContainer}>

          <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />

          <TextInput

            style={styles.searchInput}

            placeholder="Search"

            value={searchQuery}

            onChangeText={setSearchQuery}

          />

        </View>

        <TouchableOpacity style={styles.filterButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.filterIcon} />

          <View style={styles.filterBadge}>

            <Text style={styles.filterBadgeText}>4</Text>

          </View>

        </TouchableOpacity>

      </View>



      <FlatList

        horizontal

        data={categories}

        renderItem={renderCategoryItem}

        keyExtractor={(item) => item}

        showsHorizontalScrollIndicator={false}

        style={styles.categoryList}

      />



      <View style={styles.resultHeader}>

        <Text style={styles.resultTitle}>Search Result</Text>

        <Text style={styles.resultCount}>32 Result</Text>

      </View>



      <FlatList

        data={courses}

        renderItem={renderCourseItem}

        keyExtractor={(item) => item.id}

        showsVerticalScrollIndicator={false}

        contentContainerStyle={styles.courseList}

      />

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFFFFF',

    paddingTop: 60,

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 20,

    marginBottom: 20,

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  notificationButton: {

    position: 'relative',

  },

  notificationIcon: {

    width: 24,

    height: 24,

  },

  notificationBadge: {

    position: 'absolute',

    top: -4,

    right: -4,

    width: 8,

    height: 8,

    borderRadius: 4,

    backgroundColor: '#FF3B30',

  },

  searchContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 20,

    marginBottom: 20,

  },

  searchInputContainer: {

    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#F0F0F0',

    borderRadius: 10,

    paddingHorizontal: 10,

    marginRight: 10,

  },

  searchIcon: {

    width: 20,

    height: 20,

    marginRight: 10,

  },

  searchInput: {

    flex: 1,

    height: 40,

  },

  filterButton: {

    backgroundColor: '#000000',

    borderRadius: 10,

    padding: 10,

    position: 'relative',

  },

  filterIcon: {

    width: 20,

    height: 20,

    tintColor: '#FFFFFF',

  },

  filterBadge: {

    position: 'absolute',

    top: -5,

    right: -5,

    backgroundColor: '#FF3B30',

    borderRadius: 10,

    width: 20,

    height: 20,

    justifyContent: 'center',

    alignItems: 'center',

  },

  filterBadgeText: {

    color: '#FFFFFF',

    fontSize: 12,

    fontWeight: 'bold',

  },

  categoryList: {

    paddingHorizontal: 20,

    marginBottom: 20,

  },

  categoryItem: {

    backgroundColor: '#F0F0F0',

    borderRadius: 20,

    paddingHorizontal: 15,

    paddingVertical: 8,

    marginRight: 10,

  },

  categoryText: {

    fontSize: 12,

    color: '#666666',

  },

  resultHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 20,

    marginBottom: 10,

  },

  resultTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  resultCount: {

    fontSize: 14,

    color: '#666666',

  },

  courseList: {

    paddingHorizontal: 20,

  },

  courseItem: {

    flexDirection: 'row',

    marginBottom: 20,

  },

  courseIcon: {

    width: 80,

    height: 80,

    borderRadius: 10,

    marginRight: 15,

  },

  courseInfo: {

    flex: 1,

  },

  courseCategory: {

    fontSize: 12,

    color: '#666666',

    marginBottom: 5,

  },

  courseTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  courseRating: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 5,

  },

  starIcon: {

    width: 16,

    height: 16,

    marginRight: 5,

  },

  ratingText: {

    fontSize: 14,

    color: '#666666',

  },

  coursePrice: {

    fontSize: 16,

    fontWeight: 'bold',

    color: '#4CAF50',

  },

});



export default SearchScreen;