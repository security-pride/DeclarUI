import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native';



const BoardScreen = () => {

  const navigation = useNavigation();



  const boards = [

    { name: 'Personal', icon: 'person', tasks: 17 },

    { name: 'Work', icon: 'work', tasks: 10 },

    { name: 'Private', icon: 'lock', tasks: 2 },

    { name: 'Meeting', icon: 'people', tasks: 5 },

    { name: 'Events', icon: 'event', tasks: 3 },

    { name: 'Create Board', icon: 'add', tasks: null },

  ];



  const renderBoard = (board, index) => (

    <TouchableOpacity key={index} style={styles.boardItem}>

      <View style={styles.iconContainer}>

        <Icon name={board.icon} size={24} color="#6200EE" />

      </View>

      <Text style={styles.boardName}>{board.name}</Text>

      {board.tasks !== null && (

        <Text style={styles.taskCount}>{board.tasks} Task</Text>

      )}

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.title}>Board</Text>

        <Image

          source={require('../assets/snack-icon.png')}

          style={styles.avatar}

        />

      </View>

      <ScrollView contentContainerStyle={styles.boardsContainer}>

        {boards.map(renderBoard)}

      </ScrollView>

      <View style={styles.bottomNav}>

        <TouchableOpacity onPress={() => navigation.navigate('Board')}>

          <Icon name="grid-view" size={24} color="#6200EE" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>

          <Icon name="check" size={24} color="#757575" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('AddTask')} style={styles.addButton}>

          <Icon name="add" size={24} color="#FFFFFF" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Task')}>

          <Icon name="description" size={24} color="#757575" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Message')}>

          <Icon name="chat" size={24} color="#757575" />

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F5F5F5',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 16,

    backgroundColor: '#FFFFFF',

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  avatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

  },

  boardsContainer: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',

    padding: 16,

  },

  boardItem: {

    width: '48%',

    backgroundColor: '#FFFFFF',

    borderRadius: 8,

    padding: 16,

    marginBottom: 16,

    alignItems: 'center',

  },

  iconContainer: {

    width: 48,

    height: 48,

    borderRadius: 24,

    backgroundColor: '#E8E0FF',

    justifyContent: 'center',

    alignItems: 'center',

    marginBottom: 8,

  },

  boardName: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 4,

  },

  taskCount: {

    fontSize: 14,

    color: '#757575',

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    paddingVertical: 12,

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

  },

  addButton: {

    width: 56,

    height: 56,

    borderRadius: 28,

    backgroundColor: '#6200EE',

    justifyContent: 'center',

    alignItems: 'center',

    marginTop: -28,

  },

});



export default BoardScreen;