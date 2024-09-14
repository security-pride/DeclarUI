import React from 'react';

import { View, Text, TextInput, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const DiscoverScreen = () => {

  const navigation = useNavigation();



  const CourseCard = ({ title, subtitle, rating, price }) => (

    <TouchableOpacity style={styles.courseCard} onPress={() => navigation.navigate('CourseDetail')}>

      <View style={styles.courseIconContainer}>

        <Image source={require('../assets/snack-icon.png')} style={styles.courseIcon} />

      </View>

      <View style={styles.courseInfo}>

        <Text style={styles.courseSubtitle}>{subtitle}</Text>

        <Text style={styles.courseTitle}>{title}</Text>

        <View style={styles.courseRatingPrice}>

          <View style={styles.ratingContainer}>

            <Text style={styles.starIcon}>★</Text>

            <Text style={styles.ratingText}>{rating}</Text>

          </View>

          <Text style={styles.priceText}>${price}</Text>

        </View>

      </View>

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <ScrollView>

        <View style={styles.header}>

          <Text style={styles.title}>Discover the best{'\n'}course that suits to you</Text>

          <TouchableOpacity style={styles.notificationButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.notificationIcon} />

            <View style={styles.notificationBadge} />

          </TouchableOpacity>

        </View>



        <View style={styles.searchContainer}>

          <View style={styles.searchInputContainer}>

            <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />

            <TextInput

              style={styles.searchInput}

              placeholder="Search course..."

              placeholderTextColor="#999"

            />

          </View>

          <TouchableOpacity style={styles.filterButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.filterIcon} />

          </TouchableOpacity>

        </View>



        <View style={styles.sectionHeader}>

          <Text style={styles.sectionTitle}>Course of the weeks</Text>

          <TouchableOpacity>

            <Text style={styles.seeAllText}>See all</Text>

          </TouchableOpacity>

        </View>



        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.courseList}>

          <CourseCard

            title="How to make modern poster for Beginner"

            subtitle="GRAPHICS DESIGN"

            rating="4.9"

            price="12.00"

          />

          <CourseCard

            title="How to make Design system in easy waen"

            subtitle="UI/UX DESIGN"

            rating="4.9"

            price="12.00"

          />

        </ScrollView>



        <View style={styles.sectionHeader}>

          <Text style={styles.sectionTitle}>Suits to you</Text>

          <TouchableOpacity>

            <Text style={styles.seeAllText}>See all</Text>

          </TouchableOpacity>

        </View>



        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.courseList}>

          <CourseCard

            title="How to make modern poster"

            subtitle="GRAPHICS DESIGN"

            rating="4.9"

            price="12.00"

          />

          <CourseCard

            title="How to make Design system"

            subtitle="UI/UX DESIGN"

            rating="4.9"

            price="12.00"

          />

        </ScrollView>

      </ScrollView>



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

      </View>

    </View>

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

    alignItems: 'flex-start',

    paddingHorizontal: 20,

    paddingTop: 40,

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    maxWidth: '80%',

  },

  notificationButton: {

    position: 'relative',

  },

  notificationIcon: {

    width: 24,

    height: 24,

  },

  notificationBadge: {

    position: 'absolute',

    top: -4,

    right: -4,

    width: 8,

    height: 8,

    borderRadius: 4,

    backgroundColor: 'red',

  },

  searchContainer: {

    flexDirection: 'row',

    paddingHorizontal: 20,

    marginTop: 20,

  },

  searchInputContainer: {

    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#f0f0f0',

    borderRadius: 8,

    paddingHorizontal: 10,

    marginRight: 10,

  },

  searchIcon: {

    width: 20,

    height: 20,

    marginRight: 10,

  },

  searchInput: {

    flex: 1,

    height: 40,

  },

  filterButton: {

    backgroundColor: '#000',

    borderRadius: 8,

    padding: 10,

  },

  filterIcon: {

    width: 20,

    height: 20,

    tintColor: '#fff',

  },

  sectionHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 20,

    marginTop: 20,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  seeAllText: {

    color: '#999',

  },

  courseList: {

    paddingLeft: 20,

    marginTop: 10,

  },

  courseCard: {

    width: 200,

    marginRight: 15,

    backgroundColor: '#f9f9f9',

    borderRadius: 8,

    padding: 10,

  },

  courseIconContainer: {

    width: 40,

    height: 40,

    borderRadius: 8,

    backgroundColor: '#e0e0e0',

    justifyContent: 'center',

    alignItems: 'center',

    marginBottom: 10,

  },

  courseIcon: {

    width: 24,

    height: 24,

  },

  courseInfo: {

    flex: 1,

  },

  courseSubtitle: {

    fontSize: 12,

    color: '#999',

    marginBottom: 5,

  },

  courseTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  courseRatingPrice: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

  },

  ratingContainer: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  starIcon: {

    color: '#FFD700',

    marginRight: 5,

  },

  ratingText: {

    fontSize: 12,

  },

  priceText: {

    fontSize: 14,

    fontWeight: 'bold',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

    paddingVertical: 10,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

  },

});



export default DiscoverScreen;