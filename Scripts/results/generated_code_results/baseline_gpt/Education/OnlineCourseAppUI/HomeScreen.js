import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
          <Text style={styles.greetingText}>Hello, Daniel!</Text>
        </View>
        <View style={styles.headerRight}>
          <Icon name="notifications-outline" size={24} color="#000" />
          <Icon name="heart-outline" size={24} color="#000" style={styles.iconSpacer} />
        </View>
      </View>

      <View style={styles.searchContainer}>
        <TextInput style={styles.searchBar} placeholder="Search" placeholderTextColor="#999" />
        <Icon name="options-outline" size={24} color="#000" style={styles.filterIcon} />
      </View>

      <View style={styles.promotion}>
        <Text style={styles.sectionTitle}>Promotion</Text>
        <Text style={styles.seeAllText}>See all</Text>
      </View>
      <View style={styles.promotionCard}>
        <Image source={require('../assets/snack-icon.png')} style={styles.promotionImage} />
        <View style={styles.promotionTextContainer}>
          <Text style={styles.promotionTitle}>3D Design Fundamentals</Text>
          <TouchableOpacity style={styles.promotionButton}>
            <Text style={styles.buttonText}>Small Button</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.awesomeCoursesHeader}>
        <Text style={styles.sectionTitle}>Awesome Courses</Text>
        <Text style={styles.seeAllText}>See all</Text>
      </View>

      <View style={styles.categoryTabs}>
        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.activeTabText}>Medium</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inactiveTab}>
          <Text style={styles.inactiveTabText}>Popular</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inactiveTab}>
          <Text style={styles.inactiveTabText}>Medium</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={courses}
        renderItem={({ item }) => (
          <View style={styles.courseCard}>
            <Image source={item.image} style={styles.courseImage} />
            <View style={styles.courseDetails}>
              <Text style={styles.courseTitle}>{item.title}</Text>
              <Text style={styles.courseLessons}>{item.lessons}</Text>
              <View style={styles.ratingContainer}>
                <FontAwesome name="star" size={16} color="#FFD700" />
                <Text style={styles.courseRating}>{item.rating}</Text>
              </View>
            </View>
            <Text style={styles.coursePrice}>{item.price}</Text>
            <Icon name="heart-outline" size={24} color="#000" style={styles.likeIcon} />
          </View>
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.courseList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  greetingText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'row',
  },
  iconSpacer: {
    marginLeft: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e7e7e7',
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  searchBar: {
    flex: 1,
    height: 40,
    color: '#333',
  },
  filterIcon: {
    marginLeft: 8,
  },
  promotion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllText: {
    color: '#007bff',
  },
  promotionCard: {
    backgroundColor: '#537fef',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  promotionImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  promotionTextContainer: {
    flex: 1,
  },
  promotionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  promotionButton: {
    backgroundColor: '#f1c40f',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
  },
  awesomeCoursesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryTabs: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  activeTab: {
    backgroundColor: '#537fef',
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  inactiveTab: {
    borderColor: '#537fef',
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  activeTabText: {
    color: '#fff',
  },
  inactiveTabText: {
    color: '#537fef',
  },
  courseList: {
    paddingBottom: 16,
  },
  courseCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  courseImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  courseDetails: {
    flex: 1,
  },
  courseLessons: {
    color: '#777',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  courseRating: {
    marginLeft: 4,
    color: '#777',
  },
  coursePrice: {
    color: '#537fef',
    fontWeight: 'bold',
  },
  likeIcon: {
    marginLeft: 16,
  },
});

export default HomeScreen;