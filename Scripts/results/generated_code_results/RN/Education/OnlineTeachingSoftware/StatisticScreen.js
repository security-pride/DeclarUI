import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Statistics = () => {
const navigation = useNavigation();
const [timeFrame, setTimeFrame] = useState('Weekly');
const learningProgressData = [4, 8, 3, 7, 3, 5, 7];
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const courseProgressData = [
{
category: 'Programing',
title: 'Bootstrapping Fundamental Principles',
rating: 4.7,
reviews: 1242,
progress: 74,
image: require('../assets/snack-icon.png'),
},
{
category: 'Interface Design',
title: 'User interface for beginners',
image: require('../assets/snack-icon.png'),
},
];
return (
<View style={styles.container}>
<StatusBar barStyle="dark-content" />
<View style={styles.header}>
<Text style={styles.headerTitle}>Statistic</Text>
<TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
<Image source={require('../assets/snack-icon.png')} style={styles.notificationIcon} />
</TouchableOpacity>
</View>
  <ScrollView style={styles.content}>
    <View style={styles.learningProgressContainer}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Learning Progress</Text>
        <TouchableOpacity style={styles.timeFrameButton}>
          <Text style={styles.timeFrameText}>{timeFrame}</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.dropdownIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.chart}>
        {learningProgressData.map((value, index) => (
          <View key={index} style={styles.barContainer}>
            <View style={[styles.bar, { height: `${value * 10}%` }]} />
            <Text style={styles.barLabel}>{daysOfWeek[index]}</Text>
          </View>
        ))}
      </View>
    </View>

    <View style={styles.courseProgressContainer}>
      <Text style={styles.sectionTitle}>Course Progress (4)</Text>
      {courseProgressData.map((course, index) => (
        <View key={index} style={styles.courseCard}>
          <View style={styles.courseInfo}>
            <Text style={styles.courseCategory}>{course.category}</Text>
            <Text style={styles.courseTitle}>{course.title}</Text>
            {course.rating && (
              <View style={styles.ratingContainer}>
                <Image source={require('../assets/snack-icon.png')} style={styles.starIcon} />
                <Text style={styles.ratingText}>{course.rating} ({course.reviews} Reviews)</Text>
              </View>
            )}
            {course.progress && (
              <View style={styles.progressContainer}>
                <View style={[styles.progressBar, { width: `${course.progress}%` }]} />
                <Text style={styles.progressText}>{course.progress}%</Text>
              </View>
            )}
          </View>
          <Image source={course.image} style={styles.courseImage} />
        </View>
      ))}
    </View>
  </ScrollView>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Discover')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={[styles.navText, styles.activeNavText]}>Statistic</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Favorites')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Favorites</Text>
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
paddingTop: 50,
paddingBottom: 20,
},
headerTitle: {
fontSize: 24,
fontWeight: 'bold',
},
notificationIcon: {
width: 24,
height: 24,
},
content: {
flex: 1,
},
learningProgressContainer: {
backgroundColor: '#F8F8F8',
margin: 20,
borderRadius: 15,
padding: 20,
},
sectionHeader: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: 20,
},
sectionTitle: {
fontSize: 18,
fontWeight: 'bold',
},
timeFrameButton: {
flexDirection: 'row',
alignItems: 'center',
},
timeFrameText: {
marginRight: 5,
},
dropdownIcon: {
width: 12,
height: 12,
},
chart: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'flex-end',
height: 200,
},
barContainer: {
alignItems: 'center',
},
bar: {
width: 30,
backgroundColor: '#6B4EFF',
borderRadius: 15,
},
barLabel: {
marginTop: 5,
},
courseProgressContainer: {
margin: 20,
},
courseCard: {
flexDirection: 'row',
backgroundColor: '#F8F8F8',
borderRadius: 15,
marginTop: 15,
padding: 15,
},
courseInfo: {
flex: 1,
},
courseCategory: {
color: '#6B4EFF',
marginBottom: 5,
},
courseTitle: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 10,
},
ratingContainer: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 10,
},
starIcon: {
width: 16,
height: 16,
marginRight: 5,
},
ratingText: {
fontSize: 14,
},
progressContainer: {
flexDirection: 'row',
alignItems: 'center',
},
progressBar: {
height: 5,
backgroundColor: '#6B4EFF',
borderRadius: 2.5,
marginRight: 10,
},
progressText: {
fontSize: 14,
fontWeight: 'bold',
},
courseImage: {
width: 80,
height: 80,
borderRadius: 10,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
paddingVertical: 10,
borderTopWidth: 1,
borderTopColor: '#EEEEEE',
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
color: '#666666',
},
activeNavText: {
color: '#6B4EFF',
},
});
export default Statistics;