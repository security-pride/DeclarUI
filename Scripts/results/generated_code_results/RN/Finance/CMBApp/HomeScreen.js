import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Home = () => {
const navigation = useNavigation();
const [searchText, setSearchText] = useState('信用卡全家福');
const navigateToCreditCard = () => {
navigation.navigate('CreditCard');
};
const navigateToCustomService = () => {
navigation.navigate('CustomService');
};
const QuickActionButton = ({ icon, label, onPress }) => (
<TouchableOpacity style={styles.quickActionButton} onPress={onPress}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
<Text style={styles.quickActionLabel}>{label}</Text>
</TouchableOpacity>
);
const ServiceButton = ({ icon, label, onPress }) => (
<TouchableOpacity style={styles.serviceButton} onPress={onPress}>
<Image source={require('../assets/snack-icon.png')} style={styles.serviceIcon} />
<Text style={styles.serviceLabel}>{label}</Text>
</TouchableOpacity>
);
return (
<View style={styles.container}>
<View style={styles.header}>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.scanIcon} />
</TouchableOpacity>
<View style={styles.searchBar}>
<Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />
<TextInput style={styles.searchInput} value={searchText} onChangeText={setSearchText} placeholder="搜索" />
</View>
<TouchableOpacity onPress={navigateToCustomService}>
<Image source={require('../assets/snack-icon.png')} style={styles.headsetIcon} />
</TouchableOpacity>
<TouchableOpacity>
<ImageBackground source={require('../assets/snack-icon.png')} style={styles.notificationBadge}>
<Text style={styles.notificationCount}>99</Text>
</ImageBackground>
</TouchableOpacity>
</View>
  <ScrollView>
    <View style={styles.quickActions}>
      <QuickActionButton icon="bag" label="朝朝宝" onPress={() => {}} />
      <QuickActionButton icon="money" label="借钱" onPress={() => {}} />
      <QuickActionButton icon="transfer" label="转账" onPress={() => {}} />
      <QuickActionButton icon="overview" label="账户总览" onPress={() => {}} />
    </View>

    <View style={styles.services}>
      <ServiceButton icon="creditCard" label="信用卡" onPress={navigateToCreditCard} />
      <ServiceButton icon="statement" label="收支明细" onPress={() => {}} />
      <ServiceButton icon="transfer" label="他行卡转入" onPress={() => {}} />
      <ServiceButton icon="city" label="城市服务" onPress={() => {}} />
      <ServiceButton icon="hot" label="热门活动" onPress={() => {}} />
      <ServiceButton icon="retirement" label="养老金融" onPress={() => {}} />
      <ServiceButton icon="member" label="M+会员" onPress={() => {}} />
      <ServiceButton icon="forex" label="外汇购汇" onPress={() => {}} />
      <ServiceButton icon="bankCard" label="银行卡" onPress={() => {}} />
      <ServiceButton icon="more" label="全部" onPress={() => {}} />
    </View>

    <View style={styles.notification}>
      <Image source={require('../assets/snack-icon.png')} style={styles.notificationIcon} />
      <Text style={styles.notificationText}>小招有财: 您有一份2元现金红包待领取</Text>
    </View>

    <View style={styles.promotionBanner}>
      <Text style={styles.promotionTitle}>活钱理财</Text>
      <Text style={styles.promotionSubtitle}>错过少3天收益</Text>
      <TouchableOpacity style={styles.promotionButton}>
        <Text style={styles.promotionButtonText}>点击购买</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.financialProducts}>
      <View style={styles.productHeader}>
        <Text style={styles.productHeaderTitle}>财富精选</Text>
        <Text style={styles.productHeaderMore}>更多</Text>
      </View>
      <View style={styles.productList}>
        <View style={styles.product}>
          <Text style={styles.productName}>T+1到账</Text>
          <Text style={styles.productType}>日添利1号A</Text>
          <Text style={styles.productReturn}>2.92%</Text>
          <Text style={styles.productPeriod}>7日年化</Text>
        </View>
        <View style={styles.product}>
          <Text style={styles.productName}>每季可赎</Text>
          <Text style={styles.productType}>季季宝</Text>
          <Text style={styles.productReturn}>3.25%</Text>
          <Text style={styles.productPeriod}>成立以来年化</Text>
        </View>
      </View>
    </View>
  </ScrollView>

  <View style={styles.bottomNavBar}>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navLabel}>首页</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navLabel}>一周回顾</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navLabel}>财富</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navLabel}>生活</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navLabel}>我的</Text>
    </TouchableOpacity>
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f5f5f5',
},
header: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
backgroundColor: '#ff4500',
},
scanIcon: {
width: 24,
height: 24,
},
searchBar: {
flex: 1,
flexDirection: 'row',
alignItems: 'center',
backgroundColor: 'rgba(255, 255, 255, 0.3)',
borderRadius: 20,
marginHorizontal: 10,
paddingHorizontal: 10,
},
searchIcon: {
width: 20,
height: 20,
marginRight: 5,
},
searchInput: {
flex: 1,
color: 'white',
},
headsetIcon: {
width: 24,
height: 24,
},
notificationBadge: {
width: 24,
height: 24,
justifyContent: 'center',
alignItems: 'center',
},
notificationCount: {
color: 'white',
fontSize: 12,
},
quickActions: {
flexDirection: 'row',
justifyContent: 'space-around',
padding: 15,
backgroundColor: 'white',
},
quickActionButton: {
alignItems: 'center',
},
icon: {
width: 40,
height: 40,
},
quickActionLabel: {
marginTop: 5,
fontSize: 12,
},
services: {
flexDirection: 'row',
flexWrap: 'wrap',
padding: 15,
backgroundColor: 'white',
},
serviceButton: {
width: '20%',
alignItems: 'center',
marginBottom: 15,
},
serviceIcon: {
width: 30,
height: 30,
},
serviceLabel: {
marginTop: 5,
fontSize: 12,
},
notification: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
backgroundColor: '#fff8e1',
},
notificationIcon: {
width: 20,
height: 20,
marginRight: 10,
},
notificationText: {
fontSize: 14,
},
promotionBanner: {
padding: 15,
backgroundColor: '#e3f2fd',
},
promotionTitle: {
fontSize: 18,
fontWeight: 'bold',
},
promotionSubtitle: {
fontSize: 16,
marginTop: 5,
},
promotionButton: {
backgroundColor: '#ff4500',
padding: 10,
borderRadius: 5,
alignSelf: 'flex-start',
marginTop: 10,
},
promotionButtonText: {
color: 'white',
fontWeight: 'bold',
},
financialProducts: {
backgroundColor: 'white',
padding: 15,
},
productHeader: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: 10,
},
productHeaderTitle: {
fontSize: 18,
fontWeight: 'bold',
},
productHeaderMore: {
color: '#888',
},
productList: {
flexDirection: 'row',
justifyContent: 'space-between',
},
product: {
width: '48%',
backgroundColor: '#f9f9f9',
padding: 10,
borderRadius: 5,
},
productName: {
fontSize: 16,
fontWeight: 'bold',
},
productType: {
fontSize: 14,
color: '#888',
},
productReturn: {
fontSize: 20,
color: '#ff4500',
marginTop: 5,
},
productPeriod: {
fontSize: 12,
color: '#888',
},
bottomNavBar: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
backgroundColor: 'white',
paddingVertical: 5,
},
navItem: {
alignItems: 'center',
},
navIcon: {
width: 24,
height: 24,
},
navLabel: {
fontSize: 12,
marginTop: 2,
},
});
export default Home;