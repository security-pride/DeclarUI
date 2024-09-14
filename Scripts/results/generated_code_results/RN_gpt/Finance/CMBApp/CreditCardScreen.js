import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const CreditCardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>我的信用卡</Text>
      </View>
      <Text style={styles.notification}>
        您有一份露营推车/拉杆箱待解锁，详...
      </Text>
      <View style={styles.cardInfo}>
        <View style={styles.cardHeader}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.accountType}>个人消费账户</Text>
          <Text style={styles.autoRepay}>自动还</Text>
          <Text style={styles.repaymentStatus}>无需还款</Text>
          <Text style={styles.billingDate}>8月14日(27天后)出账</Text>
        </View>
        <View style={styles.balanceInfo}>
          <Text style={styles.futureBill}>下期未出账单</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.eyeIcon} />
          <Text style={styles.amount}>¥0.00</Text>
          <Text style={styles.availableCredit}>可用额度 ¥0.00 ›</Text>
        </View>
        <TouchableOpacity 
          style={styles.repayButton} 
          onPress={() => navigation.navigate('Repayment')}
        >
          <Text style={styles.repayButtonText}>分期还款</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.payButton} 
          onPress={() => navigation.navigate('Repayment')}
        >
          <Text style={styles.repayButtonText}>还款</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.quickActions}>
        {['卡片管家', '我的积分', '绑卡支付', '推荐有礼', 'i车一族'].map((action, index) => (
          <View style={styles.action} key={index}>
            <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
            <Text style={styles.actionText}>{action}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.borrowMoneyTitle}>我要借钱</Text>
      <View style={styles.loanOptions}>
        <View style={styles.loanOption}>
          <Text style={styles.loanOptionTitle}>预借现金</Text>
          <Text>急用钱</Text>
          <Text>随借随还</Text>
          <Text>按日计息,还款灵活</Text>
          <Text>可借额度</Text>
          <Text style={styles.loanAmount}>0.00</Text>
          <TouchableOpacity 
            style={styles.checkNowButton} 
            onPress={() => navigation.navigate('Repayment')}
          >
            <Text style={styles.checkNowButtonText}>立即查看</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loanOption}>
          <Text style={styles.loanOptionTitle}>专享消费额度</Text>
          <Text>最高30万</Text>
          <Text>超100万人申请</Text>
        </View>
        <View style={styles.loanOption}>
          <Text style={styles.loanOptionTitle}>e招贷</Text>
          <Text>借现金分期还</Text>
          <Text>线上申请,快速放款</Text>
        </View>
      </View>
      <TouchableOpacity 
        style={styles.homeButton} 
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.homeButtonText}>返回主页</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#ff6f61',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
  },
  notification: {
    padding: 15,
    color: '#ff6f61',
  },
  cardInfo: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    margin: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  accountType: {
    marginLeft: 10,
    fontSize: 16,
  },
  autoRepay: {
    marginLeft: 'auto',
  },
  repaymentStatus: {
    fontSize: 14,
    color: '#ff6f61',
  },
  billingDate: {
    marginLeft: 'auto',
    fontSize: 12,
    color: '#aaa',
  },
  balanceInfo: {
    marginTop: 15,
  },
  futureBill: {
    fontSize: 14,
  },
  eyeIcon: {
    width: 20,
    height: 20,
  },
  amount: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  availableCredit: {
    fontSize: 12,
    color: '#aaa',
  },
  repayButton: {
    backgroundColor: '#ff6f61',
    padding: 12,
    borderRadius: 20,
    marginVertical: 5,
  },
  repayButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  payButton: {
    backgroundColor: '#ff6f61',
    padding: 12,
    borderRadius: 20,
    marginVertical: 5,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  action: {
    alignItems: 'center',
  },
  actionIcon: {
    width: 35,
    height: 35,
  },
  actionText: {
    marginTop: 5,
  },
  borrowMoneyTitle: {
    fontSize: 18,
    paddingLeft: 16,
    marginTop: 20,
  },
  loanOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 16,
  },
  loanOption: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loanOptionTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 5,
  },
  loanAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff6f61',
    marginVertical: 10,
  },
  checkNowButton: {
    backgroundColor: '#ff6f61',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginTop: 10,
  },
  checkNowButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  homeButton: {
    backgroundColor: '#ff6f61',
    padding: 15,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 20,
  },
  homeButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default CreditCardScreen;