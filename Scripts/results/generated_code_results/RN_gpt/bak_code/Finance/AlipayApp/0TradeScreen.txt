import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TradeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text>&lt;</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>收付款</Text>
        <View style={styles.headerRight}>
          <Text>...</Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.topSection}>
          <Image source={require('../assets/snack-icon.png')} style={styles.membershipIcon} />
          <Text style={styles.membershipText}>大众会员</Text>
        </View>

        <View style={styles.paymentMethod}>
          <Image source={require('../assets/snack-icon.png')} style={styles.barcodeIcon} />
          <Text style={styles.paymentMethodText}>向商家付款</Text>
        </View>

        <Image source={require('../assets/snack-icon.png')} style={styles.barcode} />
        <Text style={styles.barcodeDescription}>点击可查看付款码数字</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.qrCode} />

        <View style={styles.defaultPayment}>
          <Image source={require('../assets/snack-icon.png')} style={styles.bankIcon} />
          <Text style={styles.bankDescription}>招商银行储蓄卡 (7616) 优先使用此付款方式</Text>
          <Text style={styles.arrow}>&gt;</Text>
        </View>

        <View style={styles.options}>
          <TouchableOpacity style={styles.optionItem} onPress={() => navigation.navigate('收钱')}>
            <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />
            <Text style={styles.optionText}>收钱</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionItem} onPress={() => navigation.navigate('分期付款')}>
            <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />
            <Text style={styles.optionText}>分期付款</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionItem} onPress={() => navigation.navigate('转账')}>
            <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />
            <Text style={styles.optionText}>转账</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F0FF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 50,
    backgroundColor: '#53A0FD',
  },
  backButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  headerRight: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  membershipIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  membershipText: {
    fontSize: 14,
    color: '#53A0FD',
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  barcodeIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  paymentMethodText: {
    fontSize: 18,
    color: '#000000',
  },
  barcode: {
    width: '100%',
    height: 100,
    marginBottom: 10,
  },
  barcodeDescription: {
    textAlign: 'center',
    color: '#A0A0A0',
    marginBottom: 20,
  },
  qrCode: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  defaultPayment: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 8,
  },
  bankIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  bankDescription: {
    flex: 1,
    fontSize: 14,
    color: '#000000',
  },
  arrow: {
    color: '#C0C0C0',
    fontSize: 20,
  },
  options: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 10,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  optionIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#000000',
  },
});

export default TradeScreen;