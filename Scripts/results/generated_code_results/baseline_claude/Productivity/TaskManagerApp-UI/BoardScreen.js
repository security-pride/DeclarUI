import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const boardData = [

  { id: '1', title: 'Personal', tasks: 17, icon: 'person' },

  { id: '2', title: 'Work', tasks: 10, icon: 'briefcase' },

  { id: '3', title: 'Private', tasks: 2, icon: 'lock' },

  { id: '4', title: 'Meeting', tasks: 5, icon: 'people' },

  { id: '5', title: 'Events', tasks: 3, icon: 'calendar' },

  { id: '6', title: 'Create Board', tasks: null, icon: 'add' },

];



const BoardItem = ({ item, onPress }) => (

  <TouchableOpacity style={styles.boardItem} onPress={onPress}>

    <View style={styles.iconContainer}>

      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

    </View>

    <Text style={styles.boardTitle}>{item.title}</Text>

    {item.tasks !== null && (

      <Text style={styles.taskCount}>{item.tasks} Task</Text>

    )}

  </TouchableOpacity>

);



const BoardScreen = () => {

  const navigation = useNavigation();



  const handleBoardPress = (item) => {

    if (item.title === 'Create Board') {

      // Navigate to create board screen

    } else {

      // Navigate to board details screen

    }

  };



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.title}>Board</Text>

        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

      </View>

      <FlatList

        data={boardData}

        renderItem={({ item }) => (

          <BoardItem item={item} onPress={() => handleBoardPress(item)} />

        )}

        keyExtractor={(item) => item.id}

        numColumns={2}

        columnWrapperStyle={styles.columnWrapper}

        contentContainerStyle={styles.listContent}

      />

      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.addButton}>

          <Text style={styles.addButtonText}>+</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F0F0F5',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 20,

    paddingTop: 20,

    paddingBottom: 10,

  },

  title: {

    fontSize: 28,

    fontWeight: 'bold',

    color: '#1E1E1E',

  },

  avatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

  },

  listContent: {

    paddingHorizontal: 10,

    paddingBottom: 20,

  },

  columnWrapper: {

    justifyContent: 'space-between',

  },

  boardItem: {

    backgroundColor: 'white',

    borderRadius: 15,

    padding: 20,

    marginTop: 20,

    width: '47%',

    alignItems: 'center',

  },

  iconContainer: {

    backgroundColor: '#F0F0F5',

    borderRadius: 12,

    padding: 10,

    marginBottom: 10,

  },

  icon: {

    width: 24,

    height: 24,

  },

  boardTitle: {

    fontSize: 16,

    fontWeight: '600',

    marginBottom: 5,

  },

  taskCount: {

    fontSize: 14,

    color: '#8E8E93',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    backgroundColor: '#6A5ACD',

    paddingVertical: 10,

    borderTopLeftRadius: 20,

    borderTopRightRadius: 20,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

    tintColor: '#FFFFFF',

  },

  addButton: {

    backgroundColor: '#FF6B6B',

    width: 50,

    height: 50,

    borderRadius: 25,

    justifyContent: 'center',

    alignItems: 'center',

    elevation: 5,

  },

  addButtonText: {

    fontSize: 30,

    color: 'white',

  },

});



export default BoardScreen;