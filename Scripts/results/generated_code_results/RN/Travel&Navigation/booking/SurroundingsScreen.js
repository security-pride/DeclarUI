import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SurroundingsScreen = () => {
const navigation = useNavigation();
const [showNotification, setShowNotification] = useState(true);
const handleHotelSelect = () => {
navigation.navigate('Details');
};
return (
<View style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={() => navigation.navigate('Search')} style={styles.backButton}>
<Text style={styles.backButtonText}>{'<'}</Text>
</TouchableOpacity>
<Text style={styles.headerTitle}>周围地区 7月18日 - 7月19日</Text>
</View>
  <View style={styles.filterBar}>
    <TouchableOpacity style={styles.filterButton}>
      <Text style={styles.filterButtonText}>排序</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.filterButton}>
      <Text style={styles.filterButtonText}>筛选</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.filterButton}>
      <Text style={styles.filterButtonText}>地图</Text>
    </TouchableOpacity>
  </View>

  {showNotification && (
    <View style={styles.notification}>
      <Text style={styles.notificationText}>
        所付佣金和其他商业因素可能会影响住宿的排名。了解更多
      </Text>
      <TouchableOpacity onPress={() => setShowNotification(false)} style={styles.closeNotification}>
        <Text style={styles.closeNotificationText}>X</Text>
      </TouchableOpacity>
    </View>
  )}

  <Text style={styles.resultCount}>24家住宿</Text>

  <ScrollView style={styles.hotelList}>
    <TouchableOpacity style={styles.hotelItem} onPress={handleHotelSelect}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.hotelImage} />
      <View style={styles.hotelInfo}>
        <Text style={styles.hotelName}>烟台南山皇冠假日酒店</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingScore}>8.6</Text>
          <Text style={styles.ratingText}>很棒 · 29条点评</Text>
        </View>
        <Text style={styles.hotelLocation}>莱山区, 烟台 · 距你: 10千米</Text>
        <Text style={styles.roomInfo}>1间酒店客房: 2张床</Text>
        <Text style={styles.hotelPrice}>707元</Text>
        <Text style={styles.priceInfo}>含税费及其他费用</Text>
        <Text style={styles.specialOffer}>该价格在Booking.com上仅剩2间</Text>
        <Text style={styles.paymentOption}>无需预付</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.hotelItem} onPress={handleHotelSelect}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.hotelImage} />
      <View style={styles.hotelInfo}>
        <Text style={styles.hotelName}>烟台世茂希尔顿酒店</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingScore}>8.9</Text>
          <Text style={styles.ratingText}>很棒 · 40条点评</Text>
        </View>
        <Text style={styles.hotelLocation}>烟台 · 距你: 750米</Text>
        <Text style={styles.roomInfo}>1张床</Text>
        <Text style={styles.hotelPrice}>908元</Text>
        <Text style={styles.priceInfo}>含税费及其他费用</Text>
        <Text style={styles.sustainabilityLabel}>可持续性认证</Text>
      </View>
    </TouchableOpacity>
  </ScrollView>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
header: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
backgroundColor: '#003580',
},
backButton: {
padding: 10,
},
backButtonText: {
color: '#fff',
fontSize: 18,
},
headerTitle: {
color: '#fff',
fontSize: 16,
marginLeft: 10,
},
filterBar: {
flexDirection: 'row',
justifyContent: 'space-around',
padding: 10,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
filterButton: {
padding: 5,
},
filterButtonText: {
fontSize: 14,
},
notification: {
flexDirection: 'row',
backgroundColor: '#f0f0f0',
padding: 10,
alignItems: 'center',
},
notificationText: {
flex: 1,
fontSize: 12,
},
closeNotification: {
padding: 5,
},
closeNotificationText: {
fontSize: 16,
},
resultCount: {
padding: 10,
fontSize: 16,
fontWeight: 'bold',
},
hotelList: {
flex: 1,
},
hotelItem: {
flexDirection: 'row',
padding: 10,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
hotelImage: {
width: 100,
height: 100,
marginRight: 10,
},
hotelInfo: {
flex: 1,
},
hotelName: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 5,
},
ratingContainer: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 5,
},
ratingScore: {
backgroundColor: '#003580',
color: '#fff',
padding: 2,
marginRight: 5,
},
ratingText: {
fontSize: 14,
},
hotelLocation: {
fontSize: 14,
marginBottom: 5,
},
roomInfo: {
fontSize: 14,
marginBottom: 5,
},
hotelPrice: {
fontSize: 16,
fontWeight: 'bold',
color: '#008009',
},
priceInfo: {
fontSize: 12,
color: '#6b6b6b',
},
specialOffer: {
fontSize: 12,
color: '#d4111e',
marginTop: 5,
},
paymentOption: {
fontSize: 12,
color: '#008009',
marginTop: 5,
},
sustainabilityLabel: {
fontSize: 12,
color: '#008009',
marginTop: 5,
},
});
export default SurroundingsScreen;