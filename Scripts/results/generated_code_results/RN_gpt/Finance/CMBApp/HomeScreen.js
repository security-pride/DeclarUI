import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <Text style={styles.searchText}>信用卡全家福</Text>
        </View>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="headset-outline" size={24} color="black" onPress={() => navigation.navigate('CustomService')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="notifications" size={24} color="black" />
          <ImageBackground source={require('../assets/snack-icon.png')} style={styles.notificationBadge}>
            <Text style={styles.notificationText}>99</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.quickActions}>
          <QuickAction icon="bag" label="朝朝宝" />
          <QuickAction icon="cash" label="借钱" />
          <QuickAction icon="swap-horizontal" label="转账" />
          <QuickAction icon="card" label="账户总览" />
        </View>

        <View style={styles.services}>
          <Service icon="card" label="信用卡" onPress={() => navigation.navigate('CreditCard')} />
          <Service icon="receipt" label="收支明细" />
          <Service icon="enter" label="他行卡转入" />
          <Service icon="business" label="城市服务" />
          <Service icon="flame" label="热门活动" />
          <Service icon="heart" label="养老金融" />
          <Service icon="medal" label="M+会员" />
          <Service icon="swap-vertical" label="外汇购汇" />
          <Service icon="card-outline" label="银行卡" />
          <Service icon="ellipsis-horizontal" label="全部" />
        </View>

        <View style={styles.notification}>
          <Button title="通知" color="#f0ad4e" onPress={() => console.log('Notification Pressed')} />
          <Text style={styles.notificationText}>小招有财: 您有一份2元现金红包待领取</Text>
        </View>

        <View style={styles.banner}>
          <ImageBackground source={require('../assets/snack-icon.png')} style={styles.bannerImage}>
            <Text style={styles.bannerText}>错过少3天收益</Text>
          </ImageBackground>
        </View>

        <Text style={styles.financialSelection}>财富精选</Text>
        <View style={styles.financialProducts}>
          <FinancialProduct title="T+1到账" subtitle="日添利1号A" returnRate="2.92%" period="7日年化" />
          <FinancialProduct title="每季可赎" subtitle="季季宝" returnRate="3.25%" period="成立以来年化" />
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <BottomNavItem icon="home" label="首页" />
        <BottomNavItem icon="calendar" label="一周回顾" />
        <BottomNavItem icon="cash" label="财富" />
        <BottomNavItem icon="people" label="生活" />
        <BottomNavItem icon="person" label="我的" />
      </View>
    </View>
  );
};

const QuickAction = ({ icon, label }) => (
  <TouchableOpacity style={styles.quickAction}>
    <Image source={require('../assets/snack-icon.png')} style={styles.quickActionIcon} />
    <Text style={styles.quickActionText}>{label}</Text>
  </TouchableOpacity>
);

const Service = ({ icon, label, onPress }) => (
  <TouchableOpacity style={styles.service} onPress={onPress}>
    <Image source={require('../assets/snack-icon.png')} style={styles.serviceIcon} />
    <Text style={styles.serviceText}>{label}</Text>
  </TouchableOpacity>
);

const FinancialProduct = ({ title, subtitle, returnRate, period }) => (
  <View style={styles.productCard}>
    <Text style={styles.productTitle}>{title}</Text>
    <Text style={styles.productSubtitle}>{subtitle}</Text>
    <Text style={styles.productReturnRate}>{returnRate}</Text>
    <Text style={styles.productPeriod}>{period}</Text>
  </View>
);

const BottomNavItem = ({ icon, label }) => (
  <TouchableOpacity style={styles.bottomNavItem}>
    <Icon name={icon} size={24} color="black" />
    <Text style={styles.bottomNavLabel}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: '#f8f8f8',
  },
  iconButton: {
    marginHorizontal: 10,
  },
  searchContainer: {
    flex: 1,
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#e9e9e9',
  },
  searchText: {
    fontSize: 16,
    color: '#333',
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'red',
  },
  notificationText: {
    color: '#fff',
    fontSize: 12,
  },
  scrollContainer: {
    flex: 1,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#fefefe',
  },
  quickAction: {
    alignItems: 'center',
  },
  quickActionIcon: {
    width: 50,
    height: 50,
  },
  quickActionText: {
    marginTop: 5,
    fontSize: 14,
    color: '#333',
  },
  services: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    backgroundColor: '#fefefe',
  },
  service: {
    width: '20%',
    alignItems: 'center',
    marginVertical: 10,
  },
  serviceIcon: {
    width: 40,
    height: 40,
  },
  serviceText: {
    fontSize: 12,
    color: '#333',
    marginTop: 5,
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#ffe',
  },
  banner: {
    padding: 15,
  },
  bannerImage: {
    width: '100%',
    height: 100,
    justifyContent: 'flex-end',
    padding: 10,
  },
  bannerText: {
    fontSize: 18,
    color: 'blue',
    textAlign: 'center',
  },
  financialSelection: {
    fontSize: 18,
    padding: 15,
    color: '#333',
  },
  financialProducts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  productCard: {
    width: '48%',
    padding: 10,
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
  },
  productTitle: {
    fontSize: 16,
    color: '#333',
  },
  productSubtitle: {
    fontSize: 12,
    color: '#666',
  },
  productReturnRate: {
    fontSize: 24,
    color: '#d9534f',
  },
  productPeriod: {
    fontSize: 12,
    color: '#666',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  bottomNavItem: {
    alignItems: 'center',
  },
  bottomNavLabel: {
    fontSize: 12,
    color: '#333',
  },
});

export default HomeScreen;