import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Favorites = () => {
const navigation = useNavigation();
const [selectedCategory, setSelectedCategory] = useState('All Course');
const categories = ['All Course', 'UX Design', 'UI Design', '3D Anima'];
const favoriteCourses = [
{
date: 'May 12, 2023',
courses: [
{
title: 'Expert Wireframing for Mobile Design',
category: 'Graphic Design',
instructor: 'Jerremy Mamika',
price: '$48',
image: require('../assets/snack-icon.png'),
},
{
title: 'Bootstrapping Principles',
category: 'Development',
instructor: 'Alexander Be',
image: require('../assets/snack-icon.png'),
},
],
},
{
date: 'May 08, 2023',
courses: [
{
title: 'Expert Wireframing for Mobile Design',
category: 'Graphic Design',
instructor: 'Jerremy Mamika',
price: '$48',
image: require('../assets/snack-icon.png'),
},
],
},
];
return (
<View style={styles.container}>
<StatusBar barStyle="dark-content" />
<View style={styles.header}>
<Text style={styles.headerTitle}>Favorite</Text>
<TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
<Image source={require('../assets/snack-icon.png')} style={styles.notificationIcon} />
</TouchableOpacity>
</View>
  <View style={styles.searchContainer}>
    <TextInput
      style={styles.searchInput}
      placeholder="Search..."
      placeholderTextColor="#A0A0A0"
    />
    <TouchableOpacity style={styles.filterButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.filterIcon} />
    </TouchableOpacity>
  </View>

  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
    {categories.map((category, index) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.categoryButton,
          selectedCategory === category && styles.selectedCategoryButton,
        ]}
        onPress={() => setSelectedCategory(category)}
      >
        <Text
          style={[
            styles.categoryButtonText,
            selectedCategory === category && styles.selectedCategoryButtonText,
          ]}
        >
          {category}
        </Text>
      </TouchableOpacity>
    ))}
  </ScrollView>

  <ScrollView style={styles.coursesList}>
    {favoriteCourses.map((group, groupIndex) => (
      <View key={groupIndex}>
        <View style={styles.dateHeader}>
          <Text style={styles.dateText}>{group.date}</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>
        {group.courses.map((course, courseIndex) => (
          <TouchableOpacity
            key={courseIndex}
            style={styles.courseCard}
            onPress={() => navigation.navigate('CourseDetail')}
          >
            <Image source={course.image} style={styles.courseImage} />
            <View style={styles.courseInfo}>
              <Text style={styles.courseCategory}>{course.category}</Text>
              <Text style={styles.courseTitle}>{course.title}</Text>
              <Text style={styles.courseInstructor}>{course.instructor}</Text>
              {course.price && <Text style={styles.coursePrice}>{course.price}</Text>}
            </View>
            <TouchableOpacity style={styles.favoriteButton}>
              <Image source={require('../assets/snack-icon.png')} style={styles.heartIcon} />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
    ))}
  </ScrollView>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Discover')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Statistics')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Statistic</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={[styles.navText, styles.activeNavText]}>Favorites</Text>
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
searchContainer: {
flexDirection: 'row',
alignItems: 'center',
paddingHorizontal: 20,
marginBottom: 20,
},
searchInput: {
flex: 1,
height: 40,
backgroundColor: '#F5F5F5',
borderRadius: 20,
paddingHorizontal: 15,
marginRight: 10,
},
filterButton: {
width: 40,
height: 40,
backgroundColor: '#F5F5F5',
borderRadius: 20,
justifyContent: 'center',
alignItems: 'center',
},
filterIcon: {
width: 20,
height: 20,
},
categoriesContainer: {
paddingHorizontal: 20,
marginBottom: 20,
},
categoryButton: {
paddingHorizontal: 20,
paddingVertical: 10,
borderRadius: 20,
marginRight: 10,
backgroundColor: '#F5F5F5',
},
selectedCategoryButton: {
backgroundColor: '#6B4EFF',
},
categoryButtonText: {
color: '#333333',
},
selectedCategoryButtonText: {
color: '#FFFFFF',
},
coursesList: {
flex: 1,
paddingHorizontal: 20,
},
dateHeader: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: 10,
},
dateText: {
fontSize: 16,
fontWeight: 'bold',
},
seeAllText: {
color: '#6B4EFF',
},
courseCard: {
flexDirection: 'row',
backgroundColor: '#FFFFFF',
borderRadius: 15,
marginBottom: 15,
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.1,
shadowRadius: 4,
elevation: 3,
},
courseImage: {
width: 100,
height: 100,
borderRadius: 15,
},
courseInfo: {
flex: 1,
padding: 10,
},
courseCategory: {
color: '#6B4EFF',
fontSize: 12,
marginBottom: 5,
},
courseTitle: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 5,
},
courseInstructor: {
fontSize: 12,
color: '#666666',
marginBottom: 5,
},
coursePrice: {
fontSize: 14,
fontWeight: 'bold',
color: '#6B4EFF',
},
favoriteButton: {
position: 'absolute',
top: 10,
right: 10,
backgroundColor: '#FFFFFF',
borderRadius: 15,
padding: 5,
},
heartIcon: {
width: 20,
height: 20,
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
export default Favorites;