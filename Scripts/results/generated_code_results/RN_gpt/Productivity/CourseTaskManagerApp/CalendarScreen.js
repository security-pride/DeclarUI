import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CalendarScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.dateText}>17 September</Text>
        <Text style={styles.todayText}>Today</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('AddTask')}
        >
          <Text style={styles.addButtonText}>+ Add Task</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.calendarHeader}>
        <Text style={styles.calendarDay}>Mon</Text>
        <Text style={styles.calendarDay}>Tue</Text>
        <Text style={styles.calendarDay}>Wed</Text>
        <Text style={styles.highLightDay}>Thu 17</Text>
        <Text style={styles.calendarDay}>Fri</Text>
        <Text style={styles.calendarDay}>Sat</Text>
        <Text style={styles.calendarDay}>Sun</Text>
      </View>
      <View style={styles.scheduleList}>
        <View style={styles.scheduleItem}>
          <Text style={styles.timeText}>9:30</Text>
          <View style={styles.classDetail}>
            <Text style={styles.classTitle}>Physics</Text>
            <Text style={styles.classChapter}>Chapter 3: Force</Text>
            <Text style={styles.classInstructor}>Alex Jesus</Text>
            <Text style={styles.classPlatform}>Google Meet</Text>
          </View>
        </View>
        <View style={styles.scheduleItem}>
          <Text style={styles.timeText}>11:00</Text>
          <View style={styles.classDetail}>
            <Text style={styles.classTitle}>Geography</Text>
            <Text style={styles.classChapter}>Chapter 12: Soil Profile</Text>
            <Text style={styles.classInstructor}>Jenifer Clark</Text>
            <Text style={styles.classPlatform}>Zoom</Text>
          </View>
        </View>
        <View style={styles.scheduleItem}>
          <Text style={styles.timeText}>12:20</Text>
          <View style={styles.classDetail}>
            <Text style={styles.classTitle}>Assignment</Text>
            <Text style={styles.classChapter}>World Regional Pattern</Text>
            <Text style={styles.classInstructor}>Alexa Tenorio</Text>
            <Text style={styles.classPlatform}>Google Docs</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="home-outline" size={30} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>
          <Icon name="calendar-outline" size={30} color="#34a0a4" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Classroom')}>
          <Icon name="school-outline" size={30} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Discussion')}>
          <Icon name="chat-outline" size={30} color="#666" />
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
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  dateText: {
    fontSize: 24,
    fontWeight: '600',
  },
  todayText: {
    fontSize: 18,
    marginLeft: 10,
    color: '#888',
  },
  addButton: {
    backgroundColor: '#34a0a4',
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  calendarDay: {
    fontSize: 16,
    color: '#888',
  },
  highLightDay: {
    fontSize: 16,
    color: '#34a0a4',
    fontWeight: '700',
  },
  scheduleList: {
    flex: 1,
  },
  scheduleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  timeText: {
    fontSize: 18,
    width: 60,
    color: '#555',
  },
  classDetail: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f8f9fa',
    flex: 1,
  },
  classTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  classChapter: {
    fontSize: 16,
    color: '#666',
  },
  classInstructor: {
    fontSize: 16,
    color: '#666',
  },
  classPlatform: {
    fontSize: 16,
    color: '#666',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});

export default CalendarScreen;