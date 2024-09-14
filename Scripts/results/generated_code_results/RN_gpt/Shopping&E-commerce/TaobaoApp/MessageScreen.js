import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const MessageScreen = ({ navigation }) => {
  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>消息</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity>
            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.categoryContainer}>
          <TouchableOpacity style={styles.categoryItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />
            <Text style={styles.categoryText}>交易物流</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />
            <Text style={styles.categoryText}>售后</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />
            <Text style={styles.categoryText}>提醒</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />
            <Text style={styles.categoryText}>互动</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.banner}>
          <Image source={require('../assets/snack-icon.png')} style={styles.bannerImage} />
          <Text style={styles.bannerTitle}>热门活动抢先看</Text>
          <Text style={styles.bannerSubtitle}>更多优惠尽在掌握</Text>
        </View>

        <View style={styles.messageHeader}>
          <Text style={styles.messageHeaderText}>两周前的消息</Text>
        </View>

        <View style={styles.message}>
          <Image source={require('../assets/snack-icon.png')} style={styles.storeIcon} />
          <View style={styles.messageContent}>
            <Text style={styles.storeName}>romoss旗舰店</Text>
            <Text style={styles.messageText}>商品使用说明</Text>
          </View>
          <Text style={styles.messageDate}>24/07/03</Text>
        </View>

        {/* More messages... */}

      </ScrollView>

      <View style={styles.bottomNavBar}>
        <TouchableOpacity onPress={() => navigateTo('Home')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>首页</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo('Logistics')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>逛逛</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIconActive} />
          <Text style={styles.navTextActive}>消息</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo('Cart')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>购物车</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo('Profile')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>我的淘宝</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#333',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerActions: {
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 8,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#111',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    backgroundColor: '#444',
  },
  categoryItem: {
    alignItems: 'center',
  },
  categoryIcon: {
    width: 40,
    height: 40,
  },
  categoryText: {
    color: '#fff',
    marginTop: 4,
  },
  banner: {
    padding: 16,
    backgroundColor: '#222',
  },
  bannerImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
  },
  bannerTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  bannerSubtitle: {
    color: '#888',
    fontSize: 14,
  },
  messageHeader: {
    backgroundColor: '#555',
    padding: 8,
  },
  messageHeaderText: {
    color: '#fff',
    fontSize: 16,
  },
  message: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  storeIcon: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  messageContent: {
    flex: 1,
  },
  storeName: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  messageText: {
    color: '#888',
    fontSize: 12,
  },
  messageDate: {
    color: '#666',
    fontSize: 12,
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#333',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#444',
  },
  navIcon: {
    width: 24,
    height: 24,
  },
  navIconActive: {
    width: 24,
    height: 24,
    tintColor: '#ffa500',
  },
  navText: {
    color: '#888',
    fontSize: 10,
  },
  navTextActive: {
    color: '#ffa500',
    fontSize: 10,
  },
});

export default MessageScreen;