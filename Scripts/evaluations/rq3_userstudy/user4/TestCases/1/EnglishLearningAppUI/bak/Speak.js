import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
const SpeakingCoursePage = ({ navigation }) => {
const [activeTab, setActiveTab] = useState('All');
const tabs = ['All', 'Beginner', 'Intermediate', 'Advanced'];
const featuredCourse = {
title: 'English REAL TALK',
level: 'Intermediate',
description: "Is speak English as easy but rigid as a textbook? No no! You're wrong! ...",
image: require('../assets/snack-icon.png'),
};
const courses = [
{ title: 'Basic communication English', level: 'Primary', lessons: 12, image: require('../assets/snack-icon.png') },
{ title: 'Essential Structures', level: 'Primary', lessons: 6, image: require('../assets/snack-icon.png') },
];
return (
<View style={styles.container}>
<View style={styles.header}>
<Text style={styles.time}>9:41</Text>
<ImageBackground source={require('../assets/snack-icon.png')} style={styles.wifiIcon} />
</View>
  <ScrollView>
    <Text style={styles.title}>Speaking Course</Text>
    <Text style={styles.subtitle}>Improve your speak skill with many courses</Text>

    <View style={styles.studyingCourseContainer}>
      <Text style={styles.sectionTitle}>Studying Course</Text>
      <View style={styles.featuredCourse}>
        <Image source={featuredCourse.image} style={styles.featuredImage} />
        <View style={styles.featuredInfo}>
          <View style={styles.levelBadge}>
            <Text style={styles.levelText}>{featuredCourse.level}</Text>
          </View>
          <Text style={styles.featuredTitle}>{featuredCourse.title}</Text>
          <Text style={styles.featuredDescription}>{featuredCourse.description}</Text>
          <TouchableOpacity style={styles.arrowButton}>
            <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>

    <Text style={styles.sectionTitle}>Courses</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainer}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.tab, activeTab === tab && styles.activeTab]}
          onPress={() => setActiveTab(tab)}
        >
          <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>

    {courses.map((course, index) => (
      <View key={index} style={styles.courseItem}>
        <Image source={course.image} style={styles.courseImage} />
        <View style={styles.courseInfo}>
          <Text style={styles.courseTitle}>{course.title}</Text>
          <View style={styles.courseDetails}>
            <View style={styles.levelBadge}>
              <Text style={styles.levelText}>{course.level}</Text>
            </View>
            <Text style={styles.lessonCount}>{course.lessons} Lessons</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.arrowButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>
    ))}
  </ScrollView>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Search')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Search</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
      <Image source={require('../assets/snack-icon.png')} style={[styles.navIcon, styles.activeNavIcon]} />
      <Text style={[styles.navText, styles.activeNavText]}>Speak</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Vocabulary</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Profile</Text>
    </TouchableOpacity>
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#FFFFFF',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingHorizontal: 20,
paddingTop: 40,
},
time: {
fontSize: 16,
fontWeight: 'bold',
},
wifiIcon: {
width: 20,
height: 20,
},
title: {
fontSize: 24,
fontWeight: 'bold',
marginTop: 20,
marginLeft: 20,
},
subtitle: {
fontSize: 14,
color: '#888',
marginLeft: 20,
marginBottom: 20,
},
sectionTitle: {
fontSize: 18,
fontWeight: 'bold',
marginLeft: 20,
marginTop: 20,
marginBottom: 10,
},
studyingCourseContainer: {
marginHorizontal: 20,
},
featuredCourse: {
backgroundColor: '#F0F0F0',
borderRadius: 10,
overflow: 'hidden',
},
featuredImage: {
width: '100%',
height: 200,
},
featuredInfo: {
padding: 15,
},
levelBadge: {
backgroundColor: '#4CAF50',
paddingHorizontal: 10,
paddingVertical: 5,
borderRadius: 15,
alignSelf: 'flex-start',
marginBottom: 10,
},
levelText: {
color: '#FFFFFF',
fontSize: 12,
},
featuredTitle: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 5,
},
featuredDescription: {
fontSize: 14,
color: '#666',
marginBottom: 10,
},
arrowButton: {
alignSelf: 'flex-end',
},
arrowIcon: {
width: 20,
height: 20,
},
tabsContainer: {
flexDirection: 'row',
paddingLeft: 20,
marginBottom: 20,
},
tab: {
paddingHorizontal: 20,
paddingVertical: 10,
borderRadius: 20,
marginRight: 10,
backgroundColor: '#F0F0F0',
},
activeTab: {
backgroundColor: '#4A90E2',
},
tabText: {
color: '#888',
},
activeTabText: {
color: '#FFFFFF',
},
courseItem: {
flexDirection: 'row',
alignItems: 'center',
marginHorizontal: 20,
marginBottom: 20,
backgroundColor: '#F0F0F0',
borderRadius: 10,
overflow: 'hidden',
},
courseImage: {
width: 80,
height: 80,
},
courseInfo: {
flex: 1,
paddingHorizontal: 15,
},
courseTitle: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 5,
},
courseDetails: {
flexDirection: 'row',
alignItems: 'center',
},
lessonCount: {
fontSize: 12,
color: '#666',
marginLeft: 10,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#E0E0E0',
paddingVertical: 10,
},
navItem: {
alignItems: 'center',
},
activeNavItem: {
borderTopWidth: 2,
borderTopColor: '#4A90E2',
},
navIcon: {
width: 24,
height: 24,
marginBottom: 5,
},
activeNavIcon: {
tintColor: '#4A90E2',
},
navText: {
fontSize: 12,
color: '#888',
},
activeNavText: {
color: '#4A90E2',
},
});
export default SpeakingCoursePage;