import React from 'react';

import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { useNavigation } from '@react-navigation/native';



const SpeakScreen = () => {

  const navigation = useNavigation();



  const handleCoursePress = () => {

    navigation.navigate('Conversation');

  };



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.headerTitle}>Speaking Course</Text>

        <Text style={styles.headerSubtitle}>Improve your speak skill with many courses</Text>

      </View>



      <ScrollView style={styles.content}>

        <View style={styles.featuredCourse}>

          <Image source={require('../assets/snack-icon.png')} style={styles.featuredImage} />

          <View style={styles.featuredInfo}>

            <View style={styles.levelTag}>

              <Text style={styles.levelText}>Intermediate</Text>

            </View>

            <Text style={styles.featuredTitle}>English REAL TALK</Text>

            <Text style={styles.featuredDescription}>

              Is speak English as easy but rigid as a textbook? No no! You're wrong! ...

            </Text>

            <TouchableOpacity style={styles.arrowButton}>

              <Icon name="arrow-forward" size={24} color="#000" />

            </TouchableOpacity>

          </View>

        </View>



        <View style={styles.courseTabs}>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>

            {['All', 'Beginner', 'Intermediate', 'Advanced'].map((tab, index) => (

              <TouchableOpacity key={index} style={[styles.tab, index === 0 && styles.activeTab]}>

                <Text style={[styles.tabText, index === 0 && styles.activeTabText]}>{tab}</Text>

              </TouchableOpacity>

            ))}

          </ScrollView>

        </View>



        <Text style={styles.sectionTitle}>Courses</Text>



        {[

          { title: 'Basic communication English', level: 'Primary', lessons: 12 },

          { title: 'Essential Structures', level: 'Primary', lessons: 6 },

        ].map((course, index) => (

          <TouchableOpacity key={index} style={styles.courseItem} onPress={handleCoursePress}>

            <Image source={require('../assets/snack-icon.png')} style={styles.courseImage} />

            <View style={styles.courseInfo}>

              <Text style={styles.courseTitle}>{course.title}</Text>

              <View style={styles.courseDetails}>

                <View style={styles.levelTag}>

                  <Text style={styles.levelText}>{course.level}</Text>

                </View>

                <Text style={styles.lessonCount}>{course.lessons} Lessons</Text>

              </View>

            </View>

            <TouchableOpacity style={styles.arrowButton}>

              <Icon name="arrow-forward" size={24} color="#000" />

            </TouchableOpacity>

          </TouchableOpacity>

        ))}

      </ScrollView>



      <View style={styles.bottomNav}>

        {['Home', 'Search', 'Speak', 'Vocabulary', 'Profile'].map((item, index) => (

          <TouchableOpacity

            key={index}

            style={styles.navItem}

            onPress={() => navigation.navigate(item)}

          >

            <Icon

              name={

                item === 'Home'

                  ? 'home'

                  : item === 'Search'

                  ? 'search'

                  : item === 'Speak'

                  ? 'mic'

                  : item === 'Vocabulary'

                  ? 'book'

                  : 'person'

              }

              size={24}

              color={item === 'Speak' ? '#007AFF' : '#888'}

            />

            <Text style={[styles.navText, item === 'Speak' && styles.activeNavText]}>{item}</Text>

          </TouchableOpacity>

        ))}

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F5F5F5',

  },

  header: {

    padding: 20,

    backgroundColor: '#FFFFFF',

  },

  headerTitle: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  headerSubtitle: {

    fontSize: 14,

    color: '#666',

    marginTop: 5,

  },

  content: {

    flex: 1,

  },

  featuredCourse: {

    backgroundColor: '#FFFFFF',

    margin: 15,

    borderRadius: 10,

    overflow: 'hidden',

  },

  featuredImage: {

    width: '100%',

    height: 150,

  },

  featuredInfo: {

    padding: 15,

  },

  levelTag: {

    backgroundColor: '#E8F5E9',

    paddingHorizontal: 10,

    paddingVertical: 5,

    borderRadius: 15,

    alignSelf: 'flex-start',

  },

  levelText: {

    color: '#4CAF50',

    fontSize: 12,

    fontWeight: 'bold',

  },

  featuredTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginTop: 10,

  },

  featuredDescription: {

    fontSize: 14,

    color: '#666',

    marginTop: 5,

  },

  arrowButton: {

    position: 'absolute',

    right: 15,

    bottom: 15,

  },

  courseTabs: {

    flexDirection: 'row',

    paddingHorizontal: 15,

    marginBottom: 15,

  },

  tab: {

    paddingHorizontal: 20,

    paddingVertical: 10,

    marginRight: 10,

    borderRadius: 20,

    backgroundColor: '#FFFFFF',

  },

  activeTab: {

    backgroundColor: '#007AFF',

  },

  tabText: {

    color: '#000',

  },

  activeTabText: {

    color: '#FFFFFF',

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginLeft: 15,

    marginBottom: 10,

  },

  courseItem: {

    flexDirection: 'row',

    backgroundColor: '#FFFFFF',

    marginHorizontal: 15,

    marginBottom: 15,

    borderRadius: 10,

    overflow: 'hidden',

  },

  courseImage: {

    width: 80,

    height: 80,

  },

  courseInfo: {

    flex: 1,

    padding: 15,

  },

  courseTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  courseDetails: {

    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 5,

  },

  lessonCount: {

    fontSize: 12,

    color: '#666',

    marginLeft: 10,

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    paddingVertical: 10,

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

  },

  navItem: {

    alignItems: 'center',

  },

  navText: {

    fontSize: 12,

    color: '#888',

    marginTop: 5,

  },

  activeNavText: {

    color: '#007AFF',

  },

});



export default SpeakScreen;