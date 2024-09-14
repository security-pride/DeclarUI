import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.username}>dxy_hqup58fr</Text>
          <Text style={styles.subtitle}>个人主页</Text>
        </View>
        <Icon name="email" size={24} style={styles.emailIcon} />
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>收藏</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>关注</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>医生卡</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>优惠券</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>我的订单</Text>
        <View style={styles.orderContainer}>
          <View style={styles.orderItem}>
            <Icon name="receipt" size={30} />
            <Text style={styles.orderLabel}>我的问诊</Text>
          </View>
          <View style={styles.orderItem}>
            <Icon name="local-pharmacy" size={30} />
            <Text style={styles.orderLabel}>我的处方</Text>
          </View>
          <View style={styles.orderItem}>
            <Icon name="shopping-cart" size={30} />
            <Text style={styles.orderLabel}>药品订单</Text>
          </View>
        </View>
      </View>

      <View style={styles.promoSection}>
        <Text style={styles.promoText}>新人首次问诊 <Text style={styles.highlightText}>9.9 元起</Text></Text>
        <Text style={styles.subText}>仅 1 次机会 三甲医生在线接诊</Text>
        <TouchableOpacity style={styles.promoButton}>
          <Text style={styles.promoButtonText}>去咨询</Text>
        </TouchableOpacity>
        <Image source={require('../assets/snack-icon.png')} style={styles.promoImage} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>更多功能</Text>
        <View style={styles.functionContainer}>
          <View style={styles.functionItem}>
            <Icon name="person" size={30} />
            <Text style={styles.functionLabel}>患者信息</Text>
          </View>
          <View style={styles.functionItem}>
            <Icon name="school" size={30} />
            <Text style={styles.functionLabel}>医师讲堂</Text>
          </View>
          <View style={styles.functionItem}>
            <Icon name="assessment" size={30} />
            <Text style={styles.functionLabel}>成长测评</Text>
          </View>
          <View style={styles.functionItem}>
            <Icon name="settings" size={30} />
            <Text style={styles.functionLabel}>设置</Text>
          </View>
        </View>
        <View style={styles.functionContainer}>
          <View style={styles.functionItem}>
            <Icon name="headset" size={30} />
            <Text style={styles.functionLabel}>在线客服</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
  },
  emailIcon: {
    color: '#666',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    color: '#888',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  orderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  orderItem: {
    alignItems: 'center',
  },
  orderLabel: {
    fontSize: 12,
    marginTop: 4,
  },
  promoSection: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    position: 'relative',
  },
  promoText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  highlightText: {
    color: 'red',
  },
  subText: {
    fontSize: 12,
    color: '#888',
    marginVertical: 8,
  },
  promoButton: {
    backgroundColor: 'orange',
    borderRadius: 5,
    paddingVertical: 6,
    paddingHorizontal: 15,
    position: 'absolute',
    right: 16,
    top: 16,
  },
  promoButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  promoImage: {
    width: 50,
    height: 50,
    position: 'absolute',
    right: 16,
    bottom: 16,
  },
  functionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  functionItem: {
    alignItems: 'center',
  },
  functionLabel: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default ProfileScreen;