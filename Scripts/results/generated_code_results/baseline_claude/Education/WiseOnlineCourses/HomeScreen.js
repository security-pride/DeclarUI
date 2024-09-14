import React from 'react';

import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const NewCourseCard = ({ image, name, description }) => (

  <View style={styles.newCourseCard}>

    <Image source={image} style={styles.newCourseImage} />

    <Text style={styles.newCourseName}>{name}</Text>

    <Text style={styles.newCourseDescription}>{description}</Text>

  </View>

);



const PopularCourseItem = ({ image, name, description }) => (

  <View style={styles.popularCourseItem}>

    <Image source={image} style={styles.popularCourseImage} />

    <View style={styles.popularCourseInfo}>

      <Text style={styles.popularCourseName}>{name}</Text>

      <Text style={styles.popularCourseDescription}>{description}</Text>

    </View>

  </View>

);



const HomeScreen = () => {

  const navigation = useNavigation();



  const newCourses = [

    { id: '1', image: require('../assets/snack-icon.png'), name: 'Mendy Santiago', description: 'Teach Effective and Authentic Communication' },

    { id: '2', image: require('../assets/snack-icon.png'), name: 'John Wiseberg', description: 'Teach Advertising and Creativity' },

  ];



  const popularCourses = [

    { id: '1', image: require('../assets/snack-icon.png'), name: 'Masood El Toure', description: 'Teaches Creativity and Songwriting' },

    { id: '2', image: require('../assets/snack-icon.png'), name: 'Sophie Asveld', description: 'Teaches Screenwriting' },

    { id: '3', image: require('../assets/snack-icon.png'), name: 'Maria Trofimova', description: 'Building a Digital Brand' },

    { id: '4', image: require('../assets/snack-icon.png'), name: 'Lucy Miller', description: 'Teaches Photography' },

  ];



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <View style={styles.tabContainer}>

          <TouchableOpacity style={styles.activeTab}>

            <Text style={styles.activeTabText}>Home</Text>

          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('MyList')}>

            <Text style={styles.tabText}>My List</Text>

          </TouchableOpacity>

        </View>

        <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />

      </View>



      <ScrollView style={styles.content}>

        <Text style={styles.sectionTitle}>New Courses</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.newCoursesContainer}>

          {newCourses.map((course) => (

            <NewCourseCard key={course.id} {...course} />

          ))}

        </ScrollView>



        <Text style={styles.sectionTitle}>Popular Courses</Text>

        {popularCourses.map((course) => (

          <PopularCourseItem key={course.id} {...course} />

        ))}

      </ScrollView>



      <View style={styles.tabBar}>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={[styles.tabIcon, styles.activeTabIcon]} />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Search')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Downloads')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

      </View>

    </View>

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

  tabContainer: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  activeTab: {

    borderBottomWidth: 2,

    borderBottomColor: '#FFD700',

    paddingBottom: 5,

    marginRight: 20,

  },

  activeTabText: {

    color: 'white',

    fontSize: 18,

    fontWeight: 'bold',

  },

  tabText: {

    color: '#999999',

    fontSize: 18,

  },

  profileImage: {

    width: 40,

    height: 40,

    borderRadius: 20,

  },

  content: {

    flex: 1,

    paddingHorizontal: 20,

  },

  sectionTitle: {

    color: 'white',

    fontSize: 22,

    fontWeight: 'bold',

    marginVertical: 15,

  },

  newCoursesContainer: {

    flexDirection: 'row',

    marginBottom: 20,

  },

  newCourseCard: {

    width: 200,

    marginRight: 15,

  },

  newCourseImage: {

    width: 200,

    height: 120,

    borderRadius: 10,

  },

  newCourseName: {

    color: 'white',

    fontSize: 16,

    fontWeight: 'bold',

    marginTop: 10,

  },

  newCourseDescription: {

    color: '#999999',

    fontSize: 14,

    marginTop: 5,

  },

  popularCourseItem: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 15,

  },

  popularCourseImage: {

    width: 60,

    height: 60,

    borderRadius: 30,

  },

  popularCourseInfo: {

    marginLeft: 15,

    flex: 1,

  },

  popularCourseName: {

    color: 'white',

    fontSize: 16,

    fontWeight: 'bold',

  },

  popularCourseDescription: {

    color: '#999999',

    fontSize: 14,

    marginTop: 5,

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    height: 60,

    backgroundColor: '#2C2C2C',

  },

  tabIcon: {

    width: 24,

    height: 24,

    tintColor: '#999999',

  },

  activeTabIcon: {

    tintColor: 'white',

  },

});



export default HomeScreen;