import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Home = () => {
const [searchQuery, setSearchQuery] = useState('');
const navigation = useNavigation();
const handleSearch = () => {
// Implement search functionality
};
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
<View style={styles.searchBar}>
<TextInput style={styles.searchInput} placeholder="支付宝会员" value={searchQuery} onChangeText={setSearchQuery} />
<TouchableOpacity onPress={handleSearch}>
<Text style={styles.searchButton}>搜索</Text>
</TouchableOpacity>
</View>
</View>
  <View style={styles.quickActions}>
    <TouchableOpacity style={styles.actionButton}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.actionIcon} />
      <Text>扫一扫</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.actionButton} onPress={navigateToTrade}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.actionIcon} />
      <Text>收付款</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.actionButton}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.actionIcon} />
      <Text>出行</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.actionButton}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.actionIcon} />
      <Text>卡包</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.services}>
    <TouchableOpacity style={styles.serviceItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.serviceIcon} />
      <Text>饿了么</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.serviceItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.serviceIcon} />
      <Text>口碑团购</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.serviceItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.serviceIcon} />
      <Text>市民中心</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.serviceItem} onPress={navigateToTickets}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.serviceIcon} />
      <Text>淘票票</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.serviceItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.serviceIcon} />
      <Text>转账</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.serviceItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.serviceIcon} />
      <Text>更多</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.notifications}>
    <Text style={styles.notificationText}>高德打车 自动扣款成功 ¥12.30</Text>
    <Text style={styles.notificationTime}>7小时前</Text>
  </View>

  <View style={styles.notifications}>
    <Text style={styles.notificationText}>高德打车 自动扣款成功 ¥34.54，你有支付奖励待领取</Text>
    <Text style={styles.notificationTime}>11小时前</Text>
  </View>

  <TouchableOpacity style={styles.adBanner}>
    <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.adImage} />
    <Text style={styles.adText}>花呗请你喝奶茶</Text>
  </TouchableOpacity>

  <View style={styles.bottomBar}>
    <TouchableOpacity style={styles.bottomBarItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.bottomBarIcon} />
      <Text>首页</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bottomBarItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.bottomBarIcon} />
      <Text>理财</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bottomBarItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.bottomBarIcon} />
      <Text>视频</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bottomBarItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.bottomBarIcon} />
      <Text>消息</Text>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>13</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bottomBarItem} onPress={navigateToProfile}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.bottomBarIcon} />
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
padding: 10,
backgroundColor: '#1E90FF',
},
location: {
color: 'white',
fontSize: 16,
},
searchBar: {
flexDirection: 'row',
backgroundColor: 'white',
borderRadius: 20,
marginTop: 10,
paddingHorizontal: 10,
},
searchInput: {
flex: 1,
padding: 8,
},
searchButton: {
padding: 8,
color: '#1E90FF',
},
quickActions: {
flexDirection: 'row',
justifyContent: 'space-around',
paddingVertical: 15,
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
justifyContent: 'space-around',
padding: 10,
backgroundColor: 'white',
marginTop: 10,
},
serviceItem: {
alignItems: 'center',
width: '25%',
marginBottom: 15,
},
serviceIcon: {
width: 50,
height: 50,
marginBottom: 5,
},
notifications: {
backgroundColor: 'white',
padding: 15,
marginTop: 10,
},
notificationText: {
fontSize: 14,
},
notificationTime: {
fontSize: 12,
color: 'gray',
marginTop: 5,
},
adBanner: {
backgroundColor: 'white',
padding: 15,
marginTop: 10,
flexDirection: 'row',
alignItems: 'center',
},
adImage: {
width: 50,
height: 50,
marginRight: 10,
},
adText: {
fontSize: 16,
},
bottomBar: {
flexDirection: 'row',
justifyContent: 'space-around',
paddingVertical: 10,
backgroundColor: 'white',
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
},
bottomBarItem: {
alignItems: 'center',
},
bottomBarIcon: {
width: 24,
height: 24,
marginBottom: 5,
},
badge: {
position: 'absolute',
top: -5,
right: -10,
backgroundColor: 'red',
borderRadius: 10,
minWidth: 20,
height: 20,
justifyContent: 'center',
alignItems: 'center',
},
badgeText: {
color: 'white',
fontSize: 12,
},
});
export default Home;