import React from 'react';

import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const InstructorCard = ({ image, name, description }) => (

  <View style={styles.instructorCard}>

    <Image source={image} style={styles.instructorImage} />

    <View style={styles.instructorInfo}>

      <Text style={styles.instructorName}>{name}</Text>

      <Text style={styles.instructorDescription}>{description}</Text>

    </View>

  </View>

);



const LessonCard = ({ image, title, author, duration }) => (

  <View style={styles.lessonCard}>

    <Image source={image} style={styles.lessonImage} />

    <View style={styles.lessonInfo}>

      <Text style={styles.lessonTitle}>{title}</Text>

      <Text style={styles.lessonAuthor}>{author}</Text>

    </View>

    <Text style={styles.lessonDuration}>{duration}</Text>

  </View>

);



const MyListScreen = () => {

  const navigation = useNavigation();



  const instructors = [

    { id: '1', image: require('../assets/snack-icon.png'), name: 'Boniface Esanji', description: 'Teaches Guitar' },

  ];



  const lessons = [

    { id: '1', image: require('../assets/snack-icon.png'), title: 'Gift yourself this UI Kit and enjoy!', author: 'John Wiseberg', duration: '08:12' },

    { id: '2', image: require('../assets/snack-icon.png'), title: 'Make your Mess Your Message', author: 'Mendy Santiago', duration: '12:38' },

  ];



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>

          <Text style={styles.tabText}>Home</Text>

        </TouchableOpacity>

        <View style={styles.activeTabContainer}>

          <Text style={styles.activeTabText}>My List</Text>

          <View style={styles.activeTabIndicator} />

        </View>

        <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />

      </View>



      <ScrollView style={styles.content}>

        <Text style={styles.sectionTitle}>Instructors</Text>

        {instructors.map((instructor) => (

          <InstructorCard key={instructor.id} {...instructor} />

        ))}



        <Text style={styles.sectionTitle}>Lessons</Text>

        {lessons.map((lesson) => (

          <LessonCard key={lesson.id} {...lesson} />

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

  tabText: {

    color: '#999999',

    fontSize: 18,

  },

  activeTabContainer: {

    alignItems: 'center',

  },

  activeTabText: {

    color: 'white',

    fontSize: 18,

    fontWeight: 'bold',

  },

  activeTabIndicator: {

    width: 30,

    height: 2,

    backgroundColor: '#FFD700',

    marginTop: 5,

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

  instructorCard: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#2C2C2C',

    borderRadius: 10,

    padding: 15,

    marginBottom: 15,

  },

  instructorImage: {

    width: 60,

    height: 60,

    borderRadius: 30,

  },

  instructorInfo: {

    marginLeft: 15,

  },

  instructorName: {

    color: 'white',

    fontSize: 18,

    fontWeight: 'bold',

  },

  instructorDescription: {

    color: '#999999',

    fontSize: 14,

  },

  lessonCard: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#2C2C2C',

    borderRadius: 10,

    padding: 15,

    marginBottom: 15,

  },

  lessonImage: {

    width: 80,

    height: 60,

    borderRadius: 5,

  },

  lessonInfo: {

    flex: 1,

    marginLeft: 15,

  },

  lessonTitle: {

    color: 'white',

    fontSize: 16,

    fontWeight: 'bold',

  },

  lessonAuthor: {

    color: '#999999',

    fontSize: 14,

  },

  lessonDuration: {

    color: '#999999',

    fontSize: 12,

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



export default MyListScreen;