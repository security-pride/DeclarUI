import React, { useState } from 'react';

import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const MoveScreen = () => {

  const navigation = useNavigation();

  const [activeTab, setActiveTab] = useState('Featured');



  const featuredWorkouts = [

    { title: 'Stress Release', duration: '29 min', locked: true },

    { title: 'Day 1', duration: '22 min', locked: true },

  ];



  const renderWorkoutItem = (workout, index) => (

    <TouchableOpacity key={index} style={styles.workoutItem}>

      <Image source={require('../assets/snack-icon.png')} style={styles.workoutImage} />

      <View style={styles.workoutInfo}>

        <View style={styles.workoutTitleRow}>

          {workout.locked && <Image source={require('../assets/snack-icon.png')} style={styles.lockIcon} />}

          <Text style={styles.workoutTitle}>{workout.title}</Text>

        </View>

        <Text style={styles.workoutDuration}>Workout • {workout.duration}</Text>

      </View>

      <TouchableOpacity style={styles.arrowButton}>

        <Text style={styles.arrowText}>›</Text>

      </TouchableOpacity>

    </TouchableOpacity>

  );



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>

          <Text style={styles.backButtonText}>‹</Text>

        </TouchableOpacity>

        <Text style={styles.headerTitle}>Move</Text>

      </View>



      <ScrollView contentContainerStyle={styles.scrollContent}>

        <View style={styles.featuredSection}>

          <Image source={require('../assets/snack-icon.png')} style={styles.featuredImage} />

          <View style={styles.featuredOverlay}>

            <Text style={styles.featuredLabel}>Featured</Text>

            <Text style={styles.featuredTitle}>Easy Evening Stretch</Text>

            <Text style={styles.featuredDuration}>Workout • 9 min</Text>

            <TouchableOpacity style={styles.playButton}>

              <Image source={require('../assets/snack-icon.png')} style={styles.lockIcon} />

              <Text style={styles.playButtonText}>Play</Text>

            </TouchableOpacity>

          </View>

        </View>



        <View style={styles.tabContainer}>

          <TouchableOpacity

            style={[styles.tab, activeTab === 'Recent' && styles.activeTab]}

            onPress={() => setActiveTab('Recent')}

          >

            <Text style={[styles.tabText, activeTab === 'Recent' && styles.activeTabText]}>Recent</Text>

          </TouchableOpacity>

          <TouchableOpacity

            style={[styles.tab, activeTab === 'Featured' && styles.activeTab]}

            onPress={() => setActiveTab('Featured')}

          >

            <Text style={[styles.tabText, activeTab === 'Featured' && styles.activeTabText]}>Featured</Text>

          </TouchableOpacity>

        </View>



        {featuredWorkouts.map(renderWorkoutItem)}

      </ScrollView>



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Today</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Explore')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Explore</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Profile')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>子路</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#151C3B',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

  },

  backButton: {

    padding: 8,

  },

  backButtonText: {

    color: 'white',

    fontSize: 24,

    fontWeight: 'bold',

  },

  headerTitle: {

    color: 'white',

    fontSize: 20,

    fontWeight: 'bold',

    marginLeft: 16,

  },

  scrollContent: {

    flexGrow: 1,

  },

  featuredSection: {

    height: 300,

    position: 'relative',

  },

  featuredImage: {

    width: '100%',

    height: '100%',

    resizeMode: 'cover',

  },

  featuredOverlay: {

    position: 'absolute',

    bottom: 0,

    left: 0,

    right: 0,

    padding: 16,

    backgroundColor: 'rgba(0,0,0,0.5)',

  },

  featuredLabel: {

    color: 'white',

    fontSize: 12,

    backgroundColor: '#3498DB',

    alignSelf: 'flex-start',

    paddingHorizontal: 8,

    paddingVertical: 4,

    borderRadius: 4,

    marginBottom: 8,

  },

  featuredTitle: {

    color: 'white',

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 4,

  },

  featuredDuration: {

    color: 'white',

    fontSize: 14,

    marginBottom: 12,

  },

  playButton: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#3498DB',

    paddingVertical: 8,

    paddingHorizontal: 16,

    borderRadius: 20,

    alignSelf: 'flex-start',

  },

  playButtonText: {

    color: 'white',

    fontSize: 16,

    fontWeight: 'bold',

    marginLeft: 8,

  },

  tabContainer: {

    flexDirection: 'row',

    borderBottomWidth: 1,

    borderBottomColor: '#2C3E50',

    marginTop: 16,

  },

  tab: {

    flex: 1,

    paddingVertical: 12,

    alignItems: 'center',

  },

  activeTab: {

    borderBottomWidth: 2,

    borderBottomColor: '#3498DB',

  },

  tabText: {

    color: '#8E8E93',

    fontSize: 16,

  },

  activeTabText: {

    color: '#3498DB',

    fontWeight: 'bold',

  },

  workoutItem: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#2C3E50',

  },

  workoutImage: {

    width: 60,

    height: 60,

    borderRadius: 8,

    marginRight: 16,

  },

  workoutInfo: {

    flex: 1,

  },

  workoutTitleRow: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  lockIcon: {

    width: 16,

    height: 16,

    marginRight: 8,

  },

  workoutTitle: {

    color: 'white',

    fontSize: 18,

    fontWeight: 'bold',

  },

  workoutDuration: {

    color: '#8E8E93',

    fontSize: 14,

    marginTop: 4,

  },

  arrowButton: {

    padding: 8,

  },

  arrowText: {

    color: '#8E8E93',

    fontSize: 20,

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#2C3E50',

    paddingVertical: 8,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

    marginBottom: 4,

  },

});



export default MoveScreen;