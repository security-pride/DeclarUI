import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Trade = () => {
const navigation = useNavigation();
const navigateToHome = () => {
navigation.navigate('Home');
};
return (
<View style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={navigateToHome}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
</TouchableOpacity>
<Text style={styles.headerTitle}>收付款</Text>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
</TouchableOpacity>
</View>
  <ScrollView>
    <View style={styles.membershipBadge}>
      <Image source={require('../assets/snack-icon.png')} style={styles.badgeIcon} />
      <Text style={styles.badgeText}>大众会员</Text>
    </View>

    <View style={styles.paymentSection}>
      <View style={styles.paymentHeader}>
        <Image source={require('../assets/snack-icon.png')} style={styles.barcodeIcon} />
        <Text style={styles.paymentHeaderText}>向商家付款</Text>
      </View>
      <Image source={require('../assets/snack-icon.png')} style={styles.barcode} />
      <Text style={styles.barcodeHint}>点击可查看付款码数字</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.qrCode} />
      <View style={styles.preferredPayment}>
        <Image source={require('../assets/snack-icon.png')} style={styles.bankIcon} />
        <Text style={styles.preferredPaymentText}>招商银行储蓄卡 (7616)</Text>
        <Text style={styles.preferredPaymentHint}>优先使用此付款方式</Text>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.otherOptions}>
      <TouchableOpacity style={styles.optionItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />
        <Text style={styles.optionText}>收钱</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />
        <Text style={styles.optionText}>分期付款</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />
        <Text style={styles.optionText}>转账</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
      </TouchableOpacity>
    </View>
  </ScrollView>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#1E90FF',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 15,
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
menuIcon: {
width: 24,
height: 24,
},
membershipBadge: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#4169E1',
padding: 10,
margin: 15,
borderRadius: 20,
},
badgeIcon: {
width: 20,
height: 20,
marginRight: 5,
},
badgeText: {
color: 'white',
fontWeight: 'bold',
},
paymentSection: {
backgroundColor: 'white',
borderTopLeftRadius: 20,
borderTopRightRadius: 20,
padding: 20,
},
paymentHeader: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 15,
},
barcodeIcon: {
width: 24,
height: 24,
marginRight: 10,
},
paymentHeaderText: {
fontSize: 16,
fontWeight: 'bold',
},
barcode: {
width: '100%',
height: 100,
resizeMode: 'contain',
marginBottom: 10,
},
barcodeHint: {
textAlign: 'center',
color: '#666',
marginBottom: 20,
},
qrCode: {
width: 200,
height: 200,
alignSelf: 'center',
marginBottom: 20,
},
preferredPayment: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#F0F0F0',
padding: 10,
borderRadius: 10,
},
bankIcon: {
width: 24,
height: 24,
marginRight: 10,
},
preferredPaymentText: {
flex: 1,
},
preferredPaymentHint: {
color: '#666',
fontSize: 12,
marginRight: 10,
},
arrowIcon: {
width: 16,
height: 16,
},
otherOptions: {
backgroundColor: 'white',
padding: 20,
},
optionItem: {
flexDirection: 'row',
alignItems: 'center',
paddingVertical: 15,
borderBottomWidth: 1,
borderBottomColor: '#E0E0E0',
},
optionIcon: {
width: 24,
height: 24,
marginRight: 15,
},
optionText: {
flex: 1,
},
});
export default Trade;