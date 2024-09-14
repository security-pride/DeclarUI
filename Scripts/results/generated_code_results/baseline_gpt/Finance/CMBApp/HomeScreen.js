import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Icon name="scan-outline" size={24} color="white" />
        <View style={styles.searchBox}>
          <Icon name="search" size={18} color="gray" />
          <Text style={styles.searchText}>信用卡全家福</Text>
        </View>
        <View style={styles.headerIcons}>
          <Icon name="headset-outline" size={24} color="white" />
          <View style={styles.notificationContainer}>
            <Icon name="chatbubble-ellipses-outline" size={24} color="white" />
            <Text style={styles.notificationBadge}>99</Text>
          </View>
        </View>
      </View>

      {/* Quick Access Menu */}
      <View style={styles.quickAccess}>
        {quickAccessData.map((item, index) => (
          <View key={index} style={styles.quickAccessItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
            <Text style={styles.quickAccessText}>{item.label}</Text>
          </View>
        ))}
      </View>

      {/* Notifications */}
      <View style={styles.notificationBanner}>
        <Text style={styles.notificationText}>小招有财: 您有一份2元现金红包待领取</Text>
      </View>

      {/* Promotion Banner */}
      <View style={styles.promotionBanner}>
        <Image source={require('../assets/snack-icon.png')} style={styles.promotionImage} />
        <TouchableOpacity style={styles.promotionButton}>
          <Text style={styles.promotionButtonText}>点击购买</Text>
        </TouchableOpacity>
      </View>

      {/* Financial Picks */}
      <View style={styles.financialPicks}>
        <Text style={styles.sectionTitle}>财富精选</Text>
        <View style={styles.financialItems}>
          {financialData.map((item, index) => (
            <View key={index} style={styles.financialItem}>
              <Text style={styles.financialItemTitle}>{item.title}</Text>
              <Text>{item.subtitle}</Text>
              <Text style={styles.financialItemRate}>{item.rate}</Text>
              <Text>{item.description}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const quickAccessData = [
  { label: '朝朝宝' },
  { label: '借钱' },
  { label: '转账' },
  { label: '账户总览' },
  { label: '信用卡' },
  { label: '收支明细' },
  { label: '他行卡转入' },
  { label: '城市服务' },
  { label: '热门活动' },
  { label: '养老金融' },
  { label: 'M+会员' },
  { label: '外汇购汇' },
  { label: '银行卡' },
  { label: '全部' },
];

const financialData = [
  { title: 'T+1到账', subtitle: '日添利1号A', rate: '2.92%', description: '7日年化 R1低风险 | 随时申赎' },
  { title: '每季可赎', subtitle: '季度宝 鑫鼎日开三个...', rate: '3.25%', description: '成立以来年化' },
  { title: '锁定票息', subtitle: '定期宝 24M创利目标盈1' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#FF4D4F',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 10,
  },
  searchText: {
    color: 'gray',
    marginLeft: 5,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationContainer: {
    position: 'relative',
    marginLeft: 10,
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -10,
    backgroundColor: 'red',
    color: 'white',
    borderRadius: 10,
    paddingHorizontal: 5,
    fontSize: 10,
  },
  quickAccess: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    paddingVertical: 15,
    justifyContent: 'center',
  },
  quickAccessItem: {
    alignItems: 'center',
    margin: 10,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  quickAccessText: {
    fontSize: 12,
    color: 'gray',
  },
  notificationBanner: {
    padding: 15,
    backgroundColor: 'white',
  },
  notificationText: {
    color: '#333',
  },
  promotionBanner: {
    padding: 15,
    backgroundColor: 'lightblue',
    alignItems: 'center',
  },
  promotionImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  promotionButton: {
    backgroundColor: '#FF4D4F',
    padding: 10,
    marginTop: 10,
    borderRadius: 20,
  },
  promotionButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  financialPicks: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  financialItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  financialItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '48%',
    padding: 10,
    marginBottom: 10,
  },
  financialItemTitle: {
    fontWeight: 'bold',
  },
  financialItemRate: {
    color: '#FF4D4F',
    marginVertical: 5,
  },
});

export default HomeScreen;