import React from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/snack-icon.png')} style={styles.profilePic} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Linda C. Ng</Text>
          <Text style={styles.date}>18 Feb 2022</Text>
        </View>
        <TouchableOpacity style={styles.searchButton}>
          <Icon name="search" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Daily Progress */}
      <View style={styles.dailyProgressCard}>
        <Text style={styles.dailyProgressText}>Your daily task almost done!</Text>
        <View style={styles.dailyProgressContent}>
          <Button title="View Task" onPress={() => navigation.navigate('TaskDetails')} />
          <View style={styles.progressCircle}>
            <Text style={styles.progressPercentage}>95%</Text>
          </View>
        </View>
        <Icon name="ellipsis-horizontal" size={24} color="#fff" style={styles.ellipsisIcon} />
      </View>

      {/* Today's Task */}
      <View style={styles.tasksSection}>
        <Text style={styles.sectionTitle}>Today's Task</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AllTasks')}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.taskCardsContainer}>
        <View style={styles.taskCard}>
          <Icon name="checkmark-circle" size={40} color="#fff" style={styles.taskIcon} />
          <Text style={styles.taskTitle}>User experience design</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '40%' }]} />
          </View>
          <Text style={styles.taskProgress}>Progress 40%</Text>
        </View>
        <View style={styles.taskCard}>
          <Icon name="people" size={40} color="#fff" style={styles.taskIcon} />
          <Text style={styles.taskTitle}>Meeting with designer</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '60%' }]} />
          </View>
          <Text style={styles.taskProgress}>Progress 60%</Text>
        </View>
      </View>

      {/* Upcoming Task */}
      <View style={styles.tasksSection}>
        <Text style={styles.sectionTitle}>Upcoming Task</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.upcomingTaskCard}>
        <Icon name="document-text" size={40} color="#000" style={styles.upcomingTaskIcon} />
        <View style={styles.upcomingTaskInfo}>
          <Text style={styles.upcomingTaskTitle}>Website Design</Text>
          <Text style={styles.upcomingTaskDate}>23 Feb 2022</Text>
        </View>
        <Icon name="ellipsis-horizontal" size={24} color="#000" style={styles.ellipsisIcon} />
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>
          <Icon name="calendar" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AddTask')}>
          <Icon name="add-circle" size={48} color="#00f" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="notifications" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="settings" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 12,
    color: '#888',
  },
  searchButton: {
    padding: 8,
  },
  dailyProgressCard: {
    backgroundColor: '#444',
    borderRadius: 10,
    padding: 15,
    marginVertical: 20,
    position: 'relative',
  },
  dailyProgressText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dailyProgressContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  progressCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressPercentage: {
    color: '#444',
    fontWeight: 'bold',
  },
  ellipsisIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  tasksSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllText: {
    fontSize: 14,
    color: '#00f',
  },
  taskCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskCard: {
    backgroundColor: '#f88',
    borderRadius: 10,
    width: '48%',
    padding: 10,
    justifyContent: 'space-between',
  },
  taskIcon: {
    marginBottom: 10,
  },
  taskTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  progressBar: {
    height: 5,
    backgroundColor: '#fff',
    borderRadius: 2.5,
    overflow: 'hidden',
  },
  progressFill: {
    height: 5,
    backgroundColor: '#00f',
  },
  taskProgress: {
    fontSize: 12,
    color: '#fff',
    marginTop: 5,
  },
  upcomingTaskCard: {
    backgroundColor: '#eee',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  upcomingTaskIcon: {},
  upcomingTaskInfo: {
    flex: 1,
    marginLeft: 10,
  },
  upcomingTaskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  upcomingTaskDate: {
    fontSize: 12,
    color: '#888',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#eee',
  },
});

export default HomeScreen;