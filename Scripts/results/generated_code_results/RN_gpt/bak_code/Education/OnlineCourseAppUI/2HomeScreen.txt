import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ImageBackground, TouchableOpacity, FlatList } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const courses = [
    {
      id: '1',
      title: '3D Design Basic',
      lessons: 24,
      rating: 4.9,
      price: '$24.99'
    },
    {
      id: '2',
      title: 'Characters Animation',
      lessons: 22,
      rating: 4.8,
      price: '$22.69'
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground source={require('../assets/snack-icon.png')} style={styles.profileIcon}>
          <Text style={styles.greeting}>Hello, Daniel!</Text>
        </ImageBackground>
        <View style={styles.topIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <TextInput placeholder="Search" style={styles.searchBar} />
      <TouchableOpacity style={styles.filterButton}>
        <Image source={require('../assets/snack-icon.png')} style={styles.filterIcon} />
      </TouchableOpacity>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Promotion</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      <ImageBackground source={require('../assets/snack-icon.png')} style={styles.promoBanner}>
        <Text style={styles.promoTitle}>3D Design Fundamentals</Text>
        <TouchableOpacity style={styles.smallButton}>
          <Text style={styles.buttonText}>Small Button</Text>
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Awesome Courses</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AwesomeCourses')}>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.filterTabs}>
        <TouchableOpacity style={styles.mediumButton}><Text style={styles.buttonText}>Medium</Text></TouchableOpacity>
        <TouchableOpacity style={styles.popularButton}><Text style={styles.buttonText}>Popular</Text></TouchableOpacity>
        <TouchableOpacity style={styles.mediumButton}><Text style={styles.buttonText}>Medium</Text></TouchableOpacity>
      </View>
      <FlatList
        data={courses}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('CourseDetail', { courseId: item.id })}>
            <View style={styles.courseCard}>
              <Image source={require('../assets/snack-icon.png')} style={styles.courseImage} />
              <View style={styles.courseInfo}>
                <Text style={styles.courseTitle}>{item.title}</Text>
                <Text>{item.lessons} lessons</Text>
                <Text>⭐ {item.rating}</Text>
              </View>
              <View style={styles.coursePrice}>
                <Text style={styles.priceText}>{item.price}</Text>
                <TouchableOpacity style={styles.heartIcon}>
                  <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('EnrolledCourses')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text>Course</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  profileIcon: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greeting: {
    position: 'absolute',
    marginLeft: 60,
    fontSize: 24,
    fontWeight: 'bold',
  },
  topIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    width: 40,
    height: 40,
    backgroundColor: '#eee',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  searchBar: {
    height: 40,
    backgroundColor: '#f7f8f9',
    borderRadius: 20,
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  filterButton: {
    position: 'absolute',
    right: 16,
    top: 95,
    width: 40,
    height: 40,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllText: {
    color: '#007bff',
  },
  promoBanner: {
    height: 120,
    borderRadius: 8,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    padding: 10,
    marginVertical: 10,
  },
  promoTitle: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 10,
  },
  smallButton: {
    alignSelf: 'flex-start',
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#ffbb33',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
  },
  filterTabs: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  mediumButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    marginRight: 10,
  },
  popularButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderColor: '#007bff',
    borderWidth: 1,
    marginRight: 10,
  },
  courseCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
  courseImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  courseInfo: {
    flex: 1,
    marginLeft: 10,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  coursePrice: {
    alignItems: 'flex-end',
  },
  priceText: {
    color: '#007bff',
    fontSize: 16,
  },
  heartIcon: {
    marginTop: 10,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navItem: {
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  }
});

export default HomeScreen;