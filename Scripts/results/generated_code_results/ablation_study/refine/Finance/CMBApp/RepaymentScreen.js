import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const RepaymentScreen = ({ navigation }) => {

  const [repaymentAmount, setRepaymentAmount] = useState('');



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Icon name="arrow-back" size={24} color="#000" />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>信用卡还款</Text>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="more-vert" size={24} color="#000" />

        </TouchableOpacity>

      </View>



      <View style={styles.accountInfo}>

        <Image source={require('../assets/snack-icon.png')} style={styles.bankLogo} />

        <View>

          <Text style={styles.accountTitle}>个人消费账户</Text>

          <View style={styles.autoRepayment}>

            <Text style={styles.autoRepaymentText}>自动还款</Text>

          </View>

        </View>

      </View>



      <Text style={styles.noRepaymentText}>无需还款 8月14日(27天后)出账</Text>



      <View style={styles.repaymentAmount}>

        <Text style={styles.repaymentLabel}>还款金额</Text>

        <TouchableOpacity style={styles.viewBillButton}>

          <Text style={styles.viewBillText}>查看账单 ></Text>

        </TouchableOpacity>

      </View>



      <View style={styles.inputContainer}>

        <Text style={styles.currencySymbol}>¥</Text>

        <TextInput

          style={styles.amountInput}

          placeholder="请输入金额"

          value={repaymentAmount}

          onChangeText={setRepaymentAmount}

          keyboardType="numeric"

        />

      </View>



      <TouchableOpacity style={styles.repayButton}>

        <Text style={styles.repayButtonText}>立即还款</Text>

      </TouchableOpacity>



      <View style={styles.footer}>

        <TouchableOpacity style={styles.footerItem}>

          <Icon name="info-outline" size={20} color="#007AFF" />

          <Text style={styles.footerText}>还款说明</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>

          <Text style={styles.footerText}>填写推荐人</Text>

        </TouchableOpacity>

      </View>



      <TouchableOpacity style={styles.addCardButton}>

        <Text style={styles.addCardText}>添加他人/他行卡</Text>

      </TouchableOpacity>

    </View>

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

    justifyContent: 'space-between',

    padding: 16,

    backgroundColor: '#FFF',

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  headerIcon: {

    width: 24,

    height: 24,

  },

  accountInfo: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    backgroundColor: '#FFF',

    marginTop: 10,

  },

  bankLogo: {

    width: 40,

    height: 40,

    marginRight: 10,

  },

  accountTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  autoRepayment: {

    backgroundColor: '#F0F0F0',

    borderRadius: 4,

    paddingHorizontal: 8,

    paddingVertical: 2,

    marginTop: 4,

  },

  autoRepaymentText: {

    fontSize: 12,

    color: '#666',

  },

  noRepaymentText: {

    fontSize: 14,

    color: '#4CAF50',

    padding: 16,

  },

  repaymentAmount: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 16,

  },

  repaymentLabel: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  viewBillButton: {

    padding: 8,

  },

  viewBillText: {

    color: '#007AFF',

    fontSize: 14,

  },

  inputContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 16,

    marginTop: 8,

  },

  currencySymbol: {

    fontSize: 24,

    fontWeight: 'bold',

    marginRight: 8,

  },

  amountInput: {

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

    color: '#FFF',

    fontSize: 18,

    fontWeight: 'bold',

  },

  footer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    paddingHorizontal: 16,

  },

  footerItem: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  footerText: {

    color: '#007AFF',

    marginLeft: 4,

  },

  addCardButton: {

    position: 'absolute',

    bottom: 16,

    left: 16,

    right: 16,

    backgroundColor: '#FFF',

    borderRadius: 8,

    padding: 16,

    alignItems: 'center',

  },

  addCardText: {

    color: '#000',

    fontSize: 16,

  },

});



export default RepaymentScreen;