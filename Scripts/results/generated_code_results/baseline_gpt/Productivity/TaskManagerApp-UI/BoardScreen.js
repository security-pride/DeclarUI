import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BoardTile = ({ iconName, title, taskCount, iconColor }) => (
  <View style={styles.tile}>
    <View style={[styles.iconContainer, { backgroundColor: `${iconColor}20` }]}>
      <Icon name={iconName} size={30} color={iconColor} />
    </View>
    <Text style={styles.tileTitle}>{title}</Text>
    <Text style={styles.tileTaskCount}>{taskCount} Task</Text>
  </View>
);

const BoardScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Board</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
      </View>

      <View style={styles.grid}>
        <BoardTile iconName="account" title="Personal" taskCount="17" iconColor="#5D5FEF" />
        <BoardTile iconName="gift" title="Work" taskCount="10" iconColor="#F29682" />
        <BoardTile iconName="lock" title="Private" taskCount="2" iconColor="#43D9BE" />
        <BoardTile iconName="account-group" title="Meeting" taskCount="5" iconColor="#5D5FEF" />
        <BoardTile iconName="calendar" title="Events" taskCount="3" iconColor="#F29682" />
        <BoardTile iconName="plus-circle" title="Create Board" taskCount="" iconColor="#43D9BE" />
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="view-dashboard" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="calendar-check" size={30} color="#fff" />
        </TouchableOpacity>
        <View style={styles.addButton}>
          <Icon name="plus" size={30} color="#fff" />
        </View>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="view-stream" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="message-text" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FF',
    padding: 20,
    paddingBottom: 0,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1F2024',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  tile: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  tileTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2024',
    marginBottom: 5,
  },
  tileTaskCount: {
    fontSize: 14,
    color: '#BABABA',
  },
  bottomNav: {
    backgroundColor: '#5D5FEF',
    height: 70,
    borderRadius: 35,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navButton: {
    padding: 10,
  },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F29682',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -30,
  },
});

export default BoardScreen;