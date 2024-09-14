import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DashboardScreen = () => {
  const chartData = [
    { key: '1', color: '#FF6B6B', percentage: '15%' },
    { key: '2', color: '#4C74FF', percentage: '13%' },
    { key: '3', color: '#28D8A2', percentage: '28%' },
  ];

  const taskData = [
    { key: '1', icon: 'folder-outline', title: 'Total task', count: '55', color: '#D1DFFF' },
    { key: '2', icon: 'checkmark-circle-outline', title: 'Completed', count: '13', color: '#E0DFFF' },
    { key: '3', icon: 'timer-outline', title: 'Working on', count: '25', color: '#DFFFE2' },
    { key: '4', icon: 'alert-circle-outline', title: 'Pending', count: '17', color: '#FFD9D1' },
  ];

  const renderChart = () => (
    <View style={styles.chartContainer}>
      {chartData.map((item) => (
        <View key={item.key} style={[styles.chartSlice, { backgroundColor: item.color }]}>
          <Text style={styles.chartText}>{item.percentage}</Text>
        </View>
      ))}
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
        <Icon name={item.icon} size={24} color="#333" />
      </View>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemCount}>{item.count}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      {renderChart()}
      <FlatList
        data={taskData}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#23326A',
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  chartSlice: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chartText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#F1F3FA',
    borderRadius: 10,
    marginBottom: 10,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  itemTitle: {
    flex: 1,
    fontSize: 16,
    color: '#23326A',
  },
  itemCount: {
    fontSize: 16,
    color: '#23326A',
  },
});

export default DashboardScreen;