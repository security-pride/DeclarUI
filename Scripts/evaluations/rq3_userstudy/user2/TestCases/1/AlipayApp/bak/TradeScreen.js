import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Trade = () => {
const navigation = useNavigation();
const navigateToHome = () => {
navigation.navigate('Home');
};
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={navigateToHome}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.backIcon} />
</TouchableOpacity>
<Text style={styles.headerTitle}>收付款</Text>
<TouchableOpacity>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.moreIcon} />
</TouchableOpacity>
</View>
  <View style={styles.memberCard}>
    <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.memberIcon} />
    <Text style={styles.memberText}>大众会员</Text>
  </View>

  <View style={styles.paymentSection}>
    <View style={styles.paymentHeader}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.barcodeIcon} />
      <Text style={styles.paymentTitle}>向商家付款</Text>
    </View>
    <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.barcode} />
    <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.qrCode} />
    <Text style={styles.codeHint}>点击可查看付款码数字</Text>
    <View style={styles.preferredPayment}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.bankIcon} />
      <View>
        <Text style={styles.bankName}>招商银行储蓄卡 (7616)</Text>
        <Text style={styles.preferredText}>优先使用此付款方式</Text>
      </View>
      <TouchableOpacity>
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.arrowIcon} />
      </TouchableOpacity>
    </View>
  </View>

  <View style={styles.actionButtons}>
    <TouchableOpacity style={styles.actionButton}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.actionIcon} />
      <Text style={styles.actionText}>收钱</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.actionButton}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.actionIcon} />
      <Text style={styles.actionText}>分期付款</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.actionButton}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.actionIcon} />
      <Text style={styles.actionText}>转账</Text>
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
backgroundColor: '#1890ff',
},
backIcon: {
width: 24,
height: 24,
},
headerTitle: {
color: 'white',
fontSize: 18,
fontWeight: 'bold',
},
moreIcon: {
width: 24,
height: 24,
},
memberCard: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
backgroundColor: '#1890ff',
},
memberIcon: {
width: 24,
height: 24,
marginRight: 10,
},
memberText: {
color: 'white',
fontWeight: 'bold',
},
paymentSection: {
backgroundColor: 'white',
padding: 20,
marginTop: 10,
alignItems: 'center',
},
paymentHeader: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 20,
},
barcodeIcon: {
width: 24,
height: 24,
marginRight: 10,
},
paymentTitle: {
fontSize: 16,
fontWeight: 'bold',
},
barcode: {
width: '100%',
height: 80,
marginBottom: 20,
},
qrCode: {
width: 200,
height: 200,
marginBottom: 10,
},
codeHint: {
color: '#888',
marginBottom: 20,
},
preferredPayment: {
flexDirection: 'row',
alignItems: 'center',
width: '100%',
borderTopWidth: 1,
borderTopColor: '#f0f0f0',
paddingTop: 20,
},
bankIcon: {
width: 40,
height: 40,
marginRight: 10,
},
bankName: {
fontWeight: 'bold',
},
preferredText: {
color: '#888',
fontSize: 12,
},
arrowIcon: {
width: 20,
height: 20,
marginLeft: 'auto',
},
actionButtons: {
flexDirection: 'row',
justifyContent: 'space-around',
backgroundColor: 'white',
padding: 20,
marginTop: 10,
},
actionButton: {
alignItems: 'center',
},
actionIcon: {
width: 40,
height: 40,
marginBottom: 5,
},
actionText: {
fontSize: 14,
},
});
export default Trade;