import React from 'react';

import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



const OrdersScreen = ({ navigation }) => {

  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Icon name="arrow-back" size={24} color="#000" />

        </TouchableOpacity>

        <View style={styles.searchBar}>

          <Icon name="search" size={20} color="#888" />

          <TextInput

            style={styles.searchInput}

            placeholder="Search Amazon.co.uk"

          />

          <TouchableOpacity>

            <Icon name="camera-outline" size={24} color="#888" />

          </TouchableOpacity>

          <TouchableOpacity>

            <Icon name="mic-outline" size={24} color="#888" />

          </TouchableOpacity>

        </View>

      </View>



      <ScrollView>

        <Text style={styles.title}>Your Orders</Text>



        <View style={styles.searchOrdersContainer}>

          <Icon name="search" size={20} color="#888" style={styles.searchIcon} />

          <TextInput

            style={styles.searchOrdersInput}

            placeholder="Search all orders"

          />

          <TouchableOpacity style={styles.filterButton}>

            <Text style={styles.filterText}>Filter</Text>

            <Icon name="chevron-forward" size={20} color="#00a0d6" />

          </TouchableOpacity>

        </View>



        <View style={styles.buyAgainSection}>

          <View style={styles.sectionHeader}>

            <Text style={styles.sectionTitle}>Buy again</Text>

            <TouchableOpacity>

              <Text style={styles.seeMoreText}>See more</Text>

            </TouchableOpacity>

          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>

            <Image source={require('../assets/snack-icon.png')} style={styles.buyAgainImage} />

            <Image source={require('../assets/snack-icon.png')} style={styles.buyAgainImage} />

            <Image source={require('../assets/snack-icon.png')} style={styles.buyAgainImage} />

            <Image source={require('../assets/snack-icon.png')} style={styles.buyAgainImage} />

          </ScrollView>

        </View>



        <Text style={styles.pastOrdersLabel}>Past three months</Text>



        <View style={styles.orderItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.orderImage} />

          <View style={styles.orderDetails}>

            <Text style={styles.orderTitle}>SmithPackaging Large Bubble Wrap Roll 300mm x 5m - Sm...</Text>

            <Text style={styles.orderDate}>Delivered 10 June</Text>

          </View>

          <Icon name="chevron-forward" size={20} color="#888" />

        </View>



        <View style={styles.orderItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.orderImage} />

          <View style={styles.orderDetails}>

            <Text style={styles.orderTitle}>AYhome Travel Pillow, Memory Foam Neck Pillow for Travel,...</Text>

            <Text style={styles.orderDate}>Delivered 10 June</Text>

          </View>

          <Icon name="chevron-forward" size={20} color="#888" />

        </View>



        <View style={styles.orderItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.orderImage} />

          <View style={styles.orderDetails}>

            <Text style={styles.orderTitle}>Toyama Koshihikari 1kg</Text>

            <Text style={styles.orderDate}>Delivered 28 May</Text>

          </View>

          <Icon name="chevron-forward" size={20} color="#888" />

        </View>

      </ScrollView>



      <View style={styles.bottomNav}>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>

          <Icon name="home-outline" size={24} color="#888" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="person" size={24} color="#00a0d6" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Cart')}>

          <Icon name="cart-outline" size={24} color="#888" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Menu')}>

          <Icon name="menu-outline" size={24} color="#888" />

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#fff',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#9bf3f0',

    padding: 10,

  },

  searchBar: {

    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#fff',

    borderRadius: 5,

    marginLeft: 10,

    paddingHorizontal: 10,

  },

  searchInput: {

    flex: 1,

    height: 40,

    marginLeft: 5,

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    padding: 15,

  },

  searchOrdersContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    borderWidth: 1,

    borderColor: '#ddd',

    borderRadius: 5,

    margin: 15,

    paddingHorizontal: 10,

  },

  searchIcon: {

    marginRight: 10,

  },

  searchOrdersInput: {

    flex: 1,

    height: 40,

  },

  filterButton: {

    flexDirection: 'row',

    alignItems: 'center',

    borderLeftWidth: 1,

    borderLeftColor: '#ddd',

    paddingLeft: 10,

  },

  filterText: {

    color: '#00a0d6',

    marginRight: 5,

  },

  buyAgainSection: {

    margin: 15,

  },

  sectionHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 10,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  seeMoreText: {

    color: '#00a0d6',

  },

  buyAgainImage: {

    width: 100,

    height: 100,

    marginRight: 10,

  },

  pastOrdersLabel: {

    fontSize: 16,

    fontWeight: 'bold',

    paddingHorizontal: 15,

    paddingVertical: 10,

    backgroundColor: '#f0f0f0',

  },

  orderItem: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 15,

    borderBottomWidth: 1,

    borderBottomColor: '#eee',

  },

  orderImage: {

    width: 60,

    height: 60,

    marginRight: 15,

  },

  orderDetails: {

    flex: 1,

  },

  orderTitle: {

    fontSize: 16,

    marginBottom: 5,

  },

  orderDate: {

    color: '#888',

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

    paddingVertical: 10,

  },

  navItem: {

    alignItems: 'center',

  },

});



export default OrdersScreen;