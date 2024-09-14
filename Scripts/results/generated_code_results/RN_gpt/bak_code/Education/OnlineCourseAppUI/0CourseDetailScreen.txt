import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';

const CourseDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
        </Pressable>
        <Text style={styles.headerTitle}>3D Design Basic</Text>
      </View>
      
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.courseImageContainer}>
          <Image source={require('../assets/snack-icon.png')} style={styles.courseImage} />
          <Pressable style={styles.playButton}>
            <MaterialIcons name="play-arrow" size={24} color="white" />
          </Pressable>
        </View>
        
        <View style={styles.courseInfo}>
          <Text style={styles.courseBadge}>4.569</Text>
          <Text style={styles.courseBadge}>4.9</Text>
          <Text style={styles.courseBadge}>Best Seller</Text>
        </View>
        
        <Text style={styles.courseTitle}>3D Design Basic</Text>
        
        <Text style={styles.courseDescription}>
          In this course you will learn how to build a space to a 3-dimensional product. There are 24 premium learning videos for you.
        </Text>
        
        <View style={styles.lessonsInfo}>
          <Text style={styles.lessonText}>24 Lessons (20 hours)</Text>
          <Pressable onPress={() => navigation.navigate('AwesomeCourses')} >
            <Text style={styles.seeAllLink}>See all</Text>
          </Pressable>
        </View>
        
        <Pressable style={styles.lessonCard}>
          <Image source={require('../assets/snack-icon.png')} style={styles.lessonImage} />
          <View style={styles.lessonDetails}>
            <Text style={styles.lessonTitle}>Introduction to 3D</Text>
            <Text style={styles.lessonDuration}>20 mins</Text>
          </View>
          <MaterialIcons name="check-circle" size={24} color="gray" />
        </Pressable>
      </ScrollView>

      <Pressable style={styles.largeButton}>
        <Text style={styles.largeButtonText}>Large Button</Text>
        <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  backButton: {
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  courseImageContainer: {
    position: 'relative',
    marginVertical: 16,
  },
  courseImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -12 }, { translateY: -12 }],
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: 8,
  },
  courseInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  courseBadge: {
    backgroundColor: '#EEF',
    padding: 4,
    borderRadius: 4,
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  courseDescription: {
    fontSize: 16,
    color: '#646464',
    marginBottom: 16,
  },
  lessonsInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
  lessonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  seeAllLink: {
    fontSize: 16,
    color: '#1E90FF',
  },
  lessonCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    marginBottom: 16,
  },
  lessonImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  lessonDetails: {
    flex: 1,
    marginHorizontal: 16,
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  lessonDuration: {
    fontSize: 14,
    color: '#888',
  },
  largeButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#555',
    padding: 16,
    borderRadius: 8,
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  largeButtonText: {
    fontSize: 18,
    color: 'white',
    marginRight: 8,
  },
});

export default CourseDetailScreen;