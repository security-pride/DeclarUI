import React from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DATA = [
  { id: '1', title: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },
  { id: '2', title: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },
  { id: '3', title: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },
  { id: '4', title: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },
  { id: '5', title: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },
];

const searchScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.date}     {item.size}</Text>
      </View>
      <Icon name="ellipsis-vertical" size={20} color="#000" style={styles.moreIcon} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>PDF file management</Text>
      <View style={styles.searchBox}>
        <Icon name="search" size={20} color="#A9A9A9" style={styles.searchIcon} />
        <TextInput style={styles.input} placeholder="Search your files" />
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
      <TouchableOpacity style={styles.fab}>
        <Icon name="add" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  list: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 8,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 14,
    color: '#A9A9A9',
  },
  moreIcon: {
    marginLeft: 8,
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: '#FF5252',
    borderRadius: 30,
    padding: 16,
    elevation: 5,
  },
});

export default searchScreen;