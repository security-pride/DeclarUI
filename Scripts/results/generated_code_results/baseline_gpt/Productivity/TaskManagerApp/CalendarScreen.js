import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons } from 'react-native-vector-icons';

const CalendarScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
        <Text style={styles.headerText}>Today's Task</Text>
      </View>

      <View style={styles.calendarContainer}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.calendarMonth}>February 2022</Text>
        <TouchableOpacity>
          <Ionicons name="chevron-forward" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.daysRow}>
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
          <Text key={index} style={styles.day}>{day}</Text>
        ))}
      </View>

      <View style={styles.dateRow}>
        {[14, 15, 16, 17, 18, 19, 20].map((date, index) => (
          <Text key={index} style={[styles.date, date === 18 && styles.selectedDate]}>{date}</Text>
        ))}
      </View>

      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>All</Text>
        </TouchableOpacity>
        <Text style={styles.filterInactiveText}>Ongoing</Text>
        <Text style={styles.filterInactiveText}>Completed</Text>
      </View>

      <ScrollView contentContainerStyle={styles.taskList}>
        <View style={styles.taskCard} backgroundColor="#FDE1E4">
          <View style={styles.taskTimeContainer}>
            <Text style={styles.taskTime}>09:00 AM</Text>
            <Text style={styles.taskDuration}>09AM-11AM</Text>
          </View>
          <View style={styles.taskDetails}>
            <Text style={styles.taskTitle}>Landing page design</Text>
            <TouchableOpacity>
              <MaterialIcons name="more-vert" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.taskProgress}>
            <View style={styles.progressBar} backgroundColor="#FF7465" />
            <Text style={styles.progressText}>100%</Text>
          </View>
        </View>

        <View style={styles.taskCard} backgroundColor="#DAF2FB">
          <View style={styles.taskTimeContainer}>
            <Text style={styles.taskTime}>11:00 AM</Text>
            <Text style={styles.taskDuration}>11AM-01PM</Text>
          </View>
          <View style={styles.taskDetails}>
            <Text style={styles.taskTitle}>Dashboard redesign</Text>
            <TouchableOpacity>
              <MaterialIcons name="more-vert" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.taskProgress}>
            <View style={styles.progressBar} backgroundColor="#4AC0EF" width="55%" />
            <Text style={styles.progressText}>55%</Text>
          </View>
        </View>

        <View style={styles.taskCard} backgroundColor="#E9E7FD">
          <View style={styles.taskTimeContainer}>
            <Text style={styles.taskTime}>02:00 PM</Text>
            <Text style={styles.taskDuration}>02PM-03PM</Text>
          </View>
          <View style={styles.taskDetails}>
            <Text style={styles.taskTitle}>Education app design</Text>
            <TouchableOpacity>
              <MaterialIcons name="more-vert" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.taskProgress}>
            <View style={styles.progressBar} backgroundColor="#6B47DC" width="30%" />
            <Text style={styles.progressText}>30%</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  calendarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2ED3DF',
    padding: 12,
    borderRadius: 10,
  },
  calendarMonth: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  day: {
    fontSize: 16,
    color: '#6B6B6B',
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  date: {
    padding: 10,
    borderRadius: 20,
    fontSize: 16,
    color: '#6B6B6B',
  },
  selectedDate: {
    backgroundColor: '#2ED3DF',
    color: 'white',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  filterButton: {
    backgroundColor: '#FF603E',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  filterText: {
    color: 'white',
    fontWeight: 'bold',
  },
  filterInactiveText: {
    marginHorizontal: 10,
    color: '#6B6B6B',
  },
  taskList: {
    paddingVertical: 10,
  },
  taskCard: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
  },
  taskTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  taskTime: {
    fontWeight: 'bold',
  },
  taskDuration: {
    fontSize: 12,
    color: '#FF6D6D',
  },
  taskDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskProgress: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    height: 5,
    width: '100%',
    borderRadius: 5,
  },
  progressText: {
    marginLeft: 10,
    fontSize: 12,
  },
});

export default CalendarScreen;