import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { useNavigation } from '@react-navigation/native';



const CreditCardScreen = () => {

  const navigation = useNavigation();



  const handleHomePress = () => {

    navigation.navigate('Home');

  };



  const handleRepaymentPress = () => {

    navigation.navigate('Repayment');

  };



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={handleHomePress}>

          <Icon name="chevron-left" size={24} color="#000" />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>我的信用卡</Text>

        <TouchableOpacity>

          <Icon name="ellipsis-h" size={24} color="#000" />

        </TouchableOpacity>

      </View>



      <View style={styles.card}>

        <View style={styles.cardHeader}>

          <Image source={require('../assets/snack-icon.png')} style={styles.bankLogo} />

          <Text style={styles.accountType}>个人消费账户</Text>

          <Text style={styles.autoRepay}>自动还</Text>

        </View>

        <Text style={styles.noPayment}>无需还款</Text>

        <Text style={styles.billingDate}>8月14日(27天后)出账</Text>

        <View style={styles.balanceRow}>

          <Text style={styles.balanceLabel}>下期未出账单</Text>

          <TouchableOpacity>

            <Icon name="eye" size={18} color="#000" />

          </TouchableOpacity>

        </View>

        <Text style={styles.balance}>¥0.00</Text>

        <Text style={styles.availableCredit}>可用额度 ¥0.00</Text>

        <View style={styles.repaymentButtons}>

          <TouchableOpacity style={styles.installmentButton}>

            <Text style={styles.installmentText}>分期还款</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.repayButton} onPress={handleRepaymentPress}>

            <Text style={styles.repayText}>还款</Text>

          </TouchableOpacity>

        </View>

      </View>



      <View style={styles.quickActions}>

        {['卡片管家', '我的积分', '绑卡支付', '推荐有礼', 'i车一族'].map((action, index) => (

          <TouchableOpacity key={index} style={styles.actionItem}>

            <Icon name={getIconName(action)} size={24} color="#000" />

            <Text style={styles.actionText}>{action}</Text>

          </TouchableOpacity>

        ))}

      </View>



      <View style={styles.loanSection}>

        <Text style={styles.loanTitle}>我要借钱</Text>

        <View style={styles.loanOptions}>

          <TouchableOpacity style={styles.loanItem}>

            <Text style={styles.loanItemTitle}>预借现金</Text>

            <Text style={styles.loanItemSubtitle}>急用钱 随借随还</Text>

            <Text style={styles.loanItemDesc}>按日计息,还款灵活</Text>

            <Text style={styles.loanItemAmount}>可借额度</Text>

            <Text style={styles.loanItemValue}>0.00</Text>

            <TouchableOpacity style={styles.checkButton}>

              <Text style={styles.checkButtonText}>立即查看</Text>

            </TouchableOpacity>

          </TouchableOpacity>

          <View style={styles.loanItemDivider} />

          <View style={styles.loanItemRight}>

            <TouchableOpacity style={styles.loanItemSmall}>

              <Text style={styles.loanItemSmallTitle}>专享消费额度</Text>

              <Text style={styles.loanItemSmallDesc}>最高30万</Text>

              <Text style={styles.loanItemSmallSubDesc}>超100万人申请</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.loanItemSmall}>

              <Text style={styles.loanItemSmallTitle}>e招贷</Text>

              <Text style={styles.loanItemSmallDesc}>借现金分期还</Text>

              <Text style={styles.loanItemSmallSubDesc}>线上申请,快速放款</Text>

            </TouchableOpacity>

          </View>

        </View>

      </View>

    </View>

  );

};



const getIconName = (action) => {

  switch (action) {

    case '卡片管家': return 'credit-card';

    case '我的积分': return 'star';

    case '绑卡支付': return 'link';

    case '推荐有礼': return 'gift';

    case 'i车一族': return 'car';

    default: return 'circle';

  }

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

    padding: 16,

    backgroundColor: '#FFF',

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  card: {

    backgroundColor: '#FFF',

    margin: 16,

    borderRadius: 8,

    padding: 16,

  },

  cardHeader: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 8,

  },

  bankLogo: {

    width: 24,

    height: 24,

    marginRight: 8,

  },

  accountType: {

    fontSize: 16,

  },

  autoRepay: {

    fontSize: 12,

    color: '#888',

    marginLeft: 'auto',

  },

  noPayment: {

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 4,

  },

  billingDate: {

    fontSize: 14,

    color: '#888',

    marginBottom: 16,

  },

  balanceRow: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 4,

  },

  balanceLabel: {

    fontSize: 14,

    marginRight: 8,

  },

  balance: {

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 4,

  },

  availableCredit: {

    fontSize: 14,

    color: '#888',

    marginBottom: 16,

  },

  repaymentButtons: {

    flexDirection: 'row',

    justifyContent: 'space-between',

  },

  installmentButton: {

    flex: 1,

    backgroundColor: '#F0F0F0',

    padding: 12,

    borderRadius: 4,

    marginRight: 8,

    alignItems: 'center',

  },

  installmentText: {

    color: '#000',

  },

  repayButton: {

    flex: 1,

    backgroundColor: '#FF6B6B',

    padding: 12,

    borderRadius: 4,

    marginLeft: 8,

    alignItems: 'center',

  },

  repayText: {

    color: '#FFF',

  },

  quickActions: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    backgroundColor: '#FFF',

    padding: 16,

    marginBottom: 16,

  },

  actionItem: {

    alignItems: 'center',

  },

  actionText: {

    fontSize: 12,

    marginTop: 4,

  },

  loanSection: {

    backgroundColor: '#FFF',

    padding: 16,

  },

  loanTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 16,

  },

  loanOptions: {

    flexDirection: 'row',

  },

  loanItem: {

    flex: 1,

    backgroundColor: '#FFF5F5',

    borderRadius: 8,

    padding: 16,

  },

  loanItemTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 4,

  },

  loanItemSubtitle: {

    fontSize: 12,

    color: '#888',

    marginBottom: 8,

  },

  loanItemDesc: {

    fontSize: 12,

    color: '#FF6B6B',

    marginBottom: 16,

  },

  loanItemAmount: {

    fontSize: 12,

    color: '#888',

  },

  loanItemValue: {

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 16,

  },

  checkButton: {

    backgroundColor: '#FF6B6B',

    padding: 8,

    borderRadius: 4,

    alignItems: 'center',

  },

  checkButtonText: {

    color: '#FFF',

  },

  loanItemDivider: {

    width: 1,

    backgroundColor: '#E0E0E0',

    marginHorizontal: 8,

  },

  loanItemRight: {

    flex: 1,

  },

  loanItemSmall: {

    backgroundColor: '#F0F0F0',

    borderRadius: 8,

    padding: 12,

    marginBottom: 8,

  },

  loanItemSmallTitle: {

    fontSize: 14,

    fontWeight: 'bold',

    marginBottom: 4,

  },

  loanItemSmallDesc: {

    fontSize: 12,

    color: '#888',

  },

  loanItemSmallSubDesc: {

    fontSize: 10,

    color: '#888',

  },

});



export default CreditCardScreen;