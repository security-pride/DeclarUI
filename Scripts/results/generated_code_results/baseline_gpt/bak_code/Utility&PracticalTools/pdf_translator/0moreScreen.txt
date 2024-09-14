import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const moreScreen = () => {

  const files = [
    { id: '1', name: 'Travel plan_America.pdf', date: 'Oct 22, 2022', size: '98KB' },
    { id: '2', name: 'Travel plan_America.pdf', date: 'Oct 22, 2022', size: '98KB' },
    { id: '3', name: 'Travel plan_America.pdf', date: 'Oct 22, 2022', size: '98KB' }
  ];

  const renderItem = ({ item }) => (
    <View style={styles.fileItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.fileIcon} />
      <View style={styles.fileInfo}>
        <Text style={styles.fileName}>{item.name}</Text>
        <Text style={styles.fileDetails}>{item.date}   {item.size}</Text>
      </View>
      <TouchableOpacity>
        <Icon name="more-vert" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PDF file management</Text>
      <FlatList
        data={files}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View style={styles.actionMenu}>
        <TouchableOpacity style={styles.actionItem}>
          <Icon name="share" size={20} color="#000" />
          <Text style={styles.actionText}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionItem}>
          <Icon name="edit" size={20} color="#000" />
          <Text style={styles.actionText}>Rename</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionItem}>
          <Icon name="delete" size={20} color="#000" />
          <Text style={styles.actionText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#EFEFEF'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16
  },
  fileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginBottom: 8,
    padding: 12,
    borderRadius: 8
  },
  fileIcon: {
    width: 40,
    height: 40,
    marginRight: 12
  },
  fileInfo: {
    flex: 1
  },
  fileName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  fileDetails: {
    fontSize: 12,
    color: '#666'
  },
  actionMenu: {
    backgroundColor: '#FFF',
    paddingVertical: 16,
    paddingHorizontal: 32,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8
  },
  actionItem: {
    alignItems: 'center'
  },
  actionText: {
    fontSize: 14,
    marginTop: 4
  }
});

export default moreScreen;