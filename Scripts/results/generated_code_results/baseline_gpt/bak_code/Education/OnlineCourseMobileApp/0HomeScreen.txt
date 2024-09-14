import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.welcomeText}>Welcome Back</Text>
          <Text style={styles.nameText}>Nicolas Doflamingo! 🤟🎉🟧</Text>
        </View>
        <View style={styles.notificationIcon}>
          <Icon name="notifications-outline" size={24} color="#fff" />
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationBadgeText}>9+</Text>
          </View>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={styles.mainTitle}>Best courses that suits to you</Text>
        <Icon name="arrow-forward-outline" size={24} color="#fff" />
      </View>

      {/* My Courses Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>My Courses</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.courseList}>
        {/* Each course card */}
        <View style={styles.courseCard}>
          <View style={styles.courseImage}></View>
          <View style={styles.courseContent}>
            <Text style={styles.courseTopic}>GRAPHICS DESIGN</Text>
            <Text style={styles.courseTitle}>How to make modern poster for Beginner</Text>
            <View style={styles.courseInfo}>
              <Image source={require('../assets/snack-icon.png')} style={styles.courseAvatar} />
              <Text style={styles.courseInstructor}>Nicola Tesla</Text>
            </View>
            <Text style={styles.courseSessions}>Sessions 7 / 15</Text>
            <Text style={styles.courseProgress}>82 %</Text>
          </View>
        </View>

        {/* Another course card */}
        <View style={styles.courseCard}>
          <View style={styles.courseImageAlt}></View>
          <View style={styles.courseContent}>
            <Text style={styles.courseTopic}>UI/UX DESIGN</Text>
            <Text style={styles.courseTitle}>How to make Design system in easy way</Text>
            <View style={styles.courseInfo}>
              <Image source={require('../assets/snack-icon.png')} style={styles.courseAvatar} />
              <Text style={styles.courseInstructor}>Dwi Gunawan</Text>
            </View>
            <Text style={styles.courseSessions}>Sessions 7 / 15</Text>
            <Text style={styles.courseProgress}>82 %</Text>
          </View>
        </View>
      </ScrollView>

      {/* Mentor of The Weeks Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Mentor of The Weeks</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mentorList}>
        {/* Each mentor card */}
        <View style={styles.mentorCard}>
          <Image source={require('../assets/snack-icon.png')} style={styles.mentorAvatar} />
          <View style={styles.mentorContent}>
            <Text style={styles.mentorName}>Nicola Tesla</Text>
            <Text style={styles.mentorRating}>4.9 (1,435 Reviews)</Text>
          </View>
          <Icon name="star" size={16} color="#FFA41B" />
        </View>

        {/* Another mentor card */}
        <View style={styles.mentorCard}>
          <Image source={require('../assets/snack-icon.png')} style={styles.mentorAvatar} />
          <View style={styles.mentorContent}>
            <Text style={styles.mentorName}>Galileo Galilei</Text>
            <Text style={styles.mentorRating}>4.9 (1,435 Reviews)</Text>
          </View>
          <Icon name="star" size={16} color="#FFA41B" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131B4D',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  welcomeText: {
    color: '#fff',
    fontSize: 12,
  },
  nameText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  notificationIcon: {
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#FF4757',
    borderRadius: 8,
    padding: 2,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationBadgeText: {
    color: '#fff',
    fontSize: 10,
  },
  mainContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  mainTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllText: {
    color: '#A0A6B1',
    fontSize: 14,
  },
  courseList: {
    marginBottom: 20,
  },
  courseCard: {
    width: 240,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginRight: 10,
  },
  courseContent: {
    marginTop: 10,
  },
  courseTopic: {
    color: '#8C8C8C',
    fontSize: 12,
  },
  courseTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 5,
  },
  courseInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  courseAvatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 5,
  },
  courseInstructor: {
    fontSize: 12,
    color: '#333',
  },
  courseSessions: {
    fontSize: 12,
    color: '#8C8C8C',
  },
  courseProgress: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#00CC99',
  },
  courseImage: {
    backgroundColor: '#58C0E0',
    height: 100,
    borderRadius: 10,
  },
  courseImageAlt: {
    backgroundColor: '#C058E0',
    height: 100,
    borderRadius: 10,
  },
  mentorList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mentorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '48%',
  },
  mentorAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  mentorContent: {
    flex: 1,
  },
  mentorName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  mentorRating: {
    fontSize: 12,
    color: '#8C8C8C',
  },
});

export default HomeScreen;