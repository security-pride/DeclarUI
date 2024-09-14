import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const redirectToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.profileInfo}>
          <Text style={styles.username}>Boots--2333</Text>
          <Text style={styles.stats}>关注 1 | 粉丝 0 | 加油 1</Text>
        </View>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.iconRight} />
        </TouchableOpacity>
      </View>
      <View style={styles.challengeSection}>
        <Text style={styles.levelText}>Kg 3 新升级!</Text>
        <View style={styles.icons}>
          <Image source={require('../assets/snack-icon.png')} style={styles.trophyIcon} />
        </View>
        <Text style={styles.date}>2016.07.07</Text>
      </View>
      <View style={styles.dataSection}>
        <Text style={styles.dataHeader}>我的数据</Text>
        <Text style={styles.dataValue}>0 分钟</Text>
        <Text style={styles.subText}>本周运动</Text>
        <Text style={styles.weightHeader}>体重数据信息</Text>
        <Text style={styles.weightValue}>70.0 公斤</Text>
        <Text style={styles.subText}>近 12 个月</Text>
      </View>
      <View style={styles.membershipBanner}>
        <Text style={styles.membershipText}>keep 会员</Text>
        <Text style={styles.promotionText}>告别肚腩计划 🔥 年卡 ¥178 加赠四...</Text>
      </View>
      <View style={styles.menuList}>
        {["我的动态", "收藏与加油", "我的课程", "我的活动", "我的饮食", "订单与钱包"].map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <Text style={styles.menuText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.bottomNav}>
        {["首页", "课程", "运动", "商城", "我的"].map((item, index) => (
          <TouchableOpacity key={index} style={styles.navItem} onPress={item === "首页" ? redirectToHome : undefined}>
            <Text style={styles.navText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  icon: {
    width: 24,
    height: 24,
  },
  iconRight: {
    width: 24,
    height: 24,
  },
  profileInfo: {
    alignItems: 'center',
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  stats: {
    fontSize: 14,
    color: '#888',
  },
  challengeSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  levelText: {
    fontSize: 16,
    marginRight: 10,
  },
  icons: {
    flexDirection: 'row',
  },
  trophyIcon: {
    width: 16, 
    height: 16,
  },
  date: {
    marginLeft: 'auto',
    fontSize: 14,
    color: '#888',
  },
  dataSection: {
    padding: 15,
  },
  dataHeader: {
    fontSize: 18,
    marginBottom: 5,
  },
  dataValue: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 12,
    color: '#888',
  },
  weightHeader: {
    marginTop: 20,
    fontSize: 16,
  },
  weightValue: {
    fontSize: 24,
  },
  membershipBanner: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    margin: 15,
    borderRadius: 5,
  },
  membershipText: {
    fontSize: 16,
    color: '#fff',
  },
  promotionText: {
    fontSize: 14,
    color: '#fff',
  },
  menuList: {
    margin: 15,
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuText: {
    fontSize: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 14,
    color: '#888',
  },
});

export default ProfileScreen;