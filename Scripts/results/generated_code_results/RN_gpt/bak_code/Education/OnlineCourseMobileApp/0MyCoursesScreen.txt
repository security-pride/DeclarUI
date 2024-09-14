import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, Octicons } from 'react-native-vector-icons';

const MyCoursesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Courses</Text>
        <View style={styles.notification}>
          <Ionicons name="notifications" size={24} color="#000" />
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationText}>9+</Text>
          </View>
        </View>
      </View>

      <View style={styles.tabs}>
        <Text style={[styles.tab, styles.activeTab]}>Ongoing <View style={styles.badge}><Text style={styles.badgeText}>8</Text></View></Text>
        <Text style={styles.tab}>Completed <View style={styles.badge}><Text style={styles.badgeText}>12</Text></View></Text>
      </View>

      <ScrollView>
        {[1, 2, 3].map((item, index) => (
          <TouchableOpacity key={index} style={styles.card} onPress={() => navigation.navigate('CourseDetail')}>
            <View style={styles.cardIcon}>
              <Image source={require('../assets/snack-icon.png')} style={styles.iconImage} />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.courseTitle}>Graphics Designer for Beginner</Text>
              <Text style={styles.instructor}>Nicola Tesla</Text>
              <View style={styles.ratingContainer}>
                <Image source={require('../assets/snack-icon.png')} style={styles.starIcon} />
                <Text style={styles.ratingText}>4.9 (1.435 Reviews)</Text>
              </View>
              <Text style={styles.sessions}>Sessions 7 / 15</Text>
              <Text style={styles.progress}>82%</Text>
            </View>
            <Button title="..." onPress={() => {}} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.bottomNav}>
        <Ionicons name="home-outline" size={24} color="#7e7e7e" />
        <Ionicons name="search-outline" size={24} color="#7e7e7e" />
        <Ionicons name="book-outline" size={24} color="#000" />
        <Ionicons name="person-outline" size={24} color="#7e7e7e" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  notification: {
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#f00',
    borderRadius: 10,
    padding: 2,
    paddingHorizontal: 5,
  },
  notificationText: {
    color: '#fff',
    fontSize: 10,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 8,
  },
  tab: {
    fontSize: 16,
    color: '#999',
  },
  activeTab: {
    color: '#000',
    fontWeight: 'bold',
  },
  badge: {
    backgroundColor: '#0f0',
    borderRadius: 5,
    paddingHorizontal: 4,
    marginLeft: 4,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 8,
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  cardIcon: {
    marginRight: 16,
  },
  iconImage: {
    width: 40,
    height: 40,
  },
  cardContent: {
    flex: 1,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  instructor: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  starIcon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  ratingText: {
    fontSize: 14,
    color: '#999',
  },
  sessions: {
    fontSize: 14,
    color: '#999',
    marginBottom: 4,
  },
  progress: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0a0',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 8,
  },
});

export default MyCoursesScreen;