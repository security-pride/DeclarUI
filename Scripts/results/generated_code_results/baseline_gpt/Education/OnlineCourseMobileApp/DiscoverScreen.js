import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DiscoverScreen = () => {
  // Sample data
  const courses = [
    { id: '1', title: 'How to make modern poster for Beginner', category: 'GRAPHICS DESIGN', price: '$12.00' },
    { id: '2', title: 'How to make Design system in easy waen', category: 'UI/UX DESIGN', price: '$12.00' },
  ];

  const renderCourseItem = ({ item }) => (
    <View style={styles.courseCard}>
      <Image source={require('../assets/snack-icon.png')} style={styles.courseImage} />
      <Text style={styles.courseCategory}>{item.category}</Text>
      <Text style={styles.courseTitle}>{item.title}</Text>
      <Text style={styles.coursePrice}>{item.price}</Text>
      <View style={styles.ratingContainer}>
        <Icon name="star" size={16} color="#F5A623" />
        <Text style={styles.ratingText}>4.9</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Discover the best {"\n"}course that suits to you</Text>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search course..." />
        <TouchableOpacity style={styles.filterButton}>
          <Icon name="filter-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Course of the weeks</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={courses}
        renderItem={renderCourseItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.courseList}
      />

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Suits to you</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={courses}
        renderItem={renderCourseItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.courseList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 20,
  },
  filterButton: {
    marginLeft: 10,
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    padding: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllText: {
    fontSize: 14,
    color: '#007BFF',
  },
  courseList: {
    paddingVertical: 10,
  },
  courseCard: {
    width: 160,
    padding: 10,
    marginRight: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  },
  courseImage: {
    width: '100%',
    height: 80,
    borderRadius: 5,
  },
  courseCategory: {
    marginTop: 10,
    fontSize: 12,
    color: '#aaa',
  },
  courseTitle: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  coursePrice: {
    marginTop: 5,
    fontSize: 16,
    color: '#0AADA8',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#333',
  },
});

export default DiscoverScreen;