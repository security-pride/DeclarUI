import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const data = [
  { id: '1', title: 'Apps', items: '1,427', size: '55 GB', progress: 0.7 },
  { id: '2', title: 'Videos', items: '53', size: '9.9 GB', progress: 0.4 },
  { id: '3', title: 'Document', items: '127', size: '9.0 GB', progress: 0.5 },
  { id: '4', title: 'Images', items: '1,432', size: '6.8 GB', progress: 0.35 },
  { id: '5', title: 'Audio', items: '421', size: '116 MB', progress: 0.15 },
];

const StorageDetailsScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.details}>{`${item.items} items ⸱ ${item.size}`}</Text>
      </View>
      <View style={styles.progress}>
        <View style={[styles.progressBar, { width: `${item.progress * 100}%` }]} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={24} color="#000" />
        <Text style={styles.headerText}>Internal Storage</Text>
      </View>
      <View style={styles.chartContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.chart} />
        <Text style={styles.percentage}>66%</Text>
        <View style={styles.storageInfo}>
          <View style={styles.storageBlock}>
            <Text style={styles.storageValue}>85 GB</Text>
            <Text style={styles.storageLabel}>Used</Text>
          </View>
          <View style={styles.storageBlock}>
            <Text style={styles.storageValue}>43 GB</Text>
            <Text style={styles.storageLabel}>Available</Text>
          </View>
          <View style={styles.storageBlock}>
            <Text style={styles.storageValue}>256 GB</Text>
            <Text style={styles.storageLabel}>Total</Text>
          </View>
        </View>
      </View>
      <View style={styles.freeUpSpace}>
        <Icon name="broom" size={24} color="#f8b400" />
        <View style={styles.freeUpText}>
          <Text style={styles.freeTitle}>Free up space</Text>
          <Text style={styles.freeDetails}>Go to Clean to manage and free up space</Text>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10
  },
  chartContainer: {
    alignItems: 'center',
    marginBottom: 30
  },
  chart: {
    width: 150,
    height: 150
  },
  percentage: {
    position: 'absolute',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000'
  },
  storageInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: '100%'
  },
  storageBlock: {
    alignItems: 'center'
  },
  storageValue: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  storageLabel: {
    fontSize: 14,
    color: '#888'
  },
  freeUpSpace: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20
  },
  freeUpText: {
    marginLeft: 10
  },
  freeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
  },
  freeDetails: {
    fontSize: 14,
    color: '#888'
  },
  list: {
    marginTop: 10
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10
  },
  info: {
    flex: 1
  },
  title: {
    fontSize: 16,
    color: '#000'
  },
  details: {
    fontSize: 14,
    color: '#888'
  },
  progress: {
    width: 100,
    height: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4a90e2',
    borderRadius: 5
  }
});

export default StorageDetailsScreen;