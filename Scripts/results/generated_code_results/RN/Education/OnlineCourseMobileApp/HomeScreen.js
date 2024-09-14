import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const HomePage = () => {
const navigation = useNavigation();
const renderCourseCard = (course) => (
<TouchableOpacity
style={styles.courseCard}
onPress={() => navigation.navigate('CourseDetail', { course })}
>
<View style={styles.courseIconContainer}>
<Image
source={require('../assets/snack-icon.png')}
style={styles.courseIcon}
/>
</View>
<Text style={styles.courseType}>{course.type}</Text>
<Text style={styles.courseTitle}>{course.title}</Text>
<Text style={styles.instructorName}>{course.instructor}</Text>
<View style={styles.progressContainer}>
<Text style={styles.sessionText}>Sessions {course.sessions}</Text>
<View style={styles.progressBar}>
<View style={[styles.progress, { width: ${course.progress}% }]} />
</View>
</View>
</TouchableOpacity>
);
const renderMentorCard = (mentor) => (
<View style={styles.mentorCard}>
<Image
source={require('../assets/snack-icon.png')}
style={styles.mentorAvatar}
/>
<Text style={styles.mentorName}>{mentor.name}</Text>
<View style={styles.ratingContainer}>
<Image
source={require('../assets/snack-icon.png')}
style={styles.starIcon}
/>
<Text style={styles.ratingText}>
{mentor.rating} ({mentor.reviews_count} Reviews)
</Text>
</View>
</View>
);
return (
<SafeAreaView style={styles.container}>
<ScrollView>
<View style={styles.header}>
<View style={styles.userInfo}>
<Image
source={require('../assets/snack-icon.png')}
style={styles.avatar}
/>
<View>
<Text style={styles.welcomeText}>Welcome Back</Text>
<Text style={styles.userName}>Nicolas Doflamingo!🤘👆</Text>
</View>
</View>
<TouchableOpacity>
<Image
source={require('../assets/snack-icon.png')}
style={styles.notificationIcon}
/>
</TouchableOpacity>
</View>
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Best courses that suits to you</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Discover')}>
        <Image
          source={require('../assets/snack-icon.png')}
          style={styles.arrowIcon}
        />
      </TouchableOpacity>
    </View>

    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>My Courses</Text>
        <TouchableOpacity onPress={() => navigation.navigate('MyCourses')}>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {renderCourseCard({
          type: 'GRAPHICS DESIGN',
          title: 'How to make modern poster for Beginner',
          instructor: 'Nicola Tesla',
          sessions: '7 / 15',
          progress: 82,
        })}
        {renderCourseCard({
          type: 'UI/UX DESIGN',
          title: 'How to make D system in easy',
          instructor: 'Dwi Gunawan',
          sessions: '7 / 15',
          progress: 82,
        })}
      </ScrollView>
    </View>

    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Mentor of The Weeks</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {renderMentorCard({
          name: 'Nicola Tesla',
          rating: 4.9,
          reviews_count: 1435,
        })}
        {renderMentorCard({
          name: 'Galileo Galilei',
          rating: 4.9,
          reviews_count: 1435,
        })}
      </ScrollView>
    </View>
  </ScrollView>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem}>
      <Image
        source={require('../assets/snack-icon.png')}
        style={[styles.navIcon, styles.activeNavIcon]}
      />
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.navItem}
      onPress={() => navigation.navigate('Discover')}
    >
      <Image
        source={require('../assets/snack-icon.png')}
        style={styles.navIcon}
      />
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.navItem}
      onPress={() => navigation.navigate('MyCourses')}
    >
      <Image
        source={require('../assets/snack-icon.png')}
        style={styles.navIcon}
      />
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image
        source={require('../assets/snack-icon.png')}
        style={styles.navIcon}
      />
    </TouchableOpacity>
  </View>
</SafeAreaView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#1E1E1E',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 20,
},
userInfo: {
flexDirection: 'row',
alignItems: 'center',
},
avatar: {
width: 50,
height: 50,
borderRadius: 25,
marginRight: 10,
},
welcomeText: {
color: '#FFFFFF',
fontSize: 14,
},
userName: {
color: '#FFFFFF',
fontSize: 18,
fontWeight: 'bold',
},
notificationIcon: {
width: 24,
height: 24,
},
section: {
marginTop: 20,
paddingHorizontal: 20,
},
sectionHeader: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: 10,
},
sectionTitle: {
color: '#FFFFFF',
fontSize: 18,
fontWeight: 'bold',
},
seeAllText: {
color: '#007AFF',
fontSize: 14,
},
arrowIcon: {
width: 24,
height: 24,
},
courseCard: {
width: 200,
backgroundColor: '#2C2C2C',
borderRadius: 10,
padding: 15,
marginRight: 15,
},
courseIconContainer: {
width: 40,
height: 40,
borderRadius: 20,
backgroundColor: '#007AFF',
justifyContent: 'center',
alignItems: 'center',
marginBottom: 10,
},
courseIcon: {
width: 24,
height: 24,
},
courseType: {
color: '#888888',
fontSize: 12,
marginBottom: 5,
},
courseTitle: {
color: '#FFFFFF',
fontSize: 16,
fontWeight: 'bold',
marginBottom: 5,
},
instructorName: {
color: '#888888',
fontSize: 12,
marginBottom: 10,
},
progressContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
},
sessionText: {
color: '#FFFFFF',
fontSize: 12,
},
progressBar: {
width: 60,
height: 4,
backgroundColor: '#444444',
borderRadius: 2,
},
progress: {
height: 4,
backgroundColor: '#007AFF',
borderRadius: 2,
},
mentorCard: {
width: 120,
alignItems: 'center',
marginRight: 15,
},
mentorAvatar: {
width: 60,
height: 60,
borderRadius: 30,
marginBottom: 10,
},
mentorName: {
color: '#FFFFFF',
fontSize: 14,
fontWeight: 'bold',
marginBottom: 5,
},
ratingContainer: {
flexDirection: 'row',
alignItems: 'center',
},
starIcon: {
width: 12,
height: 12,
marginRight: 5,
},
ratingText: {
color: '#888888',
fontSize: 12,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
height: 60,
backgroundColor: '#2C2C2C',
},
navItem: {
alignItems: 'center',
},
navIcon: {
width: 24,
height: 24,
},
activeNavIcon: {
tintColor: '#007AFF',
},
});
export default HomePage;