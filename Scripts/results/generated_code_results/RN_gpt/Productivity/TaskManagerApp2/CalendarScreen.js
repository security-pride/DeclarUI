import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const CalendarScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search for task"
          placeholderTextColor="#aaa"
        />
        <Pressable style={styles.searchIcon}>
          <Icon name="search" size={20} color="#aaa" />
        </Pressable>
        <Pressable style={styles.closeIcon}>
          <Icon name="close" size={20} color="#aaa" />
        </Pressable>
      </View>
      <View style={styles.calendarHeader}>
        <Text style={styles.taskText}>Task</Text>
        <View style={styles.weekView}>
          <Text style={styles.dayLabel}>MO</Text>
          <Text style={styles.dayLabel}>TU</Text>
          <Text style={styles.selectedDateLabel}>WE</Text>
          <Text style={styles.dayLabel}>TH</Text>
          <Text style={styles.dayLabel}>FR</Text>
          <Text style={styles.dayLabel}>SA</Text>
          <Text style={styles.dayLabel}>SU</Text>
        </View>
        <View style={styles.dateView}>
          <Text style={styles.dateLabel}>12</Text>
          <Text style={styles.dateLabel}>13</Text>
          <Text style={styles.selectedDate}>14</Text>
          <Text style={styles.dateLabel}>15</Text>
          <Text style={styles.dateLabel}>16</Text>
          <Text style={styles.dateLabel}>17</Text>
          <Text style={styles.dateLabel}>18</Text>
        </View>
        <Text style={styles.monthLabel}>August 2021</Text>
        <Pressable>
          <Icon name="calendar" size={24} color="#aaa" />
        </Pressable>
      </View>
      <Text style={styles.todayLabel}>Today</Text>
      <Text style={styles.timeSpentLabel}>09 h 45 min</Text>
      <View style={styles.schedule}>
        <Text style={styles.timeLabel}>07:00</Text>
        <View style={styles.taskCard}>
          <View style={styles.verticalLine} />
          <View style={styles.cardContent}>
            <Text style={styles.taskTitle}>Cleaning Clothes</Text>
            <Text style={styles.taskTime}>07:00 - 07:15</Text>
            <View style={styles.tagContainer}>
              <Text style={styles.tag}>Urgent</Text>
              <Text style={styles.tag}>Home</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.schedule}>
        <Text style={styles.timeLabel}>08:00</Text>
        <View style={styles.taskCard}>
          <View style={styles.verticalLine} />
          <View style={styles.cardContent}>
            <Text style={styles.taskTitle}>Cleaning Clothes</Text>
            <Text style={styles.taskTime}>08:00 - 08:35</Text>
            <View style={styles.tagContainer}>
              <Text style={styles.tag}>Urgent</Text>
              <Text style={styles.tag}>Home</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.schedule}>
        <Text style={styles.timeLabel}>09:00</Text>
        <Text style={styles.noSchedule}>You don’t have any schedule</Text>
        <Text style={styles.addLabel}>+ Add</Text>
      </View>
      <View style={styles.schedule}>
        <Text style={styles.timeLabel}>10:00</Text>
        <View style={styles.taskCard}>
          <View style={styles.verticalLine} />
          <View style={styles.cardContent}>
            <Text style={styles.taskTitle}>Cleaning Clothes</Text>
            <Text style={styles.taskTime}>10:00 - 10:30</Text>
            <View style={styles.tagContainer}>
              <Text style={styles.tag}>Urgent</Text>
              <Text style={styles.tag}>Home</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottomNav}>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Icon name="home-outline" size={30} color="#aaa" />
        </Pressable>
        <Pressable>
          <Icon name="list-outline" size={30} color="#aaa" />
        </Pressable>
        <Pressable style={styles.addButton} onPress={() => navigation.navigate('AddTask')}>
          <Icon name="add-outline" size={30} color="#fff" />
        </Pressable>
        <Pressable>
          <Icon name="stats-chart-outline" size={30} color="#aaa" />
        </Pressable>
        <Pressable>
          <Icon name="person-outline" size={30} color="#aaa" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 40,
    color: '#333',
  },
  searchIcon: {
    position: 'absolute',
    left: 10,
    top: 10,
  },
  closeIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  calendarHeader: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  weekView: {
    flexDirection: 'row',
  },
  dayLabel: {
    marginHorizontal: 5,
  },
  selectedDateLabel: {
    marginHorizontal: 5,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#3273dc',
    borderRadius: 15,
    padding: 5,
  },
  dateView: {
    flexDirection: 'row',
    marginTop: 5,
  },
  dateLabel: {
    marginHorizontal: 5,
  },
  selectedDate: {
    marginHorizontal: 5,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#3273dc',
    borderRadius: 15,
    padding: 5,
  },
  monthLabel: {
    marginLeft: 10,
  },
  todayLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  timeSpentLabel: {
    fontSize: 16,
    marginLeft: 'auto',
  },
  schedule: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  timeLabel: {
    fontSize: 16,
    marginRight: 10,
  },
  taskCard: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  verticalLine: {
    width: 5,
    height: '100%',
    backgroundColor: '#3273dc',
    borderRadius: 5,
    marginRight: 5,
  },
  cardContent: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskTime: {
    fontSize: 14,
    color: '#666',
  },
  tagContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  tag: {
    backgroundColor: '#eee',
    color: '#333',
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 4,
    marginRight: 5,
  },
  noSchedule: {
    flex: 1,
    color: '#666',
  },
  addLabel: {
    color: '#3273dc',
    fontWeight: 'bold',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  addButton: {
    width: 50,
    height: 50,
    backgroundColor: '#3273dc',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    bottom: 15,
    elevation: 5,
  },
});

export default CalendarScreen;