import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.avatar} source={require('../assets/snack-icon.png')} />
        <View style={styles.userInfo}>
          <Text style={styles.username}>不吃不吃 Orz</Text>
          <Text style={styles.details}>📍 收货地址 | 🏠 关注店铺</Text>
        </View>
        <View style={styles.headerIcons}>
          <Icon name="headset-outline" size={24} color="#fff" />
          <Icon name="settings-outline" size={24} color="#fff" />
        </View>
      </View>

      <View style={styles.vipSection}>
        <View style={styles.vipBox}>
          <Text style={styles.vipTextMain}>为你节省￥781</Text>
          <Text style={styles.vipDetails}>省钱卡     天猫积分     红包     优惠券</Text>
          <Text style={styles.vipDetails}>990           ¥0.00          0张         </Text>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>去查看</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.vipBox}>
          <Text style={styles.vipTextSecondary}>88VIP</Text>
          <Text style={styles.vipDetails}>得网易云音乐 VIP 去解锁音频权限</Text>
        </View>
      </View>

      <View style={styles.orderSection}>
        <Text style={styles.sectionTitle}>我的订单</Text>
        <View style={styles.orderOptions}>
          <Icon name="logo-buffer" size={40} />
          <Icon name="cube-outline" size={40} />
          <Icon name="bicycle-outline" size={40} />
          <Icon name="chatbubble-ellipses-outline" size={40} />
          <Icon name="cash-outline" size={40} />
        </View>
      </View>

      <View style={styles.featuresSection}>
        <View style={styles.featureBox}>
          <Text style={styles.featureTitle}>快递</Text>
          <Text style={styles.featureDetails}>查看快递信息</Text>
        </View>
        <View style={styles.featureBox}>
          <Text style={styles.featureTitle}>收藏</Text>
          <Text style={styles.featureDetails}>查看最近收藏</Text>
        </View>
        <View style={styles.featureBox}>
          <Text style={styles.featureTitle}>足迹</Text>
          <Text style={styles.featureDetails}>看过的商品和频道</Text>
        </View>
      </View>

      <View style={styles.bottomBar}>
        <Icon name="home-outline" size={30} />
        <Icon name="film-outline" size={30} />
        <Icon name="chatbubble-outline" size={30} />
        <Icon name="cart-outline" size={30} />
        <Icon name="person-circle-outline" size={30} />
      </View>
    </ScrollView>
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
    padding: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  userInfo: {
    flex: 1,
    marginLeft: 20,
  },
  username: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    color: '#fff',
    marginTop: 5,
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 80,
  },
  vipSection: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
  vipBox: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#333',
    padding: 10,
    margin: 5,
    alignItems: 'center',
  },
  vipTextMain: {
    color: '#ff4500',
    fontSize: 16,
    fontWeight: 'bold',
  },
  vipTextSecondary: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  vipDetails: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    marginVertical: 5,
  },
  btn: {
    backgroundColor: '#ff4500',
    borderRadius: 5,
    padding: 5,
    marginTop: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 12,
  },
  orderSection: {
    backgroundColor: '#1f1f1f',
    padding: 20,
  },
  sectionTitle: {
    color: '#fff',
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  featuresSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  featureBox: {
    alignItems: 'center',
  },
  featureTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  featureDetails: {
    color: '#fff',
    fontSize: 12,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1f1f1f',
    paddingVertical: 10,
  },
});

export default ProfileScreen;