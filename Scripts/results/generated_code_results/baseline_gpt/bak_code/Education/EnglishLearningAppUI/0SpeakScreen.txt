import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SpeakScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>Speaking Course</Text>
      <Text style={styles.subHeader}>Improve your speak skill with many courses</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Studying Course</Text>
        <View style={styles.courseCard}>
          <Image source={require('../assets/snack-icon.png')} style={styles.courseImage} />
          <View style={styles.courseInfo}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Intermediate</Text>
            </View>
            <Text style={styles.courseTitle}>English REAL TALK</Text>
            <Text style={styles.courseDescription} numberOfLines={2}>
              Is speak English as easy but rigid as a textbook? No no!! You're wrong!
            </Text>
            <TouchableOpacity style={styles.arrowButton}>
              <Icon name="arrow-forward" size={16} color="gray" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Courses</Text>
        <View style={styles.categoryTabs}>
          <View style={styles.categoryTabActive}>
            <Text style={styles.categoryTabTextActive}>All</Text>
          </View>
          <View style={styles.categoryTab}>
            <Text style={styles.categoryTabText}>Beginner</Text>
          </View>
          <View style={styles.categoryTab}>
            <Text style={styles.categoryTabText}>Intermediate</Text>
          </View>
          <View style={styles.categoryTab}>
            <Text style={styles.categoryTabText}>Advanced</Text>
          </View>
        </View>

        <View style={styles.courseCard}>
          <Image source={require('../assets/snack-icon.png')} style={styles.courseImage} />
          <View style={styles.courseInfo}>
            <View style={styles.tagPrimary}>
              <Text style={styles.tagTextPrimary}>Primary</Text>
            </View>
            <Text style={styles.courseTitle}>Basic communication English</Text>
            <Text style={styles.courseLessonCount}>12 Lessons</Text>
            <TouchableOpacity style={styles.arrowButton}>
              <Icon name="arrow-forward" size={16} color="gray" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.courseCard}>
          <Image source={require('../assets/snack-icon.png')} style={styles.courseImage} />
          <View style={styles.courseInfo}>
            <View style={styles.tagPrimary}>
              <Text style={styles.tagTextPrimary}>Primary</Text>
            </View>
            <Text style={styles.courseTitle}>Essential Structures</Text>
            <Text style={styles.courseLessonCount}>6 Lessons</Text>
            <TouchableOpacity style={styles.arrowButton}>
              <Icon name="arrow-forward" size={16} color="gray" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subHeader: {
    fontSize: 14,
    textAlign: 'center',
    color: 'gray',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  courseCard: {
    flexDirection: 'row',
    marginBottom: 16,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  courseImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  courseInfo: {
    flex: 1,
    marginLeft: 10,
  },
  tag: {
    backgroundColor: '#15a76e',
    borderRadius: 12,
    paddingVertical: 2,
    paddingHorizontal: 8,
    alignSelf: 'flex-start',
  },
  tagText: {
    color: '#fff',
    fontSize: 12,
  },
  tagPrimary: {
    backgroundColor: '#f27957',
    borderRadius: 12,
    paddingVertical: 2,
    paddingHorizontal: 8,
    alignSelf: 'flex-start',
  },
  tagTextPrimary: {
    color: '#fff',
    fontSize: 12,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  courseDescription: {
    fontSize: 14,
    color: 'gray',
  },
  courseLessonCount: {
    fontSize: 14,
    color: 'gray',
    marginVertical: 4,
  },
  categoryTabs: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  categoryTab: {
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  categoryTabActive: {
    backgroundColor: '#007bff',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  categoryTabText: {
    color: 'gray',
    fontSize: 14,
  },
  categoryTabTextActive: {
    color: '#fff',
    fontSize: 14,
  },
  arrowButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 32,
    height: 32,
    backgroundColor: '#f3f3f3',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SpeakScreen;