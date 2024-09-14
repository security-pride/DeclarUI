import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const CreditCardScreen = () => {

  const navigation = useNavigation();



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Text style={styles.backButton}>{'<'}</Text>

        </TouchableOpacity>

        <Text style={styles.headerTitle}>我的信用卡</Text>

        <TouchableOpacity>

          <Text style={styles.headerMore}>...</Text>

        </TouchableOpacity>

      </View>



      <Text style={styles.notificationText}>• 您有一份露营推车/拉杆箱待解锁，详...</Text>



      <View style={styles.cardContainer}>

        <View style={styles.cardHeader}>

          <Image source={require('../assets/snack-icon.png')} style={styles.bankLogo} />

          <Text style={styles.accountType}>个人消费账户</Text>

          <Text style={styles.autoRepayment}>自动还</Text>

        </View>

        <View style={styles.cardBody}>

          <Text style={styles.noRepaymentNeeded}>无需还款</Text>

          <Text style={styles.billingDate}>8月14日(27天后)出账</Text>

          <Text style={styles.currentBill}>下期末出账单</Text>

          <Text style={styles.amount}>¥0.00</Text>

          <Text style={styles.availableCredit}>可用额度 ¥0.00 {'>'}</Text>

          <View style={styles.buttonContainer}>

            <TouchableOpacity style={styles.installmentButton}>

              <Text style={styles.buttonText}>分期还款</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.repaymentButton}>

              <Text style={styles.repaymentButtonText}>还款</Text>

            </TouchableOpacity>

          </View>

        </View>

      </View>



      <View style={styles.quickActions}>

        <TouchableOpacity style={styles.actionItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />

          <Text style={styles.actionText}>卡片管家</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.actionItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />

          <Text style={styles.actionText}>我的积分</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.actionItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />

          <Text style={styles.actionText}>绑卡支付</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.actionItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />

          <Text style={styles.actionText}>推荐有礼</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.actionItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />

          <Text style={styles.actionText}>i车一族</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.loanSection}>

        <Text style={styles.loanTitle}>我要借钱</Text>

        <View style={styles.loanOptions}>

          <View style={styles.loanOption}>

            <Text style={styles.loanOptionTitle}>预借现金</Text>

            <Text style={styles.loanOptionSubtitle}>急用钱 随借随还</Text>

            <Text style={styles.loanOptionDescription}>按日计息,还款灵活</Text>

            <Text style={styles.loanAmount}>可借额度</Text>

            <Text style={styles.loanAmountValue}>0.00</Text>

            <TouchableOpacity style={styles.checkButton}>

              <Text style={styles.checkButtonText}>立即查看</Text>

            </TouchableOpacity>

          </View>

          <View style={styles.loanOption}>

            <Text style={styles.loanOptionTitle}>专享消费额度</Text>

            <Text style={styles.loanOptionSubtitle}>最高30万</Text>

            <Text style={styles.loanOptionDescription}>超100万人申请</Text>

            <Text style={styles.loanProductName}>e招贷</Text>

            <Text style={styles.loanProductDescription}>借现金分期还</Text>

            <Text style={styles.loanProductSubDescription}>线上申请,快速放款</Text>

          </View>

        </View>

      </View>



      <View style={styles.promotionBanner}>

        <Text style={styles.promotionText}>查额度达标100%有礼</Text>

      </View>

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F5F5F5',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 15,

    backgroundColor: '#FF6B6B',

  },

  backButton: {

    fontSize: 24,

    color: 'white',

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    color: 'white',

  },

  headerMore: {

    fontSize: 24,

    color: 'white',

  },

  notificationText: {

    padding: 15,

    backgroundColor: '#FFE0E0',

    color: '#FF6B6B',

  },

  cardContainer: {

    margin: 15,

    backgroundColor: 'white',

    borderRadius: 10,

    overflow: 'hidden',

  },

  cardHeader: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 15,

    borderBottomWidth: 1,

    borderBottomColor: '#F0F0F0',

  },

  bankLogo: {

    width: 24,

    height: 24,

    marginRight: 10,

  },

  accountType: {

    flex: 1,

    fontSize: 16,

    fontWeight: 'bold',

  },

  autoRepayment: {

    fontSize: 12,

    color: '#888',

  },

  cardBody: {

    padding: 15,

  },

  noRepaymentNeeded: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  billingDate: {

    fontSize: 14,

    color: '#888',

    marginBottom: 15,

  },

  currentBill: {

    fontSize: 14,

    color: '#888',

  },

  amount: {

    fontSize: 24,

    fontWeight: 'bold',

    marginVertical: 10,

  },

  availableCredit: {

    fontSize: 14,

    color: '#888',

    marginBottom: 15,

  },

  buttonContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

  },

  installmentButton: {

    flex: 1,

    padding: 10,

    borderWidth: 1,

    borderColor: '#FF6B6B',

    borderRadius: 5,

    marginRight: 10,

  },

  repaymentButton: {

    flex: 1,

    padding: 10,

    backgroundColor: '#FF6B6B',

    borderRadius: 5,

  },

  buttonText: {

    textAlign: 'center',

    color: '#FF6B6B',

  },

  repaymentButtonText: {

    textAlign: 'center',

    color: 'white',

  },

  quickActions: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    padding: 15,

    backgroundColor: 'white',

    marginBottom: 15,

  },

  actionItem: {

    alignItems: 'center',

  },

  actionIcon: {

    width: 30,

    height: 30,

    marginBottom: 5,

  },

  actionText: {

    fontSize: 12,

  },

  loanSection: {

    padding: 15,

    backgroundColor: 'white',

  },

  loanTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 15,

  },

  loanOptions: {

    flexDirection: 'row',

    justifyContent: 'space-between',

  },

  loanOption: {

    flex: 1,

    padding: 15,

    backgroundColor: '#FFF0F0',

    borderRadius: 10,

    marginRight: 10,

  },

  loanOptionTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  loanOptionSubtitle: {

    fontSize: 14,

    color: '#888',

    marginBottom: 5,

  },

  loanOptionDescription: {

    fontSize: 12,

    color: '#FF6B6B',

    marginBottom: 10,

  },

  loanAmount: {

    fontSize: 14,

    color: '#888',

  },

  loanAmountValue: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  checkButton: {

    backgroundColor: '#FF6B6B',

    padding: 10,

    borderRadius: 5,

  },

  checkButtonText: {

    color: 'white',

    textAlign: 'center',

  },

  loanProductName: {

    fontSize: 16,

    fontWeight: 'bold',

    marginTop: 10,

  },

  loanProductDescription: {

    fontSize: 14,

    color: '#888',

  },

  loanProductSubDescription: {

    fontSize: 12,

    color: '#FF6B6B',

  },

  promotionBanner: {

    backgroundColor: '#FFFBE6',

    padding: 15,

    marginTop: 15,

  },

  promotionText: {

    textAlign: 'center',

    color: '#FF6B6B',

  },

});



export default CreditCardScreen;