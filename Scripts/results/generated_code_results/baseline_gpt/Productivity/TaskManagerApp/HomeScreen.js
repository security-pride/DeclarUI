import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Linda C. Ng</Text>
          <Text style={styles.dateText}>18 Feb 2022</Text>
        </View>
        <TouchableOpacity style={styles.searchIcon}>
          <Icon name="search" size={25} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.taskOverview}>
        <Text style={styles.taskTitle}>Your daily task almost done!</Text>
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>95%</Text>
          <TouchableOpacity style={styles.viewTaskButton}>
            <Text style={styles.viewTaskText}>View Task</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Today's Task</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.taskCardContainer}>
        <View style={styles.taskCard}>
          <Icon name="document-text-outline" size={30} color='#00A3FF' />
          <Text style={styles.cardTitle}>User experience design</Text>
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBar40} />
          </View>
          <Text style={styles.progressInfo}>Progress 40%</Text>
        </View>
        
        <View style={styles.taskCard}>
          <Icon name="people-outline" size={30} color='#FF6347' />
          <Text style={styles.cardTitle}>Meeting with designer</Text>
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBar60} />
          </View>
          <Text style={styles.progressInfo}>Progress 60%</Text>
        </View>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Upcoming Task</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.upcomingTaskCard}>
        <Icon name="laptop-outline" size={30} color='#00A3FF' />
        <View style={styles.taskDetails}>
          <Text style={styles.cardTitle}>Website Design</Text>
          <Text style={styles.dateText}>23 Feb 2022</Text>
        </View>
        <TouchableOpacity>
          <Icon name="ellipsis-vertical" size={25} color="#333" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9FB',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  dateText: {
    fontSize: 12,
    color: '#888',
  },
  searchIcon: {
    padding: 5,
  },
  taskOverview: {
    backgroundColor: '#1A1E3B',
    padding: 20,
    margin: 20,
    borderRadius: 12,
  },
  taskTitle: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 16,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  progressText: {
    color: '#00A3FF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewTaskButton: {
    backgroundColor: '#00A3FF',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
  },
  viewTaskText: {
    color: '#FFF',
    fontWeight: '500',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAllText: {
    color: '#00A3FF',
  },
  taskCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  taskCard: {
    backgroundColor: '#FFF',
    width: '45%',
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
  },
  cardTitle: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333',
  },
  progressBarContainer: {
    width: '100%',
    height: 6,
    backgroundColor: '#EEE',
    borderRadius: 3,
    marginVertical: 10,
  },
  progressBar40: {
    width: '40%',
    height: 6,
    backgroundColor: '#00A3FF',
    borderRadius: 3,
  },
  progressBar60: {
    width: '60%',
    height: 6,
    backgroundColor: '#FF6347',
    borderRadius: 3,
  },
  progressInfo: {
    fontSize: 12,
    color: '#888',
  },
  upcomingTaskCard: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 12,
  },
  taskDetails: {
    flex: 1,
    marginLeft: 10,
  },
});

export default HomeScreen;