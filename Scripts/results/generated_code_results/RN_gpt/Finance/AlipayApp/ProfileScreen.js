import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>用户保护中心</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      </View>
      <View style={styles.profile}>
        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
        <Text style={styles.username}>不吃不吃</Text>
        <Text style={styles.phone}>136******15</Text>
      </View>
      <Text style={styles.info}>上传身份证照片，以使用更多金融服务</Text>
      <View style={styles.notificationDot} />
      <View style={styles.listContainer}>
        {/* Other list items */}
        <View style={styles.listItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.listIcon} />
          <Text style={styles.listText}>支付宝会员</Text>
          <Text style={styles.pointText}>110积分待领取</Text>
        </View>
        {/* More list items */}
      </View>
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>首页</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>理财</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>视频</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>消息</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>我的</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#ffffff',
  },
  headerText: {
    fontSize: 16,
    color: '#333333',
  },
  icon: {
    width: 24,
    height: 24,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontSize: 18,
    color: '#333333',
  },
  phone: {
    fontSize: 14,
    color: '#999999',
  },
  info: {
    padding: 16,
    fontSize: 14,
    color: '#333333',
  },
  notificationDot: {
    position: 'absolute',
    top: 90,
    right: 10,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'red',
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 8,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  listIcon: {
    width: 30,
    height: 30,
    marginRight: 12,
  },
  listText: {
    fontSize: 16,
    color: '#333333',
  },
  pointText: {
    fontSize: 14,
    color: '#ffa500',
  },
  detailText: {
    fontSize: 14,
    color: '#999999',
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
    marginRight: 'auto',
  },
  amount: {
    fontSize: 16,
    color: '#333333',
  },
  freeText: {
    fontSize: 14,
    color: '#f73500',
  },
  promoText: {
    fontSize: 14,
    color: 'red',
  },
  noticeText: {
    fontSize: 14,
    color: '#f73500',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: 10,
  },
  navIcon: {
    width: 24,
    height: 24,
  },
  navText: {
    fontSize: 12,
    color: '#333333',
  },
});

export default ProfileScreen;