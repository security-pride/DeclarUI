import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
const ProfileScreen = ({ navigation }) => {
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
<View style={styles.userInfo}>
<Text style={styles.username}>不吃不吃不吃Orz</Text>
<View style={styles.membershipBadge}>
<Text style={styles.membershipText}>淘龄5年</Text>
</View>
</View>
<TouchableOpacity style={styles.headerButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />
<Text style={styles.headerButtonText}>官方客服</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.headerButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />
<Text style={styles.headerButtonText}>设置</Text>
</TouchableOpacity>
</View>
  <View style={styles.savingsSection}>
    <Text style={styles.savingsText}>为你节省 ¥781</Text>
    <TouchableOpacity style={styles.moreButton}>
      <Text style={styles.moreButtonText}>更多 ></Text>
    </TouchableOpacity>
  </View>

  <View style={styles.memberInfoSection}>
    <View style={styles.infoItem}>
      <Text style={styles.infoLabel}>省钱卡</Text>
      <Text style={styles.infoValue}>立即查看</Text>
    </View>
    <View style={styles.infoItem}>
      <Text style={styles.infoLabel}>天猫积分</Text>
      <Text style={styles.infoValue}>990</Text>
    </View>
    <View style={styles.infoItem}>
      <Text style={styles.infoLabel}>红包</Text>
      <Text style={styles.infoValue}>¥0.00</Text>
    </View>
    <View style={styles.infoItem}>
      <Text style={styles.infoLabel}>优惠券</Text>
      <Text style={styles.infoValue}>0张</Text>
    </View>
  </View>

  <TouchableOpacity style={styles.vipSection}>
    <Text style={styles.vipText}>88VIP</Text>
    <Image source={require('../assets/snack-icon.png')} style={styles.vipIcon} />
    <Text style={styles.vipDescription}>得网易云音乐VIP</Text>
    <Text style={styles.vipAction}>去解锁音乐特权 ></Text>
  </TouchableOpacity>

  <View style={styles.orderSection}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>我的订单</Text>
      <TouchableOpacity>
        <Text style={styles.sectionMore}>全部 ></Text>
      </TouchableOpacity>
    </View>
    <View style={styles.orderStatusRow}>
      <TouchableOpacity style={styles.orderStatusItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.orderStatusIcon} />
        <Text style={styles.orderStatusText}>待付款</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.orderStatusItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.orderStatusIcon} />
        <Text style={styles.orderStatusText}>待发货</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.orderStatusItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.orderStatusIcon} />
        <Text style={styles.orderStatusText}>待收货</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.orderStatusItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.orderStatusIcon} />
        <Text style={styles.orderStatusText}>待评价</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.orderStatusItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.orderStatusIcon} />
        <Text style={styles.orderStatusText}>退款/售后</Text>
      </TouchableOpacity>
    </View>
  </View>

  <View style={styles.quickAccessSection}>
    <View style={styles.quickAccessRow}>
      <TouchableOpacity style={styles.quickAccessItem}>
        <Text style={styles.quickAccessTitle}>快递</Text>
        <Text style={styles.quickAccessSubtitle}>查看快递信息</Text>
        <View style={styles.quickAccessActions}>
          <TouchableOpacity style={styles.quickAccessButton}>
            <Text style={styles.quickAccessButtonText}>查取件</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAccessButton}>
            <Text style={styles.quickAccessButtonText}>查寄件</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.quickAccessItem}>
        <Text style={styles.quickAccessTitle}>收藏</Text>
        <Text style={styles.quickAccessSubtitle}>查看最近收藏</Text>
        <View style={styles.quickAccessContent}>
          <Image source={require('../assets/snack-icon.png')} style={styles.folderIcon} />
          <Text style={styles.noRecommendationText}>暂无推荐</Text>
          <TouchableOpacity>
            <Text style={styles.browseMoreText}>去逛逛更多宝贝</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
    <View style={styles.quickAccessRow}>
      <TouchableOpacity style={styles.quickAccessItem}>
        <Text style={styles.quickAccessTitle}>足迹</Text>
        <Text style={styles.quickAccessSubtitle}>看过的商品和视频</Text>
        <View style={styles.quickAccessActions}>
          <TouchableOpacity style={styles.quickAccessButton}>
            <Text style={styles.quickAccessButtonText}>我的足迹</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAccessButton}>
            <Text style={styles.quickAccessButtonText}>红包签到</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAccessButton}>
            <Text style={styles.quickAccessButtonText}>摇现金</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  </View>

  <View style={styles.bottomNavBar}>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>首页</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>逛逛</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Message')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>消息</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Cart')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>购物车</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={[styles.navText, styles.activeNavText]}>我的淘宝</Text>
    </TouchableOpacity>
  </View>
