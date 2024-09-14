import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Repayment = () => {
const navigation = useNavigation();
const [repaymentAmount, setRepaymentAmount] = useState('');
const navigateToCreditCard = () => {
navigation.navigate('CreditCard');
};
const navigateToCustomService = () => {
navigation.navigate('CustomService');
};
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={navigateToCreditCard}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
</TouchableOpacity>
<Text style={styles.title}>信用卡还款</Text>
<TouchableOpacity onPress={navigateToCustomService}>
<Image source={require('../assets/snack-icon.png')} style={styles.headphoneIcon} />
</TouchableOpacity>
</View>
  <View style={styles.accountInfo}>
    <Image source={require('../assets/snack-icon.png')} style={styles.accountIcon} />
    <View>
      <Text style={styles.accountType}>个人消费账户</Text>
      <View style={styles.autoRepaymentTag}>
        <Text style={styles.autoRepaymentText}>自动还款</Text>
      </View>
    </View>
  </View>

  <View style={styles.repaymentStatus}>
    <Text style={styles.noRepaymentNeeded}>无需还款</Text>
    <Text style={styles.billingDate}>8月14日(27天后)出账</Text>
  </View>

  <View style={styles.repaymentAmountSection}>
    <Text style={styles.repaymentAmountLabel}>还款金额</Text>
    <TouchableOpacity style={styles.viewBillButton}>
      <Text style={styles.viewBillText}>查看账单 ></Text>
    </TouchableOpacity>
  </View>

  <View style={styles.inputContainer}>
    <Text style={styles.currencySymbol}>¥</Text>
    <TextInput
      style={styles.amountInput}
      placeholder="请输入金额"
      value={repaymentAmount}
      onChangeText={setRepaymentAmount}
      keyboardType="numeric"
    />
  </View>

  <TouchableOpacity style={styles.repayButton}>
    <Text style={styles.repayButtonText}>立即还款</Text>
  </TouchableOpacity>

  <View style={styles.additionalOptions}>
    <TouchableOpacity style={styles.optionButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.infoIcon} />
      <Text style={styles.optionText}>还款说明</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.optionButton}>
      <Text style={styles.optionText}>填写推荐人</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.footer}>
    <TouchableOpacity style={styles.addCardButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.addIcon} />
      <Text style={styles.addCardText}>添加他人/他行卡</Text>
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
padding: 15,
backgroundColor: 'white',
},
backIcon: {
width: 24,
height: 24,
},
title: {
fontSize: 18,
fontWeight: 'bold',
},
headphoneIcon: {
width: 24,
height: 24,
},
accountInfo: {
flexDirection: 'row',
alignItems: 'center',
padding: 15,
backgroundColor: 'white',
marginTop: 10,
},
accountIcon: {
width: 40,
height: 40,
marginRight: 10,
},
accountType: {
fontSize: 16,
fontWeight: 'bold',
},
autoRepaymentTag: {
backgroundColor: '#e0e0e0',
borderRadius: 10,
paddingHorizontal: 8,
paddingVertical: 2,
marginTop: 5,
},
autoRepaymentText: {
fontSize: 12,
},
repaymentStatus: {
padding: 15,
backgroundColor: 'white',
},
noRepaymentNeeded: {
fontSize: 18,
color: 'green',
fontWeight: 'bold',
},
billingDate: {
fontSize: 14,
color: 'gray',
marginTop: 5,
},
repaymentAmountSection: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 15,
backgroundColor: 'white',
marginTop: 10,
},
repaymentAmountLabel: {
fontSize: 16,
},
viewBillButton: {
padding: 5,
},
viewBillText: {
color: 'blue',
},
inputContainer: {
flexDirection: 'row',
alignItems: 'center',
padding: 15,
backgroundColor: 'white',
},
currencySymbol: {
fontSize: 24,
marginRight: 10,
},
amountInput: {
flex: 1,
fontSize: 24,
},
repayButton: {
backgroundColor: '#ff6347',
margin: 15,
padding: 15,
borderRadius: 5,
alignItems: 'center',
},
repayButtonText: {
color: 'white',
fontSize: 18,
fontWeight: 'bold',
},
additionalOptions: {
flexDirection: 'row',
justifyContent: 'space-between',
padding: 15,
},
optionButton: {
flexDirection: 'row',
alignItems: 'center',
},
infoIcon: {
width: 16,
height: 16,
marginRight: 5,
},
optionText: {
color: 'blue',
},
footer: {
position: 'absolute',
bottom: 0,
left: 0,
right: 0,
padding: 15,
backgroundColor: 'white',
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
},
addCardButton: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
},
addIcon: {
width: 20,
height: 20,
marginRight: 5,
},
addCardText: {
fontSize: 16,
},
});
export default Repayment;