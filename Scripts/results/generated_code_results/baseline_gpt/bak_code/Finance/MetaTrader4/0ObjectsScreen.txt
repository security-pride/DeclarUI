import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ObjectsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Objects</Text>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="delete" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.addObjectContainer}>
        <Text style={styles.addObjectText}>Add Object</Text>
        <Icon name="chevron-right" size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.iconRow}>
        <Icon name="format-underline" size={30} color="dodgerblue" />
        <Icon name="format-align-left" size={30} color="dodgerblue" />
        <Icon name="show-chart" size={30} color="dodgerblue" />
        <Icon name="rotate-right" size={30} color="dodgerblue" />
        <Icon name="more-vert" size={30} color="dodgerblue" />
        <Icon name="trending-up" size={30} color="dodgerblue" />
      </View>
      <Text style={styles.instructionText}>
        Long tap the object on the chart to edit or delete it
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  iconButton: {
    padding: 5,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
  },
  addObjectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2f2f2f',
    padding: 15,
    marginVertical: 10,
  },
  addObjectText: {
    color: 'white',
    fontSize: 16,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 20,
  },
  instructionText: {
    color: 'gray',
    textAlign: 'center',
    padding: 20,
  },
});

export default ObjectsScreen;