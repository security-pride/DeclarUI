import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const RepaymentScreen = () => {

  const navigation = useNavigation();

  const [amount, setAmount] = useState('');



  const handleGoBack = () => {

    navigation.goBack();

  };



  const handleRepayment = () => {

    // Implement repayment logic here

    console.log('Repayment amount:', amount);

  };



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={handleGoBack}>

          <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>信用卡还款</Text>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.helpIcon} />

        </TouchableOpacity>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.moreIcon} />

        </TouchableOpacity>

      </View>



      <View style={styles.accountInfo}>

        <Image source={require('../assets/snack-icon.png')} style={styles.bankLogo} />

        <View style={styles.accountDetails}>

          <Text style={styles.accountName}>个人消费账户</Text>

          <View style={styles.autoRepaymentTag}>

            <Text style={styles.autoRepaymentText}>自动还款</Text>

          </View>

        </View>

      </View>



      <View style={styles.repaymentInfo}>

        <Text style={styles.repaymentStatus}>无需还款</Text>

        <Text style={styles.billingDate}>8月14日(27天后)出账</Text>

      </View>



      <View style={styles.amountInputContainer}>

        <Text style={styles.amountLabel}>还款金额</Text>

        <TouchableOpacity style={styles.viewBillButton}>

          <Text style={styles.viewBillText}>查看账单 ></Text>

        </TouchableOpacity>

      </View>



      <View style={styles.amountInput}>

        <Text style={styles.currencySymbol}>¥</Text>

        <TextInput

          style={styles.input}

          placeholder="请输入金额"

          placeholderTextColor="#999"

          keyboardType="numeric"

          value={amount}

          onChangeText={setAmount}

        />

      </View>



      <TouchableOpacity style={styles.repayButton} onPress={handleRepayment}>

        <Text style={styles.repayButtonText}>立即还款</Text>

      </TouchableOpacity>



      <View style={styles.footer}>

        <TouchableOpacity style={styles.footerItem}>

          <Text style={styles.footerItemText}>还款说明</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>

          <Text style={styles.footerItemText}>填写推荐人</Text>

        </TouchableOpacity>

      </View>



      <TouchableOpacity style={styles.addCardButton}>

        <Text style={styles.addCardButtonText}>添加他人/他行卡</Text>

      </TouchableOpacity>

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

    alignItems: 'center',

    padding: 16,

    backgroundColor: '#FFFFFF',

  },

  backIcon: {

    width: 24,

    height: 24,

  },

  headerTitle: {

    flex: 1,

    fontSize: 18,

    fontWeight: 'bold',

    textAlign: 'center',

  },

  helpIcon: {

    width: 24,

    height: 24,

    marginRight: 16,

  },

  moreIcon: {

    width: 24,

    height: 24,

  },

  accountInfo: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    backgroundColor: '#FFFFFF',

    marginTop: 8,

  },

  bankLogo: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 12,

  },

  accountDetails: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  accountName: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  autoRepaymentTag: {

    backgroundColor: '#F0F0F0',

    borderRadius: 4,

    paddingHorizontal: 6,

    paddingVertical: 2,

    marginLeft: 8,

  },

  autoRepaymentText: {

    fontSize: 12,

    color: '#666666',

  },

  repaymentInfo: {

    padding: 16,

    backgroundColor: '#FFFFFF',

  },

  repaymentStatus: {

    fontSize: 16,

    color: '#4CAF50',

    marginBottom: 4,

  },

  billingDate: {

    fontSize: 14,

    color: '#666666',

  },

  amountInputContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 16,

    paddingTop: 16,

  },

  amountLabel: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  viewBillButton: {

    padding: 4,

  },

  viewBillText: {

    fontSize: 14,

    color: '#007AFF',

  },

  amountInput: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 16,

    paddingVertical: 8,

  },

  currencySymbol: {

    fontSize: 24,

    fontWeight: 'bold',

    marginRight: 8,

  },

  input: {

    flex: 1,

    fontSize: 24,

    fontWeight: 'bold',

  },

  repayButton: {

    backgroundColor: '#FFC0CB',

    borderRadius: 8,

    padding: 16,

    margin: 16,

    alignItems: 'center',

  },

  repayButtonText: {

    color: '#FFFFFF',

    fontSize: 18,

    fontWeight: 'bold',

  },

  footer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    paddingHorizontal: 16,

    marginBottom: 16,

  },

  footerItem: {

    padding: 4,

  },

  footerItemText: {

    fontSize: 14,

    color: '#007AFF',

  },

  addCardButton: {

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

    padding: 16,

    alignItems: 'center',

  },

  addCardButtonText: {

    fontSize: 16,

    color: '#007AFF',

  },

});



export default RepaymentScreen;