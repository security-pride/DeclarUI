import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HistoryScreen = () => {
  const data = [
    {
      id: '1',
      status: '已送达',
      title: 'Pack of 5 | Ottogi Jin Ramen Noodle (Mild) 120g (Pack of 5)',
      price: 'GBP 14.99',
      date: '2022年10月8日',
      image: '../assets/snack-icon.png',
    },
    {
      id: '2',
      status: '已发货',
      title: 'Knife Sharpening Steel Rod Sharpener Honing Stick chef tool high quality',
      price: 'GBP 3.99',
      date: '2022年1月13日',
      image: '../assets/snack-icon.png',
    },
    {
      id: '3',
      status: '已送达',
      title: 'Large Lightweight Wheeled Shopping Trolley Push Cart Luggage Bag with…',
      price: 'GBP 9.16',
      date: '2021年11月20日',
      image: '../assets/snack-icon.png',
    },
    {
      id: '4',
      status: '已送达',
      title: 'Large Bamboo Chopping Board 38 x 26 cm, Organic Wooden Boards with…',
      price: 'GBP 8.54',
      date: '2021年11月20日',
      image: '../assets/snack-icon.png',
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={require('../assets/snack-icon.png')} style={styles.itemImage} />
      <View style={styles.itemContent}>
        <Text style={styles.itemStatus}>{item.status}</Text>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
        <Text style={styles.itemDate}>{item.date}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>购买相似物品</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="chevron-back" size={30} />
        <Text style={styles.headerTitle}>购买记录</Text>
        <View style={styles.headerIcons}>
          <Icon name="cart" size={24} />
          <Icon name="ellipsis-horizontal" size={24} style={styles.iconSpacing} />
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6E6',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconSpacing: {
    marginLeft: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6E6',
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  itemContent: {
    flex: 1,
    marginLeft: 15,
  },
  itemStatus: {
    fontSize: 12,
    color: '#AAAAAA',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  itemPrice: {
    fontSize: 16,
    color: '#000000',
  },
  itemDate: {
    fontSize: 12,
    color: '#AAAAAA',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default HistoryScreen;