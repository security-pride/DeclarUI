import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RepaymentScreen = () => {
  const navigation = useNavigation();

  const handleNavigateToCreditCard = () => {
    navigation.navigate('CreditCard');
  };

  const handleNavigateToCustomService = () => {
    navigation.navigate('CustomService');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>信用卡还款</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      </View>

      <View style={styles.accountInfo}>
        <Text style={styles.accountType}>个人消费账户</Text>
        <Text style={styles.repaymentStatus}>无需还款</Text>
        <Text style={styles.billingDate}>8月14日(27天后)出账</Text>
      </View>

      <View style={styles.amountSection}>
        <Text style={styles.label}>还款金额</Text>
        <Text style={styles.viewBill}>查看账单</Text>
        <View style={styles.amountInput}>
          <Image source={require('../assets/snack-icon.png')} style={styles.yuanIcon} />
          <Text style={styles.placeholder}>请输入金额</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.repayButton} onPress={handleNavigateToCreditCard}>
        <Text style={styles.repayButtonText}>立即还款</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.info}>还款说明</Text>
        <TouchableOpacity onPress={handleNavigateToCustomService}>
          <Text style={styles.referrer}>填写推荐人</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomNav}>
        <Text>添加他人/他行卡</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.bottomNavIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    width: 24,
    height: 24,
  },
  accountInfo: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  accountType: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  repaymentStatus: {
    color: 'green',
    marginTop: 8,
  },
  billingDate: {
    color: '#999',
    marginTop: 8,
  },
  amountSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  label: {
    fontSize: 16,
  },
  viewBill: {
    color: '#007AFF',
  },
  amountInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  yuanIcon: {
    width: 24,
    height: 24,
  },
  placeholder: {
    marginLeft: 8,
    color: '#999',
  },
  repayButton: {
    backgroundColor: '#FFC0CB',
    borderRadius: 4,
    paddingVertical: 12,
    marginTop: 16,
    alignItems: 'center',
  },
  repayButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  info: {
    fontSize: 16,
  },
  referrer: {
    color: '#007AFF',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 64,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomNavIcon: {
    width: 24,
    height: 24,
  },
});

export default RepaymentScreen;