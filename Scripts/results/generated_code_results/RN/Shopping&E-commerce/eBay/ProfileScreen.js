import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const ProfileScreen = () => {
const navigation = useNavigation();
const menuItems = [
{ icon: 'heart', title: '追踪列表', description: '密切关注追踪物品' },
{ icon: 'bookmark', title: '已保存', description: '搜索、卖家、动态消息' },
{ icon: 'refresh', title: '再次购买', description: '购买已购买过的物品' },
{ icon: 'package', title: '购买记录', description: '您的订购历史记录' },
{ icon: 'gavel', title: '出价和议价', description: '进行中的拍卖和卖家议价' },
{ icon: 'clock', title: '最近浏览', description: '您最近浏览的物品' },
{ icon: 'ruler', title: '我的尺码', description: '查看您保存的偏好设置' },
];
const renderMenuItem = (item, index) => (
<TouchableOpacity
key={index}
style={styles.menuItem}
onPress={() => {
if (item.title === '购买记录') {
navigation.navigate('History');
}
}}
>
<Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
<View style={styles.menuTextContainer}>
<Text style={styles.menuTitle}>{item.title}</Text>
<Text style={styles.menuDescription}>{item.description}</Text>
</View>
</TouchableOpacity>
);
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<View style={styles.avatarContainer}>
<Text style={styles.avatarText}>M</Text>
</View>
<View style={styles.userInfo}>
<Text style={styles.username}>mu_447895</Text>
<Text style={styles.registrationDate}>注册时间 2021</Text>
</View>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.messageIcon} />
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.cartIcon} />
</TouchableOpacity>
</View>
  <Text style={styles.sectionTitle}>购物</Text>

  {menuItems.map(renderMenuItem)}

  <Text style={styles.sectionTitle}>快捷方式</Text>

  <TouchableOpacity style={styles.menuItem}>
    <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
    <Text style={styles.menuTitle}>出售记录</Text>
  </TouchableOpacity>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>主页</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>我的 eBay</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Search')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>搜索</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>通知</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>出售物品</Text>
    </TouchableOpacity>
  </View>
</ScrollView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f8f8f8',
},
header: {
flexDirection: 'row',
alignItems: 'center',
padding: 20,
backgroundColor: '#fff',
},
avatarContainer: {
width: 60,
height: 60,
borderRadius: 30,
backgroundColor: '#FFB6C1',
justifyContent: 'center',
alignItems: 'center',
},
avatarText: {
fontSize: 24,
fontWeight: 'bold',
color: '#fff',
},
userInfo: {
marginLeft: 15,
flex: 1,
},
username: {
fontSize: 18,
fontWeight: 'bold',
},
registrationDate: {
fontSize: 14,
color: '#888',
},
messageIcon: {
width: 24,
height: 24,
marginRight: 15,
},
cartIcon: {
width: 24,
height: 24,
},
sectionTitle: {
fontSize: 18,
fontWeight: 'bold',
padding: 15,
backgroundColor: '#fff',
marginTop: 10,
},
menuItem: {
flexDirection: 'row',
alignItems: 'center',
padding: 15,
backgroundColor: '#fff',
borderBottomWidth: 1,
borderBottomColor: '#f0f0f0',
},
menuIcon: {
width: 24,
height: 24,
marginRight: 15,
},
menuTextContainer: {
flex: 1,
},
menuTitle: {
fontSize: 16,
fontWeight: 'bold',
},
menuDescription: {
fontSize: 14,
color: '#888',
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
marginBottom: 5,
},
navText: {
fontSize: 12,
},
});
export default ProfileScreen;