import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HistoryScreen = () => {
  const navigation = useNavigation();
  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>购物记录</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => handleNavigation('Search')}>
            <Icon name="search" size={24} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="shopping-cart" size={24} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="more-vert" size={24} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView>
        <View style={styles.filterButtonContainer}>
          <Text style={styles.filterButton}>缩小搜索范围</Text>
        </View>
        <View style={styles.item}>
          <Image source={require('../assets/snack-icon.png')} style={styles.itemImage} />
          <View style={styles.itemContent}>
            <View style={styles.itemHeader}>
              <Text style={styles.itemStatus}>已送达</Text>
              <Text style={styles.itemDate}>2022年10月8日</Text>
            </View>
            <Text style={styles.itemTitle}>Pack of 5 | Ottogi Jin Ramen Noodle (Mild) 120g (Pack of 5)</Text>
            <Text style={styles.itemPrice}>GBP 14.99</Text>
            <Text style={styles.itemShipping}>包邮</Text>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>购买相似物品</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.item}>
          <Image source={require('../assets/snack-icon.png')} style={styles.itemImage} />
          <View style={styles.itemContent}>
            <View style={styles.itemHeader}>
              <Text style={styles.itemStatus}>已发货</Text>
              <Text style={styles.itemDate}>2022年1月13日</Text>
            </View>
            <Text style={styles.itemTitle}>Knife Sharpening Steel Rod Sharpener Honing Stick chef tool high quality</Text>
            <Text style={styles.itemPrice}>GBP 3.99</Text>
            <Text style={styles.itemShipping}>包邮</Text>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>再次购买</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.item}>
          <Image source={require('../assets/snack-icon.png')} style={styles.itemImage} />
          <View style={styles.itemContent}>
            <View style={styles.itemHeader}>
              <Text style={styles.itemStatus}>已送达</Text>
              <Text style={styles.itemDate}>2021年11月20日</Text>
            </View>
            <Text style={styles.itemTitle}>Large Lightweight Wheeled Shopping Trolley Push Cart Luggage Bag with...</Text>
            <Text style={styles.itemPrice}>GBP 9.16</Text>
            <Text style={styles.itemShipping}>包邮</Text>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>购买相似物品</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => handleNavigation('Home')}>
          <Icon name="home" size={24} />
          <Text style={styles.navText}>主页</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('Profile')}>
          <Icon name="person" size={24} />
          <Text style={styles.navText}>我的 eBay</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('Search')}>
          <Icon name="search" size={24} />
          <Text style={styles.navText}>搜索</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="notifications" size={24} />
          <Text style={styles.navText}>通知</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="local-offer" size={24} />
          <Text style={styles.navText}>出售物品</Text>
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
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterButtonContainer: {
    padding: 15,
  },
  filterButton: {
    color: '#007AFF',
    fontSize: 16,
  },
  item: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  itemImage: {
    width: 50,
    height: 50,
  },
  itemContent: {
    flex: 1,
    marginLeft: 15,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemStatus: {
    color: '#4caf50',
  },
  itemDate: {
    color: '#888',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  itemPrice: {
    fontSize: 16,
  },
  itemShipping: {
    color: '#888',
  },
  actionButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  actionButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
  },
  navText: {
    fontSize: 12,
  }
});

export default HistoryScreen;