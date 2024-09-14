import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>9:41</Text>
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard</Text>
        <Image style={styles.avatar} source={require('../assets/snack-icon.png')} />
      </View>
      <View style={styles.chart}>
        <Image style={styles.pieImage} source={require('../assets/snack-icon.png')} />
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Icon name="folder" size={24} color="#999" />
          <Text style={styles.statText}>Total task</Text>
          <Text style={styles.statValue}>55</Text>
        </View>
        <View style={styles.statItem}>
          <Icon name="checkmark" size={24} color="#999" />
          <Text style={styles.statText}>Completed</Text>
          <Text style={styles.statValue}>13</Text>
        </View>
        <View style={styles.statItem}>
          <Icon name="activity" size={24} color="#999" />
          <Text style={styles.statText}>Working on</Text>
          <Text style={styles.statValue}>25</Text>
        </View>
        <View style={styles.statItem}>
          <Icon name="plus" size={24} color="#999" />
          <Text style={styles.statText}>Pending</Text>
          <Text style={styles.statValue}>17</Text>
        </View>
      </View>
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Board')}>
          <Icon name="grid-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Icon name="checkmark-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AddTask')}>
          <View style={styles.addButton}>
            <Icon name="add" size={30} color="#fff" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Task')}>
          <Icon name="document-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Message')}>
          <Icon name="chatbubble-ellipses-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FE',
  },
  timeText: {
    position: 'absolute',
    top: 10,
    left: 10,
    fontSize: 16,
    color: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  chart: {
    alignItems: 'center',
    marginVertical: 20,
  },
  pieImage: {
    width: 200,
    height: 200,
  },
  statsContainer: {
    paddingHorizontal: 20,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  statText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
    color: '#333',
  },
  statValue: {
    fontSize: 18,
    color: '#000',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#5A67F2',
    paddingVertical: 15,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  addButton: {
    width: 60,
    height: 60,
    backgroundColor: '#F3704D',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default DashboardScreen;