</ScrollView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#000',
},
header: {
flexDirection: 'row',
alignItems: 'center',
padding: 15,
},
avatar: {
width: 60,
height: 60,
borderRadius: 30,
},
userInfo: {
marginLeft: 10,
flex: 1,
},
username: {
fontSize: 18,
fontWeight: 'bold',
color: '#fff',
},
membershipBadge: {
backgroundColor: '#FF6600',
borderRadius: 10,
paddingHorizontal: 5,
paddingVertical: 2,
marginTop: 5,
},
membershipText: {
color: '#fff',
fontSize: 12,
},
headerButton: {
alignItems: 'center',
marginLeft: 10,
},
headerIcon: {
width: 24,
height: 24,
},
headerButtonText: {
color: '#fff',
fontSize: 12,
},
savingsSection: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
backgroundColor: '#FF6600',
padding: 15,
},
savingsText: {
color: '#fff',
fontSize: 16,
fontWeight: 'bold',
},
moreButton: {
backgroundColor: 'rgba(255, 255, 255, 0.2)',
borderRadius: 15,
paddingHorizontal: 10,
paddingVertical: 5,
},
moreButtonText: {
color: '#fff',
fontSize: 12,
},
memberInfoSection: {
flexDirection: 'row',
justifyContent: 'space-around',
backgroundColor: '#222',
paddingVertical: 15,
},
infoItem: {
alignItems: 'center',
},
infoLabel: {
color: '#999',
fontSize: 12,
},
infoValue: {
color: '#fff',
fontSize: 16,
fontWeight: 'bold',
marginTop: 5,
},
vipSection: {
backgroundColor: '#222',
padding: 15,
marginTop: 10,
flexDirection: 'row',
alignItems: 'center',
},
vipText: {
color: '#FF6600',
fontSize: 18,
fontWeight: 'bold',
},
vipIcon: {
width: 30,
height: 30,
marginLeft: 10,
},
vipDescription: {
color: '#fff',
fontSize: 14,
marginLeft: 10,
},
vipAction: {
color: '#FF6600',
fontSize: 12,
marginLeft: 'auto',
},
orderSection: {
backgroundColor: '#222',
padding: 15,
marginTop: 10,
},
sectionHeader: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: 15,
},
sectionTitle: {
color: '#fff',
fontSize: 16,
fontWeight: 'bold',
},
sectionMore: {
color: '#999',
fontSize: 12,
},
orderStatusRow: {
flexDirection: 'row',
justifyContent: 'space-between',
},
orderStatusItem: {
alignItems: 'center',
},
orderStatusIcon: {
width: 24,
height: 24,
marginBottom: 5,
},
orderStatusText: {
color: '#fff',
fontSize: 12,
},
quickAccessSection: {
backgroundColor: '#222',
padding: 15,
marginTop: 10,
},
quickAccessRow: {
flexDirection: 'row',
justifyContent: 'space-between',
marginBottom: 10,
},
quickAccessItem: {
flex: 1,
backgroundColor: '#333',
borderRadius: 10,
padding: 10,
marginHorizontal: 5,
},
quickAccessTitle: {
color: '#fff',
fontSize: 16,
fontWeight: 'bold',
},
quickAccessSubtitle: {
color: '#999',
fontSize: 12,
marginTop: 5,
},
quickAccessActions: {
flexDirection: 'row',
marginTop: 10,
},
quickAccessButton: {
backgroundColor: '#444',
borderRadius: 15,
paddingHorizontal: 10,
paddingVertical: 5,
marginRight: 10,
},
quickAccessButtonText: {
color: '#fff',
fontSize: 12,
},
quickAccessContent: {
alignItems: 'center',
marginTop: 10,
},
folderIcon: {
width: 40,
height: 40,
marginBottom: 5,
},
noRecommendationText: {
color: '#999',
fontSize: 12,
},
browseMoreText: {
color: '#FF6600',
fontSize: 12,
marginTop: 5,
},
bottomNavBar: {
flexDirection: 'row',
justifyContent: 'space-around',
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
color: '#999',
fontSize: 12,
marginTop: 5,
},
activeNavText: {
color: '#FF6600',
},
});
export default ProfileScreen;