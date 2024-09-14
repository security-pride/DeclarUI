import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const data = [
  { id: '1', fileName: 'Travel plan_America.pdf', date: 'Oct 22, 2022', size: '98KB' },
  { id: '2', fileName: 'Travel plan_America.pdf', date: 'Oct 22, 2022', size: '98KB' },
  { id: '3', fileName: 'Travel plan_America.pdf', date: 'Oct 22, 2022', size: '98KB' },
];

const selectScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <View style={styles.fileInfo}>
        <Text style={styles.fileName}>{item.fileName}</Text>
        <Text style={styles.fileDetails}>{item.date}  {item.size}</Text>
      </View>
      <Icon name="more-vert" size={24} color="black" />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>PDF file management</Text>
        <View style={styles.headerIcons}>
          <Icon name="search" size={24} color="black" style={styles.headerIcon} />
          <Icon name="more-vert" size={24} color="black" style={styles.headerIcon} />
        </View>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />

      <TouchableOpacity style={styles.fab}>
        <Icon name="add" size={30} color="white" />
      </TouchableOpacity>

      <View style={styles.modal}>
        <TouchableOpacity style={styles.modalButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.modalIcon} />
          <Text style={styles.modalText}>DOC TO PDF</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.modalButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.modalIcon} />
          <Text style={styles.modalText}>IMG TO PDF</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  headerIcon: {
    marginLeft: 16,
  },
  list: {
    paddingHorizontal: 16,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  fileInfo: {
    flex: 1,
  },
  fileName: {
    fontSize: 16,
  },
  fileDetails: {
    color: '#888',
    marginTop: 4,
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#f54b42',
    height: 56,
    width: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  modal: {
    position: 'absolute',
    bottom: 80,
    left: 50,
    right: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  modalButton: {
    alignItems: 'center',
  },
  modalIcon: {
    width: 50,
    height: 50,
  },
  modalText: {
    marginTop: 10,
    fontSize: 14,
    color: '#333',
  },
});

export default selectScreen;