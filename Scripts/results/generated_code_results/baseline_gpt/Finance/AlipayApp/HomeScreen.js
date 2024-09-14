import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.locationText}>烟台</Text>
        <View style={styles.searchBar}>
          <Icon name="search" size={20} color="#000" />
          <Text style={styles.searchText}>支付宝会员</Text>
        </View>
        <Icon name="add" size={24} color="#000" />
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.actionItem}>
          <Icon name="qr-code-scanner" size={36} color="#000" />
          <Text style={styles.actionText}>扫一扫</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionItem}>
          <Icon name="payment" size={36} color="#000" />
          <Text style={styles.actionText}>收付款</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionItem}>
          <Icon name="flight" size={36} color="#000" />
          <Text style={styles.actionText}>出行</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionItem}>
          <Icon name="account-balance-wallet" size={36} color="#000" />
          <Text style={styles.actionText}>卡包</Text>
        </TouchableOpacity>
      </View>

      {/* Service Options */}
      <View style={styles.services}>
        <TouchableOpacity style={styles.serviceItem}>
          <Icon name="restaurant" size={36} color="#3e95ff" />
          <Text style={styles.serviceText}>饿了么</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceItem}>
          <Icon name="shopping-cart" size={36} color="#f857a6" />
          <Text style={styles.serviceText}>口碑团购</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceItem}>
          <Icon name="location-city" size={36} color="#11c76f" />
          <Text style={styles.serviceText}>市民中心</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceItem}>
          <Icon name="glasses" size={36} color="#f65a22" />
          <Text style={styles.serviceText}>海票票</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceItem}>
          <Icon name="send" size={36} color="#067df7" />
          <Text style={styles.serviceText}>转账</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.serviceItem}>
          <Icon name="credit-card" size={36} color="#e64a19" />
          <Text style={styles.serviceText}>信用卡还款</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceItem}>
          <Icon name="phone-android" size={36} color="#ff9800" />
          <Text style={styles.serviceText}>手机充值</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceItem}>
          <Icon name="attach-money" size={36} color="#ff5700" />
          <Text style={styles.serviceText}>余额宝</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceItem}>
          <Icon name="directions-car" size={36} color="#00bcd4" />
          <Text style={styles.serviceText}>高德打车</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceItem}>
          <Icon name="flash-on" size={36} color="#3f51b5" />
          <Text style={styles.serviceText}>生活缴费</Text>
        </TouchableOpacity>
      </View>

      {/* Latest Messages */}
      <View style={styles.latestMessages}>
        <Text style={styles.messageHeaderText}>最近消息</Text>
        <View style={styles.messageItem}>
          <Icon name="directions-car" size={20} color="#1976d2" />
          <Text style={styles.messageText}>高德打车 自动扣款成功 ¥12.30</Text>
        </View>
        <View style={styles.messageItem}>
          <Icon name="directions-car" size={20} color="#1976d2" />
          <Text style={styles.messageText}>高德打车 自动扣款成功 ¥34.54 ， 你有支付奖励待领取</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2196f3',
  },
  locationText: {
    color: '#fff',
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5,
    marginHorizontal: 10,
  },
  searchText: {
    color: '#000',
    marginLeft: 5,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  actionItem: {
    alignItems: 'center',
  },
  actionText: {
    color: '#000',
    marginTop: 5,
  },
  services: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff',
  },
  serviceItem: {
    width: '18%',
    alignItems: 'center',
    marginBottom: 15,
  },
  serviceText: {
    color: '#000',
    marginTop: 5,
  },
  latestMessages: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopWidth: 0.5,
    borderColor: '#ddd',
  },
  messageHeaderText: {
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  messageText: {
    color: '#000',
    marginLeft: 10,
  },
});

export default HomeScreen;