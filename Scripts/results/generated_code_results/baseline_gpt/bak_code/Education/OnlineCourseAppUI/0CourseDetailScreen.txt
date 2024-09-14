import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CourseDetailScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#4A4A4A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>3D Design Basic</Text>
      </View>
      <Image
        source={require('../assets/snack-icon.png')}
        style={styles.courseImage}
      />
      
      <View style={styles.courseInfo}>
        <View style={styles.infoRow}>
          <View style={styles.rating}>
            <MaterialIcons name="people" size={16} color="#a1a1a1" />
            <Text style={styles.ratingText}>4.569</Text>
          </View>
          <View style={styles.rating}>
            <MaterialIcons name="star" size={16} color="#a1a1a1" />
            <Text style={styles.ratingText}>4.9</Text>
          </View>
          <View style={styles.bestSellerTag}>
            <Text style={styles.bestSellerText}>Best Seller</Text>
          </View>
        </View>
        <Text style={styles.courseTitle}>3D Design Basic</Text>
        <Text style={styles.courseDescription}>
          In this course you will learn how to build a space to a 3-dimensional product. There are 24 premium learning videos for you.
        </Text>
      </View>

      <View style={styles.lessonInfo}>
        <Text style={styles.lessonCount}>24 Lessons (20 hours)</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.lessonItem}>
        <Image
          source={require('../assets/snack-icon.png')}
          style={styles.lessonImage}
        />
        <View style={styles.lessonTextContainer}>
          <Text style={styles.lessonTitle}>Introduction to 3D</Text>
          <Text style={styles.lessonDuration}>20 mins</Text>
        </View>
        <MaterialIcons name="check-circle" size={24} color="#a1a1a1" />
      </View>

      <TouchableOpacity style={styles.largeButton}>
        <Text style={styles.buttonText}>Large Button</Text>
        <Icon name="arrow-forward" size={16} color="#fff" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  courseImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  courseInfo: {
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  ratingText: {
    marginLeft: 4,
    color: '#a1a1a1',
  },
  bestSellerTag: {
    backgroundColor: '#eef2ff',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  bestSellerText: {
    color: '#4f46e5',
    fontSize: 12,
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  courseDescription: {
    fontSize: 16,
    color: '#555',
  },
  lessonInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  lessonCount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  seeAll: {
    fontSize: 14,
    color: '#4f46e5',
  },
  lessonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 16,
    marginBottom: 16,
    borderRadius: 10,
  },
  lessonImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 16,
  },
  lessonTextContainer: {
    flex: 1,
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  lessonDuration: {
    fontSize: 14,
    color: '#a1a1a1',
  },
  largeButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4a4a4a',
    paddingVertical: 16,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 8,
  },
});

export default CourseDetailScreen;