import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const ProfileScreen = () => {
const navigation = useNavigation();
const navigateToHome = () => {
navigation.navigate('Home');
};
const navigateToSports = () => {
navigation.navigate('Sports');
};
const navigateToStore = () => {
navigation.navigate('Store');
};
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<TouchableOpacity style={styles.addFriendButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
<TouchableOpacity style={styles.settingsButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
<TouchableOpacity style={styles.scanButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
</View>
  <View style={styles.profileInfo}>
    <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
    <Text style={styles.username}>Boots--2333</Text>
    <View style={styles.statsContainer}>
      <Text style={styles.statsText}>关注 1 | 粉丝 0 | 加油 1</Text>
    </View>
    <View style={styles.badgeContainer}>
      <Image source={require('../assets/snack-icon.png')} style={styles.badgeIcon} />
      <Text style={styles.badgeText}>3 新升级!</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.badgeIcon} />
      <Text style={styles.badgeText}>14 新挑战</Text>
    </View>
    <Text style={styles.dateText}>2016.07.07</Text>
  </View>

  <View style={styles.dataSection}>
    <TouchableOpacity style={styles.dataTile}>
      <Text style={styles.dataTitle}>我的数据</Text>
      <Text style={styles.dataValue}>0 分钟</Text>
      <Text style={styles.dataSubtitle}>本周运动</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.dataTile}>
      <Text style={styles.dataTitle}>体重数据</Text>
      <Text style={styles.dataValue}>70.0 公斤</Text>
      <Text style={styles.dataSubtitle}>近 12 个月</Text>
    </TouchableOpacity>
  </View>

  <TouchableOpacity style={styles.membershipBanner}>
    <View style={styles.membershipContent}>
      <Text style={styles.membershipTitle}>keep·会员</Text>
      <Text style={styles.membershipDescription}>告别肚腩计划</Text>
      <Text style={styles.membershipDescription}>腰间的肥油咕噜掉</Text>
    </View>
    <View style={styles.membershipPromo}>
      <Text style={styles.membershipPromoText}>年卡￥178 加赠四...</Text>
      <Text style={styles.membershipPromoSubtext}>Switch / 黄金大奖随机抽</Text>
    </View>
    <TouchableOpacity style={styles.membershipButton}>
      <Text style={styles.membershipButtonText}>立即开通</Text>
    </TouchableOpacity>
  </TouchableOpacity>

  <View style={styles.menuSection}>
    <TouchableOpacity style={styles.menuItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
      <Text style={styles.menuText}>我的动态</Text>
      <Text style={styles.menuCount}>1 条动态</Text>
      <Text style={styles.menuArrow}>›</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.menuItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
      <Text style={styles.menuText}>收藏与加油</Text>
      <Text style={styles.menuArrow}>›</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.menuItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
      <Text style={styles.menuText}>我的课程</Text>
      <Text style={styles.menuArrow}>›</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.menuItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
      <Text style={styles.menuText}>我的活动</Text>
      <Text style={styles.menuArrow}>›</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.menuItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
      <Text style={styles.menuText}>我的饮食</Text>
      <Text style={styles.menuArrow}>›</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.menuItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
      <Text style={styles.menuText}>订单与钱包</Text>
      <Text style={styles.menuArrow}>›</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem} onPress={navigateToHome}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>首页</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>课程</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={navigateToSports}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>运动</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={navigateToStore}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>商城</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={[styles.navText, styles.activeNavText]}>我的</Text>
    </TouchableOpacity>
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
flexDirection: 'row',
justifyContent: 'flex-end',
padding: 10,
},
icon: {
width: 24,
height: 24,
},
addFriendButton: {
marginRight: 15,
},
settingsButton: {
marginRight: 15,
},
scanButton: {
marginRight: 5,
},
profileInfo: {
alignItems: 'center',
marginTop: 20,
},
avatar: {
width: 80,
height: 80,
borderRadius: 40,
},
username: {
fontSize: 18,
fontWeight: 'bold',
marginTop: 10,
},
statsContainer: {
flexDirection: 'row',
marginTop: 10,
},
statsText: {
fontSize: 14,
color: '#666',
},
badgeContainer: {
flexDirection: 'row',
alignItems: 'center',
marginTop: 10,
},
badgeIcon: {
width: 20,
height: 20,
marginRight: 5,
},
badgeText: {
fontSize: 14,
color: '#666',
marginRight: 10,
},
dateText: {
fontSize: 12,
color: '#999',
marginTop: 5,
},
dataSection: {
flexDirection: 'row',
justifyContent: 'space-around',
marginTop: 20,
},
dataTile: {
backgroundColor: '#fff',
padding: 15,
borderRadius: 10,
width: '45%',
},
dataTitle: {
fontSize: 16,
fontWeight: 'bold',
},
dataValue: {
fontSize: 24,
fontWeight: 'bold',
marginVertical: 5,
},
dataSubtitle: {
fontSize: 12,
color: '#666',
},
membershipBanner: {
backgroundColor: '#8e44ad',
margin: 15,
borderRadius: 10,
padding: 15,
},
membershipContent: {
marginBottom: 10,
},
membershipTitle: {
color: '#fff',
fontSize: 18,
fontWeight: 'bold',
},
membershipDescription: {
color: '#fff',
fontSize: 14,
},
membershipPromo: {
marginBottom: 10,
},
membershipPromoText: {
color: '#fff',
fontSize: 16,
fontWeight: 'bold',
},
membershipPromoSubtext: {
color: '#fff',
fontSize: 12,
},
membershipButton: {
backgroundColor: '#f39c12',
padding: 10,
borderRadius: 5,
alignSelf: 'flex-end',
},
membershipButtonText: {
color: '#fff',
fontWeight: 'bold',
},
menuSection: {
backgroundColor: '#fff',
marginTop: 20,
},
menuItem: {
flexDirection: 'row',
alignItems: 'center',
padding: 15,
borderBottomWidth: 1,
borderBottomColor: '#f0f0f0',
},
menuIcon: {
width: 24,
height: 24,
marginRight: 10,
},
menuText: {
flex: 1,
fontSize: 16,
},
menuCount: {
fontSize: 14,
color: '#666',
marginRight: 10,
},
menuArrow: {
fontSize: 18,
color: '#ccc',
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
paddingVertical: 10,
backgroundColor: '#fff',
},
navItem: {
alignItems: 'center',
},
navIcon: {
width: 24,
height: 24,
},
navText: {
fontSize: 12,
marginTop: 5,
},
activeNavItem: {
borderTopWidth: 2,
borderTopColor: '#8e44ad',
},
activeNavText: {
color: '#8e44ad',
},
});
export default ProfileScreen;