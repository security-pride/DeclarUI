import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CalendarScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.avatar} source={require('../assets/snack-icon.png')} />
        <Text style={styles.headerTitle}>Today's Task</Text>
      </View>
      
      <View style={styles.calendar}>
        <Text>February 2022</Text>
        {/* Calendar Component - Navigate to Calendar View */}
      </View>

      <View style={styles.filters}>
        <Button title="All" />
        <Button title="Ongoing" />
        <Button title="Completed" />
      </View>

      <View style={styles.taskList}>
        <View style={styles.task}>
          <Text style={styles.timeLabel}>09:00 AM</Text>
          <TouchableOpacity style={styles.taskCard} onPress={() => navigation.navigate('TaskDetails')}>
            <Text style={styles.taskTitle}>Landing page design</Text>
            <Text style={styles.taskTime}>09AM-11AM</Text>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, {width: '100%'}]} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.task}>
          <Text style={styles.timeLabel}>11:00 AM</Text>
          <TouchableOpacity style={styles.taskCard} onPress={() => navigation.navigate('TaskDetails')}>
            <Text style={styles.taskTitle}>Dashboard redesign</Text>
            <Text style={styles.taskTime}>11AM-01PM</Text>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, {width: '55%'}]} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.task}>
          <Text style={styles.timeLabel}>02:00 PM</Text>
          <TouchableOpacity style={styles.taskCard} onPress={() => navigation.navigate('TaskDetails')}>
            <Text style={styles.taskTitle}>Education app design</Text>
            <Text style={styles.taskTime}>02PM-03PM</Text>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, {width: '30%'}]} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity><Image source={require('../assets/snack-icon.png')} /></TouchableOpacity>
        <TouchableOpacity><Image source={require('../assets/snack-icon.png')} /></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AddTask')}><Image source={require('../assets/snack-icon.png')} /></TouchableOpacity>
        <TouchableOpacity><Image source={require('../assets/snack-icon.png')} /></TouchableOpacity>
        <TouchableOpacity><Image source={require('../assets/snack-icon.png')} /></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  calendar: {
    backgroundColor: '#00BCD4',
    borderRadius: 10,
    padding: 16,
    marginVertical: 16,
    alignItems: 'center',
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  taskList: {
    flex: 1,
  },
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  timeLabel: {
    width: 60,
  },
  taskCard: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    marginLeft: 10,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskTime: {
    color: '#777',
  },
  progressBarContainer: {
    backgroundColor: '#E0E0E0',
    height: 6,
    borderRadius: 3,
    marginTop: 8,
  },
  progressBar: {
    backgroundColor: '#3F51B5',
    height: 6,
    borderRadius: 3,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
  },
});

export default CalendarScreen;