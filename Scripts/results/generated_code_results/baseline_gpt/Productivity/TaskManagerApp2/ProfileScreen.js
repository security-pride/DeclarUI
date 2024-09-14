import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {
  const tasks = [
    { icon: "person-outline", label: "Personal", count: 6, bgColor: "#ECECFF" },
    { icon: "briefcase-outline", label: "Work", count: 8, bgColor: "#E0F4FF" },
    { icon: "lock-closed-outline", label: "Private", count: 3, bgColor: "#FFEAEA" },
    { icon: "people-outline", label: "Meeting", count: 4, bgColor: "#E3FFF1" },
    { icon: "calendar-outline", label: "Events", count: 4, bgColor: "#ECECFF" },
    { icon: "add-outline", label: "Create Board", count: 0, bgColor: "#FFEAEA" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/snack-icon.png')}
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.moreIcon}>
          <Icon name="ellipsis-horizontal" size={24} color="#3F537D" />
        </TouchableOpacity>
      </View>
      <Text style={styles.name}>Steve Job</Text>
      <Text style={styles.email}>SteveJob@gmail.com</Text>

      <View style={styles.tasksContainer}>
        {tasks.map((task, index) => (
          <View key={index} style={[styles.taskCard, { backgroundColor: task.bgColor }]}>
            <Icon name={task.icon} size={24} color="#3F537D" />
            <Text style={styles.taskLabel}>{task.label}</Text>
            <Text style={styles.taskCount}>{task.count} Task</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    marginTop: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  moreIcon: {
    position: 'absolute',
    right: 0,
    top: 8,
    padding: 8,
    backgroundColor: '#F5F5F5',
    borderRadius: 14,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3F537D',
    textAlign: 'center',
    marginTop: 8,
  },
  email: {
    fontSize: 14,
    color: '#8A94AD',
    textAlign: 'center',
    marginTop: 4,
  },
  tasksContainer: {
    marginTop: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  taskCard: {
    width: '48%',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  taskLabel: {
    fontSize: 16,
    color: '#3F537D',
    marginTop: 8,
    fontWeight: '500',
  },
  taskCount: {
    fontSize: 14,
    color: '#8A94AD',
    marginTop: 4,
  },
});

export default ProfileScreen;