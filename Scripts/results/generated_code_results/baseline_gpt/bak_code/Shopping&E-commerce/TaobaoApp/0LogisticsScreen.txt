import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const LogisticsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={24} color="#fff" />
        <Text style={styles.headerText}>通知</Text>
        <Icon name="settings" size={24} color="#fff" style={styles.settingsIcon} />
      </View>

      <View style={styles.tabs}>
        {['物流', '售后', '提醒', '互动', '赞评', '优惠', '其他'].map((tab, index) => (
          <Text key={index} style={index === 0 ? styles.activeTab : styles.inactiveTab}>
            {tab}
          </Text>
        ))}
      </View>

      <View style={styles.searchContainer}>
        <Text style={styles.searchText}>查快递</Text>
        <Text style={styles.updateText}>暂无快递更新</Text>
      </View>

      {logisticsData.map((item, idx) => (
        <View key={idx} style={styles.card}>
          <View style={styles.cardHeader}>
            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
            <Text style={styles.storeName}>{item.storeName}</Text>
            <Text style={styles.date}>{item.date}</Text>
            <Icon name="more-vert" size={24} color="#fff" />
          </View>

          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.subTitle}>{item.subTitle}</Text>
          <Text style={styles.receiptTime}>{item.receiptTime}</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{item.buttonText}</Text>
          </TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.productImage} />
        </View>
      ))}
    </ScrollView>
  );
};

const logisticsData = [
  {
    storeName: 'romoss旗舰店',
    date: '24/07/10',
    title: '即将确认收货',
    subTitle: '物流公司 申通快递',
    receiptTime: '签收时间 2024年07月02日 12:27',
    buttonText: '延长收货',
  },
  {
    storeName: '订单物流消息',
    date: '24/07/06',
    title: '即将自动确认收货',
    subTitle: '收货地址 关山街道烽路1037号华中科技大学东11舍407',
    buttonText: '查看详情',
  },
  {
    storeName: '菜鸟',
    date: '24/04/25',
    title: '包裹签收通知',
    subTitle: '快递公司 韵达快递',
    receiptTime: '快递信息 包裹已被签收，点击查看签收详情>>',
    buttonText: '查看详情',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#1c1c1c',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
    flex: 1,
  },
  settingsIcon: {
    marginLeft: 'auto',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1c1c1c',
    paddingVertical: 10,
  },
  activeTab: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inactiveTab: {
    color: '#888',
    fontSize: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  searchText: {
    color: '#fff',
    fontSize: 16,
  },
  updateText: {
    color: '#888',
    fontSize: 16,
  },
  card: {
    backgroundColor: '#1c1c1c',
    margin: 10,
    padding: 15,
    borderRadius: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: 40,
    height: 40,
  },
  storeName: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
    flex: 1,
  },
  date: {
    color: '#888',
    fontSize: 14,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  subTitle: {
    color: '#888',
    fontSize: 14,
  },
  receiptTime: {
    color: '#888',
    fontSize: 14,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'orange',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  productImage: {
    width: 50,
    height: 50,
    position: 'absolute',
    right: 15,
    bottom: 15,
  },
});

export default LogisticsScreen;