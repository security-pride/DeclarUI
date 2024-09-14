import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DiscoverScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="grid-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Discover</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <Icon name="notifications-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <Text style={styles.heroTitle}>Study what you want anytime anywhere</Text>

      <TouchableOpacity style={styles.featuredCourse} onPress={() => navigation.navigate('CourseDetail')}>
        <Text style={styles.courseCategory}>Interface Design</Text>
        <Text style={styles.courseTitle}>User interface for beginners</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>⭐ 4.7 (1242 Reviews)</Text>
        </View>
        <View style={styles.progress}>
          <View style={styles.progressBar}></View>
          <Text style={styles.progressText}>48%</Text>
        </View>
        <Image source={require('../assets/snack-icon.png')} style={styles.courseImage} />
      </TouchableOpacity>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Course</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.courseList}>
        <TouchableOpacity style={styles.courseCard} onPress={() => navigation.navigate('CourseDetail')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.courseCardImage} />
          <View style={styles.courseInfo}>
            <Text style={styles.courseCardCategory}>Graphic Design</Text>
            <Text style={styles.courseCardTitle}>Expert Wireframing for Mobile Design</Text>
            <Text style={styles.courseCardInstructor}>Jerremy Mamika</Text>
            <Text style={styles.courseCardPrice}>$48</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
            <Icon name="heart-outline" size={24} color="#000" style={styles.favoriteIcon} />
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.courseCard} onPress={() => navigation.navigate('CourseDetail')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.courseCardImage} />
          <View style={styles.courseInfo}>
            <Text style={styles.courseCardCategory}>Development</Text>
            <Text style={styles.courseCardTitle}>Bootstrapping Principles</Text>
            <Text style={styles.courseCardInstructor}>Alexander Be</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <View style={styles.navItem}>
            <Icon name="home-outline" size={24} color="#6200ee" />
            <Text style={styles.navText}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Statistics')}>
          <View style={styles.navItem}>
            <Icon name="stats-chart-outline" size={24} color="#aaa" />
            <Text style={styles.navText}>Statistic</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
          <View style={styles.navItem}>
            <Icon name="heart-outline" size={24} color="#aaa" />
            <Text style={styles.navText}>Favorites</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.navItem}>
            <Icon name="person-outline" size={24} color="#aaa" />
            <Text style={styles.navText}>Profile</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#6200ee',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
  },
  heroTitle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 20,
    color: '#333',
  },
  featuredCourse: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 15,
    elevation: 2,
  },
  courseCategory: {
    fontSize: 12,
    color: '#999',
  },
  courseTitle: {
    fontSize: 16,
    color: '#333',
    marginVertical: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  ratingText: {
    fontSize: 12,
    color: '#999',
  },
  progress: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  progressBar: {
    flex: 1,
    height: 5,
    backgroundColor: '#6200ee',
    borderRadius: 2.5,
    marginRight: 10,
  },
  progressText: {
    fontSize: 12,
    color: '#333',
  },
  courseImage: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 15,
    right: 15,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#333',
  },
  seeAll: {
    fontSize: 12,
    color: '#6200ee',
  },
  courseList: {
    marginHorizontal: 20,
  },
  courseCard: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 2,
  },
  courseCardImage: {
    width: 100,
    height: 100,
  },
  courseInfo: {
    flex: 1,
    padding: 10,
  },
  courseCardCategory: {
    fontSize: 12,
    color: '#6200ee',
  },
  courseCardTitle: {
    fontSize: 14,
    color: '#333',
    marginVertical: 5,
  },
  courseCardInstructor: {
    fontSize: 12,
    color: '#999',
  },
  courseCardPrice: {
    fontSize: 12,
    color: '#333',
    marginVertical: 5,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 40,
    elevation: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 10,
    color: '#777',
  },
});

export default DiscoverScreen;