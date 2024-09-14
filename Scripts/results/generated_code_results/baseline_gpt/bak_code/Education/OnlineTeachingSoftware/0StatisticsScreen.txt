import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const StatisticsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Statistic</Text>
        <TouchableOpacity style={styles.notificationIcon}>
          <Icon name="notifications-outline" size={24} color="#C6C6C8" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Learning Progress</Text>
          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>Weekly</Text>
            <Icon name="caret-down-outline" size={16} color="#C6C6C8" />
          </TouchableOpacity>
        </View>

        <View style={styles.chart}>
          {/* A placeholder for the chart, replace with a desired chart library */}
          <Text>Chart Placeholder</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Course Progress (4)</Text>

        <View style={styles.courseCard}>
          <View style={styles.courseInfo}>
            <Text style={styles.courseCategory}>Programming</Text>
            <Text style={styles.courseTitle}>Bootstrapping Fundamental Principles</Text>
            <View style={styles.rating}>
              <Icon name="star" size={14} color="#F4C10F" />
              <Text style={styles.ratingText}> 4.7 (1,242 Reviews)</Text>
            </View>
            <View style={styles.progressBar}>
              <View style={styles.progressFill} />
            </View>
            <Text style={styles.progressPercentage}>74%</Text>
          </View>
          <Image source={require('../assets/snack-icon.png')} style={styles.courseImage} />
        </View>
        
        {/* Additional course cards can be added similarly */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F9',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  notificationIcon: {
    padding: 8,
    backgroundColor: '#FFF',
    borderRadius: 30,
    elevation: 1,
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 16,
    elevation: 3,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#F1F2F3',
    borderRadius: 15,
  },
  dropdownText: {
    marginRight: 4,
    color: '#333',
  },
  chart: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F9',
    borderRadius: 10,
  },
  courseCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginVertical: 10,
    padding: 16,
    elevation: 2,
    alignItems: 'center',
  },
  courseInfo: {
    flex: 3,
    paddingRight: 16,
  },
  courseCategory: {
    fontSize: 12,
    color: '#8C8C8C',
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 4,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  ratingText: {
    fontSize: 12,
    color: '#8C8C8C',
  },
  progressBar: {
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
    overflow: 'hidden',
    marginVertical: 4,
  },
  progressFill: {
    width: '74%',
    height: '100%',
    backgroundColor: '#6C63FF',
  },
  progressPercentage: {
    fontSize: 12,
    color: '#8C8C8C',
    alignSelf: 'flex-end',
  },
  courseImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
});

export default StatisticsScreen;