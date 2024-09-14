import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const TicketSearchResult = () => {
const navigation = useNavigation();
const [selectedDate, setSelectedDate] = useState('明天 7.19');
const handleBackPress = () => {
navigation.navigate('TicketService');
};
const renderDateOption = (date, dayNumber) => (
<TouchableOpacity
style={[styles.dateOption, selectedDate === ${date} ${dayNumber} && styles.selectedDate]}
onPress={() => setSelectedDate(${date} ${dayNumber})}
>
<Text style={styles.dateText}>{date}</Text>
<Text style={styles.dayNumber}>{dayNumber}</Text>
</TouchableOpacity>
);
const renderTicketOption = (departure, arrival, duration, stations, transferInfo, trainNumbers, ticketTypes, availableTickets, price, remainingTickets) => (
<View style={styles.ticketOption}>
<View style={styles.timeContainer}>
<Text style={styles.timeText}>{departure}</Text>
<Text style={styles.durationText}>{duration}</Text>
<Text style={styles.timeText}>{arrival}</Text>
</View>
<View style={styles.stationsContainer}>
<Text>{stations.departure}</Text>
<Text style={styles.transferInfo}>{transferInfo}</Text>
<Text>{stations.arrival}</Text>
</View>
<View style={styles.trainInfoContainer}>
{trainNumbers.map((number, index) => (
<View key={index} style={styles.trainNumberContainer}>
<Text style={styles.trainNumber}>{number}</Text>
<Text style={styles.ticketType}>{ticketTypes[index]} {availableTickets[index]}</Text>
</View>
))}
</View>
<View style={styles.priceContainer}>
<Text style={styles.priceText}>{price}</Text>
<Text style={styles.remainingTickets}>{remainingTickets}</Text>
</View>
</View>
);
return (
<View style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={handleBackPress}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.backIcon} />
</TouchableOpacity>
<Text style={styles.headerTitle}>威海市 — 武汉市</Text>
<TouchableOpacity>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.calendarIcon} />
</TouchableOpacity>
</View>
  <ScrollView horizontal style={styles.dateSelector}>
    {renderDateOption('今天', '18')}
    {renderDateOption('明天', '7.19')}
    {renderDateOption('后天', '20')}
    {renderDateOption('周日', '21')}
    {renderDateOption('周一', '22')}
    {renderDateOption('周二', '23')}
    {renderDateOption('周三', '24')}
  </ScrollView>

  <View style={styles.transportModes}>
    <TouchableOpacity style={styles.selectedMode}>
      <Text style={styles.selectedModeText}>火车</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.transportMode}>
      <Text>客车 ¥350起</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.transportMode}>
      <Text>飞机 ¥620起</Text>
    </TouchableOpacity>
  </View>

  <ScrollView horizontal style={styles.filterOptions}>
    <TouchableOpacity style={styles.filterOption}>
      <Text>只看有票</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.filterOption}>
      <Text>只看高铁动车</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.filterOption}>
      <Text>威海站</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.filterOption}>
      <Text>武汉站</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.filterOption}>
      <Text>上午出发</Text>
    </TouchableOpacity>
  </ScrollView>

  <View style={styles.promoOffer}>
    <Text style={styles.promoText}>高德红包 满50减1</Text>
    <TouchableOpacity>
      <Text style={styles.promoStatus}>已领取 &gt;</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.loginPrompt}>
    <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.loginIcon} />
    <Text>登录12306 官方出票无忧保障</Text>
    <TouchableOpacity style={styles.loginButton}>
      <Text style={styles.loginButtonText}>登录</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.alternativeTransport}>
    <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.planeIcon} />
    <View>
      <Text style={styles.alternativeTitle}>飞机直达推荐</Text>
      <Text>4时15分 比火车省69元</Text>
    </View>
    <Text style={styles.alternativePrice}>¥620起</Text>
  </View>

  <Text style={styles.ticketAvailabilityInfo}>15:34前无直达班次，推荐2个有票方案</Text>

  <ScrollView>
    {renderTicketOption('09:31', '18:00', '共8时29分', { departure: '威海站', arrival: '武汉站' }, '同站换乘21分', ['G2148', 'G339'], ['二等', '二等'], [2, 6], '¥745起', '仅剩3张')}
    {renderTicketOption('12:38', '22:38', '共10时', { departure: '威海站', arrival: '汉口站' }, '同站换乘19分', ['D2150', 'G3247'], ['二等', '二等'], [1, '有票'], '¥531起', '仅剩1张')}
    {renderTicketOption('15:34', '23:11', '7时37分', { departure: '威海站', arrival: '武汉站' }, '', ['G2084'], ['二等'], ['有票'], '¥688起', '高德红包 | 共减1')}
  </ScrollView>

  <View style={styles.sortOptions}>
    <TouchableOpacity style={styles.sortOption}>
      <Text style={styles.selectedSortOption}>推荐排序</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.sortOption}>
      <Text>价格</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.sortOption}>
      <Text>耗时</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.filterButton}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.filterIcon} />
      <Text>筛选</Text>
    </TouchableOpacity>
  </View>
