import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
const navigation = useNavigation();
const renderCourseButton = (name, color, icon) => (
<TouchableOpacity style={[styles.courseButton, { backgroundColor: color }]}>
<Image source={require('../assets/snack-icon.png')} style={styles.courseIcon} />
<Text style={styles.courseText}>{name}</Text>
</TouchableOpacity>
);
return (
<View style={styles.container}>
<View style={styles.header}>
<View>
<Text style={styles.greeting}>Hello Liana</Text>
<Text style={styles.tasksToday}>You've got 4 tasks today</Text>
</View>
<Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
</View>
  <ScrollView>
    <View style={styles.coursesSection}>
      <Text style={styles.sectionTitle}>Courses</Text>
      <Text style={styles.sectionSubtitle}>Your running subjects</Text>
      <View style={styles.courseButtonsContainer}>
        {renderCourseButton('Mathematics', '#FF9999', 'math-icon')}
        {renderCourseButton('Chemistry', '#FFD699', 'chemistry-icon')}
      </View>
    </View>

    <View style={styles.scheduleSection}>
      <Text style={styles.sectionTitle}>Your schedule</Text>
      <Text style={styles.sectionSubtitle}>Upcoming classes and tasks</Text>
      <View style={styles.scheduleCard}>
        <View style={styles.scheduleHeader}>
          <Text style={styles.scheduleSubject}>Physics</Text>
          <TouchableOpacity>
            <Image source={require('../assets/snack-icon.png')} style={styles.moreIcon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.scheduleChapter}>Chapter 3: Force</Text>
        <View style={styles.scheduleDetails}>
          <View style={styles.scheduleItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.scheduleIcon} />
            <Text style={styles.scheduleText}>09:30</Text>
          </View>
          <View style={styles.scheduleItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.scheduleIcon} />
            <Text style={styles.scheduleText}>Alex Jesus</Text>
          </View>
          <View style={styles.scheduleItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.scheduleIcon} />
            <Text style={styles.scheduleText}>Google Meet</Text>
          </View>
        </View>
      </View>
    </View>
  </ScrollView>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={[styles.navText, styles.activeNavText]}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Calendar')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Tasks</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Classroom')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Classroom</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Discussion')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Discuss</Text>
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
padding: 16,
},
greeting: {
fontSize: 16,
color: '#888888',
},
tasksToday: {
fontSize: 20,
fontWeight: 'bold',
},
avatar: {
width: 40,
height: 40,
borderRadius: 20,
},
coursesSection: {
padding: 16,
},
scheduleSection: {
padding: 16,
},
sectionTitle: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 4,
},
sectionSubtitle: {
fontSize: 14,
color: '#888888',
marginBottom: 16,
},
courseButtonsContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
},
courseButton: {
width: '48%',
aspectRatio: 1,
borderRadius: 12,
justifyContent: 'center',
alignItems: 'center',
},
courseIcon: {
width: 40,
height: 40,
marginBottom: 8,
},
courseText: {
fontSize: 16,
fontWeight: 'bold',
color: '#FFFFFF',
},
scheduleCard: {
backgroundColor: '#E6E6FA',
borderRadius: 12,
padding: 16,
},
scheduleHeader: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: 8,
},
scheduleSubject: {
fontSize: 18,
fontWeight: 'bold',
},
moreIcon: {
width: 24,
height: 24,
},
scheduleChapter: {
fontSize: 14,
color: '#555555',
marginBottom: 12,
},
scheduleDetails: {
flexDirection: 'row',
justifyContent: 'space-between',
},
scheduleItem: {
flexDirection: 'row',
alignItems: 'center',
},
scheduleIcon: {
width: 16,
height: 16,
marginRight: 4,
},
scheduleText: {
fontSize: 12,
color: '#555555',
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#EEEEEE',
paddingVertical: 8,
},
navItem: {
alignItems: 'center',
},
navIcon: {
width: 24,
height: 24,
marginBottom: 4,
},
navText: {
fontSize: 12,
color: '#888888',
},
activeNavText: {
color: '#007AFF',
fontWeight: 'bold',
},
});
export default HomeScreen;