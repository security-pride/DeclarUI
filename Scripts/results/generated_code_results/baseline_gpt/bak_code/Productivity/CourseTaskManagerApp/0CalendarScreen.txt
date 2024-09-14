import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CalendarScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.dateText}>17 September</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>
            <Icon name="add" size={16} color="#fff" /> Add Task
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.todayContainer}>
        <Text style={styles.todayText}>Today</Text>
        <View style={styles.weekContainer}>
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
            <View key={index} style={styles.weekDay}>
              <Text style={styles.weekDayText}>{day}</Text>
              <Text style={styles.weekDate}>{14 + index}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.timeline}>
        <View style={styles.timelineMarker} />
        <View style={styles.event}>
          <Text style={styles.time}>9:30</Text>
          <View style={styles.eventDetail}>
            <View style={styles.eventInfo}>
              <Text style={styles.eventTitle}>Physics</Text>
              <Text style={styles.eventSubtitle}>Chapter 3: Force</Text>
              <View style={styles.personContainer}>
                <Image source={require('../assets/snack-icon.png')} style={styles.personImage} />
                <Text style={styles.personText}>Alex Jesus <MaterialCommunityIcons name="google-classroom" size={16} /></Text>
              </View>
            </View>
          </View>
        </View>
        
        <View style={styles.timelineMarker} />
        <View style={styles.event}>
          <Text style={styles.time}>11:00</Text>
          <View style={styles.eventDetail}>
            <View style={styles.eventInfo}>
              <Text style={styles.eventTitle}>Geography</Text>
              <Text style={styles.eventSubtitle}>Chapter 12: Soil Profile</Text>
              <View style={styles.personContainer}>
                <Image source={require('../assets/snack-icon.png')} style={styles.personImage} />
                <Text style={styles.personText}>Jenifer Clark <MaterialCommunityIcons name="video" size={16} /></Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.timelineMarker} />
        <View style={styles.event}>
          <Text style={styles.time}>12:20</Text>
          <View style={styles.eventDetail}>
            <View style={styles.eventInfo}>
              <Text style={styles.eventTitle}>Assignment</Text>
              <Text style={styles.eventSubtitle}>World Regional Pattern</Text>
              <View style={styles.personContainer}>
                <Image source={require('../assets/snack-icon.png')} style={styles.personImage} />
                <Text style={styles.personText}>Alexa Tenorio <MaterialCommunityIcons name="folder" size={16} /></Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  dateText: {
    fontSize: 18,
    color: '#555',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  todayContainer: {
    marginBottom: 10,
  },
  todayText: {
    fontSize: 22,
    color: '#333',
    marginBottom: 10,
  },
  weekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  weekDay: {
    alignItems: 'center',
  },
  weekDayText: {
    color: '#888',
  },
  weekDate: {
    color: '#000',
  },
  timeline: {
    flexDirection: 'column',
  },
  timelineMarker: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#0d6efd',
    position: 'absolute',
    left: 20,
    marginTop: 5,
  },
  event: {
    marginLeft: 40,
    marginBottom: 20,
  },
  time: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  eventDetail: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
  },
  eventInfo: {
    marginLeft: 10,
  },
  eventTitle: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  eventSubtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  personContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  personImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 5,
  },
  personText: {
    fontSize: 14,
    color: '#333',
  },
});

export default CalendarScreen;