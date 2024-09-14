import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native';
const LogisticsScreen = ({ navigation }) => {
const categories = ['物流', '售后', '提醒', '互动', '赞评', '优惠', '其他'];
const trackingInfo = [
{
title: '查快递',
action: '暂无快递更新',
},
{
store: 'romoss旗舰店',
date: '24/07/10',
status: '即将确认收货',
logistics: {
company: '申通快递',
deliveryTime: '2024年07月02日 12:27',
},
action: '延长收货',
},
{
title: '订单物流消息',
date: '24/07/06',
status: '即将自动确认收货',
address: '关山街道珞瑜路1037号华中科技大学东11舍407',
action: '查看详情',
},
{
store: '菜鸟',
date: '24/04/25',
status: '包裹签收通知',
logistics: {
company: '韵达快递',
info: '包裹已被签收，点击查看签收详情>>',
},
action: '查看详情',
},
];
const renderTrackingItem = ({ item }) => (
<View style={styles.trackingItem}>
{item.store && <Text style={styles.storeName}>{item.store}</Text>}
{item.title && <Text style={styles.itemTitle}>{item.title}</Text>}
<Text style={styles.date}>{item.date}</Text>
<Text style={styles.status}>{item.status}</Text>
{item.logistics && (
<View style={styles.logisticsInfo}>
<Text style={styles.logisticsCompany}>{item.logistics.company}</Text>
{item.logistics.deliveryTime && (
<Text style={styles.deliveryTime}>{item.logistics.deliveryTime}</Text>
)}
{item.logistics.info && (
<Text style={styles.logisticsInfo}>{item.logistics.info}</Text>
)}
</View>
)}
{item.address && <Text style={styles.address}>{item.address}</Text>}
<TouchableOpacity style={styles.actionButton}>
<Text style={styles.actionButtonText}>{item.action}</Text>
</TouchableOpacity>
</View>
);
return (
<View style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={() => navigation.navigate('Message')}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
</TouchableOpacity>
<Text style={styles.headerTitle}>通知</Text>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.settingsIcon} />
</TouchableOpacity>
</View>
  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
    {categories.map((category, index) => (
      <TouchableOpacity key={index} style={styles.categoryItem}>
        <Text style={[styles.categoryText, index === 0 && styles.activeCategoryText]}>{category}</Text>
      </TouchableOpacity>
    ))}
  </ScrollView>

  <FlatList
    data={trackingInfo}
    renderItem={renderTrackingItem}
    keyExtractor={(item, index) => index.toString()}
    style={styles.trackingList}
  />
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f8f8f8',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 10,
backgroundColor: '#333',
},
backIcon: {
width: 24,
height: 24,
},
headerTitle: {
fontSize: 18,
fontWeight: 'bold',
color: '#fff',
},
settingsIcon: {
width: 24,
height: 24,
},
categoriesContainer: {
flexDirection: 'row',
paddingVertical: 10,
backgroundColor: '#333',
},
categoryItem: {
marginHorizontal: 10,
},
categoryText: {
fontSize: 16,
color: '#999',
},
activeCategoryText: {
color: '#fff',
fontWeight: 'bold',
},
trackingList: {
flex: 1,
},
trackingItem: {
backgroundColor: '#fff',
marginBottom: 10,
padding: 15,
},
storeName: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 5,
},
itemTitle: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 5,
},
date: {
fontSize: 14,
color: '#666',
marginBottom: 5,
},
status: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 5,
},
logisticsInfo: {
marginBottom: 5,
},
logisticsCompany: {
fontSize: 14,
color: '#666',
},
deliveryTime: {
fontSize: 14,
color: '#666',
},
address: {
fontSize: 14,
color: '#666',
marginBottom: 5,
},
actionButton: {
alignSelf: 'flex-start',
backgroundColor: '#ff6600',
paddingVertical: 5,
paddingHorizontal: 10,
borderRadius: 15,
},
actionButtonText: {
color: '#fff',
fontSize: 14,
},
});
export default LogisticsScreen;