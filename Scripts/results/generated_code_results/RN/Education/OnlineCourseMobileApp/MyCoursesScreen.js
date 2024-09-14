import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const MyCoursesPage = () => {
const navigation = useNavigation();
const [activeTab, setActiveTab] = useState('Ongoing');
const courseData = [
{
id: '1',
title: 'Graphics Designer for Beginner',
instructor: 'Nicola Tesla',
rating: 4.9,
reviews: 1435,
sessions: '7 / 15',
progress: 82,
icon: require('../assets/snack-icon.png'),
color: '#4A86E8',
},
{
id: '2',
title: 'Graphics Designer for Beginner',
instructor: 'Nicola Tesla',
rating: 4.9,
reviews: 1435,
sessions: '7 / 15',
progress: 82,
icon: require('../assets/snack-icon.png'),
color: '#9C27B0',
},
{
id: '3',
title: 'Graphics Designer for Beginner',
instructor: 'Nicola Tesla',
rating: 4.9,
reviews: 1435,
sessions: '7 / 15',
progress: 82,
icon: require('../assets/snack-icon.png'),
color: '#E91E63',
},
];
const renderCourseItem = ({ item }) => (
<TouchableOpacity
style={[styles.courseCard, { backgroundColor: item.color }]}
onPress={() => navigation.navigate('CourseDetail', { course: item })}
>
<View style={styles.courseHeader}>
<Image source={item.icon} style={styles.courseIcon} />
<TouchableOpacity style={styles.moreButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.moreIcon} />
</TouchableOpacity>
</View>
<Text style={styles.courseTitle}>{item.title}</Text>
<View style={styles.instructorContainer}>
<Image source={require('../assets/snack-icon.png')} style={styles.instructorAvatar} />
<Text style={styles.instructorName}>{item.instructor}</Text>
</View>
<View style={styles.ratingContainer}>
<Image source={require('../assets/snack-icon.png')} style={styles.starIcon} />
<Text style={styles.ratingText}>{item.rating} ({item.reviews} Reviews)</Text>
</View>
<View style={styles.progressContainer}>
<Image source={require('../assets/snack-icon.png')} style={styles.sessionIcon} />
<Text style={styles.sessionText}>Sessions {item.sessions}</Text>
<View style={styles.progressBar}>
<View style={[styles.progress, { width: ${item.progress}% }]} />
</View>
<Text style={styles.progressText}>{item.progress}%</Text>
</View>
</TouchableOpacity>
);
return (
<SafeAreaView style={styles.container}>
<StatusBar barStyle="dark-content" />
<View style={styles.header}>
<Text style={styles.headerTitle}>My Courses</Text>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.notificationIcon} />
</TouchableOpacity>
</View>
<View style={styles.tabContainer}>
<TouchableOpacity
style={[styles.tab, activeTab === 'Ongoing' && styles.activeTab]}
onPress={() => setActiveTab('Ongoing')}
>
<Text style={[styles.tabText, activeTab === 'Ongoing' && styles.activeTabText]}>Ongoing</Text>
<View style={styles.tabBadge}>
<Text style={styles.tabBadgeText}>8</Text>
</View>
</TouchableOpacity>
<TouchableOpacity
style={[styles.tab, activeTab === 'Completed' && styles.activeTab]}
onPress={() => setActiveTab('Completed')}
>
<Text style={[styles.tabText, activeTab === 'Completed' && styles.activeTabText]}>Completed</Text>
<View style={[styles.tabBadge, styles.completedBadge]}>
<Text style={styles.tabBadgeText}>12</Text>
</View>
</TouchableOpacity>
</View>
<FlatList
data={courseData}
renderItem={renderCourseItem}
keyExtractor={item => item.id}
showsVerticalScrollIndicator={false}
/>
<View style={styles.bottomNav}>
<TouchableOpacity onPress={() => navigation.navigate('Home')}>
<Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Discover')}>
<Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={[styles.navIcon, styles.activeNavIcon]} />
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
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
paddingTop: 20,
paddingBottom: 10,
},
headerTitle: {
fontSize: 24,
fontWeight: 'bold',
},
notificationIcon: {
width: 24,
height: 24,
},
tabContainer: {
flexDirection: 'row',
paddingHorizontal: 20,
marginBottom: 20,
},
tab: {
flex: 1,
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
paddingVertical: 10,
borderBottomWidth: 2,
borderBottomColor: 'transparent',
},
activeTab: {
borderBottomColor: '#4A86E8',
},
tabText: {
fontSize: 16,
color: '#888888',
},
activeTabText: {
color: '#4A86E8',
fontWeight: 'bold',
},
tabBadge: {
backgroundColor: '#4CAF50',
borderRadius: 10,
paddingHorizontal: 6,
paddingVertical: 2,
marginLeft: 5,
},
completedBadge: {
backgroundColor: '#9E9E9E',
},
tabBadgeText: {
color: '#FFFFFF',
fontSize: 12,
fontWeight: 'bold',
},
courseCard: {
marginHorizontal: 20,
marginBottom: 20,
borderRadius: 10,
padding: 20,
},
courseHeader: {
flexDirection: 'row',
justifyContent: 'space-between',
marginBottom: 10,
},
courseIcon: {
width: 30,
height: 30,
},
moreButton: {
padding: 5,
},
moreIcon: {
width: 20,
height: 20,
},
courseTitle: {
fontSize: 18,
fontWeight: 'bold',
color: '#FFFFFF',
marginBottom: 10,
},
instructorContainer: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 10,
},
instructorAvatar: {
width: 20,
height: 20,
borderRadius: 10,
marginRight: 5,
},
instructorName: {
fontSize: 14,
color: '#FFFFFF',
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
color: '#FFFFFF',
},
progressContainer: {
flexDirection: 'row',
alignItems: 'center',
},
sessionIcon: {
width: 16,
height: 16,
marginRight: 5,
},
sessionText: {
fontSize: 14,
color: '#FFFFFF',
marginRight: 10,
},
progressBar: {
flex: 1,
height: 4,
backgroundColor: 'rgba(255, 255, 255, 0.3)',
borderRadius: 2,
},
progress: {
height: 4,
backgroundColor: '#FFFFFF',
borderRadius: 2,
},
progressText: {
fontSize: 14,
color: '#FFFFFF',
marginLeft: 10,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
height: 60,
borderTopWidth: 1,
borderTopColor: '#EEEEEE',
},
navIcon: {
width: 24,
height: 24,
},
activeNavIcon: {
tintColor: '#4A86E8',
},
});
export default MyCoursesPage;