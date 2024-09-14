import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const data = [
  {
    id: '1',
    title: '烟台+蓬莱区·2日1晚',
    tag: '优选',
    rating: '5.0分',
    sales: '已售11人',
    services: '纯玩无购物·6人小团·提前2天免费退',
    price: '965',
    hotel: '全程3钻酒店',
    highlights: '帆船出海·暖海砂·体验赶海乐趣',
    image: '../assets/snack-icon.png',
  },
  // Add more entries as needed
];

const GroupTravelSearchResultScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={require('../assets/snack-icon.png')} style={styles.image} />
      <View style={styles.info}>
        <View style={styles.row}>
          <Text style={styles.tag}>{item.tag}</Text>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <Text style={styles.highlights}>{item.highlights}</Text>
        <Text style={styles.hotel}>{item.hotel}</Text>
        <Text style={styles.services}>{item.services}</Text>
        <View style={styles.row}>
          <Text style={styles.rating}>{item.rating}</Text>
          <Text style={styles.sales}>{item.sales}</Text>
        </View>
        <Text style={styles.price}>¥{item.price} 起</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
      <TouchableOpacity style={styles.fab}>
        <Icon name="chatbubble-ellipses" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  list: {
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 120,
  },
  info: {
    flex: 1,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  tag: {
    backgroundColor: '#ff5757',
    color: '#fff',
    borderRadius: 4,
    padding: 2,
    marginRight: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  highlights: {
    color: '#777',
    marginBottom: 5,
  },
  hotel: {
    color: '#777',
    marginBottom: 5,
  },
  services: {
    color: '#777',
    marginBottom: 5,
  },
  rating: {
    color: '#ff9100',
    marginRight: 5,
  },
  sales: {
    color: '#777',
  },
  price: {
    fontWeight: 'bold',
    color: '#e60000',
    marginTop: 5,
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#ff9100',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GroupTravelSearchResultScreen;