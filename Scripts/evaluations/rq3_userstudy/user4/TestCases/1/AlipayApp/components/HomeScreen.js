import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Home = () => {
const [searchText, setSearchText] = useState('');
const navigation = useNavigation();
const navigateToProfile = () => {
navigation.navigate('Profile');
};
const navigateToTickets = () => {
navigation.navigate('Tickets');
};
const navigateToTrade = () => {
navigation.navigate('Trade');
};
const navigateToUtilityBills = () => {
navigation.navigate('UtilityBills');
};
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<Text style={styles.location}>烟台 24°C</Text>
<TextInput style={styles.searchBar} placeholder="支付宝会员" value={searchText} onChangeText={setSearchText} />
<TouchableOpacity style={styles.addButton}>
<Text style={styles.addButtonText}>+</Text>
</TouchableOpacity>
</View>
  <View style={styles.quickActions}>
    <TouchableOpacity style={styles.actionButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
      <Text>扫一扫</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.actionButton} onPress={navigateToTrade}>
      <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
      <Text>收付款</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.actionButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
      <Text>出行</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.actionButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
      <Text>卡包</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.services}>
    <TouchableOpacity style={styles.serviceItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.serviceIcon} />
      <Text>饿了么</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.serviceItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.serviceIcon} />
      <Text>口碑团购</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.serviceItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.serviceIcon} />
      <Text>市民中心</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.serviceItem} onPress={navigateToTickets}>
      <Image source={require('../assets/snack-icon.png')} style={styles.serviceIcon} />
      <Text>淘票票</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.serviceItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.serviceIcon} />
      <Text>转账</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.serviceItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.serviceIcon} />
      <Text>手机充值</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.serviceItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.serviceIcon} />
      <Text>信用卡还款</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.serviceItem} onPress={navigateToUtilityBills}>
      <Image source={require('../assets/snack-icon.png')} style={styles.serviceIcon} />
      <Text>生活缴费</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.serviceItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.serviceIcon} />
      <Text>余额宝</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.serviceItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.serviceIcon} />
      <Text>高德打车</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.serviceItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.serviceIcon} />
      <Text>火车票机票</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.serviceItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.serviceIcon} />
      <Text>蚂蚁森林</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.serviceItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.serviceIcon} />
      <Text>芭芭农场</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.serviceItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.serviceIcon} />
      <Text>我的小程序</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.serviceItem}>
      <Text style={styles.moreText}>更多</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.recentActivity}>
    <Text style={styles.activityTitle}>最近消息</Text>
    <TouchableOpacity style={styles.activityItem}>
      <Text>{"200条新消息 >"}</Text>
    </TouchableOpacity>
    <View style={styles.activityItem}>
      <Text>高德打车  </Text>
      <Text>自动扣款成功 ￥12.30</Text>
      <Text>7小时前</Text>
    </View>
    <View style={styles.activityItem}>
      <Text>高德打车  </Text>
      <Text>自动扣款成功 ￥34.54，你有支付奖励待领取</Text>
      <Text>11小时前</Text>
    </View>
  </View>

  <View style={styles.promotions}>
    <Image source={require('../assets/snack-icon.png')} style={styles.promotionBanner} />
    <View style={styles.promotionItem}>
      <Text>消费圈</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.promotionIcon} />
      <Text>中国黄金</Text>
    </View>
    <View style={styles.promotionItem}>
      <Text>理财</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.promotionIcon} />
      <Text>福汉康</Text>
    </View>
  </View>

  <View style={styles.footer}>
    <Text>芝麻信用</Text>
    <Text>已从"青岛"切到当前所在地</Text>
    <TouchableOpacity style={styles.switchButton}>
      <Text>切换回青岛</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text>首页</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text>理财</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text>视频</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text>消息</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={navigateToProfile}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text>我的</Text>
    </TouchableOpacity>
  </View>
</ScrollView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f0f0f0',
},
header: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
backgroundColor: '#1e90ff',
},
location: {
color: 'white',
marginRight: 10,
},
searchBar: {
flex: 1,
backgroundColor: 'white',
borderRadius: 20,
padding: 5,
marginRight: 10,
},
addButton: {
backgroundColor: 'white',
borderRadius: 15,
width: 30,
height: 30,
justifyContent: 'center',
alignItems: 'center',
},
addButtonText: {
fontSize: 20,
color: '#1e90ff',
},
quickActions: {
flexDirection: 'row',
justifyContent: 'space-around',
padding: 15,
backgroundColor: 'white',
},
actionButton: {
alignItems: 'center',
},
actionIcon: {
width: 40,
height: 40,
marginBottom: 5,
},
services: {
flexDirection: 'row',
flexWrap: 'wrap',
padding: 10,
backgroundColor: 'white',
},
serviceItem: {
width: '20%',
alignItems: 'center',
marginBottom: 15,
},
serviceIcon: {
width: 30,
height: 30,
marginBottom: 5,
},
moreText: {
color: '#1e90ff',
},
recentActivity: {
padding: 15,
backgroundColor: 'white',
marginTop: 10,
},
activityTitle: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 10,
},
activityItem: {
marginBottom: 10,
flexDirection: 'row'
},
promotions: {
padding: 15,
backgroundColor: 'white',
marginTop: 10,
flexDirection:'row'
},
promotionBanner: {
width: "40%",
height: 100,
marginBottom: 10,
},
promotionItem: {
flexDirection: 'column',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: 10,
marginLeft: 10
},
promotionIcon: {
width: 20,
height: 20,
},
footer: {
padding: 15,
backgroundColor: 'white',
marginTop: 10,
},
switchButton: {
backgroundColor: '#f0f0f0',
padding: 5,
borderRadius: 5,
marginTop: 5,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
padding: 10,
backgroundColor: 'white',
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
},
navItem: {
alignItems: 'center',
},
navIcon: {
width: 25,
height: 25,
marginBottom: 5,
},
});
export default Home;