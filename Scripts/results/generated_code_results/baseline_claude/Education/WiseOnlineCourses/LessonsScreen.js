import React from 'react';

import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const LessonItem = ({ number, title, duration, description }) => (

  <View style={styles.lessonItem}>

    <View style={styles.lessonHeader}>

      <Image source={require('../assets/snack-icon.png')} style={styles.lessonThumbnail} />

      <View style={styles.lessonInfo}>

        <Text style={styles.lessonNumber}>Lesson {number}</Text>

        <Text style={styles.lessonTitle}>{title}</Text>

      </View>

      <Text style={styles.lessonDuration}>{duration}</Text>

    </View>

    <Text style={styles.lessonDescription}>{description}</Text>

    <TouchableOpacity style={styles.downloadButton}>

      <Text style={styles.downloadButtonText}>DOWNLOAD</Text>

      <Image source={require('../assets/snack-icon.png')} style={styles.downloadIcon} />

    </TouchableOpacity>

  </View>

);



const LessonsScreen = () => {

  const navigation = useNavigation();



  const lessons = [

    {

      number: 1,

      title: 'What is Advertising',

      duration: '08:12',

      description: 'Praesent facilisis dolor sapien, vel sodales augue mollis ut. Mauris venenatis magna eu tortor posuere luctus. Aenean tincidunt turpis sed dui aliquam vehicula.',

    },

    {

      number: 2,

      title: 'Working With Brands',

      duration: '14:10',

      description: 'Praesent facilisis dolor sapien, vel sodales augue mollis ut. Mauris venenatis magna eu tortor posuere luctus. Aenean tincidunt turpis sed dui aliquam vehicula.',

    },

    {

      number: 3,

      title: '10 things you shouldn\'t do!',

      duration: '13:20',

      description: 'Praesent facilisis dolor sapien, vel sodales augue mollis ut. Mauris venenatis magna eu tortor posuere luctus. Aenean tincidunt turpis sed dui aliquam vehicula.',

    },

  ];



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

        </TouchableOpacity>

        <View style={styles.tabContainer}>

          <TouchableOpacity onPress={() => navigation.navigate('About')}>

            <Text style={styles.tabText}>About</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.activeTab}>

            <Text style={styles.activeTabText}>Lessons</Text>

          </TouchableOpacity>

        </View>

        <TouchableOpacity style={styles.expandButton}>

          <Text style={styles.expandButtonText}>-</Text>

        </TouchableOpacity>

      </View>

      <ScrollView style={styles.content}>

        {lessons.map((lesson, index) => (

          <LessonItem key={index} {...lesson} />

        ))}

      </ScrollView>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#1E1E1E',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 20,

  },

  backIcon: {

    width: 24,

    height: 24,

    tintColor: 'white',

  },

  tabContainer: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  tabText: {

    color: '#999999',

    fontSize: 18,

    marginRight: 20,

  },

  activeTab: {

    borderBottomWidth: 2,

    borderBottomColor: '#FFD700',

  },

  activeTabText: {

    color: 'white',

    fontSize: 18,

    fontWeight: 'bold',

  },

  expandButton: {

    width: 30,

    height: 30,

    borderRadius: 15,

    backgroundColor: '#FFD700',

    justifyContent: 'center',

    alignItems: 'center',

  },

  expandButtonText: {

    color: 'black',

    fontSize: 20,

    fontWeight: 'bold',

  },

  content: {

    flex: 1,

    paddingHorizontal: 20,

  },

  lessonItem: {

    marginBottom: 20,

    backgroundColor: '#2C2C2C',

    borderRadius: 10,

    padding: 15,

  },

  lessonHeader: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 10,

  },

  lessonThumbnail: {

    width: 60,

    height: 60,

    borderRadius: 5,

  },

  lessonInfo: {

    flex: 1,

    marginLeft: 15,

  },

  lessonNumber: {

    color: '#999999',

    fontSize: 14,

  },

  lessonTitle: {

    color: 'white',

    fontSize: 16,

    fontWeight: 'bold',

  },

  lessonDuration: {

    color: '#999999',

    fontSize: 12,

  },

  lessonDescription: {

    color: '#999999',

    fontSize: 14,

    marginBottom: 10,

  },

  downloadButton: {

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'flex-end',

  },

  downloadButtonText: {

    color: 'white',

    fontSize: 14,

    fontWeight: 'bold',

    marginRight: 5,

  },

  downloadIcon: {

    width: 20,

    height: 20,

    tintColor: 'white',

  },

});



export default LessonsScreen;