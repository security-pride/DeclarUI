import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SpeakingCoursePage = () => {
const navigation = useNavigation();
const [activeTab, setActiveTab] = useState('All');
const handleTabPress = (tab) => {
setActiveTab(tab);
};
const handleCoursePress = () => {
navigation.navigate('Conversation');
};
const handleNavPress = (screen) => {
navigation.navigate(screen);
};
return (
<SafeAreaView style={styles.container}>
<View style={styles.header}>
<Text style={styles.time}>9:41</Text>
<View style={styles.statusIcons}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</View>
</View>
  <ScrollView style={styles.content}>
    <Text style={styles.title}>Speaking Course</Text>
    <Text style={styles.subtitle}>Improve your speak skill with many courses</Text>

    <View style={styles.studyingCourseSection}>
      <Text style={styles.sectionTitle}>Studying Course</Text>
      <View style={styles.featuredCourse}>
        <Image source={require('../assets/snack-icon.png')} style={styles.featuredImage} />
        <View style={styles.featuredCourseInfo}>
          <View style={styles.levelBadge}>
            <Text style={styles.levelText}>Intermediate</Text>
          </View>
          <Text style={styles.featuredCourseTitle}>English REAL TALK</Text>
          <Text style={styles.featuredCourseDescription}>Is speak English as easy but rigid as a textbook? No no! You're wrong! ...</Text>
          <TouchableOpacity style={styles.arrowButton} onPress={handleCoursePress}>
            <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>

    <Text style={styles.sectionTitle}>Courses</Text>
    <View style={styles.tabsContainer}>
      {['All', 'Beginner', 'Intermediate', 'Advanced'].map((tab) => (
        <TouchableOpacity
          key={tab}
          style={[styles.tab, activeTab === tab && styles.activeTab]}
          onPress={() => handleTabPress(tab)}
        >
          <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
        </TouchableOpacity>
      ))}
    </View>

    <View style={styles.coursesList}>
      <TouchableOpacity style={styles.courseItem} onPress={handleCoursePress}>
        <Image source={require('../assets/snack-icon.png')} style={styles.courseImage} />
        <View style={styles.courseInfo}>
          <Text style={styles.courseTitle}>Basic communication English</Text>
          <View style={styles.courseDetails}>
            <View style={styles.levelBadge}>
              <Text style={styles.levelText}>Primary</Text>
            </View>
            <Text style={styles.lessonCount}>12 Lessons</Text>
          </View>
          <TouchableOpacity style={styles.arrowButton}>
            <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.courseItem} onPress={handleCoursePress}>
        <Image source={require('../assets/snack-icon.png')} style={styles.courseImage} />
        <View style={styles.courseInfo}>
          <Text style={styles.courseTitle}>Essential Structures</Text>
          <View style={styles.courseDetails}>
            <View style={styles.levelBadge}>
              <Text style={styles.levelText}>Primary</Text>
            </View>
            <Text style={styles.lessonCount}>6 Lessons</Text>
          </View>
          <TouchableOpacity style={styles.arrowButton}>
            <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  </ScrollView>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem} onPress={() => handleNavPress('Home')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => handleNavPress('Search')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Search</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => handleNavPress('Speak')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={[styles.navText, styles.activeNavText]}>Speak</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => handleNavPress('Vocabulary')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Vocabulary</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => handleNavPress('Profile')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Profile</Text>
    </TouchableOpacity>
  </View>
</SafeAreaView>
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
paddingTop: 10,
},
time: {
fontSize: 16,
fontWeight: 'bold',
},
statusIcons: {
flexDirection: 'row',
},
icon: {
width: 20,
height: 20,
marginLeft: 5,
},
content: {
flex: 1,
paddingHorizontal: 20,
},
title: {
fontSize: 24,
fontWeight: 'bold',
marginTop: 20,
},
subtitle: {
fontSize: 14,
color: '#888',
marginTop: 5,
},
sectionTitle: {
fontSize: 18,
fontWeight: 'bold',
marginTop: 20,
marginBottom: 10,
},
studyingCourseSection: {
marginTop: 20,
},
featuredCourse: {
backgroundColor: '#F0F0F0',
borderRadius: 10,
overflow: 'hidden',
},
featuredImage: {
width: '100%',
height: 150,
},
featuredCourseInfo: {
padding: 15,
},
levelBadge: {
backgroundColor: '#4CAF50',
paddingHorizontal: 10,
paddingVertical: 5,
borderRadius: 15,
alignSelf: 'flex-start',
},
levelText: {
color: '#FFFFFF',
fontSize: 12,
},
featuredCourseTitle: {
fontSize: 18,
fontWeight: 'bold',
marginTop: 10,
},
featuredCourseDescription: {
fontSize: 14,
color: '#666',
marginTop: 5,
},
arrowButton: {
position: 'absolute',
right: 15,
bottom: 15,
backgroundColor: '#FFFFFF',
borderRadius: 15,
padding: 5,
},
arrowIcon: {
width: 20,
height: 20,
},
tabsContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
marginBottom: 20,
},
tab: {
paddingVertical: 10,
paddingHorizontal: 15,
borderRadius: 20,
backgroundColor: '#F0F0F0',
},
activeTab: {
backgroundColor: '#007AFF',
},
tabText: {
color: '#333',
},
activeTabText: {
color: '#FFFFFF',
},
coursesList: {
marginBottom: 20,
},
courseItem: {
flexDirection: 'row',
backgroundColor: '#F0F0F0',
borderRadius: 10,
marginBottom: 15,
overflow: 'hidden',
},
courseImage: {
width: 100,
height: 100,
},
courseInfo: {
flex: 1,
padding: 15,
},
courseTitle: {
fontSize: 16,
fontWeight: 'bold',
},
courseDetails: {
flexDirection: 'row',
alignItems: 'center',
marginTop: 5,
},
lessonCount: {
fontSize: 12,
color: '#666',
marginLeft: 10,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
borderTopWidth: 1,
borderTopColor: '#E0E0E0',
paddingVertical: 10,
},
navItem: {
alignItems: 'center',
},
navIcon: {
width: 24,
height: 24,
marginBottom: 5,
},
navText: {
fontSize: 12,
color: '#888',
},
activeNavText: {
color: '#007AFF',
},
});
export default SpeakingCoursePage;