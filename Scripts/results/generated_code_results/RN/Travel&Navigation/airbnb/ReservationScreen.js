import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const ReservationScreen = () => {
const navigation = useNavigation();
const [paymentMethod, setPaymentMethod] = useState('fullPayment');
const handleBackPress = () => {
navigation.navigate('Details');
};
const handleEditPress = (section) => {
// Implement edit functionality for dates and guests
};
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={handleBackPress}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
</TouchableOpacity>
<Text style={styles.headerTitle}>确认并付款</Text>
</View>
  <View style={styles.propertyInfo}>
    <Image source={require('../assets/snack-icon.png')} style={styles.propertyImage} />
    <View style={styles.propertyDetails}>
      <Text style={styles.propertyType}>整套小木屋</Text>
      <Text style={styles.propertyName}>Pitch 24 Creek Caravan Park Ringstead狗友好</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>★ 4.80 (5)</Text>
        <Text style={styles.superhostBadge}>· 超赞房东</Text>
      </View>
    </View>
  </View>

  <View style={styles.cancellationPolicy}>
    <Image source={require('../assets/snack-icon.png')} style={styles.calendarIcon} />
    <Text style={styles.cancellationText}>
      8月3日前可免费取消订单。旅行规划有变，可获全额退款。
    </Text>
  </View>

  <View style={styles.tripDetails}>
    <Text style={styles.sectionTitle}>您的行程</Text>
    <View style={styles.tripItem}>
      <View>
        <Text style={styles.tripLabel}>日期</Text>
        <Text style={styles.tripValue}>9月2日至7日</Text>
      </View>
      <TouchableOpacity onPress={() => handleEditPress('dates')}>
        <Text style={styles.editButton}>编辑</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.tripItem}>
      <View>
        <Text style={styles.tripLabel}>房客人数</Text>
        <Text style={styles.tripValue}>1位房客</Text>
      </View>
      <TouchableOpacity onPress={() => handleEditPress('guests')}>
        <Text style={styles.editButton}>编辑</Text>
      </TouchableOpacity>
    </View>
  </View>

  <View style={styles.paymentSection}>
    <Text style={styles.sectionTitle}>选择付款方式</Text>
    <TouchableOpacity
      style={styles.paymentOption}
      onPress={() => setPaymentMethod('fullPayment')}
    >
      <View style={styles.radioButton}>
        {paymentMethod === 'fullPayment' && <View style={styles.radioButtonInner} />}
      </View>
      <View>
        <Text style={styles.paymentOptionText}>立即支付 ¥12,120.95</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.paymentOption}
      onPress={() => setPaymentMethod('partialPayment')}
    >
      <View style={styles.radioButton}>
        {paymentMethod === 'partialPayment' && <View style={styles.radioButtonInner} />}
      </View>
      <View>
        <Text style={styles.paymentOptionText}>现在支付部分费用，稍后再支付剩余的金额</Text>
        <Text style={styles.paymentDetails}>
          今天需支付 ¥6,060.48, 2024年8月18日支付 ¥6,060.47。无需支付额外费用。
        </Text>
        <Text style={styles.moreInfo}>更多信息</Text>
      </View>
    </TouchableOpacity>
  </View>
</ScrollView>
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
padding: 16,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
backIcon: {
width: 24,
height: 24,
marginRight: 16,
},
headerTitle: {
fontSize: 18,
fontWeight: 'bold',
},
propertyInfo: {
flexDirection: 'row',
padding: 16,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
propertyImage: {
width: 80,
height: 80,
borderRadius: 8,
marginRight: 16,
},
propertyDetails: {
flex: 1,
},
propertyType: {
fontSize: 12,
color: '#666',
},
propertyName: {
fontSize: 16,
fontWeight: 'bold',
marginVertical: 4,
},
ratingContainer: {
flexDirection: 'row',
alignItems: 'center',
},
rating: {
fontSize: 14,
},
superhostBadge: {
fontSize: 14,
color: '#FF5A5F',
marginLeft: 4,
},
cancellationPolicy: {
flexDirection: 'row',
alignItems: 'center',
padding: 16,
backgroundColor: '#f8f8f8',
},
calendarIcon: {
width: 24,
height: 24,
marginRight: 16,
},
cancellationText: {
flex: 1,
fontSize: 14,
},
tripDetails: {
padding: 16,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
sectionTitle: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 16,
},
tripItem: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: 16,
},
tripLabel: {
fontSize: 14,
color: '#666',
},
tripValue: {
fontSize: 16,
fontWeight: 'bold',
},
editButton: {
fontSize: 14,
color: '#008489',
textDecorationLine: 'underline',
},
paymentSection: {
padding: 16,
},
paymentOption: {
flexDirection: 'row',
alignItems: 'flex-start',
marginBottom: 16,
},
radioButton: {
width: 20,
height: 20,
borderRadius: 10,
borderWidth: 2,
borderColor: '#008489',
marginRight: 16,
justifyContent: 'center',
alignItems: 'center',
},
radioButtonInner: {
width: 10,
height: 10,
borderRadius: 5,
backgroundColor: '#008489',
},
paymentOptionText: {
fontSize: 16,
fontWeight: 'bold',
},
paymentDetails: {
fontSize: 14,
color: '#666',
marginTop: 4,
},
moreInfo: {
fontSize: 14,
color: '#008489',
marginTop: 4,
},
});
export default ReservationScreen;