import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const BoardScreen = ({ navigation }) => {

  const boards = [

    { id: 1, title: 'Personal', icon: 'person', color: '#8875FF', tasks: 17 },

    { id: 2, title: 'Work', icon: 'work', color: '#FF8F6B', tasks: 10 },

    { id: 3, title: 'Private', icon: 'lock', color: '#4CAF50', tasks: 2 },

    { id: 4, title: 'Meeting', icon: 'groups', color: '#8875FF', tasks: 5 },

    { id: 5, title: 'Events', icon: 'event', color: '#FF8F6B', tasks: 3 },

    { id: 6, title: 'Create Board', icon: 'add', color: '#4CAF50', tasks: null },

  ];



  const renderBoardCard = (board) => (

    <TouchableOpacity

      key={board.id}

      style={styles.boardCard}

      onPress={() => {

        if (board.title === 'Create Board') {

          // Navigate to create board screen

        } else {

          // Navigate to board details screen

        }

      }}

    >

      <View style={[styles.iconContainer, { backgroundColor: board.color }]}>

        <Icon name={board.icon} size={24} color="#FFFFFF" />

      </View>

      <Text style={styles.boardTitle}>{board.title}</Text>

      {board.tasks !== null && (

        <Text style={styles.taskCount}>{board.tasks} Task</Text>

      )}

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>

        <Text style={styles.title}>Board</Text>

        <Image

          source={require('../assets/snack-icon.png')}

          style={styles.avatar}

        />

      </View>

      <View style={styles.boardsContainer}>

        {boards.map(renderBoardCard)}

      </View>

      <View style={styles.bottomNav}>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="grid-view" size={24} color="#8875FF" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="check-circle-outline" size={24} color="#BDBDBD" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.addButton}>

          <Icon name="add" size={32} color="#FFFFFF" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="calendar-today" size={24} color="#BDBDBD" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="chat-bubble-outline" size={24} color="#BDBDBD" />

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F1F5FF',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 20,

    paddingTop: 60,

  },

  title: {

    fontSize: 32,

    fontWeight: 'bold',

    color: '#1D1D1D',

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

    padding: 20,

  },

  boardCard: {

    width: '48%',

    backgroundColor: '#FFFFFF',

    borderRadius: 15,

    padding: 20,

    marginBottom: 20,

    elevation: 2,

  },

  iconContainer: {

    width: 48,

    height: 48,

    borderRadius: 24,

    justifyContent: 'center',

    alignItems: 'center',

    marginBottom: 10,

  },

  boardTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    color: '#1D1D1D',

    marginBottom: 5,

  },

  taskCount: {

    fontSize: 14,

    color: '#BDBDBD',

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    paddingVertical: 10,

    borderTopLeftRadius: 20,

    borderTopRightRadius: 20,

    elevation: 10,

  },

  navItem: {

    padding: 10,

  },

  addButton: {

    backgroundColor: '#8875FF',

    width: 56,

    height: 56,

    borderRadius: 28,

    justifyContent: 'center',

    alignItems: 'center',

    elevation: 5,

    marginTop: -30,

  },

});



export default BoardScreen;