import React from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello Liana</Text>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={require('../assets/snack-icon.png')} />
        </View>
      </View>
      <Text style={styles.tasksText}>You've got <Text style={styles.tasksNumber}>4 tasks today</Text></Text>
      
      <Text style={styles.sectionHeader}>Courses</Text>
      <Text style={styles.subHeader}>Your running subjects</Text>
      
      <View style={styles.cardContainer}>
        <TouchableOpacity style={[styles.card, { backgroundColor: 'pink' }]} onPress={() => { /* Navigate to Mathematics details */ }}>
          <Text style={styles.cardText}>Mathematics</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, { backgroundColor: 'orange' }]} onPress={() => { /* Navigate to Chemistry details */ }}>
          <Text style={styles.cardText}>Chemistry</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.sectionHeader}>Your schedule</Text>
      <Text style={styles.subHeader}>Upcoming classes and tasks</Text>
      
      <View style={styles.scheduleCard}>
        <View style={styles.scheduleHeader}>
          <Text style={styles.scheduleText}>Physics</Text>
          <TouchableOpacity onPress={() => { /* Navigate to Classroom screen */ }}>
            <Icon name="info" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.chapterText}>Chapter 3: Force</Text>
        <View style={styles.scheduleDetails}>
          <Icon name="access-time" size={16} color="#fff" />
          <Text style={styles.scheduleDetailsText}>09:30</Text>
        </View>
        <View style={styles.scheduleDetails}>
          <Icon name="person" size={16} color="#fff" />
          <Text style={styles.scheduleDetailsText}>Alex Jesus</Text>
        </View>
        <View style={styles.scheduleDetails}>
          <Icon name="videocam" size={16} color="#fff" />
          <Text style={styles.scheduleDetailsText}>Google Meet</Text>
        </View>
      </View>
      
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={24} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>
          <Icon name="assignment" size={24} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Classroom')}>
          <Icon name="class" size={24} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Discussion')}>
          <Icon name="chat" size={24} color="grey" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  tasksText: {
    fontSize: 20,
    marginVertical: 8,
  },
  tasksNumber: {
    color: 'green',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  subHeader: {
    fontSize: 14,
    color: 'grey',
    marginBottom: 8,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  card: {
    width: 150,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 8,
  },
  cardText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  scheduleCard: {
    backgroundColor: '#607D8B',
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
  },
  scheduleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scheduleText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  chapterText: {
    color: '#fff',
    marginTop: 8,
  },
  scheduleDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  scheduleDetailsText: {
    color: '#fff',
    marginLeft: 4,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
});

export default HomeScreen;