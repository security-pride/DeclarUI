import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Profile = () => {
const navigation = useNavigation();
const navigateToHome = () => {
navigation.navigate('Home');
};
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<Text style={styles.headerText}>用户保护中心 ></Text>
<View style={styles.headerIcons}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.icon} />
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.icon} />
</View>
</View>
  <View style={styles.profileSection}>
    <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.avatar} />
    <View style={styles.profileInfo}>
      <Text style={styles.username}>不吃不吃</Text>
      <Text style={styles.phoneNumber}>136******15</Text>
    </View>
    <TouchableOpacity style={styles.arrowButton}>
      <Text>&gt;</Text>
    </TouchableOpacity>
  </View>

  <TouchableOpacity style={styles.uploadIdSection}>
    <Text style={styles.uploadIdText}>上传身份证照片，以使用更多金融服务</Text>
    <Text style={styles.arrowRight}>&gt;</Text>
  </TouchableOpacity>

  <View style={styles.memberSection}>
    <View style={styles.memberInfo}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.memberIcon} />
      <Text style={styles.memberText}>支付宝会员</Text>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.verifiedIcon} />
    </View>
    <TouchableOpacity style={styles.pointsButton}>
      <Text style={styles.pointsText}>110积分待领取 &gt;</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.merchantSection}>
    <View style={styles.sectionHeader}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.sectionIcon} />
      <Text style={styles.sectionTitle}>商家服务</Text>
      <TouchableOpacity style={styles.detailButton}>
        <Text style={styles.detailButtonText}>查看收款明细 &gt;</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.merchantInfo}>
      <View style={styles.infoItem}>
        <Text style={styles.infoLabel}>今日收款（元）</Text>
        <Text style={styles.infoValue}>0.00</Text>
      </View>
      <View style={styles.infoItem}>
        <Text style={styles.infoLabel}>商家积分</Text>
        <Text style={styles.infoValue}>0</Text>
      </View>
    </View>
  </View>

  <View style={styles.featureList}>
    {['账单', '总资产', '余额', '余额宝', '花呗', '银行卡', '芝麻信用', '蚂蚁保'].map((item, index) => (
      <TouchableOpacity key={index} style={styles.featureItem}>
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.featureIcon} />
        <Text style={styles.featureText}>{item}</Text>
        {item === '总资产' && (
          <Text style={styles.freeProtection}>免费领取账户保障 &gt;</Text>
        )}
        {item === '花呗' && (
          <Text style={styles.promotion}>冲榜赢苹果手机 &gt;</Text>
        )}
        <Text style={styles.arrowRight}>&gt;</Text>
      </TouchableOpacity>
    ))}
  </View>

  <View style={styles.bottomBar}>
    <TouchableOpacity style={styles.bottomBarItem} onPress={navigateToHome}>
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
        <Text style={styles.badgeText}>3</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bottomBarItem}>
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
marginLeft: 'auto',
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
color: '#1890ff',
},
memberSection: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 15,
backgroundColor: '#fff',
marginTop: 10,
},
memberInfo: {
flexDirection: 'row',
alignItems: 'center',
},
memberIcon: {
width: 24,
height: 24,
marginRight: 10,
},
memberText: {
fontSize: 16,
fontWeight: 'bold',
},
verifiedIcon: {
width: 16,
height: 16,
marginLeft: 5,
},
pointsButton: {
backgroundColor: '#f0f0f0',
padding: 5,
borderRadius: 15,
},
pointsText: {
color: '#1890ff',
},
merchantSection: {
backgroundColor: '#fff',
marginTop: 10,
padding: 15,
},
sectionHeader: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 10,
},
sectionIcon: {
width: 24,
height: 24,
marginRight: 10,
},
sectionTitle: {
fontSize: 16,
fontWeight: 'bold',
},
detailButton: {
marginLeft: 'auto',
},
detailButtonText: {
color: '#888',
},
merchantInfo: {
flexDirection: 'row',
justifyContent: 'space-around',
},
infoItem: {
alignItems: 'center',
},
infoLabel: {
color: '#888',
marginBottom: 5,
},
infoValue: {
fontSize: 18,
fontWeight: 'bold',
},
featureList: {
backgroundColor: '#fff',
marginTop: 10,
},
featureItem: {
flexDirection: 'row',
alignItems: 'center',
padding: 15,
borderBottomWidth: 1,
borderBottomColor: '#f0f0f0',
},
featureIcon: {
width: 24,
height: 24,
marginRight: 15,
},
featureText: {
fontSize: 16,
},
freeProtection: {
color: '#1890ff',
marginLeft: 'auto',
marginRight: 10,
},
promotion: {
color: '#ff4d4f',
marginLeft: 'auto',
marginRight: 10,
},
arrowRight: {
color: '#888',
},
bottomBar: {
flexDirection: 'row',
justifyContent: 'space-around',
paddingVertical: 10,
backgroundColor: '#fff',
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
export default Profile;