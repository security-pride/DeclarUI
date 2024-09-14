import React, { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const RepaymentScreen = () => {

  const [amount, setAmount] = useState('');

  const navigation = useNavigation();



  const handleRepayment = () => {

    console.log('Repayment of', amount);

  };



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.navigate('CreditCard')}>

          <Icon name="arrow-back" size={24} color="#000" />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>信用卡还款</Text>

        <TouchableOpacity onPress={() => navigation.navigate('CustomService')}>

          <Icon name="headset" size={24} color="#000" />

        </TouchableOpacity>

      </View>



      <View style={styles.accountInfo}>

        <Image source={require('../assets/snack-icon.png')} style={styles.accountIcon} />

        <View>

          <Text style={styles.accountType}>个人消费账户</Text>

          <Text style={styles.accountStatus}>自动还款</Text>

        </View>

      </View>



      <Text style={styles.repaymentStatus}>无需还款 8月14日(27天后)出账</Text>



      <View style={styles.amountInputContainer}>

        <Text style={styles.currencySymbol}>¥</Text>

        <TextInput

          style={styles.amountInput}

          placeholder="请输入金额"

          keyboardType="numeric"

          value={amount}

          onChangeText={setAmount}

        />

      </View>



      <TouchableOpacity style={styles.repayButton} onPress={handleRepayment}>

        <Text style={styles.repayButtonText}>立即还款</Text>

      </TouchableOpacity>



      <View style={styles.additionalOptions}>

        <TouchableOpacity>

          <Text style={styles.optionText}>还款说明</Text>

        </TouchableOpacity>

        <TouchableOpacity>

          <Text style={styles.optionText}>填写推荐人</Text>

        </TouchableOpacity>

      </View>



      <TouchableOpacity style={styles.addCardOption}>

        <Text style={styles.addCardText}>添加他人/他行卡</Text>

      </TouchableOpacity>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#fff',

    padding: 16,

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 20,

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  accountInfo: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 20,

  },

  accountIcon: {

    width: 40,

    height: 40,

    marginRight: 10,

  },

  accountType: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  accountStatus: {

    fontSize: 14,

    color: '#666',

  },

  repaymentStatus: {

    fontSize: 16,

    color: '#4CAF50',

    marginBottom: 20,

  },

  amountInputContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    borderBottomWidth: 1,

    borderBottomColor: '#ccc',

    marginBottom: 20,

  },

  currencySymbol: {

    fontSize: 24,

    marginRight: 10,

  },

  amountInput: {

    flex: 1,

    fontSize: 24,

    padding: 10,

  },

  repayButton: {

    backgroundColor: '#FF9800',

    borderRadius: 25,

    padding: 15,

    alignItems: 'center',

    marginBottom: 20,

  },

  repayButtonText: {

    color: '#fff',

    fontSize: 18,

    fontWeight: 'bold',

  },

  additionalOptions: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 20,

  },

  optionText: {

    color: '#2196F3',

  },

  addCardOption: {

    borderTopWidth: 1,

    borderTopColor: '#ccc',

    paddingTop: 20,

    alignItems: 'center',

  },

  addCardText: {

    color: '#2196F3',

    fontSize: 16,

  },

});



export default RepaymentScreen;