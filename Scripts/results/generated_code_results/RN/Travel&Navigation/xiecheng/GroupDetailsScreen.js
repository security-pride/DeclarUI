import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const GroupDetails = () => {
const navigation = useNavigation();
const [isFavorite, setIsFavorite] = useState(false);
const toggleFavorite = () => {
setIsFavorite(!isFavorite);
};
const navigateToGroupTravelSearchResult = () => {
navigation.navigate('GroupTravelSearchResult');
};
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={navigateToGroupTravelSearchResult} style={styles.backButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.iconSmall} />
</TouchableOpacity>
<Text style={styles.headerText}>图片1/4</Text>
<TouchableOpacity style={styles.shareButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.iconSmall} />
</TouchableOpacity>
<TouchableOpacity style={styles.notificationButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.iconSmall} />
<View style={styles.notificationBadge}>
<Text style={styles.notificationCount}>16</Text>
</View>
</TouchableOpacity>
</View>
  <Image source={require('../assets/snack-icon.png')} style={styles.mainImage} />

  <View style={styles.contentContainer}>
    <Text style={styles.title}>烟台+蓬莱区2日1晚拼小团</Text>
    <Text style={styles.price}>¥965/人起</Text>
    <View style={styles.tagContainer}>
      <Text style={styles.tag}>达人探线</Text>
      <Text style={styles.tag}>编号 45587875</Text>
    </View>

    <View style={styles.reviewBanner}>
      <Text style={styles.reviewText}>超棒 "酒店很舒服"</Text>
      <Text style={styles.rating}>5.0分</Text>
    </View>

    <View style={styles.dateSelection}>
      <Text style={styles.dateLabel}>周末出行</Text>
      <Text style={styles.date}>星期六 07-20</Text>
    </View>

    <View style={styles.actionButtons}>
      <Pressable style={styles.discountButton}>
        <Text style={styles.discountText}>分期立减</Text>
      </Pressable>
      <Text style={styles.discountCount}>29项优惠</Text>
    </View>

    <View style={styles.features}>
      <Text style={styles.featureText}>拼小团</Text>
      <Text style={styles.featureText}>放心游</Text>
      <Text style={styles.featureText}>自由灵活</Text>
      <Text style={styles.featureText}>人少体验好</Text>
      <Text style={styles.featureText}>纯玩无购物</Text>
    </View>

    <View style={styles.services}>
      <Text style={styles.serviceText}>无购物</Text>
      <Text style={styles.serviceText}>成团保障</Text>
      <Text style={styles.serviceText}>提前2天免费退</Text>
    </View>

    <Pressable style={styles.scheduleButton}>
      <Text style={styles.scheduleButtonText}>看每日行程</Text>
    </Pressable>

    <View style={styles.departureInfo}>
      <Text style={styles.departureText}>烟台出发</Text>
      <Text style={styles.vipText}>钻石贵宾专享</Text>
    </View>

    <View style={styles.dateGrid}>
      <Text style={styles.dateGridItem}>星期五 07-19</Text>
      <Text style={styles.dateGridItem}>星期六 07-20</Text>
      <Text style={styles.dateGridItem}>星期日 07-21</Text>
      <Text style={styles.dateGridItem}>星期一 07-22</Text>
      <Text style={styles.dateGridItem}>全部班期</Text>
    </View>
  </View>

  <View style={styles.bottomBar}>
    <TouchableOpacity style={styles.bottomBarItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.iconSmall} />
      <Text>店铺</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bottomBarItem} onPress={toggleFavorite}>
      <Image source={require('../assets/snack-icon.png')} style={styles.iconSmall} />
      <Text>收藏</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bottomBarItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.iconSmall} />
      <Text>客服</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bookButton}>
      <Text style={styles.bookButtonText}>立即预订</Text>
    </TouchableOpacity>
  </View>
</ScrollView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f5f5f5',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 10,
backgroundColor: 'white',
},
backButton: {
padding: 5,
},
shareButton: {
padding: 5,
},
notificationButton: {
padding: 5,
position: 'relative',
},
notificationBadge: {
position: 'absolute',
top: 0,
right: 0,
backgroundColor: 'red',
borderRadius: 10,
width: 20,
height: 20,
justifyContent: 'center',
alignItems: 'center',
},
notificationCount: {
color: 'white',
fontSize: 12,
},
headerText: {
fontSize: 16,
fontWeight: 'bold',
},
mainImage: {
width: '100%',
height: 200,
resizeMode: 'cover',
},
contentContainer: {
padding: 15,
backgroundColor: 'white',
},
title: {
fontSize: 20,
fontWeight: 'bold',
marginBottom: 10,
},
price: {
fontSize: 18,
color: 'red',
fontWeight: 'bold',
marginBottom: 10,
},
tagContainer: {
flexDirection: 'row',
marginBottom: 10,
},
tag: {
backgroundColor: '#f0f0f0',
padding: 5,
marginRight: 10,
borderRadius: 5,
},
reviewBanner: {
flexDirection: 'row',
justifyContent: 'space-between',
backgroundColor: '#fff5e6',
padding: 10,
marginBottom: 10,
borderRadius: 5,
},
reviewText: {
color: '#ff9900',
},
rating: {
fontWeight: 'bold',
},
dateSelection: {
flexDirection: 'row',
justifyContent: 'space-between',
marginBottom: 10,
},
dateLabel: {
fontWeight: 'bold',
},
actionButtons: {
flexDirection: 'row',
justifyContent: 'space-between',
marginBottom: 10,
},
discountButton: {
backgroundColor: '#ff9900',
padding: 5,
borderRadius: 5,
},
discountText: {
color: 'white',
},
discountCount: {
color: '#ff9900',
},
features: {
flexDirection: 'row',
flexWrap: 'wrap',
marginBottom: 10,
},
featureText: {
backgroundColor: '#f0f0f0',
padding: 5,
margin: 2,
borderRadius: 5,
},
services: {
flexDirection: 'row',
justifyContent: 'space-around',
marginBottom: 10,
},
serviceText: {
color: 'green',
},
scheduleButton: {
backgroundColor: '#4a90e2',
padding: 10,
borderRadius: 5,
alignItems: 'center',
marginBottom: 10,
},
scheduleButtonText: {
color: 'white',
fontWeight: 'bold',
},
departureInfo: {
flexDirection: 'row',
justifyContent: 'space-between',
marginBottom: 10,
},
departureText: {
fontWeight: 'bold',
},
vipText: {
color: 'gold',
fontWeight: 'bold',
},
dateGrid: {
flexDirection: 'row',
flexWrap: 'wrap',
justifyContent: 'space-between',
},
dateGridItem: {
width: '48%',
backgroundColor: '#f0f0f0',
padding: 10,
marginBottom: 10,
borderRadius: 5,
textAlign: 'center',
},
bottomBar: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
backgroundColor: 'white',
padding: 10,
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
},
bottomBarItem: {
alignItems: 'center',
},
bookButton: {
backgroundColor: '#ff9900',
padding: 10,
borderRadius: 5,
},
bookButtonText: {
color: 'white',
fontWeight: 'bold',
},
iconSmall: {
width: 24,
height: 24,
},
});
export default GroupDetails;