import React, { useState } from 'react';

import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const courses = [

  { id: '1', title: '3D Design Basic', lessons: 24, rating: 4.9, price: 24.99 },

  { id: '2', title: 'Characters Animation', lessons: 22, rating: 4.8, price: 22.69 },

  { id: '3', title: '3D Abstract Design', lessons: 18, rating: 4.7, price: 19.29 },

  { id: '4', title: 'Product Design', lessons: 23, rating: 4.8, price: 25.79 },

];



const SearchScreen = () => {

  const [searchQuery, setSearchQuery] = useState('3Di');

  const navigation = useNavigation();



  const renderCourseItem = ({ item }) => (

    <View style={styles.courseItem}>

      <Image source={require('../assets/snack-icon.png')} style={styles.courseImage} />

      <View style={styles.courseInfo}>

        <Text style={styles.courseTitle}>{item.title}</Text>

        <Text style={styles.courseLessons}>{item.lessons} lessons</Text>

        <View style={styles.ratingContainer}>

          <Icon name="star" size={16} color="#FFC107" />

          <Text style={styles.ratingText}>{item.rating}</Text>

        </View>

      </View>

      <View style={styles.priceContainer}>

        <TouchableOpacity style={styles.favoriteButton}>

          <Icon name="heart-outline" size={24} color="#6B7280" />

        </TouchableOpacity>

        <Text style={styles.priceText}>${item.price}</Text>

      </View>

    </View>

  );



  return (

    <KeyboardAvoidingView 

      style={styles.container} 

      behavior={Platform.OS === "ios" ? "padding" : "height"}

      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}

    >

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>

          <Icon name="chevron-back" size={24} color="#3B82F6" />

        </TouchableOpacity>

        <View style={styles.searchContainer}>

          <TextInput

            style={styles.searchInput}

            value={searchQuery}

            onChangeText={setSearchQuery}

            placeholder="Search courses"

          />

          <TouchableOpacity style={styles.filterButton}>

            <Icon name="options-outline" size={24} color="#3B82F6" />

          </TouchableOpacity>

        </View>

      </View>

      <Text style={styles.resultsText}>Results</Text>

      <FlatList

        data={courses}

        renderItem={renderCourseItem}

        keyExtractor={item => item.id}

        showsVerticalScrollIndicator={false}

      />

    </KeyboardAvoidingView>

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

    backgroundColor: '#FFFFFF',

  },

  backButton: {

    marginRight: 12,

  },

  searchContainer: {

    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#F3F4F6',

    borderRadius: 8,

    paddingHorizontal: 12,

  },

  searchInput: {

    flex: 1,

    height: 40,

    fontSize: 16,

  },

  filterButton: {

    padding: 8,

  },

  resultsText: {

    fontSize: 18,

    fontWeight: 'bold',

    marginHorizontal: 16,

    marginTop: 16,

    marginBottom: 8,

  },

  courseItem: {

    flexDirection: 'row',

    backgroundColor: '#FFFFFF',

    borderRadius: 12,

    marginHorizontal: 16,

    marginBottom: 16,

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

  ratingContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 4,

  },

  ratingText: {

    marginLeft: 4,

    color: '#6B7280',

  },

  priceContainer: {

    alignItems: 'flex-end',

    justifyContent: 'space-between',

  },

  favoriteButton: {

    padding: 4,

  },

  priceText: {

    fontSize: 16,

    fontWeight: 'bold',

    color: '#3B82F6',

  },

});



export default SearchScreen;