import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

import { LineChart, BarChart } from 'react-native-chart-kit';



const StatisticsScreen = () => {

  const navigation = useNavigation();



  const priorityData = {

    labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],

    datasets: [

      {

        data: [4, 6, 8, 2, 6, 10, 6],

        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,

        strokeWidth: 2

      },

      {

        data: [2, 0, 6, 10, 2, 4, 8],

        color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,

        strokeWidth: 2

      },

      {

        data: [0, 8, 0, 4, 0, 0, 0],

        color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,

        strokeWidth: 2

      }

    ],

    legend: ['Personal', 'Private', 'Secret']

  };



  const activityData = {

    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],

    datasets: [

      {

        data: [20, 45, 28, 80, 99, 43, 50, 70, 60, 40],

      },

    ],

  };



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.title}>Graphic</Text>

      </View>



      <View style={styles.prioritySection}>

        <Text style={styles.sectionTitle}>Priority</Text>

        <Text style={styles.sectionSubtitle}>Task Perday</Text>

        <LineChart

          data={priorityData}

          width={350}

          height={220}

          chartConfig={{

            backgroundColor: '#ffffff',

            backgroundGradientFrom: '#ffffff',

            backgroundGradientTo: '#ffffff',

            decimalPlaces: 0,

            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,

            style: {

              borderRadius: 16,

            },

          }}

          bezier

          style={styles.chart}

        />

      </View>



      <View style={styles.activitySection}>

        <View style={styles.activityHeader}>

          <Text style={styles.sectionTitle}>Your Activity</Text>

          <View style={styles.dateSelector}>

            <TouchableOpacity>

              <Icon name="chevron-back-outline" size={24} color="#000" />

            </TouchableOpacity>

            <Text style={styles.dateText}>April 2021</Text>

            <TouchableOpacity>

              <Icon name="chevron-forward-outline" size={24} color="#000" />

            </TouchableOpacity>

          </View>

        </View>

        <BarChart

          data={activityData}

          width={350}

          height={220}

          yAxisLabel=""

          chartConfig={{

            backgroundColor: '#ffffff',

            backgroundGradientFrom: '#ffffff',

            backgroundGradientTo: '#ffffff',

            decimalPlaces: 0,

            color: (opacity = 1) => `rgba(74, 59, 245, ${opacity})`,

            style: {

              borderRadius: 16,

            },

          }}

          style={styles.chart}

        />

      </View>



      <View style={styles.bottomNavigation}>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="home-outline" size={24} color="#888" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="calendar-outline" size={24} color="#888" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.addTaskButton}>

          <Icon name="add" size={32} color="#FFF" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="stats-chart" size={24} color="#4a3bf5" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="person-outline" size={24} color="#888" />

        </TouchableOpacity>

      </View>

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F5F5F5',

  },

  header: {

    padding: 20,

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  prioritySection: {

    backgroundColor: '#FFFFFF',

    borderRadius: 15,

    padding: 20,

    margin: 10,

  },

  activitySection: {

    backgroundColor: '#FFFFFF',

    borderRadius: 15,

    padding: 20,

    margin: 10,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  sectionSubtitle: {

    fontSize: 14,

    color: '#888',

    marginBottom: 15,

  },

  chart: {

    marginVertical: 8,

    borderRadius: 16,

  },

  activityHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 15,

  },

  dateSelector: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  dateText: {

    fontSize: 16,

    fontWeight: 'bold',

    marginHorizontal: 10,

  },

  bottomNavigation: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

    paddingVertical: 10,

    backgroundColor: '#FFFFFF',

  },

  navItem: {

    padding: 10,

  },

  addTaskButton: {

    backgroundColor: '#4a3bf5',

    borderRadius: 30,

    width: 60,

    height: 60,

    justifyContent: 'center',

    alignItems: 'center',

    marginTop: -30,

  },

});



export default StatisticsScreen;