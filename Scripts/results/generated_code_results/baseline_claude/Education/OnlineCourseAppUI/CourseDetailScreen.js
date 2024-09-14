import React from 'react';

import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const CourseDetailScreen = () => {

  const navigation = useNavigation();



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>

          <Icon name="chevron-back" size={24} color="#000" />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>3D Design Basic</Text>

      </View>



      <Image source={require('../assets/snack-icon.png')} style={styles.courseImage} />



      <View style={styles.infoContainer}>

        <View style={styles.statsContainer}>

          <View style={styles.statItem}>

            <Icon name="people-outline" size={20} color="#6B7280" />

            <Text style={styles.statText}>4.569</Text>

          </View>

          <View style={styles.statItem}>

            <Icon name="star-outline" size={20} color="#6B7280" />

            <Text style={styles.statText}>4.9</Text>

          </View>

          <View style={styles.bestSellerBadge}>

            <Text style={styles.bestSellerText}>Best Seller</Text>

          </View>

        </View>



        <Text style={styles.courseTitle}>3D Design Basic</Text>



        <Text style={styles.courseDescription}>

          In this course you will learn how to build a space to a 3-dimensional product. There are 24 premium learning videos for you.

        </Text>



        <View style={styles.lessonHeader}>

          <Text style={styles.lessonTitle}>24 Lessons (20 hours)</Text>

          <TouchableOpacity>

            <Text style={styles.seeAllText}>See all</Text>

          </TouchableOpacity>

        </View>



        <View style={styles.lessonItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.lessonImage} />

          <View style={styles.lessonInfo}>

            <Text style={styles.lessonName}>Introduction to 3D</Text>

            <Text style={styles.lessonDuration}>20 mins</Text>

          </View>

          <Icon name="checkmark-circle-outline" size={24} color="#4CAF50" />

        </View>



        <TouchableOpacity style={styles.largeButton}>

          <Icon name="cloud-download-outline" size={24} color="#FFFFFF" style={styles.buttonIcon} />

          <Text style={styles.buttonText}>Large Button</Text>

          <Icon name="chevron-forward-outline" size={24} color="#FFFFFF" style={styles.buttonIcon} />

        </TouchableOpacity>

      </View>

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFFFFF',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 16,

    paddingTop: 60,

    paddingBottom: 16,

  },

  backButton: {

    padding: 8,

  },

  headerTitle: {

    fontSize: 20,

    fontWeight: 'bold',

    marginLeft: 16,

  },

  courseImage: {

    width: '100%',

    height: 200,

    resizeMode: 'cover',

  },

  infoContainer: {

    padding: 16,

  },

  statsContainer: {

    flexDirection: 'row',

    justifyContent: 'flex-start',

    alignItems: 'center',

    marginBottom: 16,

  },

  statItem: {

    flexDirection: 'row',

    alignItems: 'center',

    marginRight: 16,

  },

  statText: {

    marginLeft: 4,

    color: '#6B7280',

  },

  bestSellerBadge: {

    backgroundColor: '#3B82F6',

    paddingHorizontal: 8,

    paddingVertical: 4,

    borderRadius: 12,

  },

  bestSellerText: {

    color: '#FFFFFF',

    fontSize: 12,

    fontWeight: 'bold',

  },

  courseTitle: {

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 8,

  },

  courseDescription: {

    fontSize: 16,

    color: '#4B5563',

    marginBottom: 24,

  },

  lessonHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 16,

  },

  lessonTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  seeAllText: {

    color: '#3B82F6',

    fontWeight: 'bold',

  },

  lessonItem: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 16,

  },

  lessonImage: {

    width: 60,

    height: 60,

    borderRadius: 8,

    marginRight: 12,

  },

  lessonInfo: {

    flex: 1,

  },

  lessonName: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  lessonDuration: {

    fontSize: 14,

    color: '#6B7280',

  },

  largeButton: {

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',

    backgroundColor: '#6B7280',

    borderRadius: 8,

    paddingVertical: 16,

    marginTop: 24,

  },

  buttonIcon: {

    marginHorizontal: 8,

  },

  buttonText: {

    color: '#FFFFFF',

    fontSize: 18,

    fontWeight: 'bold',

  },

});



export default CourseDetailScreen;