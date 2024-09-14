import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BoardScreen = ({ navigation }) => {
  const boards = [
    { name: 'Personal', icon: 'person', tasks: 17 },
    { name: 'Work', icon: 'gift', tasks: 10 },
    { name: 'Private', icon: 'lock-closed', tasks: 2 },
    { name: 'Meeting', icon: 'people', tasks: 5 },
    { name: 'Events', icon: 'calendar', tasks: 3 },
    { name: 'Create Board', icon: 'add-circle-outline' },
  ];

  const renderBoard = (board) => (
    <TouchableOpacity
      key={board.name}
      style={styles.taskCard}
    >
      <Icon name={board.icon} size={40} color="#888" />
      <Text style={styles.taskTitle}>{board.name}</Text>
      {board.tasks !== undefined && (
        <Text style={styles.taskCount}>{board.tasks} Task</Text>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.clock}>9:41</Text>
        <Text style={styles.boardTitle}>Board</Text>
        <Image
          source={require('../assets/snack-icon.png')}
          style={styles.avatar}
        />
      </View>
      <View style={styles.boardContainer}>{boards.map(renderBoard)}</View>
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Board')}>
          <Icon name="grid" size={30} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Icon name="checkbox-outline" size={30} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AddTask')}>
          <Icon name="add-circle" size={60} color="#FFC107" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Task')}>
          <Icon name="document-text-outline" size={30} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Message')}>
          <Icon name="chatbubble-outline" size={30} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    marginBottom: 20,
  },
  clock: {
    fontSize: 16,
    color: '#888',
  },
  boardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  boardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  taskCard: {
    width: '48%',
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 3,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
  },
  taskCount: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: '#7B4EFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 10,
  },
});

export default BoardScreen;