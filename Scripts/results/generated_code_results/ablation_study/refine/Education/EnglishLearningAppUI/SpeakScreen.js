import React from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



const SpeakScreen = ({ navigation }) => {

  return (

    <View style={styles.container}>

      <Text style={styles.title}>Speaking Course</Text>

      <Text style={styles.subtitle}>Improve your speak skill with many courses</Text>



      <View style={styles.studyingCourse}>

        <Text style={styles.sectionTitle}>Studying Course</Text>

        <View style={styles.courseCard}>

          <Image source={require('../assets/snack-icon.png')} style={styles.courseImage} />

          <View style={styles.courseInfo}>

            <View style={styles.levelBadge}>

              <Text style={styles.levelText}>Intermediate</Text>

            </View>

            <Text style={styles.courseTitle}>English REAL TALK</Text>

            <Text style={styles.courseDescription}>Is speak English as easy but rigid as a textbook? No no! You're wrong!</Text>

            <TouchableOpacity style={styles.arrowButton}>

              <Icon name="arrow-forward" size={24} color="#000" />

            </TouchableOpacity>

          </View>

        </View>

      </View>



      <Text style={styles.sectionTitle}>Courses</Text>

      <View style={styles.filterContainer}>

        <TouchableOpacity style={[styles.filterButton, styles.activeFilter]}>

          <Text style={styles.filterText}>All</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.filterButton}>

          <Text style={styles.filterText}>Beginner</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.filterButton}>

          <Text style={styles.filterText}>Intermediate</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.filterButton}>

          <Text style={styles.filterText}>Advanced</Text>

        </TouchableOpacity>

      </View>



      <ScrollView style={styles.courseList}>

        <View style={styles.listItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.listItemImage} />

          <View style={styles.listItemInfo}>

            <Text style={styles.listItemTitle}>Basic communication English</Text>

            <View style={styles.listItemDetails}>

              <View style={styles.primaryBadge}>

                <Text style={styles.primaryText}>Primary</Text>

              </View>

              <Text style={styles.lessonCount}>12 Lessons</Text>

            </View>

          </View>

          <TouchableOpacity style={styles.listItemArrow}>

            <Icon name="arrow-forward" size={20} color="#000" />

          </TouchableOpacity>

        </View>



        <View style={styles.listItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.listItemImage} />

          <View style={styles.listItemInfo}>

            <Text style={styles.listItemTitle}>Essential Structures</Text>

            <View style={styles.listItemDetails}>

              <View style={styles.primaryBadge}>

                <Text style={styles.primaryText}>Primary</Text>

              </View>

              <Text style={styles.lessonCount}>6 Lessons</Text>

            </View>

          </View>

          <TouchableOpacity style={styles.listItemArrow}>

            <Icon name="arrow-forward" size={20} color="#000" />

          </TouchableOpacity>

        </View>

      </ScrollView>



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="home-outline" size={24} color="#000" />

          <Text style={styles.tabLabel}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="search-outline" size={24} color="#000" />

          <Text style={styles.tabLabel}>Search</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>

          <Icon name="chatbubble-outline" size={24} color="#4A90E2" />

          <Text style={[styles.tabLabel, styles.activeTabLabel]}>Speak</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="book-outline" size={24} color="#000" />

          <Text style={styles.tabLabel}>Vocabulary</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="person-outline" size={24} color="#000" />

          <Text style={styles.tabLabel}>Profile</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFFFFF',

    paddingTop: 40,

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    marginLeft: 20,

    marginBottom: 5,

  },

  subtitle: {

    fontSize: 14,

    color: '#888',

    marginLeft: 20,

    marginBottom: 20,

  },

  studyingCourse: {

    marginBottom: 20,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginLeft: 20,

    marginBottom: 10,

  },

  courseCard: {

    flexDirection: 'row',

    backgroundColor: '#F0F0F0',

    borderRadius: 10,

    marginHorizontal: 20,

    overflow: 'hidden',

  },

  courseImage: {

    width: 100,

    height: 150,

  },

  courseInfo: {

    flex: 1,

    padding: 10,

  },

  levelBadge: {

    backgroundColor: '#4CAF50',

    paddingHorizontal: 8,

    paddingVertical: 4,

    borderRadius: 12,

    alignSelf: 'flex-start',

    marginBottom: 5,

  },

  levelText: {

    color: '#FFF',

    fontSize: 12,

  },

  courseTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  courseDescription: {

    fontSize: 12,

    color: '#666',

  },

  arrowButton: {

    position: 'absolute',

    bottom: 10,

    right: 10,

  },

  filterContainer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    marginBottom: 20,

  },

  filterButton: {

    paddingHorizontal: 15,

    paddingVertical: 8,

    borderRadius: 20,

    backgroundColor: '#F0F0F0',

  },

  activeFilter: {

    backgroundColor: '#4A90E2',

  },

  filterText: {

    fontSize: 14,

    color: '#000',

  },

  courseList: {

    flex: 1,

  },

  listItem: {

    flexDirection: 'row',

    alignItems: 'center',

    marginHorizontal: 20,

    marginBottom: 15,

  },

  listItemImage: {

    width: 60,

    height: 60,

    borderRadius: 8,

    marginRight: 15,

  },

  listItemInfo: {

    flex: 1,

  },

  listItemTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  listItemDetails: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  primaryBadge: {

    backgroundColor: '#FFA500',

    paddingHorizontal: 8,

    paddingVertical: 4,

    borderRadius: 12,

    marginRight: 10,

  },

  primaryText: {

    color: '#FFF',

    fontSize: 12,

  },

  lessonCount: {

    fontSize: 12,

    color: '#666',

  },

  listItemArrow: {

    padding: 5,

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

    paddingVertical: 10,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabLabel: {

    fontSize: 12,

    marginTop: 4,

  },

  activeTab: {

    color: '#4A90E2',

  },

  activeTabLabel: {

    color: '#4A90E2',

  },

});



export default SpeakScreen;