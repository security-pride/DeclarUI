import React, { useState } from 'react';

import {

  View,

  Text,

  StyleSheet,

  Image,

  TouchableOpacity,

  ScrollView,

  SafeAreaView,

} from 'react-native';

import { useNavigation } from '@react-navigation/native';



const courses = [

  {

    id: '1',

    title: 'Basic communication English',

    level: 'Primary',

    lessons: 12,

    image: '../assets/snack-icon.png',

  },

  {

    id: '2',

    title: 'Essential Structures',

    level: 'Primary',

    lessons: 6,

    image: '../assets/snack-icon.png',

  },

];



const SpeakScreen = () => {

  const navigation = useNavigation();

  const [selectedCategory, setSelectedCategory] = useState('All');



  const categories = ['All', 'Beginner', 'Intermediate', 'Advanced'];



  const renderCategoryButton = (category) => (

    <TouchableOpacity

      key={category}

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

  );



  const renderCourseItem = (course) => (

    <TouchableOpacity key={course.id} style={styles.courseItem} onPress={() => navigation.navigate('Conversation')}>

      <Image source={require('../assets/snack-icon.png')} style={styles.courseImage} />

      <View style={styles.courseInfo}>

        <Text style={styles.courseTitle}>{course.title}</Text>

        <View style={styles.courseMetaContainer}>

          <View style={styles.levelTag}>

            <Text style={styles.levelTagText}>{course.level}</Text>

          </View>

          <Text style={styles.lessonCount}>{course.lessons} Lessons</Text>

        </View>

      </View>

      <TouchableOpacity style={styles.arrowButton}>

        <Text style={styles.arrowIcon}>→</Text>

      </TouchableOpacity>

    </TouchableOpacity>

  );



  return (

    <SafeAreaView style={styles.container}>

      <ScrollView>

        <Text style={styles.title}>Speaking Course</Text>

        <Text style={styles.subtitle}>Improve your speak skill with many courses</Text>



        <View style={styles.studyingCourseContainer}>

          <Text style={styles.sectionTitle}>Studying Course</Text>

          <TouchableOpacity style={styles.studyingCourseCard} onPress={() => navigation.navigate('Conversation')}>

            <Image

              source={require('../assets/snack-icon.png')}

              style={styles.studyingCourseImage}

            />

            <View style={styles.studyingCourseInfo}>

              <View style={styles.levelTagIntermediate}>

                <Text style={styles.levelTagText}>Intermediate</Text>

              </View>

              <Text style={styles.studyingCourseTitle}>English REAL TALK</Text>

              <Text style={styles.studyingCourseDescription}>

                Is speak English as easy but rigid as a textbook? No no!! You're wrong! ...

              </Text>

              <TouchableOpacity style={styles.continueButton}>

                <Text style={styles.continueButtonText}>→</Text>

              </TouchableOpacity>

            </View>

          </TouchableOpacity>

        </View>



        <View style={styles.coursesContainer}>

          <Text style={styles.sectionTitle}>Courses</Text>

          <ScrollView

            horizontal

            showsHorizontalScrollIndicator={false}

            style={styles.categoriesScrollView}

          >

            {categories.map(renderCategoryButton)}

          </ScrollView>

          {courses.map(renderCourseItem)}

        </View>

      </ScrollView>



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabLabel}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Search')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabLabel}>Search</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>

          <Image source={require('../assets/snack-icon.png')} style={[styles.tabIcon, styles.activeTabIcon]} />

          <Text style={[styles.tabLabel, styles.activeTabLabel]}>Speak</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Vocabulary')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabLabel}>Vocabulary</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Profile')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabLabel}>Profile</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFFFFF',

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    marginTop: 20,

    marginLeft: 20,

  },

  subtitle: {

    fontSize: 14,

    color: '#666666',

    marginLeft: 20,

    marginBottom: 20,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 10,

    marginLeft: 20,

  },

  studyingCourseContainer: {

    marginBottom: 20,

  },

  studyingCourseCard: {

    flexDirection: 'row',

    backgroundColor: '#F0F0F0',

    borderRadius: 10,

    overflow: 'hidden',

    marginHorizontal: 20,

  },

  studyingCourseImage: {

    width: 120,

    height: 150,

  },

  studyingCourseInfo: {

    flex: 1,

    padding: 10,

  },

  levelTagIntermediate: {

    backgroundColor: '#4CAF50',

    paddingHorizontal: 8,

    paddingVertical: 4,

    borderRadius: 12,

    alignSelf: 'flex-start',

    marginBottom: 5,

  },

  levelTagText: {

    color: '#FFFFFF',

    fontSize: 12,

  },

  studyingCourseTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  studyingCourseDescription: {

    fontSize: 12,

    color: '#666666',

    marginBottom: 10,

  },

  continueButton: {

    alignSelf: 'flex-end',

    backgroundColor: '#E0E0E0',

    borderRadius: 15,

    width: 30,

    height: 30,

    justifyContent: 'center',

    alignItems: 'center',

  },

  continueButtonText: {

    fontSize: 18,

    color: '#333333',

  },

  coursesContainer: {

    flex: 1,

  },

  categoriesScrollView: {

    marginBottom: 10,

  },

  categoryButton: {

    paddingHorizontal: 16,

    paddingVertical: 8,

    marginHorizontal: 5,

    borderRadius: 20,

    backgroundColor: '#F0F0F0',

  },

  selectedCategoryButton: {

    backgroundColor: '#007AFF',

  },

  categoryButtonText: {

    color: '#333333',

  },

  selectedCategoryButtonText: {

    color: '#FFFFFF',

  },

  courseItem: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 15,

    paddingHorizontal: 20,

  },

  courseImage: {

    width: 80,

    height: 80,

    borderRadius: 10,

    marginRight: 10,

  },

  courseInfo: {

    flex: 1,

  },

  courseTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  courseMetaContainer: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  levelTag: {

    backgroundColor: '#FFA500',

    paddingHorizontal: 8,

    paddingVertical: 4,

    borderRadius: 12,

    marginRight: 10,

  },

  lessonCount: {

    fontSize: 12,

    color: '#666666',

  },

  arrowButton: {

    padding: 5,

  },

  arrowIcon: {

    fontSize: 18,

    color: '#666666',

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

  tabIcon: {

    width: 24,

    height: 24,

    marginBottom: 5,

  },

  tabLabel: {

    fontSize: 12,

    color: '#666666',

  },

  activeTab: {

    borderTopWidth: 2,

    borderTopColor: '#007AFF',

    paddingTop: 8,

  },

  activeTabIcon: {

    tintColor: '#007AFF',

  },

  activeTabLabel: {

    color: '#007AFF',

  },

});



export default SpeakScreen;