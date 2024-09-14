import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.headerText}>用户保护中心 ></Text>
        </TouchableOpacity>
        <View style={styles.iconsContainer}>
          <Icon name="headset-mic" size={24} style={styles.icon} />
          <Icon name="settings" size={24} style={styles.icon} />
        </View>
      </View>

      <View style={styles.userInfo}>
        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
        <View>
          <Text style={styles.userName}>不吃不吃</Text>
          <Text style={styles.userPhone}>136******15</Text>
        </View>
        <Icon name="chevron-right" size={24} style={styles.chevronIcon} />
      </View>

      <TouchableOpacity style={styles.uploadIdCard}>
        <Text style={styles.uploadText}>上传身份证照片，以使用更多金融服务</Text>
        <Icon name="radio-button-unchecked" size={10} style={styles.smallRedIcon} />
        <Icon name="chevron-right" size={24} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.listItem}>
        <View style={styles.listLeft}>
          <Image source={require('../assets/snack-icon.png')} style={styles.listIcon} />
          <Text style={styles.listText}>支付宝会员</Text>
          <Text style={styles.vipBadge}>大众会员</Text>
        </View>
        <Text style={styles.listRightText}>110积分待领取</Text>
        <Icon name="chevron-right" size={24} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.listItem}>
        <View style={styles.listLeft}>
          <Image source={require('../assets/snack-icon.png')} style={styles.listIcon} />
          <Text style={styles.listText}>商家服务</Text>
        </View>
        <Text style={styles.listRightText}>查看收款明细</Text>
        <Icon name="chevron-right" size={24} />
      </TouchableOpacity>

      <View style={styles.subList}>
        <Text style={styles.subListText}>今日收款 (元)</Text>
        <Text style={styles.subListText}>商家积分</Text>
        <Text style={styles.subListValue}>0.00</Text>
        <Text style={styles.subListValue}>0</Text>
      </View>

      {/* Rest of the list items */}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#e0e0e0',
  },
  headerText: {
    fontSize: 16,
    color: '#333',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 10,
    color: '#333',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userPhone: {
    fontSize: 14,
    color: '#999',
  },
  chevronIcon: {
    marginLeft: 'auto',
    color: '#ccc',
  },
  uploadIdCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  uploadText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  smallRedIcon: {
    color: '#f00',
    marginHorizontal: 5,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  listLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  listText: {
    fontSize: 16,
    color: '#333',
  },
  vipBadge: {
    marginLeft: 5,
    fontSize: 12,
    color: '#00f',
    backgroundColor: '#eef',
    padding: 2,
    borderRadius: 4,
  },
  listRightText: {
    flex: 1,
    textAlign: 'right',
    color: '#ffa500',
    fontSize: 14,
    marginRight: 5,
  },
  subList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  subListText: {
    flex: 1,
    fontSize: 14,
    color: '#666',
  },
  subListValue: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    textAlign: 'right',
  },
});

export default ProfileScreen;