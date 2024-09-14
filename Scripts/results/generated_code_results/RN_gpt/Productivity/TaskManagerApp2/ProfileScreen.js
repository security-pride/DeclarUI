import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('../assets/snack-icon.png')} 
          style={styles.avatar}
        />
        <Text style={styles.userName}>Steve Job</Text>
        <Text style={styles.userEmail}>SteveJob@gmail.com</Text>
        <Pressable style={styles.moreOptions}>
          <Icon name="more-vert" size={24} />
        </Pressable>
      </View>

      <View style={styles.taskCategories}>
        <View style={styles.taskCategory}>
          <Icon name="person" size={24} />
          <Text>Personal</Text>
          <Text>6 Task</Text>
        </View>
        <View style={styles.taskCategory}>
          <Icon name="work" size={24} />
          <Text>Work</Text>
          <Text>8 Task</Text>
        </View>
        <View style={styles.taskCategory}>
          <Icon name="lock" size={24} />
          <Text>Private</Text>
          <Text>3 Task</Text>
        </View>
        <View style={styles.taskCategory}>
          <Icon name="group" size={24} />
          <Text>Meeting</Text>
          <Text>4 Task</Text>
        </View>
        <View style={styles.taskCategory}>
          <Icon name="event" size={24} />
          <Text>Events</Text>
          <Text>4 Task</Text>
        </View>
        <TouchableOpacity 
          style={styles.taskCategory} 
          onPress={() => navigation.navigate('AddTask')}
        >
          <Icon name="add" size={24} />
          <Text>Create Board</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="list" size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="add-circle" size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="bar-chart" size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="account-circle" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    marginVertical: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  userEmail: {
    fontSize: 14,
    color: 'gray',
  },
  moreOptions: {
    position: 'absolute',
    top: 10,
    right: 20,
  },
  taskCategories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  taskCategory: {
    width: '40%',
    margin: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
  },
  bottomNav: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});

export default ProfileScreen;