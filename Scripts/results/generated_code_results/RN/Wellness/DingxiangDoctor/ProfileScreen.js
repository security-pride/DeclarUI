import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Profile = () => {
const navigation = useNavigation();
const handleHomePress = () => {
navigation.navigate('Home');
};
const handleSearchPress = () => {
navigation.navigate('SearchMedicineDisease');
};
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.avatar} />
<View style={styles.userInfo}>
<Text style={styles.username}>dxy_hqup58fr</Text>
<TouchableOpacity style={styles.profileLink}>
<Text style={styles.profileLinkText}>个人主页 ></Text>
</TouchableOpacity>
</View>
<TouchableOpacity style={styles.messageIcon}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.icon} />
</TouchableOpacity>
</View>
  <View style={styles.stats}>
    <View style={styles.statItem}>
      <Text style={styles.statValue}>0</Text>
      <Text style={styles.statLabel}>收藏</Text>
    </View>
    <View style={styles.statItem}>
      <Text style={styles.statValue}>0</Text>
      <Text style={styles.statLabel}>关注</Text>
    </View>
    <View style={styles.statItem}>
      <Text style={styles.statValue}>0</Text>
      <Text style={styles.statLabel}>医生卡</Text>
    </View>
    <View style={styles.statItem}>
      <Text style={styles.statValue}>0</Text>
      <Text style={styles.statLabel}>优惠券</Text>
    </View>
  </View>

  <View style={styles.section}>
    <Text style={styles.sectionTitle}>我的订单</Text>
    <View style={styles.orderItems}>
      <TouchableOpacity style={styles.orderItem}>
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.orderIcon} />
        <Text style={styles.orderLabel}>我的问诊</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.orderItem}>
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.orderIcon} />
        <Text style={styles.orderLabel}>我的处方</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.orderItem}>
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.orderIcon} />
        <Text style={styles.orderLabel}>药品订单</Text>
      </TouchableOpacity>
    </View>
  </View>

  <View style={styles.promotionBanner}>
    <View style={styles.promotionContent}>
      <Text style={styles.promotionTitle}>新人首次问诊 9.9 元起</Text>
      <Text style={styles.promotionSubtitle}>仅1次机会 三甲医生在线接诊</Text>
      <TouchableOpacity style={styles.promotionButton}>
        <Text style={styles.promotionButtonText}>去咨询</Text>
      </TouchableOpacity>
    </View>
    <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.promotionImage} />
  </View>

  <View style={styles.section}>
    <Text style={styles.sectionTitle}>更多功能</Text>
    <View style={styles.featuresGrid}>
      <TouchableOpacity style={styles.featureItem}>
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.featureIcon} />
        <Text style={styles.featureLabel}>患者信息</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.featureItem}>
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.featureIcon} />
        <Text style={styles.featureLabel}>医师讲堂</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.featureItem}>
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.featureIcon} />
        <Text style={styles.featureLabel}>成长测评</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.featureItem}>
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.featureIcon} />
        <Text style={styles.featureLabel}>设置</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.featureItem}>
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.featureIcon} />
        <Text style={styles.featureLabel}>在线客服</Text>
      </TouchableOpacity>
    </View>
  </View>

  <View style={styles.footer}>
    <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.footerLogo} />
    <Text style={styles.footerText}>一起发现健康生活</Text>
  </View>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem} onPress={handleHomePress}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navLabel}>首页</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navLabel}>问医生</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={handleSearchPress}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navLabel}>查病查药</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={[styles.navLabel, styles.activeNavLabel]}>我的</Text>
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
padding: 20,
backgroundColor: '#fff',
},
avatar: {
width: 60,
height: 60,
borderRadius: 30,
},
userInfo: {
marginLeft: 15,
flex: 1,
},
username: {
fontSize: 18,
fontWeight: 'bold',
},
profileLink: {
marginTop: 5,
},
profileLinkText: {
color: '#999',
},
messageIcon: {
padding: 10,
},
icon: {
width: 24,
height: 24,
},
stats: {
flexDirection: 'row',
backgroundColor: '#fff',
paddingVertical: 15,
marginBottom: 10,
},
statItem: {
flex: 1,
alignItems: 'center',
},
statValue: {
fontSize: 18,
fontWeight: 'bold',
},
statLabel: {
color: '#666',
marginTop: 5,
},
section: {
backgroundColor: '#fff',
marginBottom: 10,
padding: 15,
},
sectionTitle: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 15,
},
orderItems: {
flexDirection: 'row',
justifyContent: 'space-around',
},
orderItem: {
alignItems: 'center',
},
orderIcon: {
width: 30,
height: 30,
marginBottom: 5,
},
orderLabel: {
fontSize: 12,
},
promotionBanner: {
flexDirection: 'row',
backgroundColor: '#fff',
padding: 15,
marginBottom: 10,
},
promotionContent: {
flex: 1,
},
promotionTitle: {
fontSize: 16,
fontWeight: 'bold',
},
promotionSubtitle: {
color: '#666',
marginTop: 5,
},
promotionButton: {
backgroundColor: '#ff6b00',
paddingHorizontal: 15,
paddingVertical: 5,
borderRadius: 15,
alignSelf: 'flex-start',
marginTop: 10,
},
promotionButtonText: {
color: '#fff',
},
promotionImage: {
width: 80,
height: 80,
},
featuresGrid: {
flexDirection: 'row',
flexWrap: 'wrap',
},
featureItem: {
width: '20%',
alignItems: 'center',
marginBottom: 15,
},
featureIcon: {
width: 30,
height: 30,
marginBottom: 5,
},
featureLabel: {
fontSize: 12,
textAlign: 'center',
},
footer: {
alignItems: 'center',
padding: 20,
},
footerLogo: {
width: 40,
height: 40,
marginBottom: 10,
},
footerText: {
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
marginBottom: 5,
},
navLabel: {
fontSize: 12,
},
activeNavItem: {
// Add styles for active nav item if needed
},
activeNavLabel: {
color: '#4a90e2',
},
});
export default Profile;