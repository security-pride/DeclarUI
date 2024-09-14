import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Profile = () => {
const navigation = useNavigation();
const handleHomePress = () => {
navigation.navigate('Home');
};
const handleStorePress = () => {
navigation.navigate('Store');
};
const handleSportsPress = () => {
navigation.navigate('SearchSports');
};
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<TouchableOpacity style={styles.addFriendButton}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.icon} />
</TouchableOpacity>
<TouchableOpacity style={styles.settingsButton}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.icon} />
</TouchableOpacity>
<TouchableOpacity style={styles.notificationButton}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.icon} />
</TouchableOpacity>
<TouchableOpacity style={styles.scanButton}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.icon} />
</TouchableOpacity>
</View>
  <View style={styles.profileInfo}>
    <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.avatar} />
    <Text style={styles.username}>Boots--2333</Text>
    <View style={styles.statsRow}>
      <Text style={styles.statsText}>关注 1</Text>
      <Text style={styles.statsText}>粉丝 0</Text>
      <Text style={styles.statsText}>加油 1</Text>
    </View>
    <View style={styles.badgesRow}>
      <View style={styles.badge}>
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.badgeIcon} />
        <Text style={styles.badgeText}>Kg 3 新升级!</Text>
      </View>
      <View style={styles.badge}>
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.badgeIcon} />
        <Text style={styles.badgeText}>14 新挑战</Text>
      </View>
      <Text style={styles.dateText}>2016.07.07</Text>
    </View>
  </View>

  <View style={styles.dataSection}>
    <Text style={styles.sectionTitle}>我的数据</Text>
    <View style={styles.dataRow}>
      <View style={styles.dataItem}>
        <Text style={styles.dataValue}>0</Text>
        <Text style={styles.dataLabel}>分钟</Text>
        <Text style={styles.dataSubLabel}>本周运动</Text>
      </View>
      <View style={styles.dataItem}>
        <Text style={styles.dataValue}>70.0</Text>
        <Text style={styles.dataLabel}>公斤</Text>
        <Text style={styles.dataSubLabel}>近 12 个月</Text>
      </View>
    </View>
  </View>

  <TouchableOpacity style={styles.membershipBanner}>
    <Text style={styles.membershipText}>keep·会员</Text>
    <Text style={styles.membershipPromo}>告别肚腩计划 年卡￥178 加赠四...</Text>
    <Text style={styles.membershipDetails}>Switch / 黄金大奖随机抽</Text>
    <TouchableOpacity style={styles.membershipButton}>
      <Text style={styles.membershipButtonText}>立即开通</Text>
    </TouchableOpacity>
  </TouchableOpacity>

  <TouchableOpacity style={styles.menuItem}>
    <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.menuIcon} />
    <Text style={styles.menuText}>我的动态</Text>
    <Text style={styles.menuCount}>1 条动态</Text>
    <Text style={styles.menuArrow}>{'>'}</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.menuItem}>
    <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.menuIcon} />
    <Text style={styles.menuText}>收藏与加油</Text>
    <Text style={styles.menuArrow}>{'>'}</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.menuItem}>
    <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.menuIcon} />
    <Text style={styles.menuText}>我的课程</Text>
    <Text style={styles.menuArrow}>{'>'}</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.menuItem}>
    <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.menuIcon} />
    <Text style={styles.menuText}>我的活动</Text>
    <Text style={styles.menuArrow}>{'>'}</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.menuItem}>
    <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.menuIcon} />
    <Text style={styles.menuText}>我的饮食</Text>
    <Text style={styles.menuArrow}>{'>'}</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.menuItem}>
    <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.menuIcon} />
    <Text style={styles.menuText}>订单与钱包</Text>
    <Text style={styles.menuArrow}>{'>'}</Text>
  </TouchableOpacity>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem} onPress={handleHomePress}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>首页</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>课程</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={handleSportsPress}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>运动</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={handleStorePress}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>商城</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
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
notificationButton: {
marginRight: 15,
},
scanButton: {
marginRight: 15,
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
statsRow: {
flexDirection: 'row',
marginTop: 10,
},
statsText: {
marginHorizontal: 10,
color: '#666',
},
badgesRow: {
flexDirection: 'row',
marginTop: 10,
},
badge: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#e0e0e0',
borderRadius: 15,
paddingHorizontal: 10,
paddingVertical: 5,
marginHorizontal: 5,
},
badgeIcon: {
width: 20,
height: 20,
marginRight: 5,
},
badgeText: {
fontSize: 12,
},
dateText: {
fontSize: 12,
color: '#666',
marginLeft: 10,
},
dataSection: {
backgroundColor: '#fff',
margin: 10,
borderRadius: 10,
padding: 15,
},
sectionTitle: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 10,
},
dataRow: {
flexDirection: 'row',
justifyContent: 'space-around',
},
dataItem: {
alignItems: 'center',
},
dataValue: {
fontSize: 24,
fontWeight: 'bold',
},
dataLabel: {
fontSize: 14,
color: '#666',
},
dataSubLabel: {
fontSize: 12,
color: '#999',
},
membershipBanner: {
backgroundColor: '#8e44ad',
margin: 10,
borderRadius: 10,
padding: 15,
},
membershipText: {
color: '#fff',
fontSize: 18,
fontWeight: 'bold',
},
membershipPromo: {
color: '#fff',
fontSize: 14,
marginTop: 5,
},
membershipDetails: {
color: '#fff',
fontSize: 12,
marginTop: 5,
},
membershipButton: {
backgroundColor: '#f39c12',
borderRadius: 5,
paddingVertical: 5,
paddingHorizontal: 10,
alignSelf: 'flex-start',
marginTop: 10,
},
membershipButtonText: {
color: '#fff',
fontWeight: 'bold',
},
menuItem: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#fff',
padding: 15,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
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
color: '#999',
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
activeNavText: {
color: '#8e44ad',
},
});
export default Profile;