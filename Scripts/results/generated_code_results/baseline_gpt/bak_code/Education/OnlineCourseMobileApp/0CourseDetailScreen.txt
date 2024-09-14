import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';

const CourseDetailScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Details Course</Text>
        <TouchableOpacity>
          <Icon name="more-vert" size={24} />
        </TouchableOpacity>
      </View>

      <View style={styles.courseHeader}>
        <View style={styles.courseImageContainer}>
          <Image
            source={require('../assets/snack-icon.png')}
            style={styles.courseImage}
          />
        </View>
        <Text style={styles.courseTitle}>
          How to make modern design for Beginner
        </Text>
        <View style={styles.courseInfo}>
          <Image
            source={require('../assets/snack-icon.png')}
            style={styles.instructorImage}
          />
          <Text style={styles.instructorName}>Nicola Tesla</Text>
          <View style={styles.rating}>
            <Icon name="star" size={16} color="#FFC107" />
            <Text style={styles.ratingText}>4.9 (1.2k)</Text>
          </View>
        </View>
        <Text style={styles.courseDescription}>
          Lorem ipsum dolor sit amet consectetur. Mattis amet accumsan tellus sapien amet eleifend est feugiat. Elementum vulputate arcu urna.
        </Text>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.activeTabText}>Lessons</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inactiveTab}>
          <Text style={styles.inactiveTabText}>Reviews</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.lessonsList}>
        <TouchableOpacity style={styles.lessonItem}>
          <Text style={styles.lessonNumber}>1.</Text>
          <Text style={styles.lessonTitle}>Graphics Design Introduction</Text>
          <Text style={styles.lessonTime}>12:34</Text>
          <TouchableOpacity style={styles.playButton}>
            <Icon name="play-arrow" size={24} color="#FFF" />
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity style={styles.lessonItem}>
          <Text style={styles.lessonNumber}>2.</Text>
          <Text style={styles.lessonTitle}>Shape & Line</Text>
          <Text style={styles.lessonTime}>12:34</Text>
          <TouchableOpacity style={styles.lockButton}>
            <Icon name="lock" size={24} color="#FFF" />
          </TouchableOpacity>
        </TouchableOpacity>
      </ScrollView>

      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>Buy $23.00</Text>
        <Icon name="arrow-forward" size={24} color="#FFF" />
      </TouchableOpacity>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  courseHeader: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#F7F7F7',
  },
  courseImageContainer: {
    alignItems: 'center',
    marginVertical: 12,
  },
  courseImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 4,
  },
  courseInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  instructorImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 8,
  },
  instructorName: {
    fontSize: 14,
    marginRight: 16,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    marginLeft: 4,
  },
  courseDescription: {
    fontSize: 13,
    textAlign: 'center',
    marginVertical: 8,
    color: '#8A8A8A',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#ADFF2F',
    paddingVertical: 12,
  },
  inactiveTab: {
    paddingVertical: 12,
  },
  activeTabText: {
    color: '#000',
    fontWeight: 'bold',
  },
  inactiveTabText: {
    color: '#8A8A8A',
  },
  lessonsList: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  lessonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginVertical: 8,
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
  lessonNumber: {
    fontSize: 16,
    marginRight: 8,
  },
  lessonTitle: {
    flex: 1,
    fontSize: 16,
  },
  lessonTime: {
    fontSize: 12,
    color: '#8A8A8A',
    marginRight: 8,
  },
  playButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#ADFF2F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lockButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#8A8A8A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADFF2F',
    margin: 16,
    borderRadius: 8,
    paddingVertical: 12,
  },
  buyButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    marginRight: 8,
  },
});

export default CourseDetailScreen;