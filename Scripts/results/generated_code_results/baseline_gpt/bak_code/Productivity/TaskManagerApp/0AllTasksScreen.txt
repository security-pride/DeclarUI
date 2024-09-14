import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const tasksData = [
  {
    id: '1',
    status: 'Running',
    statusColor: '#00C4EE',
    title: 'Meeting with designer',
    time: '09AM-10AM',
    people: '04 Persons',
    progress: '60%',
    progressColor: '#00C4EE'
  },
  {
    id: '2',
    status: 'Ongoing',
    statusColor: '#7364F8',
    title: 'Grocery app design',
    time: '10AM-11AM',
    people: '05 Persons',
    progress: '95%',
    progressColor: '#7364F8'
  },
  {
    id: '3',
    status: 'Running',
    statusColor: '#FF5C5C',
    title: 'Dashboard redesign',
    time: '02PM-03PM',
    people: '03 Persons',
    progress: '50%',
    progressColor: '#FF5C5C'
  },
];

const TaskCard = ({ task }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <Text style={[styles.status, { color: task.statusColor }]}>{task.status}</Text>
    </View>
    <Text style={styles.title}>{task.title}</Text>
    <View style={styles.detailsRow}>
      <View style={styles.detailItem}>
        <Icon name="schedule" size={16} color="#666" />
        <Text style={styles.detailText}>{task.time}</Text>
      </View>
      <View style={styles.detailItem}>
        <Icon name="people" size={16} color="#666" />
        <Text style={styles.detailText}>{task.people}</Text>
      </View>
      <Icon name="more-vert" size={20} color="#999" style={styles.moreIcon} />
    </View>
    <View style={styles.progressBarContainer}>
      <View style={[styles.progressBar, { width: task.progress, backgroundColor: task.progressColor }]} />
    </View>
    <Text style={styles.progressText}>Progress {task.progress}</Text>
  </View>
);

const AllTasksScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back-ios" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>All tasks</Text>
        <TouchableOpacity>
          <Icon name="search" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>Today's task</Text>

      <FlatList
        data={tasksData}
        renderItem={({ item }) => <TaskCard task={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#F8F9FB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  status: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
  },
  moreIcon: {
    marginLeft: 'auto',
  },
  progressBarContainer: {
    height: 4,
    width: '100%',
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
    marginTop: 10,
  },
  progressBar: {
    height: '100%',
    borderRadius: 2,
  },
  progressText: {
    marginTop: 5,
    fontSize: 12,
    color: '#666',
    textAlign: 'right',
  },
});

export default AllTasksScreen;