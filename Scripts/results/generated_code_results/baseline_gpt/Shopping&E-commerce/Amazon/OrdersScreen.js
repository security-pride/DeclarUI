import React from 'react';
import { View, Text, TextInput, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ordersData = [
  {
    id: '1',
    image: require('../assets/snack-icon.png'),
    title: 'SmithPackaging Large Bubble Wrap Roll 300mm x 5m - Small',
    date: 'Delivered 10 June',
  },
  {
    id: '2',
    image: require('../assets/snack-icon.png'),
    title: 'AYhome Travel Pillow, Memory Foam Neck Pillow for Travel',
    date: 'Delivered 10 June',
  },
  {
    id: '3',
    image: require('../assets/snack-icon.png'),
    title: 'Toyama Koshihikari 1kg',
    date: 'Delivered 28 May',
  },
];

const OrdersScreen = () => {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Amazon.co.uk"
          placeholderTextColor="#888"
        />
        <Icon name="search" size={24} color="#888" style={styles.searchIcon} />
      </View>

      {/* Header */}
      <Text style={styles.headerText}>Your Orders</Text>

      {/* Filter */}
      <View style={styles.filterContainer}>
        <TextInput
          style={styles.filterInput}
          placeholder="Search all orders"
          placeholderTextColor="#888"
        />
        <TouchableOpacity>
          <View style={styles.filterButton}>
            <Text style={styles.filterText}>Filter</Text>
            <Icon name="arrow-forward" size={16} color="#888" />
          </View>
        </TouchableOpacity>
      </View>
      
      {/* Buy Again Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Buy again</Text>
        <TouchableOpacity>
          <Text style={styles.seeMoreText}>See more</Text>
        </TouchableOpacity>
      </View>

      {/* Orders List */}
      <FlatList
        data={ordersData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.orderItem}>
            <Image source={item.image} style={styles.orderImage} />
            <View style={styles.orderDetails}>
              <Text style={styles.orderTitle}>{item.title}</Text>
              <Text style={styles.orderDate}>{item.date}</Text>
            </View>
            <Icon name="arrow-forward" size={24} color="#888" />
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 5,
    margin: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  searchIcon: {
    marginLeft: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  filterInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 5,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  filterText: {
    fontSize: 16,
    color: '#888',
    marginRight: 5,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeMoreText: {
    fontSize: 16,
    color: '#0066C0',
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  orderImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  orderDetails: {
    flex: 1,
  },
  orderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  orderDate: {
    fontSize: 14,
    color: '#666',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginHorizontal: 10,
  },
});

export default OrdersScreen;