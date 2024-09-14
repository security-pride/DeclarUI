import React from 'react';

import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {

  const navigation = useNavigation();



  const activities = [

    {

      title: 'How to Headspace',

      type: 'Video',

      duration: '2 min',

      image: require('../assets/snack-icon.png'),

    },

    {

      title: 'Rooted in the Present',

      type: 'Mindful Activity',

      duration: '2 min',

      image: require('../assets/snack-icon.png'),

      locked: true,

    },

    {

      title: 'Enjoying the Unknown',

      type: "Today's Meditation",

      duration: '3-20 min',

      image: require('../assets/snack-icon.png'),

      locked: true,

      meditating: 327,

    },

  ];



  const renderActivity = (activity, index) => (

    <TouchableOpacity key={index} style={styles.activityCard}>

      <View style={styles.activityInfo}>

        <View style={styles.activityTitleRow}>

          {activity.locked && <Image source={require('../assets/snack-icon.png')} style={styles.lockIcon} />}

          <Text style={styles.activityTitle}>{activity.title}</Text>

        </View>

        <Text style={styles.activityType}>{activity.type}</Text>

        <Text style={styles.activityDuration}>{activity.duration}</Text>

        <TouchableOpacity style={styles.moreButton}>

          <Text style={styles.moreButtonText}>•••</Text>

        </TouchableOpacity>

      </View>

      <Image source={activity.image} style={styles.activityImage} />

      {activity.meditating && (

        <View style={styles.meditatingOverlay}>

          <Text style={styles.meditatingText}>{activity.meditating} meditating</Text>

        </View>

      )}

    </TouchableOpacity>

  );



  return (

    <SafeAreaView style={styles.container}>

      <ScrollView contentContainerStyle={styles.scrollContent}>

        <View style={styles.header}>

          <Text style={styles.greeting}>Good Evening, 子路</Text>

          <View style={styles.headerIcons}>

            <TouchableOpacity>

              <Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />

            </TouchableOpacity>

            <TouchableOpacity>

              <Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />

            </TouchableOpacity>

          </View>

        </View>

        

        <Text style={styles.sectionTitle}>Start your day</Text>

        {activities.map(renderActivity)}

        

        <Text style={styles.sectionTitle}>Your afternoon lift</Text>

        {/* Additional afternoon activities would go here */}

      </ScrollView>

      

      <View style={styles.tabBar}>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={[styles.tabText, styles.activeTabText]}>Today</Text>

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

  scrollContent: {

    padding: 20,

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 20,

  },

  greeting: {

    color: 'white',

    fontSize: 24,

    fontWeight: 'bold',

  },

  headerIcons: {

    flexDirection: 'row',

  },

  headerIcon: {

    width: 24,

    height: 24,

    marginLeft: 15,

  },

  sectionTitle: {

    color: 'white',

    fontSize: 22,

    fontWeight: 'bold',

    marginBottom: 15,

  },

  activityCard: {

    backgroundColor: '#1E2A59',

    borderRadius: 15,

    marginBottom: 15,

    overflow: 'hidden',

  },

  activityInfo: {

    padding: 15,

  },

  activityTitleRow: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  lockIcon: {

    width: 16,

    height: 16,

    marginRight: 5,

  },

  activityTitle: {

    color: 'white',

    fontSize: 18,

    fontWeight: 'bold',

  },

  activityType: {

    color: '#8E8E93',

    fontSize: 14,

  },

  activityDuration: {

    color: '#8E8E93',

    fontSize: 14,

  },

  moreButton: {

    position: 'absolute',

    right: 15,

    top: 15,

  },

  moreButtonText: {

    color: 'white',

    fontSize: 18,

  },

  activityImage: {

    width: '100%',

    height: 120,

    resizeMode: 'cover',

  },

  meditatingOverlay: {

    position: 'absolute',

    bottom: 0,

    left: 0,

    right: 0,

    backgroundColor: 'rgba(0,0,0,0.6)',

    padding: 5,

  },

  meditatingText: {

    color: 'white',

    fontSize: 12,

    textAlign: 'center',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    backgroundColor: '#1E2A59',

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

  tabText: {

    color: '#8E8E93',

    fontSize: 12,

  },

  activeTab: {

    borderTopWidth: 2,

    borderTopColor: '#3498DB',

  },

  activeTabText: {

    color: '#3498DB',

  },

});



export default HomeScreen;