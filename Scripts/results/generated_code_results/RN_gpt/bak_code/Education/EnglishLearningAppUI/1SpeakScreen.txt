import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const SpeakScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Speaking Course</Text>
          <Text style={styles.subtitle}>Improve your speak skill with many courses</Text>
        </View>
        
        <Text style={styles.sectionTitle}>Studying Course</Text>
        <View style={styles.featuredCourse}>
          <Image source={require('../assets/snack-icon.png')} style={styles.courseImage} />
          <View style={styles.courseContent}>
            <Text style={styles.levelBadge}>Intermediate</Text>
            <Text style={styles.courseTitle}>English REAL TALK</Text>
            <Text style={styles.courseDescription}>Is speak English as easy but rigid as a textbook? No no! You're wrong! ...</Text>
            <TouchableOpacity style={styles.arrowButton} onPress={() => navigation.navigate('Conversation')}>
              <Text>→</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Courses</Text>
        <View style={styles.filters}>
          <TouchableOpacity style={styles.filterButtonActive}>
            <Text style={styles.filterTextActive}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Beginner</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Intermediate</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Advanced</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.courseList}>
          <View style={styles.courseItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.courseThumbnail} />
            <View style={styles.courseDetails}>
              <Text style={styles.levelLabel}>Primary</Text>
              <Text style={styles.courseItemTitle}>Basic communication English</Text>
              <Text style={styles.lessonCount}>12 Lessons</Text>
            </View>
            <TouchableOpacity style={styles.courseArrowButton} onPress={() => navigation.navigate('Conversation')}>
              <Text>→</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.courseItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.courseThumbnail} />
            <View style={styles.courseDetails}>
              <Text style={styles.levelLabel}>Primary</Text>
              <Text style={styles.courseItemTitle}>Essential Structures</Text>
              <Text style={styles.lessonCount}>6 Lessons</Text>
            </View>
            <TouchableOpacity style={styles.courseArrowButton} onPress={() => navigation.navigate('Conversation')}>
              <Text>→</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity><Text style={styles.navText}>Home</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.navText}>Search</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.navTextActive}>Speak</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.navText}>Vocabulary</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.navText}>Profile</Text></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 20,
  },
  featuredCourse: {
    flexDirection: 'row',
    margin: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    overflow: 'hidden',
  },
  courseImage: {
    width: 100,
    height: 100,
  },
  courseContent: {
    flex: 1,
    padding: 10,
  },
  levelBadge: {
    backgroundColor: '#4caf50',
    borderRadius: 5,
    paddingHorizontal: 5,
    color: '#fff',
    alignSelf: 'flex-start',
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  courseDescription: {
    fontSize: 14,
    color: '#555',
  },
  arrowButton: {
    marginTop: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    padding: 5,
    alignSelf: 'flex-start',
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  filterButtonActive: {
    backgroundColor: '#0066cc',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginHorizontal: 5,
  },
  filterButton: {
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginHorizontal: 5,
  },
  filterText: {
    color: '#555',
    fontSize: 14,
  },
  filterTextActive: {
    color: '#fff',
    fontSize: 14,
  },
  courseList: {
    marginHorizontal: 20,
  },
  courseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    overflow: 'hidden',
  },
  courseThumbnail: {
    width: 80,
    height: 80,
  },
  courseDetails: {
    flex: 1,
    padding: 10,
  },
  levelLabel: {
    backgroundColor: '#ff5722',
    borderRadius: 5,
    paddingHorizontal: 5,
    color: '#fff',
    alignSelf: 'flex-start',
  },
  courseItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  lessonCount: {
    fontSize: 14,
    color: '#777',
  },
  courseArrowButton: {
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    padding: 5,
    margin: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
  },
  navText: {
    fontSize: 12,
    color: '#888',
  },
  navTextActive: {
    fontSize: 12,
    color: '#0066cc',
  },
});

export default SpeakScreen;