import React, { useState } from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native';



const ClassroomScreen = () => {

  const [activeTab, setActiveTab] = useState('Description');

  const navigation = useNavigation();



  const renderTabContent = () => {

    switch (activeTab) {

      case 'Description':

        return (

          <View style={styles.descriptionContainer}>

            <Text style={styles.descriptionTitle}>About this class</Text>

            <Text style={styles.descriptionText}>

              Force: The push or pull on an object with mass that causes it to change its velocity.



              Force is a vector quantity capable of changing the state of rest or motion of a particular body.

              It has a magnitude and a direction. The direction in which the force is applied is known as the direction of the force and the application of force is in a point where force is applied.

            </Text>

          </View>

        );

      case 'Discussion':

        navigation.navigate('Discussion');

        return null;

      case 'Resources':

        return <Text style={styles.tabContent}>Resources content</Text>;

      default:

        return null;

    }

  };



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.date}>Today, 17 Sept</Text>

        <View style={styles.titleContainer}>

          <Text style={styles.title}>Classroom</Text>

          <TouchableOpacity style={styles.addButton}>

            <Text style={styles.addButtonText}>Add Class</Text>

          </TouchableOpacity>

        </View>

      </View>



      <View style={styles.classInfo}>

        <Image source={require('../assets/snack-icon.png')} style={styles.classImage} />

        <View style={styles.classDetails}>

          <Text style={styles.subject}>Physics</Text>

          <Text style={styles.chapter}>Chapter 3: Force</Text>

          <Text style={styles.instructor}>Alex Jesus</Text>

          <Text style={styles.students}>45 enrolled</Text>

        </View>

      </View>



      <View style={styles.tabs}>

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



      <ScrollView style={styles.content}>

        {renderTabContent()}

      </ScrollView>



      <View style={styles.bottomNav}>

        {['Home', 'Tasks', 'Classroom', 'Chat'].map((item) => (

          <TouchableOpacity

            key={item}

            style={styles.navItem}

            onPress={() => navigation.navigate(item === 'Home' ? 'Home' : item)}

          >

            <Icon name={getIconName(item)} size={24} color={item === 'Classroom' ? '#4CAF50' : '#888'} />

            <Text style={[styles.navText, item === 'Classroom' && styles.activeNavText]}>{item}</Text>

          </TouchableOpacity>

        ))}

      </View>

    </View>

  );

};



const getIconName = (item) => {

  switch (item) {

    case 'Home':

      return 'home';

    case 'Tasks':

      return 'assignment';

    case 'Classroom':

      return 'class';

    case 'Chat':

      return 'chat';

    default:

      return 'circle';

  }

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F5F5F5',

  },

  header: {

    backgroundColor: '#4CAF50',

    padding: 16,

  },

  date: {

    color: '#FFF',

    fontSize: 14,

  },

  titleContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginTop: 8,

  },

  title: {

    color: '#FFF',

    fontSize: 24,

    fontWeight: 'bold',

  },

  addButton: {

    backgroundColor: '#FFF',

    borderRadius: 20,

    paddingVertical: 6,

    paddingHorizontal: 12,

  },

  addButtonText: {

    color: '#4CAF50',

    fontWeight: 'bold',

  },

  classInfo: {

    flexDirection: 'row',

    backgroundColor: '#FFF',

    padding: 16,

    marginTop: 16,

    marginHorizontal: 16,

    borderRadius: 8,

    elevation: 2,

  },

  classImage: {

    width: 80,

    height: 80,

    borderRadius: 8,

    marginRight: 16,

  },

  classDetails: {

    flex: 1,

  },

  subject: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 4,

  },

  chapter: {

    fontSize: 16,

    color: '#555',

    marginBottom: 4,

  },

  instructor: {

    fontSize: 14,

    color: '#777',

    marginBottom: 2,

  },

  students: {

    fontSize: 14,

    color: '#777',

  },

  tabs: {

    flexDirection: 'row',

    marginTop: 16,

    marginHorizontal: 16,

  },

  tab: {

    flex: 1,

    paddingVertical: 12,

    alignItems: 'center',

    borderBottomWidth: 2,

    borderBottomColor: 'transparent',

  },

  activeTab: {

    borderBottomColor: '#4CAF50',

  },

  tabText: {

    fontSize: 16,

    color: '#777',

  },

  activeTabText: {

    color: '#4CAF50',

    fontWeight: 'bold',

  },

  content: {

    flex: 1,

    marginTop: 16,

  },

  descriptionContainer: {

    backgroundColor: '#FFF',

    padding: 16,

    marginHorizontal: 16,

    borderRadius: 8,

    elevation: 2,

  },

  descriptionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 8,

  },

  descriptionText: {

    fontSize: 14,

    color: '#333',

    lineHeight: 20,

  },

  tabContent: {

    fontSize: 16,

    color: '#333',

    padding: 16,

  },

  bottomNav: {

    flexDirection: 'row',

    backgroundColor: '#FFF',

    paddingVertical: 8,

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

  },

  navItem: {

    flex: 1,

    alignItems: 'center',

  },

  navText: {

    fontSize: 12,

    color: '#888',

    marginTop: 4,

  },

  activeNavText: {

    color: '#4CAF50',

  },

});



export default ClassroomScreen;