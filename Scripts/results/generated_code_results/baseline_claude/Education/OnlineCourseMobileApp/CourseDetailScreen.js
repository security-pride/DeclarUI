import React from 'react';

import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const CourseDetailScreen = () => {

  const navigation = useNavigation();



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Text style={styles.backButton}>{'<'}</Text>

        </TouchableOpacity>

        <Text style={styles.headerTitle}>Details Course</Text>

        <TouchableOpacity>

          <Text style={styles.moreButton}>⋯</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.courseHeader}>

        <View style={styles.iconContainer}>

          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

        </View>

        <Text style={styles.courseTitle}>GRAPICS DESIGN</Text>

      </View>



      <Text style={styles.courseDescription}>

        How to make modern design for Beginner

      </Text>



      <View style={styles.instructorContainer}>

        <Image source={require('../assets/snack-icon.png')} style={styles.instructorAvatar} />

        <Text style={styles.instructorName}>Nicola Tesla</Text>

        <View style={styles.ratingContainer}>

          <Text style={styles.ratingIcon}>★</Text>

          <Text style={styles.ratingText}>4.9 (1.2k)</Text>

        </View>

      </View>



      <Text style={styles.lorem}>

        Lorem ipsum dolor sit amet consectetur. Mattis amet accumsan tellus sapien amet tempus elit feugiat. Elementum vulputate arcu urna.

      </Text>



      <View style={styles.tabContainer}>

        <TouchableOpacity style={styles.activeTab}>

          <Text style={styles.activeTabText}>Lessons</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.inactiveTab}>

          <Text style={styles.inactiveTabText}>Reviews</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.lessonItem}>

        <View style={styles.lessonInfo}>

          <Text style={styles.lessonTitle}>1. Graphics Design Introduction</Text>

          <Text style={styles.lessonDuration}>12:34</Text>

        </View>

        <TouchableOpacity style={styles.playButton}>

          <Text style={styles.playButtonText}>▶</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.lessonItem}>

        <View style={styles.lessonInfo}>

          <Text style={styles.lessonTitle}>2. Shape & Line</Text>

          <Text style={styles.lessonDuration}>12:34</Text>

        </View>

        <View style={styles.lockButton}>

          <Text style={styles.lockButtonText}>🔒</Text>

        </View>

      </View>



      <TouchableOpacity style={styles.buyButton}>

        <Text style={styles.buyButtonText}>Buy $23.00 →</Text>

      </TouchableOpacity>

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#fff',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 16,

  },

  backButton: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  moreButton: {

    fontSize: 24,

  },

  courseHeader: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#3498db',

    padding: 16,

    borderRadius: 8,

    marginHorizontal: 16,

  },

  iconContainer: {

    backgroundColor: '#2980b9',

    borderRadius: 20,

    padding: 8,

    marginRight: 12,

  },

  icon: {

    width: 24,

    height: 24,

    tintColor: '#fff',

  },

  courseTitle: {

    color: '#fff',

    fontSize: 18,

    fontWeight: 'bold',

  },

  courseDescription: {

    fontSize: 24,

    fontWeight: 'bold',

    marginHorizontal: 16,

    marginTop: 16,

  },

  instructorContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    marginHorizontal: 16,

    marginTop: 16,

  },

  instructorAvatar: {

    width: 24,

    height: 24,

    borderRadius: 12,

    marginRight: 8,

  },

  instructorName: {

    fontSize: 16,

    fontWeight: 'bold',

    marginRight: 8,

  },

  ratingContainer: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  ratingIcon: {

    color: '#f1c40f',

    marginRight: 4,

  },

  ratingText: {

    color: '#7f8c8d',

  },

  lorem: {

    marginHorizontal: 16,

    marginTop: 16,

    color: '#7f8c8d',

  },

  tabContainer: {

    flexDirection: 'row',

    marginHorizontal: 16,

    marginTop: 24,

    borderBottomWidth: 1,

    borderBottomColor: '#ecf0f1',

  },

  activeTab: {

    borderBottomWidth: 2,

    borderBottomColor: '#3498db',

    paddingBottom: 8,

    marginRight: 16,

  },

  activeTabText: {

    color: '#3498db',

    fontWeight: 'bold',

  },

  inactiveTab: {

    paddingBottom: 8,

  },

  inactiveTabText: {

    color: '#7f8c8d',

  },

  lessonItem: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginHorizontal: 16,

    marginTop: 16,

    paddingBottom: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#ecf0f1',

  },

  lessonInfo: {

    flex: 1,

  },

  lessonTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  lessonDuration: {

    color: '#7f8c8d',

    marginTop: 4,

  },

  playButton: {

    backgroundColor: '#2ecc71',

    borderRadius: 20,

    width: 40,

    height: 40,

    justifyContent: 'center',

    alignItems: 'center',

  },

  playButtonText: {

    color: '#fff',

    fontSize: 18,

  },

  lockButton: {

    backgroundColor: '#ecf0f1',

    borderRadius: 20,

    width: 40,

    height: 40,

    justifyContent: 'center',

    alignItems: 'center',

  },

  lockButtonText: {

    fontSize: 18,

  },

  buyButton: {

    backgroundColor: '#2ecc71',

    borderRadius: 8,

    marginHorizontal: 16,

    marginTop: 24,

    marginBottom: 32,

    padding: 16,

    alignItems: 'center',

  },

  buyButtonText: {

    color: '#fff',

    fontSize: 18,

    fontWeight: 'bold',

  },

});



export default CourseDetailScreen;