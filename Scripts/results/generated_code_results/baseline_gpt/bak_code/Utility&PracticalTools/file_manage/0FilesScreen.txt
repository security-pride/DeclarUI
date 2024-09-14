import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const folders = [
  { id: '1', name: 'Alarms', items: '1 item', size: '1 KB' },
  { id: '2', name: 'Android', items: '6 items', size: '12 MB' },
  { id: '3', name: 'Backups', items: '1 item', size: '821 MB' },
  { id: '4', name: 'Browser', items: '3 items', size: '204 KB' },
  { id: '5', name: 'Canva', items: '23 items', size: '98 MB' },
  { id: '6', name: 'DCIM', items: '3 items', size: '18.4 GB' },
  { id: '7', name: 'Documents', items: '6 items', size: '2.4 GB' },
  { id: '8', name: 'Download', items: '5 items', size: '4.6 GB' },
  { id: '9', name: 'Notifications', items: '8 items', size: '320 KB' },
];

const FilesScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemIcon}>
        <Image source={require('../assets/snack-icon.png')} style={styles.folderIcon} />
      </View>
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDetails}>{item.items} ⚬ {item.size}</Text>
      </View>
      <TouchableOpacity style={styles.moreIcon}>
        <MaterialIcons name="more-vert" size={24} color="#707070" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Internal Storage</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Icon name="add" size={24} color="#000" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="search" size={24} color="#000" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="grid-view" size={24} color="#000" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={folders}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 16,
  },
  list: {
    paddingBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  itemIcon: {
    marginRight: 16,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '500',
  },
  itemDetails: {
    fontSize: 14,
    color: '#707070',
  },
  moreIcon: {
    marginLeft: 16,
  },
  folderIcon: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
});

export default FilesScreen;