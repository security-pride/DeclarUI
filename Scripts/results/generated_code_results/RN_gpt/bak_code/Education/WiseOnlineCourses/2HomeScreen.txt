import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigateTo('Home')}>
          <Text style={styles.activeTab}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo('MyList')}>
          <Text style={styles.inactiveTab}>My List</Text>
        </TouchableOpacity>
        <ImageBackground 
          source={require('../assets/snack-icon.png')} 
          style={styles.profileImage} 
          imageStyle={styles.imageRound}
        />
      </View>
      <ScrollView>
        <Text style={styles.sectionTitle}>New Courses</Text>
        <View style={styles.courseContainer}>
          <TouchableOpacity style={styles.course} onPress={() => navigateTo('CourseDetail')}>
            <Image 
              source={require('../assets/snack-icon.png')} 
              style={styles.courseImage}
            />
            <Text style={styles.courseName}>Mendy Santiago</Text>
            <Text style={styles.courseDescription}>Teach Effective and Authentic Communication</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.course} onPress={() => navigateTo('CourseDetail')}>
            <Image 
              source={require('../assets/snack-icon.png')} 
              style={styles.courseImage}
            />
            <Text style={styles.courseName}>John Wisebe</Text>
            <Text style={styles.courseDescription}>Teach Advertising and Creativity</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.sectionTitle}>Popular Courses</Text>
        <View style={styles.popularCourseContainer}>
          <TouchableOpacity style={styles.popularCourse} onPress={() => navigateTo('CourseDetail')}>
            <Image 
              source={require('../assets/snack-icon.png')} 
              style={styles.popularCourseImage}
            />
            <View>
              <Text style={styles.popularCourseName}>Masood El Toure</Text>
              <Text style={styles.popularCourseDescription}>Teaches Creativity and Songwriting</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.popularCourse} onPress={() => navigateTo('CourseDetail')}>
            <Image 
              source={require('../assets/snack-icon.png')} 
              style={styles.popularCourseImage}
            />
            <View>
              <Text style={styles.popularCourseName}>Sophie Asveld</Text>
              <Text style={styles.popularCourseDescription}>Teaches Screenwriting</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.popularCourse} onPress={() => navigateTo('CourseDetail')}>
            <Image 
              source={require('../assets/snack-icon.png')} 
              style={styles.popularCourseImage}
            />
            <View>
              <Text style={styles.popularCourseName}>Maria Trofimova</Text>
              <Text style={styles.popularCourseDescription}>Building a Digital Brand</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.popularCourse} onPress={() => navigateTo('CourseDetail')}>
            <Image 
              source={require('../assets/snack-icon.png')} 
              style={styles.popularCourseImage}
            />
            <View>
              <Text style={styles.popularCourseName}>Lucy Miller</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigateTo('Home')}>
          <Icon name="home" size={30} color="#fff" style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo('Search')}>
          <Icon name="search" size={30} color="#fff" style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo('Downloads')}>
          <Icon name="download" size={30} color="#fff" style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo('MyList')}>
          <Icon name="list" size={30} color="#fff" style={styles.navIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e2630',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  activeTab: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    borderBottomWidth: 3,
    borderBottomColor: '#f4c144',
  },
  inactiveTab: {
    color: '#73787c',
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 40,
    height: 40,
  },
  imageRound: {
    borderRadius: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 20,
    marginVertical: 10,
  },
  courseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  course: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  courseImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  courseName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  courseDescription: {
    color: '#b0b3b8',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
  },
  popularCourseContainer: {
    paddingHorizontal: 20,
  },
  popularCourse: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  popularCourseImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  popularCourseName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  popularCourseDescription: {
    color: '#b0b3b8',
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#1e2630',
    padding: 20,
  },
  navIcon: {
    flex: 1,
    textAlign: 'center',
  },
});

export default HomeScreen;