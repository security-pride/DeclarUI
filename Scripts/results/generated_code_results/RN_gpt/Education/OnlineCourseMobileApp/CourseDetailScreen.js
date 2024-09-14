import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, Button, StatusBar } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome5 } from 'react-native-vector-icons';

const CourseDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="arrow-left" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Details Course</Text>
        <FontAwesome5 name="ellipsis-h" size={20} color="#000" />
      </View>
      <ImageBackground source={require('../assets/snack-icon.png')} style={styles.courseBanner}>
        <Text style={styles.courseTypeText}>GRAPHICS DESIGN</Text>
      </ImageBackground>
      <ScrollView>
        <View style={styles.courseInfo}>
          <Text style={styles.courseTitle}>How to make modern design for Beginner</Text>
          <View style={styles.instructorInfo}>
            <Image source={require('../assets/snack-icon.png')} style={styles.instructorAvatar} />
            <Text style={styles.instructorName}>Nicola Tesla</Text>
            <View style={styles.rating}>
              <FontAwesome5 name="star" size={14} color="#FBC02D" />
              <Text style={styles.ratingText}>4.9 (1.2k)</Text>
            </View>
          </View>
          <Text style={styles.courseDescription}>
            Lorem ipsum dolor sit amet consectetur. Mattis amet accumsan tellus sapien amet tempus elit feugiat. Elementum vulputate arcu urna.
          </Text>
        </View>
        <View style={styles.tabs}>
          <Text style={[styles.tab, styles.activeTab]}>Lessons</Text>
          <Text style={styles.tab}>Reviews</Text>
        </View>
        <View style={styles.lessonItem}>
          <View style={styles.lessonInfo}>
            <Text style={styles.lessonTitle}>Graphics Design Introduction</Text>
            <View style={styles.lessonTime}>
              <FontAwesome5 name="clock" size={14} color="#BDBDBD" />
              <Text style={styles.lessonDuration}>12:34</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.playButton}>
            <FontAwesome5 name="play" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.lessonItem}>
          <View style={styles.lessonInfo}>
            <Text style={styles.lessonTitle}>Shape & Line</Text>
            <View style={styles.lessonTime}>
              <FontAwesome5 name="clock" size={14} color="#BDBDBD" />
              <Text style={styles.lessonDuration}>12:34</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.lockButton}>
            <FontAwesome5 name="lock" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.buyButton} onPress={() => alert('Buying Course')}>
        <Text style={styles.buyButtonText}>Buy $23.00</Text>
        <FontAwesome5 name="arrow-right" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  courseBanner: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  courseTypeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  courseInfo: {
    marginVertical: 20,
  },
  courseTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  instructorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  instructorAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  instructorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 14,
  },
  courseDescription: {
    fontSize: 14,
    color: '#757575',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tab: {
    fontSize: 16,
    color: '#757575',
  },
  activeTab: {
    color: '#4CAF50',
    borderBottomWidth: 2,
    borderBottomColor: '#4CAF50',
  },
  lessonItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 10,
  },
  lessonInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  lessonTime: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  lessonDuration: {
    marginLeft: 5,
    fontSize: 14,
    color: '#757575',
  },
  playButton: {
    width: 30,
    height: 30,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  lockButton: {
    width: 30,
    height: 30,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  buyButton: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default CourseDetailScreen;