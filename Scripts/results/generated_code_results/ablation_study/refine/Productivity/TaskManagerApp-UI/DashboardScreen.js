import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { PieChart } from 'react-native-svg-charts';



const DashboardScreen = ({ navigation }) => {

  const pieData = [

    { value: 15, color: '#FF8F6B', key: 'pending' },

    { value: 13, color: '#8875FF', key: 'completed' },

    { value: 28, color: '#4CAF50', key: 'working' },

    { value: 44, color: '#F1F5FF', key: 'empty' },

  ];



  const taskData = [

    { icon: 'folder-open', label: 'Total task', count: 55, color: '#E9ECEF' },

    { icon: 'check-circle', label: 'Completed', count: 13, color: '#8875FF' },

    { icon: 'trending-up', label: 'Working on', count: 25, color: '#4CAF50' },

    { icon: 'access-time', label: 'Pending', count: 17, color: '#FF8F6B' },

  ];



  return (

    <View style={styles.container}>

      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>

        <Text style={styles.title}>Dashboard</Text>

        <Image

          source={require('../assets/snack-icon.png')}

          style={styles.avatar}

        />

      </View>

      <View style={styles.chartContainer}>

        <PieChart

          style={styles.pieChart}

          data={pieData}

          innerRadius="70%"

          padAngle={0}

        />

        <View style={styles.percentages}>

          {pieData.slice(0, 3).map((data, index) => (

            <Text key={index} style={[styles.percentageText, { color: data.color }]}>

              {data.value}%

            </Text>

          ))}

        </View>

      </View>

      <View style={styles.tasksContainer}>

        {taskData.map((task, index) => (

          <TouchableOpacity key={index} style={styles.taskItem}>

            <View style={[styles.iconContainer, { backgroundColor: task.color }]}>

              <Icon name={task.icon} size={24} color="#FFFFFF" />

            </View>

            <Text style={styles.taskLabel}>{task.label}</Text>

            <Text style={styles.taskCount}>{task.count}</Text>

          </TouchableOpacity>

        ))}

      </View>

      <View style={styles.bottomNav}>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="grid-view" size={24} color="#8875FF" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="check-circle-outline" size={24} color="#BDBDBD" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.addButton}>

          <Icon name="add" size={32} color="#FFFFFF" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="calendar-today" size={24} color="#BDBDBD" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="chat-bubble-outline" size={24} color="#BDBDBD" />

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F1F5FF',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 20,

    paddingTop: 60,

  },

  title: {

    fontSize: 32,

    fontWeight: 'bold',

    color: '#1D1D1D',

  },

  avatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

  },

  chartContainer: {

    alignItems: 'center',

    marginTop: 20,

  },

  pieChart: {

    height: 200,

    width: 200,

  },

  percentages: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    width: '100%',

    position: 'absolute',

    top: 85,

  },

  percentageText: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  tasksContainer: {

    marginTop: 40,

    paddingHorizontal: 20,

  },

  taskItem: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    borderRadius: 15,

    padding: 15,

    marginBottom: 15,

  },

  iconContainer: {

    width: 40,

    height: 40,

    borderRadius: 20,

    justifyContent: 'center',

    alignItems: 'center',

    marginRight: 15,

  },

  taskLabel: {

    flex: 1,

    fontSize: 16,

    color: '#1D1D1D',

  },

  taskCount: {

    fontSize: 16,

    fontWeight: 'bold',

    color: '#1D1D1D',

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    paddingVertical: 10,

    borderTopLeftRadius: 20,

    borderTopRightRadius: 20,

    position: 'absolute',

    bottom: 0,

    left: 0,

    right: 0,

  },

  navItem: {

    padding: 10,

  },

  addButton: {

    backgroundColor: '#8875FF',

    width: 56,

    height: 56,

    borderRadius: 28,

    justifyContent: 'center',

    alignItems: 'center',

    elevation: 5,

    marginTop: -30,

  },

});



export default DashboardScreen;