import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Profile = () => {
const navigation = useNavigation();
const navigateToHome = () => {
navigation.navigate('Home');
};
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<Text style={styles.headerText}>{"用户保护中心 >"}</Text>
<View style={styles.headerIcons}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</View>
</View>
  <View style={styles.profileSection}>
    <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
    <View style={styles.profileInfo}>
      <Text style={styles.username}>不吃不吃</Text>
      <Text style={styles.phoneNumber}>136******15</Text>
    </View>
    <TouchableOpacity style={styles.arrowButton}>
      <Text style={styles.arrowText}>{">"}</Text>
    </TouchableOpacity>
  </View>

  <TouchableOpacity style={styles.uploadIdSection}>
    <Text style={styles.uploadIdText}>上传身份证照片，以使用更多金融服务</Text>
    <Text style={styles.arrowText}>{">"}</Text>
  </TouchableOpacity>

  <View style={styles.memberSection}>
    <Image source={require('../assets/snack-icon.png')} style={styles.memberIcon} />
    <Text style={styles.memberText}>支付宝会员</Text>
    <View style={styles.pointsContainer}>
      <Text style={styles.pointsText}>110积分待领取</Text>
      <Text style={styles.arrowText}>{">"}</Text>
    </View>
  </View>

  <View style={styles.merchantSection}>
    <View style={styles.item}>
      <Image source={require('../assets/snack-icon.png')} style={styles.merchantIcon} />
      <Text style={styles.merchantText}>商家服务</Text>
      <Text style={styles.viewDetailsText}>{"查看收款明细 >"}</Text>
    </View>
    
    <View style={styles.merchantStats}>
      <View style={styles.statItem}>
        <Text style={styles.statLabel}>今日收款（元）</Text>
        <Text style={styles.statValue}>0.00</Text>
      </View>
      <View style={styles.statItem}>
        <Text style={styles.statLabel}>商家积分</Text>
        <Text style={styles.statValue}>0</Text>
      </View>
    </View>
  </View>

  <View style={styles.mainMenu}>
    <MenuItem icon={require('../assets/snack-icon.png')} title="账单" />
    <MenuItem icon={require('../assets/snack-icon.png')} title="总资产" rightText="免费领取账户保障" />
    <MenuItem icon={require('../assets/snack-icon.png')} title="余额" />
    <MenuItem icon={require('../assets/snack-icon.png')} title="余额宝" />
    <MenuItem icon={require('../assets/snack-icon.png')} title="花呗" rightText="冲榜赢苹果手机" />
    <MenuItem icon={require('../assets/snack-icon.png')} title="银行卡" />
  </View>

  <View style={styles.otherServices}>
    <Text style={styles.sectionTitle}>其他服务</Text>
    <View style={styles.servicesGrid}>
      <ServiceItem icon={require('../assets/snack-icon.png')} title="芝麻信用" />
      <ServiceItem icon={require('../assets/snack-icon.png')} title="蚂蚁保" />
      {/* Add more service items as needed */}
    </View>
  </View>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem} onPress={navigateToHome}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>首页</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>理财</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>视频</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>消息</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>我的</Text>
    </TouchableOpacity>
  </View>
</ScrollView>
);
};
const MenuItem = ({ icon, title, rightText }) => (
<TouchableOpacity style={styles.menuItem}>
<Image source={icon} style={styles.menuIcon} />
<Text style={styles.menuTitle}>{title}</Text>
{rightText && <Text style={styles.menuRightText}>{rightText}</Text>}
<Text style={styles.arrowText}>{">"}</Text>
</TouchableOpacity>
);
const ServiceItem = ({ icon, title }) => (
<TouchableOpacity style={styles.serviceItem}>
<Image source={icon} style={styles.serviceIcon} />
<Text style={styles.serviceTitle}>{title}</Text>
</TouchableOpacity>
);
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f0f0f0',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 15,
backgroundColor: '#fff',
},
headerText: {
fontSize: 16,
fontWeight: 'bold',
},
headerIcons: {
flexDirection: 'row',
},
icon: {
width: 24,
height: 24,
marginLeft: 15,
},
profileSection: {
flexDirection: 'row',
alignItems: 'center',
padding: 15,
backgroundColor: '#fff',
marginTop: 10,
},
avatar: {
width: 60,
height: 60,
borderRadius: 30,
},
profileInfo: {
marginLeft: 15,
flex: 1,
},
username: {
fontSize: 18,
fontWeight: 'bold',
},
phoneNumber: {
color: '#888',
marginTop: 5,
},
arrowButton: {
padding: 5,
},
arrowText: {
fontSize: 18,
color: '#888',
},
uploadIdSection: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 15,
backgroundColor: '#fff',
marginTop: 10,
},
uploadIdText: {
flex: 1,
},
memberSection: {
flexDirection: 'row',
alignItems: 'center',
padding: 15,
backgroundColor: '#fff',
marginTop: 10,
},
memberIcon: {
width: 24,
height: 24,
},
memberText: {
marginLeft: 10,
flex: 1,
},
pointsContainer: {
flexDirection: 'row',
alignItems: 'center',
},
pointsText: {
color: '#888',
marginRight: 5,
},
merchantSection: {
padding: 15,
backgroundColor: '#fff',
marginTop: 10,
},
item: {
flexDirection: 'row'
},
merchantIcon: {
width: 24,
height: 24,
},
merchantText: {
fontSize: 16,
fontWeight: 'bold',
marginTop: 5,
marginLeft: 10
},
viewDetailsText: {
color: '#888',
marginTop: 5,
marginLeft: 150
},
merchantStats: {
flexDirection: 'row',
justifyContent: 'space-between',
marginTop: 15,
},
statItem: {
alignItems: 'center',
},
statLabel: {
color: '#888',
},
statValue: {
fontSize: 18,
fontWeight: 'bold',
marginTop: 5,
},
mainMenu: {
backgroundColor: '#fff',
marginTop: 10,
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
marginRight: 15,
},
menuTitle: {
flex: 1,
},
menuRightText: {
color: '#888',
marginRight: 10,
},
otherServices: {
backgroundColor: '#fff',
marginTop: 10,
padding: 15,
},
sectionTitle: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 15,
},
servicesGrid: {
flexDirection: 'row',
flexWrap: 'wrap',
},
serviceItem: {
width: '25%',
alignItems: 'center',
marginBottom: 15,
},
serviceIcon: {
width: 40,
height: 40,
marginBottom: 5,
},
serviceTitle: {
textAlign: 'center',
fontSize: 12,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
paddingVertical: 10,
backgroundColor: '#fff',
borderTopWidth: 1,
borderTopColor: '#f0f0f0',
},
navItem: {
alignItems: 'center',
},
navIcon: {
width: 24,
height: 24,
},
navText: {
marginTop: 5,
fontSize: 12,
},
});
export default Profile;