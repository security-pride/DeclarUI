import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.titleActive}>Home</Text>
          <Text style={styles.titleInactive}>My List</Text>
          <View style={styles.profileIcon}>
            <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>New Courses</Text>
          <ScrollView horizontal>
            <View style={styles.courseCard}>
              <Image source={require('../assets/snack-icon.png')} style={styles.courseImage} />
              <Text style={styles.courseName}>Mendy Santiago</Text>
              <Text style={styles.courseDesc}>Teach Effective and Authentic Communication</Text>
            </View>
            <View style={styles.courseCard}>
              <Image source={require('../assets/snack-icon.png')} style={styles.courseImage} />
              <Text style={styles.courseName}>John Wiseberg</Text>
              <Text style={styles.courseDesc}>Teach Advertising Strategy</Text>
            </View>
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Courses</Text>
          <View style={styles.popularCourse}>
            <Image source={require('../assets/snack-icon.png')} style={styles.popularImage} />
            <View>
              <Text style={styles.courseName}>Masood El Toure</Text>
              <Text style={styles.courseDesc}>Teaches Creativity and Songwriting</Text>
            </View>
          </View>
          <View style={styles.popularCourse}>
            <Image source={require('../assets/snack-icon.png')} style={styles.popularImage} />
            <View>
              <Text style={styles.courseName}>Sophie Asveld</Text>
              <Text style={styles.courseDesc}>Teaches Screenwriting</Text>
            </View>
          </View>
          <View style={styles.popularCourse}>
            <Image source={require('../assets/snack-icon.png')} style={styles.popularImage} />
            <View>
              <Text style={styles.courseName}>Maria Trofimova</Text>
              <Text style={styles.courseDesc}>Building a Digital Brand</Text>
            </View>
          </View>
          <View style={styles.popularCourse}>
            <Image source={require('../assets/snack-icon.png')} style={styles.popularImage} />
            <View>
              <Text style={styles.courseName}>Lucy Miller</Text>
              <Text style={styles.courseDesc}>Course Description Placeholder</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Icon name="home-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="search-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="download-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1E2D',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  titleActive: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 20,
  },
  titleInactive: {
    color: '#A0A0A0',
    fontSize: 24,
  },
  profileIcon: {
    marginLeft: 'auto',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  courseCard: {
    width: 200,
    marginRight: 20,
  },
  courseImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  courseName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  courseDesc: {
    color: '#B0B0B0',
    fontSize: 14,
  },
  popularCourse: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  popularImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#1B1E2D',
  },
});

export default HomeScreen;