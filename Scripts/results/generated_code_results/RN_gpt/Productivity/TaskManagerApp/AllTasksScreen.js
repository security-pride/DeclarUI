import React from 'react';
import { View, Text, StyleSheet, StatusBar, Pressable, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AllTasksScreen = ({ navigation }) => {
  const handleTaskPress = (taskId) => {
    navigation.navigate('TaskDetails', { taskId });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} />
        </Pressable>
        <Text style={styles.headerTitle}>All tasks</Text>
        <Pressable onPress={() => {/* searchLogic */}}>
          <Icon name="search" size={24} />
        </Pressable>
      </View>

      <Text style={styles.sectionHeader}>Todays task</Text>
      
      {/* Task Card Component */}
      <Pressable onPress={() => handleTaskPress('task1')}>
        <TaskCard 
          status="Running"
          title="Meeting with designer"
          time="09AM-10AM"
          participants="04 Persons"
          progress={60}
          progressColor="dodgerblue"
        />
      </Pressable>
      
      <Pressable onPress={() => handleTaskPress('task2')}>
        <TaskCard 
          status="Ongoing"
          title="Grocery app design"
          time="10AM-11AM"
          participants="05 Persons"
          progress={95}
          progressColor="blue"
        />
      </Pressable>
      
      <Pressable onPress={() => handleTaskPress('task3')}>
        <TaskCard 
          status="Running"
          title="Dashboard redesign"
          time="02PM-03PM"
          participants="03 Persons"
          progress={50}
          progressColor="red"
        />
      </Pressable>
    </View>
  );
};

const TaskCard = ({ status, title, time, participants, progress, progressColor }) => {
  return (
    <View style={styles.taskCard}>
      <Text style={[styles.taskStatus, { color: progressColor }]}>{status}</Text>
      <Text style={styles.taskTitle}>{title}</Text>
      <View style={styles.taskInfo}>
        <Text style={styles.taskTime}>{time}</Text>
        <Text style={styles.taskParticipants}>{participants}</Text>
      </View>
      <View style={styles.progressBarContainer}>
        <Text style={styles.progressLabel}>Progress</Text>
        <View style={[styles.progressBar, { backgroundColor: progressColor, width: `${progress}%`}]} />
        <Text style={styles.progressPercentage}>{progress}%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 20,
  },
  taskCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  taskStatus: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  taskInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  taskTime: {
    fontSize: 14,
    color: '#888',
  },
  taskParticipants: {
    fontSize: 14,
    color: '#888',
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  progressLabel: {
    fontSize: 14,
    color: '#555',
  },
  progressBar: {
    height: 6,
    borderRadius: 3,
    flex: 1,
    marginHorizontal: 10,
  },
  progressPercentage: {
    fontSize: 14,
    color: '#555',
  },
});

export default AllTasksScreen;