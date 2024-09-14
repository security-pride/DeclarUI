import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Discover = () => {
const navigation = useNavigation();
return (
<View style={styles.container}>
<StatusBar barStyle="light-content" />
<View style={styles.header}>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
<Text style={styles.headerTitle}>Discover</Text>
<TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
</View>
  <ScrollView style={styles.content}>
    <Text style={styles.heroTitle}>Study what you want anytime anywhere</Text>

    <View style={styles.featuredCourse}>
      <View style={styles.courseInfo}>
        <Text style={styles.courseCategory}>Interface Design</Text>
        <Text style={styles.courseTitle}>User interface for beginners</Text>
        <View style={styles.ratingContainer}>
          <Image source={require('../assets/snack-icon.png')} style={styles.starIcon} />
          <Text style={styles.ratingText}>4.7 (1,242 Reviews)</Text>
        </View>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: '48%' }]} />
        </View>
      </View>
      <Image source={require('../assets/snack-icon.png')} style={styles.courseImage} />
    </View>

    <View style={styles.popularCoursesHeader}>
      <Text style={styles.sectionTitle}>Popular Course</Text>
      <TouchableOpacity>
        <Text style={styles.seeAllText}>See All</Text>
      </TouchableOpacity>
    </View>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.popularCourses}>
      <TouchableOpacity style={styles.courseCard} onPress={() => navigation.navigate('CourseDetail')}>
        <Image source={require('../assets/snack-icon.png')} style={styles.courseCardImage} />
        <TouchableOpacity style={styles.favoriteButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.heartIcon} />
        </TouchableOpacity>
        <Text style={styles.courseCardCategory}>Graphic Design</Text>
        <Text style={styles.courseCardTitle}>Expert Wireframing for Mobile Design</Text>
        <Text style={styles.courseCardInstructor}>Jerremy Mamika</Text>
        <Text style={styles.courseCardPrice}>$48</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.courseCard} onPress={() => navigation.navigate('CourseDetail')}>
        <Image source={require('../assets/snack-icon.png')} style={styles.courseCardImage} />
        <Text style={styles.courseCardCategory}>Development</Text>
        <Text style={styles.courseCardTitle}>Bootstrapping Principles</Text>
        <Text style={styles.courseCardInstructor}>Alexander Be</Text>
      </TouchableOpacity>
    </ScrollView>
  </ScrollView>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Statistics')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Statistic</Text>
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
backgroundColor: '#161420',
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
fontSize: 20,
fontWeight: 'bold',
color: '#FFFFFF',
},
icon: {
width: 24,
height: 24,
},
content: {
flex: 1,
},
heroTitle: {
fontSize: 28,
fontWeight: 'bold',
color: '#FFFFFF',
paddingHorizontal: 20,
paddingTop: 20,
paddingBottom: 30,
},
featuredCourse: {
flexDirection: 'row',
backgroundColor: '#2A2434',
borderRadius: 20,
marginHorizontal: 20,
padding: 20,
marginBottom: 30,
},
courseInfo: {
flex: 1,
},
courseCategory: {
color: '#A097AE',
fontSize: 14,
marginBottom: 5,
},
courseTitle: {
color: '#FFFFFF',
fontSize: 18,
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
color: '#FFFFFF',
fontSize: 14,
},
progressBar: {
height: 4,
backgroundColor: '#3D3649',
borderRadius: 2,
},
progressFill: {
height: '100%',
backgroundColor: '#6B4EFF',
borderRadius: 2,
},
courseImage: {
width: 100,
height: 100,
borderRadius: 10,
marginLeft: 20,
},
popularCoursesHeader: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingHorizontal: 20,
marginBottom: 20,
},
sectionTitle: {
fontSize: 20,
fontWeight: 'bold',
color: '#FFFFFF',
},
seeAllText: {
color: '#6B4EFF',
fontSize: 14,
},
popularCourses: {
paddingLeft: 20,
},
courseCard: {
width: 250,
marginRight: 20,
backgroundColor: '#2A2434',
borderRadius: 20,
padding: 15,
},
courseCardImage: {
width: '100%',
height: 150,
borderRadius: 15,
marginBottom: 10,
},
favoriteButton: {
position: 'absolute',
top: 25,
right: 25,
backgroundColor: '#FFFFFF',
borderRadius: 15,
padding: 5,
},
heartIcon: {
width: 20,
height: 20,
},
courseCardCategory: {
color: '#A097AE',
fontSize: 14,
marginBottom: 5,
},
courseCardTitle: {
color: '#FFFFFF',
fontSize: 16,
fontWeight: 'bold',
marginBottom: 5,
},
courseCardInstructor: {
color: '#A097AE',
fontSize: 14,
marginBottom: 5,
},
courseCardPrice: {
color: '#6B4EFF',
fontSize: 16,
fontWeight: 'bold',
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
backgroundColor: '#2A2434',
paddingVertical: 15,
borderTopLeftRadius: 20,
borderTopRightRadius: 20,
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
color: '#A097AE',
fontSize: 12,
},
});
export default Discover;