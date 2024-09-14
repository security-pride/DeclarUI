import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const CreditCardScreen = () => {

  const [isAmountVisible, setIsAmountVisible] = useState(true);



  const toggleAmountVisibility = () => {

    setIsAmountVisible(!isAmountVisible);

  };



  const renderAmount = () => {

    return isAmountVisible ? '¥0.00' : '****';

  };



  const renderFeatureButton = (icon, text) => (

    <TouchableOpacity style={styles.featureButton}>

      <Icon name={icon} size={24} color="#333" />

      <Text style={styles.featureText}>{text}</Text>

    </TouchableOpacity>

  );



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.headerText}>我的信用卡</Text>

      </View>

      

      <View style={styles.notificationBar}>

        <Text style={styles.notificationText}>您有一份露营推车/拉杆箱待解锁，详...</Text>

      </View>



      <View style={styles.cardContainer}>

        <View style={styles.cardHeader}>

          <View>

            <Text style={styles.cardType}>个人消费账户</Text>

            <Text style={styles.autoRepay}>自动还</Text>

          </View>

          <Text style={styles.noRepayment}>无需还款</Text>

        </View>



        <View style={styles.balanceContainer}>

          <Text style={styles.balanceLabel}>下期未出账单</Text>

          <TouchableOpacity onPress={toggleAmountVisibility}>

            <Icon name={isAmountVisible ? 'visibility' : 'visibility-off'} size={24} color="#333" />

          </TouchableOpacity>

        </View>



        <Text style={styles.balanceAmount}>{renderAmount()}</Text>

        <Text style={styles.availableLimit}>可用额度 {renderAmount()} ›</Text>



        <View style={styles.cardFooter}>

          <Text style={styles.billingDate}>8月14日(27天后)出账</Text>

          <TouchableOpacity style={styles.viewBillButton}>

            <Text style={styles.viewBillText}>查账单</Text>

          </TouchableOpacity>

        </View>



        <View style={styles.actionButtons}>

          <TouchableOpacity style={styles.installmentButton}>

            <Text style={styles.installmentText}>分期还款</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.repayButton}>

            <Text style={styles.repayText}>还款</Text>

          </TouchableOpacity>

        </View>

      </View>



      <View style={styles.featureContainer}>

        {renderFeatureButton('credit-card', '卡片管家')}

        {renderFeatureButton('star', '我的积分')}

        {renderFeatureButton('payment', '绑卡支付')}

        {renderFeatureButton('card-giftcard', '推荐有礼')}

        {renderFeatureButton('directions-car', '汽车一族')}

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

            <Text style={styles.eLoanTitle}>e招贷</Text>

            <Text style={styles.eLoanDescription}>借现金分期还</Text>

            <Text style={styles.eLoanSubDescription}>线上申请,快速放款</Text>

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

    backgroundColor: '#ff4d4f',

    padding: 16,

  },

  headerText: {

    fontSize: 18,

    fontWeight: 'bold',

    color: 'white',

  },

  notificationBar: {

    backgroundColor: '#fff1f0',

    padding: 12,

  },

  notificationText: {

    color: '#ff4d4f',

  },

  cardContainer: {

    backgroundColor: 'white',

    margin: 16,

    borderRadius: 8,

    padding: 16,

  },

  cardHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 16,

  },

  cardType: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  autoRepay: {

    fontSize: 12,

    color: '#8c8c8c',

  },

  noRepayment: {

    fontSize: 14,

    color: '#52c41a',

  },

  balanceContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

  },

  balanceLabel: {

    fontSize: 14,

    color: '#8c8c8c',

  },

  balanceAmount: {

    fontSize: 32,

    fontWeight: 'bold',

    marginVertical: 8,

  },

  availableLimit: {

    fontSize: 14,

    color: '#8c8c8c',

  },

  cardFooter: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginTop: 16,

  },

  billingDate: {

    fontSize: 12,

    color: '#8c8c8c',

  },

  viewBillButton: {

    backgroundColor: '#f0f0f0',

    paddingHorizontal: 12,

    paddingVertical: 6,

    borderRadius: 16,

  },

  viewBillText: {

    fontSize: 12,

    color: '#595959',

  },

  actionButtons: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginTop: 16,

  },

  installmentButton: {

    flex: 1,

    backgroundColor: '#f0f0f0',

    paddingVertical: 8,

    borderRadius: 4,

    marginRight: 8,

  },

  installmentText: {

    textAlign: 'center',

    color: '#595959',

  },

  repayButton: {

    flex: 1,

    backgroundColor: '#ff4d4f',

    paddingVertical: 8,

    borderRadius: 4,

    marginLeft: 8,

  },

  repayText: {

    textAlign: 'center',

    color: 'white',

  },

  featureContainer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    backgroundColor: 'white',

    paddingVertical: 16,

    marginBottom: 16,

  },

  featureButton: {

    alignItems: 'center',

  },

  featureText: {

    fontSize: 12,

    marginTop: 4,

    color: '#595959',

  },

  loanSection: {

    backgroundColor: 'white',

    padding: 16,

  },

  loanTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 16,

  },

  loanOptions: {

    flexDirection: 'row',

    justifyContent: 'space-between',

  },

  loanOption: {

    flex: 1,

    backgroundColor: '#fff1f0',

    padding: 12,

    borderRadius: 8,

    marginHorizontal: 4,

  },

  loanOptionTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 8,

  },

  loanOptionSubtitle: {

    fontSize: 14,

    color: '#8c8c8c',

  },

  loanOptionDescription: {

    fontSize: 12,

    color: '#ff4d4f',

    marginBottom: 8,

  },

  loanAmount: {

    fontSize: 12,

    color: '#8c8c8c',

  },

  loanAmountValue: {

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 8,

  },

  checkButton: {

    backgroundColor: '#ff4d4f',

    paddingVertical: 8,

    borderRadius: 4,

  },

  checkButtonText: {

    textAlign: 'center',

    color: 'white',

  },

  eLoanTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginTop: 16,

  },

  eLoanDescription: {

    fontSize: 14,

    color: '#8c8c8c',

  },

  eLoanSubDescription: {

    fontSize: 12,

    color: '#8c8c8c',

  },

});



export default CreditCardScreen;