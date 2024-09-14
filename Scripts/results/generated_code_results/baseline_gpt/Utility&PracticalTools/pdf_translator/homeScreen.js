import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PDF_DATA = [
  { id: '1', title: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },
  { id: '2', title: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },
  { id: '3', title: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },
  { id: '4', title: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },
  { id: '5', title: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },
];

const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
    <View style={styles.info}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subTitle}>{`${item.date}     ${item.size}`}</Text>
    </View>
    <TouchableOpacity>
      <Icon name="ellipsis-vertical" size={20} color="#000" />
    </TouchableOpacity>
  </View>
);

const homeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>PDF file management</Text>
        <View style={styles.headerIcons}>
          <Icon name="search-outline" size={24} color="#000" style={styles.iconMargin}/>
          <Icon name="filter-outline" size={24} color="#000" />
        </View>
      </View>
      <FlatList
        data={PDF_DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
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
    backgroundColor: '#FDEEEE',
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconMargin: {
    marginRight: 15,
  },
  list: {
    paddingBottom: 60, // Add padding for the floating button
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  subTitle: {
    fontSize: 14,
    color: '#888',
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#F55A4E',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default homeScreen;