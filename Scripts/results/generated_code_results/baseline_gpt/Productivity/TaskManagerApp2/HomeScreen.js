import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// TaskCard Component
const TaskCard = ({ color, icon, title, count }) => {
  return (
    <View style={[styles.taskCard, { backgroundColor: color }]}>
      <View style={styles.iconContainer}>
        <Icon name={icon} size={40} color="#FFF" />
      </View>
      <Text style={styles.taskTitle}>{title}</Text>
      <Text style={styles.taskCount}>{count} Task</Text>
    </View>
  );
};

const HomeScreen = () => {
  const tasksData = [
    { color: '#5398DF', icon: 'ios-laptop-outline', title: 'Complete', count: 86 },
    { color: '#8E7BFA', icon: 'ios-time-outline', title: 'Pending', count: 9 },
    { color: '#EA4D4D', icon: 'ios-close-circle-outline', title: 'Canceled', count: 15 },
    { color: '#50C878', icon: 'ios-bookmark-outline', title: 'On Going', count: 67 },
  ];

  const todayTasks = [
    { key: '1', title: 'Cleaning Clothes', time: '07:00 - 07:15', tags: ['Urgent', 'Home'] },
    { key: '2', title: 'Cleaning Clothes', time: '07:00 - 07:15', tags: ['Urgent', 'Home'] },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hi, Steven</Text>
          <Text style={styles.subGreeting}>Let's make this day productive</Text>
        </View>
        <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
      </View>

      <Text style={styles.sectionTitle}>My Task</Text>
      <View style={styles.tasksContainer}>
        {tasksData.map((task, index) => (
          <TaskCard key={index} {...task} />
        ))}
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Today Task</Text>
        <Text style={styles.viewAll}>View all</Text>
      </View>

      <FlatList
        data={todayTasks}
        renderItem={({ item }) => (
          <View style={styles.todayTaskCard}>
            <View style={styles.todayTaskContent}>
              <Text style={styles.todayTaskTitle}>{item.title}</Text>
              <Text style={styles.todayTaskTime}>{item.time}</Text>
              <View style={styles.tagsContainer}>
                {item.tags.map((tag, index) => (
                  <Text key={index} style={styles.tag}>
                    {tag}
                  </Text>
                ))}
              </View>
            </View>
            <Icon name="ios-ellipsis-horizontal" size={24} color="#B0B3C6" />
          </View>
        )}
      />

      <View style={styles.footer}>
        <Icon name="ios-home-outline" size={30} color="#B0B3C6" />
        <View style={styles.addButtonWrapper}>
          <Icon name="ios-add" size={36} color="#FFF" />
        </View>
        <Icon name="ios-calendar-outline" size={30} color="#B0B3C6" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBFBFD',
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#18206F',
  },
  subGreeting: {
    fontSize: 16,
    color: '#A6A8B7',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#18206F',
    marginVertical: 10,
  },
  tasksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  taskCard: {
    width: '48%',
    height: 100,
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  iconContainer: {
    alignItems: 'flex-end',
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  taskCount: {
    fontSize: 14,
    color: '#FFF',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewAll: {
    color: '#5398DF',
  },
  todayTaskCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 5,
  },
  todayTaskContent: {
    flex: 1,
  },
  todayTaskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#18206F',
  },
  todayTaskTime: {
    fontSize: 14,
    color: '#A6A8B7',
  },
  tagsContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  tag: {
    backgroundColor: '#EAEAF1',
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
    fontSize: 12,
    color: '#18206F',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
  },
  addButtonWrapper: {
    backgroundColor: '#5398DF',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});

export default HomeScreen;