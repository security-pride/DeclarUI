import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const CreditCard = () => {
const navigation = useNavigation();
const [showBalance, setShowBalance] = useState(true);
const toggleBalance = () => {
setShowBalance(!showBalance);
};
const navigateToRepayment = () => {
navigation.navigate('Repayment');
};
const navigateToHome = () => {
navigation.navigate('Home');
};
return (
<ScrollView style={styles.container}>
<Text style={styles.title}>我的信用卡</Text>
  <View style={styles.accountInfo}>
    <Text style={styles.accountType}>个人消费账户</Text>
    <Text style={styles.autoRepay}>自动还</Text>
    <Text style={styles.billingDate}>8月14日(27天后)出账</Text>
    <Text style={styles.noRepayment}>无需还款</Text>
    <TouchableOpacity onPress={toggleBalance} style={styles.eyeIcon}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
    </TouchableOpacity>
  </View>

  <View style={styles.balanceInfo}>
    <Text style={styles.balanceLabel}>下期未出账单</Text>
    <Text style={styles.balanceAmount}>{showBalance ? '¥0.00' : '****'}</Text>
    <Text style={styles.availableCredit}>可用额度 ¥0.00 ›</Text>
  </View>

  <View style={styles.actionButtons}>
    <TouchableOpacity style={styles.button} onPress={() => {}}>
      <Text style={styles.buttonText}>分期还款</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={navigateToRepayment}>
      <Text style={styles.buttonText}>还款</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => {}}>
      <Text style={styles.buttonText}>查账单</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.quickActions}>
    {['卡片管家', '我的积分', '绑卡支付', '推荐有礼', 'i车一族'].map((action, index) => (
      <TouchableOpacity key={index} style={styles.quickActionItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.quickActionIcon} />
        <Text style={styles.quickActionText}>{action}</Text>
      </TouchableOpacity>
    ))}
  </View>

  <View style={styles.borrowSection}>
    <Text style={styles.sectionTitle}>我要借钱</Text>
    <View style={styles.borrowOptions}>
      <View style={styles.borrowOption}>
        <Text style={styles.borrowOptionTitle}>预借现金</Text>
        <Text style={styles.borrowOptionDesc}>急用钱 随借随还</Text>
        <Text style={styles.borrowOptionDesc}>按日计息,还款灵活</Text>
        <Text style={styles.borrowOptionAmount}>可借额度</Text>
        <Text style={styles.borrowOptionAmountValue}>0.00</Text>
        <TouchableOpacity style={styles.checkButton}>
          <Text style={styles.checkButtonText}>立即查看</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.borrowOption}>
        <Text style={styles.borrowOptionTitle}>专享消费额度</Text>
        <Text style={styles.borrowOptionDesc}>最高30万</Text>
        <Text style={styles.borrowOptionDesc}>超100万人申请</Text>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>立即申请</Text>
        </TouchableOpacity>
      </View>
    </View>
    <TouchableOpacity style={styles.eRecruitmentLoan}>
      <Text style={styles.eRecruitmentLoanText}>e招贷</Text>
      <Text style={styles.eRecruitmentLoanDesc}>借现金分期还</Text>
      <Text style={styles.eRecruitmentLoanDesc}>线上申请,快速放款</Text>
    </TouchableOpacity>
  </View>

  <TouchableOpacity style={styles.homeButton} onPress={navigateToHome}>
    <Text style={styles.homeButtonText}>返回首页</Text>
  </TouchableOpacity>
</ScrollView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f5f5f5',
},
title: {
fontSize: 20,
fontWeight: 'bold',
padding: 15,
},
accountInfo: {
backgroundColor: 'white',
padding: 15,
marginBottom: 10,
},
accountType: {
fontSize: 16,
fontWeight: 'bold',
},
autoRepay: {
fontSize: 12,
color: 'green',
},
billingDate: {
fontSize: 14,
color: 'gray',
},
noRepayment: {
fontSize: 16,
color: 'green',
fontWeight: 'bold',
},
eyeIcon: {
position: 'absolute',
right: 15,
top: 15,
},
icon: {
width: 24,
height: 24,
},
balanceInfo: {
backgroundColor: 'white',
padding: 15,
marginBottom: 10,
},
balanceLabel: {
fontSize: 14,
color: 'gray',
},
balanceAmount: {
fontSize: 24,
fontWeight: 'bold',
marginVertical: 5,
},
availableCredit: {
fontSize: 14,
color: 'blue',
},
actionButtons: {
flexDirection: 'row',
justifyContent: 'space-around',
marginBottom: 10,
},
button: {
backgroundColor: '#ff4500',
paddingVertical: 10,
paddingHorizontal: 20,
borderRadius: 5,
},
buttonText: {
color: 'white',
fontWeight: 'bold',
},
quickActions: {
flexDirection: 'row',
justifyContent: 'space-around',
backgroundColor: 'white',
padding: 15,
marginBottom: 10,
},
quickActionItem: {
alignItems: 'center',
},
quickActionIcon: {
width: 30,
height: 30,
marginBottom: 5,
},
quickActionText: {
fontSize: 12,
},
borrowSection: {
backgroundColor: 'white',
padding: 15,
},
sectionTitle: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 10,
},
borrowOptions: {
flexDirection: 'row',
justifyContent: 'space-between',
},
borrowOption: {
flex: 1,
borderWidth: 1,
borderColor: '#ddd',
borderRadius: 5,
padding: 10,
marginRight: 10,
},
borrowOptionTitle: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 5,
},
borrowOptionDesc: {
fontSize: 12,
color: 'gray',
},
borrowOptionAmount: {
fontSize: 14,
marginTop: 10,
},
borrowOptionAmountValue: {
fontSize: 18,
fontWeight: 'bold',
},
checkButton: {
backgroundColor: '#ff4500',
padding: 5,
borderRadius: 5,
marginTop: 10,
alignItems: 'center',
},
checkButtonText: {
color: 'white',
},
applyButton: {
backgroundColor: '#ff4500',
padding: 5,
borderRadius: 5,
marginTop: 10,
alignItems: 'center',
},
applyButtonText: {
color: 'white',
},
eRecruitmentLoan: {
borderWidth: 1,
borderColor: '#ddd',
borderRadius: 5,
padding: 10,
marginTop: 10,
},
eRecruitmentLoanText: {
fontSize: 16,
fontWeight: 'bold',
},
eRecruitmentLoanDesc: {
fontSize: 12,
color: 'gray',
},
homeButton: {
backgroundColor: '#4169e1',
padding: 15,
alignItems: 'center',
marginTop: 20,
},
homeButtonText: {
color: 'white',
fontWeight: 'bold',
},
});
export default CreditCard;