</View>
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
padding: 10,
backgroundColor: '#fff',
},
headerTitle: {
fontSize: 18,
fontWeight: 'bold',
},
backIcon: {
width: 24,
height: 24,
},
calendarIcon: {
width: 24,
height: 24,
},
dateSelector: {
backgroundColor: '#fff',
paddingVertical: 10,
},
dateOption: {
alignItems: 'center',
marginHorizontal: 10,
paddingHorizontal: 10,
paddingVertical: 5,
},
selectedDate: {
backgroundColor: '#e6f7ff',
borderRadius: 5,
},
dateText: {
fontSize: 14,
},
dayNumber: {
fontSize: 16,
fontWeight: 'bold',
},
transportModes: {
flexDirection: 'row',
justifyContent: 'space-around',
backgroundColor: '#fff',
paddingVertical: 10,
},
selectedMode: {
borderBottomWidth: 2,
borderBottomColor: '#1890ff',
},
selectedModeText: {
color: '#1890ff',
},
filterOptions: {
backgroundColor: '#fff',
paddingVertical: 10,
},
filterOption: {
paddingHorizontal: 10,
paddingVertical: 5,
marginHorizontal: 5,
backgroundColor: '#f5f5f5',
borderRadius: 15,
},
promoOffer: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
backgroundColor: '#fff8e6',
padding: 10,
marginVertical: 10,
},
promoText: {
color: '#ff6e27',
},
promoStatus: {
color: '#1890ff',
},
loginPrompt: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#fff',
padding: 10,
marginBottom: 10,
},
loginIcon: {
width: 24,
height: 24,
marginRight: 10,
},
loginButton: {
marginLeft: 'auto',
backgroundColor: '#1890ff',
paddingHorizontal: 15,
paddingVertical: 5,
borderRadius: 15,
},
loginButtonText: {
color: '#fff',
},
alternativeTransport: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#fff',
padding: 10,
marginBottom: 10,
},
planeIcon: {
width: 40,
height: 40,
marginRight: 10,
},
alternativeTitle: {
fontWeight: 'bold',
},
alternativePrice: {
marginLeft: 'auto',
color: '#ff6e27',
fontWeight: 'bold',
},
ticketAvailabilityInfo: {
backgroundColor: '#e6f7ff',
padding: 10,
},
ticketOption: {
backgroundColor: '#fff',
padding: 10,
marginBottom: 10,
},
timeContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
marginBottom: 5,
},
timeText: {
fontSize: 18,
fontWeight: 'bold',
},
durationText: {
color: '#888',
},
stationsContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
marginBottom: 5,
},
transferInfo: {
color: '#1890ff',
},
trainInfoContainer: {
flexDirection: 'row',
marginBottom: 5,
},
trainNumberContainer: {
marginRight: 10,
},
trainNumber: {
color: '#1890ff',
},
ticketType: {
color: '#888',
},
priceContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
},
priceText: {
color: '#ff6e27',
fontWeight: 'bold',
},
remainingTickets: {
color: '#888',
},
sortOptions: {
flexDirection: 'row',
justifyContent: 'space-around',
backgroundColor: '#fff',
paddingVertical: 10,
},
sortOption: {
paddingHorizontal: 10,
},
selectedSortOption: {
color: '#1890ff',
},
filterButton: {
flexDirection: 'row',
alignItems: 'center',
},
filterIcon: {
width: 16,
height: 16,
marginRight: 5,
},
});
export default TicketSearchResult;