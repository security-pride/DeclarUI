import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const ClassroomScreen = ({ navigation }) => {

  const [activeTab, setActiveTab] = useState('Description');



  const renderTabContent = () => {

    switch (activeTab) {

      case 'Description':

        return (

          <View style={styles.tabContent}>

            <Text style={styles.tabTitle}>About this class</Text>

            <Text style={styles.tabDescription}>

              Force: The push or pull on an object with mass that causes it to change its velocity.

              {"\n\n"}

              Force is an external agent capable of changing the state of rest or motion of a particular body.

              It has a magnitude and a direction. The direction in which the force is applied is known as the direction of the force and the application of force is the point where force is applied.

            </Text>

          </View>

        );

      case 'Discussion':

        return (

          <View style={styles.tabContent}>

            <Text style={styles.tabTitle}>Discussion</Text>

            <Text style={styles.tabDescription}>No discussions yet.</Text>

          </View>

        );

      case 'Resources':

        return (

          <View style={styles.tabContent}>

            <Text style={styles.tabTitle}>Resources</Text>

            <Text style={styles.tabDescription}>No resources available.</Text>

          </View>

        );

      default:

        return null;

    }

  };



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.dateText}>Today, 17 Sept</Text>

        <Text style={styles.title}>Classroom</Text>

        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddClass')}>

          <Text style={styles.addButtonText}>+ Add Class</Text>

        </TouchableOpacity>

      </View>



      <ScrollView style={styles.content}>

        <ImageBackground

          source={require('../assets/snack-icon.png')}

          style={styles.classImage}

          imageStyle={styles.classImageStyle}

        >

          <View style={styles.overlay} />

        </ImageBackground>



        <View style={styles.classDetails}>

          <View style={styles.subjectRow}>

            <Icon name="science" size={20} color="#8A7AFF" />

            <Text style={styles.subjectText}>Physics</Text>

          </View>

          <View style={styles.chapterRow}>

            <Icon name="book" size={20} color="#4CAF50" />

            <Text style={styles.chapterText}>Chapter 3: Force</Text>

          </View>

          <View style={styles.instructorRow}>

            <Icon name="person" size={20} color="#888" />

            <Text style={styles.instructorText}>Alex Jesus</Text>

          </View>

          <View style={styles.enrollmentRow}>

            <Icon name="group" size={20} color="#888" />

            <Text style={styles.enrollmentText}>45 Enrolled</Text>

          </View>

        </View>



        <View style={styles.tabContainer}>

          {['Description', 'Discussion', 'Resources'].map((tab) => (

            <TouchableOpacity

              key={tab}

              style={[styles.tab, activeTab === tab && styles.activeTab]}

              onPress={() => setActiveTab(tab)}

            >

              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>

            </TouchableOpacity>

          ))}

        </View>



        {renderTabContent()}

      </ScrollView>



      <View style={styles.navbar}>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>

          <Icon name="home" size={24} color="#888" />

          <Text style={styles.navText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Tasks')}>

          <Icon name="list" size={24} color="#888" />

          <Text style={styles.navText}>Tasks</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="class" size={24} color="#4CAF50" />

          <Text style={[styles.navText, styles.activeNavText]}>Classroom</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Chat')}>

          <Icon name="chat" size={24} color="#888" />

          <Text style={styles.navText}>Chat</Text>

        </TouchableOpacity>

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

    paddingTop: 40,

    paddingHorizontal: 20,

    paddingBottom: 10,

    backgroundColor: '#FFF',

  },

  dateText: {

    fontSize: 14,

    color: '#888',

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    marginTop: 5,

  },

  addButton: {

    position: 'absolute',

    right: 20,

    top: 40,

    backgroundColor: '#4CAF50',

    paddingHorizontal: 15,

    paddingVertical: 8,

    borderRadius: 20,

  },

  addButtonText: {

    color: '#FFF',

    fontWeight: 'bold',

  },

  content: {

    flex: 1,

  },

  classImage: {

    height: 200,

    justifyContent: 'flex-end',

  },

  classImageStyle: {

    borderBottomLeftRadius: 20,

    borderBottomRightRadius: 20,

  },

  overlay: {

    ...StyleSheet.absoluteFillObject,

    backgroundColor: 'rgba(0,0,0,0.2)',

    borderBottomLeftRadius: 20,

    borderBottomRightRadius: 20,

  },

  classDetails: {

    backgroundColor: '#FFF',

    borderRadius: 10,

    padding: 15,

    marginHorizontal: 20,

    marginTop: -30,

  },

  subjectRow: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 5,

  },

  subjectText: {

    fontSize: 18,

    fontWeight: 'bold',

    marginLeft: 10,

    color: '#8A7AFF',

  },

  chapterRow: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 5,

  },

  chapterText: {

    fontSize: 16,

    marginLeft: 10,

    color: '#4CAF50',

  },

  instructorRow: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 5,

  },

  instructorText: {

    fontSize: 14,

    marginLeft: 10,

    color: '#888',

  },

  enrollmentRow: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  enrollmentText: {

    fontSize: 14,

    marginLeft: 10,

    color: '#888',

  },

  tabContainer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    marginTop: 20,

    borderBottomWidth: 1,

    borderBottomColor: '#E0E0E0',

  },

  tab: {

    paddingVertical: 10,

    paddingHorizontal: 20,

  },

  activeTab: {

    borderBottomWidth: 2,

    borderBottomColor: '#4CAF50',

  },

  tabText: {

    fontSize: 16,

    color: '#888',

  },

  activeTabText: {

    color: '#4CAF50',

    fontWeight: 'bold',

  },

  tabContent: {

    padding: 20,

  },

  tabTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  tabDescription: {

    fontSize: 14,

    lineHeight: 20,

    color: '#333',

  },

  navbar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    backgroundColor: '#FFF',

    paddingVertical: 10,

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

  },

  navItem: {

    alignItems: 'center',

  },

  navText: {

    fontSize: 12,

    marginTop: 5,

    color: '#888',

  },

  activeNavText: {

    color: '#4CAF50',

  },

});



export default ClassroomScreen;