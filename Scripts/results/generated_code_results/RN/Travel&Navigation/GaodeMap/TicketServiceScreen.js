import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const TicketService = () => {
const navigation = useNavigation();
const [departure, setDeparture] = useState('威海市');
const [destination, setDestination] = useState('武汉市');
const [date, setDate] = useState('7月19日');
const [isStudentTicket, setIsStudentTicket] = useState(false);
const [isHighSpeedRail, setIsHighSpeedRail] = useState(false);
const handleBackPress = () => {
navigation.navigate('Home');
};
const handleSearch = () => {
navigation.navigate('TicketSearchResult');
};
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={handleBackPress}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.backIcon} />
</TouchableOpacity>
<Text style={styles.headerTitle}>高德·火车票</Text>
</View>
  <View style={styles.banner}>
    <Text style={styles.bannerTitle}>夏日周末狂欢</Text>
    <Text style={styles.bannerSubtitle}>吃喝玩乐 全城低价</Text>
    <TouchableOpacity style={styles.bannerButton}>
      <Text style={styles.bannerButtonText}>查看</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.tabMenu}>
    <TouchableOpacity style={styles.tab}>
      <Text>机票</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.tab, styles.selectedTab]}>
      <Text style={styles.selectedTabText}>火车票</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tab}>
      <Text>汽车票</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.searchForm}>
    <View style={styles.inputRow}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.inputIcon} />
      <TextInput
        style={styles.input}
        value={departure}
        onChangeText={setDeparture}
        placeholder="出发地"
      />
    </View>
    <View style={styles.inputRow}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.inputIcon} />
      <TextInput
        style={styles.input}
        value={destination}
        onChangeText={setDestination}
        placeholder="目的地"
      />
    </View>
    <TouchableOpacity style={styles.dateSelector}>
      <Text>{date}</Text>
      <Text style={styles.dateSelectorLabel}>明天</Text>
    </TouchableOpacity>
    <View style={styles.optionsRow}>
      <TouchableOpacity
        style={[styles.optionButton, isStudentTicket && styles.selectedOption]}
        onPress={() => setIsStudentTicket(!isStudentTicket)}
      >
        <Text>学生票</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.optionButton, isHighSpeedRail && styles.selectedOption]}
        onPress={() => setIsHighSpeedRail(!isHighSpeedRail)}
      >
        <Text>高铁动车</Text>
      </TouchableOpacity>
    </View>
    <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
      <Text style={styles.searchButtonText}>查询</Text>
      <View style={styles.searchButtonBadge}>
        <Text style={styles.searchButtonBadgeText}>暑期百亿补贴</Text>
      </View>
    </TouchableOpacity>
  </View>

  <View style={styles.recentSearches}>
    <Text>武汉市-国家网络安全...</Text>
    <Text>东湖生态旅游...-金色港湾</Text>
  </View>

  <View style={styles.additionalServices}>
    <View style={styles.serviceItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.serviceIcon} />
      <Text>订票保障</Text>
      <Text>安心出行</Text>
    </View>
    <View style={styles.serviceItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.serviceIcon} />
      <Text>酒店预订</Text>
      <Text>便宜便捷</Text>
    </View>
    <View style={styles.serviceItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.serviceIcon} />
      <Text>领券中心</Text>
      <Text>抢5折券</Text>
    </View>
  </View>

  <View style={styles.promotedTicket}>
    <Text style={styles.promotedTicketTitle}>暑期火车票优惠订</Text>
    <View style={styles.promotedTicketContent}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.trainImage} />
      <View>
        <Text>{departure} — {destination}</Text>
        <Text>07.19出发，约7时11分到达</Text>
        <Text style={styles.promotedTicketPrice}>¥742起</Text>
      </View>
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>立即购票</Text>
      </TouchableOpacity>
    </View>
  </View>

  <View style={styles.calendar}>
    <Text>7.15</Text>
    <Text>7.19 周五</Text>
    <Text>7.20 周六</Text>
    <Text>7.21 周日</Text>
    <Text>7.22 周一</Text>
  </View>

  <View style={styles.loginPrompt}>
    <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.loginIcon} />
    <View>
      <Text>登录12306 官方出票无忧保障</Text>
      <Text>极速出票 一键填写 出票成功率高</Text>
    </View>
    <TouchableOpacity style={styles.loginButton}>
      <Text style={styles.loginButtonText}>登录</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.closeButton}>
      <Text>X</Text>
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
backgroundColor: '#fff',
},
backIcon: {
width: 24,
height: 24,
marginRight: 10,
},
headerTitle: {
fontSize: 18,
fontWeight: 'bold',
},
banner: {
backgroundColor: '#ff6b6b',
padding: 15,
},
bannerTitle: {
color: '#fff',
fontSize: 20,
fontWeight: 'bold',
},
bannerSubtitle: {
color: '#fff',
marginTop: 5,
},
bannerButton: {
backgroundColor: '#fff',
padding: 5,
borderRadius: 15,
alignSelf: 'flex-start',
marginTop: 10,
},
bannerButtonText: {
color: '#ff6b6b',
},
tabMenu: {
flexDirection: 'row',
backgroundColor: '#fff',
padding: 10,
},
tab: {
flex: 1,
alignItems: 'center',
padding: 10,
},
selectedTab: {
borderBottomWidth: 2,
borderBottomColor: '#1890ff',
},
selectedTabText: {
color: '#1890ff',
},
searchForm: {
backgroundColor: '#fff',
padding: 15,
marginTop: 10,
},
inputRow: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 10,
},
inputIcon: {
width: 24,
height: 24,
marginRight: 10,
},
input: {
flex: 1,
height: 40,
borderWidth: 1,
borderColor: '#ddd',
borderRadius: 5,
paddingHorizontal: 10,
},
dateSelector: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
height: 40,
borderWidth: 1,
borderColor: '#ddd',
borderRadius: 5,
paddingHorizontal: 10,
marginBottom: 10,
},
dateSelectorLabel: {
color: '#888',
},
optionsRow: {
flexDirection: 'row',
marginBottom: 10,
},
optionButton: {
borderWidth: 1,
borderColor: '#ddd',
borderRadius: 15,
paddingVertical: 5,
paddingHorizontal: 10,
marginRight: 10,
},
selectedOption: {
borderColor: '#1890ff',
},
searchButton: {
backgroundColor: '#1890ff',
borderRadius: 5,
padding: 10,
alignItems: 'center',
},
searchButtonText: {
color: '#fff',
fontSize: 16,
},
searchButtonBadge: {
position: 'absolute',
right: 10,
top: -10,
backgroundColor: '#ff6b6b',
borderRadius: 10,
padding: 5,
},
searchButtonBadgeText: {
color: '#fff',
fontSize: 12,
},
recentSearches: {
backgroundColor: '#fff',
padding: 15,
marginTop: 10,
},
additionalServices: {
flexDirection: 'row',
justifyContent: 'space-around',
backgroundColor: '#fff',
padding: 15,
marginTop: 10,
},
serviceItem: {
alignItems: 'center',
},
serviceIcon: {
width: 40,
height: 40,
marginBottom: 5,
},
promotedTicket: {
backgroundColor: '#fff',
padding: 15,
marginTop: 10,
},
promotedTicketTitle: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 10,
},
promotedTicketContent: {
flexDirection: 'row',
alignItems: 'center',
},
trainImage: {
width: 60,
height: 60,
marginRight: 10,
},
promotedTicketPrice: {
color: '#ff6b6b',
fontSize: 18,
fontWeight: 'bold',
},
buyButton: {
backgroundColor: '#ff6b6b',
borderRadius: 15,
paddingVertical: 5,
paddingHorizontal: 10,
marginLeft: 'auto',
},
buyButtonText: {
color: '#fff',
},
calendar: {
flexDirection: 'row',
justifyContent: 'space-between',
backgroundColor: '#fff',
padding: 15,
marginTop: 10,
},
loginPrompt: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#fff',
padding: 15,
marginTop: 10,
},
loginIcon: {
width: 40,
height: 40,
marginRight: 10,
},
loginButton: {
backgroundColor: '#1890ff',
borderRadius: 15,
paddingVertical: 5,
paddingHorizontal: 10,
marginLeft: 'auto',
},
loginButtonText: {
color: '#fff',
},
closeButton: {
marginLeft: 10,
},
});
export default TicketService;