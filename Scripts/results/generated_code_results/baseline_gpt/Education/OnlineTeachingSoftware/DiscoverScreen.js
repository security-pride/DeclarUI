import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DiscoverScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Icon name="ios-qr-code-outline" size={30} color="#fff" />
        <Text style={styles.headerText}>Discover</Text>
        <Icon name="ios-notifications-outline" size={30} color="#fff" />
      </View>

      {/* Main Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Study what you want{"\n"}anytime anywhere
        </Text>
      </View>

      {/* Course Card */}
      <View style={styles.courseCard}>
        <View style={styles.courseDetails}>
          <Text style={styles.courseCategory}>Interface Design</Text>
          <Text style={styles.courseTitle}>User interface for beginners</Text>
          <View style={styles.ratingContainer}>
            <Icon name="ios-star" size={16} color="#ffcd3c" />
            <Text style={styles.ratingText}>4.7 (1,242 Reviews)</Text>
          </View>
          <View style={styles.progressContainer}>
            <View style={styles.progressBar} />
            <Text style={styles.progressText}>48%</Text>
          </View>
        </View>
        <Image source={require('../assets/snack-icon.png')} style={styles.courseImage} />
      </View>

      {/* Popular Courses */}
      <View style={styles.popularCourses}>
        <View style={styles.popularHeader}>
          <Text style={styles.popularTitle}>Popular Course</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>

        {/* Course Item */}
        <View style={styles.courseItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.popularImage} />
          <View>
            <Text style={styles.courseCategory}>Graphic Design</Text>
            <Text style={styles.courseName}>Expert Wireframing for Mobile Design</Text>
            <Text style={styles.instructorName}>Jerremy Mamika</Text>
            <Text style={styles.coursePrice}>$48</Text>
          </View>
          <Icon name="ios-heart-outline" size={24} color="#ccc" />
        </View>

        <View style={styles.courseItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.popularImage} />
          <View>
            <Text style={styles.courseCategory}>Development</Text>
            <Text style={styles.courseName}>Bootstrapping Web Principles</Text>
            <Text style={styles.instructorName}>Alexander Bernard</Text>
            <Text style={styles.coursePrice}>$36</Text>
          </View>
          <Icon name="ios-heart-outline" size={24} color="#ccc" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282D5D',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: 40,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  titleContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  courseCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 16,
    padding: 16,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  courseDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  courseCategory: {
    fontSize: 12,
    color: '#a1a1a1',
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 12,
    color: '#a1a1a1',
    marginLeft: 5,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: '#e0e0e0',
    marginRight: 10,
  },
  progressText: {
    fontSize: 12,
    color: '#333',
  },
  courseImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  popularCourses: {
    backgroundColor: '#f5f5f5',
    marginTop: 20,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  popularHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  popularTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAllText: {
    fontSize: 14,
    color: '#8a4af3',
  },
  courseItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 16,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  popularImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 16,
  },
  courseName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  instructorName: {
    fontSize: 12,
    color: '#a1a1a1',
    marginTop: 5,
  },
  coursePrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8a4af3',
    marginTop: 5,
  },
});

export default DiscoverScreen;