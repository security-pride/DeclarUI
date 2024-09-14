import React from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchScreen = () => {
  const courses = [
    {
      id: '1',
      title: '3D Design Basic',
      lessons: '24 lessons',
      rating: 4.9,
      price: '$24.99',
      image: require('../assets/snack-icon.png'),
    },
    {
      id: '2',
      title: 'Characters Animation',
      lessons: '22 lessons',
      rating: 4.8,
      price: '$22.69',
      image: require('../assets/snack-icon.png'),
    },
    {
      id: '3',
      title: '3D Abstract Design',
      lessons: '18 lessons',
      rating: 4.7,
      price: '$19.29',
      image: require('../assets/snack-icon.png'),
    },
    {
      id: '4',
      title: 'Product Design',
      lessons: '23 lessons',
      rating: 4.8,
      price: '$25.79',
      image: require('../assets/snack-icon.png'),
    },
  ];

  const renderCourse = ({ item }) => (
    <View style={styles.courseCard}>
      <Image source={item.image} style={styles.courseImage} />
      <View style={styles.courseInfo}>
        <Text style={styles.courseTitle}>{item.title}</Text>
        <Text style={styles.courseLessons}>{item.lessons}</Text>
        <View style={styles.courseRating}>
          <Icon name="star" size={16} color="#f1c40f" />
          <Text>{item.rating}</Text>
        </View>
      </View>
      <View style={styles.courseActions}>
        <Text style={styles.coursePrice}>{item.price}</Text>
        <TouchableOpacity>
          <Icon name="heart-outline" size={24} color="#ccc" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="chevron-back-outline" size={24} color="#000" />
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          value="3D"
        />
        <TouchableOpacity>
          <Icon name="filter-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <Text style={styles.resultsText}>Results</Text>
      <FlatList
        data={courses}
        renderItem={renderCourse}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.courseList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#eee',
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
  },
  resultsText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#333',
  },
  courseList: {
    paddingBottom: 20,
  },
  courseCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 1,
  },
  courseImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  courseInfo: {
    flex: 1,
    marginLeft: 15,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  courseLessons: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  courseRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  courseActions: {
    alignItems: 'flex-end',
  },
  coursePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 5,
  },
});

export default SearchScreen;