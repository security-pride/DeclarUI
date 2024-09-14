import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'; // Import the hook

const HomeScreen = () => {
  const navigation = useNavigation();  // Initialize the navigation hook

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greetingText}>Hi, Steven</Text>
        <Text style={styles.subtitleText}>Let's make this day productive</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
      </View>
      
      <Text style={styles.myTaskLabel}>My Task</Text>
      
      <View style={styles.taskOverview}>
        <View style={[styles.taskCard, styles.completeCard]}>
          <Image source={require('../assets/snack-icon.png')} style={styles.cardIcon} />
          <Text style={styles.cardTitle}>Complete</Text>
          <Text style={styles.cardCount}>86</Text>
          <Text style={styles.cardTask}>Task</Text>
        </View>

        <View style={[styles.taskCard, styles.pendingCard]}>
          <Icon name="time-outline" size={20} color="#fff" style={styles.cardIcon} />
          <Text style={styles.cardTitle}>Pending</Text>
          <Text style={styles.cardCount}>5</Text>
          <Text style={styles.cardTask}>Task</Text>
        </View>
        
        <View style={[styles.taskCard, styles.canceledCard]}>
          <Icon name="close-outline" size={20} color="#fff" style={styles.cardIcon} />
          <Text style={styles.cardTitle}>Canceled</Text>
          <Text style={styles.cardCount}>15</Text>
          <Text style={styles.cardTask}>Task</Text>
        </View>

        <View style={[styles.taskCard, styles.ongoingCard]}>
          <Image source={require('../assets/snack-icon.png')} style={styles.cardIcon} />
          <Text style={styles.cardTitle}>On Going</Text>
          <Text style={styles.cardCount}>67</Text>
          <Text style={styles.cardTask}>Task</Text>
        </View>
      </View>
      
      <View style={styles.todayTaskSection}>
        <Text style={styles.todayTaskLabel}>Today Task</Text>
        <Text style={styles.viewAll}>View all</Text>
      </View>
      
      <View style={styles.taskItem}>
        <Text style={styles.taskTitle}>Cleaning Clothes</Text>
        <Text style={styles.taskTime}>07:00 - 07:15</Text>
        <View style={styles.taskTags}>
          <Text style={styles.taskTag}>Urgent</Text>
          <Text style={styles.taskTag}>Home</Text>
        </View>
      </View>
      
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Icon name="home-outline" size={30} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AddTask')}>
          <Icon name="add-circle-outline" size={30} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Statistics')}>
          <Icon name="list-outline" size={30} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon name="person-outline" size={30} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>
          <Icon name="calendar-outline" size={30} style={styles.navIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitleText: {
    fontSize: 16,
    color: '#888',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  myTaskLabel: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  taskOverview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  taskCard: {
    width: '23%',
    height: 100,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  completeCard: {
    backgroundColor: '#4dd0e1',
  },
  pendingCard: {
    backgroundColor: '#64b5f6',
  },
  canceledCard: {
    backgroundColor: '#e57373',
  },
  ongoingCard: {
    backgroundColor: '#81c784',
  },
  cardIcon: {
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardCount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardTask: {
    fontSize: 12,
    color: '#fff',
  },
  todayTaskSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  todayTaskLabel: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  viewAll: {
    fontSize: 14,
    color: '#64b5f6',
  },
  taskItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskTime: {
    fontSize: 14,
    color: '#888',
  },
  taskTags: {
    flexDirection: 'row',
    marginTop: 5,
  },
  taskTag: {
    backgroundColor: '#e1e2e1',
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 5,
    marginRight: 5,
    fontSize: 12,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  navIcon: {
    color: '#64b5f6',
  },
});

export default HomeScreen;