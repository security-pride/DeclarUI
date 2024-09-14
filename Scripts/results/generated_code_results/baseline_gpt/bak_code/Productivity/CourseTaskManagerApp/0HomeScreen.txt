import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  const courses = [
    { id: '1', name: 'Mathematics', color: '#FF6B6B' },
    { id: '2', name: 'Chemistry', color: '#F7B733' },
  ];

  const renderCourse = ({ item }) => (
    <View style={[styles.courseCard, { backgroundColor: item.color }]}>
      <Text style={styles.courseText}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello Liana</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.profilePic} />
      </View>
      <Text style={styles.taskText}>You’ve got <Text style={styles.taskCount}>4 tasks today</Text></Text>

      {/* Courses */}
      <Text style={styles.sectionTitle}>Courses</Text>
      <Text style={styles.sectionSubtitle}>Your running subjects</Text>
      <FlatList
        horizontal
        data={courses}
        renderItem={renderCourse}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />

      {/* Schedule */}
      <Text style={styles.sectionTitle}>Your schedule</Text>
      <Text style={styles.sectionSubtitle}>Upcoming classes and tasks</Text>
      <View style={styles.scheduleCard}>
        <View style={styles.scheduleHeader}>
          <Text style={styles.scheduleTitle}>Physics</Text>
          <Icon name="ellipsis-horizontal" size={20} color="#fff" />
        </View>
        <Text style={styles.scheduleSubtitle}>Chapter 3: Force</Text>
        <View style={styles.scheduleDetails}>
          <Text style={styles.detailText}>09:30</Text>
          <Text style={styles.detailText}>Alex Jesus</Text>
          <Text style={styles.detailText}>Google Meet</Text>
        </View>
      </View>

      {/* Bottom Navigation (only for display purpose, already handled elsewhere) */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={30} color="#4CAF50" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="calendar" size={30} color="#999" />
          <Text style={styles.navText}>Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="school" size={30} color="#999" />
          <Text style={styles.navText}>Classroom</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="chatbox-ellipses" size={30} color="#999" />
          <Text style={styles.navText}>Discuss</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 18,
    color: '#333',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  taskText: {
    fontSize: 24,
    marginVertical: 10,
    color: '#333',
  },
  taskCount: {
    color: '#4CAF50',
  },
  sectionTitle: {
    fontSize: 20,
    marginTop: 20,
    color: '#333',
  },
  sectionSubtitle: {
    color: '#888',
    marginBottom: 10,
  },
  courseCard: {
    width: 120,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  courseText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  scheduleCard: {
    marginTop: 10,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#3A86FF',
  },
  scheduleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scheduleTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scheduleSubtitle: {
    color: '#fff',
  },
  scheduleDetails: {
    marginTop: 10,
    flexDirection: 'column',
  },
  detailText: {
    color: '#fff',
    marginTop: 5,
  },
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: '#333',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: '#fff',
    marginTop: 5,
  },
});

export default HomeScreen;