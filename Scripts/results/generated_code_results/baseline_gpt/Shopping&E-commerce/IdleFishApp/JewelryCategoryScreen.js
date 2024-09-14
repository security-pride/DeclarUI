import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const JewelryCategoryScreen = () => {
  // Sample data to simulate design
  const newItems = [
    { price: '¥65.88', discount: '8折起', image: '../assets/snack-icon.png' },
    { price: '¥25', discount: '7折起', image: '../assets/snack-icon.png' },
    { price: '¥188', discount: '8折起', image: '../assets/snack-icon.png' },
    { price: '¥10', discount: '4折起', image: '../assets/snack-icon.png' },
  ];

  const popularItems = [
    { rank: 'TOP.1', name: '清 康熙通宝', price: '¥260', rate: '+13.0%', image: '../assets/snack-icon.png' },
    { rank: 'TOP.2', name: '清 咸丰通宝、重', price: '¥549', rate: '+10.1%', image: '../assets/snack-icon.png' },
    { rank: 'TOP.3', name: '清 乾隆通宝', price: '¥318', rate: '+6.0%', image: '../assets/snack-icon.png' },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="angle-left" size={30} />
        </TouchableOpacity>
        <View style={styles.headerIcons}>
          <Icon name="search" size={25} style={styles.icon} />
          <Icon name="ellipsis-h" size={25} />
        </View>
      </View>

      {/* Banner Section */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>钱币宝藏 能捡漏</Text>
        <Text style={styles.subBannerText}>真品保障 质量问题包退</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.bannerImage} />
      </View>

      {/* New Items Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>新品凶历</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {newItems.map((item, index) => (
            <View key={index} style={styles.itemCard}>
              <Image source={require('../assets/snack-icon.png')} style={styles.itemImage} />
              <Text style={styles.itemDiscount}>{item.discount}</Text>
              <Text style={styles.itemPrice}>{item.price}起</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Popular Items Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>热度周榜</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {popularItems.map((item, index) => (
            <View key={index} style={styles.itemCard}>
              <Image source={require('../assets/snack-icon.png')} style={styles.itemImage} />
              <Text>{item.rank}</Text>
              <Text>{item.name}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
              <Text>{item.rate}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Category Tabs */}
      <View style={styles.tabs}>
        <Text style={[styles.tab, styles.activeTab]}>爱藏评级</Text>
        <Text style={styles.tab}>保粹评级</Text>
        <Text style={styles.tab}>金盾评级</Text>
      </View>

      {/* Filter Options */}
      <View style={styles.filters}>
        <Text>发布时间</Text>
        <Text>价格 <Icon name="angle-down" size={15} /></Text>
        <Text>类型 <Icon name="angle-down" size={15} /></Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 10,
  },
  banner: {
    marginVertical: 10,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  bannerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subBannerText: {
    fontSize: 12,
    color: '#777',
  },
  bannerImage: {
    width: 50,
    height: 50,
    marginTop: 5,
  },
  section: {
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemCard: {
    width: 100,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginRight: 10,
    alignItems: 'center',
  },
  itemImage: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },
  itemDiscount: {
    fontSize: 10,
    color: '#555',
  },
  itemPrice: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  tab: {
    fontSize: 14,
  },
  activeTab: {
    color: '#FFA500',
    fontWeight: 'bold',
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
});

export default JewelryCategoryScreen;