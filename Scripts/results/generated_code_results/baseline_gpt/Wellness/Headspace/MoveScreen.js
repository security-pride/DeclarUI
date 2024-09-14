import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MoveScreen = () => {
  const featuredWorkout = {
    title: 'Easy Evening Stretch',
    time: '9 min',
    image: require('../assets/snack-icon.png'),
  };

  const recentWorkouts = [
    {
      title: 'Stress Release',
      time: '29 min',
      image: require('../assets/snack-icon.png'),
    },
    {
      title: 'Day 1',
      time: '22 min',
      image: require('../assets/snack-icon.png'),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={24} color="white" />
        <Text style={styles.headerTitle}>Move</Text>
      </View>

      <View style={styles.featured}>
        <Image source={featuredWorkout.image} style={styles.featuredImage} />
        <View style={styles.featuredOverlay}>
          <Text style={styles.featuredLabel}>Featured</Text>
          <Text style={styles.featuredTitle}>{featuredWorkout.title}</Text>
          <Text style={styles.featuredSubtitle}>{`Workout • ${featuredWorkout.time}`}</Text>
          <TouchableOpacity style={styles.playButton}>
            <Icon name="lock-closed" size={16} color="white" />
            <Text style={styles.playButtonText}>Play</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tabs}>
        <Text style={styles.tabText}>Recent</Text>
        <Text style={styles.tabTextActive}>Featured</Text>
      </View>

      <FlatList
        data={recentWorkouts}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View style={styles.workoutItem}>
            <Image source={item.image} style={styles.workoutImage} />
            <View style={styles.workoutDetails}>
              <Text style={styles.workoutTitle}>{item.title}</Text>
              <Text style={styles.workoutSubtitle}>{`Workout • ${item.time}`}</Text>
            </View>
            <Icon name="chevron-forward" size={24} color="white" />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C0C25',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    marginLeft: 8,
  },
  featured: {
    backgroundColor: '#2E57FF',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    alignItems: 'center',
    padding: 16,
    marginBottom: 16,
  },
  featuredImage: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    marginBottom: 16,
  },
  featuredOverlay: {
    position: 'absolute',
    alignItems: 'center',
  },
  featuredLabel: {
    color: 'white',
    backgroundColor: '#2E2C3C',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
  featuredTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  featuredSubtitle: {
    color: 'white',
    marginBottom: 16,
  },
  playButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0C0C25',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 24,
  },
  playButtonText: {
    color: 'white',
    marginLeft: 8,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  tabText: {
    color: 'white',
    opacity: 0.5,
  },
  tabTextActive: {
    color: 'white',
    borderBottomWidth: 2,
    borderBottomColor: 'white',
  },
  workoutItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#2E2C3C',
  },
  workoutImage: {
    width: 75,
    height: 75,
    borderRadius: 8,
    marginRight: 16,
  },
  workoutDetails: {
    flex: 1,
  },
  workoutTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
  workoutSubtitle: {
    color: '#B0B0C3',
  },
});

export default MoveScreen;