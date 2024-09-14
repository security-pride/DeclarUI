import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const FavoritesScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Favorite</Text>
        <TouchableOpacity style={styles.notificationButton} onPress={() => navigation.navigate('Notifications')}>
          <Icon name="notifications-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.searchBar}>
        <TextInput placeholder="Search..." style={styles.searchInput} />
        <Button title="Filter" onPress={() => {}} style={styles.filterButton} />
      </View>
      <View style={styles.categoryTabs}>
        {['All Course', 'UX Design', 'UI Design', '3D Anima'].map((category) => (
          <TouchableOpacity key={category} style={styles.categoryButton}>
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView>
        {[{ date: 'May 12, 2023', courses: [
          { title: 'Expert Wireframing for Mobile Design', category: 'Graphic Design', instructor: 'Jerremy Mamika', price: '$48' },
          { title: 'Bootstrapping Principles', category: 'Development', instructor: 'Alexander Be' }
        ]}, { date: 'May 08, 2023', courses: [
          { title: 'Expert Wireframing for Mobile Design', category: 'Graphic Design', instructor: 'Jerremy Mamika', price: '$48' }
        ]}].map((session, index) => (
          <View key={index} style={styles.sessionContainer}>
            <View style={styles.sessionHeader}>
              <Text style={styles.sessionDate}>{session.date}</Text>
              <TouchableOpacity>
                <Text style={styles.seeAllText}>See All</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.courseList}>
              {session.courses.map((course, idx) => (
                <TouchableOpacity key={idx} style={styles.courseCard} onPress={() => navigation.navigate('CourseDetail')}>
                  <Image source={require('../assets/snack-icon.png')} style={styles.courseImage} />
                  <TouchableOpacity style={styles.favoriteIcon}>
                    <Icon name="heart-outline" size={20} color="#fff" />
                  </TouchableOpacity>
                  <View style={styles.courseInfo}>
                    <Text style={styles.courseCategory}>{course.category}</Text>
                    <Text style={styles.courseTitle}>{course.title}</Text>
                    <Text style={styles.instructorText}>{course.instructor}</Text>
                    {course.price && <Text style={styles.priceText}>{course.price}</Text>}
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.bottomNav}>
        {['Home', 'Statistic', 'Favorites', 'Profile'].map((navItem) => (
          <TouchableOpacity key={navItem} style={styles.navItem}>
            <Text style={styles.navText}>{navItem}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  notificationButton: {
    padding: 8,
  },
  searchBar: {
    flexDirection: 'row',
    margin: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  searchInput: {
    flex: 1,
    padding: 8,
    fontSize: 16,
  },
  filterButton: {
    marginLeft: 8,
  },
  categoryTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  categoryButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 25,
    backgroundColor: '#f5f5f5',
  },
  categoryText: {
    fontSize: 14,
  },
  sessionContainer: {
    marginBottom: 16,
  },
  sessionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  sessionDate: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  seeAllText: {
    color: '#007BFF',
  },
  courseList: {
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  courseCard: {
    flex: 1,
    marginHorizontal: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3,
  },
  courseImage: {
    height: 120,
    width: '100%',
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#FF5252',
    borderRadius: 17,
    padding: 5,
  },
  courseInfo: {
    padding: 8,
  },
  courseCategory: {
    color: '#6C757D',
    fontSize: 12,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  instructorText: {
    fontSize: 14,
    color: '#6C757D',
  },
  priceText: {
    color: '#28A745',
    fontWeight: 'bold',
    marginTop: 4,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderTopWidth: 0.5,
    borderTopColor: '#dcdcdc',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#6C757D',
  },
});

export default FavoritesScreen;