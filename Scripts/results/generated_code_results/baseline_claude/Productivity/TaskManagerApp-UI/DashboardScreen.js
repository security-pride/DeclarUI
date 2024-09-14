import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Svg, { Circle, Path } from 'react-native-svg';



const DashboardScreen = () => {

  const navigation = useNavigation();



  const taskData = [

    { id: 1, title: 'Total task', count: 55, icon: 'folder', color: '#E0E0E0' },

    { id: 2, title: 'Completed', count: 13, icon: 'check', color: '#6A5ACD' },

    { id: 3, title: 'Working on', count: 25, icon: 'activity', color: '#4CAF50' },

    { id: 4, title: 'Pending', count: 17, icon: 'plus-circle', color: '#FF7043' },

  ];



  const renderTaskItem = ({ id, title, count, icon, color }) => (

    <View key={id} style={styles.taskItem}>

      <View style={[styles.iconContainer, { backgroundColor: color }]}>

        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

      </View>

      <View style={styles.taskInfo}>

        <Text style={styles.taskTitle}>{title}</Text>

        <Text style={styles.taskCount}>{count}</Text>

      </View>

    </View>

  );



  const renderDonutChart = () => (

    <Svg height="200" width="200" viewBox="0 0 100 100">

      <Circle cx="50" cy="50" r="45" fill="transparent" stroke="#E0E0E0" strokeWidth="10" />

      <Path

        d="M50 5 A45 45 0 0 1 95 50"

        fill="none"

        stroke="#FF7043"

        strokeWidth="10"

      />

      <Path

        d="M95 50 A45 45 0 0 1 78.5 86.6"

        fill="none"

        stroke="#6A5ACD"

        strokeWidth="10"

      />

      <Path

        d="M78.5 86.6 A45 45 0 0 1 21.5 86.6"

        fill="none"

        stroke="#4CAF50"

        strokeWidth="10"

      />

      <Text x="50" y="50" textAnchor="middle" fill="#333" fontSize="12" dy=".3em">56%</Text>

    </Svg>

  );



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.title}>Dashboard</Text>

        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

      </View>



      <View style={styles.chartContainer}>

        {renderDonutChart()}

      </View>



      <View style={styles.taskList}>

        {taskData.map(renderTaskItem)}

      </View>



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.addButton}>

          <Text style={styles.addButtonText}>+</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F0F0F5',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 20,

    paddingTop: 20,

    paddingBottom: 10,

  },

  title: {

    fontSize: 28,

    fontWeight: 'bold',

    color: '#1E1E1E',

  },

  avatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

  },

  chartContainer: {

    alignItems: 'center',

    justifyContent: 'center',

    marginVertical: 20,

  },

  taskList: {

    paddingHorizontal: 20,

  },

  taskItem: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: 'white',

    borderRadius: 15,

    padding: 15,

    marginBottom: 10,

  },

  iconContainer: {

    width: 40,

    height: 40,

    borderRadius: 10,

    justifyContent: 'center',

    alignItems: 'center',

    marginRight: 15,

  },

  icon: {

    width: 24,

    height: 24,

    tintColor: 'white',

  },

  taskInfo: {

    flex: 1,

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

  },

  taskTitle: {

    fontSize: 16,

    fontWeight: '500',

    color: '#333',

  },

  taskCount: {

    fontSize: 18,

    fontWeight: 'bold',

    color: '#1E1E1E',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    backgroundColor: '#6A5ACD',

    paddingVertical: 10,

    borderTopLeftRadius: 20,

    borderTopRightRadius: 20,

    position: 'absolute',

    bottom: 0,

    left: 0,

    right: 0,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

    tintColor: '#FFFFFF',

  },

  addButton: {

    backgroundColor: '#FF6B6B',

    width: 50,

    height: 50,

    borderRadius: 25,

    justifyContent: 'center',

    alignItems: 'center',

    elevation: 5,

  },

  addButtonText: {

    fontSize: 30,

    color: 'white',

  },

});



export default DashboardScreen;