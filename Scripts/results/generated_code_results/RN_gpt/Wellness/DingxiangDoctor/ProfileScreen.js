import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
          <Text style={styles.username}>dxy_hqup58fr</Text>
          <Text style={styles.profileLabel}>个人主页</Text>
        </View>
        <TouchableOpacity style={styles.messageIcon}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.statsContainer}>
        <Text style={styles.stat}>0 收藏</Text>
        <Text style={styles.stat}>0 关注</Text>
        <Text style={styles.stat}>0 医生卡</Text>
        <Text style={styles.stat}>0 优惠券</Text>
      </View>
      <View style={styles.ordersContainer}>
        <TouchableOpacity style={styles.orderItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.orderIcon} />
          <Text style={styles.orderText}>我的问诊</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.orderItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.orderIcon} />
          <Text style={styles.orderText}>我的处方</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.orderItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.orderIcon} />
          <Text style={styles.orderText}>药品订单</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.promoContainer}>
        <Text style={styles.promoText}>新人首次问诊 9.9 元起</Text>
        <TouchableOpacity style={styles.promoButton}>
          <Text style={styles.promoButtonText}>去咨询</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.moreFeaturesContainer}>
        <Text style={styles.moreFeaturesLabel}>更多功能</Text>
        <View style={styles.moreFeatures}>
          <TouchableOpacity style={styles.featureItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.featureIcon} />
            <Text style={styles.featureText}>患者信息</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.featureItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.featureIcon} />
            <Text style={styles.featureText}>医师讲堂</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.featureItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.featureIcon} />
            <Text style={styles.featureText}>成长测评</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.featureItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.featureIcon} />
            <Text style={styles.featureText}>设置</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.featureItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.featureIcon} />
            <Text style={styles.featureText}>在线客服</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ImageBackground source={require('../assets/snack-icon.png')} style={styles.footerImage}>
        <Text style={styles.footerText}>一起发现健康生活</Text>
      </ImageBackground>
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.navItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text>首页</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('askDoctor')} style={styles.navItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text>问医生</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SearchMedicineDisease')} style={styles.navItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text>查病查药</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text>我的</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  profileLabel: {
    marginLeft: 10,
    color: '#999',
  },
  messageIcon: {
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  stat: {
    fontSize: 16,
    color: '#333',
  },
  ordersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  orderItem: {
    alignItems: 'center',
  },
  orderIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  orderText: {
    fontSize: 14,
    color: '#333',
  },
  promoContainer: {
    backgroundColor: '#FFF9E6',
    padding: 15,
    marginHorizontal: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  promoText: {
    fontSize: 16,
    color: '#333',
  },
  promoButton: {
    backgroundColor: '#FF6666',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  promoButtonText: {
    color: '#FFF',
  },
  moreFeaturesContainer: {
    marginTop: 20,
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 15,
  },
  moreFeaturesLabel: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  moreFeatures: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureItem: {
    alignItems: 'center',
    marginBottom: 15,
  },
  featureIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  featureText: {
    fontSize: 14,
    color: '#333',
  },
  footerImage: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#666',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFF',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default ProfileScreen;