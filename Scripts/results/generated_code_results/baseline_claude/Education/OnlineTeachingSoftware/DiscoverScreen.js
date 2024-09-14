import React from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const DiscoverScreen = () => {

  const navigation = useNavigation();



  const renderPopularCourse = (title, instructor, price, image) => (

    <TouchableOpacity style={styles.popularCourseItem} onPress={() => navigation.navigate('CourseDetail')}>

      <Image source={image} style={styles.popularCourseImage} />

      <View style={styles.popularCourseInfo}>

        <Text style={styles.popularCourseCategory}>{title.split(' ')[0]}</Text>

        <Text style={styles.popularCourseTitle}>{title}</Text>

        <Text style={styles.popularCourseInstructor}>{instructor}</Text>

        <Text style={styles.popularCoursePrice}>${price}</Text>

      </View>

      <TouchableOpacity style={styles.favoriteButton}>

        <Icon name="heart-outline" size={20} color="#000" />

      </TouchableOpacity>

    </TouchableOpacity>

  );



  return (

    <SafeAreaView style={styles.container}>

      <ScrollView>

        <View style={styles.header}>

          <TouchableOpacity>

            <Icon name="menu-outline" size={24} color="#fff" />

          </TouchableOpacity>

          <Text style={styles.headerTitle}>Discover</Text>

          <TouchableOpacity>

            <Icon name="notifications-outline" size={24} color="#fff" />

          </TouchableOpacity>

        </View>



        <View style={styles.heroSection}>

          <Text style={styles.heroTitle}>Study what you want</Text>

          <Text style={styles.heroSubtitle}>anytime anywhere</Text>

        </View>



        <View style={styles.featuredCourseCard}>

          <View style={styles.featuredCourseInfo}>

            <Text style={styles.featuredCourseCategory}>Interface Design</Text>

            <Text style={styles.featuredCourseTitle}>User interface for beginners</Text>

            <View style={styles.ratingContainer}>

              <Icon name="star" size={16} color="#FFD700" />

              <Text style={styles.rating}>4.7 (1,242 Reviews)</Text>

            </View>

            <View style={styles.progressContainer}>

              <View style={[styles.progressBar, { width: '48%' }]} />

            </View>

            <Text style={styles.progressText}>48%</Text>

          </View>

          <Image source={require('../assets/snack-icon.png')} style={styles.featuredCourseImage} />

        </View>



        <View style={styles.popularCoursesSection}>

          <View style={styles.sectionHeader}>

            <Text style={styles.sectionTitle}>Popular Course</Text>

            <TouchableOpacity>

              <Text style={styles.seeAllButton}>See All</Text>

            </TouchableOpacity>

          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>

            {renderPopularCourse('Expert Wireframing for Mobile Design', 'Jerremy Mamika', '48', require('../assets/snack-icon.png'))}

            {renderPopularCourse('Bootstrapping Principles', 'Alexander Be', '48', require('../assets/snack-icon.png'))}

          </ScrollView>

        </View>

      </ScrollView>



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="home" size={24} color="#6C5CE7" />

          <Text style={[styles.tabLabel, styles.activeTabLabel]}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Statistics')}>

          <Icon name="stats-chart-outline" size={24} color="#999" />

          <Text style={styles.tabLabel}>Statistic</Text>

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

    backgroundColor: '#1E1E2E',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 16,

  },

  headerTitle: {

    fontSize: 20,

    fontWeight: 'bold',

    color: '#fff',

  },

  heroSection: {

    padding: 16,

  },

  heroTitle: {

    fontSize: 24,

    fontWeight: 'bold',

    color: '#fff',

  },

  heroSubtitle: {

    fontSize: 24,

    fontWeight: 'bold',

    color: '#fff',

    marginTop: 4,

  },

  featuredCourseCard: {

    backgroundColor: '#fff',

    borderRadius: 12,

    margin: 16,

    padding: 16,

    flexDirection: 'row',

  },

  featuredCourseInfo: {

    flex: 1,

  },

  featuredCourseCategory: {

    color: '#6C5CE7',

    fontWeight: '500',

    marginBottom: 4,

  },

  featuredCourseTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 8,

  },

  ratingContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 8,

  },

  rating: {

    marginLeft: 4,

  },

  progressContainer: {

    height: 4,

    backgroundColor: '#E0E0E0',

    borderRadius: 2,

    marginBottom: 4,

  },

  progressBar: {

    height: 4,

    backgroundColor: '#6C5CE7',

    borderRadius: 2,

  },

  progressText: {

    alignSelf: 'flex-end',

  },

  featuredCourseImage: {

    width: 100,

    height: 100,

    borderRadius: 8,

  },

  popularCoursesSection: {

    marginTop: 16,

  },

  sectionHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 16,

    marginBottom: 12,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    color: '#fff',

  },

  seeAllButton: {

    color: '#6C5CE7',

  },

  popularCourseItem: {

    width: 240,

    backgroundColor: '#fff',

    borderRadius: 12,

    marginLeft: 16,

    marginBottom: 16,

    overflow: 'hidden',

  },

  popularCourseImage: {

    width: '100%',

    height: 120,

  },

  popularCourseInfo: {

    padding: 12,

  },

  popularCourseCategory: {

    color: '#6C5CE7',

    marginBottom: 4,

  },

  popularCourseTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 4,

  },

  popularCourseInstructor: {

    color: '#666',

    marginBottom: 4,

  },

  popularCoursePrice: {

    fontWeight: 'bold',

  },

  favoriteButton: {

    position: 'absolute',

    top: 8,

    right: 8,

    backgroundColor: '#fff',

    borderRadius: 16,

    padding: 4,

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#333',

    paddingVertical: 8,

    backgroundColor: '#1E1E2E',

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



export default DiscoverScreen;