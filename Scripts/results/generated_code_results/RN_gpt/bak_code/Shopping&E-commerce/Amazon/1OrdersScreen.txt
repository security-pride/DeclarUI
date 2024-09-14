import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // For icons

const OrdersScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Orders</Text>
        <View style={styles.searchBar}>
          <Icon name="search" size={20} color="#000" />
          <TextInput style={styles.searchInput} placeholder="Search all orders" />
          <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
            <Text style={styles.filterText}>Filter</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <Text style={styles.sectionHeader}>Buy again</Text>
      <View style={styles.buyAgainSection}>
        <Image source={require('../assets/snack-icon.png')} style={styles.buyAgainImage} />
        <Image source={require('../assets/snack-icon.png')} style={styles.buyAgainImage} />
        <Image source={require('../assets/snack-icon.png')} style={styles.buyAgainImage} />
        <Image source={require('../assets/snack-icon.png')} style={styles.buyAgainImage} />
      </View>
      
      <Text style={styles.filterLabel}>Past three months</Text>
      <View style={styles.orderItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.productImage} />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>SmithPackaging Large Bubble Wrap Roll...</Text>
          <Text style={styles.deliveryDate}>Delivered 10 June</Text>
        </View>
        <TouchableOpacity style={styles.arrowButton}>
          <Icon name="chevron-right" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.orderItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.productImage} />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>AYhome Travel Pillow, Memory Foam Neck...</Text>
          <Text style={styles.deliveryDate}>Delivered 10 June</Text>
        </View>
        <TouchableOpacity style={styles.arrowButton}>
          <Icon name="chevron-right" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.orderItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.productImage} />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>Toyama Koshihikari 1kg</Text>
          <Text style={styles.deliveryDate}>Delivered 28 May</Text>
        </View>
        <TouchableOpacity style={styles.arrowButton}>
          <Icon name="chevron-right" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
          <Icon name="user" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="shopping-cart" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="bars" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    backgroundColor: '#fff',
    padding: 16,
    elevation: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e9e9e9',
    borderRadius: 4,
    padding: 8,
    marginVertical: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  filterText: {
    marginLeft: 8,
    color: '#007bff',
    fontSize: 16,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 12,
    paddingHorizontal: 16,
  },
  buyAgainSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  buyAgainImage: {
    width: 70,
    height: 70,
    borderRadius: 4,
  },
  filterLabel: {
    backgroundColor: '#f0f0f0',
    padding: 8,
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginVertical: 8,
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 4,
    elevation: 1,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 4,
  },
  productDetails: {
    flex: 1,
    marginLeft: 16,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  deliveryDate: {
    fontSize: 14,
    color: '#666',
  },
  arrowButton: {
    padding: 8,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 10,
    elevation: 5,
  },
  navItem: {
    alignItems: 'center',
  },
});

export default OrdersScreen;