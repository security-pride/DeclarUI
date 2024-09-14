import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CreditCardScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={28} color="#fff" />
        <Text style={styles.headerTitle}>我的信用卡</Text>
        <Icon name="more-vert" size={28} color="#fff" />
      </View>

      <Text style={styles.notificationText}>您有一份露营推车/拉杆箱待解锁，详...</Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <Image source={require('../assets/snack-icon.png')} style={styles.cardIcon} />
          <Text style={styles.cardTitle}>个人消费账户</Text>
          <Text style={styles.autoRepay}>自动还</Text>
          <Text style={styles.repayStatus}>无需还款</Text>
        </View>
        <Text style={styles.billDate}>8月14日(27天后)出账</Text>
        <View style={styles.row}>
          <Text style={styles.amountLabel}>下期未出账单</Text>
          <Icon name="visibility" size={18} color="#000" />
        </View>
        <Text style={styles.amount}>¥0.00</Text>
        <View style={styles.row}>
          <Text style={styles.availableCreditLabel}>可用额度</Text>
          <Text style={styles.availableCredit}>¥0.00</Text>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonPrimary}>
            <Text style={styles.buttonPrimaryText}>分期还款</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSecondary}>
            <Text style={styles.buttonSecondaryText}>还款</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="credit-card" size={28} color="#000" />
          <Text style={styles.menuText}>卡片管家</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="star" size={28} color="#000" />
          <Text style={styles.menuText}>我的积分</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="attach-money" size={28} color="#000" />
          <Text style={styles.menuText}>绑卡支付</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="thumb-up" size={28} color="#000" />
          <Text style={styles.menuText}>推荐有礼</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="directions-car" size={28} color="#000" />
          <Text style={styles.menuText}>i车一族</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>我要借钱</Text>
        <View style={styles.row}>
          <View style={styles.loanCard}>
            <Text style={styles.loanTitle}>预借现金</Text>
            <Text style={styles.loanLabel}>急用钱</Text>
            <Text style={styles.loanLabel}>随借随还</Text>
            <Text style={styles.loanSubTitle}>按日计息,还款灵活</Text>
            <Text style={styles.loanAmount}>可借额度</Text>
            <Text style={styles.loanAmountValue}>0.00</Text>
            <TouchableOpacity style={styles.buttonImmediate}>
              <Text style={styles.buttonImmediateText}>立即查看</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.loanCard}>
            <Text style={styles.loanTitle}>专享消费额度</Text>
            <Text style={styles.loanSubTitle}>最高30万</Text>
            <Text style={styles.loanSubTitle}>超100万人申请</Text>
          </View>
          <View style={styles.loanCard}>
            <Text style={styles.loanTitle}>e招贷</Text>
            <Text style={styles.loanSubTitle}>借现金分期还</Text>
            <Text style={styles.loanSubTitle}>线上申请,快速放款</Text>
          </View>
        </View>
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
    backgroundColor: '#ff5a5f',
  },
  headerTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  notificationText: {
    padding: 15,
    color: '#ff5a5f',
  },
  card: {
    margin: 15,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardIcon: {
    width: 40,
    height: 40,
  },
  cardTitle: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  autoRepay: {
    fontSize: 12,
    color: '#ff5a5f',
    paddingVertical: 2,
    paddingHorizontal: 5,
    backgroundColor: '#ffe5e5',
    borderRadius: 3,
  },
  repayStatus: {
    fontSize: 12,
    color: '#aaa',
  },
  billDate: {
    textAlign: 'right',
    color: '#aaa',
    marginVertical: 10,
  },
  amountLabel: {
    fontSize: 14,
  },
  amount: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  availableCreditLabel: {
    color: '#aaa',
  },
  availableCredit: {
    color: '#000',
  },
  buttonPrimary: {
    borderRadius: 20,
    backgroundColor: '#ff5a5f',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonPrimaryText: {
    color: '#fff',
    fontSize: 16,
  },
  buttonSecondary: {
    borderRadius: 20,
    backgroundColor: '#eee',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonSecondaryText: {
    color: '#ff5a5f',
    fontSize: 16,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 10,
    marginHorizontal: 15,
  },
  menuItem: {
    alignItems: 'center',
  },
  menuText: {
    marginTop: 5,
    fontSize: 14,
  },
  section: {
    margin: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  loanCard: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 3,
    margin: 5,
  },
  loanTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  loanLabel: {
    fontSize: 12,
    color: '#ff5a5f',
    paddingVertical: 2,
    paddingHorizontal: 5,
    backgroundColor: '#ffe5e5',
    borderRadius: 3,
    marginTop: 5,
    marginRight: 5,
    display: 'inline-block',
  },
  loanSubTitle: {
    color: '#aaa',
    marginTop: 5,
  },
  loanAmount: {
    color: '#aaa',
    marginTop: 15,
  },
  loanAmountValue: {
    fontSize: 24,
    color: '#000',
    marginTop: 5,
  },
  buttonImmediate: {
    borderRadius: 20,
    backgroundColor: '#ff5a5f',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 15,
  },
  buttonImmediateText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CreditCardScreen;