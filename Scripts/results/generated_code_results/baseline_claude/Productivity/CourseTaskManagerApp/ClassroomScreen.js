import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const ClassroomScreen = () => {

  const navigation = useNavigation();

  const [selectedTab, setSelectedTab] = useState('Description');



  const tabs = ['Description', 'Discussion', 'Resources'];



  return (

    <SafeAreaView style={styles.container}>

      <ScrollView>

        <View style={styles.header}>

          <View>

            <Text style={styles.dateText}>Today, 17 Sept</Text>

            <Text style={styles.titleText}>Classroom</Text>

          </View>

          <TouchableOpacity style={styles.addButton}>

            <Icon name="add" size={20} color="#fff" />

            <Text style={styles.addButtonText}>Add Class</Text>

          </TouchableOpacity>

        </View>



        <Image

          source={require('../assets/snack-icon.png')}

          style={styles.classImage}

        />



        <View style={styles.classInfo}>

          <View style={styles.subjectContainer}>

            <Icon name="book-outline" size={20} color="#6366F1" />

            <Text style={styles.subjectText}>Physics</Text>

          </View>

          <View style={styles.chapterContainer}>

            <Icon name="document-text-outline" size={20} color="#10B981" />

            <Text style={styles.chapterText}>Chapter 3: Force</Text>

          </View>

          <View style={styles.enrollmentContainer}>

            <Icon name="people-outline" size={20} color="#6B7280" />

            <Text style={styles.enrollmentText}>45 enrolled</Text>

          </View>

        </View>



        <View style={styles.tabContainer}>

          {tabs.map((tab) => (

            <TouchableOpacity

              key={tab}

              style={[styles.tab, selectedTab === tab && styles.selectedTab]}

              onPress={() => setSelectedTab(tab)}

            >

              <Text style={[styles.tabText, selectedTab === tab && styles.selectedTabText]}>

                {tab}

              </Text>

            </TouchableOpacity>

          ))}

        </View>



        {selectedTab === 'Description' && (

          <View style={styles.descriptionContainer}>

            <Text style={styles.descriptionTitle}>About this class</Text>

            <Text style={styles.descriptionText}>

              Force: The push or pull on an object with mass that causes it to change its velocity.

            </Text>

            <Text style={styles.descriptionText}>

              Force is an external agent capable of changing the state of rest or motion of a particular body.

            </Text>

            <Text style={styles.descriptionText}>

              It has a magnitude and a direction. The direction in which the force is applied is known as the direction of the force and the application of force is the point where force is applied.

            </Text>

          </View>

        )}

      </ScrollView>



      <View style={styles.bottomNav}>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>

          <Icon name="home-outline" size={24} color="#6B7280" />

          <Text style={styles.navText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Tasks')}>

          <Icon name="list-outline" size={24} color="#6B7280" />

          <Text style={styles.navText}>Tasks</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Classroom')}>

          <Icon name="school-outline" size={24} color="#10B981" />

          <Text style={[styles.navText, styles.activeNavText]}>Classroom</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Chat')}>

          <Icon name="chatbubble-outline" size={24} color="#6B7280" />

          <Text style={styles.navText}>Chat</Text>

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

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 20,

  },

  dateText: {

    fontSize: 14,

    color: '#6B7280',

  },

  titleText: {

    fontSize: 24,

    fontWeight: 'bold',

    color: '#111827',

  },

  addButton: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#10B981',

    paddingHorizontal: 12,

    paddingVertical: 8,

    borderRadius: 20,

  },

  addButtonText: {

    color: '#FFFFFF',

    marginLeft: 4,

    fontWeight: '600',

  },

  classImage: {

    width: '100%',

    height: 200,

    resizeMode: 'cover',

  },

  classInfo: {

    padding: 20,

  },

  subjectContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 10,

  },

  subjectText: {

    marginLeft: 8,

    fontSize: 16,

    fontWeight: '600',

    color: '#6366F1',

  },

  chapterContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 10,

  },

  chapterText: {

    marginLeft: 8,

    fontSize: 16,

    fontWeight: '600',

    color: '#10B981',

  },

  enrollmentContainer: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  enrollmentText: {

    marginLeft: 8,

    fontSize: 14,

    color: '#6B7280',

  },

  tabContainer: {

    flexDirection: 'row',

    borderBottomWidth: 1,

    borderBottomColor: '#E5E7EB',

  },

  tab: {

    flex: 1,

    paddingVertical: 12,

    alignItems: 'center',

  },

  selectedTab: {

    borderBottomWidth: 2,

    borderBottomColor: '#10B981',

  },

  tabText: {

    fontSize: 16,

    color: '#6B7280',

  },

  selectedTabText: {

    color: '#10B981',

    fontWeight: '600',

  },

  descriptionContainer: {

    padding: 20,

  },

  descriptionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 10,

    color: '#111827',

  },

  descriptionText: {

    fontSize: 14,

    color: '#4B5563',

    marginBottom: 10,

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#E5E7EB',

    paddingVertical: 10,

  },

  navItem: {

    alignItems: 'center',

  },

  navText: {

    fontSize: 12,

    color: '#6B7280',

    marginTop: 4,

  },

  activeNavText: {

    color: '#10B981',

  },

});



export default ClassroomScreen;