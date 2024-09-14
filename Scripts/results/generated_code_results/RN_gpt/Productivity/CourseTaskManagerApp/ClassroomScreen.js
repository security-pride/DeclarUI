import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Button } from 'react-native';

const ClassroomScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.dateText}>Today, 17 Sept</Text>
        <Button title="+ Add Class" onPress={() => {}} />
      </View>

      <Text style={styles.title}>Classroom</Text>

      <ImageBackground
        source={require('../assets/snack-icon.png')}
        style={styles.classImage}
      >
        {/* Additional Image details such as tags could be here */}
      </ImageBackground>

      <View style={styles.classDetails}>
        <Text style={styles.subject}>📘 Physics</Text>
        <Text>⚛️ Chapter 3: Force</Text>
        <Text>👤 Alex Jesus</Text>
        <Text>🧑‍🎓 45 Enrolled</Text>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity>
          <Text style={styles.activeTab}>Description</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Discussion</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Resources</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.description}>
        <Text>About this class</Text>
        <Text>
          Force: The push or pull on an object with mass that causes it to change its velocity.
          Force is an external agent capable of changing the state of rest or motion of a particular body.
          It has a magnitude and a direction. The direction towards which the force is applied is known as the direction of the force and the application of force is in a point where force is applied.
        </Text>
      </View>

      <View style={styles.navigationBar}>
        <TouchableOpacity onPress={() => {}}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text>Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.activeNav}>Classroom</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text>Chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 16,
    color: 'gray',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  classImage: {
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },
  classDetails: {
    marginVertical: 10,
  },
  subject: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  activeTab: {
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  description: {
    marginVertical: 20,
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  activeNav: {
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
});

export default ClassroomScreen;