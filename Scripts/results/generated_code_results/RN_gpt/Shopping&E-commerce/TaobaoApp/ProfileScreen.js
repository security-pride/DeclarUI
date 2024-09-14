import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
        <View>
          <Text style={styles.username}>不吃不吃不吃 Orz</Text>
          <Text style={styles.membership}>淘龄 5年</Text>
        </View>
        <View style={styles.headerActions}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </View>
      </View>
      <View style={styles.memberInfo}>
        <Text style={styles.savings}>为你节省 ¥781</Text>
        <Text style={styles.points}>天猫积分 990</Text>
        <Text style={styles.redPacket}>红包 ¥0.00</Text>
        <Text style={styles.coupons}>优惠券 0张</Text>
        <Text style={styles.vipStatus}>88VIP</Text>
      </View>
      <View style={styles.orderStatus}>
        <View style={styles.orderItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.orderIcon} />
          <Text>待付款</Text>
        </View>
        <View style={styles.orderItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.orderIcon} />
          <Text>待发货</Text>
        </View>
        <View style={styles.orderItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.orderIcon} />
          <Text>待收货</Text>
        </View>
        <View style={styles.orderItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.orderIcon} />
          <Text>待评价</Text>
        </View>
        <View style={styles.orderItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.orderIcon} />
          <Text>退款/售后</Text>
        </View>
      </View>
      <View style={styles.quickAccess}>
        <View style={styles.accessItem}>
          <Text>快递</Text>
        </View>
        <View style={styles.accessItem}>
          <Text>收藏</Text>
        </View>
        <View style={styles.accessItem}>
          <Text>足迹</Text>
        </View>
      </View>
      <View style={styles.bottomNav}>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Text>首页</Text>
        </Pressable>
        <Pressable>
          <Text>逛逛</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Message')}>
          <Text>消息</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Cart')}>
          <Text>购物车</Text>
        </Pressable>
        <Pressable>
          <Text>我的淘宝</Text>
        </Pressable>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#1c1c1c',
  },
  avatar: {
    width: 50,
    height: 50,
  },
  username: {
    color: '#fff',
    fontSize: 18,
  },
  membership: {
    color: '#ff9800',
  },
  headerActions: {
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
  memberInfo: {
    padding: 16,
  },
  savings: {
    color: '#ff5722',
    fontSize: 16,
  },
  points: {
    color: '#fff',
  },
  redPacket: {
    color: '#fff',
  },
  coupons: {
    color: '#fff',
  },
  vipStatus: {
    color: '#fff',
  },
  orderStatus: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#1c1c1c',
  },
  orderItem: {
    alignItems: 'center',
  },
  orderIcon: {
    width: 24,
    height: 24,
  },
  quickAccess: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#1c1c1c',
  },
  accessItem: {
    alignItems: 'center',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#2c2c2c',
  },
});

export default ProfileScreen;