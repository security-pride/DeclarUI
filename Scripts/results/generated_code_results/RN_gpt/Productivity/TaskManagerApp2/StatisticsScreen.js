import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // for envelope icon 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // for plus and home icons

const StatisticsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.graphic}>Graphic</Text>

      <View style={styles.priorityChart}>
        <Text style={styles.priorityTitle}>Priority</Text>
        <View style={styles.legend}>
          <Text style={styles.legendText}>Personal</Text>
          <Text style={styles.legendText}>Private</Text>
          <Text style={styles.legendText}>Secret</Text>
        </View>
        <Text style={styles.taskPerDay}>Task Perday</Text>
        
        <View style={styles.chart}>
          <Text style={styles.taskNumber}>10</Text>
          <Text style={styles.taskNumber}>08</Text>
          <Text style={styles.taskNumber}>06</Text>
          <Text style={styles.taskNumber}>04</Text>
          <Text style={styles.taskNumber}>02</Text>
          <Text style={styles.day}>Mo</Text>
          <Text style={styles.day}>Tu</Text>
          <Text style={styles.day}>We</Text>
          <Text style={styles.day}>Th</Text>
          <Text style={styles.day}>Fr</Text>
          <Text style={styles.day}>Sa</Text>
          <Text style={styles.day}>Su</Text>
        </View>
      </View>

      <Text style={styles.activityTitle}>Your Activity</Text>
      <View style={styles.activityChart}>
        <TouchableOpacity>
          <Icon name="chevron-back-outline" size={24} color="spaceGray"/>
        </TouchableOpacity>
        <Text style={styles.month}>April 2021</Text>
        <TouchableOpacity>
          <Icon name="chevron-forward-outline" size={24} color="spaceGray"/>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <MaterialCommunityIcons name="home-outline" size={30} color="deepBlue"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>
          <Icon name="list-outline" size={30} color="deepBlue"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AddTask')}>
          <View style={styles.plusButton}>
            <MaterialCommunityIcons name="plus" size={30} color="white"/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Statistics')}>
          <MaterialCommunityIcons name="chart-bar" size={30} color="purple"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon name="person-outline" size={30} color="deepBlue"/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  graphic: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  priorityChart: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  priorityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  legendText: {
    fontSize: 14,
    color: 'gray',
  },
  taskPerDay: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  chart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskNumber: {
    fontSize: 14,
    color: 'gray',
  },
  day: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  activityChart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  month: {
    fontSize: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#e6e6e6',
  },
  plusButton: {
    width: 60,
    height: 60,
    backgroundColor: 'purple',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    top: -20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default StatisticsScreen;