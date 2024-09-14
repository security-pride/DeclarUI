import React from 'react';

import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const CourseDetailScreen = () => {

  const navigation = useNavigation();



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Text style={styles.backButton}>{'<'}</Text>

        </TouchableOpacity>

        <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />

      </View>

      <Text style={styles.name}>John Wiseberg</Text>

      <Text style={styles.title}>Teach Advertising and Creativity</Text>

      

      <View style={styles.tabContainer}>

        <TouchableOpacity style={[styles.tab, styles.activeTab]}>

          <Text style={[styles.tabText, styles.activeTabText]}>About</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tab}>

          <Text style={styles.tabText}>Lessons</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.expandButton}>

          <Text style={styles.expandButtonText}>-</Text>

        </TouchableOpacity>

      </View>

      

      <View style={styles.content}>

        <Text style={styles.sectionTitle}>Create the big ideas</Text>

        <Text style={styles.sectionContent}>

          Mauris dignissim semper mattis. Fusce porttitor a mi at suscipit. Praesent facilisis

          dolor sapien, vel sodales augue mollis ut. Mauris venenatis magna eu tortor

          posuere luctus. Aenean tincidunt turpis sed dui aliquam vehicula. Praesent nec

          elit non dolor consectetur tincidunt sed in felis donec elementum.

        </Text>

        

        <Text style={styles.sectionTitle}>Or buy a good UI Kit</Text>

        <Text style={styles.sectionContent}>

          Mauris dignissim semper mattis. Fusce porttitor a mi at suscipit. Praesent facilisis

          dolor sapien vel sodales augue mollis ut.

        </Text>

        

        <TouchableOpacity style={styles.playButton}>

          <Text style={styles.playButtonText}>Play Lesson</Text>

        </TouchableOpacity>

      </View>

    </ScrollView>

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

  backButton: {

    color: 'white',

    fontSize: 24,

  },

  profileImage: {

    width: 60,

    height: 60,

    borderRadius: 30,

  },

  name: {

    color: 'white',

    fontSize: 24,

    fontWeight: 'bold',

    textAlign: 'center',

  },

  title: {

    color: '#CCCCCC',

    fontSize: 16,

    textAlign: 'center',

    marginTop: 5,

  },

  tabContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    backgroundColor: '#2C2C2C',

    borderRadius: 25,

    marginHorizontal: 20,

    marginTop: 20,

    padding: 5,

  },

  tab: {

    flex: 1,

    paddingVertical: 10,

    alignItems: 'center',

  },

  activeTab: {

    backgroundColor: '#3A3A3A',

    borderRadius: 20,

  },

  tabText: {

    color: '#999999',

    fontSize: 16,

  },

  activeTabText: {

    color: 'white',

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

    padding: 20,

  },

  sectionTitle: {

    color: 'white',

    fontSize: 18,

    fontWeight: 'bold',

    marginTop: 20,

    marginBottom: 10,

  },

  sectionContent: {

    color: '#CCCCCC',

    fontSize: 14,

    lineHeight: 20,

  },

  playButton: {

    backgroundColor: '#FFD700',

    borderRadius: 25,

    paddingVertical: 15,

    alignItems: 'center',

    marginTop: 30,

  },

  playButtonText: {

    color: 'black',

    fontSize: 18,

    fontWeight: 'bold',

  },

});



export default CourseDetailScreen;