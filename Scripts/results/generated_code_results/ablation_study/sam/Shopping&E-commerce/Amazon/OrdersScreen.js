import React from 'react';

import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { useNavigation } from '@react-navigation/native';



const OrdersScreen = () => {

  const navigation = useNavigation();



  const buyAgainItems = [

    { id: '1', image: require('../assets/snack-icon.png'), title: 'Highland Spring water' },

    { id: '2', image: require('../assets/snack-icon.png'), title: 'Disposable gloves' },

    { id: '3', image: require('../assets/snack-icon.png'), title: 'King pot noodles' },

    { id: '4', image: require('../assets/snack-icon.png'), title: 'Rice' },

  ];



  const orderList = [

    {

      id: '1',

      title: 'SmithPackaging Large Bubble Wrap Roll 300mm x 5m - Sm...',

      deliveryDate: 'Delivered 10 June',

      image: require('../assets/snack-icon.png'),

    },

    {

      id: '2',

      title: 'AYhome Travel Pillow, Memory Foam Neck Pillow for Travel,...',

      deliveryDate: 'Delivered 10 June',

      image: require('../assets/snack-icon.png'),

    },

    {

      id: '3',

      title: 'Toyama Koshihikari 1kg',

      deliveryDate: 'Delivered 28 May',

      image: require('../assets/snack-icon.png'),

    },

  ];



  const renderBuyAgainItem = ({ item }) => (

    <View style={styles.buyAgainItem}>

      <Image source={item.image} style={styles.buyAgainImage} />

      <Text style={styles.buyAgainTitle} numberOfLines={2}>{item.title}</Text>

    </View>

  );



  const renderOrderItem = ({ item }) => (

    <View style={styles.orderItem}>

      <Image source={item.image} style={styles.orderImage} />

      <View style={styles.orderDetails}>

        <Text style={styles.orderTitle} numberOfLines={2}>{item.title}</Text>

        <Text style={styles.orderDate}>{item.deliveryDate}</Text>

      </View>

      <Icon name="chevron-forward" size={24} color="#888" />

    </View>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Icon name="arrow-back" size={24} color="#000" />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>Your Orders</Text>

      </View>

      <View style={styles.searchContainer}>

        <Icon name="search" size={20} color="#888" style={styles.searchIcon} />

        <TextInput

          style={styles.searchInput}

          placeholder="Search all orders"

          placeholderTextColor="#888"

        />

        <TouchableOpacity onPress={() => navigation.navigate('Filter')}>

          <Text style={styles.filterText}>Filter</Text>

        </TouchableOpacity>

      </View>

      <View style={styles.buyAgainSection}>

        <Text style={styles.sectionTitle}>Buy again</Text>

        <TouchableOpacity>

          <Text style={styles.seeMoreText}>See more</Text>

        </TouchableOpacity>

      </View>

      <FlatList

        data={buyAgainItems}

        renderItem={renderBuyAgainItem}

        keyExtractor={(item) => item.id}

        horizontal

        showsHorizontalScrollIndicator={false}

        style={styles.buyAgainList}

      />

      <Text style={styles.pastOrdersTitle}>Past three months</Text>

      <FlatList

        data={orderList}

        renderItem={renderOrderItem}

        keyExtractor={(item) => item.id}

        style={styles.orderList}

      />

      <View style={styles.bottomBar}>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>

          <Icon name="home-outline" size={24} color="#888" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>

          <Icon name="person-outline" size={24} color="#888" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="cart-outline" size={24} color="#888" />

        </TouchableOpacity>

        <TouchableOpacity>

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

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  headerTitle: {

    fontSize: 20,

    fontWeight: 'bold',

    marginLeft: 16,

  },

  searchContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 8,

    backgroundColor: '#f0f0f0',

    margin: 16,

    borderRadius: 4,

  },

  searchIcon: {

    marginRight: 8,

  },

  searchInput: {

    flex: 1,

    fontSize: 16,

  },

  filterText: {

    color: '#007bff',

    fontWeight: 'bold',

    marginLeft: 8,

  },

  buyAgainSection: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 16,

    marginTop: 16,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  seeMoreText: {

    color: '#007bff',

  },

  buyAgainList: {

    paddingLeft: 16,

    marginTop: 8,

  },

  buyAgainItem: {

    width: 100,

    marginRight: 16,

  },

  buyAgainImage: {

    width: 100,

    height: 100,

    resizeMode: 'cover',

    borderRadius: 4,

  },

  buyAgainTitle: {

    marginTop: 4,

    fontSize: 12,

  },

  pastOrdersTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginLeft: 16,

    marginTop: 16,

    marginBottom: 8,

  },

  orderList: {

    flex: 1,

  },

  orderItem: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  orderImage: {

    width: 60,

    height: 60,

    resizeMode: 'cover',

    borderRadius: 4,

  },

  orderDetails: {

    flex: 1,

    marginLeft: 16,

  },

  orderTitle: {

    fontSize: 14,

    fontWeight: 'bold',

  },

  orderDate: {

    fontSize: 12,

    color: '#888',

    marginTop: 4,

  },

  bottomBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    paddingVertical: 8,

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

  },

});



export default OrdersScreen;