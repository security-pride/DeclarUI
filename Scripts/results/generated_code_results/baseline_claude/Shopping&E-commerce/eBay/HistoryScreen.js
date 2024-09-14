import React from 'react';

import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const HistoryScreen = () => {

  const navigation = useNavigation();



  const historyData = [

    {

      id: '1',

      title: 'Pack of 5 | Ottogi Jin Ramen Noodle (Mild) 120g (Pack of 5)',

      price: 'GBP 14.99',

      date: '2022 年 10 月 8 日',

      status: '已送达',

      image: '../assets/snack-icon.png',

    },

    {

      id: '2',

      title: 'Knife Sharpening Steel Rod Sharpener Honing Stick chef tool high quality',

      price: 'GBP 3.99',

      date: '2022 年 1 月 13 日',

      status: '已发货',

      image: '../assets/snack-icon.png',

    },

    {

      id: '3',

      title: 'Large Lightweight Wheeled Shopping Trolley Push Cart Luggage Bag with...',

      price: 'GBP 9.16',

      date: '2021 年 11 月 20 日',

      status: '已送达',

      image: '../assets/snack-icon.png',

    },

    {

      id: '4',

      title: 'Large Bamboo Chopping Board 38 x 26 cm, Organic Wooden Boards with...',

      price: 'GBP 8.54',

      date: '2021 年 11 月 20 日',

      status: '已送达',

      image: '../assets/snack-icon.png',

    },

  ];



  const renderItem = ({ item }) => (

    <View style={styles.itemContainer}>

      <Image source={item.image} style={styles.itemImage} />

      <View style={styles.itemDetails}>

        <Text style={styles.itemStatus}>{item.status}</Text>

        <Text style={styles.itemTitle} numberOfLines={2}>{item.title}</Text>

        <Text style={styles.itemPrice}>{item.price}</Text>

        <Text style={styles.itemDate}>{item.date}</Text>

      </View>

      <TouchableOpacity style={styles.buyAgainButton}>

        <Text style={styles.buyAgainText}>

          {item.id === '2' ? '再次购买' : '购买相似物品'}

        </Text>

      </TouchableOpacity>

    </View>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Text style={styles.backButton}>{'<'}</Text>

        </TouchableOpacity>

        <Text style={styles.headerTitle}>购买记录</Text>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.cartIcon} />

        </TouchableOpacity>

        <TouchableOpacity>

          <Text style={styles.moreButton}>...</Text>

        </TouchableOpacity>

      </View>

      <View style={styles.searchContainer}>

        <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />

        <Text style={styles.searchPlaceholder}>查找</Text>

        <Text style={styles.searchRange}>缩小搜索范围</Text>

      </View>

      <FlatList

        data={historyData}

        renderItem={renderItem}

        keyExtractor={item => item.id}

        style={styles.list}

      />

      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>主页</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={[styles.tabText, styles.activeTabText]}>我的 eBay</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>搜索</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>通知</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>出售物品</Text>

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

    justifyContent: 'space-between',

    padding: 10,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  backButton: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  cartIcon: {

    width: 24,

    height: 24,

  },

  moreButton: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  searchContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#f0f0f0',

    borderRadius: 20,

    margin: 10,

    padding: 10,

  },

  searchIcon: {

    width: 20,

    height: 20,

    marginRight: 10,

  },

  searchPlaceholder: {

    flex: 1,

    color: '#888',

  },

  searchRange: {

    color: '#0000FF',

    fontSize: 12,

  },

  list: {

    flex: 1,

  },

  itemContainer: {

    flexDirection: 'row',

    padding: 10,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  itemImage: {

    width: 80,

    height: 80,

    marginRight: 10,

  },

  itemDetails: {

    flex: 1,

  },

  itemStatus: {

    fontSize: 12,

    color: '#888',

  },

  itemTitle: {

    fontSize: 14,

    fontWeight: 'bold',

    marginVertical: 5,

  },

  itemPrice: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  itemDate: {

    fontSize: 12,

    color: '#888',

  },

  buyAgainButton: {

    backgroundColor: '#0000FF',

    borderRadius: 15,

    padding: 10,

    alignSelf: 'flex-start',

    marginTop: 10,

  },

  buyAgainText: {

    color: '#fff',

    fontSize: 12,

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

    paddingVertical: 10,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

    marginBottom: 5,

  },

  tabText: {

    fontSize: 10,

  },

  activeTabText: {

    color: '#0000FF',

  },

});



export default HistoryScreen;