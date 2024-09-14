import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native';
const MessageScreen = ({ navigation }) => {
const [messages, setMessages] = useState([
{ store: 'romoss旗舰店', date: '24/07/03', content: '商品使用说明', unreadCount: 4 },
{ title: '订阅号消息', date: '24/06/13', content: 'COURTMAN野球帝:新品揭晓，所有等待都值得。' },
{ store: 'jELLYCAT海外旗舰店', date: '24/04/03', content: 'Jellycat 2024新生系列焕新上市！会员臻享...', unreadCount: 3 },
{ store: 'YOMIK', date: '24/03/25', content: '亲，对藕香抹微云、的服务满意吗？', unreadCount: 1 },
{ store: 'Starbucks星巴克官方旗舰店', date: '24/03/19', content: '亲爱的，你感兴趣的宝贝降价啦，不要错过限...', unreadCount: 4 },
{ store: '良品铺子旗舰店', date: '24/03/13', content: '周三会员福利日！千万别错过！', unreadCount: 5 },
{ store: 'jELLYCAT旗舰店', date: '24/02/22', content: '龙腾新岁，开工大吉！入会臻享爆品优先购。', unreadCount: 2 },
]);
const categories = [
{ name: '交易物流', icon: '../assets/snack-icon.png' },
{ name: '售后', icon: '../assets/snack-icon.png' },
{ name: '提醒', icon: '../assets/snack-icon.png' },
{ name: '互动', icon: '../assets/snack-icon.png' },
];
const renderMessageItem = ({ item }) => (
<TouchableOpacity
style={styles.messageItem}
onPress={() => {
if (item.store === 'romoss旗舰店' || item.title === '订阅号消息') {
navigation.navigate('Logistics');
}
}}
>
<Image source={require('../assets/snack-icon.png')} style={styles.storeIcon} />
<View style={styles.messageContent}>
<Text style={styles.storeName}>{item.store || item.title}</Text>
<Text style={styles.messageText} numberOfLines={1}>{item.content}</Text>
</View>
<View style={styles.messageMetadata}>
<Text style={styles.dateText}>{item.date}</Text>
{item.unreadCount && (
<View style={styles.unreadBadge}>
<Text style={styles.unreadCount}>{item.unreadCount}</Text>
</View>
)}
</View>
</TouchableOpacity>
);
return (
<View style={styles.container}>
<View style={styles.header}>
<Text style={styles.headerTitle}>消息</Text>
<View style={styles.headerActions}>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />
</TouchableOpacity>
</View>
</View>
  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
    {categories.map((category, index) => (
      <TouchableOpacity 
        key={index} 
        style={styles.categoryItem}
        onPress={() => {
          if (category.name === '交易物流') {
            navigation.navigate('Logistics');
          }
        }}
      >
        <Image source={category.icon} style={styles.categoryIcon} />
        <Text style={styles.categoryText}>{category.name}</Text>
      </TouchableOpacity>
    ))}
  </ScrollView>

  <View style={styles.bannerContainer}>
    <Image source={require('../assets/snack-icon.png')} style={styles.bannerIcon} />
    <View style={styles.bannerContent}>
      <Text style={styles.bannerTitle}>热门活动抢先看</Text>
      <Text style={styles.bannerSubtitle}>更多优惠尽在掌握</Text>
    </View>
    <Text style={styles.bannerDate}>6.1-8.31</Text>
    <TouchableOpacity style={styles.bannerCloseButton}>
      <Text style={styles.bannerCloseText}>×</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.divider} />
  <Text style={styles.sectionTitle}>两周前的消息</Text>

  <FlatList
    data={messages}
    renderItem={renderMessageItem}
    keyExtractor={(item, index) => index.toString()}
    style={styles.messageList}
  />

  <View style={styles.bottomNavBar}>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>首页</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>逛逛</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={[styles.navText, styles.activeNavText]}>消息</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Cart')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>购物车</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>我的淘宝</Text>
    </TouchableOpacity>
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#000',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 10,
},
headerTitle: {
fontSize: 20,
fontWeight: 'bold',
color: '#fff',
},
headerActions: {
flexDirection: 'row',
},
headerIcon: {
width: 24,
height: 24,
marginLeft: 15,
},
categoriesContainer: {
flexDirection: 'row',
paddingVertical: 10,
},
categoryItem: {
alignItems: 'center',
marginHorizontal: 15,
},
categoryIcon: {
width: 40,
height: 40,
},
categoryText: {
marginTop: 5,
fontSize: 12,
color: '#fff',
},
bannerContainer: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#333',
padding: 10,
marginHorizontal: 10,
borderRadius: 5,
},
bannerIcon: {
width: 40,
height: 40,
marginRight: 10,
},
bannerContent: {
flex: 1,
},
bannerTitle: {
fontSize: 14,
fontWeight: 'bold',
color: '#fff',
},
bannerSubtitle: {
fontSize: 12,
color: '#ccc',
},
bannerDate: {
fontSize: 12,
color: '#ccc',
},
bannerCloseButton: {
padding: 5,
},
bannerCloseText: {
fontSize: 16,
color: '#fff',
},
divider: {
height: 1,
backgroundColor: '#333',
marginVertical: 10,
},
sectionTitle: {
fontSize: 14,
color: '#999',
marginLeft: 10,
marginBottom: 10,
},
messageList: {
flex: 1,
},
messageItem: {
flexDirection: 'row',
padding: 10,
borderBottomWidth: 1,
borderBottomColor: '#333',
},
storeIcon: {
width: 50,
height: 50,
borderRadius: 25,
marginRight: 10,
},
messageContent: {
flex: 1,
},
storeName: {
fontSize: 16,
fontWeight: 'bold',
color: '#fff',
marginBottom: 5,
},
messageText: {
fontSize: 14,
color: '#ccc',
},
messageMetadata: {
alignItems: 'flex-end',
},
dateText: {
fontSize: 12,
color: '#999',
},
unreadBadge: {
backgroundColor: '#ff6600',
borderRadius: 10,
width: 20,
height: 20,
justifyContent: 'center',
alignItems: 'center',
marginTop: 5,
},
unreadCount: {
color: '#fff',
fontSize: 12,
},
bottomNavBar: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
backgroundColor: '#111',
paddingVertical: 10,
borderTopWidth: 1,
borderTopColor: '#333',
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
color: '#999',
marginTop: 5,
},
activeNavText: {
color: '#ff6600',
},
});
export default MessageScreen;