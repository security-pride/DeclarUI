import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DATA = [
  {
    id: '1',
    logo: require('../assets/snack-icon.png'),
    title: 'Dropbox',
    items: '2 items',
    size: '1.2 Gb',
  },
  {
    id: '2',
    logo: require('../assets/snack-icon.png'),
    title: 'Kangxpukul@gmail.com',
    items: '4 items',
    size: '13.5 Gb',
  },
  {
    id: '3',
    logo: require('../assets/snack-icon.png'),
    title: 'Nirwna - OneDrive',
    items: '5 items',
    size: '184.3 Gb',
  },
  {
    id: '4',
    logo: require('../assets/snack-icon.png'),
    title: 'PIDT - OneDrive',
    items: '7 items',
    size: '131.1 Gb',
  },
];

const CloudStorageListViewScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.logo} style={styles.itemLogo} />
      <View style={styles.itemContent}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemInfo}>{item.items} | {item.size}</Text>
      </View>
      <TouchableOpacity style={styles.moreButton}>
        <Icon name="ellipsis-vertical" size={20} color="#6e6e6e" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cloud Storage</Text>
        <View style={styles.headerRight}>
          <Text style={styles.sortText}>A - Z</Text>
          <Icon name="add" size={24} style={styles.icon} />
          <Icon name="grid" size={24} style={styles.icon} />
        </View>
      </View>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortText: {
    fontSize: 16,
    color: '#6e6e6e',
    marginRight: 10,
  },
  icon: {
    marginHorizontal: 8,
    color: '#6e6e6e',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
  },
  itemLogo: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  itemInfo: {
    fontSize: 14,
    color: '#6e6e6e',
  },
  moreButton: {
    padding: 8,
  },
});

export default CloudStorageListViewScreen;