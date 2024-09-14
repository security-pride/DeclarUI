import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const StatisticScreen = () => {

  const navigation = useNavigation();

  const [selectedPeriod, setSelectedPeriod] = useState('Weekly');



  const learningData = [

    { day: 'Sun', value: 6 },

    { day: 'Mon', value: 8 },

    { day: 'Tue', value: 5 },

    { day: 'Wed', value: 7 },

    { day: 'Thu', value: 3 },

    { day: 'Fri', value: 6 },

    { day: 'Sat', value: 7 },

  ];



  const courseProgress = [

    {

      category: 'Programing',

      title: 'Bootstrapping Fundamental Principles',

      rating: 4.7,

      reviews: 1242,

      progress: 74,

      image: require('../assets/snack-icon.png'),

    },

    {

      category: 'Interface Design',

      title: 'User interface for beginners',

      rating: 4.8,

      reviews: 1350,

      progress: 32,

      image: require('../assets/snack-icon.png'),

    },

  ];



  const renderBarChart = () => (

    <View style={styles.barChartContainer}>

      {learningData.map((item, index) => (

        <View key={index} style={styles.barColumn}>

          <View style={[styles.bar, { height: `${item.value * 10}%` }]}>

            {item.value === 3 && (

              <View style={styles.barLabel}>

                <Text style={styles.barLabelText}>{item.value} Class</Text>

              </View>

            )}

          </View>

          <Text style={styles.barDay}>{item.day}</Text>

        </View>

      ))}

    </View>

  );



  const renderCourseProgress = () => (

    <View style={styles.courseProgressContainer}>

      <Text style={styles.courseProgressTitle}>Course Progress (4)</Text>

      {courseProgress.map((course, index) => (

        <View key={index} style={styles.courseItem}>

          <View style={styles.courseInfo}>

            <Text style={styles.courseCategory}>{course.category}</Text>

            <Text style={styles.courseTitle}>{course.title}</Text>

            <View style={styles.ratingContainer}>

              <Icon name="star" size={16} color="#FFD700" />

              <Text style={styles.ratingText}>

                {course.rating} ({course.reviews} Reviews)

              </Text>

            </View>

            <View style={styles.progressBarContainer}>

              <View style={[styles.progressBar, { width: `${course.progress}%` }]} />

            </View>

            <Text style={styles.progressText}>{course.progress}%</Text>

          </View>

          <Image source={course.image} style={styles.courseImage} />

        </View>

      ))}

    </View>

  );



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.headerTitle}>Statistic</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>

          <Icon name="notifications-outline" size={24} color="#000" />

        </TouchableOpacity>

      </View>



      <ScrollView style={styles.content}>

        <View style={styles.chartContainer}>

          <View style={styles.chartHeader}>

            <Text style={styles.chartTitle}>Learning Progress</Text>

            <TouchableOpacity style={styles.periodSelector}>

              <Text style={styles.periodText}>{selectedPeriod}</Text>

              <Icon name="chevron-down" size={20} color="#000" />

            </TouchableOpacity>

          </View>

          {renderBarChart()}

        </View>



        {renderCourseProgress()}

      </ScrollView>



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Discover')}>

          <Icon name="home-outline" size={24} color="#999" />

          <Text style={styles.tabLabel}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="stats-chart" size={24} color="#6C5CE7" />

          <Text style={[styles.tabLabel, styles.activeTabLabel]}>Statistic</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Favorites')}>

          <Icon name="heart-outline" size={24} color="#999" />

          <Text style={styles.tabLabel}>Favorites</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="person-outline" size={24} color="#999" />

          <Text style={styles.tabLabel}>Profile</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F5F5F5',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 16,

    paddingVertical: 12,

    backgroundColor: '#FFFFFF',

  },

  headerTitle: {

    fontSize: 20,

    fontWeight: 'bold',

  },

  content: {

    flex: 1,

  },

  chartContainer: {

    backgroundColor: '#FFFFFF',

    borderRadius: 12,

    margin: 16,

    padding: 16,

  },

  chartHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 16,

  },

  chartTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  periodSelector: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  periodText: {

    marginRight: 4,

  },

  barChartContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'flex-end',

    height: 200,

  },

  barColumn: {

    alignItems: 'center',

    width: '14%',

  },

  bar: {

    width: '60%',

    backgroundColor: '#6C5CE7',

    borderRadius: 4,

  },

  barLabel: {

    position: 'absolute',

    top: -24,

    backgroundColor: '#000',

    borderRadius: 4,

    padding: 4,

  },

  barLabelText: {

    color: '#FFF',

    fontSize: 10,

  },

  barDay: {

    marginTop: 8,

    fontSize: 12,

  },

  courseProgressContainer: {

    backgroundColor: '#FFFFFF',

    borderRadius: 12,

    margin: 16,

    padding: 16,

  },

  courseProgressTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 16,

  },

  courseItem: {

    flexDirection: 'row',

    marginBottom: 16,

  },

  courseInfo: {

    flex: 1,

    marginRight: 12,

  },

  courseCategory: {

    color: '#6C5CE7',

    marginBottom: 4,

  },

  courseTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 4,

  },

  ratingContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 8,

  },

  ratingText: {

    marginLeft: 4,

    fontSize: 12,

  },

  progressBarContainer: {

    height: 4,

    backgroundColor: '#E0E0E0',

    borderRadius: 2,

    marginBottom: 4,

  },

  progressBar: {

    height: '100%',

    backgroundColor: '#6C5CE7',

    borderRadius: 2,

  },

  progressText: {

    fontSize: 12,

    color: '#666',

  },

  courseImage: {

    width: 80,

    height: 80,

    borderRadius: 8,

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#EEEEEE',

    paddingVertical: 8,

    backgroundColor: '#FFFFFF',

  },

  tabItem: {

    alignItems: 'center',

  },

  tabLabel: {

    marginTop: 4,

    fontSize: 12,

    color: '#999',

  },

  activeTabLabel: {

    color: '#6C5CE7',

  },

});



export default StatisticScreen;