import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TicketServiceScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>高德·火车票</Text>
      </View>
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>夏日周末狂欢</Text>
        <Text style={styles.bannerSubtitle}>吃喝玩乐 全城低价</Text>
        <TouchableOpacity style={styles.bannerButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.bannerButtonText}>查看</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tabMenu}>
        <Text style={styles.tab}>机票</Text>
        <Text style={[styles.tab, styles.selectedTab]}>火车票</Text>
        <Text style={styles.tab}>汽车票</Text>
      </View>
      <View style={styles.searchForm}>
        <View style={styles.row}>
          <Text style={styles.cityName}>威海市</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.cityName}>武汉市</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.date}>7月19日</Text>
          <Text style={styles.day}>明天</Text>
        </View>
        <View style={styles.checkboxRow}>
          <Text style={styles.checkboxLabel}>学生票</Text>
          <Text style={styles.checkboxLabel}>高铁动车</Text>
        </View>
        <TouchableOpacity style={styles.searchButton} onPress={() => navigation.navigate('TicketSearchResult')}>
          <Text style={styles.searchButtonText}>查询</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.promotedTicket}>
        <Image source={require('../assets/snack-icon.png')} style={styles.trainImage} />
        <View>
          <Text style={styles.route}>威海市 — 武汉市</Text>
          <Text style={styles.departure}>07.19出发，约7时11分到达</Text>
          <Text style={styles.price}>¥742起</Text>
          <Button title="立即购票" onPress={() => {}} />
        </View>
      </View>
      <View style={styles.bottomNav}>
        <Text style={styles.navItem}>订单日</Text>
        <Text style={styles.navItem}>登录12306</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  banner: {
    padding: 16,
    backgroundColor: '#ffcccc',
    alignItems: 'center',
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bannerSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  bannerButton: {
    backgroundColor: '#ff6666',
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
  },
  bannerButtonText: {
    color: '#fff',
  },
  tabMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  tab: {
    fontSize: 16,
    color: '#666',
  },
  selectedTab: {
    color: '#007aff',
  },
  searchForm: {
    padding: 16,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  cityName: {
    fontSize: 16,
    marginHorizontal: 8,
  },
  date: {
    fontSize: 16,
    marginRight: 4,
  },
  day: {
    fontSize: 16,
    color: '#888',
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 4,
  },
  checkboxRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#444',
  },
  searchButton: {
    backgroundColor: '#007aff',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  promotedTicket: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    marginTop: 16,
    alignItems: 'center',
  },
  trainImage: {
    width: 60,
    height: 60,
    marginRight: 16,
  },
  route: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  departure: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  price: {
    fontSize: 16,
    color: '#e60000',
    marginBottom: 4,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 12,
  },
  navItem: {
    fontSize: 16,
    color: '#007aff',
  },
});

export default TicketServiceScreen;