import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const StatisticsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Graphic</Text>
      <View style={styles.graphicBox}>
        <View style={styles.row}>
          <Text style={styles.priority}>Priority</Text>
          <View style={styles.legend}>
            <View style={styles.legendItem}>
              <View style={[styles.legendCircle, { backgroundColor: '#EE867A' }]} />
              <Text style={styles.legendText}>Personal</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendCircle, { backgroundColor: '#848CC5' }]} />
              <Text style={styles.legendText}>Private</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendCircle, { backgroundColor: '#7FC9CF' }]} />
              <Text style={styles.legendText}>Secret</Text>
            </View>
          </View>
        </View>
        <Image source={require('../assets/snack-icon.png')} style={styles.graphicImage} />
      </View>

      <Text style={styles.header}>Your Activity</Text>
      <View style={styles.activityBox}>
        <View style={styles.row}>
          <MaterialCommunityIcons name="chevron-left" size={24} color="#848CC5" />
          <Text style={styles.activityMonth}>April 2021</Text>
          <MaterialCommunityIcons name="chevron-right" size={24} color="#848CC5" />
        </View>
        <Image source={require('../assets/snack-icon.png')} style={styles.activityImage} />
      </View>

      <View style={styles.bottomNav}>
        <MaterialCommunityIcons name="home-outline" size={24} color="#848CC5" />
        <MaterialCommunityIcons name="plus-circle" size={48} color="#7FC9CF" />
        <MaterialCommunityIcons name="chart-bar" size={24} color="#7FC9CF" />
        <MaterialCommunityIcons name="calendar" size={24} color="#848CC5" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#F7F8FA',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2B2E5C',
    marginBottom: 10,
  },
  graphicBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  priority: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2B2E5C',
  },
  legend: {
    flexDirection: 'row',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  legendCircle: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  legendText: {
    fontSize: 12,
    color: '#2B2E5C',
    marginLeft: 4,
  },
  graphicImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  activityBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 3,
  },
  activityMonth: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2B2E5C',
  },
  activityImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginTop: 20,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 3,
    marginTop: 20,
  },
});

export default StatisticsScreen;