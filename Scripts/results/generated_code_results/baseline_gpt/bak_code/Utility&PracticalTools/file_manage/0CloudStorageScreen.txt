import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const CloudStorageScreen = () => {
  const data = [
    { id: '1', name: 'Dropbox', items: '2 items', size: '1.2 Gb', progress: 12, icon: 'cloud-outline' },
    { id: '2', name: 'Kangxpukul@gmail.com', items: '4 items', size: '13.5 Gb', progress: 52, icon: 'cloud-outline' },
    { id: '3', name: 'Nirwna - OneDrive', items: '5 items', size: '184.3 Gb', progress: 31, icon: 'cloud-outline' },
    { id: '4', name: 'PIDT - OneDrive', items: '7 items', size: '131.1 Gb', progress: 62, icon: 'cloud-outline' },
  ];

  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        <MaterialIcon name="dots-horizontal" size={24} color="grey" />
      </View>
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardSubtitle}>
        {item.items} ⨉ {item.size}
      </Text>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${item.progress}%` }]} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Cloud Storage</Text>
        <TouchableOpacity>
          <Icon name="add" size={28} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.filterBar}>
        <Text style={styles.filterText}>A - Z</Text>
        <Icon name="caret-down" size={16} color="grey" />
        <MaterialIcon name="view-list" size={24} color="grey" style={styles.viewIcon} />
      </View>
      <FlatList
        data={data}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#f9f9f9'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333'
  },
  filterBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  filterText: {
    fontSize: 16,
    color: 'grey',
    marginRight: 5,
  },
  viewIcon: {
    marginLeft: 'auto',
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    margin: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    width: 40,
    height: 40,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 12,
    color: 'grey',
    marginBottom: 10,
  },
  progressBar: {
    height: 5,
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 2.5,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2196F3',
  },
});

export default CloudStorageScreen;